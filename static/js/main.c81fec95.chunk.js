(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,t,a){e.exports={wrapper:"Login_wrapper__1Rcue"}},200:function(e,t,a){e.exports=a(403)},205:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),c=a.n(o),i=(a(205),a(12)),l=a.n(i),s=a(8),d=a.n(s),u=a(13),m=function(e){var t=Object(n.useState)(!1),o=Object(u.a)(t,2),c=o[0],i=o[1],l=function(t){i(!1),e.changeDate(e.id,t.currentTarget.value)},s=a(141),m=new Date(e.date),p=e.date?s(m,"dd-mm-yyyy"):"set ".concat(e.title),f=e.date?e.date:e.addedDate,h=new Date(e.addedDate),E=new Date(f);return r.a.createElement(r.a.Fragment,null,c?r.a.createElement("input",{className:d.a.inpDate,type:"date",value:s(E,"yyyy-mm-dd"),min:s(h,"yyyy-mm-dd"),max:"2021-12-31",autoFocus:!0,onBlur:l,onChange:l}):r.a.createElement("span",{onClick:function(){i(!0)}},p,".\xa0"))},p=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],i=function(){c(!1)},l="";switch(e.priority){case 0:l="Low";break;case 1:l="Middle";break;case 2:l="High";break;case 3:l="Urgently";break;case 4:l="Later"}var s=e.priority;return r.a.createElement(r.a.Fragment,null,o?r.a.createElement("select",{className:d.a.select,autoFocus:!0,onKeyDown:function(e){"Enter"===e.key&&i()},onChange:function(t){e.changePriority(e.id,t.currentTarget.value),i()},onBlur:i},r.a.createElement("option",{selected:0===s,value:"0"},"Low"),r.a.createElement("option",{selected:1===s,value:"1"},"Middle"),r.a.createElement("option",{selected:2===s,value:"2"},"High"),r.a.createElement("option",{selected:3===s,value:"3"},"Urgently"),r.a.createElement("option",{selected:4===s,value:"4"},"Later")):r.a.createElement("span",{onClick:function(){c(!0)}},l),".\xa0")},f=a(55),h=a.n(f),E=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(e.title),l=Object(u.a)(i,2),s=l[0],m=l[1],p=function(){c(!1),e.changeText(e.id,s)};return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(h.a,{className:d.a.inp,onBlur:p,onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,value:s,onKeyPress:function(e){"Enter"===e.key&&p()},placeholder:e.placeholder}):r.a.createElement("span",{onClick:function(){c(!0)},placeholder:e.placeholder},e.title?e.title:e.placeholder,".\xa0"))},T=function(e){var t=a(141),n=new Date(e.addedDate);return r.a.createElement(r.a.Fragment,null,t(n,"H:MM / dd-mm-yyyy"),".\xa0")},_=a(30),g=a.n(_),k=a(193),y=a.n(k),b=function(e){var t=e.task.completed?d.a.taskDone:d.a.task;return r.a.createElement("div",{className:t},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"2%"}},r.a.createElement(y.a,{checked:!0===e.task.completed,onChange:function(t){e.changeStatus(e.task.id,t.target.checked)}})),r.a.createElement("td",{style:{width:"10%"}},r.a.createElement(T,{addedDate:e.task.addedDate})),r.a.createElement("td",{style:{width:"22%"}},r.a.createElement(E,{title:e.task.title,changeText:e.changeTitle,id:e.task.id,placeholder:"set title"})),r.a.createElement("td",{style:{width:"40%"}},r.a.createElement(E,{title:e.task.description,changeText:e.changeDescription,id:e.task.id,placeholder:"set description"})),r.a.createElement("td",{style:{width:"8%"}},r.a.createElement(p,{priority:e.task.priority,changePriority:e.changePriority,id:e.task.id})),r.a.createElement("td",{style:{width:"8%"}},r.a.createElement(m,{changeDate:e.changeStartDate,id:e.task.id,addedDate:e.task.addedDate,date:e.task.startDate})),r.a.createElement("td",{style:{width:"8%"}},r.a.createElement(m,{changeDate:e.changeDeadline,id:e.task.id,addedDate:e.task.addedDate,date:e.task.deadline})),r.a.createElement("td",{style:{width:"2%"}},r.a.createElement(g.a,{type:"delete",onClick:function(){e.deleteTask(e.task.id)}}))))))},D=a(25),v=function(e){var t=e.tasks.map(function(t){return r.a.createElement(b,{task:t,changeStatus:e.changeStatus,changeTitle:e.changeTitle,deleteTask:e.deleteTask,changePriority:e.changePriority,changeDescription:e.changeDescription,changeStartDate:e.changeStartDate,changeDeadline:e.changeDeadline,key:e.tasks.id})});return r.a.createElement("div",{className:d.a.tasks},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"2%"}},r.a.createElement(D.a,{type:"check"})),r.a.createElement("th",{style:{width:"10%"}},"Added date"),r.a.createElement("th",{style:{width:"22%"}},"Title"),r.a.createElement("th",{style:{width:"40%"}},"Description"),r.a.createElement("th",{style:{width:"8%"}},"Priority"),r.a.createElement("th",{style:{width:"8%"}},"Start date"),r.a.createElement("th",{style:{width:"8%"}},"Deadline"),r.a.createElement("th",{style:{width:"2%"}},r.a.createElement(D.a,{type:"close"}))))),t)},w=a(67),A=a.n(w),O=function(e){var t="All"===e.filterValue?"check":"",a="Completed"===e.filterValue?"check":"",n="Active"===e.filterValue?"check":"";return r.a.createElement("div",{className:d.a.buttons},r.a.createElement(A.a,{onClick:function(){e.changeFilter("All")},type:"primary",size:"small",icon:t},"all"),r.a.createElement(A.a,{onClick:function(){e.changeFilter("Completed")},type:"primary",size:"small",icon:a},"completed"),r.a.createElement(A.a,{onClick:function(){e.changeFilter("Active")},type:"primary",size:"small",icon:n},"active"))},C=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(e.title),l=Object(u.a)(i,2),s=l[0],m=l[1],p=function(){c(!1),e.changeTodolistTitle(s,e.id)};return r.a.createElement("div",{className:d.a.todoTitle},o?"":r.a.createElement(g.a,{type:"delete",onClick:e.onDelete}),o?r.a.createElement(h.a,{onBlur:p,onChange:function(e){!function(e){m(e.currentTarget.value)}(e)},autoFocus:!0,value:s,onKeyPress:function(e){"Enter"===e.key&&p()}}):r.a.createElement("span",{onClick:function(){c(!0)},style:{fontSize:"1.6em"}},e.title," \xa0"))},S=a(15),j=a(137),I=a(10),L=a(93),N=a.n(L),x=N.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/todo-lists/",headers:{"API-KEY":"99877a27-c404-4003-9d7e-bbb983559996"}}),F=function(e,t){return x.post("".concat(t,"/tasks"),{title:e})},U=function(e){return x.post("",{title:e})},P=function(){return x.get("")},R=function(e){return x.put("tasks",e)},K=function(e){return x.delete(""+e)},z=function(e){return x.delete("tasks/ ".concat(e))},M=function(e){return x.get("".concat(e,"/tasks"))},H=function(e,t){return x.put("".concat(e),{title:t})},B="TodoList/Reducer/ADD-TASK",V={todolists:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TodoList/Reducer/SET_TASKS":return Object(I.a)({},e,{todolists:e.todolists.map(function(e){return e.id!==t.todolistId?e:Object(I.a)({},e,{tasks:t.tasks})})});case"TodoList/Reducer/SET_TODOLISTS":return Object(I.a)({},e,{todolists:t.todolists.map(function(e){return Object(I.a)({},e,{tasks:[]})})});case"TodoList/Reducer/ADD-TODOLIST":return Object(I.a)({},e,{todolists:[].concat(Object(j.a)(e.todolists),[t.newTodolist])});case"TodoList/Reducer/DELETE-TODOLIST":return Object(I.a)({},e,{todolists:e.todolists.filter(function(e){return e.id!==t.todolistId})});case"TodoList/Reducer/DELETE-TASK":return Object(I.a)({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?Object(I.a)({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.taskId})}):e})});case B:return Object(I.a)({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?Object(I.a)({},e,{tasks:[].concat(Object(j.a)(e.tasks),[t.newTask])}):e})});case"TodoList/Reducer/UPDATE-TASK":return Object(I.a)({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?Object(I.a)({},e,{tasks:e.tasks.map(function(e){return e.id!==t.taskId?e:Object(I.a)({},e,{},t.obj)})}):e})});case"TodoList/Reducer/UPDATE_TODOLIST":return Object(I.a)({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?Object(I.a)({},e,{title:t.newTitle}):e})});default:return e}},G=a(138),X=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),s=l[0],m=l[1],p=function(){m(s),""===s?c(!0):(c(!1),e.addItem(s)),m("")},f=o?{backgroundColor:"red",opacity:"0.7"}:{};return r.a.createElement("div",{className:d.a.addNewForm},r.a.createElement("div",{className:d.a.inputAdd},r.a.createElement(h.a,{placeholder:e.placeholder,onChange:function(e){m(e.currentTarget.value),c(!1)},onKeyPress:function(e){"Enter"===e.key&&p()},value:s,id:e.labelInput,style:f})),r.a.createElement("div",{className:d.a.btnAdd},r.a.createElement(G.a,{type:"primary",onClick:p,size:"small"},"Add")))},Y=Object(S.b)(null,{deleteTaskTC:function(e,t){return function(a){z(e,t).then(function(n){0===n.data.resultCode&&a(function(e,t){return{type:"TodoList/Reducer/DELETE-TASK",taskId:e,todolistId:t}}(e,t))})}},deleteTodolistTC:function(e){return function(t){K(e).then(function(a){0===a.data.resultCode&&t(function(e){return{type:"TodoList/Reducer/DELETE-TODOLIST",todolistId:e}}(e))})}},updateTaskTC:function(e,t,a){return function(n,r){r().todo.todolists.find(function(e){return e.id===a}).tasks.forEach(function(r){r.id===e&&R(Object(I.a)({},r,{},t)).then(function(){n(function(e,t,a){return{type:"TodoList/Reducer/UPDATE-TASK",taskId:e,obj:t,todolistId:a}}(e,t,a))})})}},setTasksTC:function(e){return function(t){M(e).then(function(a){t(function(e,t){return{type:"TodoList/Reducer/SET_TASKS",tasks:e,todolistId:t}}(a.data.items,e))})}},addTaskTC:function(e,t){return function(a){F(e,t).then(function(e){var n=e.data.data.item;a(function(e,t){return{type:B,newTask:e,todolistId:t}}(n,t))})}},updateTodolistTC:function(e,t){return function(a,n){n().todo.todolists.forEach(function(n){n.id===e&&H(n.id,t).then(function(n){0===n.data.resultCode&&a(function(e,t){return{type:"TodoList/Reducer/UPDATE_TODOLIST",todolistId:e,newTitle:t}}(e,t))})})}}})(function(e){Object(n.useEffect)(function(){l.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(e.setTasksTC(e.id));case 2:case"end":return t.stop()}})},[e.id]);var t=Object(n.useState)("All"),a=Object(u.a)(t,2),o=a[0],c=a[1],i=function(t,a){e.updateTaskTC(t,a,e.id)},s=e.tasks,m=void 0===s?[]:s;return r.a.createElement("div",{className:d.a.todoList},r.a.createElement("div",{className:d.a.todoListHeader},r.a.createElement(C,{title:e.title,onDelete:function(){e.deleteTodolistTC(e.id)},changeTodolistTitle:function(t){e.updateTodolistTC(e.id,t)},id:e.id}),r.a.createElement(X,{addItem:function(t){e.addTaskTC(t,e.id)},placeholder:"Add new task",labelInput:e.id}),r.a.createElement(O,{changeFilter:function(e){c(e)},filterValue:o}),r.a.createElement(T,{addedDate:e.addedDate})),r.a.createElement(v,{changeStatus:function(e,t){i(e,{completed:t})},changeTitle:function(e,t){i(e,{title:t})},deleteTask:function(t){e.deleteTaskTC(t,e.id)},changePriority:function(e,t){i(e,{priority:Number(t)})},changeDescription:function(e,t){i(e,{description:t})},changeStartDate:function(e,t){i(e,{startDate:t})},changeDeadline:function(e,t){i(e,{deadline:t})},tasks:m.filter(function(e){return"All"===o||("Active"===o?!1===e.completed:"Completed"===o?!0===e.completed:void 0)})}))}),q=N.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"99877a27-c404-4003-9d7e-bbb983559996"}}),J=function(){return q.get("auth/me")},Q=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return q.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},W=function(){return q.delete("auth/login")},$={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ee=function(e,t,a,n){return{type:"/auth/SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},te=function(){return function(e){var t,a,n,r,o;return l.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,l.a.awrap(J());case 2:0===(t=c.sent).data.resultCode&&(a=t.data.data,n=a.id,r=a.email,o=a.login,e(ee(n,r,o,!0)));case 4:case"end":return c.stop()}})}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/auth/SET_USER_DATA":case"/auth/GET_CAPTCHA_URL_SUCCESS":return Object(I.a)({},e,{},t.payload);default:return e}},ne=a(40),re=a(7),oe=(a(303),Object(re.d)(Object(S.b)(function(e){return{todolists:e.todo.todolists,login:e.auth.login,isAuth:e.auth.isAuth,userId:e.auth.userId}},{addTodolistTC:function(e){return function(t){U(e).then(function(e){t({type:"TodoList/Reducer/ADD-TODOLIST",newTodolist:e.data.data.item})})}},setTodolistsTC:function(){return function(e){P().then(function(t){e({type:"TodoList/Reducer/SET_TODOLISTS",todolists:t.data})})}},getAuthUserData:te,logout:function(){return function(e){return l.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(W());case 2:0===t.sent.data.resultCode&&e(ee(null,null,null,!1));case 4:case"end":return t.stop()}})}}}),ne.g)(function(e){Object(n.useEffect)(function(){l.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(e.setTodolistsTC());case 2:case"end":return t.stop()}})},[]);var t=e.todolists.map(function(e){return r.a.createElement(Y,{key:e.id,id:e.id,title:e.title,tasks:e.tasks,addedDate:e.addedDate})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.a.header},r.a.createElement("div",{className:d.a.form},r.a.createElement(X,{addItem:function(t){e.addTodolistTC(t)},placeholder:"Add new to do list",labelInput:"labelInput"})),r.a.createElement("div",{className:d.a.logout},e.isAuth?r.a.createElement(D.a,{type:"logout",style:{color:"#1890ff",fontSize:"24px"},onClick:function(){return e.logout()}}):r.a.createElement(ne.a,{to:"/login"}))),r.a.createElement("div",{className:d.a.App},t))})),ce=a(405),ie=a(199),le=a(69),se=a.n(le),de=a(406),ue=a(407),me=function(e){var t=e.meta,a=t.touched,n=t.error,o=e.children,c=a&&n;return r.a.createElement("div",{className:se.a.formControl+" "+(c?se.a.error:"")},r.a.createElement("div",null,o),c&&r.a.createElement("span",null,n))},pe=function(e){var t=e.input,a=(e.meta,e.child,Object(ie.a)(e,["input","meta","child"]));return r.a.createElement(me,e,r.a.createElement(ue.a,Object.assign({},t,a)))},fe=function(e,t,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(de.a,Object.assign({placeholder:e,name:t,validate:a,component:n},o)),c)},he=Object(ce.a)({form:"login"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("span",null,"Email"),fe("Email","email",[],pe),r.a.createElement("span",null,"Password"),fe("Password","password",[],pe,{type:"password"}),e.error&&r.a.createElement("div",{className:se.a.formSummaryError},e.error),r.a.createElement("button",null,"Login"))}),Ee=a(197),Te=a.n(Ee),_e=Object(re.d)(Object(S.b)(function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}},{login:function(e,t,a,n){return function(r){return l.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,l.a.awrap(Q(e,t,a,n));case 2:0===o.sent.data.resultCode&&r(te());case 4:case"end":return o.stop()}})}},getAuthUserData:te}),ne.g)(function(e){Object(n.useEffect)(function(){l.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(e.getAuthUserData());case 2:case"end":return t.stop()}})},[]);return e.isAuth?r.a.createElement(ne.a,{to:"/todolist"}):r.a.createElement("div",{className:Te.a.wrapper},r.a.createElement("span",null,"Credentials for testing"),r.a.createElement("span",null,"Email: ",r.a.createElement("b",null,"p.milenkii@gmail.com")),r.a.createElement("span",null,"Password: ",r.a.createElement("b",null,"test")),r.a.createElement(he,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}),ge={initialized:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;switch((arguments.length>1?arguments[1]:void 0).type){case"/app/INITIALIZED_SUCCESS":return Object(I.a)({},e,{initialized:!0});default:return e}},ye=Object(re.d)(ne.g,Object(S.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(te());Promise.all([t]).then(function(){e({type:"/app/INITIALIZED_SUCCESS"})})}}}))(function(){return r.a.createElement("div",null,r.a.createElement(ne.d,null,r.a.createElement(ne.b,{exact:!0,path:"/",render:function(){return r.a.createElement(ne.a,{to:"/todolist"})}}),r.a.createElement(ne.b,{path:"/todolist",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(ne.b,{path:"/login",render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(ne.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))}),be=a(198),De=a(409),ve=Object(re.c)({auth:ae,form:De.a,app:ke,todo:Z}),we=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,Ae=Object(re.e)(ve,we(Object(re.a)(be.a)));window._store_=Ae;var Oe=Ae,Ce=a(66);c.a.render(r.a.createElement(Ce.a,null,r.a.createElement(S.a,{store:Oe},r.a.createElement(ye,null))),document.getElementById("root"))},69:function(e,t,a){e.exports={formControl:"FormsControls_formControl__MRZn3",error:"FormsControls_error__3Cgmk",formSummaryError:"FormsControls_formSummaryError__EnNmT",textarea:"FormsControls_textarea__3E1rp",textareaDialog:"FormsControls_textareaDialog__1ebHZ",errorMessage:"FormsControls_errorMessage__1PGVr",inputField:"FormsControls_inputField__3Esw1"}},8:function(e,t,a){e.exports={App:"App_App__3MRyD",header:"App_header__Z2y3y",form:"App_form__1me3d",logout:"App_logout__2e433",addNewForm:"App_addNewForm__3G4c6",inputAdd:"App_inputAdd__13ie1",btnAdd:"App_btnAdd__13dPO",todoList:"App_todoList__M3Wvs",todoListHeader:"App_todoListHeader__3a0wV",todoTitle:"App_todoTitle__1_EN0",isHow:"App_isHow__1HIzZ",buttons:"App_buttons__kAKS3",tasks:"App_tasks__3YtUf",task:"App_task__37sF9",taskDone:"App_taskDone__2ZQ0k",icon:"App_icon__2AK1q",wrapper:"App_wrapper__1aqkU",inp:"App_inp__fhski",inpDate:"App_inpDate__2BKuX",select:"App_select__dxyBg",addedDate:"App_addedDate__3epeI"}}},[[200,1,2]]]);
//# sourceMappingURL=main.c81fec95.chunk.js.map