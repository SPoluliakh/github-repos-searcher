"use strict";(self.webpackChunkgithub_repo_searcher=self.webpackChunkgithub_repo_searcher||[]).push([[459],{7894:function(n,e,t){t.d(e,{q:function(){return q}});var r,o,i,a,s,u,c,d,h,l,m=t(9439),f=t(1237),p=t(2791),x=t(4408),g=t(168),w=t(6444),b=w.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 350px;\n  @media (min-width: 768px) {\n    width: 400px;\n  }\n  @media (min-width: 1200px) {\n    width: 450px;\n  }\n  margin-bottom: ","px;\n  padding: ","px;\n  box-shadow: ",";\n  border-radius: ",";\n  overflow-y: auto;\n  transition: 250ms linear;\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n  :hover {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.shadows.textShadow}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.shadows.boxShadow})),j=w.ZP.button(o||(o=(0,g.Z)(["\n  font-family: ",";\n  cursor: pointer;\n  background-color: ",";\n  border-radius: ",";\n  border: ",";\n  box-shadow: ",";\n  color: ",";\n  margin-top: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  transition: 250ms linear;\n  :hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.fontFamily.Text}),(function(n){return n.theme.colors.deleteButton}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.input}),(function(n){return n.theme.shadows.buttonsShadow}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.hoverBtn})),v=w.ZP.textarea(i||(i=(0,g.Z)(["\n  font-family: ",";\n  letter-spacing: 0.9px;\n  color: ",";\n  background-color: inherit;\n  width: 100%;\n  border: none;\n  resize: none;\n"])),(function(n){return n.theme.fontFamily.link}),(function(n){return n.theme.colors.text})),Z=w.ZP.form(a||(a=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),y=t(3329),k=function(n){var e=n.coments,t=n.id,r=(0,p.useState)(e),o=(0,m.Z)(r,2),i=o[0],a=o[1],s=(0,x.hc)(),u=(0,m.Z)(s,1)[0];return(0,y.jsx)(b,{children:(0,y.jsxs)(Z,{onSubmit:function(n){(n.preventDefault(),i)?u({id:t,data:i}):a("Your coments...")},children:[(0,y.jsx)(v,{value:i,onChange:function(n){var e=n.target.value;a(e)},rows:"7",placeholder:"Your coments..."}),(0,y.jsx)(j,{type:"submit",children:"Save"})]})})},_=t(6355),P=w.ZP.li(s||(s=(0,g.Z)(["\n  text-align: center;\n  @media (min-width: 1200px) {\n    display: flex;\n    align-items: center;\n  }\n"]))),F=w.ZP.div(u||(u=(0,g.Z)(["\n  width: 350px;\n  padding: ","px;\n  box-shadow: ",";\n  border-radius: ",";\n  transition: 250ms linear;\n  overflow-x: hidden;\n  @media (min-width: 768px) {\n    width: 400px;\n  }\n  @media (min-width: 1200px) {\n    width: 450px;\n  }\n\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n  :hover {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.shadows.textShadow}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.shadows.boxShadow})),S=w.ZP.button(c||(c=(0,g.Z)(["\n  font-family: ",";\n  cursor: pointer;\n  background-color: ",";\n  border-radius: ",";\n  border: ",";\n  box-shadow: ",";\n  color: ",";\n  margin-top: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  transition: 250ms linear;\n  :hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.fontFamily.Text}),(function(n){return n.disabled?n.theme.colors.hoverBtn:n.theme.colors.deleteButton}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.input}),(function(n){return n.theme.shadows.buttonsShadow}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.hoverBtn})),L=w.ZP.div(d||(d=(0,g.Z)(["\n  margin-right: ","px;\n  margin-left: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),z=w.ZP.h2(h||(h=(0,g.Z)([""]))),B=w.ZP.a(l||(l=(0,g.Z)(["\n  text-decoration: none;\n  color: ",";\n  font-family: ",";\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontFamily.link})),C=window.innerWidth>=1200,q=function(n){var e=n.id,t=n.html_url,r=n.full_name,o=n.forks,i=n.watchers,a=n.description,s=n.updated_at,u=n.coments,c={html_url:t,full_name:r,forks:o,watchers:i,description:a,updated_at:s},d=(0,x.Vx)().data,h=(0,p.useState)((function(){return null===d||void 0===d?void 0:d.some((function(n){return n.html_url===t}))})),l=(0,m.Z)(h,2),g=l[0],w=l[1],b=(0,f.a)().isLoggedIn,j=(0,x.Uq)(),v=(0,m.Z)(j,2),Z=v[0],q=v[1].isLoading,D=(0,x.Dd)(),R=(0,m.Z)(D,2),T=R[0],U=R[1].isLoading;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(P,{children:[(0,y.jsxs)(F,{children:[(0,y.jsxs)(B,{href:t,target:"_blank",rel:"noreferrer",children:[(0,y.jsxs)(z,{children:[" ",r," "]}),(0,y.jsxs)("p",{children:["Forks: ",o,", Watchers: ",i]}),(0,y.jsxs)("p",{children:["Description: ",a]}),(0,y.jsxs)("p",{children:["Updated at: ",s]})]}),b&&(0,y.jsxs)(y.Fragment,{children:[!e&&(0,y.jsx)(S,{disabled:q||g,type:"button",onClick:function(){Z(c),w(!0)},children:g?"Added":"Add"}),e&&(0,y.jsx)(S,{disabled:U,type:"button",onClick:function(){T(e),w(!1)},children:"Remove"})]})]}),e&&(0,y.jsx)(L,{children:C?(0,y.jsx)(_.Hrw,{size:"24",color:"wheat"}):(0,y.jsx)(_.uzX,{size:"18",color:"wheat"})}),e&&(0,y.jsx)(k,{coments:u,id:e})]})})}},9459:function(n,e,t){t.r(e),t.d(e,{LibraryPage:function(){return x}});var r,o,i=t(4408),a=t(7894),s=t(168),u=t(6444),c=u.ZP.ul(r||(r=(0,s.Z)(["\n  padding-bottom: ","px;\n  padding-top: ","px;\n  @media (min-width: 768px) {\n    margin-left: ","px;\n  }\n  @media (min-width: 1200px) {\n    margin-left: ","px;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[0]})),d=t(3329),h=function(n){var e=n.userRepos,t=n.isLoading;if(e)return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(c,{children:[t&&(0,d.jsx)("li",{children:"Loading..."}),e.map((function(n){var e=n._id,t=n.html_url,r=n.full_name,o=n.forks,i=n.watchers,s=n.description,u=n.updated_at,c=n.coments;return(0,d.jsx)(a.q,{html_url:t,full_name:r,forks:o,watchers:i,description:s,updated_at:u,id:e,coments:c},e)}))]})})},l=t(9805),m=t(6355),f=u.ZP.p(o||(o=(0,s.Z)(["\n  padding-top: ","px;\n  color: ",";\n  font-family: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontFamily.link})),p=function(){var n=(0,i.Vx)(),e=n.data,t=n.isFetching;return(0,d.jsxs)("section",{children:[(0,d.jsx)("h1",{className:"visually-hidden",children:"Your library"}),!(null!==e&&void 0!==e&&e.length)&&(0,d.jsxs)(f,{children:["This is your personal repos library. It is time to start collect useful repos.",(0,d.jsxs)(l.x,{to:"/",children:["Start to search ",(0,d.jsx)(m.U41,{size:"16",color:"wheat"})]})]}),(0,d.jsx)(h,{userRepos:e,isLoading:t})]})},x=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(p,{})})}}}]);
//# sourceMappingURL=459.61a31131.chunk.js.map