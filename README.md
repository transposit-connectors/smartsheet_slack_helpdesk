# Smartsheet Slack helpdesk app

A Slackbot helper that lets users in a Slack workspace create helpdesk tickets in Smartsheet

## Setup

[Fork this app on Transposit](https://console.transposit.com/t/transposit-sample/smartsheet_slack_helpdesk?readme=true)

#### Create a Slack app

1. Create an app at [https://api.slack.com/apps](https://api.slack.com/apps)
2. Add a Slash command (See _Add a Slash Command_ section below)
3. Navigate to **Bot Users** and click "Add a Bot User" to create one.
4. Enable Interactive components (See _Enable Interactive Components_ below)
5. Navigate to the **OAuth & Permissions** page and make sure the following scopes are pre-selected:
   - `commands`
   - `bot`
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

1. Create a new sheet in Smartsheet. If you are new to Smartsheet, check out their [Learning Center](https://help.smartsheet.com/).
2. Modify your sheet to have seven columns.
   - First column is the title with unchangeable type **Text/Number**
   - Second column is the ticket number with type **Auto-Number**
   - Third column is the user column with type **Contact List**
   - Fourth column is the date created with type **Auto-Number/System... Created (Date)**
   - Fifth column is the description with type **Text/Number**
   - Sixth column is urgency with type **Symbols... RYGB Balls**
   - Seventh column is the status with type **Dropdown List...**

#### Fork in Transposit

1. Authenticate your API token with Slack
2. Authenticate slackbot's API token with the Client iD in your Slack App under Authentication
3. Find your Smartsheet sheet id by running `list_sheets` and copying the id value to environment variables.

### Transposit Functions

`add_rows`: Smartsheet API call to create a new ticket.

`confirm_ticket`: Contains the data to send a confirmation message back to a slack user.

`create_ticket`: The webhook function that is called after a slash command

`get_email`: Helper function to get the email of a Slack user.

`list_columns`: Helper function to find the column ids in Smartsheet.

`list_sheets`: Helper function to find your sheet id in Smartsheet.

`open_dialog`: API call for Slack to open a dialog.

`submit_ticket`: Webhook that is called when the dialog button is pushed.
