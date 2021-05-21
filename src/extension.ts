// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "inlinelatex2readme" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('inlinelatex2readme.convertMDSnippet', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from inlinelatex2readme!');
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage('Cannot find any editor. Please open file first.');
			return;
		}

		const selections = editor.selections;
		const selectionStart = selections[0].start; // works for a single selected text area.
		const selectionEnd = selections[0].end;
		const range = new vscode.Range(selectionStart, selectionEnd);
		const selectedText = editor.document.getText(range);


		const whitespaceChars = [' ', '\t', '\n'];
		let fomular: string = selectedText;
		let encodedFomular = ' ';

		for (let ch of fomular) {
			if (whitespaceChars.includes(ch)) {
				encodedFomular += encodeURIComponent('\\');
			}

			encodedFomular += encodeURIComponent(ch);
		}

		let convertedFomularSnippet = `<img src="https://chart.apis.google.com/chart?cht=tx&chl=${encodedFomular}" />`;
		let textToReplace = `<!-- ${fomular} -->\n` + convertedFomularSnippet;
		editor.edit(edit => edit.replace(range, textToReplace));
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
