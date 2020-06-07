const vscode = require('vscode');
const impFile = require("./commands.js");


exports.activate = activate;
module.exports = {
	activate,
	deactivate
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Extension "iiq-dev-accelerator" is now active');
  
	let disposableImportFile = vscode.commands.registerCommand('iiq-dev-accelerator.importFile', impFile.importFile);
  context.subscriptions.push(disposableImportFile);

	let disposableRunTask = vscode.commands.registerCommand('iiq-dev-accelerator.runTask', impFile.runTask);
  context.subscriptions.push(disposableRunTask);

	let disposableRunTaskWithAttr = vscode.commands.registerCommand('iiq-dev-accelerator.runTaskWithAttr', impFile.runTaskWithAttr);
  context.subscriptions.push(disposableRunTaskWithAttr);

	let disposableRunRule = vscode.commands.registerCommand('iiq-dev-accelerator.runRule', impFile.runRule);
  context.subscriptions.push(disposableRunRule);

	let disposableEvalBS = vscode.commands.registerCommand('iiq-dev-accelerator.evalBS', impFile.evalBS);
  context.subscriptions.push(disposableEvalBS);

	let disposableReloadLog = vscode.commands.registerCommand('iiq-dev-accelerator.reloadLog', impFile.reloadLog);
  context.subscriptions.push(disposableReloadLog);
  
}

function deactivate() {}



