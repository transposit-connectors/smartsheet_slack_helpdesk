# Smartsheet Slack Helpdesk
# Smartsheet Slack helpdesk app

A Slackbot helper that lets users in a Slack workspace create helpdesk tickets in Smartsheet, based on the [IT Request Management Template](https://www.smartsheet.com/marketplace/templates/it-request-management) by Smartsheet.

## Setup

[Fork this app on Transposit](https://console.transposit.com/t/transposit-sample/smartsheet_slack_helpdesk?fork=true)

#### Create a Slack app

1. Create an app at [https://api.slack.com/apps](https://api.slack.com/apps)
2. Add a Slash command (See _Add a Slash Command_ section below)
3. Navigate to **Bot Users** and click "Add a Bot User" to create one.
4. Enable Interactive components (See _Enable Interactive Components_ below)
5. Navigate to the **OAuth & Permissions** page and make sure the following scopes are pre-selected:
   - `commands`
   - `bot`
   - `chat:write:bot`
6. Add https://accounts.transposit.com/oauth/v2/handle-redirect as a Redirect URI.
7. Click 'Save Changes' and install the app (You should get an OAuth access token after the installation)

#### Add a Slash Command

1. Go back to the app settings and click on Slash Commands.
1. Click the 'Create New Command' button and fill in the following:
   - Command: `/helpdesk`
   - Request URL: the generated webhook url for `create_ticket` in Transposit under Deploy
   - Short description: `Create a helpdesk ticket`
   - Usage hint: `[the problem you're having]`

#### Enable Interactive Components

1. Go back to the app settings and click on Interactive Components.
2. Set the Request URL to the generated webhook url for `submit_ticket` in Transposit under Deploy
3. Save the change.

#### Create your Database in Smartsheet

1. If you are new to Smartsheet, check out their [Learning Center](https://help.smartsheet.com/).
2. Download the [IT Request Management Template](https://www.smartsheet.com/marketplace/templates/it-request-management) to your Smartsheet account.

#### Fork in Transposit

1. Authenticate Slack's API token with the Client ID and Secret under **Data connections > Slack > Authentication**. You can find this in your Slack App under App Credentials.
2. Add Smartsheet and Slack's keys to development under **Code > Auth & Settings** and follow the instructions.
3. Repeat the above step, but for production, under **Deploy > Production Keys**.
4. Find your Smartsheet sheet id by running `list_sheets`.
5. Copy the Smartsheet id value to [environment variables](https://www.transposit.com/docs/building/environment-variables/) in **Deploy**.

### Transposit Functions

`add_rows`: Smartsheet API call to create a new ticket.

`confirm_ticket`: Contains the data to send a confirmation message back to a slack user.

`create_ticket`: The webhook function that is called after a slash command

`get_email`: Helper function to get the email of a Slack user.

`list_columns`: Helper function to find the column ids in Smartsheet.

`list_sheets`: Helper function to find your sheet id in Smartsheet.

`open_dialog`: API call for Slack to open a dialog.

`submit_ticket`: Webhook that is called when the dialog button is pushed.
