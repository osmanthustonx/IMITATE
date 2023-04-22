## 專案架構

此架構是參考 [Atom design](http://bradfrost.com/blog/post/atomic-web-design/) 和 [Fractal Project Structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) 所整理出來

> 註： atom design 裡的 Template 是這裡的 Layout，而 Page 則是在 routes 資料夾下

components 架構定義

- src
  - components
    - **atom**: 原子 component ，不可再分割的基本 component， ex `button`, `label`, `html tag`
    - **molecules**: 分子 component，由原子組成的基本 component， ex `地址輸入欄位` (包含 `label`, `input`, `button` 等)
    - **organisms**: 組織 component，由原子、分子組成的多功能 component， ex `header`, `footer`