import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import {SnippetGenerator} from '../../snippetGenerator';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');
	const formulars = [
		{
			original: `n \\gt m`,
			result: `<img src="https://chart.apis.google.com/chart?cht=tx&chl=n%5C%20%5Cgt%5C%20m" />`
		},
		{
			original: `(a - b) \\bmod c = (a \\bmod c - b \\bmod c + c) \\bmod c`,
			result: `<img src="https://chart.apis.google.com/chart?cht=tx&chl=(a%5C%20-%5C%20b)%5C%20%5Cbmod%5C%20c%5C%20%3D%5C%20(a%5C%20%5Cbmod%5C%20c%5C%20-%5C%20b%5C%20%5Cbmod%5C%20c%5C%20%2B%5C%20c)%5C%20%5Cbmod%5C%20c" />`
		}
	];

	suite('SnippetGenerator', () => {
		test('should match string.', () => {
			for(let formular of formulars) {
				let snippetGenerator = new SnippetGenerator(formular.original);
				let generatedSnippet = snippetGenerator.generate();

				assert.strictEqual(generatedSnippet, formular.result);

			}
		})
	})
});

