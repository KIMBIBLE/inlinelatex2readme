export class SnippetGenerator {
    static whitespaceChars: Array<string> = [' ', '\t', '\n'];
    static googleChartAPIURL: string = 'https://chart.apis.google.com/chart';

    private _userSelectedText: string;
    private _encodedFomular: string;

    constructor(userSelectedText: string) {
        this._userSelectedText = userSelectedText;
        this._encodedFomular = '';
    }

    private encodeTextToURIFomat() {
        for (let ch of this._userSelectedText) {
            if (SnippetGenerator.whitespaceChars.includes(ch)) {
                this._encodedFomular += encodeURIComponent('\\');
            }

            this._encodedFomular += encodeURIComponent(ch);
        }
    }

    public generate() {
        this.encodeTextToURIFomat();
        let convertedFomularSnippet = `<img src="${SnippetGenerator.googleChartAPIURL}?cht=tx&chl=${this._encodedFomular}" />`;

        return convertedFomularSnippet;
    }
}