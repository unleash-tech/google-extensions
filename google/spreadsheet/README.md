# Unleash Assistant Integration for Google Sheets

Effortlessly integrate Unleash AI assistants with Google Sheets using this Google Apps Script, enabling you to process cell content directly through Unleash's AI capabilities.

### Key Capabilities

- **Process Multiple Cells**: Handle multiple cells in a single operation effortlessly.
- **Error Notifications**: Receive detailed error messages to quickly identify and resolve issues.

## Installation

1. Copy the content of `unleash-apps-script.js`.
2. Open your Google Spreadsheet.
3. Navigate to `Extensions > Apps Script`.
4. Delete any pre-existing code in the script editor.
5. Paste the copied script into the editor.
6. Save the project (`Ctrl/Cmd + S`).
7. Refresh your spreadsheet to complete the installation.

## Configuration

Before using the script, set up your Unleash credentials:

1. Click on the new "Unleash" option in the spreadsheet menu.
2. Click on "Setup" from the dropdown menu.
3. Input the following details:
   - **Unleash Account**
   - **Unleash API Key** (generate one at [Unleash API Key](https://app.unleash.so/settings/api-key))

## How to Use

1. Select the cells you want to process
2. Call the `UNLEASH()` function with the following arguments:
   - **Question Column**: The column containing your questions (e.g., "A").
   - **Assistant ID**: Optional parameter for specifying a specific assistant.

## Prerequisites

To use the script, you’ll need:

- A valid Unleash account with an API key.
- Access to Google Sheets.
- Script authorization (prompted automatically on first use).

## Required Permissions

This script requires the following permissions to function:

- Access to read and modify spreadsheet data.
- Internet connectivity to communicate with the Unleash API.
- Secure storage for credentials via Script Properties.

## Common Issues and Resolutions

- **Invalid Credentials**: Ensure your API key and account details are correctly configured in the Setup menu.
- **Invalid Input**: Verify that you’ve selected appropriate cells for processing.
- **Column Errors**: Ensure the specified column uses valid alphabetic letters (A-Z).

## Data Protection

Your Unleash credentials are securely stored in Google’s Script Properties, ensuring they are only accessible within the spreadsheet where the script is active.
