(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{13:function(t,e,n){t.exports=n(30)},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(5),i=n.n(r),c=(n(18),n(6)),u=n(7),s=n(11),l=n(10);n(19),n(20),n(21);var d=function(t){return o.a.createElement("div",{className:"input"},o.a.createElement("input",{className:"input__field",type:"text",onChange:t.read,value:t.inputvalue}))},m=(n(22),n(8)),p=n.n(m);var f=function(t){return o.a.createElement("div",{className:"output__card"},o.a.createElement("p",{className:"output__cardPara"},t.todo),o.a.createElement("button",{className:"output__cardDelete",onClick:t.delete},o.a.createElement(p.a,null)))},v=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todoList:[],input:""},t.readInput=function(e){t.setState({input:e.target.value})},t.addToList=function(e){var n=t.state.todoList;n.push(e),t.setState({todoList:n,input:""})},t.deleteItem=function(e){var n=t.state.todoList,a=n.indexOf(e);n.splice(a,1),t.setState({todoList:n})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("h1",{className:"heading"},"Your Todo List"),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"input"},o.a.createElement(d,{read:function(e){return t.readInput(e)},inputvalue:this.state.input}),o.a.createElement("button",{className:"input__button",onClick:function(){return t.addToList(t.state.input)}},"Add")),o.a.createElement("div",{className:"output"},this.state.todoList.map((function(e){return o.a.createElement(f,{todo:e,delete:function(){return t.deleteItem(e)}})})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.7278abc1.chunk.js.map