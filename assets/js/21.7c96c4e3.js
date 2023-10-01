(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{667:function(t,v,r){"use strict";r.r(v);var e=r(5),_=Object(e.a)({},(function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("最近有想法做了个mc服务器spigot插件与koishi的onebot互通的项目"),r("br"),t._v("\n顺便把这篇博客当作详细文档了"),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/Twiyin0/chatSocketServer-spigot",target:"_blank",rel:"noopener noreferrer"}},[t._v("jar更新日志"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://www.npmjs.com/package/koishi-plugin-minecraft-sync-msg#CHANGELOG",target:"_blank",rel:"noopener noreferrer"}},[t._v("koishi插件更新日志"),r("OutboundLink")],1)]),t._v(" "),r("h1",{attrs:{id:"使用koishi与mc互通"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用koishi与mc互通"}},[t._v("#")]),t._v(" 使用koishi与mc互通")]),t._v(" "),r("p",[t._v("最近有想法做了个mc服务器spigot插件与koishi的onebot互通的项目"),r("br"),t._v("\n顺便把这篇博客当作详细文档了")]),t._v(" "),r("h2",{attrs:{id:"准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),r("p",[t._v("1、一个"),r("code",[t._v("jdk17")]),t._v("环境运行的spigot-1.16以上版本的mc服务器(paper也可以)"),r("br"),t._v("\n2、去我的"),r("a",{attrs:{href:"https://github.com/Twiyin0/chatSocketServer-spigot",target:"_blank",rel:"noopener noreferrer"}},[t._v("github仓库"),r("OutboundLink")],1),t._v("下载所需插件"),r("br"),t._v("\n也可以点击下面下载")]),t._v(" "),r("ul",[r("li",[t._v("Github源站"),r("a",{attrs:{href:"https://github.com/Twiyin0/chatSocketServer-spigot/releases/download/v1.0.0/chatSocketServer-spigot-1.0.0.jar",target:"_blank",rel:"noopener noreferrer"}},[t._v("chatSocketServer-spigot"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("镜像1"),r("a",{attrs:{href:"https://g.in0.re/https://github.com/Twiyin0/chatSocketServer-spigot/releases/download/v1.0.0/chatSocketServer-spigot-1.0.0.jar",target:"_blank",rel:"noopener noreferrer"}},[t._v("chatSocketServer-spigot"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("镜像2"),r("a",{attrs:{href:"https://gh.api.99988866.xyz/https://github.com/Twiyin0/chatSocketServer-spigot/releases/download/v1.0.0/chatSocketServer-spigot-1.0.0.jar",target:"_blank",rel:"noopener noreferrer"}},[t._v("chatSocketServer-spigot"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("3、下载好后把插件丢进"),r("code",[t._v("plugins")]),t._v("文件夹即可"),r("br"),t._v("\n4、把服务器的RCON服务打开")]),t._v(" "),r("ul",[r("li",[t._v("编辑服务器"),r("code",[t._v("server.properties")]),t._v("中"),r("code",[t._v("enable-rcon")]),t._v("设置为"),r("code",[t._v("true")])]),t._v(" "),r("li",[t._v("再设置"),r("code",[t._v("rcon.port")]),t._v("为rcon的端口,可以不动 与 "),r("code",[t._v("rcon.password")]),t._v("(强烈建议设置密码) 然后保存，关闭")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",[t._v("插件启动时会自动生成配置文件，里面只有两个配置项")]),t._v(" "),r("ul",[r("li",[t._v("host  Socket服务器启动地址")]),t._v(" "),r("li",[t._v("port  Socket服务器启动端口\n如果你不懂，不建议修改")])])]),t._v(" "),r("h2",{attrs:{id:"安装koishi插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装koishi插件"}},[t._v("#")]),t._v(" 安装koishi插件")]),t._v(" "),r("ul",[r("li",[t._v("1、插件市场搜索"),r("code",[t._v("minecraft-sync-msg")]),t._v("安装即可")]),t._v(" "),r("li",[t._v("2、安装完成后去配置插件,详情看"),r("a",{attrs:{href:"#koishi%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE"}},[t._v("koishi插件配置")])])]),t._v(" "),r("h2",{attrs:{id:"koishi插件配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#koishi插件配置"}},[t._v("#")]),t._v(" koishi插件配置")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("配置项")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("注意")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("socketServerHost")]),t._v(" "),r("td",[t._v("socket服务器的地址")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("socketServerPort")]),t._v(" "),r("td",[t._v("socket服务器的端口")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("rconServerHost")]),t._v(" "),r("td",[t._v("RCON服务器的地址")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("rconServerPort")]),t._v(" "),r("td",[t._v("RCON服务器的端口")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("rconPassword")]),t._v(" "),r("td",[t._v("RCON服务器的密码")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("alluser")]),t._v(" "),r("td",[t._v("RCON指令是否所有人可用")]),t._v(" "),r("td",[t._v("(不推荐)")])]),t._v(" "),r("tr",[r("td",[t._v("superuser")]),t._v(" "),r("td",[t._v("可以用所有RCON的用户ID")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("commonCmd")]),t._v(" "),r("td",[t._v("普通用户可用的指令")]),t._v(" "),r("td",[t._v("(只能执行无参数的命令)")])]),t._v(" "),r("tr",[r("td",[t._v("cannotCmd")]),t._v(" "),r("td",[t._v("任何用户都不能用的指令")]),t._v(" "),r("td",[t._v("(强烈建议禁用restart)")])]),t._v(" "),r("tr",[r("td",[t._v("sendToChannel")]),t._v(" "),r("td",[t._v("mc服务器内消息发送到群组")]),t._v(" "),r("td",[t._v("(请看下面的注意)")])]),t._v(" "),r("tr",[r("td",[t._v("chatOnly")]),t._v(" "),r("td",[t._v("只接收聊天消息")]),t._v(" "),r("td",[t._v("(v0.2.0)")])])])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("**注意**")]),t._v(" "),r("p",[t._v("sendToChannel 是发送的群组数组，格式为"),r("code",[t._v("平台:群组id")]),t._v("如发送到qq群"),r("code",[t._v("onebot:123456")]),r("br"),t._v("\n能力有限，目前commonCmd只能做到无参数指令,像list,help,tps这些"),r("br"),t._v("\nRCON更多指令详情可以百度")])]),t._v(" "),r("h2",{attrs:{id:"其他玩法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他玩法"}},[t._v("#")]),t._v(" 其他玩法")]),t._v(" "),r("ul",[r("li",[t._v('mc服务器内发送<at id="用户id(如QQ号)"/>可以at平台用户')]),t._v(" "),r("li",[t._v('mc服务器内发送<image url="图片地址"/>可以发送图片到平台')]),t._v(" "),r("li",[t._v("聊天平台(如qq群)使用"),r("code",[t._v("。#(消息)")]),t._v("或"),r("code",[t._v(".#(消息)")]),t._v("给mc服务器发送消息&+数字可以跟mc改变颜色"),r("br"),t._v("\n示例: .#你好&6呀")]),t._v(" "),r("li",[t._v("聊天平台(如qq群)使用"),r("code",[t._v("#/(指令)")]),t._v("可以给RCON发送指令"),r("br"),t._v("\n示例: #/list (等价于mc内输入/list)")])]),t._v(" "),r("h2",{attrs:{id:"注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),r("ul",[r("li",[t._v("1、如果koishi的socket与服务器断开不会自动重连，需要重启插件"),r("br"),t._v("\n我也想过做自动重连但是logger会爆炸")]),t._v(" "),r("li",[t._v("2、java我也是看着来写的，真心不会，所以大概率不会更新")])])])}),[],!1,null,null,null);v.default=_.exports}}]);