(this["webpackJsonp3d-solar-system"]=this["webpackJsonp3d-solar-system"]||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(18),s=a.n(i),r=(a(25),a(26),a(5)),l=a(6),c=a(3),u=a(4),m=a(0),d=a(9);a(17),a(30);var h=function(e){var t=e.handleStateChange;return o.a.createElement("nav",{className:"navigation"},o.a.createElement("ul",{className:"nav__container"},["About","Portfolio","Contact","Guestbook"].map((function(e,a){return o.a.createElement("li",{className:"nav__link",key:a,onClick:t},e)}))))},g=a(8);a(31),a(32);var p=function(e){var t=e.aboutInfo,a=JSON.parse(t),n=a.username,i=a.status,s=a.intro,r=a.skills;return o.a.createElement("div",{className:"about"},o.a.createElement("h4",{className:"about__username"},n),o.a.createElement("h5",{className:"about__status"},i),o.a.createElement("p",{className:"about__intro"},s),o.a.createElement("div",{className:"about__skills"},o.a.createElement("h5",{className:"about__skills--title"},"Skills"),r.map((function(e,t){var a=e.name,n=e.score,i=e.grade;return o.a.createElement("div",{key:t,className:"about__skill"},o.a.createElement("div",{className:"skill-".concat(a.toLowerCase()," skill-background"),style:{width:"".concat(n,"%")}}),a,": ",n,"pt, ",i)}))))};a(33);var b=function(e){var t=e.portfolioInfo;return JSON.parse(t).map((function(e,t){var a=e.title,n=e.subtitle,i=e.description,s=e.skills,r=e.url,l=e.github;return o.a.createElement("div",{key:t,className:"portfolio-item"},o.a.createElement("h4",{className:"portfolio-item__title"},a),o.a.createElement("h5",{className:"portfolio-item__subtitle"},n),o.a.createElement("p",{className:"portfolio-item__description"},i),o.a.createElement("div",{className:"portfolio-item__skills"},s.map((function(e,t){return o.a.createElement("div",{key:t,className:"portfolio-item__skill skill-".concat(e.toLowerCase())},e)}))),o.a.createElement("div",{className:"portfolio-item__links"},o.a.createElement("a",{className:"portfolio-item__link link-project",href:r},o.a.createElement(g.b,null)),o.a.createElement("a",{className:"portfolio-item__link link-github",href:l},o.a.createElement(g.a,null))))}))};a(34);var f=function(e){var t=e.contactInfo,a=JSON.parse(t),n=a.email,i=a.github,s=a.blogName,r=a.blogUrl;return o.a.createElement("div",{className:"contact-info"},o.a.createElement("h4",{className:"contact-info__email--label"},"E-mail"),o.a.createElement("p",{className:"contact-info__email"},n),o.a.createElement("h4",{className:"contact-info__blog--label"},"Blog"),o.a.createElement("p",{className:"contact-info__blog"},o.a.createElement("a",{href:r},s)),o.a.createElement("h4",{className:"contact-info__github--label"},"Github"),o.a.createElement("p",{className:"contact-info__github"},o.a.createElement("a",{href:i},o.a.createElement(g.a,null))))},v=(a(35),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={guestbook:null},e.loadGuestbookData=e.loadGuestbookData.bind(Object(l.a)(e)),e.postGuestbookData=e.postGuestbookData.bind(Object(l.a)(e)),e.handleGuestbookSubmit=e.handleGuestbookSubmit.bind(Object(l.a)(e)),e}return Object(r.a)(a,[{key:"loadGuestbookData",value:function(e){var t=this;Object(d.database)().ref(e).on("value",(function(e){if(e.val().length<1)console.log("There's no guestbook data.");else{var a=[];e.forEach((function(e){var t={key:e.key,data:e.val()};a.push(t)})),a.sort((function(e,t){return t.data.regTime-e.data.regTime})),t.setState({guestbook:a})}}))}},{key:"postGuestbookData",value:function(e,t){Object(d.database)().ref(t).push(e).then((function(e){console.log("Data is successfully written")}),(function(e){console.error("Error: ".concat(e))}))}},{key:"handleGuestbookSubmit",value:function(e){e.preventDefault();var t={regTime:(new Date).getTime(),name:e.target.querySelector("#name").value,password:e.target.querySelector("#password").value,message:e.target.querySelector("#message").value};this.validateSubmit(t)?(e.target.querySelector("#name").value="",e.target.querySelector("#password").value="",e.target.querySelector("#message").value="",this.postGuestbookData(t,"guestbook")):alert("You have to enter the form with the proper length of characters")}},{key:"validateSubmit",value:function(e){var t=e.name,a=e.password,n=e.message,o=t.length<=12&&t.length>=1,i=4===a.length,s=n.length<=200&&n.length>=1;return!!(o&&i&&s)}},{key:"componentDidMount",value:function(){this.loadGuestbookData("guestbook")}},{key:"render",value:function(){var e=this.state;return o.a.createElement("div",{className:"guestbook"},o.a.createElement("form",{className:"guestbook-form",onSubmit:this.handleGuestbookSubmit},o.a.createElement("input",{className:"guestbook-form__name",id:"name",type:"text",placeholder:"Name (12 characters max)",minLength:"1",maxLength:"12"}),o.a.createElement("input",{className:"guestbook-form__password",id:"password",type:"password",minLength:"4",maxLength:"4",placeholder:"Password (4 characters)"}),o.a.createElement("input",{className:"guestbook-form__message",id:"message",type:"text",placeholder:"Message (200 characters max)",minLength:"1",maxLength:"200"}),o.a.createElement("button",{className:"guestbook-form__submit"},"Register")),o.a.createElement("div",{className:"guestbook-list"},e.guestbook?e.guestbook.map((function(e,t){var a=e.data,n=a.name,i=(a.password,a.message),s=a.regTime,r=new Date(s),l="\n                  ".concat("".concat(r.getFullYear()).substring(2),"\n                  /").concat(r.getMonth()+1<10?"0".concat(r.getMonth()+1):r.getMonth()+1,"\n                  /").concat(r.getDate()<10?"0".concat(r.getDate()):r.getDate(),"\n                "),c="\n                  ".concat(r.getHours()<10?"0".concat(r.getHours()):r.getHours(),"\n                  :").concat(r.getMinutes()<10?"0".concat(r.getMinutes()):r.getMinutes(),"\n                ");return o.a.createElement("div",{className:"guestbook-item",key:t,"data-key":e.key},o.a.createElement("p",{className:"guestbook-item__message"},i),o.a.createElement("p",{className:"guestbook-item__registration-info"},o.a.createElement("span",{className:"registration-info__user"},n),o.a.createElement("span",{className:"registration-info__time"},c),o.a.createElement("span",{className:"registration-info__date"},l)))})):null))}}]),a}(o.a.Component));var k=function(e){var t=e.content,a=e.fadingOut,n=e.handleDeleteButton,i=t.title,s=t.subtitle,r=t.body;return o.a.createElement("article",{className:"description-box".concat(a?" fadeout":"")},o.a.createElement("h2",{className:"description__title"},i),o.a.createElement("div",{className:"decorative-line"}),o.a.createElement("h3",{className:"description__subtitle"},s),o.a.createElement("div",{className:"description__body"},function(e){var t=r;switch(e){case"About":t=o.a.createElement(p,{aboutInfo:r});break;case"Portfolio":t=o.a.createElement(b,{portfolioInfo:r});break;case"Contact":t=o.a.createElement(f,{contactInfo:r});break;case"Guestbook":t=o.a.createElement(v,null);break;default:console.error("Error: No component is loaded")}return t}(i)),o.a.createElement("button",{type:"button",className:"description__close-btn",onClick:n},o.a.createElement(g.c,null)))},w=(a(36),function e(t,a,n){Object(m.a)(this,e),this.name=t,this.score=a,this.grade=n}),_={username:"dev-song",status:"A web developer wannabe",intro:"I'm seeking for a better future.",skills:[new w("HTML",70,"Skilled"),new w("CSS",70,"Skilled"),new w("JavaScript",40,"Intermediate"),new w("React",20,"Novice"),new w("NodeJS",5,"Starter"),new w("ExpressJS",5,"Starter"),new w("MySQL",5,"Starter")]},E=function e(t,a,n,o,i,s){Object(m.a)(this,e),this.title=t,this.subtitle=a,this.description=n,this.skills=o,this.url=i,this.github=s},S=[new E("Uprise","To-do List","The web to-do list app using localStorage supporting a clock, multi-language (EN/KO), current weather at the user location with a random background image",["HTML","CSS","JavaScript"],"https://dev-song.github.io/uprise/","https://github.com/dev-song/uprise"),new E("Daily Cat","Random Cat Images Viewer","The web app displaying images of a random cat breed",["HTML","CSS","JavaScript"],"https://dev-song.github.io/_home/projects/DailyCat/","https://github.com/dev-song/_home/tree/master/projects/DailyCat"),new E("Stone","Webpage Template","The clone of a webpage template from Webflow, Stone",["HTML","CSS","JavaScript"],"https://dev-song.github.io/_home/projects/cloneWebTemplate/04_Stone/","https://github.com/dev-song/_home/tree/master/projects/cloneWebTemplate/04_Stone"),new E("Brav","Webpage Template","The clone of a webpage template from Webflow, Biznus",["HTML","CSS","JavaScript"],"https://dev-song.github.io/_home/projects/cloneWebTemplate/03_Biznus/","https://github.com/dev-song/_home/tree/master/projects/cloneWebTemplate/03_Biznus"),new E("Digital Rain","Web Screensaver App","The web screensaver inspired by a movie, Matrix",["HTML","CSS","JavaScript"],"https://dev-song.github.io/_home/projects/digitalRain/digital_rain.html","https://github.com/dev-song/_home/tree/master/projects/digitalRain")],N={email:"dvlprsong@gmail.com",github:"https://github.com/dev-song",blogName:"What I Did Today",blogUrl:"https://til-devsong.tistory.com/"},y=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Object(m.a)(this,e),this.title=t,this.subtitle=a,this.body=n},j=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={selectedLink:null,isFadingOut:!1,contentByMenu:{About:new y("About","Who Am I",JSON.stringify(_)),Portfolio:new y("Portfolio","Participated Projects",JSON.stringify(S)),Contact:new y("Contact","How to Contact Me",JSON.stringify(N)),Guestbook:new y("Guestbook","Leave A Message")}},e.handleStateChange=e.handleStateChange.bind(Object(l.a)(e)),e.handleDeleteButton=e.handleDeleteButton.bind(Object(l.a)(e)),e}return Object(r.a)(a,[{key:"handleStateChange",value:function(e){var t=this,a=e.target.textContent;if(this.state.selectedLink){if(this.state.selectedLink===a)return;this.setState({isFadingOut:!0}),setTimeout((function(){t.setState({selectedLink:null,isFadingOut:!1}),t.setState({selectedLink:a})}),600)}else this.setState({selectedLink:a})}},{key:"handleDeleteButton",value:function(){var e=this;this.setState({isFadingOut:!0}),setTimeout((function(){e.setState({selectedLink:null,isFadingOut:!1})}),600)}},{key:"componentDidMount",value:function(){Object(d.initializeApp)({apiKey:"AIzaSyBK8K7qYrjLgRHUIBafGSENfMhl0FpdeWE",authDomain:"home-guestbook.firebaseapp.com",databaseURL:"https://home-guestbook.firebaseio.com",projectId:"home-guestbook",storageBucket:"home-guestbook.appspot.com",messagingSenderId:"142799144544",appId:"1:142799144544:web:001250f60df6f2b396a505",measurementId:"G-67LGRCK27G"})}},{key:"render",value:function(){var e=this.state;return o.a.createElement("main",{role:"main"},o.a.createElement(h,{handleStateChange:this.handleStateChange}),e.selectedLink?o.a.createElement(k,{content:e.contentByMenu[e.selectedLink],fadingOut:e.isFadingOut,handleDeleteButton:this.handleDeleteButton}):null)}}]),a}(o.a.Component),O=a(2),D=a(19);function C(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,l=new O.h(e,t);l.position.set(i,r,s),l.scale.setScalar(n),l.name=o;var c=new O.f;return c.add(l),a.add(c),{mesh:l,group:c}}function L(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.rotation.y=t*a,n&&(e.rotation.x=t*a,e.rotation.z=t*a)}function M(e,t,a){e.rotation.y=t*a}var T=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,n,o,i,s,r,l,c,u,m,d,h=new O.c,g=new Array(5).fill("").map((function(e){for(var t=.4*Math.random();t<.1;)t=.4*Math.random();return Math.ceil(100*t)/100})),p=new O.s;(t=new O.j(80,window.innerWidth/window.innerHeight,1,2048)).position.set(256,1024/3,256),t.lookAt(0,0,0),e=new O.n,u=new O.m,(a=new O.u({antialias:!0})).setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight),this.mount.appendChild(a.domElement),(n=new D.a(t,a.domElement)).enableDamping=!0,n.dampingFactor=.05,n.minDistance=128,n.maxDistance=716.8;var b=new O.i({flatShading:!0,color:"salmon"}),f=new O.i({flatShading:!0,color:"wheat"}),v=new O.i({flatShading:!0,color:"midnightblue"}),k=new O.i({flatShading:!0,color:"sienna"}),w=new O.i({flatShading:!0,color:"orchid"}),_=new O.d(8,16,8),E=new O.b(12,12,12),S=new O.o(16,4,2),N=new O.o(16,8,8),y=new O.o(16,12,12);o=C(_,b,e,1.5,"planet",-80,-40,-80),i=C(E,f,e,1.5,"planet",160,0,80),s=C(S,v,e,1.6,"planet",-320,-60,-40),r=C(N,k,e,1.3,"planet",400,-40,40),l=C(y,w,e,1.5,"planet",-600,0,-20),m=function(e){return e.children.map((function(e){return e.children[0]})).filter((function(e){return!!e&&"planet"===e.name}))}(e);var j=(new O.r).load("./textures/stars.jpeg"),T=new O.o(1024,64,64),x=new O.i({map:j,side:O.a});c=C(T,x,e,1,"background",0,0,0);var H=new O.k("#ccc",2,2048);H.position.set(0,0,0),e.add(H),function b(){requestAnimationFrame(b),n.update(),function(){var n=h.getElapsedTime();L(o.mesh,n,g[0],!0),L(i.mesh,n,g[1],!0),L(s.mesh,n,g[2],!0),L(r.mesh,n,g[3],!0),L(l.mesh,n,g[4],!0),L(c.mesh,n,.005),M(o.group,n,g[0]),M(i.group,n,g[1]),M(s.group,n,g[2]),M(r.group,n,g[3]),M(l.group,n,g[4]),function(){u.setFromCamera(p,t);var e=u.intersectObjects(m);e.length>0?d!==e[0].object&&(d&&d.material.emissive.setHex(d.currentHex),(d=e[0].object).currentHex=d.material.emissive.getHex(),d.material.emissive.setHex(11184810)):(d&&d.material.emissive.setHex(d.currentHex),d=null)}(),a.render(e,t)}()}(),window.addEventListener("resize",(function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}),!1),document.addEventListener("mousemove",(function(e){e.preventDefault(),p.x=e.clientX/window.innerWidth*2-1,p.y=-e.clientY/window.innerHeight*2+1}),!1)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"system__container",ref:function(t){return e.mount=t},style:{height:window.innerHeight}})}}]),a}(o.a.Component);var x=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(j,null),o.a.createElement(T,null))};s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.660b9a01.chunk.js.map