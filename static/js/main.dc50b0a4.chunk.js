(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},178:function(e,t,a){},180:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(14),r=a.n(n),s=(a(156),a(47)),o=a(28),l=a(17),u=(a(157),a(158),a(339)),d=a(326),j=a(9),b=a(7);function h(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(d.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return j.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var O=a(96),m=a.n(O),f=a(131),x=(a(165),a(166),a(330)),p=a(132),g=a.n(p),v=a(133),N=a.n(v),D=a(142),C=a(340),y=a.p+"static/media/couverture.2dc9ece9.webp";function k(e){e.id;var t=e.nom,a=e.couleur,c=e.datemodif,n=e.couverture,r=i.a.useState(null),s=Object(l.a)(r,2),o=s[0],u=s[1],d=function(){u(null)};return Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:a},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(x.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(g.a,{})}),Object(b.jsx)("img",{src:n||y,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:["Modifi\xe9 : ",A(c)]})]}),Object(b.jsx)(x.a,{className:"modifier","aria-label":"modifier",size:"small","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},children:Object(b.jsx)(N.a,{})}),Object(b.jsxs)(D.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:d,children:[Object(b.jsx)(C.a,{onClick:d,children:"Modifier"}),Object(b.jsx)(C.a,{onClick:d,children:"Supprimer"})]})]})}function A(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}var S=a(134);a(289);j.a.apps.length||j.a.initializeApp({apiKey:"AIzaSyAPWgfU_eSPhNQQf2Gyncew2kgo-OMUNIQ",authDomain:"ex3-panier.firebaseapp.com",databaseURL:"https://ex3-panier-default-rtdb.firebaseio.com",projectId:"ex3-panier",storageBucket:"ex3-panier.appspot.com",messagingSenderId:"110586098504",appId:"1:110586098504:web:d6c1fdd0d3a43d783bf97d"});var w=new S.a.AuthUI(j.a.auth()),I=j.a.firestore();function E(e){var t=e.utilisateur,a=e.etatDossiers,i=Object(l.a)(a,2),n=i[0],r=i[1];if(Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,I.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:e.sent.forEach((function(e){a.push(Object(s.a)({id:e.id},e.data()))})),r(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n.length),n.length<1){var o="#"+Math.floor(16777215*Math.random()).toString(16);return Object(b.jsx)("ul",{className:"ListeDossiers",children:Object(b.jsx)("li",{children:Object(b.jsx)("article",{className:"Dossier",style:{backgroundColor:o},children:Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:"Votre liste de dossiers est vide"}),Object(b.jsx)("h1",{children:";-("})]})})})})}return Object(b.jsx)("ul",{className:"ListeDossiers",children:n.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(k,Object(s.a)({},e))},e.id)}))})}var F=a(334),R=a(140),M=a.n(R);a(178),a(179);function P(){return Object(c.useEffect)((function(){return w.start("#firebaseui-widget",{signInOptions:[j.a.auth.GoogleAuthProvider.PROVIDER_ID,j.a.auth.FacebookAuthProvider.PROVIDER_ID,j.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}a(180);var V=a(335),B=a(337),z=a(333),U=a(332),L=a(338),W=a(141);function _(e){var t=e.ouvert,a=e.setOuvert,i=e.gererAjout,n=Object(c.useState)(""),r=Object(l.a)(n,2),s=r[0],o=r[1],u=Object(c.useState)(""),j=Object(l.a)(u,2),h=j[0],O=j[1],m=Object(c.useState)("#537169"),f=Object(l.a)(m,2),x=f[0],p=f[1];function g(){o(""),O(""),p("#537169")}return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(B.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(L.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(U.a,{children:[Object(b.jsx)(V.a,{autoFocus:!0,margin:"dense",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:s}),Object(b.jsx)(V.a,{margin:"dense",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return O(e.target.value)},defaultValue:h}),Object(b.jsx)(W.a,{width:"100%",triangle:"hide",colors:["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3"],onChangeComplete:function(e,t){return p(e.hex)},color:x})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(d.a,{onClick:function(){a(!1),g()},style:{background:"crimson",border:0,color:"white"},variant:"outlined",color:"primary",children:"Annuler"}),Object(b.jsx)(d.a,{onClick:function(){""!==s&&i(s,h,x),g()},style:{background:"green",border:0,color:"white"},variant:"outlined",color:"primary",children:"Ajouter"})]})]})})}function G(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)([]),r=Object(l.a)(n,2),u=r[0],d=r[1],O=Object(c.useState)(!1),m=Object(l.a)(O,2),f=m[0],x=m[1];return Object(c.useEffect)((function(){j.a.auth().onAuthStateChanged((function(e){i(e),e&&I.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:j.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{utilisateur:a}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(E,{utilisateur:a,etatDossiers:n}),Object(b.jsx)(_,{ouvert:f,setOuvert:x,gererAjout:function(e,t,c){var i={nom:e,couverture:t,couleur:c,datemodif:j.a.firestore.FieldValue.serverTimestamp(),signets:[]};I.collection("utilisateurs-ex4").doc(a.uid).collection("dossiers").add(i).then((function(e){e.get().then((function(e){return d([].concat(Object(o.a)(u),[Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id})]))})),x(!1)}))}}),Object(b.jsx)(F.a,{onClick:function(){return x(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(M.a,{})})]})]}):Object(b.jsx)(P,{})})}r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("racine"))}},[[287,1,2]]]);
//# sourceMappingURL=main.dc50b0a4.chunk.js.map