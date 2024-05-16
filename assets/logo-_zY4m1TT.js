import{at as Z,d as P,o as g,c as Y,p as L,b as O,m as _,g as J,n as q,aQ as x,r as i,j as B,ax as ee,bI as M,az as D,a6 as W,P as F,q as S,B as X,ao as te,w as ae,ap as le,ak as se,a5 as G,a as j,N as oe,ad as ne,e as b,aK as K,H as U,bw as re,A as I,E as ie,F as ce,D as ue,bv as ve,s as me,ab as fe,a7 as de,aU as he,K as pe}from"./index-82JA-Thp.js";const be=P({name:"ArrowRight"}),ge={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ye=L("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"},null,-1),we=[ye];function Se(e,l,v,n,c,r){return g(),Y("svg",ge,we)}var Ye=Z(be,[["render",Se]]);const Q=Symbol("scrollbarContextKey"),ze={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},$e=({move:e,size:l,bar:v})=>({[v.size]:l,transform:`translate${v.axis}(${e}%)`}),He=O({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),V="Thumb",ke=P({name:V,props:He,setup(e){const l=J(Q),v=q("scrollbar");l||x(V,"can not inject scrollbar context");const n=i(),c=i(),r=i({}),a=i(!1);let m=!1,d=!1,h=se?document.onselectstart:null;const s=B(()=>ze[e.vertical?"vertical":"horizontal"]),N=B(()=>$e({size:e.size,move:e.move,bar:s.value})),z=B(()=>n.value[s.value.offset]**2/l.wrapElement[s.value.scrollSize]/e.ratio/c.value[s.value.offset]),$=o=>{var t;if(o.stopPropagation(),o.ctrlKey||[1,2].includes(o.button))return;(t=window.getSelection())==null||t.removeAllRanges(),p(o);const u=o.currentTarget;u&&(r.value[s.value.axis]=u[s.value.offset]-(o[s.value.client]-u.getBoundingClientRect()[s.value.direction]))},H=o=>{if(!c.value||!n.value||!l.wrapElement)return;const t=Math.abs(o.target.getBoundingClientRect()[s.value.direction]-o[s.value.client]),u=c.value[s.value.offset]/2,f=(t-u)*100*z.value/n.value[s.value.offset];l.wrapElement[s.value.scroll]=f*l.wrapElement[s.value.scrollSize]/100},p=o=>{o.stopImmediatePropagation(),m=!0,document.addEventListener("mousemove",k),document.addEventListener("mouseup",y),h=document.onselectstart,document.onselectstart=()=>!1},k=o=>{if(!n.value||!c.value||m===!1)return;const t=r.value[s.value.axis];if(!t)return;const u=(n.value.getBoundingClientRect()[s.value.direction]-o[s.value.client])*-1,f=c.value[s.value.offset]-t,w=(u-f)*100*z.value/n.value[s.value.offset];l.wrapElement[s.value.scroll]=w*l.wrapElement[s.value.scrollSize]/100},y=()=>{m=!1,r.value[s.value.axis]=0,document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",y),E(),d&&(a.value=!1)},R=()=>{d=!1,a.value=!!e.size},A=()=>{d=!0,a.value=m};ee(()=>{E(),document.removeEventListener("mouseup",y)});const E=()=>{document.onselectstart!==h&&(document.onselectstart=h)};return M(D(l,"scrollbarElement"),"mousemove",R),M(D(l,"scrollbarElement"),"mouseleave",A),{ns:v,instance:n,thumb:c,bar:s,thumbStyle:N,visible:a,clickTrackHandler:H,clickThumbHandler:$}}});function Ee(e,l,v,n,c,r){return g(),W(le,{name:e.ns.b("fade")},{default:F(()=>[ae(L("div",{ref:"instance",class:S([e.ns.e("bar"),e.ns.is(e.bar.key)]),onMousedown:l[1]||(l[1]=(...a)=>e.clickTrackHandler&&e.clickTrackHandler(...a))},[L("div",{ref:"thumb",class:S(e.ns.e("thumb")),style:X(e.thumbStyle),onMousedown:l[0]||(l[0]=(...a)=>e.clickThumbHandler&&e.clickThumbHandler(...a))},null,38)],34),[[te,e.always||e.visible]])]),_:1},8,["name"])}var Te=_(ke,[["render",Ee],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Ce=O({always:{type:Boolean,default:!0},width:{type:String,default:""},height:{type:String,default:""},ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Be=P({components:{Thumb:Te},props:Ce,setup(e){const l=i(0),v=i(0),n=4;return{handleScroll:r=>{if(r){const a=r.offsetHeight-n,m=r.offsetWidth-n;v.value=r.scrollTop*100/a*e.ratioY,l.value=r.scrollLeft*100/m*e.ratioX}},moveX:l,moveY:v}}});function Le(e,l,v,n,c,r){const a=G("thumb");return g(),Y(oe,null,[j(a,{move:e.moveX,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),j(a,{move:e.moveY,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64)}var Pe=_(Be,[["render",Le],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Ne=O({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ne([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:{type:Boolean,default:!1},minSize:{type:Number,default:20}}),Re={scroll:({scrollTop:e,scrollLeft:l})=>b(e)&&b(l)},Ae=P({name:"ElScrollbar",components:{Bar:Pe},props:Ne,emits:Re,setup(e,{emit:l}){const v=q("scrollbar");let n,c;const r=i(),a=i(),m=i(),d=i("0"),h=i("0"),s=i(),N=i(0),z=i(0),$=i(1),H=i(1),p=4,k=B(()=>{const t={};return e.height&&(t.height=K(e.height)),e.maxHeight&&(t.maxHeight=K(e.maxHeight)),[e.wrapStyle,t]}),y=()=>{var t;a.value&&((t=s.value)==null||t.handleScroll(a.value),l("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function R(t,u){he(t)?a.value.scrollTo(t):b(t)&&b(u)&&a.value.scrollTo(t,u)}const A=t=>{b(t)&&(a.value.scrollTop=t)},E=t=>{b(t)&&(a.value.scrollLeft=t)},o=()=>{if(!a.value)return;const t=a.value.offsetHeight-p,u=a.value.offsetWidth-p,f=t**2/a.value.scrollHeight,w=u**2/a.value.scrollWidth,T=Math.max(f,e.minSize),C=Math.max(w,e.minSize);$.value=f/(t-f)/(T/(t-T)),H.value=w/(u-w)/(C/(u-C)),h.value=T+p<t?`${T}px`:"",d.value=C+p<u?`${C}px`:""};return U(()=>e.noresize,t=>{t?(n==null||n(),c==null||c()):({stop:n}=re(m,o),c=M("resize",o))},{immediate:!0}),U(()=>[e.maxHeight,e.height],()=>{e.native||I(()=>{var t;o(),a.value&&((t=s.value)==null||t.handleScroll(a.value))})}),ie(Q,ce({scrollbarElement:r,wrapElement:a})),ue(()=>{e.native||I(()=>o())}),ve(()=>o()),{ns:v,scrollbar$:r,wrap$:a,resize$:m,barRef:s,moveX:N,moveY:z,ratioX:H,ratioY:$,sizeWidth:d,sizeHeight:h,style:k,update:o,handleScroll:y,scrollTo:R,setScrollTop:A,setScrollLeft:E}}});function Me(e,l,v,n,c,r){const a=G("bar");return g(),Y("div",{ref:"scrollbar$",class:S(e.ns.b())},[L("div",{ref:"wrap$",class:S([e.wrapClass,e.ns.e("wrap"),{[e.ns.em("wrap","hidden-default")]:!e.native}]),style:X(e.style),onScroll:l[0]||(l[0]=(...m)=>e.handleScroll&&e.handleScroll(...m))},[(g(),W(fe(e.tag),{ref:"resize$",class:S([e.ns.e("view"),e.viewClass]),style:X(e.viewStyle)},{default:F(()=>[me(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?de("v-if",!0):(g(),W(a,{key:0,ref:"barRef",height:e.sizeHeight,width:e.sizeWidth,always:e.always,"ratio-x":e.ratioX,"ratio-y":e.ratioY},null,8,["height","width","always","ratio-x","ratio-y"]))],2)}var We=_(Ae,[["render",Me],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Oe=pe(We),_e="/assets/logo-nZulDItr.png";export{Oe as E,_e as _,Ye as a};
