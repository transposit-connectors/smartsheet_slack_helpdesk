# Smartsheet Slack Helpdesk

A Slackbot helper that lets users in a Slack workspace create helpdesk tickets in Smartsheet, based on the [IT Request Management Template](https://www.smartsheet.com/marketplace/templates/it-request-management) by Smartsheet.

## Setup

[Fork this app on Transposit](https://console.transposit.com/t/transposit-sample/smartsheet_slack_helpdesk?fork=true)

#### Create a Slack app

1. Create an app at [https://api.slack.com/apps](https://api.slack.com/apps)
2. Add a Slash command (See _Add a Slash Command_ section below)
3. Navigate to **Bot Users** and click "Add a Bot User" to create one. Name it whatever you would like.
4. Enable Interactive components (See _Enable Interactive Components_ below)
5. Navigate to the **OAuth & Permissions** page and make sure the following scopes are pre-selected:
   - `commands`
   - `bot`
   - `chat:write:bot`
6. Add https://accounts.transposit.com/oauth/v2/handle-redirect as a Redirect URI.
7. Navigate to **Slash Commands** and click the 'Create New Command' button and fill in the following:
   - Command: `/helpdesk`
   - Request URL: the generated webhook url for `create_ticket` in Transposit under Deploy
   - Short description: `Create a helpdesk ticket`
   - Usage hint: `[the problem you're having]`
8. Navigate to **Interactive Components**.
9. Set the Request URL to the generated webhook url for `submit_ticket` in Transposit under Deploy
10. Click 'Save Changes' and install the app to your workspace.

#### Create your Database in Smartsheet

1. If you are new to Smartsheet, check out their [Learning Center](https://help.smartsheet.com/).
2. Download the [IT Request Management Template](https://www.smartsheet.com/marketplace/templates/it-request-management) to your Smartsheet account.
3. In the sheet, click \*_File > Properties..._ and copy the value for _Sheet ID_.

#### Fork in Transposit

1. Authenticate Slack's API token with the Client ID and Secret under **Data connections > Slack > Authentication**. You can find this in your Slack App under App Credentials.
2. Add Smartsheet and Slack's keys to production under **Deploy > Production Keys** and follow the instructions.
3. Copy the _Sheet ID_ from Smartsheet into [environment variables](https://www.transposit.com/docs/building/environment-variables/) in **Deploy**.

### Transposit Functions

`add_rows`: Smartsheet API call to create a new ticket.

`confirm_ticket`: Contains the data to send a confirmation message back to a slack user.

`create_ticket`: The webhook function that is called after a slash command

`open_dialog`: API call for Slack to open a dialog.

`submit_ticket`: Webhook that is called when the dialog button is pushed.
