(this["webpackJsonpreciba-app-frontend"]=this["webpackJsonpreciba-app-frontend"]||[]).push([[0],{208:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},247:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(26),i=a.n(r),o=a(14),l=a(22),j=a(13),d=a(12),b=a(15),u=a.n(b),h=a(11),O=a.n(h),m="http://192.168.100.57:8000/",x="http://192.168.100.57:3000/",p=Object(n.createContext)({}),g=function(e){var t=Object(l.g)(),a=localStorage.getItem("bill-token"),s=Object(n.useState)({isLoggedIn:!1,level:9,token:"",name:""}),r=Object(d.a)(s,2),i=r[0],o=r[1];return a&&!i.isLoggedIn&&u.a.post(m+"api/user/loggedInUser",{storedToken:a},{headers:{auth:localStorage.getItem("bill-token")}}).then((function(e){localStorage.setItem("bill-token",e.data.data.token),o({isLoggedIn:!0,level:9,token:e.data.data.token,name:e.data.data.name})})).catch((function(e){localStorage.removeItem("bill-token");var a=e.response?e.response.data.message:e.message;h.notify.show(a,"error"),o({isLoggedIn:!1,level:9,token:"",name:""}),t.push("/")})),Object(c.jsx)(p.Provider,{value:Object(j.a)(Object(j.a)({},i),{},{setUserData:o}),children:e.children})},f=a(254),v=a(255),y=a(157),N=a(158),w=a(9),C=a(10),k=a(28),I=a.n(k);function S(){return Object(c.jsx)(f.a,{children:Object(c.jsxs)(v.a,{className:"h-100-minus align-items-center",children:[Object(c.jsxs)(y.a,{children:[Object(c.jsxs)("h1",{children:["Basta de usar papel para tus comprobantes",Object(c.jsx)("span",{role:"img","aria-label":"Page",children:"\ud83d\udcc3"})]}),Object(c.jsx)("p",{className:"lead",children:"\xa1Ahora pod\xe9s hacer todo digital! Cre\xe1, guard\xe1, envi\xe1 comprobantes desde tu casa sin necesidad de contacto f\xedsico."}),Object(c.jsx)(o.c,{to:"/invoice/generate",children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{icon:C.i})," Comenz\xe1 ahora"]})})]}),Object(c.jsxs)(y.a,{className:"text-right",children:[Object(c.jsx)("h6",{children:"Hora actual:"}),Object(c.jsx)("h3",{children:I()().format("MMMM Do YYYY, h:mm:ss a")})]})]})})}var D=a(44),F=a(265),L=a(159),P=a.n(L);function T(){var e=Object(l.g)(),t=Object(n.useContext)(p),a=Object(n.useState)({name:"",email:"",password:"",repeatPassword:""}),s=Object(d.a)(a,2),r=s[0],i=s[1],o=Object(n.useState)(!1),b=Object(d.a)(o,2),O=b[0],x=b[1],g=function(e){var t=e.target,a=t.name,c=t.value;i(Object(j.a)(Object(j.a)({},r),{},Object(D.a)({},a,c)))};return Object(c.jsx)(f.a,{children:Object(c.jsxs)(v.a,{className:"h-100-minus align-items-center",children:[Object(c.jsxs)(y.a,{children:[Object(c.jsx)("h1",{children:"Inicie sesi\xf3n para tener m\xe1s beneficios"}),Object(c.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, nisi. Provident ipsum praesentium numquam sapiente."})]}),Object(c.jsx)(y.a,{className:"bg-light shadow p-3 rounded",children:Object(c.jsxs)(F.a,{noValidate:!0,validated:O,onSubmit:function(a){a.preventDefault(),!1===a.currentTarget.checkValidity()?(a.stopPropagation(),h.notify.show("Por favor, verifique los datos antes de continuar","error")):(a.stopPropagation(),u.a.post("".concat(m,"api/user/register"),{email:r.email,password:r.password,name:r.name}).then((function(a){a.data.success?u.a.post("".concat(m,"api/user/login"),{email:r.email,password:r.password}).then((function(a){var c=a.data;c.success?(t.setUserData({isLoggedIn:!0,token:c.data.token,name:c.data.name}),localStorage.setItem("bill-token",c.data.token),h.notify.show("".concat(c.message),"success"),e.push("/")):h.notify.show("Ocurri\xf3 un error, reintente por favor","error")})).catch((function(e){h.notify.show("".concat(e.response.data.message),"error")})):h.notify.show("Error: ".concat(a.data.message),"error")})).catch((function(e){try{h.notify.show("".concat(e.response.data.message),"error")}catch(e){h.notify.show("".concat(e.message),"error")}}))),x(!0)},children:[Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Nombre"}),Object(c.jsx)(F.a.Control,{type:"text",name:"name",onChange:g,value:r.name,required:!0}),Object(c.jsxs)(F.a.Control.Feedback,{type:"invalid",children:["Por favor ingrese su nombre"," "]})]}),Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Direcci\xf3n de correo"}),Object(c.jsx)(F.a.Control,{type:"email",name:"email",onChange:g,value:r.email,required:!0}),Object(c.jsx)(F.a.Control.Feedback,{type:"invalid",children:"Ingrese un e-mail v\xe1lido"})]}),Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Contrase\xf1a"}),Object(c.jsx)(F.a.Control,{type:"password",name:"password",onChange:g,value:r.password,required:!0}),Object(c.jsx)(F.a.Control.Feedback,{type:"invalid",children:"Por favor, ingrese una contrase\xf1a"})]})}),Object(c.jsx)(y.a,{children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Repita la contrase\xf1a"}),Object(c.jsx)(F.a.Control,{type:"password",name:"repeatPassword",onChange:g,value:r.repeatPassword,required:!0}),Object(c.jsx)(F.a.Control.Feedback,{type:"invalid",children:"Verifique que la contrase\xf1a sea igual en ambos casos"})]})})]}),Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Captcha!"}),Object(c.jsx)(P.a,{sitekey:"be3fd67b-1a61-4936-b57f-600e3765988f",onVerify:function(e){return console.log(e)}})]}),Object(c.jsxs)(N.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(w.a,{icon:C.a})," Guardar datos"]})]})})]})})}function E(){var e=Object(n.useContext)(p),t=Object(n.useState)({email:"",password:""}),a=Object(d.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),b=o[0],O=o[1],x=Object(l.g)(),g=function(e){var t=e.target,a=t.name,c=t.value;r(Object(j.a)(Object(j.a)({},s),{},Object(D.a)({},a,c)))};return Object(c.jsx)(f.a,{children:Object(c.jsxs)(v.a,{className:"h-100-minus align-items-center",children:[Object(c.jsx)(y.a,{}),Object(c.jsx)(y.a,{md:6,sm:12,className:"shadow rounded bg-light p-3",children:Object(c.jsxs)(F.a,{onSubmit:function(t){var a=t.currentTarget;t.preventDefault(),!1===a.checkValidity()?(t.stopPropagation(),h.notify.show("Por favor verifique los datos antes de continuar","error")):(t.stopPropagation(),u.a.post("".concat(m,"api/user/login"),s).then((function(t){var a=t.data;console.log(a),a.success?(e.setUserData({isLoggedIn:!0,token:a.data.token,name:a.data.name}),localStorage.setItem("bill-token",a.data.token),h.notify.show("".concat(a.message),"success"),x.push("/")):h.notify.show("Ocurri\xf3 un error, por favor reintente","error")})).catch((function(e){var t=e.response?e.response.data.message:e.message;h.notify.show("".concat(t),"error")}))),O(!0)},noValidate:!0,validated:b,children:[Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Direcci\xf3n de correo"}),Object(c.jsx)(F.a.Control,{type:"email",name:"email",value:s.email,onChange:g,required:!0}),Object(c.jsx)(F.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese un e-mail v\xe1lido"})]}),Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Contrase\xf1a"}),Object(c.jsx)(F.a.Control,{type:"password",name:"password",value:s.password,onChange:g,required:!0}),Object(c.jsx)(F.a.Control.Feedback,{type:"invalid",children:"Ingrese su contrase\xf1a"})]}),Object(c.jsxs)(N.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(w.a,{icon:C.b})," Iniciar sesi\xf3n"]})]})}),Object(c.jsx)(y.a,{})]})})}function q(){var e=Object(n.useContext)(p),t=Object(l.g)();return Object(n.useEffect)((function(){localStorage.removeItem("bill-token"),e.setUserData({isLoggedIn:!1,level:9,token:"",name:""})}),[]),Object(c.jsx)(f.a,{children:Object(c.jsx)(v.a,{className:"h-100-minus align-items-center",children:Object(c.jsxs)(y.a,{className:"text-center",children:[Object(c.jsxs)("h1",{children:["Que l\xe1stima verte partir"," ",Object(c.jsx)("span",{role:"img","aria-label":"sad",children:"\ud83d\ude22"})]}),Object(c.jsx)("p",{children:"\xa1Ojal\xe1 podamos volverte a ver!"}),Object(c.jsx)(N.a,{className:"mt-5",onClick:function(){return t.push("/")},children:"Ir a la p\xe1gina principal"})]})})})}var B=a(270),R=a(256),G=a(268);function M(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(G.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/profile",children:[Object(c.jsx)(w.a,{icon:C.w,className:"mr-1"})," Perfil"]})}),Object(c.jsx)(G.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/logout",children:[Object(c.jsx)(w.a,{icon:C.d,className:"mr-1"})," Cerrar sesi\xf3n"]})})]})}function Y(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(G.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/login",children:[Object(c.jsx)(w.a,{icon:C.v,className:"mr-1"})," Iniciar sesi\xf3n"]})}),Object(c.jsx)(G.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/signup",children:[Object(c.jsx)(w.a,{icon:C.x,className:"mr-1"})," Crear usuario"]})})]})}function A(){return Object(c.jsxs)(R.a,{className:"mr-auto",children:[Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/",children:[Object(c.jsx)(w.a,{icon:C.h})," Principal"]}),Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/invoice/generate",children:[Object(c.jsx)(w.a,{icon:C.m})," Crear nueva boleta"]}),Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/dashboard",children:[Object(c.jsx)(w.a,{icon:C.c})," Dashboard"]})]})}function z(){return Object(c.jsx)(R.a,{className:"mr-auto",children:Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/",children:[Object(c.jsx)(w.a,{icon:C.h})," Principal"]})})}function H(){var e=Object(n.useContext)(p);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(B.a,{fixed:"top",style:{zIndex:999},bg:"primary",variant:"dark",expand:"lg",children:[Object(c.jsx)(o.c,{to:"/",children:Object(c.jsx)(B.a.Brand,{children:"reciba.app"})}),Object(c.jsx)(B.a.Toggle,{}),Object(c.jsxs)(B.a.Collapse,{children:[e.isLoggedIn?Object(c.jsx)(A,{}):Object(c.jsx)(z,{}),Object(c.jsx)(R.a,{className:"ml-auto",children:Object(c.jsx)(G.a,{title:"Usuario actual: ".concat(e.isLoggedIn?e.name:"invitado"),id:"collasible-nav-dropdown",children:e.isLoggedIn?Object(c.jsx)(M,{}):Object(c.jsx)(Y,{})})})]})]}),Object(c.jsx)("div",{style:{height:35}})]})}var _=a(160),U=a.n(_),V=a(264);a(208);function $(e){var t=e.show,a=void 0===t||t,n=e.onHide,s=void 0===n?function(){return a=!a}:n,r=e.currentId,i=void 0===r?"Error":r;return Object(c.jsx)(V.a,{size:"xl",show:a,onHide:s,children:Object(c.jsxs)(V.a.Body,{children:[Object(c.jsx)(v.a,{children:Object(c.jsx)(y.a,{children:Object(c.jsx)("p",{className:"lead text-center",children:"Escanee el c\xf3digo con el celular para poder firmar en este comprobante"})})}),Object(c.jsxs)(v.a,{className:"my-5",children:[Object(c.jsx)(y.a,{}),Object(c.jsx)(y.a,{className:"bg-white shadow rounded p-3",md:3,children:Object(c.jsx)(U.a,{size:200,value:"".concat(x,"#/signature/").concat(i)})}),Object(c.jsx)(y.a,{})]}),Object(c.jsx)(v.a,{children:Object(c.jsx)(y.a,{className:"text-center",children:Object(c.jsxs)("small",{children:["Tambi\xe9n puede ingresar ac\xe1 para firmar"," ",Object(c.jsx)("a",{target:"_blank",href:"".concat(x,"#/signature/").concat(i),children:"".concat(x,"#/signature/").concat(i)})]})})}),Object(c.jsx)(v.a,{children:Object(c.jsxs)(y.a,{className:"text-center",children:[Object(c.jsx)("p",{className:"lead",children:"Al finalizar la firma, presionar para continuar"}),Object(c.jsxs)(N.a,{onClick:s,children:[Object(c.jsx)(w.a,{icon:C.t})," Cerrar"]})]})})]})})}var J=a(269),K=Object(n.createContext)({generateId:function(){return""},currentId:""});function Q(e){var t=Object(n.useState)(""),a=Object(d.a)(t,1)[0];return Object(c.jsx)(K.Provider,{value:{generateId:function(){var e=Object(J.a)();return console.log("New room id",e),e},currentId:a},children:e.children})}var W=a(271),X=a(275);function Z(e){return e.toString().substr(0,10)}function ee(e){var t=e.submitFilter,a=e.isLoading,s=e.setIsLoading,r=Object(n.useState)({from:"",to:"",tags:""}),i=Object(d.a)(r,2),o=i[0],l=i[1],b=function(e){var t=e.target,a=t.name,c=t.value;l(Object(j.a)(Object(j.a)({},o),{},Object(D.a)({},a,c)))};return Object(c.jsx)(y.a,{className:"bg-white rounded shadow p-3 mb-3",children:Object(c.jsx)(W.a,{children:Object(c.jsxs)(X.a,{children:[Object(c.jsxs)(W.a.Toggle,{as:X.a.Header,eventKey:"0",children:["Filtros ",o.from||o.to?Object(c.jsx)("small",{className:"text-muted border rounded p-1",children:"".concat(o.from?"Desde: ".concat(I()(Z(o.from)).format("L")):""," ").concat(o.to?"Hasta: ".concat(I()(Z(o.to)).format("L")):"")}):Object(c.jsx)("small",{className:"text-muted border rounded p-1",children:"Mostrando las boletas de ".concat(Intl.DateTimeFormat(navigator.language,{month:"long"}).format(new Date))})]}),Object(c.jsx)(W.a.Collapse,{eventKey:"0",children:Object(c.jsx)(X.a.Body,{children:Object(c.jsxs)(F.a,{onSubmit:function(e){e.preventDefault(),s(!0),t({from:o.from?I()(o.from).startOf("day").format("YYYY-MM-DD"):"undefined",to:o.to?I()(o.to).endOf("day").format("YYYY-MM-DD"):"undefined",tags:o.tags})},children:[Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Etiqueta"}),Object(c.jsx)(F.a.Control,{name:"tags",value:o.tags,onChange:b,type:"text"})]})}),Object(c.jsx)(y.a,{children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Desde"}),Object(c.jsx)(F.a.Control,{type:"date",onChange:b,name:"from",value:o.from})]})}),Object(c.jsx)(y.a,{children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Hasta"}),Object(c.jsx)(F.a.Control,{type:"date",onChange:b,name:"to",value:o.to})]})})]}),Object(c.jsx)(v.a,{children:Object(c.jsxs)(y.a,{className:"d-flex justify-content-end w-100",children:[Object(c.jsxs)(N.a,{disabled:a,className:"mr-3",variant:"success",type:"submit",children:[Object(c.jsx)(w.a,{icon:C.q})," Buscar"]}),Object(c.jsxs)(N.a,{disabled:a,onClick:function(){s(!0),t({}),l({from:"",to:"",tags:""})},variant:"danger",children:[Object(c.jsx)(w.a,{icon:C.t})," Limpiar b\xfasqueda"]})]})})]})})})]})})})}var te=a(103),ae=a(276),ce=a(257),ne=a(272),se=a(258);function re(){return Object(c.jsx)(f.a,{children:Object(c.jsxs)(v.a,{style:{height:"65vh"},children:[Object(c.jsx)(y.a,{}),Object(c.jsxs)(y.a,{md:2,className:"my-auto shadow bg-light rounded py-4",children:[Object(c.jsx)("div",{className:"m-auto",style:{width:"4rem",height:"4rem"},children:Object(c.jsx)("div",{className:"spinner"})}),Object(c.jsx)("h1",{className:"mt-3 lead text-gray text-center",children:"cargando datos..."})]}),Object(c.jsx)(y.a,{})]})})}var ie=a(161);function oe(e){var t=e.show,a=e.handleClose,s=e.invoiceId,r=e.prevTags,i=e.refreshData,o=Object(n.useState)(""),l=Object(d.a)(o,2),j=l[0],b=l[1];Object(n.useEffect)((function(){r!==[]&&b(r?r.toString():"")}),[s]);return Object(c.jsx)(V.a,{show:t,onHide:a,children:Object(c.jsxs)(F.a,{onSubmit:function(e){e.preventDefault();var t,c=j.split(","),n=[],r=Object(ie.a)(c);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push(o.trim())}}catch(l){r.e(l)}finally{r.f()}!function(e){if(""===s)throw Error("No hay invoice id especificado");u.a.put("".concat(m,"api/invoice/edit/").concat(s),{tags:e},{headers:{auth:localStorage.getItem("bill-token")}}).then((function(e){e.data,h.notify.show("Datos guardados","success"),i(),a()})).catch((function(e){h.notify.show(e.message,"error")}))}(n)},children:[Object(c.jsx)(V.a.Header,{closeButton:!0,children:Object(c.jsx)(V.a.Title,{children:"Agregar etiquetas"})}),Object(c.jsx)(V.a.Body,{children:Object(c.jsxs)(F.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(F.a.Label,{children:"Etiquetas separadas por comas"}),Object(c.jsx)(F.a.Control,{type:"text",value:j,onChange:function(e){return b(e.target.value)},placeholder:"pendiente, seguimiento"})]})}),Object(c.jsxs)(V.a.Footer,{children:[Object(c.jsx)(N.a,{variant:"secondary",onClick:a,children:"Cancelar"}),Object(c.jsx)(N.a,{variant:"primary",type:"submit",children:"Guardar"})]})]})})}function le(e){var t=e.completed,a=e.pending,s=e.deleteBill,r=e.refreshData,i=e.isLoading,o=Object(l.g)(),j=Object(n.useState)(!1),b=Object(d.a)(j,2),O=b[0],x=b[1],p=Object(n.useState)({id:"",prevTags:[]}),g=Object(d.a)(p,2),f=g[0],N=g[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];N({id:e,prevTags:t}),x((function(e){return!e}))};return i?Object(c.jsx)(re,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(oe,{show:O,handleClose:function(){return k()},invoiceId:f.id,prevTags:f.prevTags,refreshData:function(){return r({})}}),Object(c.jsxs)(y.a,{className:"bg-white rounded shadow p-3 mb-3",children:[Object(c.jsxs)("small",{className:"text-muted",children:["Boletas pendientes - ",a.length]}),Object(c.jsx)(ae.a,{children:a.map((function(e,t){var a,n,i;return Object(c.jsx)(ae.a.Item,{children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{md:"2",children:I()(Z(e.date)).format("L")}),Object(c.jsxs)(y.a,{children:[e.from," ",Object(c.jsxs)("small",{children:["(",e.currency," $",e.amount,")"]}),null===(a=e.tags)||void 0===a?void 0:a.map((function(e,t){return Object(c.jsx)(ce.a,{variant:"info",className:"ml-1",children:e},t)}))," ",(null===(n=e.alreadySent)||void 0===n?void 0:n.isAlreadySent)?Object(c.jsx)(ne.a,{placement:"top",overlay:Object(c.jsxs)(se.a,{id:"mail-already-sent",children:["Mail ya enviado a:"," ",null===(i=e.alreadySent)||void 0===i?void 0:i.emailAddress]}),children:Object(c.jsx)(w.a,{icon:te.a,style:{color:"#6DB65B"}})}):null]}),Object(c.jsxs)(y.a,{md:"2",className:"text-right text-primary",children:[Object(c.jsx)(w.a,{icon:C.s,onClick:function(){return k(e._id,e.tags)}}),Object(c.jsx)(w.a,{onClick:function(){return o.push("/invoice/edit/".concat(e._id,"/"))},className:"pointer mx-3",icon:C.k}),Object(c.jsx)(w.a,{onClick:function(){return s(e._id)},className:"pointer mr-3",icon:C.u}),Object(c.jsx)(w.a,{className:"pointer",onClick:function(){return function(e,t){if(void 0===e||void 0===t)h.notify.show("Ocurri\xf3 un error enviando el mail. Recargue la p\xe1gina y reintente","error");else{var a,c=null===(a=window.prompt("Escriba la direcci\xf3n donde quiere enviar el mail"))||void 0===a?void 0:a.trim();""!==c?u.a.post("".concat(m,"api/mail/send/signaturePetition/"),{invoiceId:e,from:t,to:c}).then((function(e){e.data.success?(h.notify.show(e.data.message,"success"),r({})):h.notify.show(e.data.message,"warning")})).catch((function(e){console.log(e),h.notify.show("Ocurri\xf3 un error enviando el mail, reintente","error")})):h.notify.show("Debe especificar un mail v\xe1lido","error")}}(e._id,e.from)},icon:C.j})]})]})},t)}))}),Object(c.jsx)("hr",{}),Object(c.jsxs)("small",{className:"text-muted",children:["Boletas finalizadas - ",t.length]}),Object(c.jsx)(ae.a,{children:t.map((function(e,t){var a;return Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{md:"2",children:I()(Z(e.date)).format("L")}),Object(c.jsxs)(y.a,{children:[e.from," ",Object(c.jsxs)("small",{children:["(",e.currency," $",e.amount,")"]}),null===(a=e.tags)||void 0===a?void 0:a.map((function(e,t){return Object(c.jsx)(ce.a,{variant:"info",className:"ml-1",children:e},t)}))," "]}),Object(c.jsxs)(y.a,{md:"2",className:"text-right text-primary",children:[Object(c.jsx)(w.a,{className:"pointer",icon:C.s,onClick:function(){return k(e._id,e.tags)}}),Object(c.jsx)(w.a,{onClick:function(){return o.push("/invoice/edit/".concat(e._id,"/"))},className:"ml-3 pointer",icon:C.k}),Object(c.jsx)(w.a,{onClick:function(){return o.push("/invoice/display/".concat(e._id,"/no"))},icon:C.n,className:"mx-3 pointer"}),Object(c.jsx)(w.a,{onClick:function(){return s(e._id)},className:"pointer",icon:C.u})]})]})," "]},t)}))})]})]})}function je(){var e=Object(l.g)(),t=Object(n.useState)([]),a=Object(d.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),j=o[0],b=o[1],O=Object(n.useState)(!0),x=Object(d.a)(O,2),p=x[0],g=x[1],N={headers:{auth:localStorage.getItem("bill-token")}},w=function(t){var a=u.a.get("".concat(m,"api/invoice/completed?from=").concat(t.from,"&to=").concat(t.to,"&tags=").concat(t.tags),N),c=u.a.get("".concat(m,"api/invoice/pending?from=").concat(t.from,"&to=").concat(t.to,"&tags=").concat(t.tags),N);u.a.all([a,c]).then(u.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];b(t[0].data.data),r(t[1].data.data),g(!1)}))).catch((function(t){h.notify.show("Ocurri\xf3 un error trayendo los datos","error"),e.push("/")}))};return Object(n.useEffect)((function(){g(!0),w({})}),[]),Object(c.jsx)(f.a,{className:"my-5",children:Object(c.jsx)(v.a,{className:"h-100-minus",children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)(ee,{isLoading:p,setIsLoading:function(e){return g(e)},submitFilter:function(e){return w(e)}}),Object(c.jsx)(le,{isLoading:p,refreshData:function(e){return w(e)},deleteBill:function(e){return function(e){void 0!==e&&window.confirm("Advertencia, se borrar\xe1 la boleta. \xbfDesea Confirmar?")&&u.a.delete("".concat(m,"api/invoice/").concat(e),N).then((function(e){e.data.success?(h.notify.show("Boleta eliminada","success"),w({})):h.notify.show(e.data.message,"warning")})).catch((function(e){h.notify.show(e.response.data.message,"error")}))}(e)},completed:j,pending:s})]})})})}var de=a(162),be=function(e){var t=e.render,a=Object(de.a)(e,["render"]),s=Object(n.useContext)(p);return Object(c.jsx)(l.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return s.isLoggedIn||localStorage.getItem("bill-token")?Object(c.jsx)(t,Object(j.a)({},e)):Object(c.jsx)(l.a,{to:"/"})}}))};function ue(e){var t=e.show,a=e.handleClose,n=e.PDFFile;return Object(c.jsxs)(V.a,{show:t,onHide:a,children:[Object(c.jsx)(V.a.Header,{closeButton:!0,children:Object(c.jsx)(V.a.Title,{children:"\xa1Boleta lista!"})}),Object(c.jsx)(V.a.Body,{children:"Su boleta ha sido generada con \xe9xito. \xbfDesea descargar una copia?"}),Object(c.jsxs)(V.a.Footer,{children:[Object(c.jsxs)(N.a,{variant:"secondary",onClick:a,children:[Object(c.jsx)(w.a,{icon:te.b})," Ignorar"]}),Object(c.jsx)("a",{download:"Comprobante.pdf",href:n,children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{icon:C.e})," Descargar comprobante"]})})]})]})}var he,Oe=a(70),me=a.n(Oe),xe=a(239);function pe(){var e=Object(n.useRef)(),t=Object(l.h)(),a=t.socketId,s=t.invoiceId,r=Object(n.useState)(!1),i=Object(d.a)(r,2),o=i[0],b=i[1],O=Object(n.useState)(""),x=Object(d.a)(O,2),p=x[0],g=x[1],k=Object(n.useState)({}),I=Object(d.a)(k,2),S=I[0],D=I[1];Object(n.useEffect)((function(){return a?((he=me()(m)).emit("join",a),he.emit("close",!1),he.on("pdf",(function(e){g(e),L()}))):s&&u.a.get("".concat(m,"api/invoice/single/").concat(s)).then((function(e){var t=e.data;t.success&&D(t.data)})).catch((function(e){return alert(e.response.data.message)})),function(){a&&he.off("pdf")}}),[m]);var F=function(){a&&he.emit("sign",e.current.toDataURL())},L=function(){b(!o)};return Object(c.jsxs)(f.a,{className:"h-100-minus mt-5",children:[Object(c.jsx)(ue,{PDFFile:p,show:o,handleClose:L}),Object(c.jsx)(v.a,{className:s?"d-block":"d-none",children:Object(c.jsxs)(y.a,{className:"text-center",children:[Object(c.jsx)("h1",{children:"\xa1Hola!"}),Object(c.jsxs)("p",{children:["Recibi\xf3 esta boleta de ",Object(c.jsx)("strong",{children:S.from})," con el concepto de ",Object(c.jsx)("strong",{children:S.concept})," por el monto total de"," ",Object(c.jsxs)("strong",{children:[S.currency," ",S.amount]})]}),Object(c.jsx)("hr",{})]})}),Object(c.jsx)(v.a,{children:Object(c.jsxs)(y.a,{className:"text-center",children:[Object(c.jsx)("p",{className:"lead m-0",children:"Firme en el campo en blanco para continuar"}),Object(c.jsx)("small",{className:"text-muted",children:"Coloque el tel\xe9fono en modo horizontal para mejor resultado"})]})}),Object(c.jsx)(v.a,{className:"my-5",children:Object(c.jsx)(y.a,{onTouchEnd:F,onMouseUp:F,className:"bg-white shadow rounded",children:Object(c.jsx)(xe,{ref:e})})}),Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{children:Object(c.jsxs)(N.a,{className:"w-100",variant:"danger",onClick:function(){e.current.clear(),F()},children:[Object(c.jsx)(w.a,{icon:C.t})," Reiniciar Firma"]})}),Object(c.jsx)(y.a,{className:s?"d-block":"d-none",children:Object(c.jsxs)(N.a,{className:"w-100",variant:"success",onClick:function(){window.confirm("\xbfConfirma el envio de la firma a ".concat(S.from,"?"))&&u.a.put("".concat(m,"api/invoice/addSignature/").concat(s),Object(j.a)(Object(j.a)({},S),{},{sign:e.current.toDataURL()})).then((function(e){h.notify.show("Se ha firmado correctamente. Ya puede salir de esta app.","success")})).catch((function(e){var t=e.response?e.response.data.message:e.message;h.notify.show(t,"error")}))},children:[Object(c.jsx)(w.a,{icon:C.r})," Enviar firma"]})})]}),Object(c.jsx)(v.a,{className:a?"d-block my-5 text-center":"d-none",children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)("p",{className:"lead",children:"\xa1No cierre esta p\xe1gina!"}),Object(c.jsx)("p",{children:"Cuando se genere el comprobante, debajo aparecer\xe1 un bot\xf3n para descargarlo"})]})})]})}var ge,fe=a(59),ve=a.n(fe),ye=a(83),Ne=a(165),we=a(266),Ce=a(273);function ke(e){var t=e.isOriginal,a=void 0!==t&&t,n=e.data;return Object(c.jsxs)(v.a,{className:"pdf-font my-5 py-5 bg-white",children:[Object(c.jsx)(y.a,{md:1,children:Object(c.jsx)("p",{className:"text-muted p-0 mb-0 text-center",style:{height:64,marginTop:150,width:109,paddingLeft:0},children:a?"Recibo Original":"Recibo Duplicado"})}),Object(c.jsxs)(y.a,{className:"px-5",children:[Object(c.jsxs)(v.a,{className:"border-bottom mt-3 pb-3",children:[Object(c.jsx)(y.a,{children:n.logo?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{src:n.logo,alt:"RollingCode School",height:"50"}),Object(c.jsxs)("p",{className:"text-monospace",children:["Recibo N\xb0: ",n.invoiceNumber]})]}):Object(c.jsxs)("p",{className:"text-monospace",children:["Recibo N\xb0: ",n.invoiceNumber]})}),Object(c.jsx)(y.a,{md:"2"}),Object(c.jsx)(y.a,{className:"text-center",children:Object(c.jsxs)("p",{className:"my-0",children:[Object(c.jsx)("strong",{children:"Fecha: "}),I()(n.date).format("MMMM Do [del] YYYY")]})})]}),Object(c.jsx)(v.a,{children:Object(c.jsxs)(y.a,{children:[Object(c.jsxs)(v.a,{className:"bg-light my-3",children:[Object(c.jsx)(y.a,{md:3,children:Object(c.jsx)("p",{className:"text-center my-2",children:Object(c.jsx)("strong",{children:"Recib\xed"})})}),Object(c.jsx)(y.a,{children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"De: "}),n.from]})})]}),Object(c.jsx)(v.a,{className:"bg-light my-3",children:Object(c.jsx)(y.a,{children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"La cantidad de: "}),n.amountText]})})}),Object(c.jsx)(v.a,{className:"bg-light my-3",children:Object(c.jsx)(y.a,{children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"En concepto de: "})," ",n.concept]})})})]})}),Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{md:2,className:"bg-light",children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"Son: "})," ",n.currency," $",n.amount]})}),Object(c.jsx)(y.a,{}),Object(c.jsx)(y.a,{md:6,className:"bg-light",children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"Recibo por: "}),Object(c.jsx)("img",{src:n.sign,height:"120",alt:"signature"})]})})]})]})]})}function Ie(e){var t=e.exportPDFToFile,a=e.transformPDFToBase64,n=e.toggleEmailInput,s=e.hasSocketId;return Object(c.jsxs)(y.a,{className:"p-3 bg-light text-center shadow rounded",children:[Object(c.jsxs)(N.a,{className:"mx-2",onClick:t,children:[Object(c.jsx)(w.a,{icon:C.g})," Descargar PDF"]}),Object(c.jsxs)(N.a,{disabled:s,className:"mx-2",onClick:a,children:[Object(c.jsx)(w.a,{icon:C.l})," Enviar PDF al Tel\xe9fono"]}),Object(c.jsxs)(N.a,{onClick:n,className:"mx-2",children:[Object(c.jsx)(w.a,{icon:C.f})," Enviar copia por email"]})]})}function Se(e){var t=e.sendEmail,a=e.setRecipient,n=e.recipient,s=e.validated;return Object(c.jsx)(y.a,{className:"px-5 py-3 bg-white shadow rounded",children:Object(c.jsxs)(F.a,{noValidate:!0,onSubmit:t,validated:s,children:[Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Direcci\xf3n de e-mail"}),Object(c.jsx)(F.a.Control,{type:"email",value:n,onChange:a,placeholder:"correo@server.com",required:!0}),Object(c.jsx)(F.a.Control.Feedback,{type:"invalid",children:"Se necesita un E-mail v\xe1lido"})]}),Object(c.jsxs)(N.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(w.a,{icon:C.j})," Enviar"]})]})})}function De(){var e=Object(n.useRef)(Object(c.jsx)("div",{})),t=Object(l.h)(),a=t.id,s=t.socketId,r=Object(n.useState)({invoiceNumber:1,logo:"",date:new Date,from:"",amountText:"",amount:0,concept:"",sign:"",currency:"ARS",pending:!1}),i=Object(d.a)(r,2),o=i[0],b=i[1],O=Object(n.useState)(!1),x=Object(d.a)(O,2),p=x[0],g=x[1],y=Object(n.useState)(""),N=Object(d.a)(y,2),w=N[0],C=N[1],k=Object(n.useState)(!1),I=Object(d.a)(k,2),S=I[0],D=I[1],F=function(){return Object(we.a)(e.current,{paperSize:"A4",landscape:!0,scale:.75}).then((function(e){return Object(Ce.a)(e)}))},L=function(){var e=Object(ye.a)(ve.a.mark((function e(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Sending PDF"),e.t0=ge,e.next=4,F();case 4:e.t1=e.sent,e.t0.emit.call(e.t0,"pdf",e.t1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(ye.a)(ve.a.mark((function e(t){var a,c;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.currentTarget,e.next=4,F();case 4:c=e.sent,!0===a.checkValidity()&&u.a.post("".concat(m,"api/mail/send/invoice"),{file:c,date:o.date,email:w}).then((function(e){var t=e.data,a=t.success,c=t.message;a?h.notify.show(c,"success"):h.notify.show(c,"error")})).catch((function(e){console.log(e.response.data)})),D(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return ge=me()(m),u.a.get("".concat(m,"api/invoice/single/").concat(a)).then((function(e){var t=e.data,a=function(e){var t=e.slice(0,10).split("-");return{year:parseInt(t[0]),month:parseInt(t[1],10)-1,date:parseInt(t[2])}}(t.data.date),c=a.year,n=a.month,s=a.date;b(Object(j.a)(Object(j.a)({},t.data),{},{date:new Date(c,n,s)}))})),ge.emit("join",s),function(){ge.off("join")}}),[m]),Object(c.jsxs)(f.a,{children:[Object(c.jsx)(v.a,{className:"my-5",children:Object(c.jsx)(Ie,{exportPDFToFile:function(){Object(Ne.a)(e.current,{paperSize:"A4",fileName:"Invoice - ".concat(Intl.DateTimeFormat(navigator.language,{month:"numeric",day:"numeric",year:"numeric"}).format(new Date(o.date))," - ").concat(a),landscape:!0,scale:.75})},transformPDFToBase64:L,toggleEmailInput:function(){return g(!p)},hasSocketId:"no"===s})}),Object(c.jsx)(v.a,{className:p?"d-block":"d-none",children:Object(c.jsx)(Se,{recipient:w,sendEmail:function(e){return P(e)},setRecipient:function(e){return C(e.target.value)},validated:S})}),Object(c.jsxs)("div",{ref:e,children:[Object(c.jsx)(ke,{data:o,isOriginal:!0}),Object(c.jsx)(ke,{data:o})]})]})}var Fe,Le,Pe=a(262),Te=a(263);function Ee(){var e=(new Date).toISOString().substr(0,10),t=localStorage.getItem("bill-token")?{headers:{auth:localStorage.getItem("bill-token")}}:void 0,a=Object(l.h)().id,s=Object(n.useContext)(K).generateId,r=Object(n.useContext)(p).isLoggedIn,i=Object(n.useState)({invoiceNumber:1,date:e,from:"",amountText:"",amount:0,concept:"",currency:"ARS",pending:!1,sign:""}),o=Object(d.a)(i,2),b=o[0],O=o[1],x=Object(n.useState)(!1),g=Object(d.a)(x,2),k=g[0],I=g[1],S=Object(n.useState)(!1),L=Object(d.a)(S,2),P=L[0],T=L[1],E=Object(n.useState)(!1),q=Object(d.a)(E,2),B=q[0],R=q[1],G=Object(l.g)(),M=function(e){var t=e.target,a=t.name,c=t.value,n=t.type,s=t.checked,r="checkbox"===n?s:c;O(Object(j.a)(Object(j.a)({},b),{},Object(D.a)({},a,r)))};Object(n.useEffect)((function(){return Fe=me()(m),a&&u.a.get("".concat(m,"api/invoice/single/").concat(a)).then((function(e){var t=e.data,a=t.data.date.substr(0,10);O(Object(j.a)(Object(j.a)({},t.data),{},{date:a}))})),Fe.on("close",(function(){T(!1),h.notify.show("Tel\xe9fono Conectado!","success")})),Fe.on("sign",(function(e){O((function(t){return Object(j.a)(Object(j.a)({},t),{},{sign:e})}))})),function(){console.log("Fired?"),Fe.disconnect(),Le=""}}),[m]);var Y=function(){var e=Object(ye.a)(ve.a.mark((function e(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Le||(Le=s(),Fe.emit("join",Le)),T((function(e){return!e}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(f.a,{children:[Object(c.jsx)($,{currentId:Le,show:P,onHide:function(){T((function(e){return!e}))}}),Object(c.jsx)(v.a,{className:"h-100-minus align-items-center",children:Object(c.jsx)(y.a,{className:"bg-light p-3 shadow rounded",children:Object(c.jsxs)(F.a,{noValidate:!0,validated:k,onSubmit:function(e){e.preventDefault(),e.stopPropagation(),R(!0);var c=e.currentTarget;if(!b.sign&&!b.pending)return h.notify.show("Se necesita la firma para continuar","error"),null;!1===c.checkValidity()?h.notify.show("Please verify the form and try again","error"):a?u.a.put("".concat(m,"api/invoice/edit/").concat(a),Object(j.a)({},b),{headers:{auth:localStorage.getItem("bill-token")}}).then((function(e){var t=e.data;t.success&&G.push("/invoice/display/".concat(t.data._id,"/").concat(Le)),h.notify.show(t.message,"success")})).catch((function(e){h.notify.show("Ocurri\xf3 un error creando el comprobante, por favor reintente","error")})):u.a.post("".concat(m,"api/invoice/"),Object(j.a)({},b),t).then((function(e){var t=e.data;t.id&&G.push(b.pending?"/dashboard":"/invoice/display/".concat(t.id,"/").concat(Le)),h.notify.show(t.message,"success")})).catch((function(e){console.log(e.message),h.notify.show("Ocurri\xf3 un error creando el comprobante, por favor reintente","error")})),R(!1),I(!0)},children:[Object(c.jsx)(v.a,{children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Fecha"}),Object(c.jsx)(F.a.Control,{required:!0,name:"date",onChange:M,value:b.date.toString(),type:"date"}),Object(c.jsx)(F.a.Control.Feedback,{type:"invalid",children:"La fecha es necesaria"})]})})}),Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{md:"3",children:Object(c.jsx)("p",{className:"text-center",children:"Recibo"})}),Object(c.jsx)(y.a,{children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"De"}),Object(c.jsx)(F.a.Control,{required:!0,name:"from",onChange:M,value:b.from,type:"text"})]})})]}),Object(c.jsx)(v.a,{children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Cantidad"}),Object(c.jsx)(F.a.Control,{required:!0,name:"amountText",onChange:M,value:b.amountText,type:"text"})]})})}),Object(c.jsx)(v.a,{children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"En concepto de"}),Object(c.jsx)(F.a.Control,{required:!0,name:"concept",onChange:M,value:b.concept,type:"text"})]})})}),Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{sm:12,md:3,children:Object(c.jsxs)(F.a.Group,{children:[Object(c.jsx)(F.a.Label,{children:"Cantidad"}),Object(c.jsxs)(Pe.a,{children:[Object(c.jsx)(Pe.a.Prepend,{children:Object(c.jsx)(Pe.a.Text,{children:Object(c.jsxs)("select",{name:"currency",onChange:M,value:b.currency,className:"no-decoration",children:[Object(c.jsx)("option",{children:"ARS"}),Object(c.jsx)("option",{children:"USD"})]})})}),Object(c.jsx)(F.a.Control,{required:!0,name:"amount",onChange:M,value:b.amount,min:1,type:"decimal"})]})]})}),Object(c.jsx)(y.a,{className:"text-right",children:Object(c.jsx)("p",{className:"lead",children:"Firma"})}),Object(c.jsx)(y.a,{children:b.sign?Object(c.jsx)("img",{height:"100",src:b.sign,alt:"signature"}):null})]}),Object(c.jsx)(v.a,{children:Object(c.jsxs)(y.a,{className:"text-right d-flex align-items-center justify-content-end",children:[r?Object(c.jsx)("fieldset",{className:"mr-3 py-1 px-2 border border-gray rounded",children:Object(c.jsxs)("label",{className:"m-0 p-0",children:[Object(c.jsx)("input",{type:"checkbox",name:"pending",checked:b.pending,onChange:M,className:"mr-1 p-0 m-0"}),"Marcar boleta para firmar luego"]})}):null,Object(c.jsxs)(N.a,{variant:"info",onClick:Y,className:"mr-3",children:[Object(c.jsx)(w.a,{icon:C.o})," Mostrar QR para firmar"]}),Object(c.jsxs)(N.a,{disabled:B,variant:"secondary",className:"mr-3",onClick:function(){G.push("/")},children:[Object(c.jsx)(w.a,{icon:C.t})," Cancelar"]}),Object(c.jsxs)(N.a,{disabled:B,variant:"primary",type:"submit",children:[B?Object(c.jsx)(Te.a,{size:"sm",animation:"border"}):Object(c.jsx)(w.a,{icon:C.p})," ","Guardar"]})]})})]})})})]})}var qe=function(){return Object(c.jsx)(n.Fragment,{children:Object(c.jsx)(g,{children:Object(c.jsx)(Q,{children:Object(c.jsxs)(o.b,{basename:"",children:[Object(c.jsx)(H,{}),Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/signup",component:T}),Object(c.jsx)(l.b,{path:"/login",component:E}),Object(c.jsx)(l.b,{path:"/logout",component:q}),Object(c.jsx)(l.b,{path:"/",exact:!0,component:S}),Object(c.jsx)(l.b,{path:"/invoice/generate",component:Ee}),Object(c.jsx)(be,{path:"/invoice/edit/:id",render:function(){return Object(c.jsx)(Ee,{})}}),Object(c.jsx)(l.b,{path:"/invoice/display/:id/:socketId",component:De}),Object(c.jsx)(l.b,{path:"/invoice/code/:id",component:$}),Object(c.jsx)(be,{path:"/dashboard",render:function(){return Object(c.jsx)(je,{})}}),Object(c.jsx)(l.b,{path:"/signature/:socketId",component:pe}),Object(c.jsx)(l.b,{path:"/offlinesignature/:invoiceId",component:pe}),Object(c.jsx)(l.b,{render:function(){return Object(c.jsx)("div",{children:"Not found"})}})]})]})})})})},Be=(a(242),a(243),a(244),a(126)),Re=a.n(Be);Re.a.tz.setDefault("America/Buenos_Aires"),Re.a.locale("es"),i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(O.a,{options:{zIndex:998,top:"56px",colors:{error:{color:"#FFFFFF",backgroundColor:"#ff7851"},success:{color:"#FFFFFF",backgroundColor:"#56cc9d"}}}}),Object(c.jsx)(qe,{})]})}),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.152948e8.chunk.js.map