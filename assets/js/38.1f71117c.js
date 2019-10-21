(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{238:function(t,a,s){"use strict";s.r(a);var e=s(0),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"发布和部署-阿里云"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布和部署-阿里云"}},[t._v("#")]),t._v(" 发布和部署 (阿里云)")]),t._v(" "),s("h3",{attrs:{id:"_1-大纲"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-大纲"}},[t._v("#")]),t._v(" 1 大纲")]),t._v(" "),s("ol",[s("li",[t._v("生产环境编译")]),t._v(" "),s("li",[t._v("购买域名和服务器")]),t._v(" "),s("li",[t._v("域名解析")]),t._v(" "),s("li",[t._v("Nginx 安装和配置")]),t._v(" "),s("li",[t._v("MongoDB数据库的安装和配置")]),t._v(" "),s("li",[t._v("git 安装、配置ssh-key")]),t._v(" "),s("li",[t._v("Node.js 安装、配置淘宝镜像")]),t._v(" "),s("li",[t._v("拉取代码，安装pm2并启动项目")]),t._v(" "),s("li",[t._v("配置 Nginx 的反向代理")]),t._v(" "),s("li",[t._v("迁移本地数据到服务器 (mongodump)")]),t._v(" "),s("li",[t._v("ssl配置")])]),t._v(" "),s("h3",{attrs:{id:"_2-详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-详解"}},[t._v("#")]),t._v(" 2 详解")]),t._v(" "),s("h4",{attrs:{id:"_1-生产环境编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-生产环境编译"}},[t._v("#")]),t._v(" 1 生产环境编译")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// http.js\n\nconst http = axios.create({\n  baseURL: process.env.VUE_APP_API_URL || '/admin/api',\n  // baseURL: 'http://localhost:3000/admin/api'\n})\n// 第二个为生产环境域名加'/admin/api'； \n//\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//  开发环境配置\nVUE_APP_API_URL=http://localhost:3000/admin/api\n")])])]),s("h5",{attrs:{id:"_1-服务器静态资源路径与访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务器静态资源路径与访问"}},[t._v("#")]),t._v(" 1 服务器静态资源路径与访问")]),t._v(" "),s("p",[t._v("vue.config.js配置编译后输出的文件夹，")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("module.exports = {\n  outputDir: __dirname + '/../server/admin',\n  publicPath: process.env.NODE_ENV === 'production'\n    ? '/admin/'\n    : '/'\n}\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//配置服务端资源的访问路径\n\napp.use('/', express.static(__dirname + '/web'))\napp.use('/admin', express.static(__dirname + '/admin'))\n")])])]),s("h4",{attrs:{id:"_8-拉取代码，安装pm2并启动项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-拉取代码，安装pm2并启动项目"}},[t._v("#")]),t._v(" 8 拉取代码，安装pm2并启动项目")]),t._v(" "),s("p",[t._v("git 项目配置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('首次\ngit config username "weitanai"\ngit config useremail "987346185@qq.com"\n\n创建本地git仓库， \ngit add 项目\ngit commmit -m "key imformation"\n\ngit add remote git@github.com: weitanai/wesite.git;\n\n\n\n已有仓库 \ncd existing_git_repo\ngit remote add origin git@github.com:weitanai:wesite.git;\ngit push -u origin master;\n')])])]),s("ul",[s("li",[t._v("pm2 服务器全局守护进程")]),t._v(" "),s("li",[t._v("pm2 start index.js")]),t._v(" "),s("li",[t._v("pm2 list")])]),t._v(" "),s("p",[t._v("9 配置 Nginx 的反向代理")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("remote-ssh: vscode 管理服务器文件夹\n\nnginxconfig.io: 配置nginx 反向代理的 node 服务器\n")])])]),s("h4",{attrs:{id:"_11-ssl配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-ssl配置"}},[t._v("#")]),t._v(" 11 ssl配置")]),t._v(" "),s("ol",[s("li",[t._v("let's Encrypt, -> certbot.")])])])}),[],!1,null,null,null);a.default=i.exports}}]);