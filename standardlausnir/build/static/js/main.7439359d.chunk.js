(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),l=a(9),c=a(10),i=a(3),s=a(1),o=a.n(s),m=a(20),u=a.n(m),d=(a(64),a(24)),f=a.n(d),v=a(15),E=a(52);function h(e){return function(){var t,a=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var p=function(e){Object(l.a)(a,e);var t=h(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.Helmet,null,o.a.createElement("title",null,"Standard lausnir"),o.a.createElement("meta",{name:"description",content:"Standardlausnir - Pers\xf3nuleg og \xe1rei\xf0anleg t\xf6lvu\xfej\xf3nusta."})))}}]),a}(s.Component),g=a(58),b=a(17),y=a(19),N=a(53),k=a.n(N);function w(e){return function(){var t,a=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var j=[{Social:o.a.createElement(y.a,null),link:"https://www.facebook.com/standardlausnir"},{Social:o.a.createElement(y.b,null),link:"https://www.instagram.com/standardlausnir/"},{Social:o.a.createElement(y.c,null),link:"https://www.linkedin.com/company/standardlausnir/"}],S=function(e){Object(l.a)(a,e);var t=w(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).menuTrigger=r.menuTrigger.bind(Object(b.a)(r)),r.CLoseMenuTrigger=r.CLoseMenuTrigger.bind(Object(b.a)(r)),r.stickyHeader=r.stickyHeader.bind(Object(b.a)(r)),window.addEventListener("load",function(){console.log("All assets are loaded")}),r}return Object(r.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")});var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var a=this.props.color,n=void 0===a?"default-color":a,r=o.a.createElement("img",{src:"/assets/images/logo/rsz_standardlausnir-logo-icon.png",alt:"Digital Agency"});return o.a.createElement("header",{className:"header-area header-style-two header--fixed ".concat(n)},o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("div",{className:"header-left d-flex align-items-center"},o.a.createElement("div",{className:"logo"},o.a.createElement("a",{href:this.props.homeLink},r)),o.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},o.a.createElement(k.a,{className:"mainmenu",items:["home","about","service","portfolio","contact"],currentClassName:"is-current",offset:-200},o.a.createElement("li",null,o.a.createElement("a",{href:"#home"},"Fors\xed\xf0a")),o.a.createElement("li",null,o.a.createElement("a",{href:"#about"},"Um")),o.a.createElement("li",null,o.a.createElement("a",{href:"#service"},"\xdej\xf3nusta")),o.a.createElement("li",null,o.a.createElement("a",{href:"#portfolio"},"Verkefni")),o.a.createElement("li",null,o.a.createElement("a",{href:"#contact"},"Haf\xf0u samband"))))),o.a.createElement("div",{className:"header-right"},o.a.createElement("div",{className:"social-share-inner"},o.a.createElement("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},j.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.link)},e.Social))}))),o.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},o.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},o.a.createElement(v.d,null))),o.a.createElement("div",{className:"close-menu d-block d-lg-none"},o.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},o.a.createElement(v.f,null))))))}}]),a}(s.Component),O=[{Social:o.a.createElement(y.a,null),link:"https://www.facebook.com/standardlausnir"},{Social:o.a.createElement(y.b,null),link:"https://www.instagram.com/standardlausnir/"},{Social:o.a.createElement(y.c,null),link:"https://www.linkedin.com/company/standardlausnir/"}],R=function(){return o.a.createElement("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1","data-black-overlay":"6"},o.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},o.a.createElement("div",{className:"row align-items-center justify-content-between"},o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"logo text-center text-sm-left mb_sm--20"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:"/assets/images/logo/small-standardlausnir-full-logo.png",alt:"Logo images"}))))),o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner text-center"},o.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},O.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.link)},e.Social))})))),o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner text-center"},o.a.createElement("p",{className:"description"},o.a.createElement("a",{href:"mailto:standardlausnir@standardlausnir.is"}," standardlausnir@standardlausnir.is")))))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"})),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"}),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"inner text-center"},o.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," Standard lausnir -  Allur r\xe9ttur \xe1skilinn."))),o.a.createElement("div",{className:"col-lg-4"}))))},x=a(18);function T(e){return function(){var t,a=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var A=function(e){Object(l.a)(a,e);var t=T(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.tabStyle;return o.a.createElement("div",null,o.a.createElement("div",{className:"tabs-area"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(x.d,null,o.a.createElement(x.b,{className:"".concat(e)},o.a.createElement(x.a,null,"Megin \xe1herslur"),o.a.createElement(x.a,null,"Reynsla"),o.a.createElement(x.a,null,"Menntun")),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Vefs\xed\xf0uger\xf0 ",o.a.createElement("span",null," - Wordpress")),"Sm\xed\xf0i fallegra og snyrtilegra heimas\xed\xf0na eftir \xfe\xf6rfum."),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Vef\xfej\xf3nustu\xfer\xf3un ",o.a.createElement("span",null," - React, Vue, .net, nodeJS ofl.")),"Vef\xfej\xf3nustusm\xed\xf0i, vefforritun, breytingar og b\xe6tur."),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Sk\xfdjalausnir ",o.a.createElement("span",null," - Amazon AWS.")),"H\xfdsing vefja, t\xf6lvup\xf3sts og gagnagrunna \xed sk\xfdi."),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"T\xf6lvur\xe1\xf0gj\xf6f og vi\xf0ger\xf0ir ",o.a.createElement("span",null," ")),"R\xe1\xf0gj\xf6f, t\xf6lvua\xf0sto\xf0 og vi\xf0ger\xf0ir \xe1 rafeindab\xfana\xf0i")))),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Forritari",o.a.createElement("span",null," - Standard lausnir"))," 2019 - n\xfaverandi"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"\xdej\xf3nustustj\xf3ri",o.a.createElement("span",null," - OBA"))," 2014 - n\xfaverandi"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"T\xe6knima\xf0ur",o.a.createElement("span",null," - Optima "))," 2013 - 2014"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Umsj\xf3narma\xf0ur hlj\xf3\xf0 og mynd verkst\xe6\xf0is",o.a.createElement("span",null," - N\xfdherji "))," 2011 - 2013"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Rafeindavirki",o.a.createElement("span",null," - Marel "))," 2008 - 2011")))),o.a.createElement(x.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Dipl\xf3ma \xed T\xf6lvunarfr\xe6\xf0i",o.a.createElement("span",null," - H\xe1sk\xf3linn \xed Reykjav\xedk"))," 2020"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Sveinspr\xf3f \xed Rafeindavirkjun",o.a.createElement("span",null," - T\xe6knisk\xf3linn \xed Reykjav\xedk"))," 2010"))))))))))}}]),a}(s.Component),C=a(54),D=a(55),_=a.n(D),L=a(39);function V(e){return function(){var t,a=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var M=function(e){Object(l.a)(a,e);var t=V(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={data:{Name:"",Email:"",Subject:"",Message:""},errors:{showSuccess:!1,showError:!1,Math:""}},r.showSuccess=r.showSuccess.bind(Object(b.a)(r)),r.showError=r.showError.bind(Object(b.a)(r)),r}return Object(r.a)(a,[{key:"showSuccess",value:function(){this.setState({showSuccess:!this.state.showSuccess})}},{key:"showError",value:function(){this.setState({showError:!this.state.showError})}},{key:"handleInput",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.resetErrors();var a=this.state.Math;console.log(a),"6"===a?(this.showSuccess(),_()({method:"POST",url:"https://2wjekpzwxj.execute-api.eu-west-1.amazonaws.com/01/contact-form",data:this.state}).then(function(e){t.resetForm()}).catch(function(e){console.log(e)})):this.showError()}},{key:"resetForm",value:function(){this.setState({Name:"",Email:"",Subject:"",Message:"",Math:""}),this.resetErrors()}},{key:"resetErrors",value:function(){this.setState({showSuccess:!1,showError:!1})}},{key:"render",value:function(){var e=this.state,t=e.showSuccess,a=e.showError;return o.a.createElement("div",{className:"contact-form--1"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row--35 align-items-start"},o.a.createElement("div",{className:"col-lg-6 order-2 order-lg-1"},o.a.createElement("div",{className:"section-title text-left mb--50"},o.a.createElement("h2",{className:"title"},this.props.contactTitle),o.a.createElement("p",{className:"description"},"\xc9g er laus \xed verkefni. Haf\xf0u samband \xed s\xedma: ",o.a.createElement("a",{href:"tel:+3548460999"},"846-0999"),", email:",o.a.createElement("a",{href:"mailto:standardlausnir@standardlausnir.is"}," standardlausnir@standardlausnir.is"),", e\xf0a fylltu \xfat formi\xf0 h\xe9r a\xf0 ne\xf0an. ")),o.a.createElement("div",{className:"form-wrapper"},o.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},o.a.createElement("label",{htmlFor:"Name"},o.a.createElement("input",{type:"text",name:"Name",id:"item01",value:this.state.Name,onChange:this.handleInput.bind(this),placeholder:"Nafn *",required:!0})),o.a.createElement("label",{htmlFor:"Email"},o.a.createElement("input",{type:"text",name:"Email",id:"item02",value:this.state.Email,onChange:this.handleInput.bind(this),placeholder:"Email *",required:!0})),o.a.createElement("label",{htmlFor:"Subject"},o.a.createElement("input",{type:"text",name:"Subject",id:"item03",value:this.state.Subject,onChange:this.handleInput.bind(this),placeholder:"Vi\xf0fangsefni"})),o.a.createElement("label",{htmlFor:"Message"},o.a.createElement("textarea",{type:"text",id:"item04",name:"Message",value:this.state.Message,onChange:this.handleInput.bind(this),placeholder:"Skilabo\xf0"})),o.a.createElement("label",{htmlFor:"Math"},o.a.createElement("input",{type:"number",name:"Math",id:"item05",value:this.state.Math,onChange:this.handleInput.bind(this),placeholder:"Hver er summan af 4 og 2? *",required:!0})),t&&o.a.createElement(L.a,{variant:"success"},"Takk fyrir skilabo\xf0in, vi\xf0 munum svara eins flj\xf3tt og au\xf0i\xf0 er! "),a&&o.a.createElement(L.a,{variant:"danger"},"Vinsamlegast reyndu aftur. "),o.a.createElement("button",{type:"submit",className:"rn-button-style--2 btn-solid",value:"submit",name:"submit",id:"mc-embedded-subscribe"},"Senda fyrirspurn")))),o.a.createElement("div",{className:"col-lg-6 order-1 order-lg-2"},o.a.createElement("div",{className:"thumbnail mb_md--30 mb_sm--30"},o.a.createElement("img",{src:"".concat(this.props.contactImages),alt:"trydo"}))))))}}]),a}(s.Component);function F(e){return function(){var t,a=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var P=[{image:"maul",category:"Hugb\xfana\xf0arger\xf0",title:"Maul Reykjav\xedk",description:"Forritun og gagnavinnsla \xed Amazon AWS.",link:"https://maul.is"},{image:"vidgerdir",category:"T\xf6lvu\xfej\xf3nusta",title:"\xcdsprj\xf3n ehf.",description:"T\xe6kni\xfej\xf3nusta og vi\xf0ger\xf0ir."},{image:"friggz",category:"Vefs\xed\xf0uger\xf0",title:"Friggz sf.",description:"Vefs\xed\xf0a Friggz sf. sm\xed\xf0u\xf0 \xed Wordpress af Standard lausnum ",link:"https://friggz.is"},{image:"oba",category:"Vefs\xed\xf0uger\xf0",title:"Ott\xf3 B Arnar ehf.",description:"Vefs\xed\xf0a Ott\xf3 B Arnar ehf. \xed Wordpress af Standard lausnum",link:"https://oba.is"},{image:"code",category:"Hugb\xfana\xf0arger\xf0",title:"SAT4N - Simple Administrative Tools for Networking.",description:"Lokaverkefni \xed t\xf6lvunarfr\xe6\xf0i \xed HR. Vef\xfej\xf3nusta \xe1 local neti sem st\xfdrir netb\xfana\xf0i fr\xe1 cisco.",link:"http://hdl.handle.net/1946/34047"},{image:"standardlausnir",category:"Vefs\xed\xf0uger\xf0",title:"Standard lausnir",description:"Vefs\xed\xf0a standardlausnir.is skrifu\xf0 \xed react.js og node.js api \xed AWS lambda fyrir contact form. L\xe9n, email og vefur h\xfdstur \xe1 Amazon AWS.",link:"standardlausnir.is"}],H=function(e){Object(l.a)(a,e);var t=F(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.column,a=e.styevariation,n=P.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,n.map(function(e,n){return o.a.createElement("div",{className:"".concat(t),key:n},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.link},o.a.createElement("div",{className:"portfolio ".concat(a)},o.a.createElement("div",{className:"thumbnail-inner"},o.a.createElement("div",{className:"thumbnail ".concat(e.image)}),o.a.createElement("div",{className:"bg-blr-image ".concat(e.image)})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"inner"},o.a.createElement("p",null,e.category),o.a.createElement("h4",null,e.title),o.a.createElement("h5",null,e.description))))))}))}}]),a}(s.Component);function W(e){return function(){var t,a=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var z=[{icon:o.a.createElement(v.c,null),title:"Hugb\xfana\xf0arger\xf0",description:"Sm\xed\xf0a vefs\xed\xf0ur, vef\xfej\xf3nustur og annan hugb\xfana\xf0 fr\xe1 grunni eftir \xfe\xf6rfum."},{icon:o.a.createElement(v.b,null),title:"Vefs\xed\xf0uger\xf0",description:"Sm\xed\xf0a wordpress vefs\xed\xf0ur fyrir l\xedtil og mi\xf0lungs fyrirt\xe6ki. Vefverslanir og einfaldar uppl\xfdsingas\xed\xf0ur."},{icon:o.a.createElement(v.e,null),title:"T\xf6lvu/t\xe6knia\xf0sto\xf0 og r\xe1\xf0gj\xf6f",description:"A\xf0sto\xf0a me\xf0 helstu t\xf6lvuvandam\xe1l, uppsetning hugb\xfana\xf0ar, v\xe9lb\xfana\xf0ar og vi\xf0ger\xf0ir."}],I=function(e){Object(l.a)(a,e);var t=W(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.column,t=z.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},t.map(function(t,a){return o.a.createElement("div",{className:"".concat(e),key:a},o.a.createElement("div",{className:"service service__style--2"},o.a.createElement("div",{className:"icon"},t.icon),o.a.createElement("div",{className:"content"},o.a.createElement("h3",{className:"title"},t.title),o.a.createElement("p",null,t.description))))})))}}]),a}(s.Component),q=[{textPosition:"text-left",category:"",description:"",buttonText:"",buttonLink:""}],U=function(){return o.a.createElement("div",{className:"active-dark"},o.a.createElement(p,null),o.a.createElement(S,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),o.a.createElement("div",{id:"home",className:"fix"},o.a.createElement("div",{className:"slider-wrapper"},q.map(function(e,t){return o.a.createElement("div",{className:"slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image coverphoto",key:t},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner ".concat(e.textPosition)},e.category?o.a.createElement("span",null,e.category):"",o.a.createElement("h1",{className:"title"},"Standard lausnir ",o.a.createElement("br",null),o.a.createElement(g.a,null,o.a.createElement("span",null," Vefs\xed\xf0uger\xf0"),o.a.createElement("span",null," Hugb\xfana\xf0arger\xf0"),o.a.createElement("span",null," T\xf6lvu og t\xe6knir\xe1\xf0gj\xf6f"))," "),e.description?o.a.createElement("p",{className:"description"},e.description):"",e.buttonText?o.a.createElement("div",{className:"slide-btn"},o.a.createElement("a",{className:"rn-button-style--2 btn-primary-color",href:"".concat(e.buttonLink)},e.buttonText)):"")))))}))),o.a.createElement("div",{id:"about",className:"fix"},o.a.createElement("div",{className:"about-area ptb--120  bg_color--1"},o.a.createElement("div",{className:"about-wrapper"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row--35 align-items-center"},o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("div",{className:"thumbnail"},o.a.createElement("img",{className:"w-100",src:"/assets/images/about/DSC_1142.png",alt:"About Images"}))),o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("div",{className:"about-inner inner"},o.a.createElement("div",{className:"section-title"},o.a.createElement("h2",{className:"title"},"Um mig"),o.a.createElement("p",{className:"description"},"\xc9g heiti Dav\xed\xf0 V. Arnalds og er kerfisfr\xe6\xf0ingur og rafeindavirki. \xc9g s\xe9rh\xe6fi mig \xed vefs\xed\xf0u/hugb\xfana\xf0arger\xf0, t\xf6lvu og t\xe6knir\xe1\xf0gj\xf6f og vi\xf0ger\xf0um \xe1 rafeindab\xfana\xf0i.")),o.a.createElement("div",{className:"row mt--30"},o.a.createElement(A,{tabStyle:"tab-style--1"}))))))))),o.a.createElement("div",{id:"service",className:"fix"},o.a.createElement("div",{className:"service-area creative-service-wrapper ptb--120 bg_color--5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},o.a.createElement("h2",{className:"title"},"\xdej\xf3nusta"),o.a.createElement("p",null,"Standard lausnir kappkosta a\xf0 veita pers\xf3nulega, faglega og sanngjarna \xfej\xf3nustu.")))),o.a.createElement("div",{className:"row creative-service"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(I,{item:"6",column:"col-lg-4 col-md-6 col-sm-6 col-12 text-left"})))))),o.a.createElement("div",{id:"portfolio",className:"fix"},o.a.createElement("div",{className:"portfolio-area ptb--120 bg_color--1"},o.a.createElement("div",{className:"portfolio-sacousel-inner"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},o.a.createElement("h2",{className:"title"},"Verkefni og vi\xf0skiptavinir"),o.a.createElement("p",null,"H\xe9r eru nokkur helstu verkefni og vi\xf0skiptavinir Standard lausna.")))),o.a.createElement("div",{className:"row"},o.a.createElement(H,{styevariation:"text-center mt--40",column:"col-lg-4 col-md-6 col-sm-6 col-12",item:"6"})))))),o.a.createElement("div",{id:"contact",className:"fix"},o.a.createElement("div",{className:"rn-contact-area ptb--120 bg_color--5"},o.a.createElement(M,{contactImages:"/assets/images/about/DSC_1128-Edit.png",contactTitle:"Vinnum saman!"}))),o.a.createElement(R,null),o.a.createElement("div",{className:"backto-top"},o.a.createElement(f.a,{showUnder:160},o.a.createElement(v.a,null))))};function B(e){return function(){var t,a=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var J=function(e){Object(l.a)(a,e);var t=B(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"active-dark"},o.a.createElement("div",{className:"error-page-inner bg_color--4"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("h1",{className:"title theme-gradient"},"404!"),o.a.createElement("h3",{className:"sub-title"},"S\xed\xf0an fannst ekki"),o.a.createElement("span",null,"\xdev\xed mi\xf0ur fannst s\xed\xf0an ekki"),o.a.createElement("div",{className:"error-button"},o.a.createElement("a",{className:"rn-button-style--2 btn-solid",href:"/"},"Aftur \xe1 fors\xed\xf0u"))))))),o.a.createElement("div",{className:"backto-top"},o.a.createElement(f.a,{showUnder:160},o.a.createElement(v.a,null))),o.a.createElement(R,null))}}]),a}(s.Component),Y=a(56),$=a(4),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function Q(e){return function(){var t,a=Object(i.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(c.a)(this,t)}}var X=function(e){Object(l.a)(a,e);var t=Q(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(Y.a,{basename:"/"},o.a.createElement($.c,null,o.a.createElement($.a,{exact:!0,path:"".concat("","/"),component:U}),o.a.createElement($.a,{path:"".concat("","/404"),component:J}),o.a.createElement($.a,{component:J})))}}]),a}(s.Component);u.a.render(o.a.createElement(X,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");G?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):K(t,e)})}}()},59:function(e,t,a){e.exports=a(113)},64:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.7439359d.chunk.js.map