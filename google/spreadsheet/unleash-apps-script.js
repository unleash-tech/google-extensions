function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Unleash")
    .addItem("Setup", "showSetupDialog")
    .addToUi();
}

function showSetupDialog() {
  const ui = SpreadsheetApp.getUi();
  const docProperties = PropertiesService.getDocumentProperties();

  const tokenResult = ui.prompt(
    "Setup Unleash",
    "Your Unleash API Key:",
    ui.ButtonSet.OK_CANCEL
  );
  if (tokenResult.getSelectedButton() === ui.Button.OK) {
    docProperties.setProperty("apiToken", tokenResult.getResponseText());
  }
}

function UNLEASH(assistantId, columnLetter) {
  const docProperties = PropertiesService.getDocumentProperties();
  const token = docProperties.getProperty("apiToken");

  if (!token) {
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

  const payload = JSON.stringify({ messages: [{text: inputValue, role: 'User'}], assistantId });

  const request = {
    url: "https://e-api.unleash.so/chats",
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    payload,
  };

  try {
    const response = UrlFetchApp.fetch(request.url, request);
    const result = JSON.parse(response.getContentText());
    const messages = result?.message?.parts?.filter(p => p.type === "text")?.map(part => part.text)?.join(' ');
    return messages || "No response";
  } catch (error) {
    return `Error: ${error.message}`;
  }
}