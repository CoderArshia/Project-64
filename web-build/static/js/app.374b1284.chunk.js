(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{233:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(12),a=n.n(r),i=n(15),o=n.n(i),s=n(13),c=n.n(s),l=n(14),u=n.n(l),f=n(9),d=n.n(f),h=n(1),y=n.n(h),p=n(3),m=n(2),x=n(18),g=n(109),C=n(23),E=n(232);function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var v=function(t){c()(n,t);var e=S(n);function n(){var t;return a()(this,n),(t=e.call(this)).getWord=function(e){var n=e.toLowerCase();return fetch("https://rupinwhitehatjr.github.io/dictionary/"+n+".json").then((function(t){return 200===t.status?t.json():null})).then((function(e){if(e){var n=e.definitions[0],r=n.description,a=n.wordtype;t.setState({word:t.state.text,definition:r,lexicalCategory:a})}else t.setState({word:t.state.text,definition:"Not Found"})}))},t.state={text:"",isSearchPressed:!1,isLoading:!1,word:"Loading...",lexicalCategory:"",definition:""},t}return o()(n,[{key:"render",value:function(){var t=this;return y.a.createElement(p.a,{style:{flex:1,borderWidth:2}},y.a.createElement(E.a,{backgroundColor:"purple",centerComponent:{text:"Pocket Dictionary",style:{color:"#fff",fontSize:20}}}),y.a.createElement(p.a,{style:w.inputBoxContainer},y.a.createElement(g.a,{style:w.inputBox,onChangeText:function(e){t.setState({text:e,isSearchPressed:!1,word:"Loading...",lexicalCategory:"",examples:[],definition:""})},value:this.state.text}),y.a.createElement(C.a,{style:w.searchButton,onPress:function(){t.setState({isSearchPressed:!0}),t.getWord(t.state.text)}},y.a.createElement(x.a,{style:w.searchText},"Search"))),y.a.createElement(p.a,{style:w.outputContainer},y.a.createElement(x.a,{style:{fontSize:20}},this.state.isSearchPressed&&"Loading..."===this.state.word?this.state.word:""),"Loading..."!==this.state.word?y.a.createElement(p.a,{style:{justifyContent:"center",marginLeft:10}},y.a.createElement(p.a,{style:w.detailsContainer},y.a.createElement(x.a,{style:w.detailsTitle},"Word :"," "),y.a.createElement(x.a,{style:{fontSize:18}},this.state.word)),y.a.createElement(p.a,{style:w.detailsContainer},y.a.createElement(x.a,{style:w.detailsTitle},"Type :"," "),y.a.createElement(x.a,{style:{fontSize:18}},this.state.lexicalCategory)),y.a.createElement(p.a,{style:{flexDirection:"row",flexWrap:"wrap"}},y.a.createElement(x.a,{style:w.detailsTitle},"Definition :"," "),y.a.createElement(x.a,{style:{fontSize:18}},this.state.definition))):null))}}]),n}(h.Component),w=m.a.create({container:{flex:1},inputBoxContainer:{flex:.3,alignItems:"center",justifyContent:"center"},inputBox:{width:"80%",alignSelf:"center",height:40,textAlign:"center",borderWidth:4},searchButton:{width:"40%",height:40,justifyContent:"center",alignItems:"center",margin:10,borderWidth:2,borderRadius:10},searchText:{fontSize:20,fontWeight:"bold"},outputContainer:{flex:.7,alignItems:"center"},detailsContainer:{flexDirection:"row",alignItems:"center"},detailsTitle:{color:"orange",fontSize:20,fontWeight:"bold"}});function R(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var b=function(t){c()(n,t);var e=R(n);function n(){return a()(this,n),e.apply(this,arguments)}return o()(n,[{key:"render",value:function(){return y.a.createElement(p.a,{style:{flex:1}},y.a.createElement(v,null))}}]),n}(h.Component)},234:function(t,e,n){t.exports=n(367)}},[[234,1,2]]]);
//# sourceMappingURL=app.374b1284.chunk.js.map