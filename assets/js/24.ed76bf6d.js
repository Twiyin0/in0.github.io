(window.webpackJsonp=window.webpackJsonp||[]).push([[24,37,50],{403:function(t,e,n){"use strict";e.a={data:()=>({recoShowModule:!1}),mounted(){this.recoShowModule=!0},destroyed(){this.recoShowModule=!1}}},404:function(t,e,n){"use strict";n.r(e);var s={name:"ModuleTransition",props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"}},methods:{setStyle(t){t.style.transition=`all ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity=0},unsetStyle(t){t.style.transform="translateY(0)",t.style.opacity=1}}},i=(n(420),n(1)),r=Object(i.a)(s,(function(){return(0,this._self._c)("transition",{attrs:{name:"module"},on:{enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},406:function(t,e,n){},413:function(t,e,n){"use strict";n.r(e);n(2),n(55);var s=n(19),i={props:{item:{required:!0}},computed:{link(){return Object(s.e)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:s.h,isMailto:s.i,isTel:s.j}},r=n(1),o=Object(r.a)(i,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[e("i",{class:"iconfont "+t.item.icon}),t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[e("i",{class:"iconfont "+t.item.icon}),t._v("\n  "+t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.default=o.exports},420:function(t,e,n){"use strict";n(406)},450:function(t,e,n){},468:function(t,e,n){"use strict";n(450)},495:function(t,e,n){"use strict";n.r(e);var s=n(413),i=n(404),r={mixins:[n(403).a],components:{NavLink:s.default,ModuleTransition:i.default},computed:{actionLink(){return{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},heroImageStyle(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}}},o=(n(468),n(1)),a=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[e("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?e("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?e("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco"))]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?e("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(n,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.32"}},[e("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);