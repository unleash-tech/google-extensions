function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Unleash")
    .addItem("Setup", "showSetupDialog")
    .addToUi();
}

function showSetupDialog() {
  const ui = SpreadsheetApp.getUi();
  const docProperties = PropertiesService.getDocumentProperties();

  const accountResult = ui.prompt(
    "Setup Unleash",
    "Your Unleash Account",
    ui.ButtonSet.OK_CANCEL
  );
  if (accountResult.getSelectedButton() === ui.Button.OK) {
    docProperties.setProperty(
      "unleashAccount",
      accountResult.getResponseText()
    );
  }

  const tokenResult = ui.prompt(
    "Setup Unleash",
    "Your Unleash API Key:",
    ui.ButtonSet.OK_CANCEL
  );
  if (tokenResult.getSelectedButton() === ui.Button.OK) {
    docProperties.setProperty("apiToken", tokenResult.getResponseText());
  }
}

function UNLEASH(columnLetter, assistantId) {
  const docProperties = PropertiesService.getDocumentProperties();
  const token = docProperties.getProperty("apiToken");
  const unleashAccount = docProperties.getProperty("unleashAccount");

  if (!token || !unleashAccount) {
    return "Please configure your Unleash credentials.";
  }

  // Get the active sheet and the row where the formula is being executed
  const sheet = SpreadsheetApp.getActiveSpreadsheet()?.getActiveSheet();
  const row = SpreadsheetApp.getActiveRange()?.getRow();
  const cell = sheet?.getRange(`${columnLetter}${row}`);
  const inputValue = cell?.getValue();

  if (!inputValue) {
    return "No input";
  }

  const payload = JSON.stringify({ query: inputValue, assistantId });

  const request = {
    url: "https://e-api.unleash.so/answers",
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "unleash-account": unleashAccount,
    },
    payload,
  };

  try {
    const response = UrlFetchApp.fetch(request.url, request);
    const result = JSON.parse(response.getContentText());
    const content = result.answer;
    return content || "No response";
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
