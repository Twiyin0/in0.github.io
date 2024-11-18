(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{605:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"php通过smtp向目标邮箱发送邮件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php通过smtp向目标邮箱发送邮件"}},[s._v("#")]),s._v(" php通过smtp向目标邮箱发送邮件")]),s._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.php.net",target:"_blank",rel:"noopener noreferrer"}},[s._v("php"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("composer"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("添加PHPEmailer")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" require phpmailer/phpmailer\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"直接上代码吧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接上代码吧"}},[s._v("#")]),s._v(" 直接上代码吧")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("PHPMailer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("PHPMailer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("PHPMailer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("PHPMailer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("PHPMailer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Exception")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'vendor/autoload.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个新的 PHPMailer 实例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PHPMailer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置 PHPMailer 实例以使用 SMTP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isSMTP")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                                          \n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("Host")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'smtp.exmail.example.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// smtp服务器地址                 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("SMTPAuth")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                                  \n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("Username")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'mail@example.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 账户      ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("Password")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'ababababanananan'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("SMTPSecure")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'ssl'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加密方式 ssl \\ tls")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("Port")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("465")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// smtp端口")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'mail@example.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发件人信息")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addAddress")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'aa@example.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加收件人")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("Subject")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'This is a test Email.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置邮件主题")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("Body")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Hello world!\\n'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置邮件正文")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'邮件已成功发送！'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'邮件发送失败：'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("ErrorInfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("注意："),t("br"),s._v("\nsetFrom()函数里的邮件与Username一致，后面的name就随便啦~")])])])}),[],!1,null,null,null);t.default=e.exports}}]);