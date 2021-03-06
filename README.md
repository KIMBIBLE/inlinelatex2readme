# inlinelatex2readme

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/KIMBIBLE/inlinelatex2readme/CI) [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/bbkim.inlinelatex2readme)](https://marketplace.visualstudio.com/items?itemName=bbkim.inlinelatex2readme)

> Convert Latex Fomular to Inline Snippet for Github Readme File.


<br/>

## ✏️&ensp; Usage
---

1. Select the latex code block which you want to convert to inline fomular.

2. `Right-click` on the selected block and select `Convert Latex Formular To Markdown Snippet` from the drop-down menus that appear.

3. Conversion is completed as follows.

</br><p align="center"><img src="./gif/demo_record.gif" /></p>

<br/>

## 🌱&ensp; How Does the Plugin Works?
---

> [Github/markup](https://github.com/github/markup) currently does not officially support the Inline equation. Therefore, this plugin is designed to help users conveniently insert math formulas in an inline manner when writing Github README files.

<br/>Currently, there are various ways to insert Inline Formular into the Github README file (using render.githubusercontent.com, projects such as [readme2tex](https://github.com/leegao/readme2tex)). However, these methods are rendered in `black text color without background color`. Therefore, the Inline formular created by the above methods(<img src="https://render.githubusercontent.com/render/math?math=e^{i +\pi} =x+1">) has a disadvantage of poor readability in Github `Dark-mode`.

</br>`inlinelatex2readme` solves this problem by utilizing `Google Chart API` that [supports TeX language](https://developers.google.com/chart/infographics/docs/formulas) and [user defined text/background color](https://developers.google.com/chart/image/docs/chart_params). This extension properly encodes the text selected by the user and converts it into an `html tag` snippet as shown in the following example.

* Example Fomular 1: <!-- E = mc^2 --> <img src="https://chart.apis.google.com/chart?cht=tx&chl=E%5C%20%3D%5C%20mc%5E2" />

    ```html
    <!-- E = mc^2 -->
    <img src="https://chart.apis.google.com/chart?cht=tx&chl=E%5C%20%3D%5C%20mc%5E2" />
    ```

* Example Fomular 2: <!-- a \equiv r \bmod c --> <img src="https://chart.apis.google.com/chart?cht=tx&chl=a%5C%20%5Cequiv%5C%20r%5C%20%5Cbmod%5C%20c" />

    ```html
    <!-- a \equiv r \bmod c -->
    <img src="https://chart.apis.google.com/chart?cht=tx&chl=a%5C%20%5Cequiv%5C%20r%5C%20%5Cbmod%5C%20c" />
    ```


<br/>

## ⏳&ensp; Release Notes
---

### 0.1.x

* `0.1.3`: Update [Fomular Revert](https://github.com/KIMBIBLE/inlinelatex2readme/issues/6) Function .

* `0.1.2`: Created a Github Action CI/CD pipeline for continuous deployment to the vscode extension marketplace.

* `0.1.1`: Add Unit Test Logic.

* `0.1.0`
  * Fix bug for [Issue #1](https://github.com/KIMBIBLE/inlinelatex2readme/issues/1): An unwanted newline character is included in the generated inline formula link snippet.

### 0.0.x

* `0.0.1`: Initial release of inline latex snippet generator for github readme file.

