(this["webpackJsonpreciba-app-frontend"]=this["webpackJsonpreciba-app-frontend"]||[]).push([[0],{177:function(e,t,a){},178:function(e,t,a){},212:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),s=a(26),i=a.n(s),o=a(14),j=a(11),l=a.n(j),d=(a(177),a(178),a(179),a(122)),b=a.n(d),u=a(22),h=a(13),O=a(12),m=a(15),x=a.n(m),p="https://recibapp.herokuapp.com/",f="https://reciba.app/",g=Object(n.createContext)({}),v=function(e){var t=e.children,a=Object(u.g)(),r=localStorage.getItem("bill-token"),s=Object(n.useState)({isLoggedIn:!1,level:9,token:"",name:""}),i=Object(O.a)(s,2),o=i[0],l=i[1];return r&&!o.isLoggedIn&&x.a.post("".concat(p,"api/user/loggedInUser"),{storedToken:r},{headers:{auth:localStorage.getItem("bill-token")}}).then((function(e){localStorage.setItem("bill-token",e.data.data.token),l({isLoggedIn:!0,level:9,token:e.data.data.token,name:e.data.data.name})})).catch((function(e){localStorage.removeItem("bill-token");var t=e.response?e.response.data.message:e.message;j.notify.show(t,"error"),l({isLoggedIn:!1,level:9,token:"",name:""}),a.push("/")})),Object(c.jsx)(g.Provider,{value:Object(h.a)(Object(h.a)({},o),{},{setUserData:l}),children:t})},y=a(253),N=a(254),w=a(157),C=a(158),k=a(9),I=a(10),S=a(28),D=a.n(S);function F(){return Object(c.jsx)(y.a,{children:Object(c.jsxs)(N.a,{className:"h-100-minus align-items-center",children:[Object(c.jsxs)(w.a,{children:[Object(c.jsxs)("h1",{children:["Basta de usar papel para tus comprobantes",Object(c.jsx)("span",{role:"img","aria-label":"Page",children:"\ud83d\udcc3"})]}),Object(c.jsx)("p",{className:"lead",children:"\xa1Ahora pod\xe9s hacer todo digital! Cre\xe1, guard\xe1, envi\xe1 comprobantes desde tu casa sin necesidad de contacto f\xedsico."}),Object(c.jsx)(o.c,{to:"/invoice/generate",children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(k.a,{icon:I.i})," Comenz\xe1 ahora"]})})]}),Object(c.jsxs)(w.a,{className:"text-right",children:[Object(c.jsx)("h6",{children:"Hora actual:"}),Object(c.jsx)("h3",{children:D()().format("MMMM Do YYYY, h:mm:ss a")})]})]})})}var L=a(44),T=a(264);function P(){var e=Object(u.g)(),t=Object(n.useContext)(g),a=Object(n.useState)({name:"",email:"",password:"",repeatPassword:""}),r=Object(O.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(!1),l=Object(O.a)(o,2),d=l[0],b=l[1],m=function(e){var t=e.target,a=t.name,c=t.value;i(Object(h.a)(Object(h.a)({},s),{},Object(L.a)({},a,c)))};return Object(c.jsx)(y.a,{children:Object(c.jsxs)(N.a,{className:"h-100-minus align-items-center",children:[Object(c.jsxs)(w.a,{children:[Object(c.jsx)("h1",{children:"Inicie sesi\xf3n para tener m\xe1s beneficios"}),Object(c.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, nisi. Provident ipsum praesentium numquam sapiente."})]}),Object(c.jsx)(w.a,{className:"bg-light shadow p-3 rounded",children:Object(c.jsxs)(T.a,{noValidate:!0,validated:d,onSubmit:function(a){a.preventDefault(),!1===a.currentTarget.checkValidity()?(a.stopPropagation(),j.notify.show("Por favor, verifique los datos antes de continuar","error")):(a.stopPropagation(),x.a.post("".concat(p,"api/user/register"),{email:s.email,password:s.password,name:s.name}).then((function(a){a.data.success?x.a.post("".concat(p,"api/user/login"),{email:s.email,password:s.password}).then((function(a){var c=a.data;c.success?(t.setUserData({isLoggedIn:!0,token:c.data.token,name:c.data.name}),localStorage.setItem("bill-token",c.data.token),j.notify.show("".concat(c.message),"success"),e.push("/")):j.notify.show("Ocurri\xf3 un error, reintente por favor","error")})).catch((function(e){j.notify.show("".concat(e.response.data.message),"error")})):j.notify.show("Error: ".concat(a.data.message),"error")})).catch((function(e){try{j.notify.show("".concat(e.response.data.message),"error")}catch(t){j.notify.show("".concat(t.message),"error")}}))),b(!0)},children:[Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Nombre"}),Object(c.jsx)(T.a.Control,{type:"text",name:"name",onChange:m,value:s.name,required:!0}),Object(c.jsxs)(T.a.Control.Feedback,{type:"invalid",children:["Por favor ingrese su nombre"," "]})]}),Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Direcci\xf3n de correo"}),Object(c.jsx)(T.a.Control,{type:"email",name:"email",onChange:m,value:s.email,required:!0}),Object(c.jsx)(T.a.Control.Feedback,{type:"invalid",children:"Ingrese un e-mail v\xe1lido"})]}),Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Contrase\xf1a"}),Object(c.jsx)(T.a.Control,{type:"password",name:"password",onChange:m,value:s.password,required:!0}),Object(c.jsx)(T.a.Control.Feedback,{type:"invalid",children:"Por favor, ingrese una contrase\xf1a"})]})}),Object(c.jsx)(w.a,{children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Repita la contrase\xf1a"}),Object(c.jsx)(T.a.Control,{type:"password",name:"repeatPassword",onChange:m,value:s.repeatPassword,required:!0}),Object(c.jsx)(T.a.Control.Feedback,{type:"invalid",children:"Verifique que la contrase\xf1a sea igual en ambos casos"})]})})]}),Object(c.jsx)(T.a.Group,{children:Object(c.jsx)(T.a.Label,{children:"Captcha!"})}),Object(c.jsxs)(C.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(k.a,{icon:I.a})," Guardar datos"]})]})})]})})}function E(){var e=Object(n.useContext)(g),t=Object(n.useState)({email:"",password:""}),a=Object(O.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(O.a)(i,2),l=o[0],d=o[1],b=Object(u.g)(),m=function(e){var t=e.target,a=t.name,c=t.value;s(Object(h.a)(Object(h.a)({},r),{},Object(L.a)({},a,c)))};return Object(c.jsx)(y.a,{children:Object(c.jsxs)(N.a,{className:"h-100-minus align-items-center",children:[Object(c.jsx)(w.a,{}),Object(c.jsx)(w.a,{md:6,sm:12,className:"shadow rounded bg-light p-3",children:Object(c.jsxs)(T.a,{onSubmit:function(t){var a=t.currentTarget;t.preventDefault(),!1===a.checkValidity()?(t.stopPropagation(),j.notify.show("Por favor verifique los datos antes de continuar","error")):(t.stopPropagation(),x.a.post("".concat(p,"api/user/login"),r).then((function(t){var a=t.data;a.success?(e.setUserData({isLoggedIn:!0,token:a.data.token,name:a.data.name}),localStorage.setItem("bill-token",a.data.token),j.notify.show("".concat(a.message),"success"),b.push("/")):j.notify.show("Ocurri\xf3 un error, por favor reintente","error")})).catch((function(e){var t=e.response?e.response.data.message:e.message;j.notify.show("".concat(t),"error")}))),d(!0)},noValidate:!0,validated:l,children:[Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Direcci\xf3n de correo"}),Object(c.jsx)(T.a.Control,{type:"email",name:"email",value:r.email,onChange:m,required:!0}),Object(c.jsx)(T.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese un e-mail v\xe1lido"})]}),Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Contrase\xf1a"}),Object(c.jsx)(T.a.Control,{type:"password",name:"password",value:r.password,onChange:m,required:!0}),Object(c.jsx)(T.a.Control.Feedback,{type:"invalid",children:"Ingrese su contrase\xf1a"})]}),Object(c.jsxs)(C.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(k.a,{icon:I.b})," Iniciar sesi\xf3n"]})]})}),Object(c.jsx)(w.a,{})]})})}function B(){var e=Object(n.useContext)(g),t=Object(u.g)();return Object(n.useEffect)((function(){localStorage.removeItem("bill-token"),e.setUserData({isLoggedIn:!1,level:9,token:"",name:""})}),[]),Object(c.jsx)(y.a,{children:Object(c.jsx)(N.a,{className:"h-100-minus align-items-center",children:Object(c.jsxs)(w.a,{className:"text-center",children:[Object(c.jsxs)("h1",{children:["Que l\xe1stima verte partir"," ",Object(c.jsx)("span",{role:"img","aria-label":"sad",children:"\ud83d\ude22"})]}),Object(c.jsx)("p",{children:"\xa1Ojal\xe1 podamos volverte a ver!"}),Object(c.jsx)(C.a,{className:"mt-5",onClick:function(){return t.push("/")},children:"Ir a la p\xe1gina principal"})]})})})}var q=a(269),M=a(255),G=a(267);function R(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(G.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/profile",children:[Object(c.jsx)(k.a,{icon:I.w,className:"mr-1"})," Perfil"]})}),Object(c.jsx)(G.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/logout",children:[Object(c.jsx)(k.a,{icon:I.d,className:"mr-1"})," Cerrar sesi\xf3n"]})})]})}function Y(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(G.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/login",children:[Object(c.jsx)(k.a,{icon:I.v,className:"mr-1"})," Iniciar sesi\xf3n"]})}),Object(c.jsx)(G.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/signup",children:[Object(c.jsx)(k.a,{icon:I.x,className:"mr-1"})," Crear usuario"]})})]})}function A(){return Object(c.jsxs)(M.a,{className:"mr-auto",children:[Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/",children:[Object(c.jsx)(k.a,{icon:I.h})," Principal"]}),Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/invoice/generate",children:[Object(c.jsx)(k.a,{icon:I.m})," Crear nueva boleta"]}),Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/dashboard",children:[Object(c.jsx)(k.a,{icon:I.c})," Dashboard"]})]})}function H(){return Object(c.jsx)(M.a,{className:"mr-auto",children:Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/",children:[Object(c.jsx)(k.a,{icon:I.h})," Principal"]})})}function z(){var e=Object(n.useContext)(g);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(q.a,{fixed:"top",style:{zIndex:999},bg:"primary",variant:"dark",expand:"lg",children:[Object(c.jsx)(o.c,{to:"/",children:Object(c.jsx)(q.a.Brand,{children:"reciba.app"})}),Object(c.jsx)(q.a.Toggle,{}),Object(c.jsxs)(q.a.Collapse,{children:[e.isLoggedIn?Object(c.jsx)(A,{}):Object(c.jsx)(H,{}),Object(c.jsx)(M.a,{className:"ml-auto",children:Object(c.jsx)(G.a,{title:"Usuario actual: ".concat(e.isLoggedIn?e.name:"invitado"),id:"collasible-nav-dropdown",children:e.isLoggedIn?Object(c.jsx)(R,{}):Object(c.jsx)(Y,{})})})]})]}),Object(c.jsx)("div",{style:{height:35}})]})}var _=a(159),U=a.n(_),V=a(263);a(212);function $(e){var t=e.show,a=void 0===t||t,n=e.onHide,r=void 0===n?function(){return!a}:n,s=e.currentId,i=void 0===s?"Error":s;return Object(c.jsx)(V.a,{size:"xl",show:a,onHide:r,children:Object(c.jsxs)(V.a.Body,{children:[Object(c.jsx)(N.a,{children:Object(c.jsx)(w.a,{children:Object(c.jsx)("p",{className:"lead text-center",children:"Escanee el c\xf3digo con el celular para poder firmar en este comprobante"})})}),Object(c.jsxs)(N.a,{className:"my-5",children:[Object(c.jsx)(w.a,{}),Object(c.jsx)(w.a,{className:"bg-white shadow rounded p-3",md:3,children:Object(c.jsx)(U.a,{size:200,value:"".concat(f,"#/signature/").concat(i)})}),Object(c.jsx)(w.a,{})]}),Object(c.jsx)(N.a,{children:Object(c.jsx)(w.a,{className:"text-center",children:Object(c.jsxs)("small",{children:["Tambi\xe9n puede ingresar ac\xe1 para firmar"," ",Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(f,"#/signature/").concat(i),children:"".concat(f,"#/signature/").concat(i)})]})})}),Object(c.jsx)(N.a,{children:Object(c.jsxs)(w.a,{className:"text-center",children:[Object(c.jsx)("p",{className:"lead",children:"Al finalizar la firma, presionar para continuar"}),Object(c.jsxs)(C.a,{onClick:r,children:[Object(c.jsx)(k.a,{icon:I.t})," Cerrar"]})]})})]})})}var J=a(268),K=Object(n.createContext)({generateId:function(){return""},currentId:""});function Q(e){var t=e.children,a=Object(n.useState)(""),r=Object(O.a)(a,1)[0];return Object(c.jsx)(K.Provider,{value:{generateId:function(){return Object(J.a)()},currentId:r},children:t})}var W=a(270),X=a(274);function Z(e){return e.toString().substr(0,10)}function ee(e){var t=e.submitFilter,a=e.isLoading,r=e.setIsLoading,s=Object(n.useState)({from:"",to:"",tags:""}),i=Object(O.a)(s,2),o=i[0],j=i[1],l=function(e){var t=e.target,a=t.name,c=t.value;j(Object(h.a)(Object(h.a)({},o),{},Object(L.a)({},a,c)))};return Object(c.jsx)(w.a,{className:"bg-white rounded shadow p-3 mb-3",children:Object(c.jsx)(W.a,{children:Object(c.jsxs)(X.a,{children:[Object(c.jsxs)(W.a.Toggle,{as:X.a.Header,eventKey:"0",children:["Filtros ",o.from||o.to?Object(c.jsx)("small",{className:"text-muted border rounded p-1",children:"".concat(o.from?"Desde: ".concat(D()(Z(o.from)).format("L")):""," ").concat(o.to?"Hasta: ".concat(D()(Z(o.to)).format("L")):"")}):Object(c.jsx)("small",{className:"text-muted border rounded p-1",children:"Mostrando las boletas de ".concat(Intl.DateTimeFormat(navigator.language,{month:"long"}).format(new Date))})]}),Object(c.jsx)(W.a.Collapse,{eventKey:"0",children:Object(c.jsx)(X.a.Body,{children:Object(c.jsxs)(T.a,{onSubmit:function(e){e.preventDefault(),r(!0),t({from:o.from?D()(o.from).startOf("day").format("YYYY-MM-DD"):"undefined",to:o.to?D()(o.to).endOf("day").format("YYYY-MM-DD"):"undefined",tags:o.tags})},children:[Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Etiqueta"}),Object(c.jsx)(T.a.Control,{name:"tags",value:o.tags,onChange:l,type:"text"})]})}),Object(c.jsx)(w.a,{children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Desde"}),Object(c.jsx)(T.a.Control,{type:"date",onChange:l,name:"from",value:o.from})]})}),Object(c.jsx)(w.a,{children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Hasta"}),Object(c.jsx)(T.a.Control,{type:"date",onChange:l,name:"to",value:o.to})]})})]}),Object(c.jsx)(N.a,{children:Object(c.jsxs)(w.a,{className:"d-flex justify-content-end w-100",children:[Object(c.jsxs)(C.a,{disabled:a,className:"mr-3",variant:"success",type:"submit",children:[Object(c.jsx)(k.a,{icon:I.q})," Buscar"]}),Object(c.jsxs)(C.a,{disabled:a,onClick:function(){r(!0),t({}),j({from:"",to:"",tags:""})},variant:"danger",children:[Object(c.jsx)(k.a,{icon:I.t})," Limpiar b\xfasqueda"]})]})})]})})})]})})})}var te=a(103),ae=a(275),ce=a(256),ne=a(271),re=a(257);function se(){return Object(c.jsx)(y.a,{children:Object(c.jsxs)(N.a,{style:{height:"65vh"},children:[Object(c.jsx)(w.a,{}),Object(c.jsxs)(w.a,{md:2,className:"my-auto shadow bg-light rounded py-4",children:[Object(c.jsx)("div",{className:"m-auto",style:{width:"4rem",height:"4rem"},children:Object(c.jsx)("div",{className:"spinner"})}),Object(c.jsx)("h1",{className:"mt-3 lead text-gray text-center",children:"cargando datos..."})]}),Object(c.jsx)(w.a,{})]})})}var ie=a(160);function oe(e){var t=e.show,a=e.handleClose,r=e.invoiceId,s=e.prevTags,i=e.refreshData,o=Object(n.useState)(""),l=Object(O.a)(o,2),d=l[0],b=l[1];Object(n.useEffect)((function(){s!==[]&&b(s?s.toString():"")}),[r]);return Object(c.jsx)(V.a,{show:t,onHide:a,children:Object(c.jsxs)(T.a,{onSubmit:function(e){e.preventDefault();var t,c=d.split(","),n=[],s=Object(ie.a)(c);try{for(s.s();!(t=s.n()).done;){var o=t.value;n.push(o.trim())}}catch(l){s.e(l)}finally{s.f()}!function(e){if(""===r)throw Error("No hay invoice id especificado");x.a.put("".concat(p,"api/invoice/edit/").concat(r),{tags:e},{headers:{auth:localStorage.getItem("bill-token")}}).then((function(e){e.data,j.notify.show("Datos guardados","success"),i(),a()})).catch((function(e){j.notify.show(e.message,"error")}))}(n)},children:[Object(c.jsx)(V.a.Header,{closeButton:!0,children:Object(c.jsx)(V.a.Title,{children:"Agregar etiquetas"})}),Object(c.jsx)(V.a.Body,{children:Object(c.jsxs)(T.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(T.a.Label,{children:"Etiquetas separadas por comas"}),Object(c.jsx)(T.a.Control,{type:"text",value:d,onChange:function(e){return b(e.target.value)},placeholder:"pendiente, seguimiento"})]})}),Object(c.jsxs)(V.a.Footer,{children:[Object(c.jsx)(C.a,{variant:"secondary",onClick:a,children:"Cancelar"}),Object(c.jsx)(C.a,{variant:"primary",type:"submit",children:"Guardar"})]})]})})}var je=function(e){var t=e.resetData,a=e.show,r=e.data,s=Object(n.useState)(""),i=Object(O.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)(!1),b=Object(O.a)(d,2),u=b[0],h=b[1];return Object(c.jsxs)(V.a,{size:"xl",show:a,onHide:function(){t(),l("")},children:[Object(c.jsx)(V.a.Header,{closeButton:!0,children:Object(c.jsx)(V.a.Title,{children:"Enviar por mail"})}),Object(c.jsxs)(T.a,{onSubmit:function(e){e.preventDefault(),h(!0),""===o?(j.notify.show("Debe especificar un mail v\xe1lido","error"),h(!1)):x.a.post("".concat(p,"api/mail/send/signaturePetition/"),{invoiceId:r.invoice,from:r.from,to:o}).then((function(e){e.data.success?(j.notify.show(e.data.message,"success"),h(!1),l(""),t()):(j.notify.show(e.data.message,"warning"),h(!1))})).catch((function(e){j.notify.show("Ocurri\xf3 un error enviando el mail, reintente","error"),h(!1)}))},children:[Object(c.jsx)(V.a.Body,{children:Object(c.jsxs)(T.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(T.a.Label,{children:"Direcci\xf3n de correo:"}),Object(c.jsx)(T.a.Control,{type:"email",value:o,onChange:function(e){return l(e.target.value)}}),Object(c.jsxs)(T.a.Text,{className:"text-muted",children:["Tambi\xe9n pod\xe9s copiar este link y pasarle por privado:"," ",Object(c.jsx)("a",{href:"".concat(f,"#/offlinesignature/").concat(r.invoice),children:"".concat(f,"#/offlinesignature/").concat(r.invoice)})]})]})}),Object(c.jsxs)(V.a.Footer,{children:[Object(c.jsxs)(C.a,{disabled:u,onClick:function(){t(),l("")},variant:"secondary",children:[Object(c.jsx)(k.a,{icon:I.t})," Cerrar"]}),Object(c.jsxs)(C.a,{disabled:u,type:"submit",variant:"primary",children:[Object(c.jsx)(k.a,{icon:I.j})," ",u?"Espere un momento...":"Enviar"]})]})]})]})};function le(e){var t=e.completed,a=e.pending,r=e.deleteBill,s=e.refreshData,i=e.isLoading,o=Object(u.g)(),j=Object(n.useState)({invoice:"",from:""}),l=Object(O.a)(j,2),d=l[0],b=l[1],h=Object(n.useState)(!1),m=Object(O.a)(h,2),x=m[0],p=m[1],f=Object(n.useState)({id:"",prevTags:[]}),g=Object(O.a)(f,2),v=g[0],y=g[1],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];y({id:e,prevTags:t}),p((function(e){return!e}))};return i?Object(c.jsx)(se,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(je,{resetData:function(){b({invoice:"",from:""}),s({from:"",to:"",tags:""})},show:""!==d.invoice&&""!==d.from,data:d}),Object(c.jsx)(oe,{show:x,handleClose:function(){return C()},invoiceId:v.id,prevTags:v.prevTags,refreshData:function(){return s({})}}),Object(c.jsxs)(w.a,{className:"bg-white rounded shadow p-3 mb-3",children:[Object(c.jsxs)("small",{className:"text-muted",children:["Boletas pendientes - ",a.length]}),Object(c.jsx)(ae.a,{children:a.map((function(e){var t,a,n;return Object(c.jsx)(ae.a.Item,{children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{md:"2",children:D()(Z(e.date)).format("L")}),Object(c.jsxs)(w.a,{children:[e.from," ",Object(c.jsxs)("small",{children:["(",e.currency," $",e.amount,")"]}),null===(t=e.tags)||void 0===t?void 0:t.map((function(e){return Object(c.jsx)(ce.a,{variant:"info",className:"ml-1",children:e},Math.random())}))," ",(null===(a=e.alreadySent)||void 0===a?void 0:a.isAlreadySent)?Object(c.jsx)(ne.a,{placement:"top",overlay:Object(c.jsxs)(re.a,{id:"mail-already-sent",children:["Mail ya enviado a: ",null===(n=e.alreadySent)||void 0===n?void 0:n.emailAddress]}),children:Object(c.jsx)(k.a,{icon:te.a,style:{color:"#6DB65B"}})}):null]}),Object(c.jsxs)(w.a,{md:"2",className:"text-right text-primary",children:[Object(c.jsx)(k.a,{icon:I.s,onClick:function(){return C(e._id,e.tags)}}),Object(c.jsx)(k.a,{onClick:function(){return o.push("/invoice/edit/".concat(e._id,"/"))},className:"pointer mx-3",icon:I.k}),Object(c.jsx)(k.a,{onClick:function(){return r(e._id)},className:"pointer mr-3",icon:I.u}),Object(c.jsx)(k.a,{className:"pointer",onClick:function(){return b({invoice:e._id?e._id:"",from:e.from})},icon:I.j})]})]})},Math.random())}))}),Object(c.jsx)("hr",{}),Object(c.jsxs)("small",{className:"text-muted",children:["Boletas finalizadas - ",t.length]}),Object(c.jsx)(ae.a,{children:t.map((function(e){var t;return Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{md:"2",children:D()(Z(e.date)).format("L")}),Object(c.jsxs)(w.a,{children:[e.from," ",Object(c.jsxs)("small",{children:["(",e.currency," $",e.amount,")"]}),null===(t=e.tags)||void 0===t?void 0:t.map((function(e){return Object(c.jsx)(ce.a,{variant:"info",className:"ml-1",children:e},Math.random())}))," "]}),Object(c.jsxs)(w.a,{md:"2",className:"text-right text-primary",children:[Object(c.jsx)(k.a,{className:"pointer",icon:I.s,onClick:function(){return C(e._id,e.tags)}}),Object(c.jsx)(k.a,{onClick:function(){return o.push("/invoice/edit/".concat(e._id,"/"))},className:"ml-3 pointer",icon:I.k}),Object(c.jsx)(k.a,{onClick:function(){return o.push("/invoice/display/".concat(e._id,"/no"))},icon:I.n,className:"mx-3 pointer"}),Object(c.jsx)(k.a,{onClick:function(){return r(e._id)},className:"pointer",icon:I.u})]})]})," "]},Math.random())}))})]})]})}function de(){var e=Object(u.g)(),t=Object(n.useState)([]),a=Object(O.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)([]),o=Object(O.a)(i,2),l=o[0],d=o[1],b=Object(n.useState)(!0),h=Object(O.a)(b,2),m=h[0],f=h[1],g={headers:{auth:localStorage.getItem("bill-token")}},v=function(t){var a=x.a.get("".concat(p,"api/invoice/completed?from=").concat(t.from,"&to=").concat(t.to,"&tags=").concat(t.tags),g),c=x.a.get("".concat(p,"api/invoice/pending?from=").concat(t.from,"&to=").concat(t.to,"&tags=").concat(t.tags),g);x.a.all([a,c]).then(x.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];d(t[0].data.data),s(t[1].data.data),f(!1)}))).catch((function(t){j.notify.show("Ocurri\xf3 un error trayendo los datos","error"),e.push("/")}))};return Object(n.useEffect)((function(){f(!0),v({})}),[]),Object(c.jsx)(y.a,{className:"my-5",children:Object(c.jsx)(N.a,{className:"h-100-minus",children:Object(c.jsxs)(w.a,{children:[Object(c.jsx)(ee,{isLoading:m,setIsLoading:function(e){return f(e)},submitFilter:function(e){return v(e)}}),Object(c.jsx)(le,{isLoading:m,refreshData:function(e){return v(e)},deleteBill:function(e){return function(e){void 0!==e&&window.confirm("Advertencia, se borrar\xe1 la boleta. \xbfDesea Confirmar?")&&x.a.delete("".concat(p,"api/invoice/").concat(e),g).then((function(e){e.data.success?(j.notify.show("Boleta eliminada","success"),v({})):j.notify.show(e.data.message,"warning")})).catch((function(e){j.notify.show(e.response.data.message,"error")}))}(e)},completed:l,pending:r})]})})})}var be=a(161),ue=function(e){var t=e.render,a=Object(be.a)(e,["render"]),r=Object(n.useContext)(g);return Object(c.jsx)(u.b,Object(h.a)(Object(h.a)({},a),{},{render:function(e){return r.isLoggedIn||localStorage.getItem("bill-token")?Object(c.jsx)(t,Object(h.a)({},e)):Object(c.jsx)(u.a,{to:"/"})}}))},he=a(70),Oe=a.n(he);function me(e){var t=e.show,a=e.handleClose,n=e.PDFFile;return Object(c.jsxs)(V.a,{show:t,onHide:a,children:[Object(c.jsx)(V.a.Header,{closeButton:!0,children:Object(c.jsx)(V.a.Title,{children:"\xa1Boleta lista!"})}),Object(c.jsx)(V.a.Body,{children:"Su boleta ha sido generada con \xe9xito. \xbfDesea descargar una copia?"}),Object(c.jsxs)(V.a.Footer,{children:[Object(c.jsxs)(C.a,{variant:"secondary",onClick:a,children:[Object(c.jsx)(k.a,{icon:te.b})," Ignorar"]}),Object(c.jsx)("a",{download:"Comprobante.pdf",href:n,children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(k.a,{icon:I.e})," Descargar comprobante"]})})]})]})}var xe,pe=a(243);function fe(){var e=Object(n.useRef)(),t=Object(u.h)(),a=t.socketId,r=t.invoiceId,s=Object(n.useState)(!1),i=Object(O.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)(""),b=Object(O.a)(d,2),m=b[0],f=b[1],g=Object(n.useState)({}),v=Object(O.a)(g,2),S=v[0],D=v[1];Object(n.useEffect)((function(){return a?((xe=Oe()(p)).emit("join",a),xe.emit("close",!1),xe.on("pdf",(function(e){f(e),L()}))):r&&x.a.get("".concat(p,"api/invoice/single/").concat(r)).then((function(e){var t=e.data;t.success&&D(t.data)})).catch((function(e){return alert(e.response.data.message)})),function(){a&&xe.off("pdf")}}),[p]);var F=function(){a&&xe.emit("sign",e.current.toDataURL())},L=function(){l(!o)};return Object(c.jsxs)(y.a,{className:"h-100-minus mt-5",children:[Object(c.jsx)(me,{PDFFile:m,show:o,handleClose:L}),Object(c.jsx)(N.a,{className:r?"d-block":"d-none",children:Object(c.jsxs)(w.a,{className:"text-center",children:[Object(c.jsx)("h1",{children:"\xa1Hola!"}),Object(c.jsxs)("p",{children:["Recibi\xf3 esta boleta de ",Object(c.jsx)("strong",{children:S.from})," con el concepto de ",Object(c.jsx)("strong",{children:S.concept})," por el monto total de"," ",Object(c.jsxs)("strong",{children:[S.currency,S.amount]})]}),Object(c.jsx)("hr",{})]})}),Object(c.jsx)(N.a,{children:Object(c.jsxs)(w.a,{className:"text-center",children:[Object(c.jsx)("p",{className:"lead m-0",children:"Firme en el campo en blanco para continuar"}),Object(c.jsx)("small",{className:"text-muted",children:"Coloque el tel\xe9fono en modo horizontal para mejor resultado"})]})}),Object(c.jsx)(N.a,{className:"my-5",children:Object(c.jsx)(w.a,{onTouchEnd:F,onMouseUp:F,className:"bg-white shadow rounded",children:Object(c.jsx)(pe,{ref:e})})}),Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{children:Object(c.jsxs)(C.a,{className:"w-100",variant:"danger",onClick:function(){e.current.clear(),F()},children:[Object(c.jsx)(k.a,{icon:I.t})," Reiniciar Firma"]})}),Object(c.jsx)(w.a,{className:r?"d-block":"d-none",children:Object(c.jsxs)(C.a,{className:"w-100",variant:"success",onClick:function(){window.confirm("\xbfConfirma el envio de la firma a ".concat(S.from,"?"))&&x.a.put("".concat(p,"api/invoice/addSignature/").concat(r),Object(h.a)(Object(h.a)({},S),{},{sign:e.current.toDataURL()})).then((function(e){j.notify.show("Se ha firmado correctamente. Ya puede salir de esta app.","success")})).catch((function(e){var t=e.response?e.response.data.message:e.message;j.notify.show(t,"error")}))},children:[Object(c.jsx)(k.a,{icon:I.r})," Enviar firma"]})})]}),Object(c.jsx)(N.a,{className:a?"d-block my-5 text-center":"d-none",children:Object(c.jsxs)(w.a,{children:[Object(c.jsx)("p",{className:"lead",children:"\xa1No cierre esta p\xe1gina!"}),Object(c.jsx)("p",{children:"Cuando se genere el comprobante, debajo aparecer\xe1 un bot\xf3n para descargarlo"})]})})]})}var ge,ve=a(59),ye=a.n(ve),Ne=a(83),we=a(164),Ce=a(265),ke=a(272);function Ie(e){var t=e.sendEmail,a=e.setRecipient,n=e.recipient,r=e.validated;return Object(c.jsx)(w.a,{className:"px-5 py-3 bg-white shadow rounded",children:Object(c.jsxs)(T.a,{noValidate:!0,onSubmit:t,validated:r,children:[Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Direcci\xf3n de e-mail"}),Object(c.jsx)(T.a.Control,{type:"email",value:n,onChange:a,placeholder:"correo@server.com",required:!0}),Object(c.jsx)(T.a.Control.Feedback,{type:"invalid",children:"Se necesita un E-mail v\xe1lido"})]}),Object(c.jsxs)(C.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(k.a,{icon:I.j})," Enviar"]})]})})}function Se(e){var t=e.exportPDFToFile,a=e.transformPDFToBase64,n=e.toggleEmailInput,r=e.hasSocketId;return Object(c.jsxs)(w.a,{className:"p-3 bg-light text-center shadow rounded",children:[Object(c.jsxs)(C.a,{className:"mx-2",onClick:t,children:[Object(c.jsx)(k.a,{icon:I.g})," Descargar PDF"]}),Object(c.jsxs)(C.a,{disabled:r,className:"mx-2",onClick:a,children:[Object(c.jsx)(k.a,{icon:I.l})," Enviar PDF al Tel\xe9fono"]}),Object(c.jsxs)(C.a,{onClick:n,className:"mx-2",children:[Object(c.jsx)(k.a,{icon:I.f})," Enviar copia por email"]})]})}function De(e){var t=e.isOriginal,a=void 0!==t&&t,n=e.data;return Object(c.jsxs)(N.a,{className:"pdf-font my-5 py-5 bg-white",children:[Object(c.jsx)(w.a,{md:1,children:Object(c.jsx)("p",{className:"text-muted p-0 mb-0 text-center",style:{height:64,marginTop:150,width:109,paddingLeft:0},children:a?"Recibo Original":"Recibo Duplicado"})}),Object(c.jsxs)(w.a,{className:"px-5",children:[Object(c.jsxs)(N.a,{className:"border-bottom mt-3 pb-3",children:[Object(c.jsx)(w.a,{children:n.logo?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{src:n.logo,alt:"RollingCode School",height:"50"}),Object(c.jsxs)("p",{className:"text-monospace",children:["Recibo N\xb0: ",n.invoiceNumber]})]}):Object(c.jsxs)("p",{className:"text-monospace",children:["Recibo N\xb0:",n.invoiceNumber]})}),Object(c.jsx)(w.a,{md:"2"}),Object(c.jsx)(w.a,{className:"text-center",children:Object(c.jsxs)("p",{className:"my-0",children:[Object(c.jsx)("strong",{children:"Fecha: "}),D()(n.date).format("MMMM Do [del] YYYY")]})})]}),Object(c.jsx)(N.a,{children:Object(c.jsxs)(w.a,{children:[Object(c.jsxs)(N.a,{className:"bg-light my-3",children:[Object(c.jsx)(w.a,{md:3,children:Object(c.jsx)("p",{className:"text-center my-2",children:Object(c.jsx)("strong",{children:"Recib\xed"})})}),Object(c.jsx)(w.a,{children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"De: "}),n.from]})})]}),Object(c.jsx)(N.a,{className:"bg-light my-3",children:Object(c.jsx)(w.a,{children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"La cantidad de: "}),n.amountText]})})}),Object(c.jsx)(N.a,{className:"bg-light my-3",children:Object(c.jsx)(w.a,{children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"En concepto de: "})," ",n.concept]})})})]})}),Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{md:2,className:"bg-light",children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"Son: "})," ",n.currency," $",n.amount]})}),Object(c.jsx)(w.a,{}),Object(c.jsx)(w.a,{md:6,className:"bg-light",children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"Recibo por: "}),Object(c.jsx)("img",{src:n.sign,height:"120",alt:"signature"})]})})]})]})]})}function Fe(){var e=Object(n.useRef)(Object(c.jsx)("div",{})),t=Object(u.h)(),a=t.id,r=t.socketId,s=Object(n.useState)({invoiceNumber:1,logo:"",date:new Date,from:"",amountText:"",amount:0,concept:"",sign:"",currency:"ARS",pending:!1}),i=Object(O.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)(!1),b=Object(O.a)(d,2),m=b[0],f=b[1],g=Object(n.useState)(""),v=Object(O.a)(g,2),w=v[0],C=v[1],k=Object(n.useState)(!1),I=Object(O.a)(k,2),S=I[0],D=I[1],F=function(){return Object(Ce.a)(e.current,{paperSize:"A4",landscape:!0,scale:.75}).then((function(e){return Object(ke.a)(e)}))},L=function(){var e=Object(Ne.a)(ye.a.mark((function e(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ge,e.next=3,F();case 3:e.t1=e.sent,e.t0.emit.call(e.t0,"pdf",e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(Ne.a)(ye.a.mark((function e(t){var a,c;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.currentTarget,e.next=4,F();case 4:c=e.sent,!0===a.checkValidity()&&x.a.post("".concat(p,"api/mail/send/invoice"),{file:c,date:o.date,email:w}).then((function(e){var t=e.data,a=t.success,c=t.message;a?j.notify.show(c,"success"):j.notify.show(c,"error")})).catch((function(e){j.notify.show("Ocurri\xf3 un error","error")})),D(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return ge=Oe()(p),x.a.get("".concat(p,"api/invoice/single/").concat(a)).then((function(e){var t=e.data,a=function(e){var t=e.slice(0,10).split("-");return{year:parseInt(t[0]),month:parseInt(t[1],10)-1,date:parseInt(t[2])}}(t.data.date),c=a.year,n=a.month,r=a.date;l(Object(h.a)(Object(h.a)({},t.data),{},{date:new Date(c,n,r)}))})),ge.emit("join",r),function(){ge.off("join")}}),[p]),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(N.a,{className:"my-5",children:Object(c.jsx)(Se,{exportPDFToFile:function(){Object(we.a)(e.current,{paperSize:"A4",fileName:"Invoice - ".concat(Intl.DateTimeFormat(navigator.language,{month:"numeric",day:"numeric",year:"numeric"}).format(new Date(o.date))," - ").concat(a),landscape:!0,scale:.75})},transformPDFToBase64:L,toggleEmailInput:function(){return f(!m)},hasSocketId:"no"===r})}),Object(c.jsx)(N.a,{className:m?"d-block":"d-none",children:Object(c.jsx)(Ie,{recipient:w,sendEmail:function(e){return T(e)},setRecipient:function(e){return C(e.target.value)},validated:S})}),Object(c.jsxs)("div",{ref:e,children:[Object(c.jsx)(De,{data:o,isOriginal:!0}),Object(c.jsx)(De,{data:o})]})]})}var Le,Te,Pe=a(261),Ee=a(262);function Be(){var e=(new Date).toISOString().substr(0,10),t=localStorage.getItem("bill-token")?{headers:{auth:localStorage.getItem("bill-token")}}:void 0,a=Object(u.h)().id,r=Object(n.useContext)(K).generateId,s=Object(n.useContext)(g).isLoggedIn,i=Object(n.useState)({invoiceNumber:1,date:e,from:"",amountText:"",amount:0,concept:"",currency:"ARS",pending:!1,sign:""}),o=Object(O.a)(i,2),l=o[0],d=o[1],b=Object(n.useState)(!1),m=Object(O.a)(b,2),f=m[0],v=m[1],S=Object(n.useState)(!1),D=Object(O.a)(S,2),F=D[0],P=D[1],E=Object(n.useState)(!1),B=Object(O.a)(E,2),q=B[0],M=B[1],G=Object(u.g)(),R=function(e){var t=e.target,a=t.name,c=t.value,n=t.type,r=t.checked,s="checkbox"===n?r:c;d(Object(h.a)(Object(h.a)({},l),{},Object(L.a)({},a,s)))};Object(n.useEffect)((function(){return Le=Oe()(p),a&&x.a.get("".concat(p,"api/invoice/single/").concat(a)).then((function(e){var t=e.data,a=t.data.date.substr(0,10);d(Object(h.a)(Object(h.a)({},t.data),{},{date:a}))})),Le.on("close",(function(){P(!1),j.notify.show("Tel\xe9fono Conectado!","success")})),Le.on("sign",(function(e){d((function(t){return Object(h.a)(Object(h.a)({},t),{},{sign:e})}))})),function(){Le.disconnect(),Te=""}}),[p]);var Y=function(){var e=Object(Ne.a)(ye.a.mark((function e(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Te||(Te=r(),Le.emit("join",Te)),P((function(e){return!e}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(y.a,{children:[Object(c.jsx)($,{currentId:Te,show:F,onHide:function(){P((function(e){return!e}))}}),Object(c.jsx)(N.a,{className:"h-100-minus align-items-center",children:Object(c.jsx)(w.a,{className:"bg-light p-3 shadow rounded",children:Object(c.jsxs)(T.a,{noValidate:!0,validated:f,onSubmit:function(e){e.preventDefault(),e.stopPropagation(),M(!0);var c=e.currentTarget;return l.sign||l.pending?(!1===c.checkValidity()?j.notify.show("Please verify the form and try again","error"):a?x.a.put("".concat(p,"api/invoice/edit/").concat(a),Object(h.a)({},l),{headers:{auth:localStorage.getItem("bill-token")}}).then((function(e){var t=e.data;t.success&&G.push("/dashboard"),j.notify.show(t.message,"success")})).catch((function(e){j.notify.show("Ocurri\xf3 un error creando el comprobante, por favor reintente","error")})):x.a.post("".concat(p,"api/invoice/"),Object(h.a)({},l),t).then((function(e){var t=e.data;t.id&&G.push(l.pending?"/dashboard":"/invoice/display/".concat(t.id,"/").concat(Te)),j.notify.show(t.message,"success")})).catch((function(e){j.notify.show("Ocurri\xf3 un error creando el comprobante, por favor reintente","error")})),M(!1),v(!0),!1):(j.notify.show("Se necesita la firma para continuar","error"),M(!1),null)},children:[Object(c.jsx)(N.a,{children:Object(c.jsx)(w.a,{children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Fecha"}),Object(c.jsx)(T.a.Control,{required:!0,name:"date",onChange:R,value:l.date.toString(),type:"date"}),Object(c.jsx)(T.a.Control.Feedback,{type:"invalid",children:"La fecha es necesaria"})]})})}),Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{md:"3",children:Object(c.jsx)("p",{className:"text-center",children:"Recibo"})}),Object(c.jsx)(w.a,{children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"De"}),Object(c.jsx)(T.a.Control,{required:!0,name:"from",onChange:R,value:l.from,type:"text"})]})})]}),Object(c.jsx)(N.a,{children:Object(c.jsx)(w.a,{children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Cantidad"}),Object(c.jsx)(T.a.Control,{required:!0,name:"amountText",onChange:R,value:l.amountText,type:"text"})]})})}),Object(c.jsx)(N.a,{children:Object(c.jsx)(w.a,{children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"En concepto de"}),Object(c.jsx)(T.a.Control,{required:!0,name:"concept",onChange:R,value:l.concept,type:"text"})]})})}),Object(c.jsxs)(N.a,{children:[Object(c.jsx)(w.a,{sm:12,md:3,children:Object(c.jsxs)(T.a.Group,{children:[Object(c.jsx)(T.a.Label,{children:"Cantidad"}),Object(c.jsxs)(Pe.a,{children:[Object(c.jsx)(Pe.a.Prepend,{children:Object(c.jsx)(Pe.a.Text,{children:Object(c.jsxs)("select",{name:"currency",onChange:R,value:l.currency,className:"no-decoration",children:[Object(c.jsx)("option",{children:"ARS"}),Object(c.jsx)("option",{children:"USD"})]})})}),Object(c.jsx)(T.a.Control,{required:!0,name:"amount",onChange:R,value:l.amount,min:1,type:"decimal"})]})]})}),Object(c.jsx)(w.a,{className:"text-right",children:Object(c.jsx)("p",{className:"lead",children:"Firma"})}),Object(c.jsx)(w.a,{children:l.sign?Object(c.jsx)("img",{height:"100",src:l.sign,alt:"signature"}):null})]}),Object(c.jsx)(N.a,{children:Object(c.jsxs)(w.a,{className:"text-right d-flex align-items-center justify-content-end",children:[s?Object(c.jsx)("fieldset",{className:"mr-3 py-1 px-2 border border-gray rounded",children:Object(c.jsxs)("label",{htmlFor:"pending",className:"m-0 p-0",children:[Object(c.jsx)("input",{id:"pending",type:"checkbox",name:"pending",checked:l.pending,onChange:R,className:"mr-1 p-0 m-0"}),"Marcar boleta para firmar luego"]})}):null,Object(c.jsxs)(C.a,{variant:"info",onClick:Y,className:"mr-3",children:[Object(c.jsx)(k.a,{icon:I.o}),"Mostrar QR para firmar"]}),Object(c.jsxs)(C.a,{disabled:q,variant:"secondary",className:"mr-3",onClick:function(){G.push("/")},children:[Object(c.jsx)(k.a,{icon:I.t}),"Cancelar"]}),Object(c.jsxs)(C.a,{disabled:q,variant:"primary",type:"submit",children:[q?Object(c.jsx)(Ee.a,{size:"sm",animation:"border"}):Object(c.jsx)(k.a,{icon:I.p}),"Guardar"]})]})})]})})})]})}var qe=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(v,{children:Object(c.jsx)(Q,{children:Object(c.jsxs)(o.b,{basename:"",children:[Object(c.jsx)(z,{}),Object(c.jsxs)(u.d,{children:[Object(c.jsx)(u.b,{path:"/signup",component:P}),Object(c.jsx)(u.b,{path:"/login",component:E}),Object(c.jsx)(u.b,{path:"/logout",component:B}),Object(c.jsx)(u.b,{path:"/",exact:!0,component:F}),Object(c.jsx)(u.b,{path:"/invoice/generate",component:Be}),Object(c.jsx)(ue,{path:"/invoice/edit/:id",render:function(){return Object(c.jsx)(Be,{})}}),Object(c.jsx)(u.b,{path:"/invoice/display/:id/:socketId",component:Fe}),Object(c.jsx)(u.b,{path:"/invoice/code/:id",component:$}),Object(c.jsx)(ue,{path:"/dashboard",render:function(){return Object(c.jsx)(de,{})}}),Object(c.jsx)(u.b,{path:"/signature/:socketId",component:fe}),Object(c.jsx)(u.b,{path:"/offlinesignature/:invoiceId",component:fe}),Object(c.jsx)(u.b,{render:function(){return Object(c.jsx)("div",{children:"Not found"})}})]})]})})})})};b.a.tz.setDefault("America/Buenos_Aires"),b.a.locale("es"),i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(l.a,{options:{zIndex:998,top:"56px",colors:{error:{color:"#FFFFFF",backgroundColor:"#ff7851"},success:{color:"#FFFFFF",backgroundColor:"#56cc9d"}}}}),Object(c.jsx)(qe,{})]})}),document.getElementById("root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.c61dfe64.chunk.js.map