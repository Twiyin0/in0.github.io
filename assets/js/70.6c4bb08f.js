(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{602:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用python发送又拍云云存储的解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用python发送又拍云云存储的解压"}},[t._v("#")]),t._v(" 使用python发送又拍云云存储的解压")]),t._v(" "),s("p",[t._v("upyun内介绍的有点抽象，可能会看不懂啥的，这里我们用它的demo示例代码来对zip文件进行解压。")]),t._v(" "),s("h2",{attrs:{id:"条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件"}},[t._v("#")]),t._v(" 条件")]),t._v(" "),s("ul",[s("li",[s("ul",[s("li",[s("a",{attrs:{href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("python"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("ul",[s("li",[s("a",{attrs:{href:"https://upyun.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("upyun"),s("OutboundLink")],1)])])])]),t._v(" "),s("h2",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("blockquote",[s("p",[t._v("upyun目前仅支持解压zip文件，因此云存储内的指定文件必须是zip格式"),s("br"),t._v(" "),s("a",{attrs:{href:"https://help.upyun.com/knowledge-base/unzip/#e8a7a3e58e8be7bca9efbc88depressefbc89",target:"_blank",rel:"noopener noreferrer"}},[t._v("upyun原文档"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("hashlib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("hmac\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("requests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("json\n\nbucket "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 存储服务名称")]),t._v("\noperator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 操作员")]),t._v("\npassword "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hashlib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PASSWORD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexdigest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PASSWORD是操作员密码")]),t._v("\ndate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcnow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%a,%d %b %Y %H:%M:%S GMT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuri "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pretreatment'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里的uri不用换")]),t._v("\nmethod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v("\nstrings "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" method "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" uri "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" date\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make_tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sources"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/file.zip"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"save_as"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/depress/path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# path/to/file.zip是存储库内的zip文件 /depress/path是解压后保存的路径")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b64encode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntasks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" make_tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hmac_sha1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hmac"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("new"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digestmod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hashlib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sha1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("digest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UPYUN "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" operator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b64encode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nauth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hmac_sha1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nheaders "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorization"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bucket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notify_url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NOTIFY_URL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tasks"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"depress"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 又拍云的解压任务通过POST方法回调给notify_url")]),t._v("\nurl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://p0.api.upyun.com'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" uri \nr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("p",[t._v("notify_url 可以再参考"),s("a",{attrs:{href:"https://help.upyun.com/knowledge-base/unzip/#e59b9ee8b083e9809ae79fa5",target:"_blank",rel:"noopener noreferrer"}},[t._v("upyun的原文档"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"last"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last"}},[t._v("#")]),t._v(" last")]),t._v(" "),s("p",[t._v("该文章写于2023年3月24日，仅供参考.")])])}),[],!1,null,null,null);s.default=e.exports}}]);