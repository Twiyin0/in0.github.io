(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{475:function(t,s,r){t.exports=r.p+"assets/img/img1.ddc4cc24.png"},476:function(t,s,r){t.exports=r.p+"assets/img/img2.08e7d64a.png"},477:function(t,s,r){t.exports=r.p+"assets/img/img3.1c07b021.png"},478:function(t,s,r){t.exports=r.p+"assets/img/img4.495cc387.png"},479:function(t,s,r){t.exports=r.p+"assets/img/img5.39bb4b61.png"},480:function(t,s,r){t.exports=r.p+"assets/img/img6.cc405b90.png"},481:function(t,s,r){t.exports=r.p+"assets/img/img7.c1bf5630.png"},482:function(t,s,r){t.exports=r.p+"assets/img/img8.4bcef3ff.png"},483:function(t,s,r){t.exports=r.p+"assets/img/img9.2751715d.png"},484:function(t,s,r){t.exports=r.p+"assets/img/img10.82280c35.png"},485:function(t,s,r){t.exports=r.p+"assets/img/img11.af08bf38.png"},486:function(t,s,r){t.exports=r.p+"assets/img/img12.bf701779.png"},487:function(t,s,r){t.exports=r.p+"assets/img/img13.912bfd3b.png"},488:function(t,s,r){t.exports=r.p+"assets/img/img14.b1a19cf3.png"},489:function(t,s,r){t.exports=r.p+"assets/img/img15.fbba3377.png"},490:function(t,s,r){t.exports=r.p+"assets/img/img16.3f4dc937.png"},491:function(t,s,r){t.exports=r.p+"assets/img/img17.562435ac.png"},492:function(t,s,r){t.exports=r.p+"assets/img/img18.8628faca.png"},493:function(t,s,r){t.exports=r.p+"assets/img/img19.a37724f2.png"},494:function(t,s,r){t.exports=r.p+"assets/img/img20.061f1c7a.png"},495:function(t,s,r){t.exports=r.p+"assets/img/img21.0bf2a706.png"},496:function(t,s,r){t.exports=r.p+"assets/img/img22.c3f16651.png"},497:function(t,s,r){t.exports=r.p+"assets/img/img23.3047caf0.png"},498:function(t,s,r){t.exports=r.p+"assets/img/img23-1.bd4b8ded.png"},499:function(t,s,r){t.exports=r.p+"assets/img/img23-2.13a04dda.png"},500:function(t,s,r){t.exports=r.p+"assets/img/img23-3.8b3116ae.png"},501:function(t,s,r){t.exports=r.p+"assets/img/img24.2cc52055.png"},502:function(t,s,r){t.exports=r.p+"assets/img/img25.b892fe92.png"},503:function(t,s,r){t.exports=r.p+"assets/img/img26.395e8a98.png"},504:function(t,s,r){t.exports=r.p+"assets/img/img28.30cbaf5f.png"},528:function(t,s,r){"use strict";r.r(s);var a=r(2),i=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("PID控制算法的使用非常广泛！"),s("br"),t._v("\n是电路控制中必学的算法。")])]),t._v(" "),s("h1",{attrs:{id:"pid算法学习笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pid算法学习笔记"}},[t._v("#")]),t._v(" PID算法学习笔记")]),t._v(" "),s("h1",{attrs:{id:"引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),s("p",[t._v("  PID控制算法是结合比例、积分和微分三种环节于一体的控制算法，它是连续系统中技术最为成熟、应用最为广泛的一种控制算法，该控制算法出现于20世纪30至40年代，适用于对被控对象模型了解不清楚的场合。"),s("br"),t._v("\n  实际运行的经验和理论的分析都表明，运用这种控制规律对许多工业过程进行控制时，都能得到比较满意的效果。PID控制 的实质就是根据输入的偏差值，按照比例、积分、微分的函数关系进行运算，运算结果用以控制输出。")]),t._v(" "),s("h2",{attrs:{id:"适用系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用系统"}},[t._v("#")]),t._v(" 适用系统")]),t._v(" "),s("p",[t._v("满足线性高斯系统"),s("br"),t._v("\n线性高斯性：")]),t._v(" "),s("ul",[s("li",[t._v("1、齐次性: ky=f(kx)")]),t._v(" "),s("li",[t._v("2、叠加性: y1+y2=f(x1)+f(x2)=f(x1+x2)")]),t._v(" "),s("li",[t._v("高斯性：噪声满足正太分布\n"),s("br"),s("img",{attrs:{src:r(475),alt:"img1"}})])]),t._v(" "),s("h3",{attrs:{id:"细化适用系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#细化适用系统"}},[t._v("#")]),t._v(" 细化适用系统")]),t._v(" "),s("p",[t._v("准确地来说是适用二阶以内的线性系统(数学表达如图)"),s("br"),t._v(" "),s("img",{attrs:{src:r(476),alt:"img2"}}),t._v(" "),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1Rh41117MT",target:"_blank",rel:"noopener noreferrer"}},[t._v("卡尔曼滤波视频链接"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("一阶系统举例"),s("br"),t._v(" "),s("img",{attrs:{src:r(477),alt:"img3"}})]),t._v(" "),s("li",[t._v("二阶系统举例"),s("br"),t._v(" "),s("img",{attrs:{src:r(478),alt:"img4"}})])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("ul",[s("li",[t._v("高阶系统若可以简化为二阶系统有可能适用PID算法")]),t._v(" "),s("li",[t._v("非线性系统通过"),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/58738073",target:"_blank",rel:"noopener noreferrer"}},[t._v("李雅普诺夫定理"),s("OutboundLink")],1),t._v("在非线性系统平衡点处线性化也可能适用PID算法。")])])]),s("h2",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://baike.baidu.com/item/PID%E7%AE%97%E6%B3%95/",target:"_blank",rel:"noopener noreferrer"}},[t._v("来自百度百科-PID算法"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"pid控制原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pid控制原理"}},[t._v("#")]),t._v(" PID控制原理")]),t._v(" "),s("p",[t._v("闭环控制是根据控制对象输出反馈来进行校正的控制方式，它是在测量出实际与计划发生偏差时，按定额或标准来进行纠正的。比如控制一个电机的转速，就得有一个测量转速的传感器，并将结果反馈到控制路线上。提到闭环控制算法，不得不提PID，它是闭环控制算法中最简单的一种。PID是比例 (Proportion) 积分 ,(Integral) 微分 ,(Differential coefficient) 的缩写，分别代表了三种控制算法。通过这三个算法的组合可有效地纠正被控制对象的偏差，从而使其达到一个稳定的状态。")]),t._v(" "),s("h3",{attrs:{id:"pid参数调节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pid参数调节"}},[t._v("#")]),t._v(" PID参数调节")]),t._v(" "),s("p",[t._v("在整定PID控制器参数时，可以根据控制器的参数与系统动态性能和稳态性能之间的定性关系，用实验的方法来调节控制器的参数。有经验的调试人员一般可以较快地得到较为满意的调试结果。在调试中最重要的问题是在系统性能不能令人满意时，知道应该调节哪一个参数，该参数应该增大还是减小。")]),t._v(" "),s("h2",{attrs:{id:"开环控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开环控制系统"}},[t._v("#")]),t._v(" 开环控制系统")]),t._v(" "),s("h3",{attrs:{id:"一般开环控制系统框图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般开环控制系统框图"}},[t._v("#")]),t._v(" 一般开环控制系统框图")]),t._v(" "),s("p",[t._v("如：水流量控制开关"),s("br"),t._v(" "),s("img",{attrs:{src:r(479),alt:"img5"}}),s("br"),t._v("\n缺点：\n无反馈，导致无法自动调节。")]),t._v(" "),s("h3",{attrs:{id:"前馈控制系统框图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前馈控制系统框图"}},[t._v("#")]),t._v(" 前馈控制系统框图")]),t._v(" "),s("p",[t._v("如：水流量控制开关"),s("br"),t._v(" "),s("img",{attrs:{src:r(480),alt:"img6"}}),s("br"),t._v("\n若不存在干扰则直接作用于对象。若有干扰则检测干扰，利用控制器计算出"),s("code",[t._v("补偿")]),t._v("然后输出给执行器再作用到对象。")]),t._v(" "),s("h2",{attrs:{id:"闭环控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭环控制系统"}},[t._v("#")]),t._v(" 闭环控制系统")]),t._v(" "),s("h3",{attrs:{id:"单闭环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单闭环"}},[t._v("#")]),t._v(" 单闭环")]),t._v(" "),s("p",[t._v("如：水流量控制开关"),s("br"),t._v("\n系统框图"),s("br"),s("img",{attrs:{src:r(481),alt:"img7"}}),s("br"),t._v("\n与一般开环系统多一个反馈。")]),t._v(" "),s("h3",{attrs:{id:"双闭环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双闭环"}},[t._v("#")]),t._v(" 双闭环")]),t._v(" "),s("p",[t._v("如：水位控制开关\n"),s("br"),t._v("系统框图"),s("br"),s("img",{attrs:{src:r(482),alt:"img8"}}),t._v(" "),s("br"),t._v("与一般单闭环控制系统多一个闭环，外层的环叫外环，内层叫内环。\n"),s("br"),t._v("传感器是人的眼睛，观察反馈信息，控制器1为人脑，根据水位变化做出计算。\n"),s("br"),t._v("控制器2也为人脑，用于做其他任务（运算）。\n"),s("br"),t._v("执行器是水阀，直接控制副对象（管道），进而影响水箱（主对象）。")]),t._v(" "),s("p",[s("strong",[t._v("控制过程")]),s("br"),t._v("\n以下图为例"),s("br"),t._v(" "),s("img",{attrs:{src:r(483),alt:"img9"}}),t._v(" "),s("br"),t._v("水位1m为我们的期望输出，与我们实际输出作差后得到E1，利用E1输入控制器控制再与实际流量做差，经过运算得到E2，最终决定水管加大/减小。做出执行后，作用给副对象。\n"),s("br"),t._v("优缺点：可以控制内环的流量，但流量是随动的，可能会在1L/s~2L/s变化，可以加快对水位的控制。利用内环控制稳定性，则外环控制起来会方便很多。")]),t._v(" "),s("h2",{attrs:{id:"复合控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复合控制系统"}},[t._v("#")]),t._v(" 复合控制系统")]),t._v(" "),s("p",[t._v("前馈-反馈符合控制系统\n"),s("br"),t._v("系统框图如下\n"),s("br"),s("img",{attrs:{src:r(484),alt:"img10"}}),t._v(" "),s("br"),t._v("框图解释：\n"),s("br"),s("img",{attrs:{src:r(485),alt:"img11"}}),t._v(" "),s("br"),t._v("前馈环（上方的环）作补偿即过滤干扰。反馈环根据实际的流量对系统做出反馈进行必要的补偿。")]),t._v(" "),s("h2",{attrs:{id:"参数详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数详解"}},[t._v("#")]),t._v(" 参数详解")]),t._v(" "),s("h3",{attrs:{id:"误差"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#误差"}},[t._v("#")]),t._v(" 误差")]),t._v(" "),s("p",[t._v("期望输出-实际输出")]),t._v(" "),s("h3",{attrs:{id:"控制器输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制器输出"}},[t._v("#")]),t._v(" 控制器输出")]),t._v(" "),s("p",[t._v("控制器经过对E的处理（PID运算）得到的值。")]),t._v(" "),s("h3",{attrs:{id:"执行器输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行器输出"}},[t._v("#")]),t._v(" 执行器输出")]),t._v(" "),s("p",[t._v("直接作用到对象的输出（对应图中就是阀门打开的大小）")]),t._v(" "),s("h3",{attrs:{id:"系统输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统输出"}},[t._v("#")]),t._v(" 系统输出")]),t._v(" "),s("p",[t._v("即为实际输出")]),t._v(" "),s("h2",{attrs:{id:"连续与离散信号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连续与离散信号"}},[t._v("#")]),t._v(" 连续与离散信号")]),t._v(" "),s("p",[t._v("1、图形表示\n"),s("br"),s("img",{attrs:{src:r(486),alt:"img12"}}),s("br"),t._v("\n2、数学表达式\n"),s("br"),s("img",{attrs:{src:r(487),alt:"img13"}}),s("br")]),t._v(" "),s("ul",[s("li",[t._v("积分是信号的表达式；")]),t._v(" "),s("li",[t._v("连续信号微分为离散信号表达")])]),t._v(" "),s("h1",{attrs:{id:"pid理论学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pid理论学习"}},[t._v("#")]),t._v(" PID理论学习")]),t._v(" "),s("h2",{attrs:{id:"pid公式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pid公式"}},[t._v("#")]),t._v(" PID公式")]),t._v(" "),s("h3",{attrs:{id:"抽象派-教科书式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽象派-教科书式"}},[t._v("#")]),t._v(" 抽象派（教科书式）")]),t._v(" "),s("p",[t._v("数学公式如图所示：\n"),s("br"),s("img",{attrs:{src:r(488),alt:"img14"}}),s("br"),t._v("\nC为输出，e为误差，P为比例度，Ti为时间积分时间，Td为微分时间。"),s("code",[t._v("p")]),t._v("/"),s("code",[t._v("i")]),t._v("/"),s("code",[t._v("d")]),t._v("为我们所需调节的参数。\n"),s("br"),t._v("但在实际使用（计算机内使用）会归一化"),s("br"),t._v("\n即以上"),s("strong",[t._v("连续")]),t._v("PID公式和"),s("strong",[t._v("离散")]),t._v("PID公式。换之为调Kp、Ki、Kd三个参数（系数）。\n"),s("br"),t._v("离散PID公式将△t归一化得到以下公式\n"),s("br"),s("img",{attrs:{src:r(489),alt:"img15"}}),s("br")]),t._v(" "),s("h3",{attrs:{id:"pid形象解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pid形象解释"}},[t._v("#")]),t._v(" PID形象解释")]),t._v(" "),s("p",[s("img",{attrs:{src:r(490),alt:"img16"}}),t._v(" "),s("br")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("P的控制作用\n实例："),s("br"),t._v(" "),s("img",{attrs:{src:r(491),alt:"img17"}}),t._v(" "),s("br"),t._v("在小车控制系统中，P主要控制小车驱动(速度)\n"),s("br"),t._v("此时，小车距离与速度变化曲线图\n"),s("br"),s("img",{attrs:{src:r(492),alt:"img18"}}),t._v(" "),s("br"),t._v("可见，P只能无限接近期望值，不会完全等于期望值。\n"),s("br"),t._v("P控制产生的实际值与期望值的误差称 "),s("code",[t._v("稳态误差")])])]),t._v(" "),s("li",[s("p",[t._v("i的控制作用\n"),s("img",{attrs:{src:r(493),alt:"img19"}}),t._v(" "),s("br"),t._v("当误差达到1时P(比例)项不会再变，因此无法达到预期值。\n"),s("br"),t._v("i提供积分作用，使误差1无限接近0最终达到预期。\n"),s("br"),t._v("但PI调节到误差为0时,P得到的值为0,不再提供动力。\n"),s("br"),t._v("但I值不会因P值改变而收到影响，只会停止积累误差，可实现无人机悬停。\n"),s("br"),t._v("示意图:\n"),s("br"),s("img",{attrs:{src:r(494),alt:"img20"}})])]),t._v(" "),s("li",[s("p",[t._v("d的控制系统\n"),s("img",{attrs:{src:r(495),alt:"img21"}}),t._v(" "),s("br"),t._v("前段区域P项与I项过大的输出可能会瞬间超过预期，为防止此情况发生引入D。\n"),s("br"),t._v("D项给负的信号输出，防止误差小于0。\n"),s("br"),t._v("PID综合示意图:\n"),s("br"),s("img",{attrs:{src:r(496),alt:"img22"}})])])]),t._v(" "),s("h2",{attrs:{id:"调参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调参"}},[t._v("#")]),t._v(" 调参")]),t._v(" "),s("p",[t._v("调参示意图：\n"),s("br"),s("img",{attrs:{src:r(497),alt:"img23"}})]),t._v(" "),s("h2",{attrs:{id:"补充相关控制知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充相关控制知识"}},[t._v("#")]),t._v(" 补充相关控制知识")]),t._v(" "),s("h3",{attrs:{id:"积分限幅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#积分限幅"}},[t._v("#")]),t._v(" 积分限幅")]),t._v(" "),s("p",[t._v("先上图"),s("br"),t._v(" "),s("img",{attrs:{src:r(498),alt:"img23-1"}}),s("br"),t._v("\n当E不变时P不受影响，为了防止PID输出过大，需要对I进行限幅。"),s("br"),t._v(" "),s("img",{attrs:{src:r(499),alt:"img23-2"}}),s("br"),t._v("\n在程序内设定一个固定值，防止I过大，以至不会超调货超调幅度不大。")]),t._v(" "),s("h3",{attrs:{id:"积分分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#积分分离"}},[t._v("#")]),t._v(" 积分分离")]),t._v(" "),s("p",[t._v("当目标值增大时E会增大，如果E增大的值很大的话，P与I同时作用会导致PID总输出值过大而导致系统超调"),s("br"),t._v("\n为了防止此情况，我们需要对其进行积分分离"),s("br"),t._v(" "),s("img",{attrs:{src:r(500),alt:"img23-3"}}),s("br"),t._v("\n在程序内判断E的值，\n例：当目标值突增，E大于500时，Ki影响极大，所以我们不将Ki启用，即Ki=0"),s("br"),t._v("\n此时PID总输出仅有Kp作用，到E小于500后Ki慢慢累加，系统输出由Ki与Kp作用。"),s("br"),t._v("\n这样可以防止系统超调。")]),t._v(" "),s("h2",{attrs:{id:"实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),s("p",[t._v("控制框图\n"),s("br"),s("img",{attrs:{src:r(501),alt:"img24"}}),s("br"),t._v("\n主控发送值->PID输出值 遵循C620电调协议(CAN协议-控制器局域网络)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("补充"),s("br"),t._v("\nCAN总线网络主要挂在CAN_H和CAN_L，各个节点通过这两条线实现信号的串行差分传输，为了避免信号的反射和干扰，还需要在CAN_H和CAN_L之间接上120欧姆的终端电阻.\n更多详解可以参照 "),s("a",{attrs:{href:"https://www.cnblogs.com/kmust/p/9572178.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAN总线协议"),s("OutboundLink")],1)])]),s("p",[t._v("下图"),s("br"),t._v(" "),s("img",{attrs:{src:r(502),alt:"img25"}}),t._v("\n如果设Motor的ID为1，则CAN包内的0、1字节为PID的输出值"),s("br"),t._v("\n实际控制过程如下:"),s("br"),t._v(" "),s("img",{attrs:{src:r(503),alt:"img26"}}),s("br"),t._v("\nid1的包反馈数据里面包含一些数据，通过提取其中的速度(即PID的实际输出)传回主控"),s("br"),t._v("\n主控将期望与反馈回来的速度作差再传入CAN包DATA0与DATA1形成闭环。")]),t._v(" "),s("h3",{attrs:{id:"代码实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实例"}},[t._v("#")]),t._v(" 代码实例")]),t._v(" "),s("p",[s("img",{attrs:{src:r(504),alt:"img28"}})]),t._v(" "),s("h2",{attrs:{id:"结束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束"}},[t._v("#")]),t._v(" 结束")])])}),[],!1,null,null,null);s.default=i.exports}}]);