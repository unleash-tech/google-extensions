# Unleash Assistant for Google Sheets

This Google Apps Script allows you to easily integrate Unleash AI assistants with Google Sheets, enabling you to process cell content through Unleash assistants directly from your spreadsheet.

## Installation

1. Copy the content of unleash-apps-script.js
2. Open your Google Spreadsheet
3. Go to `Extensions > Apps Script`
4. Delete any existing code in the editor
5. Copy and paste the entire script content into the editor
6. Save the project (Ctrl/Cmd + S)
7. Refresh your Google Spreadsheet

## Setup

Before using the script, you need to configure your Unleash credentials:

1. Click on the new "Unleash" menu item in your spreadsheet
2. Select "Setup"
3. Enter your:
   - Unleash Account
   - Unleash API Key (generate one at app.unleash.so/settings/api-key)

## Usage

### Basic Operation

1. Select the cells you want to process
2. Call the UNLEASH() function with the following arguments:
   - Question Column (e.g., "A")
   - Assistant ID (optional)

### Features

- **Batch Processing**: Process multiple cells at once
- **Progress Tracking**: Monitor processing progress in real-time
- **Error Handling**: Clear error messages if something goes wrong

## Requirements

- An unleash account with API access
- Google Sheets access
- Script authorization (you'll be prompted on first use)

## Permissions

The script requires the following permissions:

- Read/write access to your spreadsheet
- Internet access (to communicate with Unleash API)
- Script properties storage (to save your credentials)

## Limitations

- API rate limits apply based on your Unleash plan
- Processing time increases with the number of cells
- Maximum cell content length is determined by Unleash API limits

## Troubleshooting

If you encounter issues:

1. Verify your credentials in the Setup
2. Check if you have selected valid input cells
3. Ensure the target column is a valid letter (A-Z)
4. Check the browser console for detailed error messages

## Security Note

Your Unleash credentials are stored securely in Google's Script Properties and are only accessible within your spreadsheet.

## Contributing

Feel free to submit issues and enhancement requests through the GitHub repository.
