# Smartsheet Slack Helpdesk

A Slackbot helper that lets users in a Slack workspace create helpdesk tickets in Smartsheet, based on the [IT Request Management Template](https://www.smartsheet.com/marketplace/templates/it-request-management) by Smartsheet.

## Setup

[Fork this app on Transposit](https://console.transposit.com/t/transposit-sample/smartsheet_slack_helpdesk?fork=true)

#### Create a Slack app

1. Create an app at [https://api.slack.com/apps](https://api.slack.com/apps)

2. Add a Slash command:

   1. Go back to the app settings and click on Slash Commands.
   1. Click the 'Create New Command' button and fill in the following:
      - Command: `/helpdesk`
      - Request URL: the generated webhook url for `create_ticket` in Transposit under Deploy
      - Short description: `Create a helpdesk ticket`
      - Usage hint: `[the problem you're having]`

3. Navigate to **Bot Users** and click "Add a Bot User":

   1. Name the bot whatever you would like and click "Add Bot User" to create one.

4. Enable Interactive components:

   1. Go back to the app settings and click on Interactive Components.
   2. Turn on the Interactivity switch.
   3. Set the Request URL to the generated webhook url for `submit_ticket` in Transposit under Deploy.
   4. Save the change.

5. Navigate to the **OAuth & Permissions** page:
   1. Make sure the following scopes are pre-selected:
      - `commands`
      - `bot`
      - `chat:write:bot`
   2. Add https://accounts.transposit.com/oauth/v2/handle-redirect as a Redirect URI.
   3. Click 'Save Changes' and then click "Install App to Workspace".

#### Create your Database in Smartsheet

1. If you are new to Smartsheet, check out their [Learning Center](https://help.smartsheet.com/).
2. Download the [IT Request Management Template](https://www.smartsheet.com/marketplace/templates/it-request-management) to your Smartsheet account.

#### Connect Smartsheet and Slack in Transposit

1. Configure your Slack App's connection to Transposit:

   1. Find your Client ID and Secret in your Slack app under **Basic Information > App Credentials**.
   2. In your Transposit app, go to **Data connections > Slack > Authentication** and change the values to your Slack app's Client ID and Secret.

2. Configure your Smartsheet's connection to Transposit:

   3. In your Smartsheet sheet, click \*_File > Properties..._ and copy the value for _Sheet ID_.
   4. Add the Sheet ID value to [environment variables](https://www.transposit.com/docs/building/environment-variables/) in Transposit under **Deploy > Environment Variables**.

3. Add Smartsheet and Slack's keys to production under **Deploy > Production Keys** and follow the instructions.

### Try it out!

1. Type your new slash command in your Slack workspace: you should get a dialog box allowing you to create a new help ticket.
2. After creating the ticket, you should get a message from your bot telling you the ticket has been created.
3. Refresh your Smartsheet: your new ticket should be there!

### Transposit Functions

`add_rows`: Smartsheet API call to create a new ticket.

`confirm_ticket`: Contains the data to send a confirmation message back to a slack user.

`create_ticket`: The webhook function that is called after a slash command

`open_dialog`: API call for Slack to open a dialog.

`submit_ticket`: Webhook that is called when the dialog button is pushed.
