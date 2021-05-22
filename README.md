# inlinelatex2readme

> Convert Latex Fomular to Inline Snippet for Github Readme File.


<br/>

## :pencil2: Usage
---

1. Inline fomular로 변환하고 싶은 latex 코드를 선택하세요.

2. 선택한 블록을 대상으로 마우스 오른쪽 버튼을 클릭했을 때, 보이는 드롭다운 메뉴들 중 xxx를 선택하세요.

3. 다음과 같이 변환이 완료됩니다.

</br><p align="center"><img src="./gif/demo_record.gif" /></p>

<br/>

## 🌱&ensp; How Does the Plugin Works?
---


<br/>[Github/markup]()는 현재 Inline equation을 공식적으로 지원하고 있지 않습니다. 따라서 이 플러그인은 사용자가 Github README 파일을 작성할 때, 수학 공식을 Inline 형태로 편리하게 삽입할 수 있도록 도움을 주기 위해 제작되었습니다. 

현 시점에서, Github README 파일에 Inline Formular를 삽입하는 다양한 방법(`render.githubusercontent.com`을 활용, `readme2tex` 등의 프로젝트)들이 있습니다. 하지만 이러한 방법들은 background color 없는 검은색 text color 형태로 렌더링(<img src="https://render.githubusercontent.com/render/math?math=e^{i +\pi} =x+1">)되기 때문에 Github Dark-mode에서는 가독성이 떨어지는 단점이 있습니다.

`inlinelatex2readme`는 이와 같은 문제를 TeX language와 user defined text/background color을 지원하는 Google Chart API를 활용하여 해결합니다. 이 Extension은 사용자가 선택한 text를 적절히 인코딩하여, 다음의 예시와 같이 html tag 형태의 snippet으로 변환합니다.

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


