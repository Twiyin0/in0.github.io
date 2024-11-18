(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{533:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[a._v("因为自己的记性不是很好，想记点东西"),t("br"),a._v("\n存在电脑里的笔记，过久不翻旧不知道哪去了"),t("br"),a._v("\n还是写在博客比较好")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[a._v("温故而知新，虽然是一步步改过来的，但还是想回顾一下整个过程")])]),t("h1",{attrs:{id:"环境安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境安装"}},[a._v("#")]),a._v(" 环境安装")]),a._v(" "),t("h2",{attrs:{id:"node-js安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js安装"}},[a._v("#")]),a._v(" node.js安装")]),a._v(" "),t("p",[a._v("首先得配置环境（node.js 8.6+）"),t("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("node官网"),t("OutboundLink")],1),t("br"),a._v("\nwindows下载二进制文件（.zip）\n下载完成以后解压")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[a._v("当然，win系统这里需要配置环境变量"),t("br"),a._v("\n我的电脑-属性-高级系统设置-环境变量-在PATH后加入npm的路径"),t("br"),a._v("\n比如我的F:\\Node;")])]),t("p",[a._v("按win+r输入cmd,选择解压的路径,检查是否安装完成")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm -v\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("切换下载源")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm config set registry http://registry.npm.taobao.org/  #用国内镜像下载源\nnpm config set registry https://registry.npmjs.org/     #官方下载源\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("非必要的时候不要选择官方下载源")]),a._v(" "),t("h2",{attrs:{id:"yarn安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn安装"}},[a._v("#")]),a._v(" yarn安装")]),a._v(" "),t("p",[a._v("全局安装yarn")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install -g yarn  \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[a._v("加入yarn的环境变量"),t("br"),a._v("\n我的电脑-属性-高级系统设置-环境变量-在PATH后加入"),t("br"),a._v("\nF:\\Node\\node_modules\\yarn\\bin\\yarn.js;")])]),t("p",[a._v("检查是否安装完成")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn -v\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("至此，我们的环境就安装好了")]),a._v(" "),t("h1",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("h2",{attrs:{id:"模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板"}},[a._v("#")]),a._v(" 模板 "),t("Badge",{attrs:{text:"不推荐",type:"tip"}})],1),a._v(" "),t("p",[a._v("总之先把模板放在这"),t("a",{attrs:{href:"/my-blog_6wEjrx.tar"}},[a._v("模板(.tar)")]),t("br"),a._v("\n解压模板(.tar格式可以用7-zip解压)得到my-blog文件夹"),t("br"),a._v("\n点击进入，在把cmd定位到该文件夹"),t("br"),a._v("\n这里推荐VScode，把整个文件夹拖进VScode，在最上面找到 终端(Terminal)-新终端(new Terminal)")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[a._v("新建终端快捷键 shift+ctrl+`")])]),t("h2",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),t("p",[a._v("在cmd输入（VScode终端）")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn init #或者 npm init\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后看自己来，懒就直接回车回车")]),a._v(" "),t("h2",{attrs:{id:"安装vuepress本地依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装vuepress本地依赖"}},[a._v("#")]),a._v(" 安装vuepress本地依赖 "),t("Badge",{attrs:{text:"选",type:"warning"}})],1),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"title"}),t("p",[a._v("如果你下载了模板，那么这一步可以跳过")])]),t("p",[a._v("如标题所示awa")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn add -D vuepress #或者 npm install -D vuepress\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"}),t("p",[a._v("如果你的现有项目依赖了 webpack 3.x，我们推荐使用 Yarn (opens new window)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。")])]),t("h2",{attrs:{id:"主题初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题初始化"}},[a._v("#")]),a._v(" 主题初始化 "),t("Badge",{attrs:{text:"选",type:"warning"}})],1),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"title"}),t("p",[a._v("如果你下载了模板，那么这一步可以跳过")])]),t("p",[a._v("npm")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install @vuepress-reco/theme-cli -g\ntheme-cli init\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("yarn")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn global add @vuepress-reco/theme-cli\ntheme-cli init\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"编译及运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译及运行"}},[a._v("#")]),a._v(" 编译及运行")]),a._v(" "),t("p",[a._v("在cmd（终端）输入")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn dev  #或者  npm run dev\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("此时Vueprress会在"),t("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:8080"),t("OutboundLink")],1),a._v("启动一个热重载的博客。")]),a._v(" "),t("h1",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[a._v("#")]),a._v(" 参考文档")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("快速上手"),t("OutboundLink")],1),t("br"),a._v(" "),t("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("一款简洁而优雅的 vuepress 博客 & 文档 主题"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"}),t("p",[a._v("浏览器可能会提示你网站不安全，此时你需要点击"),t("code",[a._v("高级")]),a._v("-"),t("code",[a._v("继续前往网站")]),a._v("即可")])]),t("h1",{attrs:{id:"修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[a._v("#")]),a._v(" 修改配置文件")]),a._v(" "),t("p",[a._v("我们用本地访问我们的博客"),t("code",[a._v("http://localhost:8080/my-blog/public/")]),a._v("时，是主题的默认界面"),t("br"),a._v("\n我们需要通过修改一些东西，把主题改成自己的样子（）")]),a._v(" "),t("h2",{attrs:{id:"config-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-js"}},[a._v("#")]),a._v(" config.js")]),a._v(" "),t("p",[t("code",[a._v("docs/.vuepress/config.js")]),a._v("是博客的核心文件之一"),t("br"),a._v("\n接下来解读这个配置文件")]),a._v(" "),t("h3",{attrs:{id:"title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[a._v("#")]),a._v(" title")]),a._v(" "),t("p",[a._v('标题，就是浏览器窗口栏上显示的东西，默认为"Vuepress"'),t("br"),a._v("\n在"),t("code",[a._v('"title": ""')]),a._v('后面的引号""里边输入你想要的内容'),t("br"),a._v("\neg.")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"title": "音铃的博客"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("ctrl+s保存，网页也会刷新")]),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"title"}),t("p",[a._v("有时候可能编译不了，卡住"),t("br"),a._v("\n此时你需要在终端输入ctrl+c"),t("br"),a._v("\n如果ctrl+c也无法把它停掉就关掉终端，重新开一个新终端"),t("br"),a._v("\n再输入yarn dev")])]),t("p",[a._v("再刷新网页，窗口标题就成为你自己编辑的样子啦~"),t("br"),a._v(" "),t("img",{attrs:{src:"/photos/blog1.png",alt:"blog1"}})]),a._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("p",[a._v('翻译过来是描述，默认是"Welcome to your vuePress-theme-reco site"'),t("br"),a._v('\n也就是屏幕中间"vuepress-theme-reco"下面的那段话'),t("br"),a._v("\n你可以改掉")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"description": "欢迎，音铃的博客"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"/photos/blog2.png",alt:"blog2"}})]),a._v(" "),t("h3",{attrs:{id:"base"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[a._v("#")]),a._v(" base")]),a._v(" "),t("p",[a._v("部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。"),t("br"),a._v("\n这里我们直接删掉它（别问为什么，因为我们没有想让网站部署到一个子目录路径下）")]),a._v(" "),t("h3",{attrs:{id:"dest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dest"}},[a._v("#")]),a._v(" dest")]),a._v(" "),t("p",[a._v('指定 vuepress build 的输出目录。这里我们制定为"public"（即/.vuepress/public）')]),a._v(" "),t("h3",{attrs:{id:"head"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[a._v("#")]),a._v(" head")]),a._v(" "),t("p",[a._v("额外需要被注入到当前页面HTML "),t("code",[a._v("<head>")]),a._v(" 里面的标签，每个标签都可以以[tagName, {attrName:attrValue }, innerHTML?]的歌是指定"),t("br"),a._v("\n比如我们要改掉标签")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("head: [\n    ['link', { rel: 'icon', href: '/head.jpg' }]  //head.jpg要在 `根目录/docs/.vuepress/public/` 文件夹里  \n  ]\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("code",[a._v("(2021年7月23日，电脑电源坏了，新电源还在路上awa，剩下的到时候补上)")]),t("br"),a._v("\n保存->编译"),t("br"),a._v("\n此时，我们窗口就有了我们的图标"),t("br"),a._v(" "),t("img",{attrs:{src:"/photos/blog3.png",alt:"head.jpg"}})]),a._v(" "),t("h3",{attrs:{id:"theme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[a._v("#")]),a._v(" theme")]),a._v(" "),t("p",[t("code",[a._v('"theme": "reco"')]),a._v("  这是官方的主题, 这屋里不建议改")]),a._v(" "),t("h3",{attrs:{id:"themeconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig"}},[a._v("#")]),a._v(" themeConfig")]),a._v(" "),t("p",[a._v("主题配置"),t("br"),a._v("\nnav是导航栏"),t("br"),a._v("\n里面要改的也就只有链接了（当然，看不懂可以不改）"),t("br"),a._v('\n"text": "Contact"这个里面都是作者在各个平台的链接'),t("br"),a._v("\n你可以改成自己的"),t("br"),a._v('\n"icon"图标可以参考'),t("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Config.js配置"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[a._v("#")]),a._v(" type")]),a._v(" "),t("p",[a._v('类型，"blog"指的是博客，所以，这个也不要改')]),a._v(" "),t("h3",{attrs:{id:"blogconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blogconfig"}},[a._v("#")]),a._v(" blogConfig")]),a._v(" "),t("p",[a._v("博客配置"),t("br"),a._v("\n不作修改（懒）")]),a._v(" "),t("h3",{attrs:{id:"frindlink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frindlink"}},[a._v("#")]),a._v(" frindLink")]),a._v(" "),t("p",[a._v("友情链接"),t("br"),a._v("\n可以把你推荐的一些链接放在这里"),t("br"),a._v(" "),t("img",{attrs:{src:"/photos/blog4.png",alt:"blog4"}})]),a._v(" "),t("h3",{attrs:{id:"logo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logo"}},[a._v("#")]),a._v(" logo")]),a._v(" "),t("p",[a._v("就是博客的logo"),t("br"),a._v("\n我们可以把我们的logo(head.jpg)放在上面")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"logo": "/head.jpg"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("此时，我们首页的左上角就会显示我们的logo啦"),t("br"),a._v(" "),t("img",{attrs:{src:"/photos/blog5.png",alt:"blog5"}})]),a._v(" "),t("h3",{attrs:{id:"search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[a._v("#")]),a._v(" search")]),a._v(" "),t("p",[a._v("是否开启搜索功能"),t("br"),a._v("\n默认：true")]),a._v(" "),t("h3",{attrs:{id:"searchmaxsuggestions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchmaxsuggestions"}},[a._v("#")]),a._v(" searchMaxSuggestions")]),a._v(" "),t("p",[a._v("搜索出的最大推荐数")]),a._v(" "),t("h3",{attrs:{id:"sidebar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[a._v("#")]),a._v(" sidebar")]),a._v(" "),t("p",[a._v("侧边栏"),t("br"),a._v("\n默认：auto")]),a._v(" "),t("h3",{attrs:{id:"author"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[a._v("#")]),a._v(" author")]),a._v(" "),t("p",[a._v("作者名称，通过修改这个可以修改作者（你）的名称")]),a._v(" "),t("h3",{attrs:{id:"authoravatar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authoravatar"}},[a._v("#")]),a._v(" authorAvatar")]),a._v(" "),t("p",[a._v("作者头像，你可以通过它修改你的头像"),t("br"),a._v("\n我们将head.jpg作为我们的头像（/.vuepress/public/head.jpg）")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"authorAvatar": "/head.jpg"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("保存、重新编译、刷新后"),t("br"),a._v(" "),t("img",{attrs:{src:"/photos/blog6.png",alt:"blog6"}})]),a._v(" "),t("h3",{attrs:{id:"record"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#record"}},[a._v("#")]),a._v(" record")]),a._v(" "),t("p",[a._v("网页备案信息")]),a._v(" "),t("h3",{attrs:{id:"startyear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#startyear"}},[a._v("#")]),a._v(" startYear")]),a._v(" "),t("p",[a._v("起始年份")]),a._v(" "),t("p",[a._v("更多配置文件请参考官方"),t("br"),a._v(" "),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/basic-config.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("vuepress"),t("OutboundLink")],1),t("br"),a._v(" "),t("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("vuepress-theme-reco"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("至此，我们的博客算是搭建完了...........")]),a._v(" "),t("h1",{attrs:{id:"文章发表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章发表"}},[a._v("#")]),a._v(" 文章发表")]),a._v(" "),t("p",[a._v("既然博客写完了，我们要怎么发表文章呢？"),t("br"),a._v("\n文章在我们的目录"),t("code",[a._v("/docs/views/")]),a._v("里面"),t("br"),a._v("\n首先创建（修改/进入）一个文件夹（目录）"),t("code",[a._v("category1")]),t("br"),a._v("\n里面再创建（修改/进入）一个目录（文件夹）"),t("code",[a._v("2016")]),t("br"),a._v("\n在里面创建（修改）.md文件"),t("br"),a._v("\n接下来我们编辑.md文件里面的内容"),t("br"),a._v("\n首先我们去看看Maekdown语法的基础"),t("br"),a._v(" "),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/markdown.html#header-anchors",target:"_blank",rel:"noopener noreferrer"}},[a._v("vuepress"),t("OutboundLink")],1),a._v("vuepress上的教程"),t("br"),a._v(" "),t("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/syntax.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("vuepress-theme-reco"),t("OutboundLink")],1),a._v("vuepress-theme-reco上的教程"),t("br"),a._v(" "),t("a",{attrs:{href:"https://markdown.com.cn/basic-syntax/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Markdowm基本语法教程"),t("OutboundLink")],1),a._v("第三方教程（推荐）")]),a._v(" "),t("h2",{attrs:{id:"解读默认主题的-views-category1-2018-121501-md"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解读默认主题的-views-category1-2018-121501-md"}},[a._v("#")]),a._v(" 解读默认主题的"),t("code",[a._v("./views/category1/2018/121501.md")])]),a._v(" "),t("p",[a._v("首先用'---'将标题等信息包裹起来")]),a._v(" "),t("h3",{attrs:{id:"title-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#title-2"}},[a._v("#")]),a._v(" title")]),a._v(" "),t("p",[a._v("标题，即文章的标题")]),a._v(" "),t("h3",{attrs:{id:"date"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[a._v("#")]),a._v(" date")]),a._v(" "),t("p",[a._v("日期，你可以编辑发表日期")]),a._v(" "),t("h3",{attrs:{id:"tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[a._v("#")]),a._v(" tags")]),a._v(" "),t("p",[a._v("标签，可以给一片文章添加多个标签")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tags: \n  - tag1\n  - tag2\n  ...\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"category"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#category"}},[a._v("#")]),a._v(" category")]),a._v(" "),t("p",[a._v("目录，给文章分配目录")]),a._v(" "),t("h2",{attrs:{id:"发表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发表"}},[a._v("#")]),a._v(" 发表")]),a._v(" "),t("p",[a._v("按照这些，我们把文章修改一下")]),a._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token front-matter-block"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 第一篇自己的博文\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token datetime number"}},[a._v("2021-07-24")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 好耶\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("categories")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("  心情")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")])]),a._v("\n\n今天我学会搭建博客啦！\n来发一篇文章~\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[a._v("保存")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[a._v("虽然markdown是实时更新的，但效果不是很好，想看最终效果还是需要重新编译整个博客"),t("br"),a._v("\n不重新编译能观看预览效果"),t("br"),a._v("\n可以等发表时再进行重新编译")])]),t("p",[a._v("刷新我们的博客，可以看到我们更新的博文已经发表到我们的博客上了"),t("br"),a._v(" "),t("img",{attrs:{src:"/photos/blog7.png",alt:"blog7"}})]),a._v(" "),t("p",[a._v("终于写完了awa，累！"),t("br"),a._v(" "),t("img",{attrs:{src:"/photos/moyu.gif",alt:"摸鱼"}})]),a._v(" "),t("p",[t("a",{attrs:{href:"https://v2.vuepress.vuejs.org/zh/advanced/theme.html#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E4%B8%BB%E9%A2%98",target:"_blank",rel:"noopener noreferrer"}},[a._v("主题开发"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);