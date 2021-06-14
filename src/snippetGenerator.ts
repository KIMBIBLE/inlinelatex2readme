import { decode } from "punycode";

export class Snippet {
    static whitespaceChars: Array<string> = [' ', '\t', '\n'];
    static googleChartAPIURL: string = 'https://chart.apis.google.com/chart';

    private _userSelectedText: string;
    private _encodedFomular: string;
    private _decodedFomular: string;

    constructor(userSelectedText: string) {
        this._userSelectedText = userSelectedText;
        this._encodedFomular = '';
        this._decodedFomular = '';
    }

    private encodeSelectedTextToURIFomat() {
        for (let ch of this._userSelectedText) {
            if (Snippet.whitespaceChars.includes(ch)) {
                this._encodedFomular += encodeURIComponent('\\');
            }

            this._encodedFomular += encodeURIComponent(ch);
        }
    }

    private trimWhiteSpace(revertedSnippet: string) {
        for (let ch of revertedSnippet) {
            if (Snippet.whitespaceChars.includes(ch)) {
                // Delete escape sequence
                this._decodedFomular = this._decodedFomular.slice(0, -1)
            } 

            this._decodedFomular += decodeURIComponent(ch)
        }
    }

    public generate() {
        this.encodeSelectedTextToURIFomat();
        let convertedFomularSnippet: string = `<img src="${Snippet.googleChartAPIURL}?cht=tx&chl=${this._encodedFomular}" />`;
        console.log(convertedFomularSnippet);

        return convertedFomularSnippet;
    }

    public revert() {
        let decodedResult = decodeURIComponent(this._userSelectedText);
        let revertedSnippet = decodedResult.match(/&chl=(.*)" \/>/)?.[1];
        if (revertedSnippet) {
            this.trimWhiteSpace(revertedSnippet);
        } else {
            return "";
        }
        
        return this._decodedFomular;
    }
}