// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {Snippet} from './snippetGenerator';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "inlinelatex2readme" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let convertMDSnippetCommand = vscode.commands.registerCommand('inlinelatex2readme.convertMDSnippet', () => {
		// The code you place here will be executed every time your command is executed

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			// Display a message box to the user
			vscode.window.showInformationMessage('Cannot find any editor. Please open file first.');
			return;
		}

		const selections = editor.selections;
		const selectionStart = selections[0].start; // works for a single selected text area.
		const selectionEnd = selections[0].end;
		const range = new vscode.Range(selectionStart, selectionEnd);
		const selectedText = editor.document.getText(range);

		const MDsnippet = new Snippet(selectedText);
		const fomularSnippet = MDsnippet.generate();
		editor.edit(edit => edit.replace(range, fomularSnippet));
	});

	let revertMDSnippetCommand = vscode.commands.registerCommand('inlinelatex2readme.revertMDSnippet', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			// Display a message box to the user
			vscode.window.showInformationMessage('Cannot find any editor. Please open file first.');
			return;
		}

		const selections = editor.selections;
		const selectionStart = selections[0].start; // works for a single selected text area.
		const selectionEnd = selections[0].end;
		const range = new vscode.Range(selectionStart, selectionEnd);
		const selectedText = editor.document.getText(range);
		
		const MDsnippet = new Snippet(selectedText);
		const originalFomularString = MDsnippet.revert();
		
		if (originalFomularString) {
			editor.edit(edit => edit.replace(range, originalFomularString));
		} else {
			vscode.window.showInformationMessage('Failed to revert.');
		}
	});

	context.subscriptions.push(convertMDSnippetCommand);
	context.subscriptions.push(revertMDSnippetCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}
