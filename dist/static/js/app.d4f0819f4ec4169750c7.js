webpackJsonp([1],{"+FiA":function(t,i){},"+skl":function(t,i){},"/EVz":function(t,i){},"0PAh":function(t,i){},"0iVY":function(t,i){},"1aDS":function(t,i){},"4JBu":function(t,i){},"4XWY":function(t,i){},"5n2f":function(t,i){},AYwA:function(t,i){},BdZR:function(t,i){},"I8O/":function(t,i){},LKus:function(t,i){},LW0X:function(t,i,s){"use strict";var a={name:"Icon",props:{type:String,size:[Number,String],color:String},computed:{classes:function(){return"ivu-icon ivu-icon-"+this.type},styles:function(){var t={};return this.size&&(t["font-size"]=this.size+"px"),this.color&&(t.color=this.color),t}}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("i",{class:this.classes,style:this.styles})},staticRenderFns:[]},n=s("VU/8")(a,o,!1,null,null,null);i.a=n.exports},MOQp:function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("EMb8"),o=s("7+uW"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var e=s("VU/8")({name:"app"},n,!1,function(t){s("q7FV")},null,null).exports,c=s("/ocq"),r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"block music",on:{click:function(i){t.$router.push("/musics/list")}}},[s("div",[t._v("音乐")])]),t._v(" "),s("div",{staticClass:"block reading",on:{click:function(i){t.$router.push("/reading/list")}}},[s("div",[t._v("阅读")])]),t._v(" "),s("div",{staticClass:"block movie",on:{click:function(i){t.$router.push("/movies/list")}}},[s("div",[t._v("电影")])])])},staticRenderFns:[]};var l=s("VU/8")({name:"index"},r,!1,function(t){s("MOQp")},"data-v-3a38b70a",null).exports,u=s("mtWM"),v=s.n(u),d={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"block_choose"},[s("p",{on:{click:function(i){t.$router.push("/musics/list")}}},[t._v("音乐")]),t._v(" "),s("p",{on:{click:function(i){t.$router.push("/movies/list")}}},[t._v("电影")]),t._v(" "),s("p",{on:{click:function(i){t.$router.push("/reading/list")}}},[t._v("阅读")])])},staticRenderFns:[]};var m=s("VU/8")(null,d,!1,function(t){s("0PAh")},"data-v-ec4e24c2",null).exports,h={name:"music_list",components:{Icon:a.a,chooseBlock:m},data:function(){return{musicInfo_list:[],music_list:[],chooseBlock:!1}},created:function(){var t=this;v.a.get("http://v3.wufazhuce.com:8000/api/music/idlist/0?version=3.5.0&platform=android").then(function(i){t.music_list=i.data.data,t.musicInfo_list=[],t.info_list=[],t.music_list.forEach(function(i){var s="http://v3.wufazhuce.com:8000/api/music/detail/"+i+"?version=3.5.0&platform=android";v.a.get(s).then(function(i){t.musicInfo_list.push(i.data.data)})})})},methods:{linkTo:function(t){this.$router.push({name:"music",params:{id:t}})}}},_={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"header"},[s("span",{on:{click:function(i){t.$router.go(-1)}}},[s("Icon",{attrs:{type:"chevron-left"}})],1),t._v(" "),s("span",[t._v("音乐")]),t._v(" "),s("span",{staticClass:"chevron_down",on:{click:function(i){t.chooseBlock=!t.chooseBlock}}},[s("Icon",{attrs:{type:"chevron-down"}})],1)]),t._v(" "),t.chooseBlock?s("chooseBlock"):t._e(),t._v(" "),t._l(t.musicInfo_list,function(i,a){return s("div",{key:a,staticClass:"list",on:{click:function(s){t.linkTo(i.id)}}},[s("img",{staticClass:"img",attrs:{src:i.feeds_cover}}),t._v(" "),s("div",{staticClass:"text"},[s("p",{staticClass:"title"},[t._v(t._s(i.story_title))]),t._v(" "),s("p",{staticClass:"musicTitle"},[t._v(t._s(i.title)+"|"+t._s(i.author.user_name))])])])})],2)},staticRenderFns:[]};var p=s("VU/8")(h,_,!1,function(t){s("lMw3")},"data-v-3078203c",null).exports,f={name:"CommentList",components:{Icon:a.a},data:function(){return{comments:""}},created:function(){var t=this,i="http://v3.wufazhuce.com:8000/api/music/detail/"+this.$route.params.id+"?version=3.5.0&platform=android";v.a.get(i).then(function(i){t.comments=i.data.data,console.log("comments:"),console.log(t.comments)}).catch()}},C={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"comment other"},[s("div",{staticClass:"comment_info other_title"},[t._v("评论列表")]),t._v(" "),t._l(t.comments,function(i,a){return s("div",{key:a,staticClass:"comment_info"},[s("div",{staticClass:"other_info comment_author "},[s("img",{staticClass:"comment_img ",attrs:{src:i.user.web_url}}),t._v(" "),s("div",{staticClass:"comment_name "},[t._v(t._s(i.user.user_name))]),t._v(" "),s("div",{staticClass:"comment_time"},[t._v(t._s(i.created_at))])]),t._v(" "),s("div",{staticClass:"comment_content"},[t._v(t._s(i.content))]),t._v(" "),s("div",{staticClass:"comment_option"},[s("Icon",{staticClass:"opt",attrs:{type:"chatbox-working"}}),t._v(" "),s("Icon",{staticClass:"opt",attrs:{type:"thumbsup"}}),t._v(" "),s("span",{staticClass:"opt count"},[t._v(t._s(i.praisenum))])],1)])})],2)},staticRenderFns:[]};var y=s("VU/8")(f,C,!1,function(t){s("LKus")},null,null).exports,g={name:"musicDiscribe",props:["musicInfo"],components:{Icon:a.a},data:function(){return{artical:"",showAudio:!1,currentTime:"0'0\"",playAudio:!1}},computed:{duration:function(){var t=this.artical.audio_duration,i=parseInt(t/3600),s=parseInt((t-3600*i)/60),a=t-3600*i-60*s;return a<10&&(a="0"+a),s&&(t=s+":"+a),i&&(t=i+":"+t),t}},created:function(){},methods:{ifShowAudio:function(){this.showAudio=!this.showAudio},ifPlayAudio:function(){this.playAudio=!this.playAudio},getCurrentTime:function(t){this.currentTime=t}}},I={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.musicInfo&&t.musicInfo.cover?s("div",[s("img",{staticClass:"bgPic",attrs:{src:t.musicInfo.cover}}),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(t.musicInfo.story_title))]),t._v(" "),s("div",{staticClass:"side_title"},[s("span",[t._v("文/"+t._s(t.musicInfo.author_list[0].user_name))]),t._v(" "),s("div",{staticClass:"lyricBtn",on:{click:function(i){t.$emit("ifShowLyric")}}},[s("Icon",{staticClass:"icon icon-volume-up",attrs:{type:"ipod"}})],1)]),t._v(" "),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.musicInfo.story)}}),t._v(" "),s("div",{staticClass:"side_title"},[t._v(t._s(t.musicInfo.charge_edt))])]):t._e()},staticRenderFns:[]};var w=s("VU/8")(g,I,!1,function(t){s("cHfI")},"data-v-34562c93",null).exports,k={props:["musicInfo"],components:{Icon:a.a},data:function(){return{enable:"lyric"}},computed:{lyric:function(){return this.musicInfo.lyric.split("\r")},info:function(){return this.musicInfo.info.split("\r")}},methods:{switchBar:function(t){this.enable=t,console.log(this)}}},A={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"close",on:{click:function(i){t.$emit("ifShowLyric")}}},[s("Icon",{attrs:{type:"close-round"}})],1),t._v(" "),s("div",{staticClass:"controler"},[s("div",{class:"lyric"==t.enable?"active":"un",on:{click:function(i){t.switchBar("lyric")}}},[t._v("歌词")]),t._v(" "),s("div",{class:"desc"==t.enable?"active":"un",on:{click:function(i){t.switchBar("desc")}}},[t._v("简介")])]),t._v(" "),"lyric"==t.enable?s("div",{staticClass:"lyric"},t._l(t.lyric,function(i,a){return s("p",{key:a},[t._v(t._s(i))])})):t._e(),t._v(" "),"desc"==t.enable?s("div",{staticClass:"desc"},[s("img",{staticClass:"img",attrs:{src:t.musicInfo.cover}}),t._v(" "),t._l(t.info,function(i,a){return s("p",{key:a},[t._v(t._s(i))])})],2):t._e()])},staticRenderFns:[]};var b={name:"music",components:{commentList:y,musicDiscribe:w,lyric:s("VU/8")(k,A,!1,function(t){s("+FiA")},"data-v-7cf0095e",null).exports,Icon:a.a},data:function(){return{comments:"",music:"",showLyric:!1}},computed:{duration:function(){var t=this.music.audio_duration,i=parseInt(t/3600),s=parseInt((t-3600*i)/60),a=t-3600*i-60*s;return a<10&&(a="0"+a),s&&(t=s+":"+a),i&&(t=i+":"+t),t}},created:function(){var t=this,i="http://v3.wufazhuce.com:8000/api/music/detail/"+this.$route.params.id+"?version=3.5.0&platform=android";v.a.get(i).then(function(i){t.music=i.data.data,t.author_list=t.music.author_list,console.log("music:"),console.log(t.music)}).catch(function(t){console.log(t)})},methods:{ifShowLyric:function(){this.showLyric=!this.showLyric}}},$={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.music?s("div",{staticClass:"container"},[t.showLyric?s("div",[s("lyric",{attrs:{musicInfo:t.music},on:{ifShowLyric:t.ifShowLyric}})],1):s("div",[s("div",{staticClass:"header"},[s("span",{staticClass:"icn",on:{click:function(i){t.$router.go(-1)}}},[s("Icon",{attrs:{type:"chevron-left"}})],1)]),t._v(" "),s("div",{staticClass:"musicBody"},[s("transition",{attrs:{name:"slide-fade"}},[s("musicDiscribe",{attrs:{musicInfo:t.music},on:{ifShowLyric:t.ifShowLyric}})],1),t._v(" "),s("div",{staticClass:"author other"},[s("div",{staticClass:"author_title other_title"},[t._v("作者")]),t._v(" "),t._l(t.music.author_list,function(i,a){return s("div",{key:a,staticClass:"author_info other_info"},[s("img",{staticClass:"author_img other_img",attrs:{src:i.web_url}}),t._v(" "),s("div",{staticClass:"author_info_text other_info_text"},[s("div",{staticClass:"author_name other_name"},[t._v(t._s(i.user_name))]),t._v(" "),s("div",{staticClass:"summary side_title"},[t._v(t._s(i.summary))])]),t._v(" "),s("div",{staticClass:"care"},[t._v("关注")])])})],2)],1),t._v(" "),s("div",{staticClass:"footer"},[s("input",{staticClass:"eval",attrs:{placeholder:"写一个评论..."}}),t._v(" "),s("div",{staticClass:"love"},[s("Icon",{attrs:{type:"android-favorite-outline"}}),t._v(" "),s("div",{staticClass:"asign"},[t._v(t._s(t.music.praisenum))])],1),t._v(" "),s("div",{staticClass:"evalCount"},[s("Icon",{attrs:{type:"ios-chatbubble-outline"}}),t._v(" "),s("div",{staticClass:"asign"},[t._v(t._s(t.music.sharenum))])],1),t._v(" "),s("div",{staticClass:"share"},[s("Icon",{attrs:{type:"share"}})],1)])])]):t._e()},staticRenderFns:[]};var T=s("VU/8")(b,$,!1,function(t){s("4XWY")},"data-v-b2d3ffb8",null).exports,x={name:"movie_list",components:{Icon:a.a,chooseBlock:m},data:function(){return{movieInfo_list:[],movie_list:[],chooseBlock:!1,loadDone:!1}},created:function(){var t=this;v.a.get("http://v3.wufazhuce.com:8000/api/movie/list/0?version=3.5.0&platform=android").then(function(i){t.movie_list=i.data.data,t.movieInfo_list=[];for(var s=function(i){var s="http://v3.wufazhuce.com:8000/api/movie/"+t.movie_list[i].id+"/story/1/0?version=3.5.0&platform=android";v.a.get(s).then(function(s){t.movie_list[i].movieInfo=s.data.data.data[0]});var a="http://v3.wufazhuce.com:8000/api/movie/detail/"+t.movie_list[i].id+"?version=3.5.0&platform=android";v.a.get(a).then(function(s){t.movie_list[i].movieImg=s.data.data,t.loadDone=i==t.movie_list.length-1,console.log(t.loadDone)})},a=0;a<t.movie_list.length;a++)s(a)})},methods:{linkTo:function(t){this.$router.push({name:"movie",params:{id:t}})}}},L={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"header"},[s("span",{on:{click:function(i){t.$router.go(-1)}}},[s("Icon",{attrs:{type:"chevron-left"}})],1),t._v(" "),s("span",[t._v("电影")]),t._v(" "),s("span",{staticClass:"chevron_down",on:{click:function(i){t.chooseBlock=!t.chooseBlock}}},[s("Icon",{attrs:{type:"chevron-down"}})],1)]),t._v(" "),t.chooseBlock?s("chooseBlock"):t._e(),t._v(" "),t.movie_list?s("div",t._l(t.movie_list,function(i,a){return s("div",{key:a,staticClass:"list",attrs:{movieTitle:i.title},on:{click:function(s){t.linkTo(i.id)}}},[t.loadDone?s("img",{staticClass:"img",attrs:{src:i.movieImg.detailcover}}):t._e(),t._v(" "),t.loadDone?s("div",{staticClass:"text"},[s("p",{staticClass:"title"},[t._v(t._s(i.movieInfo.title))]),t._v(" "),s("p",{staticClass:"movieTitle"},[t._v(t._s(i.title))])]):s("div",[t._v("loading")])])})):t._e()],1)},staticRenderFns:[]};var B=s("VU/8")(x,L,!1,function(t){s("1aDS")},"data-v-a9cbb090",null).exports,P={name:"CommentList",components:{Icon:a.a},data:function(){return{comments:""}},created:function(){var t=this,i="http://v3.wufazhuce.com:8000/api/movie/detail/"+this.$route.params.id+"?version=3.5.0&platform=android";v.a.get(i).then(function(i){t.comments=i.data.data,console.log("comments:"),console.log(t.comments)}).catch()}},V={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"comment other"})},staticRenderFns:[]};var F=s("VU/8")(P,V,!1,function(t){s("/EVz")},null,null).exports,z={name:"movieDiscribe",props:["movieInfo"],components:{Icon:a.a},data:function(){return{artical:"",showAudio:!1,currentTime:"0'0\"",playAudio:!1,movieImage:""}},computed:{duration:function(){var t=this.artical.audio_duration,i=parseInt(t/3600),s=parseInt((t-3600*i)/60),a=t-3600*i-60*s;return a<10&&(a="0"+a),s&&(t=s+":"+a),i&&(t=i+":"+t),t}},created:function(){var t=this,i="http://v3.wufazhuce.com:8000/api/movie/detail/"+this.$route.params.id+"?version=3.5.0&platform=android";v.a.get(i).then(function(i){t.movieImage=i.data.data,console.log(t.movieImage)})},methods:{ifShowAudio:function(){this.showAudio=!this.showAudio},ifPlayAudio:function(){this.playAudio=!this.playAudio},getCurrentTime:function(t){this.currentTime=t}}},E={render:function(){var t=this.$createElement,i=this._self._c||t;return this.movieInfo?i("div",[i("img",{staticClass:"bgPic",attrs:{src:this.movieImage.detailcover}}),this._v(" "),i("div",{staticClass:"title"},[this._v(this._s(this.movieInfo.title))]),this._v(" "),i("div",{staticClass:"side_title"},[this._v("文/"+this._s(this.movieInfo.author_list[0].user_name))]),this._v(" "),this.movieInfo.anchor?i("div",{staticClass:"anchor",on:{click:this.ifPlayAudio}},[i("Icon",{staticClass:"icon icon-volume-up",attrs:{type:"android-volume-up"}}),this._v(" "),i("span",[this._v("有声阅读|\n            "),i("span",{domProps:{innerHTML:this._s(this.movieInfo.anchor)}})]),this._v(" "),this.playAudio?i("span",{domProps:{innerHTML:this._s(this.currentTime)}}):i("span",{domProps:{innerHTML:this._s(this.duration)}})],1):this._e(),this._v(" "),this.movieInfo.anchor?i("AudioIt",{attrs:{showAudio:this.showAudio,artical:this.artical,playAudio:this.playAudio},on:{ifShowAudio:this.ifShowAudio,ifPlayAudio:this.ifPlayAudio,getCurrentTime:this.getCurrentTime}}):this._e(),this._v(" "),i("div",{staticClass:"content",domProps:{innerHTML:this._s(this.movieInfo.content)}}),this._v(" "),i("div",{staticClass:"side_title"},[this._v(this._s(this.movieInfo.charge_edt)+this._s(this.movieInfo.ditor_email))])],1):this._e()},staticRenderFns:[]};var R={name:"movie",props:["movieTitle"],components:{commentList:F,movieDiscribe:s("VU/8")(z,E,!1,function(t){s("t4jg")},"data-v-6f808969",null).exports,Icon:a.a},data:function(){return{author_list:[],movie:"",comments:""}},computed:{duration:function(){var t=this.movie.audio_duration,i=parseInt(t/3600),s=parseInt((t-3600*i)/60),a=t-3600*i-60*s;return a<10&&(a="0"+a),s&&(t=s+":"+a),i&&(t=i+":"+t),t}},created:function(){var t=this,i="http://v3.wufazhuce.com:8000/api/movie/"+this.$route.params.id+"/story/1/0?version=3.5.0&platform=android";v.a.get(i).then(function(i){t.movie=i.data.data.data[0],t.author_list=t.movie.author_list,console.log("movie:"),console.log(t.movie)}).catch()}},S={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"header"},[s("span",{on:{click:function(i){t.$router.go(-1)}}},[s("Icon",{attrs:{type:"chevron-left"}})],1),t._v(" "),s("span",[s("Icon",{attrs:{type:"android-bookmark"}})],1)]),t._v(" "),s("div",{staticClass:"movieBbody"},[s("transition",{attrs:{name:"slide-fade"}},[s("movieDiscribe",{attrs:{movieInfo:t.movie}})],1),t._v(" "),s("div",{staticClass:"author other"},[s("div",{staticClass:"author_title other_title"},[t._v("作者")]),t._v(" "),t._l(t.author_list,function(i,a){return s("div",{key:a,staticClass:"author_info other_info"},[s("img",{staticClass:"author_img other_img",attrs:{src:i.web_url}}),t._v(" "),s("div",{staticClass:"author_info_text other_info_text"},[s("div",{staticClass:"author_name other_name"},[t._v(t._s(i.user_name))]),t._v(" "),s("div",{staticClass:"summary side_title"},[t._v(t._s(i.summary))])]),t._v(" "),s("div",{staticClass:"care"},[t._v("关注")])])})],2),t._v(" "),s("commentList")],1),t._v(" "),s("div",{staticClass:"footer"},[s("input",{staticClass:"eval",attrs:{placeholder:"写一个评论..."}}),t._v(" "),s("div",{staticClass:"love"},[s("Icon",{attrs:{type:"android-favorite-outline"}}),t._v(" "),s("div",{staticClass:"asign"},[t._v(t._s(t.movie.praisenum))])],1),t._v(" "),s("div",{staticClass:"evalCount"},[s("Icon",{attrs:{type:"ios-chatbubble-outline"}}),t._v(" "),s("div",{staticClass:"asign"},[t._v(t._s(t.movie.sharenum))])],1),t._v(" "),s("div",{staticClass:"share"},[s("Icon",{attrs:{type:"share"}})],1)])])},staticRenderFns:[]};var U=s("VU/8")(R,S,!1,function(t){s("AYwA")},"data-v-ff84da0c",null).exports,M={name:"Reading_list",components:{Icon:a.a,chooseBlock:m},data:function(){return{artical_list:"",img_list:[],chooseBlock:!1}},created:function(){var t=this;v.a.get("http://v3.wufazhuce.com:8000/api/reading/index/?version=3.5.0&platform=android").then(function(i){t.artical_list=i.data.data.essay}).catch();v.a.get("http://v3.wufazhuce.com:8000/api/hp/idlist/0?version=3.5.0&platform=android").then(function(i){i.data.data.forEach(function(i){var s="http://v3.wufazhuce.com:8000/api/hp/detail/"+i+"?version=3.5.0&platform=android";v.a.get(s).then(function(i){t.img_list.push(i.data.data.hp_img_url),console.log(i.data.data.hp_img_url)}).catch()})}).catch()},methods:{linkTo:function(t){this.$router.push({name:"Artical",params:{id:t}})}}},D={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"hello"},[s("div",{staticClass:"header"},[s("span",{on:{click:function(i){t.$router.go(-1)}}},[s("Icon",{attrs:{type:"chevron-left"}})],1),t._v(" "),s("span",[t._v("阅读")]),t._v(" "),s("span",{staticClass:"chevron_down",on:{click:function(i){t.chooseBlock=!t.chooseBlock}}},[s("Icon",{attrs:{type:"chevron-down"}})],1)]),t._v(" "),t.chooseBlock?s("chooseBlock"):t._e(),t._v(" "),t._l(t.artical_list,function(i,a){return s("div",{key:a,staticClass:"artical_list",on:{click:function(s){t.linkTo(i.content_id)}}},[s("img",{staticClass:"img",attrs:{src:t.img_list[a]}}),t._v(" "),s("div",{staticClass:"text"},[s("p",{staticClass:"title"},[t._v(t._s(i.hp_title))]),t._v(" "),s("p",{staticClass:"author"},[t._v("文/"+t._s(i.author[0].user_name))])])])})],2)},staticRenderFns:[]};var H=s("VU/8")(M,D,!1,function(t){s("BdZR")},"data-v-129c4c3c",null).exports,O={name:"CommentList",components:{Icon:a.a},data:function(){return{comments:""}},created:function(){var t=this,i="http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/"+this.$route.params.id+"/0?version=3.5.0&platform=android";v.a.get(i).then(function(i){t.comments=i.data.data.data}).catch()}},Y={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"comment other"},[s("div",{staticClass:"comment_info other_title"},[t._v("评论列表")]),t._v(" "),t._l(t.comments,function(i,a){return s("div",{key:a,staticClass:"comment_info"},[s("div",{staticClass:"other_info comment_author "},[s("img",{staticClass:"comment_img ",attrs:{src:i.user.web_url}}),t._v(" "),s("div",{staticClass:"comment_name "},[t._v(t._s(i.user.user_name))]),t._v(" "),s("div",{staticClass:"comment_time"},[t._v(t._s(i.created_at))])]),t._v(" "),s("div",{staticClass:"comment_content"},[t._v(t._s(i.content))]),t._v(" "),s("div",{staticClass:"comment_option"},[s("Icon",{staticClass:"opt",attrs:{type:"chatbox-working"}}),t._v(" "),s("Icon",{staticClass:"opt",attrs:{type:"thumbsup"}}),t._v(" "),s("span",{staticClass:"opt count"},[t._v(t._s(i.praisenum))])],1)])})],2)},staticRenderFns:[]};var W=s("VU/8")(O,Y,!1,function(t){s("4JBu")},null,null).exports,q={name:"AudioIt",components:{Icon:a.a},props:["showAudio","artical","playAudio"],data:function(){return{repeat:!1,currentTime:0}},watch:{playAudio:function(){var t=this.$refs.audio;this.playAudio?t.play():t.pause()}},methods:{playControl:function(){this.$emit("ifPlayAudio")},play_time:function(){var t=this.$refs.audio;if(t){var i=t.currentTime,s=parseInt(i/3600),a=parseInt((i-3600*s)/60),o=parseInt(i-3600*s-60*a);i<60&&(this.currentTime=o+'"'),i<3600&&(this.currentTime=a+"'"+o+'"'),i>=3600&&(this.currentTime=s+":"+a+":"+o),this.$emit("getCurrentTime",this.currentTime)}},animatePlayAudio:function(){}}},J={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"myaudio",on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.playControl(i)}}},[s("audio",{ref:"audio",attrs:{loop:t.repeat,src:t.artical.audio},on:{timeupdate:t.play_time}}),t._v(" "),t.showAudio?s("div",{staticClass:"showmore"},[s("div",{staticClass:"anchor",domProps:{innerHTML:t._s(t.artical.anchor)}}),t._v(" "),s("div",{staticClass:"playtime"},[t._v(t._s(t.currentTime))]),t._v(" "),s("div",{staticClass:"play-controler"},[s("div",[s("Icon",{attrs:{type:"skip-backward"}})],1),t._v(" "),s("div",{on:{click:t.playControl}},[t.playAudio?s("Icon",{attrs:{type:"play"}}):s("Icon",{attrs:{type:"pause"}})],1),t._v(" "),s("div",[s("Icon",{attrs:{type:"skip-forward"}})],1)]),t._v(" "),s("div",{staticClass:"play-style"},[s("div",{staticClass:"style",on:{click:function(i){t.repeat=!t.repeat}}},[t.repeat?s("Icon",{attrs:{type:"ios-reverse-camera-outline"}}):s("Icon",{attrs:{type:"ios-barcode-outline"}})],1),t._v(" "),s("div",{staticClass:"other",on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.$emit("ifShowAudio")}}},[s("Icon",{attrs:{type:"android-contract"}})],1)])]):s("div",{staticClass:"showless",on:{click:function(i){t.$emit("ifShowAudio")}}},[s("div",{class:["disc",t.playAudio?"playing":""]})])])},staticRenderFns:[]};var K={name:"ArticalContent",components:{AudioIt:s("VU/8")(q,J,!1,function(t){s("5n2f")},"data-v-372ff2d1",null).exports,Icon:a.a},data:function(){return{artical:"",showAudio:!1,currentTime:"0'0\"",playAudio:!1}},computed:{duration:function(){var t=this.artical.audio_duration,i=parseInt(t/3600),s=parseInt((t-3600*i)/60),a=t-3600*i-60*s;return a<10&&(a="0"+a),s&&(t=s+":"+a),i&&(t=i+":"+t),t}},created:function(){var t=this,i="http://v3.wufazhuce.com:8000/api/essay/"+this.$route.params.id+"?version=3.5.0&platform=android";v.a.get(i).then(function(i){t.artical=i.data.data,console.log(t.artical.audio)}).catch()},methods:{ifShowAudio:function(){this.showAudio=!this.showAudio},ifPlayAudio:function(){this.playAudio=!this.playAudio},getCurrentTime:function(t){this.currentTime=t}}},j={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("div",{staticClass:"title"},[this._v(this._s(this.artical.hp_title))]),this._v(" "),i("div",{staticClass:"side_title"},[this._v("文/"+this._s(this.artical.hp_author))]),this._v(" "),this.artical.anchor?i("div",{staticClass:"anchor",on:{click:this.ifPlayAudio}},[i("Icon",{staticClass:"icon icon-volume-up",attrs:{type:"android-volume-up"}}),this._v(" "),i("span",[this._v("有声阅读|\n            "),i("span",{domProps:{innerHTML:this._s(this.artical.anchor)}})]),this._v(" "),this.playAudio?i("span",{domProps:{innerHTML:this._s(this.currentTime)}}):i("span",{domProps:{innerHTML:this._s(this.duration)}})],1):this._e(),this._v(" "),this.artical.anchor?i("AudioIt",{attrs:{showAudio:this.showAudio,artical:this.artical,playAudio:this.playAudio},on:{ifShowAudio:this.ifShowAudio,ifPlayAudio:this.ifPlayAudio,getCurrentTime:this.getCurrentTime}}):this._e(),this._v(" "),i("div",{staticClass:"content",domProps:{innerHTML:this._s(this.artical.hp_content)}}),this._v(" "),i("div",{staticClass:"side_title"},[this._v(this._s(this.artical.hp_author_introduce))])],1)},staticRenderFns:[]};var N={name:"Artical",components:{CommentList:W,ArticalContent:s("VU/8")(K,j,!1,function(t){s("I8O/")},"data-v-9a82ac9e",null).exports,Icon:a.a},data:function(){return{authorImg:"http://image.wufazhuce.com/FhtwrOCqx2KefORJFkVKmu3Tm0aB",artical:"",comments:""}},computed:{duration:function(){var t=this.artical.audio_duration,i=parseInt(t/3600),s=parseInt((t-3600*i)/60),a=t-3600*i-60*s;return a<10&&(a="0"+a),s&&(t=s+":"+a),i&&(t=i+":"+t),t}},created:function(){var t=this,i="http://v3.wufazhuce.com:8000/api/essay/"+this.$route.params.id+"?version=3.5.0&platform=android";v.a.get(i).then(function(i){t.artical=i.data.data,t.authorImg=t.artical.author[0].web_url}).catch()}},X={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"myBody"},[s("div",{staticClass:"header"},[s("span",{on:{click:function(i){t.$router.go(-1)}}},[s("Icon",{attrs:{type:"chevron-left"}})],1),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(t.artical.hp_title))]),t._v(" "),s("span",[s("Icon",{attrs:{type:"android-bookmark"}})],1)]),t._v(" "),s("div",{staticClass:"artical"},[s("transition",{attrs:{name:"slide-fade"}},[s("ArticalContent")],1),t._v(" "),s("div",{staticClass:"author other"},[s("div",{staticClass:"author_title other_title"},[t._v("作者")]),t._v(" "),s("div",{staticClass:"author_info other_info"},[s("img",{staticClass:"author_img other_img",attrs:{src:t.authorImg}}),t._v(" "),s("div",{staticClass:"author_info_text other_info_text"},[s("div",{staticClass:"author_name other_name"},[t._v(t._s(t.artical.hp_author))]),t._v(" "),s("div",{staticClass:"summary side_title"},[t._v(t._s(t.artical.author&&t.artical.author[0].summary))])]),t._v(" "),s("div",{staticClass:"care"},[t._v("关注")])])]),t._v(" "),s("div",{staticClass:"recommend other"},[s("div",{staticClass:"recommend_title other_title"},[t._v("相关推荐")]),t._v(" "),s("div",{staticClass:"recommend_info other_info"},[s("div",{staticClass:"recommend_img other_img"},[t._v("阅读")]),t._v(" "),s("div",{staticClass:"recommend_info_text other_info_text"},[s("div",{staticClass:"recommend_name other_name"},[t._v(t._s(t.artical.hp_author))]),t._v(" "),s("div",{staticClass:"recommend_author side_title"},[t._v(t._s(t.artical.author&&t.artical.author[0].summary))])])])]),t._v(" "),s("CommentList")],1),t._v(" "),s("div",{staticClass:"footer"},[s("input",{staticClass:"eval",attrs:{placeholder:"写一个评论..."}}),t._v(" "),s("div",{staticClass:"love"},[s("Icon",{attrs:{type:"android-favorite-outline"}}),t._v(" "),s("div",{staticClass:"asign"},[t._v(t._s(t.artical.commentnum))])],1),t._v(" "),s("div",{staticClass:"evalCount"},[s("Icon",{attrs:{type:"ios-chatbubble-outline"}}),t._v(" "),s("div",{staticClass:"asign"},[t._v(t._s(t.artical.sharenum))])],1),t._v(" "),s("div",{staticClass:"share"},[s("Icon",{attrs:{type:"share"}})],1)])])},staticRenderFns:[]};var Q=s("VU/8")(N,X,!1,function(t){s("0iVY")},"data-v-4c535b58",null).exports;o.a.use(c.a);var Z=new c.a({routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:l},{path:"/musics/list",name:"music_list",component:p},{path:"/music/:id",name:"music",component:T},{path:"/movies/list",name:"movie_list",component:B},{path:"/movie/:id",name:"movie",component:U},{path:"/reading/list",name:"Reading_list",component:H},{path:"/reading/artical/:id",name:"Artical",component:Q}]});s("+skl");o.a.config.productionTip=!1,new o.a({el:"#app",router:Z,template:"<App/>",components:{App:e,Icon:a.a}})},cHfI:function(t,i){},lMw3:function(t,i){},q7FV:function(t,i){},t4jg:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.d4f0819f4ec4169750c7.js.map