(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();function d(f){const e=new Set;function s(i){e.add(i)}f.__subscribe=s;function t(i){e.delete(i)}f.__unsubscribe=t;var n={get(i,l){return typeof i[l]=="object"&&i[l]!==null&&!i[l]instanceof HTMLElement?new Proxy(i[l],n):i[l]},set(i,l,r){return i[l]=r,setTimeout(()=>{for(const _ of e)_()},0),!0}};return new Proxy(f,n)}class a{constructor(e){if(typeof e=="string")this.__element=document.createElement(e);else if(e instanceof HTMLElement)this.__element=e;else throw new Error("Invalid element name");this.__events=[],this.__children=[],this.__data=null,this.__unmounted_events=[],this.__mounted_events=[],this.__parent=null}$update(){for(const e of this.__events)e();for(const e of this.__children)e.$update()}$effect(e){return this.__data=e,setTimeout(()=>{this.__subscribe()},0),this}$if(e){return this.__handleEffect(this.__isReactive(e),()=>{const s=this.__handleFunction(e);this.set_single_style("display",s?"":"none")}),this}__observeParent(){setTimeout(()=>{for(const s of this.__mounted_events)s()},0),new MutationObserver(s=>{for(const t of s){if(t.type==="childList"&&t.removedNodes.length){for(const n of t.removedNodes)if(n===this.__element){this.__unsubscribe();for(const i of this.__unmounted_events)i()}}if(t.type==="childList"&&t.addedNodes.length){for(const n of t.addedNodes)if(n===this.__element){this.__subscribe();for(const i of this.__mounted_events)i()}}}}).observe(this.__element.parentElement,{childList:!0})}__subscribe(){this.__data&&this.__data.__subscribe(()=>this.$update())}__unsubscribe(){for(const e of this.__children)e.__unsubscribe();this.__data&&this.__data.__unsubscribe(()=>this.$update())}__handleFunction(e){return typeof e=="function"?e():e}__handleEffect(e,s){e?(s(),this.__events.push(s)):s()}__isReactive(...e){for(const s of e)if(typeof s=="function")return!0;return!1}$class(e,s=!0){if(this.__isReactive(e))var t=this.__handleFunction(e);return this.__handleEffect(this.__isReactive(e,s),()=>{const n=this.__handleFunction(e);n&&(this.__handleFunction(s)?(this.__isReactive(e)&&(t&&this.__element.classList.remove(...t.split(" ").filter(i=>i.length>0)),t=n),this.__element.classList.add(...n.split(" ").filter(i=>i.length>0))):(this.__element.classList.remove(...n.split(" ").filter(i=>i.length>0)),t=null))}),this}get parentElement(){return this.__parent}$parent(e){return this.__parent=e,e.__element!==void 0?(e.__element.appendChild(this.__element),e.__children.push(this)):e.appendChild(this.__element),this.__observeParent(),this}$parentBefore(e){return this.__parent=e,e.__element!==void 0?e.__element.firstChild?e.__element.insertBefore(this.__element,e.__element.firstChild):e.__element.appendChild(this.__element):e.firstChild?e.insertBefore(this.__element,e.firstChild):e.appendChild(this.__element),this.__observeParent(),this}$on(e,s){return this.__element.addEventListener(e,s),this}$mounted(e){this.__mounted_events.push(e)}$unmounted(e){this.__unmounted_events.push(e)}$property(e,s){return this.__handleEffect(this.__isReactive(e,s),()=>{this.__element[this.__handleFunction(e)]=this.__handleFunction(s)}),this}$style(e,s=null){return s?(this.__style(e,s),this):(this.__handleEffect(this.__isReactive(e),()=>{const t=this.__handleFunction(e).split(";").filter(n=>n.length>0);this.__element.style={};for(const n of t){const[i,l]=n.split(":");this.__element.style[i]=this.__handleFunction(l)}}),this)}__style(e,s){return this.__handleEffect(this.__isReactive(e,s),()=>{this.__element.style[this.__handleFunction(e)]=this.__handleFunction(s)}),this}$get_computed_style(e){return window.getComputedStyle(this.__element).getPropertyValue(e)}$html(e){return this.__handleEffect(this.__isReactive(e),()=>{this.__element.innerHTML=this.__handleFunction(e)}),this}$child(e){var s;this.__isReactive(e)?s=c("span").$parent(this):s=this;var t=null;return this.__handleEffect(this.__isReactive(e),()=>{var n=this.__handleFunction(e);t&&t();const i=r=>(r.__element!==void 0?r.$parent(s):(r instanceof HTMLElement||(r=document.createTextNode(r)),s.__element.appendChild(r)),()=>r.remove());if(Array.isArray(n)){var l=[];for(const r of n)l.push(i(r));t=()=>{for(const r of l)r()}}else t=i(n)}),this}$remove(){return this.__parent=null,this.__element.remove(),this}$model([e,s]){return this.$property("value",e),this.$on("input",t=>s(t.target.value)),this}}function c(f){function e(t,n){return typeof t[n]!="object"?t[n]:new Proxy(t[n],{set:(l,r,_)=>(s.__handleEffect(s.__isReactive(_),()=>{l[r]=s.__handleFunction(_)}),!0),get:(l,r)=>e(l,r)})}const s=new Proxy(new a(f),{get:(t,n)=>{if(n in t)return t[n];if(n in t.__element)return e(t.__element,n)},set:(t,n,i)=>(n in t?t[n]=i:n=="style"?t.$set_style(i):n in t.__element&&t.$property(n,i),!0)});return s}const o=(f,e,...s)=>{var t,n=!1;if(typeof f=="function"){if(t=f(e,...s),t===void 0)return s;n=!0}else t=c(f);const i={ref:r=>{r.__ref_object=t},style:r=>{if(typeof r=="object")for(const[_,h]of Object.entries(r))t.$style(_,h);else t.$style(r)},class:r=>{if(typeof r=="object")for(const[_,h]of Object.entries(r))t.$class(_,h);else t.$class(r)},effect:r=>{t.$effect(r)},parent:r=>{t.$parent(r)},if:r=>{t.$if(r)},model:([r,_])=>{t.$model([r,_])}},l={on:(r,_)=>{t.$on(r,_)}};if(e)for(const[r,_]of Object.entries(e)){const h=r.split(":");h.length==2?l[h[0]]&&l[h[0]](h[1],_):i[r]?i[r](_):n||(t[r]=_)}if(s&&!n)for(const r of s)t.$child(r);return t};var u=d({name:"pedro",age:20});function m(){alert("Submit logic here")}const p=o("div",{effect:u,class:"main-container"},o("div",null,o("div",{class:"input-group"},o("div",{class:"input-container half"},o("label",null,"Name:"),o("input",{type:"text",model:[()=>u.name,f=>u.name=f]})),o("div",{class:"input-container half"},o("label",null,"Age:"),o("input",{type:"text",model:[()=>u.age,f=>u.age=f]}))),o("div",{class:"tooltip"},"The model parameter makes the input in sync with any variable")),o("div",{class:"card"},o("div",null," Name: ",()=>u.name," "),o("div",null," Age: ",()=>u.age," ")),o("div",{class:"tooltip"},'You can also add them directaly in the element that they will update either using effect or manually using the "element.$update()"'),o("div",{class:"footer-button-container"},o("button",{"on:click":m}," Submit ")));p.$parent(document.body);
