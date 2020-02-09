<h1 align="center">
  ilikesticker.com Crawler
</h1>

## 🚀 Installation

1. **Install package**

   ```shell
   npm install
   ```
2. **Config Enviroment**
  Open index.js file
    ```js
    const url       = ""; // Url to animated sticker
    const path      = "./sticker/"; // Path to folder where sticker will save
    const naming    = "cat_"; // File name
    var index       = 0; // Index that will join will file name
    const extension = ".gif"; // File Extension
    ```
3. **Run Download Process**
    ```shell
    node index.js
    ```