# 一个简易的帐号管理器

- **使用koa和jade后端渲染**
- **数据库mysql**
- **界面马马虎虎能看, 请勿吐槽**

## 安装

### 克隆项目
`git clone https://github.com/lengchu/AccountManager-jade.git`

或者

`git clone https://gitee.com/lenchu/AccountManager-jade.git`

### 修改mysql配置
在 `config` 目录下的 `index.js` 文件中，修改 `username` , `password` ,  `database`，分别对应mysql用户名，密码，库名

### 建表
在 `models` 目录下有 `create.sql` 文件，全部复制下来，到库里执行一下即可

### 安装依赖
到项目根目录里执行 `npm install` 即可

## 启动
`node app.js`

## 使用
打开Chrome浏览器，输入网址 `http://localhost:3000` 
