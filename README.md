bbbb# inlinelatex2readme

> Convert Latex Fomular to Inline Snippet for Github Readme File.


<br/>

## :pencil2: Usage
---

1. Select the latex code block which you want to convert to inline fomular.

2. `Right-click` on the selected block and select `Generate Markdown Snippet` from the drop-down menus that appear.

3. Conversion is completed as follows.

</br><p align="center"><img src="./gif/demo_record.gif" /></p>

<br/>

## 🌱&ensp; How Does the Plugin Works?
---

> [Github/markup](https://github.com/github/markup) currently does not officially support the Inline equation. Therefore, this plugin is designed to help users conveniently insert math formulas in an inline manner when writing Github README files.

<br/>Currently, there are various ways to insert Inline Formular into the Github README file (using render.githubusercontent.com, projects such as [readme2tex](https://github.com/leegao/readme2tex)). However, these methods are rendered in `black text color without background color`. Therefore, the Inline formular created by the above methods(<img src="https://render.githubusercontent.com/render/math?math=e^{i +\pi} =x+1">) has a disadvantage of poor readability in Github `Dark-mode`.

</br>`inlinelatex2readme` solves this problem by utilizing `Google Chart API` that [supports TeX language](https://developers.google.com/chart/infographics/docs/formulas) and [user defined text/background color](https://developers.google.com/chart/image/docs/chart_params). This extension properly encodes the text selected by the user and converts it into an `html tag` snippet as shown in the following example.

* Example Fomular 1: <!-- E = mc^2 -->
<img src="https://chart.apis.google.com/chart?cht=tx&chl=E%5C%20%3D%5C%20mc%5E2" />

    ```html
    <!-- E = mc^2 -->
    <img src="https://chart.apis.google.com/chart?cht=tx&chl=E%5C%20%3D%5C%20mc%5E2" />
    ```

* Example Fomular 2: <!-- a \equiv r \bmod c -->
<img src="https://chart.apis.google.com/chart?cht=tx&chl=a%5C%20%5Cequiv%5C%20r%5C%20%5Cbmod%5C%20c" />

    ```html
    <!-- a \equiv r \bmod c -->
    <img src="https://chart.apis.google.com/chart?cht=tx&chl=a%5C%20%5Cequiv%5C%20r%5C%20%5Cbmod%5C%20c" />
    ```


<br/>

## :hourglass_flowing_sand: Release Notes
---

### 0.0.1

Initial release of inline latex snippet generator for github readme file.


