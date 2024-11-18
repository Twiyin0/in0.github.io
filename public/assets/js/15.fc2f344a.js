(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{474:function(s,a,t){s.exports=t.p+"assets/img/STM32-1.2292f918.png"},526:function(s,a,t){"use strict";t.r(a);var n=t(2),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("初学STM32"),a("br"),s._v("\n相对于51单片机而言，STM32的学习会复杂许多，也比较难"),a("br"),s._v("\n但功能强大，能适应很多场景")])]),s._v(" "),a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("h1",{attrs:{id:"stm32命名解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stm32命名解释"}},[s._v("#")]),s._v(" STM32命名解释")]),s._v(" "),a("h2",{attrs:{id:"产品系列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产品系列"}},[s._v("#")]),s._v(" 产品系列")]),s._v(" "),a("p",[s._v("STM32 = 基于ARM的32位微控制器")]),s._v(" "),a("h2",{attrs:{id:"产品类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产品类型"}},[s._v("#")]),s._v(" 产品类型")]),s._v(" "),a("p",[s._v("F = 通用类型")]),s._v(" "),a("h2",{attrs:{id:"产品子系列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产品子系列"}},[s._v("#")]),s._v(" 产品子系列")]),s._v(" "),a("p",[s._v("101 = 基本型"),a("br"),s._v("\n102 = USB型，USB2.0全速设备"),a("br"),s._v("\n103 = 增强型"),a("br"),s._v("\n105或107 = 互联型")]),s._v(" "),a("h2",{attrs:{id:"引脚数目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引脚数目"}},[s._v("#")]),s._v(" 引脚数目")]),s._v(" "),a("p",[s._v("T = 36脚"),a("br"),s._v("\nC = 48脚"),a("br"),s._v("\nR = 64脚"),a("br"),s._v("\nV = 100脚"),a("br"),s._v("\nZ = 144脚"),a("br"),s._v("\nB = 208脚"),a("br"),s._v("\nN = 216脚")]),s._v(" "),a("h2",{attrs:{id:"闪存存储器容量-flash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闪存存储器容量-flash"}},[s._v("#")]),s._v(" 闪存存储器容量（FLASH）")]),s._v(" "),a("p",[s._v("4 = 16K字节的闪存存储器"),a("br"),s._v("\n6 = 32K字节的闪存存储器"),a("br"),s._v("\n8 = 64K字节的闪存存储器"),a("br"),s._v("\nB = 128K字节的闪存存储器"),a("br"),s._v("\nC = 256K字节的闪存存储器"),a("br"),s._v("\nD = 384K字节的闪存存储器"),a("br"),s._v("\nE = 512K字节的闪存存储器"),a("br"),s._v("\nI = 2048K字节的闪存存储器")]),s._v(" "),a("h2",{attrs:{id:"封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[s._v("#")]),s._v(" 封装")]),s._v(" "),a("p",[s._v("H = BGA"),a("br"),s._v("\nT = LQFP"),a("br"),s._v("\nU = VFQFPN"),a("br"),s._v("\nY = WLCSP64")]),s._v(" "),a("h2",{attrs:{id:"温度范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#温度范围"}},[s._v("#")]),s._v(" 温度范围")]),s._v(" "),a("p",[s._v("6 = 工业级温度范围， -40°C~85°C"),a("br"),s._v("\n7 = 工业级温度范围， -40°C~105°C")]),s._v(" "),a("h2",{attrs:{id:"内部代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部代码"}},[s._v("#")]),s._v(" 内部代码")]),s._v(" "),a("p",[s._v("A 或者空 (详见产品数据手册)")]),s._v(" "),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("p",[s._v("xxx = 已编程的器件代号(3个数字)"),a("br"),s._v("\nTR = 卷带式包装")]),s._v(" "),a("h1",{attrs:{id:"文件目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件目录结构"}},[s._v("#")]),s._v(" 文件目录结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("基于固件库: (以“STM32F4xx标准例程”为准)\n\nproject(跟目录)\n    |--CORE(核心与启动文件)\n    .    |-core_cm4.h\n    .    |-core_cm4_simd.h\n    .    |-startup_stm32f40_41xxx.s\n    |--FWLIB(官方库函数源码)\n    .    |--inc\n    .    .   |-misc.h\n    .    .   |-stm32f4xx_adc.h\n    .    .   |-....\n    .    |--src\n    .    .   |-misc.c\n    .    .   |-stm32f4xx_adc.c\n    .    .   |-....\n    |--OBJ(编译文件以及hex文件)\n    .    |-xxx.crf\n    .    |-xxx.d\n    .    |-xxx.o\n    .    |-xxx.lst\n    .    |-xxx.hex\n    |--SYSTEM(通用文件)\n    .    |--delay\n    .    .   |-delay.c\n    .    .   |-delay.h\n    .    |--sys\n    .    .   |-sys.c\n    .    .   |-sys.h\n    .    |--usart\n    .    .   |-usart.c\n    .    .   |-usart.h\n    |--USER(工程代码)\n    .    |-main.c\n    .    |-xxx.uvproj\n    .    |-....\n    |-keilkill.bat\n    |-readme.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("启动文件需要区分大小"),a("br"),s._v("\nld.s小容量（FLASH<=32K）"),a("br"),s._v("\nmd.s中等容量(64K<=FLASH<=128K)"),a("br"),s._v("\nhd.s大容量(256K<=FLASH)")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("基于寄存器：\nproject\n    |--CORE(核心文件)\n    .   |-core_cmx.h\n    .   |-core_cmx_simd.h\n    .   |-startup_stm32fxxx_xxx.s\n    |--FWLIB(启动文件)\n    .   |--inc\n    .   .   |-xxx.h\n    .   .   |-....\n    .   |--src\n    .   .   |-xxx.c\n    .   .   |-....\n    |--(ProjectName)(工程文件)\n    .   |--xxxx\n    .   |--....\n    |--OBJ(链接文件夹)\n    .   |-xxx.o\n    .   |-xxx.d\n    .   |-xxx.crf\n    .   |-....\n    |--SYSTEM(通用文件夹)\n    .   |--delay\n    .   .   |-delay.c\n    .   .   |-delay.h\n    .   |--sys\n    .   .   |-sys.c\n    .   .   |-sys.h\n    .   |--usart\n    .   .   |-usart.c\n    .   .   |-usart.h\n    |--USER(用户自定义文件夹)\n    .   |-xxx.uvproj\n    .   |-main.c\n    .   |-xxx.c\n    .   |-xxx.h\n    .   |-....\n    |-keilkill.bat\n    |-readme.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("h1",{attrs:{id:"stm32工作模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stm32工作模式"}},[s._v("#")]),s._v(" STM32工作模式")]),s._v(" "),a("h2",{attrs:{id:"输入模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入模式"}},[s._v("#")]),s._v(" 输入模式")]),s._v(" "),a("h3",{attrs:{id:"输入浮空"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入浮空"}},[s._v("#")]),s._v(" 输入浮空")]),s._v(" "),a("h3",{attrs:{id:"输入上拉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入上拉"}},[s._v("#")]),s._v(" 输入上拉")]),s._v(" "),a("h3",{attrs:{id:"输入下拉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入下拉"}},[s._v("#")]),s._v(" 输入下拉")]),s._v(" "),a("h3",{attrs:{id:"模拟输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟输入"}},[s._v("#")]),s._v(" 模拟输入")]),s._v(" "),a("h2",{attrs:{id:"输出模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出模式"}},[s._v("#")]),s._v(" 输出模式")]),s._v(" "),a("h3",{attrs:{id:"开漏输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开漏输出"}},[s._v("#")]),s._v(" 开漏输出")]),s._v(" "),a("h3",{attrs:{id:"开漏复用功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开漏复用功能"}},[s._v("#")]),s._v(" 开漏复用功能")]),s._v(" "),a("h3",{attrs:{id:"推挽式输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推挽式输出"}},[s._v("#")]),s._v(" 推挽式输出")]),s._v(" "),a("h3",{attrs:{id:"推挽式复用功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推挽式复用功能"}},[s._v("#")]),s._v(" 推挽式复用功能")]),s._v(" "),a("h2",{attrs:{id:"_3种最大翻转速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3种最大翻转速度"}},[s._v("#")]),s._v(" 3种最大翻转速度")]),s._v(" "),a("ul",[a("li",[s._v("2MHz")]),s._v(" "),a("li",[s._v("10MHz")]),s._v(" "),a("li",[s._v("50MHz")])]),s._v(" "),a("h1",{attrs:{id:"库函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#库函数"}},[s._v("#")]),s._v(" 库函数")]),s._v(" "),a("h2",{attrs:{id:"gpio库函数介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio库函数介绍"}},[s._v("#")]),s._v(" GPIO库函数介绍")]),s._v(" "),a("p",[a("img",{attrs:{src:t(474),alt:"GPIO-1"}}),a("br"),s._v("\n|--FWLIB文件夹下需要包含以下文件"),a("br"),s._v("\n....|-misc.c"),a("br"),s._v("\n....|-stm32fxxx_gpio.c"),a("br"),s._v("\n....|-stm32fxxx_rcc.c"),a("br"),s._v("\n....|-stm32fxxx_usart.c(可选)"),a("br"),s._v("\n....|-stm32fxxx_dbgmcu.c(可选)")]),s._v(" "),a("h3",{attrs:{id:"gpio初始化函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio初始化函数"}},[s._v("#")]),s._v(" GPIO初始化函数")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GPIO_Init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPIO_TypeDef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("GPIOx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" GPIO_InitTypeDef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("GPIO_InitStruct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("作用： 初始化一个或多个IO口（同一组）的工作方式和速度。")]),s._v(" "),a("p",[s._v("GPOIx: GPIOA~GPIOG")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint16_t")]),s._v(" GPIO_Pin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//指定要初始化的IO口  ")]),s._v("\n    GPIOSpeed_TypeDef GPIO_Speed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置IO口输出速度  ")]),s._v("\n    GPIOMode_TypeDef GPIO_Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置工作模式：8种中的一个")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("GPIO_InitTypeDef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("注意"),a("br"),s._v("\n外设（包括GPIO）在使用之前，几乎都要先使用对应的时钟。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);