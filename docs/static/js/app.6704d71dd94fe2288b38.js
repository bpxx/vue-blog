webpackJsonp([7,5],{0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var a=o(36),u=n(a),r=o(284),i=n(r),s=o(38),l=o(294),c=n(l),d=o(293),f=n(d),p=o(274),v=n(p);u["default"].use(v["default"]),u["default"].use(f["default"]),u["default"].use(c["default"]),u["default"].filter("smartDate",s.smartDate);var _=new c["default"]({history:!0,hashbang:!1});_.map({"/home":{name:"home",component:function(t){o.e(0,function(e){var o=[e(287)];t.apply(null,o)}.bind(this))}},"/login":{component:function(t){o.e(3,function(e){var o=[e(289)];t.apply(null,o)}.bind(this))}},"/register":{component:function(t){o.e(2,function(e){var o=[e(290)];t.apply(null,o)}.bind(this))}},"/blog/:id":{name:"blog",component:function(t){o.e(1,function(e){var o=[e(285)];t.apply(null,o)}.bind(this))}},"/edit/:id":{component:function(t){o.e(4,function(e){var o=[e(286)];t.apply(null,o)}.bind(this))}}}),_.redirect({"*":"/home"}),_.start(i["default"],"#app")},2:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e["default"]=t,e}function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.postBlog=e.postComment=e.register=e.login=e.setComments=e.setBlog=e.logout=e.setUser=e.setBlogs=void 0;var u=o(52),r=a(u),i=o(5),s=n(i),l=o(37),c=o(35),d=a(c),f=o(95),p=a(f);o(91);var v=o(87),_=a(v),g=function(t,e){var o=_["default"].createHash("md5");return o.update(t+e).digest("hex")};d["default"].setOptions({highlight:function(t){return p["default"].highlightAuto(t).value}});e.setBlogs=function(t,e){var o=t.dispatch,n=arguments.length<=2||void 0===arguments[2]?5:arguments[2];o(s.SET_ISFETCH,0),this.$http.get(l.API_ROOT+"api/blogs",{params:{page:e,size:n}}).then(function(t){var e=!0,n=!1,a=void 0;try{for(var u,i=(0,r["default"])(t.data.blogs);!(e=(u=i.next()).done);e=!0){var l=u.value;l.content=(0,d["default"])(l.content)}}catch(c){n=!0,a=c}finally{try{!e&&i["return"]&&i["return"]()}finally{if(n)throw a}}o(s.SET_BLOGS,t.data.blogs,t.data.page),o(s.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.setUser=function(t){var e=t.dispatch;e(s.SET_ISFETCH,0),this.$http.get(l.API_ROOT+"api/user",{headers:{token:window.localStorage.getItem("token")}}).then(function(t){e(s.SET_USER,t.data.user),e(s.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.logout=function(t){var e=t.dispatch;window.localStorage.clear(),e(s.CLEAR_USER)},e.setBlog=function(t){var e=t.dispatch;e(s.SET_ISFETCH,0),this.$http.get(l.API_ROOT+"api/blog",{params:{_id:this.$route.params.id}}).then(function(t){t.data.blog.marked=(0,d["default"])(t.data.blog.content),e(s.SET_BLOG,t.data.blog),e(s.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.setComments=function(t,e){var o=t.dispatch,n=arguments.length<=2||void 0===arguments[2]?5:arguments[2];o(s.SET_ISFETCH,0),this.$http.get(l.API_ROOT+"api/comment",{params:{id:this.$route.params.id,page:e,size:n}}).then(function(t){var e=!0,n=!1,a=void 0;try{for(var u,i=(0,r["default"])(t.data.comments);!(e=(u=i.next()).done);e=!0){var l=u.value;l.content=(0,d["default"])(l.content)}}catch(c){n=!0,a=c}finally{try{!e&&i["return"]&&i["return"]()}finally{if(n)throw a}}o(s.SET_COMMENTS,t.data.comments,t.data.page),o(s.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.login=function(t,e,o){var n=t.dispatch;n(s.SET_ISFETCH,0),this.$http.post(l.API_ROOT+"api/login",{username:e.trim(),password:g(e.trim(),o)}).then(function(t){n(s.SET_USER,t.data.user),n(s.SET_ISFETCH,1),window.localStorage.setItem("token",t.data.token),this.$route.router.go(-1)}).then(function(t){console.log(t)})},e.register=function(t,e,o){var n=t.dispatch;n(s.SET_ISFETCH,0),this.$http.post(l.API_ROOT+"api/register",{username:e.trim(),password:g(e.trim(),o)}).then(function(t){n(s.SET_USER,t.data.user),n(s.SET_ISFETCH,1),window.localStorage.setItem("token",t.data.token),this.$route.router.go(-1)}).then(function(t){console.log(t)})},e.postComment=function(t,e){var o=t.dispatch;o(s.SET_ISFETCH,0),this.$http.post(l.API_ROOT+"api/comment",e,{headers:{token:window.localStorage.getItem("token")}}).then(function(t){t.data.comment[0].content=(0,d["default"])(t.data.comment[0].content),o(s.CONCAT_COMMENT,t.data.comment),o(s.SET_ISFETCH,1)}).then(function(t){console.log(t)})},e.postBlog=function(t,e){var o=t.dispatch;o(s.SET_ISFETCH,0),this.$http.post(l.API_ROOT+"api/blog",e,{headers:{token:window.localStorage.getItem("token")}}).then(function(t){o(s.SET_ISFETCH,1),this.$route.router.go({name:"blog",params:{id:t.data.blog_id}})}).then(function(t){console.log(t)})}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SET_BLOGS="SET_BLOGS",e.SET_ISFETCH="SET_ISFETCH",e.SET_BLOG="SET_BLOG",e.SET_COMMENTS="SET_COMMENTS",e.CONCAT_COMMENT="CONCAT_COMMENT",e.SET_USER="SET_USER",e.CLEAR_USER="CLEAR_USER"},8:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getBlogs=function(t){var e=t.home;return e.blogs},e.getBPage=function(t){var e=t.home;return e.page},e.getIsFetch=function(t){var e=t.load;return e.isFetch},e.getUser=function(t){var e=t.header;return e.user},e.getBlog=function(t){var e=t.blog;return e.blog},e.getComments=function(t){var e=t.blog;return e.comments},e.getCPage=function(t){var e=t.blog;return e.page}},37:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_ROOT="https://express-vue-blog.herokuapp.com/"},38:function(t,e){"use strict";function o(t){if("string"==typeof t&&(t=parseInt(t)),isNaN(t))return"";var e=new Date,o=e.getTime(),n="刚刚",a=o-t;if(a>6048e5){var u=new Date(t),r=u.getFullYear(),i=u.getMonth()+1,s=u.getDate(),l=u.getHours(),c=u.getMinutes();n=r===e.getFullYear()?"":r+"年",n=n+i+"月"+s+"日"+l+":"+(c<10?"0":"")+c}else a>=864e5?n=Math.floor(a/864e5)+"天前":a>=36e5?n=Math.floor(a/36e5)+"小时前":a>=6e4&&(n=Math.floor(a/6e4)+"分钟前");return n}Object.defineProperty(e,"__esModule",{value:!0}),e.smartDate=o},39:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a,u=o(9),r=n(u),i=o(5),s={blog:{},comments:[],page:{}},l=(a={},(0,r["default"])(a,i.SET_BLOG,function(t,e){t.blog=e}),(0,r["default"])(a,i.SET_COMMENTS,function(t,e,o){t.comments=e,t.page=o}),(0,r["default"])(a,i.CONCAT_COMMENT,function(t,e){t.comments=e.concat(t.comments)}),a);e["default"]={state:s,mutations:l}},40:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a,u=o(9),r=n(u),i=o(5),s={user:""},l=(a={},(0,r["default"])(a,i.SET_USER,function(t,e){t.user=e}),(0,r["default"])(a,i.CLEAR_USER,function(t){t.user=""}),a);e["default"]={state:s,mutations:l}},41:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(9),u=n(a),r=o(5),i={blogs:[],page:{}},s=(0,u["default"])({},r.SET_BLOGS,function(t,e,o){t.blogs=e,t.page=o});e["default"]={state:i,mutations:s}},42:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(9),u=n(a),r=o(5),i={isFetch:0},s=(0,u["default"])({},r.SET_ISFETCH,function(t,e){t.isFetch=e});e["default"]={state:i,mutations:s}},43:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(36),u=n(a),r=o(295),i=n(r),s=o(41),l=n(s),c=o(40),d=n(c),f=o(39),p=n(f),v=o(42),_=n(v);u["default"].use(i["default"]),u["default"].config.debug=!0;var g=!1;e["default"]=new i["default"].Store({strict:g,modules:{home:l["default"],header:d["default"],blog:p["default"],load:_["default"]}})},44:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(292),u=n(a),r=o(291),i=n(r),s=o(43),l=n(s);e["default"]={components:{Vheader:u["default"],Vfooter:i["default"]},store:l["default"]}},48:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["load"]}},51:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(288),u=n(a),r=o(2),i=o(8);e["default"]={vuex:{actions:{setUser:r.setUser,logout:r.logout},getters:{user:i.getUser,isFetch:i.getIsFetch}},components:{Loading:u["default"]},ready:function(){window.localStorage.getItem("token")&&this.setUser()}}},91:function(t,e){},92:function(t,e){},93:function(t,e){},275:function(t,e){t.exports=' <vheader></vheader> <div class="uk-container uk-container-center"> <div class=uk-grid> <router-view></router-view> </div> </div> <vfooter></vfooter> '},279:function(t,e){t.exports=' <div v-show=load class="uk-width-1-1 uk-text-center"> <span><i class="uk-icon-spinner uk-icon-large uk-icon-spin"></i> 正在加载...</span> </div> '},282:function(t,e){t.exports=' <div class=uk-margin-large-top style="background-color:#eee; border-top:1px solid #ccc"> <div class="uk-container uk-container-center uk-text-center"> <div class="uk-panel uk-margin-top uk-margin-bottom"> <p>Powered by <a href=https://vuejs.org.cn/ >Vue</a>|<a href=http://getuikit.net/ >Uikit</a>|<a href=http://expressjs.com/zh-cn/ >Express</a>. Copyright &copy; 2016</p> </div> </div> </div> '},283:function(t,e){t.exports=' <nav class="uk-navbar uk-navbar-attached uk-margin-bottom" _v-09aa8206=""> <div class="uk-container uk-container-center" _v-09aa8206=""> <ul class=uk-navbar-nav _v-09aa8206=""> <li _v-09aa8206=""><a v-link="\'/home\'" _v-09aa8206=""><i class=uk-icon-home _v-09aa8206=""></i> 主页</a></li> </ul> <div class=uk-navbar-flip _v-09aa8206=""> <ul v-show=user class=uk-navbar-nav _v-09aa8206=""> <li class=uk-parent data-uk-dropdown="" _v-09aa8206=""> <a _v-09aa8206=""><i v-text="\' \'+user.nickname" class=uk-icon-user _v-09aa8206=""></i></a> <div class="uk-dropdown uk-dropdown-navbar" _v-09aa8206=""> <ul class="uk-nav uk-nav-navbar" _v-09aa8206=""> <li _v-09aa8206=""><a v-on:click=logout href=javascript:; _v-09aa8206=""><i class=uk-icon-sign-out _v-09aa8206=""></i> 登出</a></li> </ul> </div> </li> </ul> <ul v-else="" class=uk-navbar-nav _v-09aa8206=""> <li _v-09aa8206=""><a v-link="\'/login\'" _v-09aa8206=""><i class=uk-icon-sign-in _v-09aa8206=""></i> 登陆</a></li> <li _v-09aa8206=""><a v-link="\'/register\'" _v-09aa8206=""><i class=uk-icon-edit _v-09aa8206=""></i> 注册</a></li> </ul> </div> </div> </nav> <loading v-bind:load=!isFetch _v-09aa8206=""></loading> '},284:function(t,e,o){var n,a;o(92),n=o(44),a=o(275),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},288:function(t,e,o){var n,a;n=o(48),a=o(279),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},291:function(t,e,o){var n,a;a=o(282),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},292:function(t,e,o){var n,a;o(93),n=o(51),a=o(283),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},296:function(t,e){}});
//# sourceMappingURL=app.6704d71dd94fe2288b38.js.map