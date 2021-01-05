# 台北美食口袋名單
使用 Express.js + mongoDB 建置的餐廳收藏清單網站，能瀏覽收藏餐廳的詳細資訊，包含餐廳簡介、分類、評分、地址與環境照片等，並進行CRUD功能。

![Restaurant_List]()

## 網站功能
+ 列出收藏餐廳資訊
+ 透過餐廳名稱與餐廳分類進行搜尋
+ 點擊餐廳資訊卡可以查看個別詳細資料
+ 點擊建立餐廳可以自行增加喜愛餐廳


## 使用工具
+ Node.js 14.15.3
+ Express 4.17.1
+ Express-Handlebars: 5.2.0
+ body-parser 1.19.0
+ mongoose 5.11.9
+ nodemon 2.0.6
+ Bootstrap 5.0.0
+ popper 2.5.4
+ font-awesome 5.15.1

## 安裝
1. 開啟終端機 (Terminal) 並前往安裝路徑的資料夾內輸入指令
    ```
    git clone https://github.com/JIN-SKILL/Restaurant_List_CRUD.git
    ```
2. 進入專案資料夾
    ```
    cd Restaurant_List_CRUD
    ```
3. 安裝所需套件
	```
    npm i
    ```
4. 匯入測試資料
	```
    npm run seed
    ```
4. 終端機 (Terminal) 顯示以下內容，即可按兩次 Ctrl+C 跳回控制介面
	```
    mongoDB connected.
    Completed seed loading.
    ```
6. 啟用 localhost 伺服器
	```
    npm run dev
    ```
7. 終端機 (Terminal) 顯示以下內容，即可在瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 使用網站
	```
    The server is listening on http://localhost:3000
    mongoDB connected.
    ```
