import{s as Tc,x as io,y as Ic,n as oo,o as ao}from"../chunks/scheduler.GQjQWUNk.js";import{S as wc,i as Ac,e as Gt,s as ye,t as us,z as Rc,c as Kt,g as uo,d as ot,b as Ee,a as rn,f as cs,h as Pt,k as Ae,j as St,l as Cc,A as Pc,q as co}from"../chunks/index.DSQ5lCMW.js";const Sc=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function lo(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const bc=""+new URL("../assets/Michael Barrr Homepage.Bub4SfeF.svg",import.meta.url).href;var ho={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Vc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,p=o>>2,T=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,P=f&63;h||(P=64,a||(R=64)),r.push(e[p],e[T],e[R],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ha(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Vc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const T=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||T==null)throw new Dc;const R=o<<2|l>>4;if(r.push(R),f!==64){const P=l<<4&240|f>>2;if(r.push(P),T!==64){const D=f<<6&192|T;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nc=function(n){const t=ha(n);return da.encodeByteArray(t,!0)},nr=function(n){return Nc(n).replace(/\./g,"")},kc=function(n){try{return da.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=()=>xc().__FIREBASE_DEFAULTS__,Mc=()=>{if(typeof process>"u"||typeof ho>"u")return;const n=ho.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Lc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&kc(n[1]);return t&&JSON.parse(t)},Vs=()=>{try{return Oc()||Mc()||Lc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fc=n=>{var t,e;return(e=(t=Vs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Uc=n=>{const t=Fc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},fa=()=>{var n;return(n=Vs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[nr(JSON.stringify(e)),nr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $c(){var n;const t=(n=Vs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zc(){return!$c()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gc(){try{return typeof indexedDB=="object"}catch{return!1}}function Kc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="FirebaseError";class Oe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Hc,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ma.prototype.create)}}class ma{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Wc(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Oe(i,l,r)}}function Wc(n,t){return n.replace(Qc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Qc=/\{\$([^}]+)}/g;function ls(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(fo(o)&&fo(a)){if(!ls(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function fo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n){return n&&n._delegate?n._delegate:n}class mn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Bc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Jc(t))try{this.getOrInitializeService({instanceIdentifier:ie})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ie){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ie){return this.instances.has(t)}getOptions(t=ie){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ie){return this.component?this.component.multipleInstances?t:ie:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yc(n){return n===ie?void 0:n}function Jc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Xc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const tl={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},el=z.INFO,nl={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},rl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=nl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pa{constructor(t){this.name=t,this._logLevel=el,this._logHandler=rl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const sl=(n,t)=>t.some(e=>n instanceof e);let mo,po;function il(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ol(){return po||(po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ga=new WeakMap,hs=new WeakMap,_a=new WeakMap,Zr=new WeakMap,Ds=new WeakMap;function al(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Wt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ga.set(e,n)}).catch(()=>{}),Ds.set(t,n),t}function ul(n){if(hs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});hs.set(n,t)}let ds={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return hs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||_a.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Wt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function cl(n){ds=n(ds)}function ll(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ts(this),t,...e);return _a.set(r,t.sort?t.sort():[t]),Wt(r)}:ol().includes(n)?function(...t){return n.apply(ts(this),t),Wt(ga.get(this))}:function(...t){return Wt(n.apply(ts(this),t))}}function hl(n){return typeof n=="function"?ll(n):(n instanceof IDBTransaction&&ul(n),sl(n,il())?new Proxy(n,ds):n)}function Wt(n){if(n instanceof IDBRequest)return al(n);if(Zr.has(n))return Zr.get(n);const t=hl(n);return t!==n&&(Zr.set(n,t),Ds.set(t,n)),t}const ts=n=>Ds.get(n);function dl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=Wt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Wt(a.result),h.oldVersion,h.newVersion,Wt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const fl=["get","getKey","getAll","getAllKeys","count"],ml=["put","add","delete","clear"],es=new Map;function go(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(es.get(t))return es.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=ml.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fl.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),i&&h.done]))[0]};return es.set(t,o),o}cl(n=>({...n,get:(t,e,r)=>go(t,e)||n.get(t,e,r),has:(t,e)=>!!go(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(gl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function gl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fs="@firebase/app",_o="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new pa("@firebase/app"),_l="@firebase/app-compat",yl="@firebase/analytics-compat",El="@firebase/analytics",vl="@firebase/app-check-compat",Tl="@firebase/app-check",Il="@firebase/auth",wl="@firebase/auth-compat",Al="@firebase/database",Rl="@firebase/data-connect",Cl="@firebase/database-compat",Pl="@firebase/functions",Sl="@firebase/functions-compat",bl="@firebase/installations",Vl="@firebase/installations-compat",Dl="@firebase/messaging",Nl="@firebase/messaging-compat",kl="@firebase/performance",xl="@firebase/performance-compat",Ol="@firebase/remote-config",Ml="@firebase/remote-config-compat",Ll="@firebase/storage",Fl="@firebase/storage-compat",Ul="@firebase/firestore",Bl="@firebase/vertexai",jl="@firebase/firestore-compat",ql="firebase",$l="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="[DEFAULT]",zl={[fs]:"fire-core",[_l]:"fire-core-compat",[El]:"fire-analytics",[yl]:"fire-analytics-compat",[Tl]:"fire-app-check",[vl]:"fire-app-check-compat",[Il]:"fire-auth",[wl]:"fire-auth-compat",[Al]:"fire-rtdb",[Rl]:"fire-data-connect",[Cl]:"fire-rtdb-compat",[Pl]:"fire-fn",[Sl]:"fire-fn-compat",[bl]:"fire-iid",[Vl]:"fire-iid-compat",[Dl]:"fire-fcm",[Nl]:"fire-fcm-compat",[kl]:"fire-perf",[xl]:"fire-perf-compat",[Ol]:"fire-rc",[Ml]:"fire-rc-compat",[Ll]:"fire-gcs",[Fl]:"fire-gcs-compat",[Ul]:"fire-fst",[jl]:"fire-fst-compat",[Bl]:"fire-vertex","fire-js":"fire-js",[ql]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Map,Gl=new Map,ps=new Map;function yo(n,t){try{n.container.addComponent(t)}catch(e){Ft.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function sr(n){const t=n.name;if(ps.has(t))return Ft.debug(`There were multiple attempts to register component ${t}.`),!1;ps.set(t,n);for(const e of rr.values())yo(e,n);for(const e of Gl.values())yo(e,n);return!0}function Kl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new ma("app","Firebase",Hl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=$l;function ya(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ms,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Qt.create("bad-app-name",{appName:String(i)});if(e||(e=fa()),!e)throw Qt.create("no-options");const o=rr.get(i);if(o){if(ls(e,o.options)&&ls(r,o.config))return o;throw Qt.create("duplicate-app",{appName:i})}const a=new Zc(i);for(const h of ps.values())a.addComponent(h);const l=new Wl(e,r,a);return rr.set(i,l),l}function Xl(n=ms){const t=rr.get(n);if(!t&&n===ms&&fa())return ya();if(!t)throw Qt.create("no-app",{appName:n});return t}function Re(n,t,e){var r;let i=(r=zl[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ft.warn(l.join(" "));return}sr(new mn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="firebase-heartbeat-database",Jl=1,pn="firebase-heartbeat-store";let ns=null;function Ea(){return ns||(ns=dl(Yl,Jl,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(pn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),ns}async function Zl(n){try{const e=(await Ea()).transaction(pn),r=await e.objectStore(pn).get(va(n));return await e.done,r}catch(t){if(t instanceof Oe)Ft.warn(t.message);else{const e=Qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ft.warn(e.message)}}}async function Eo(n,t){try{const r=(await Ea()).transaction(pn,"readwrite");await r.objectStore(pn).put(t,va(n)),await r.done}catch(e){if(e instanceof Oe)Ft.warn(e.message);else{const r=Qt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(r.message)}}}function va(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=1024,eh=30*24*60*60*1e3;class nh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new sh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=vo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=eh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ft.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vo(),{heartbeatsToSend:r,unsentEntries:i}=rh(this._heartbeatsCache.heartbeats),o=nr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ft.warn(e),""}}}function vo(){return new Date().toISOString().substring(0,10)}function rh(n,t=th){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),To(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),To(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class sh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gc()?Kc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Zl(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function To(n){return nr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(n){sr(new mn("platform-logger",t=>new pl(t),"PRIVATE")),sr(new mn("heartbeat",t=>new nh(t),"PRIVATE")),Re(fs,_o,n),Re(fs,_o,"esm2017"),Re("fire-js","")}ih("");var oh="firebase",ah="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(oh,ah,"app");var Io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ae,Ta;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,m){function g(){}g.prototype=m.prototype,y.D=m.prototype,y.prototype=new g,y.prototype.constructor=y,y.C=function(E,v,w){for(var _=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)_[xt-2]=arguments[xt];return m.prototype[v].apply(E,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,m,g){g||(g=0);var E=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)E[v]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(v=0;16>v;++v)E[v]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=y.g[0],g=y.g[1],v=y.g[2];var w=y.g[3],_=m+(w^g&(v^w))+E[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=w+(v^m&(g^v))+E[1]+3905402710&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(g^w&(m^g))+E[2]+606105819&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(m^v&(w^m))+E[3]+3250441966&4294967295,g=v+(_<<22&4294967295|_>>>10),_=m+(w^g&(v^w))+E[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(v^m&(g^v))+E[5]+1200080426&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(g^w&(m^g))+E[6]+2821735955&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(m^v&(w^m))+E[7]+4249261313&4294967295,g=v+(_<<22&4294967295|_>>>10),_=m+(w^g&(v^w))+E[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(v^m&(g^v))+E[9]+2336552879&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(g^w&(m^g))+E[10]+4294925233&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(m^v&(w^m))+E[11]+2304563134&4294967295,g=v+(_<<22&4294967295|_>>>10),_=m+(w^g&(v^w))+E[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(v^m&(g^v))+E[13]+4254626195&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(g^w&(m^g))+E[14]+2792965006&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(m^v&(w^m))+E[15]+1236535329&4294967295,g=v+(_<<22&4294967295|_>>>10),_=m+(v^w&(g^v))+E[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(m^g))+E[6]+3225465664&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^g&(w^m))+E[11]+643717713&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(v^w))+E[0]+3921069994&4294967295,g=v+(_<<20&4294967295|_>>>12),_=m+(v^w&(g^v))+E[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(m^g))+E[10]+38016083&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^g&(w^m))+E[15]+3634488961&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(v^w))+E[4]+3889429448&4294967295,g=v+(_<<20&4294967295|_>>>12),_=m+(v^w&(g^v))+E[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(m^g))+E[14]+3275163606&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^g&(w^m))+E[3]+4107603335&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(v^w))+E[8]+1163531501&4294967295,g=v+(_<<20&4294967295|_>>>12),_=m+(v^w&(g^v))+E[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(m^g))+E[2]+4243563512&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^g&(w^m))+E[7]+1735328473&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(v^w))+E[12]+2368359562&4294967295,g=v+(_<<20&4294967295|_>>>12),_=m+(g^v^w)+E[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^v)+E[8]+2272392833&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^g)+E[11]+1839030562&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^m)+E[14]+4259657740&4294967295,g=v+(_<<23&4294967295|_>>>9),_=m+(g^v^w)+E[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^v)+E[4]+1272893353&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^g)+E[7]+4139469664&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^m)+E[10]+3200236656&4294967295,g=v+(_<<23&4294967295|_>>>9),_=m+(g^v^w)+E[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^v)+E[0]+3936430074&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^g)+E[3]+3572445317&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^m)+E[6]+76029189&4294967295,g=v+(_<<23&4294967295|_>>>9),_=m+(g^v^w)+E[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^v)+E[12]+3873151461&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^g)+E[15]+530742520&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^m)+E[2]+3299628645&4294967295,g=v+(_<<23&4294967295|_>>>9),_=m+(v^(g|~w))+E[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~v))+E[7]+1126891415&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~g))+E[14]+2878612391&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~m))+E[5]+4237533241&4294967295,g=v+(_<<21&4294967295|_>>>11),_=m+(v^(g|~w))+E[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~v))+E[3]+2399980690&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~g))+E[10]+4293915773&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~m))+E[1]+2240044497&4294967295,g=v+(_<<21&4294967295|_>>>11),_=m+(v^(g|~w))+E[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~v))+E[15]+4264355552&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~g))+E[6]+2734768916&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~m))+E[13]+1309151649&4294967295,g=v+(_<<21&4294967295|_>>>11),_=m+(v^(g|~w))+E[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~v))+E[11]+3174756917&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~g))+E[2]+718787259&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~m))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+m&4294967295,y.g[1]=y.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,y.g[2]=y.g[2]+v&4294967295,y.g[3]=y.g[3]+w&4294967295}r.prototype.u=function(y,m){m===void 0&&(m=y.length);for(var g=m-this.blockSize,E=this.B,v=this.h,w=0;w<m;){if(v==0)for(;w<=g;)i(this,y,w),w+=this.blockSize;if(typeof y=="string"){for(;w<m;)if(E[v++]=y.charCodeAt(w++),v==this.blockSize){i(this,E),v=0;break}}else for(;w<m;)if(E[v++]=y[w++],v==this.blockSize){i(this,E),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var m=1;m<y.length-8;++m)y[m]=0;var g=8*this.o;for(m=y.length-8;m<y.length;++m)y[m]=g&255,g/=256;for(this.u(y),y=Array(16),m=g=0;4>m;++m)for(var E=0;32>E;E+=8)y[g++]=this.g[m]>>>E&255;return y};function o(y,m){var g=l;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=m(y)}function a(y,m){this.h=m;for(var g=[],E=!0,v=y.length-1;0<=v;v--){var w=y[v]|0;E&&w==m||(g[v]=w,E=!1)}this.g=g}var l={};function h(y){return-128<=y&&128>y?o(y,function(m){return new a([m|0],0>m?-1:0)}):new a([y|0],0>y?-1:0)}function f(y){if(isNaN(y)||!isFinite(y))return T;if(0>y)return V(f(-y));for(var m=[],g=1,E=0;y>=g;E++)m[E]=y/g|0,g*=4294967296;return new a(m,0)}function p(y,m){if(y.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(y.charAt(0)=="-")return V(p(y.substring(1),m));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),E=T,v=0;v<y.length;v+=8){var w=Math.min(8,y.length-v),_=parseInt(y.substring(v,v+w),m);8>w?(w=f(Math.pow(m,w)),E=E.j(w).add(f(_))):(E=E.j(g),E=E.add(f(_)))}return E}var T=h(0),R=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();for(var y=0,m=1,g=0;g<this.g.length;g++){var E=this.i(g);y+=(0<=E?E:4294967296+E)*m,m*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(D(this))return"0";if(N(this))return"-"+V(this).toString(y);for(var m=f(Math.pow(y,6)),g=this,E="";;){var v=Y(g,m).g;g=j(g,v.j(m));var w=((0<g.g.length?g.g[0]:g.h)>>>0).toString(y);if(g=v,D(g))return w+E;for(;6>w.length;)w="0"+w;E=w+E}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function D(y){if(y.h!=0)return!1;for(var m=0;m<y.g.length;m++)if(y.g[m]!=0)return!1;return!0}function N(y){return y.h==-1}n.l=function(y){return y=j(this,y),N(y)?-1:D(y)?0:1};function V(y){for(var m=y.g.length,g=[],E=0;E<m;E++)g[E]=~y.g[E];return new a(g,~y.h).add(R)}n.abs=function(){return N(this)?V(this):this},n.add=function(y){for(var m=Math.max(this.g.length,y.g.length),g=[],E=0,v=0;v<=m;v++){var w=E+(this.i(v)&65535)+(y.i(v)&65535),_=(w>>>16)+(this.i(v)>>>16)+(y.i(v)>>>16);E=_>>>16,w&=65535,_&=65535,g[v]=_<<16|w}return new a(g,g[g.length-1]&-2147483648?-1:0)};function j(y,m){return y.add(V(m))}n.j=function(y){if(D(this)||D(y))return T;if(N(this))return N(y)?V(this).j(V(y)):V(V(this).j(y));if(N(y))return V(this.j(V(y)));if(0>this.l(P)&&0>y.l(P))return f(this.m()*y.m());for(var m=this.g.length+y.g.length,g=[],E=0;E<2*m;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<y.g.length;v++){var w=this.i(E)>>>16,_=this.i(E)&65535,xt=y.i(v)>>>16,Be=y.i(v)&65535;g[2*E+2*v]+=_*Be,B(g,2*E+2*v),g[2*E+2*v+1]+=w*Be,B(g,2*E+2*v+1),g[2*E+2*v+1]+=_*xt,B(g,2*E+2*v+1),g[2*E+2*v+2]+=w*xt,B(g,2*E+2*v+2)}for(E=0;E<m;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=m;E<2*m;E++)g[E]=0;return new a(g,0)};function B(y,m){for(;(y[m]&65535)!=y[m];)y[m+1]+=y[m]>>>16,y[m]&=65535,m++}function W(y,m){this.g=y,this.h=m}function Y(y,m){if(D(m))throw Error("division by zero");if(D(y))return new W(T,T);if(N(y))return m=Y(V(y),m),new W(V(m.g),V(m.h));if(N(m))return m=Y(y,V(m)),new W(V(m.g),m.h);if(30<y.g.length){if(N(y)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var g=R,E=m;0>=E.l(y);)g=Q(g),E=Q(E);var v=x(g,1),w=x(E,1);for(E=x(E,2),g=x(g,2);!D(E);){var _=w.add(E);0>=_.l(y)&&(v=v.add(g),w=_),E=x(E,1),g=x(g,1)}return m=j(y,v.j(m)),new W(v,m)}for(v=T;0<=y.l(m);){for(g=Math.max(1,Math.floor(y.m()/m.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),w=f(g),_=w.j(m);N(_)||0<_.l(y);)g-=E,w=f(g),_=w.j(m);D(w)&&(w=R),v=v.add(w),y=j(y,_)}return new W(v,y)}n.A=function(y){return Y(this,y).h},n.and=function(y){for(var m=Math.max(this.g.length,y.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)&y.i(E);return new a(g,this.h&y.h)},n.or=function(y){for(var m=Math.max(this.g.length,y.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)|y.i(E);return new a(g,this.h|y.h)},n.xor=function(y){for(var m=Math.max(this.g.length,y.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)^y.i(E);return new a(g,this.h^y.h)};function Q(y){for(var m=y.g.length+1,g=[],E=0;E<m;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new a(g,y.h)}function x(y,m){var g=m>>5;m%=32;for(var E=y.g.length-g,v=[],w=0;w<E;w++)v[w]=0<m?y.i(w+g)>>>m|y.i(w+g+1)<<32-m:y.i(w+g);return new a(v,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ta=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,ae=a}).apply(typeof Io<"u"?Io:typeof self<"u"?self:typeof window<"u"?window:{});var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ia,sn,wa,Xn,gs,Aa,Ra,Ca;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,c){return s==Array.prototype||s==Object.prototype||(s[u]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kn=="object"&&Kn];for(var u=0;u<s.length;++u){var c=s[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in c))break t;c=c[I]}s=s[s.length-1],d=c[s],u=u(d),u!=d&&u!=null&&t(c,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var c=0,d=!1,I={next:function(){if(!d&&c<s.length){var A=c++;return{value:u(A,s[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function f(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function p(s,u,c){return s.call.apply(s.bind,arguments)}function T(s,u,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(u,I)}}return function(){return s.apply(u,arguments)}}function R(s,u,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:T,R.apply(null,arguments)}function P(s,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function D(s,u){function c(){}c.prototype=u.prototype,s.aa=u.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,I,A){for(var b=Array(arguments.length-2),X=2;X<arguments.length;X++)b[X-2]=arguments[X];return u.prototype[I].apply(d,b)}}function N(s){const u=s.length;if(0<u){const c=Array(u);for(let d=0;d<u;d++)c[d]=s[d];return c}return[]}function V(s,u){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const I=s.length||0,A=d.length||0;s.length=I+A;for(let b=0;b<A;b++)s[I+b]=d[b]}else s.push(d)}}class j{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(s){return/^[\s\xa0]*$/.test(s)}function W(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function Y(s){return Y[" "](s),s}Y[" "]=function(){};var Q=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function x(s,u,c){for(const d in s)u.call(c,s[d],d,s)}function y(s,u){for(const c in s)u.call(void 0,s[c],c,s)}function m(s){const u={};for(const c in s)u[c]=s[c];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(s,u){let c,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(c in d)s[c]=d[c];for(let A=0;A<g.length;A++)c=g[A],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function v(s){var u=1;s=s.split(":");const c=[];for(;0<u&&s.length;)c.push(s.shift()),u--;return s.length&&c.push(s.join(":")),c}function w(s){l.setTimeout(()=>{throw s},0)}function _(){var s=br;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class xt{constructor(){this.h=this.g=null}add(u,c){const d=Be.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Be=new j(()=>new Bu,s=>s.reset());class Bu{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let je,qe=!1,br=new xt,ii=()=>{const s=l.Promise.resolve(void 0);je=()=>{s.then(ju)}};var ju=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(c){w(c)}var u=Be;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}qe=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var qu=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return s}();function $e(s,u){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(Q){t:{try{Y(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else c=="mouseover"?u=s.fromElement:c=="mouseout"&&(u=s.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:$u[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&$e.aa.h.call(this)}}D($e,ft);var $u={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Pn="closure_listenable_"+(1e6*Math.random()|0),zu=0;function Gu(s,u,c,d,I){this.listener=s,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=I,this.key=++zu,this.da=this.fa=!1}function Sn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function bn(s){this.src=s,this.g={},this.h=0}bn.prototype.add=function(s,u,c,d,I){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var b=Dr(s,u,d,I);return-1<b?(u=s[b],c||(u.fa=!1)):(u=new Gu(u,this.src,A,!!d,I),u.fa=c,s.push(u)),u};function Vr(s,u){var c=u.type;if(c in s.g){var d=s.g[c],I=Array.prototype.indexOf.call(d,u,void 0),A;(A=0<=I)&&Array.prototype.splice.call(d,I,1),A&&(Sn(u),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Dr(s,u,c,d){for(var I=0;I<s.length;++I){var A=s[I];if(!A.da&&A.listener==u&&A.capture==!!c&&A.ha==d)return I}return-1}var Nr="closure_lm_"+(1e6*Math.random()|0),kr={};function oi(s,u,c,d,I){if(Array.isArray(u)){for(var A=0;A<u.length;A++)oi(s,u[A],c,d,I);return null}return c=ci(c),s&&s[Pn]?s.K(u,c,f(d)?!!d.capture:!!d,I):Ku(s,u,c,!1,d,I)}function Ku(s,u,c,d,I,A){if(!u)throw Error("Invalid event type");var b=f(I)?!!I.capture:!!I,X=Or(s);if(X||(s[Nr]=X=new bn(s)),c=X.add(u,c,d,b,A),c.proxy)return c;if(d=Hu(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)qu||(I=b),I===void 0&&(I=!1),s.addEventListener(u.toString(),d,I);else if(s.attachEvent)s.attachEvent(ui(u.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Hu(){function s(c){return u.call(s.src,s.listener,c)}const u=Wu;return s}function ai(s,u,c,d,I){if(Array.isArray(u))for(var A=0;A<u.length;A++)ai(s,u[A],c,d,I);else d=f(d)?!!d.capture:!!d,c=ci(c),s&&s[Pn]?(s=s.i,u=String(u).toString(),u in s.g&&(A=s.g[u],c=Dr(A,c,d,I),-1<c&&(Sn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[u],s.h--)))):s&&(s=Or(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Dr(u,c,d,I)),(c=-1<s?u[s]:null)&&xr(c))}function xr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Pn])Vr(u.i,s);else{var c=s.type,d=s.proxy;u.removeEventListener?u.removeEventListener(c,d,s.capture):u.detachEvent?u.detachEvent(ui(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=Or(u))?(Vr(c,s),c.h==0&&(c.src=null,u[Nr]=null)):Sn(s)}}}function ui(s){return s in kr?kr[s]:kr[s]="on"+s}function Wu(s,u){if(s.da)s=!0;else{u=new $e(u,this);var c=s.listener,d=s.ha||s.src;s.fa&&xr(s),s=c.call(d,u)}return s}function Or(s){return s=s[Nr],s instanceof bn?s:null}var Mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ci(s){return typeof s=="function"?s:(s[Mr]||(s[Mr]=function(u){return s.handleEvent(u)}),s[Mr])}function mt(){jt.call(this),this.i=new bn(this),this.M=this,this.F=null}D(mt,jt),mt.prototype[Pn]=!0,mt.prototype.removeEventListener=function(s,u,c,d){ai(this,s,u,c,d)};function vt(s,u){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=u.type||u,typeof u=="string")u=new ft(u,s);else if(u instanceof ft)u.target=u.target||s;else{var I=u;u=new ft(d,s),E(u,I)}if(I=!0,c)for(var A=c.length-1;0<=A;A--){var b=u.g=c[A];I=Vn(b,d,!0,u)&&I}if(b=u.g=s,I=Vn(b,d,!0,u)&&I,I=Vn(b,d,!1,u)&&I,c)for(A=0;A<c.length;A++)b=u.g=c[A],I=Vn(b,d,!1,u)&&I}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var c=s.g[u],d=0;d<c.length;d++)Sn(c[d]);delete s.g[u],s.h--}}this.F=null},mt.prototype.K=function(s,u,c,d){return this.i.add(String(s),u,!1,c,d)},mt.prototype.L=function(s,u,c,d){return this.i.add(String(s),u,!0,c,d)};function Vn(s,u,c,d){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,A=0;A<u.length;++A){var b=u[A];if(b&&!b.da&&b.capture==c){var X=b.listener,ct=b.ha||b.src;b.fa&&Vr(s.i,b),I=X.call(ct,d)!==!1&&I}}return I&&!d.defaultPrevented}function li(s,u,c){if(typeof s=="function")c&&(s=R(s,c));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(s,u||0)}function hi(s){s.g=li(()=>{s.g=null,s.i&&(s.i=!1,hi(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class Qu extends jt{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:hi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(s){jt.call(this),this.h=s,this.g={}}D(ze,jt);var di=[];function fi(s){x(s.g,function(u,c){this.g.hasOwnProperty(c)&&xr(u)},s),s.g={}}ze.prototype.N=function(){ze.aa.N.call(this),fi(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=l.JSON.stringify,Xu=l.JSON.parse,Yu=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Fr(){}Fr.prototype.h=null;function mi(s){return s.h||(s.h=s.i())}function pi(){}var Ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ur(){ft.call(this,"d")}D(Ur,ft);function Br(){ft.call(this,"c")}D(Br,ft);var ee={},gi=null;function Dn(){return gi=gi||new mt}ee.La="serverreachability";function _i(s){ft.call(this,ee.La,s)}D(_i,ft);function Ke(s){const u=Dn();vt(u,new _i(u))}ee.STAT_EVENT="statevent";function yi(s,u){ft.call(this,ee.STAT_EVENT,s),this.stat=u}D(yi,ft);function Tt(s){const u=Dn();vt(u,new yi(u,s))}ee.Ma="timingevent";function Ei(s,u){ft.call(this,ee.Ma,s),this.size=u}D(Ei,ft);function He(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},u)}function We(){this.g=!0}We.prototype.xa=function(){this.g=!1};function Ju(s,u,c,d,I,A){s.info(function(){if(s.g)if(A)for(var b="",X=A.split("&"),ct=0;ct<X.length;ct++){var K=X[ct].split("=");if(1<K.length){var pt=K[0];K=K[1];var gt=pt.split("_");b=2<=gt.length&&gt[1]=="type"?b+(pt+"="+K+"&"):b+(pt+"=redacted&")}}else b=null;else b=A;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+u+`
`+c+`
`+b})}function Zu(s,u,c,d,I,A,b){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+u+`
`+c+`
`+A+" "+b})}function me(s,u,c,d){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+ec(s,c)+(d?" "+d:"")})}function tc(s,u){s.info(function(){return"TIMEOUT: "+u})}We.prototype.info=function(){};function ec(s,u){if(!s.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return Lr(c)}catch{return u}}var Nn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jr;function kn(){}D(kn,Fr),kn.prototype.g=function(){return new XMLHttpRequest},kn.prototype.i=function(){return{}},jr=new kn;function qt(s,u,c,d){this.j=s,this.i=u,this.l=c,this.R=d||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ti}function Ti(){this.i=null,this.g="",this.h=!1}var Ii={},qr={};function $r(s,u,c){s.L=1,s.v=Ln(Ot(u)),s.m=c,s.P=!0,wi(s,null)}function wi(s,u){s.F=Date.now(),xn(s),s.A=Ot(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Li(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Ti,s.g=eo(s.j,c?u:null,!s.m),0<s.O&&(s.M=new Qu(R(s.Y,s,s.g),s.O)),u=s.U,c=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(di[0]=I.toString()),I=di);for(var A=0;A<I.length;A++){var b=oi(c,I[A],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Ke(),Ju(s.i,s.u,s.A,s.l,s.R,s.m)}qt.prototype.ca=function(s){s=s.target;const u=this.M;u&&Mt(s)==3?u.j():this.Y(s)},qt.prototype.Y=function(s){try{if(s==this.g)t:{const gt=Mt(this.g);var u=this.g.Ba();const _e=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||zi(this.g)))){this.J||gt!=4||u==7||(u==8||0>=_e?Ke(3):Ke(2)),zr(this);var c=this.g.Z();this.X=c;e:if(Ai(this)){var d=zi(this.g);s="";var I=d.length,A=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ne(this),Qe(this);var b="";break e}this.h.i=new l.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,s+=this.h.i.decode(d[u],{stream:!(A&&u==I-1)});d.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=c==200,Zu(this.i,this.u,this.A,this.l,this.R,gt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var X,ct=this.g;if((X=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(X)){var K=X;break e}}K=null}if(c=K)me(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gr(this,c);else{this.o=!1,this.s=3,Tt(12),ne(this),Qe(this);break t}}if(this.P){c=!0;let Ct;for(;!this.J&&this.C<b.length;)if(Ct=nc(this,b),Ct==qr){gt==4&&(this.s=4,Tt(14),c=!1),me(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Ii){this.s=4,Tt(15),me(this.i,this.l,b,"[Invalid Chunk]"),c=!1;break}else me(this.i,this.l,Ct,null),Gr(this,Ct);if(Ai(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||b.length!=0||this.h.h||(this.s=1,Tt(16),c=!1),this.o=this.o&&c,!c)me(this.i,this.l,b,"[Invalid Chunked Response]"),ne(this),Qe(this);else if(0<b.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Yr(pt),pt.M=!0,Tt(11))}}else me(this.i,this.l,b,null),Gr(this,b);gt==4&&ne(this),this.o&&!this.J&&(gt==4?Yi(this.j,this):(this.o=!1,xn(this)))}else Ec(this.g),c==400&&0<b.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),ne(this),Qe(this)}}}catch{}finally{}};function Ai(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function nc(s,u){var c=s.C,d=u.indexOf(`
`,c);return d==-1?qr:(c=Number(u.substring(c,d)),isNaN(c)?Ii:(d+=1,d+c>u.length?qr:(u=u.slice(d,d+c),s.C=d+c,u)))}qt.prototype.cancel=function(){this.J=!0,ne(this)};function xn(s){s.S=Date.now()+s.I,Ri(s,s.I)}function Ri(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=He(R(s.ba,s),u)}function zr(s){s.B&&(l.clearTimeout(s.B),s.B=null)}qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(tc(this.i,this.A),this.L!=2&&(Ke(),Tt(17)),ne(this),this.s=2,Qe(this)):Ri(this,this.S-s)};function Qe(s){s.j.G==0||s.J||Yi(s.j,s)}function ne(s){zr(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,fi(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function Gr(s,u){try{var c=s.j;if(c.G!=0&&(c.g==s||Kr(c.h,s))){if(!s.K&&Kr(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)$n(c),jn(c);else break t;Xr(c),Tt(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=He(R(c.Za,c),6e3));if(1>=Si(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else se(c,11)}else if((s.K||c.g==s)&&$n(c),!B(u))for(I=c.Da.g.parse(u),u=0;u<I.length;u++){let K=I[u];if(c.T=K[0],K=K[1],c.G==2)if(K[0]=="c"){c.K=K[1],c.ia=K[2];const pt=K[3];pt!=null&&(c.la=pt,c.j.info("VER="+c.la));const gt=K[4];gt!=null&&(c.Aa=gt,c.j.info("SVER="+c.Aa));const _e=K[5];_e!=null&&typeof _e=="number"&&0<_e&&(d=1.5*_e,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Ct=s.g;if(Ct){const Gn=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gn){var A=d.h;A.g||Gn.indexOf("spdy")==-1&&Gn.indexOf("quic")==-1&&Gn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Hr(A,A.h),A.h=null))}if(d.D){const Jr=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Jr&&(d.ya=Jr,J(d.I,d.D,Jr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var b=s;if(d.qa=to(d,d.J?d.ia:null,d.W),b.K){bi(d.h,b);var X=b,ct=d.L;ct&&(X.I=ct),X.B&&(zr(X),xn(X)),d.g=b}else Qi(d);0<c.i.length&&qn(c)}else K[0]!="stop"&&K[0]!="close"||se(c,7);else c.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?se(c,7):Qr(c):K[0]!="noop"&&c.l&&c.l.ta(K),c.v=0)}}Ke(4)}catch{}}var rc=class{constructor(s,u){this.g=s,this.map=u}};function Ci(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Si(s){return s.h?1:s.g?s.g.size:0}function Kr(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Hr(s,u){s.g?s.g.add(u):s.h=u}function bi(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Ci.prototype.cancel=function(){if(this.i=Vi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Vi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const c of s.g.values())u=u.concat(c.D);return u}return N(s.i)}function sc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],c=s.length,d=0;d<c;d++)u.push(s[d]);return u}u=[],c=0;for(d in s)u[c++]=s[d];return u}function ic(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var c=0;c<s;c++)u.push(c);return u}u=[],c=0;for(const d in s)u[c++]=d;return u}}}function Di(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var c=ic(s),d=sc(s),I=d.length,A=0;A<I;A++)u.call(void 0,d[A],c&&c[A],s)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oc(s,u){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),I=null;if(0<=d){var A=s[c].substring(0,d);I=s[c].substring(d+1)}else A=s[c];u(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function re(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof re){this.h=s.h,On(this,s.j),this.o=s.o,this.g=s.g,Mn(this,s.s),this.l=s.l;var u=s.i,c=new Je;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),ki(this,c),this.m=s.m}else s&&(u=String(s).match(Ni))?(this.h=!1,On(this,u[1]||"",!0),this.o=Xe(u[2]||""),this.g=Xe(u[3]||"",!0),Mn(this,u[4]),this.l=Xe(u[5]||"",!0),ki(this,u[6]||"",!0),this.m=Xe(u[7]||"")):(this.h=!1,this.i=new Je(null,this.h))}re.prototype.toString=function(){var s=[],u=this.j;u&&s.push(Ye(u,xi,!0),":");var c=this.g;return(c||u=="file")&&(s.push("//"),(u=this.o)&&s.push(Ye(u,xi,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Ye(c,c.charAt(0)=="/"?cc:uc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Ye(c,hc)),s.join("")};function Ot(s){return new re(s)}function On(s,u,c){s.j=c?Xe(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Mn(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function ki(s,u,c){u instanceof Je?(s.i=u,dc(s.i,s.h)):(c||(u=Ye(u,lc)),s.i=new Je(u,s.h))}function J(s,u,c){s.i.set(u,c)}function Ln(s){return J(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Xe(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ye(s,u,c){return typeof s=="string"?(s=encodeURI(s).replace(u,ac),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ac(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var xi=/[#\/\?@]/g,uc=/[#\?:]/g,cc=/[#\?]/g,lc=/[#\?@]/g,hc=/#/g;function Je(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function $t(s){s.g||(s.g=new Map,s.h=0,s.i&&oc(s.i,function(u,c){s.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=Je.prototype,n.add=function(s,u){$t(this),this.i=null,s=pe(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(u),this.h+=1,this};function Oi(s,u){$t(s),u=pe(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function Mi(s,u){return $t(s),u=pe(s,u),s.g.has(u)}n.forEach=function(s,u){$t(this),this.g.forEach(function(c,d){c.forEach(function(I){s.call(u,I,d,this)},this)},this)},n.na=function(){$t(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let d=0;d<u.length;d++){const I=s[d];for(let A=0;A<I.length;A++)c.push(u[d])}return c},n.V=function(s){$t(this);let u=[];if(typeof s=="string")Mi(this,s)&&(u=u.concat(this.g.get(pe(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)u=u.concat(s[c])}return u},n.set=function(s,u){return $t(this),this.i=null,s=pe(this,s),Mi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function Li(s,u,c){Oi(s,u),0<c.length&&(s.i=null,s.g.set(pe(s,u),N(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var d=u[c];const A=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var I=A;b[d]!==""&&(I+="="+encodeURIComponent(String(b[d]))),s.push(I)}}return this.i=s.join("&")};function pe(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function dc(s,u){u&&!s.j&&($t(s),s.i=null,s.g.forEach(function(c,d){var I=d.toLowerCase();d!=I&&(Oi(this,d),Li(this,I,c))},s)),s.j=u}function fc(s,u){const c=new We;if(l.Image){const d=new Image;d.onload=P(zt,c,"TestLoadImage: loaded",!0,u,d),d.onerror=P(zt,c,"TestLoadImage: error",!1,u,d),d.onabort=P(zt,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=P(zt,c,"TestLoadImage: timeout",!1,u,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else u(!1)}function mc(s,u){const c=new We,d=new AbortController,I=setTimeout(()=>{d.abort(),zt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(I),A.ok?zt(c,"TestPingServer: ok",!0,u):zt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),zt(c,"TestPingServer: error",!1,u)})}function zt(s,u,c,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(c)}catch{}}function pc(){this.g=new Yu}function gc(s,u,c){const d=c||"";try{Di(s,function(I,A){let b=I;f(I)&&(b=Lr(I)),u.push(d+A+"="+encodeURIComponent(b))})}catch(I){throw u.push(d+"type="+encodeURIComponent("_badmap")),I}}function Fn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Fn,Fr),Fn.prototype.g=function(){return new Un(this.l,this.j)},Fn.prototype.i=function(s){return function(){return s}}({});function Un(s,u){mt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Un,mt),n=Un.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,tn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,tn(this)),this.g&&(this.readyState=3,tn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?Ze(this):tn(this),this.readyState==3&&Fi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ze(this))},n.Qa=function(s){this.g&&(this.response=s,Ze(this))},n.ga=function(){this.g&&Ze(this)};function Ze(s){s.readyState=4,s.l=null,s.j=null,s.v=null,tn(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=u.next();return s.join(`\r
`)};function tn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ui(s){let u="";return x(s,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function Wr(s,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Ui(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):J(s,u,c))}function tt(s){mt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(tt,mt);var _c=/^https?$/i,yc=["POST","PUT"];n=tt.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jr.g(),this.v=this.o?mi(this.o):mi(jr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(A){Bi(this,A);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)c.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yc,u,void 0))||d||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,b]of c)this.g.setRequestHeader(A,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$i(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){Bi(this,A)}};function Bi(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,ji(s),Bn(s)}function ji(s){s.A||(s.A=!0,vt(s,"complete"),vt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,vt(this,"complete"),vt(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qi(this):this.bb())},n.bb=function(){qi(this)};function qi(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Mt(s)!=4||s.Z()!=2)){if(s.u&&Mt(s)==4)li(s.Ea,0,s);else if(vt(s,"readystatechange"),Mt(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=b===0){var I=String(s.D).match(Ni)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),d=!_c.test(I?I.toLowerCase():"")}c=d}if(c)vt(s,"complete"),vt(s,"success");else{s.m=6;try{var A=2<Mt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",ji(s)}}finally{Bn(s)}}}}function Bn(s,u){if(s.g){$i(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||vt(s,"ready");try{c.onreadystatechange=d}catch{}}}function $i(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Mt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Xu(u)}};function zi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ec(s){const u={};s=(s.g&&2<=Mt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(B(s[d]))continue;var c=v(s[d]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=u[I]||[];u[I]=A,A.push(c)}y(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function en(s,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||u}function Gi(s){this.Aa=0,this.i=[],this.j=new We,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=en("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=en("baseRetryDelayMs",5e3,s),this.cb=en("retryDelaySeedMs",1e4,s),this.Wa=en("forwardChannelMaxRetries",2,s),this.wa=en("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(s&&s.concurrentRequestLimit),this.Da=new pc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Gi.prototype,n.la=8,n.G=1,n.connect=function(s,u,c,d){Tt(0),this.W=s,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=to(this,null,this.W),qn(this)};function Qr(s){if(Ki(s),s.G==3){var u=s.U++,c=Ot(s.I);if(J(c,"SID",s.K),J(c,"RID",u),J(c,"TYPE","terminate"),nn(s,c),u=new qt(s,s.j,u),u.L=2,u.v=Ln(Ot(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=eo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xn(u)}Zi(s)}function jn(s){s.g&&(Yr(s),s.g.cancel(),s.g=null)}function Ki(s){jn(s),s.u&&(l.clearTimeout(s.u),s.u=null),$n(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function qn(s){if(!Pi(s.h)&&!s.s){s.s=!0;var u=s.Ga;je||ii(),qe||(je(),qe=!0),br.add(u,s),s.B=0}}function vc(s,u){return Si(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=He(R(s.Ga,s,u),Ji(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new qt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=m(A),E(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=Wi(this,I,u),c=Ot(this.I),J(c,"RID",s),J(c,"CVER",22),this.D&&J(c,"X-HTTP-Session-Id",this.D),nn(this,c),A&&(this.O?u="headers="+encodeURIComponent(String(Ui(A)))+"&"+u:this.m&&Wr(c,this.m,A)),Hr(this.h,I),this.Ua&&J(c,"TYPE","init"),this.P?(J(c,"$req",u),J(c,"SID","null"),I.T=!0,$r(I,c,null)):$r(I,c,u),this.G=2}}else this.G==3&&(s?Hi(this,s):this.i.length==0||Pi(this.h)||Hi(this))};function Hi(s,u){var c;u?c=u.l:c=s.U++;const d=Ot(s.I);J(d,"SID",s.K),J(d,"RID",c),J(d,"AID",s.T),nn(s,d),s.m&&s.o&&Wr(d,s.m,s.o),c=new qt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),u&&(s.i=u.D.concat(s.i)),u=Wi(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Hr(s.h,c),$r(c,d,u)}function nn(s,u){s.H&&x(s.H,function(c,d){J(u,d,c)}),s.l&&Di({},function(c,d){J(u,d,c)})}function Wi(s,u,c){c=Math.min(s.i.length,c);var d=s.l?R(s.l.Na,s.l,s):null;t:{var I=s.i;let A=-1;for(;;){const b=["count="+c];A==-1?0<c?(A=I[0].g,b.push("ofs="+A)):A=0:b.push("ofs="+A);let X=!0;for(let ct=0;ct<c;ct++){let K=I[ct].g;const pt=I[ct].map;if(K-=A,0>K)A=Math.max(0,I[ct].g-100),X=!1;else try{gc(pt,b,"req"+K+"_")}catch{d&&d(pt)}}if(X){d=b.join("&");break t}}}return s=s.i.splice(0,c),u.D=s,d}function Qi(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;je||ii(),qe||(je(),qe=!0),br.add(u,s),s.v=0}}function Xr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=He(R(s.Fa,s),Ji(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Xi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=He(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),jn(this),Xi(this))};function Yr(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Xi(s){s.g=new qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=Ot(s.qa);J(u,"RID","rpc"),J(u,"SID",s.K),J(u,"AID",s.T),J(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&J(u,"TO",s.ja),J(u,"TYPE","xmlhttp"),nn(s,u),s.m&&s.o&&Wr(u,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Ln(Ot(u)),c.m=null,c.P=!0,wi(c,s)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),Xr(this),Tt(19))};function $n(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Yi(s,u){var c=null;if(s.g==u){$n(s),Yr(s),s.g=null;var d=2}else if(Kr(s.h,u))c=u.D,bi(s.h,u),d=1;else return;if(s.G!=0){if(u.o)if(d==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var I=s.B;d=Dn(),vt(d,new Ei(d,c)),qn(s)}else Qi(s);else if(I=u.s,I==3||I==0&&0<u.X||!(d==1&&vc(s,u)||d==2&&Xr(s)))switch(c&&0<c.length&&(u=s.h,u.i=u.i.concat(c)),I){case 1:se(s,5);break;case 4:se(s,10);break;case 3:se(s,6);break;default:se(s,2)}}}function Ji(s,u){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*u}function se(s,u){if(s.j.info("Error code "+u),u==2){var c=R(s.fb,s),d=s.Xa;const I=!d;d=new re(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||On(d,"https"),Ln(d),I?fc(d.toString(),c):mc(d.toString(),c)}else Tt(2);s.G=0,s.l&&s.l.sa(u),Zi(s),Ki(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Zi(s){if(s.G=0,s.ka=[],s.l){const u=Vi(s.h);(u.length!=0||s.i.length!=0)&&(V(s.ka,u),V(s.ka,s.i),s.h.i.length=0,N(s.i),s.i.length=0),s.l.ra()}}function to(s,u,c){var d=c instanceof re?Ot(c):new re(c);if(d.g!="")u&&(d.g=u+"."+d.g),Mn(d,d.s);else{var I=l.location;d=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var A=new re(null);d&&On(A,d),u&&(A.g=u),I&&Mn(A,I),c&&(A.l=c),d=A}return c=s.D,u=s.ya,c&&u&&J(d,c,u),J(d,"VER",s.la),nn(s,d),d}function eo(s,u,c){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new tt(new Fn({eb:c})):new tt(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function no(){}n=no.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zn(){}zn.prototype.g=function(s,u){return new wt(s,u)};function wt(s,u){mt.call(this),this.g=new Gi(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!B(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new ge(this)}D(wt,mt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Qr(this.g)},wt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Lr(s),s=c);u.i.push(new rc(u.Ya++,s)),u.G==3&&qn(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,Qr(this.g),delete this.g,wt.aa.N.call(this)};function ro(s){Ur.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const c in u){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}D(ro,Ur);function so(){Br.call(this),this.status=1}D(so,Br);function ge(s){this.g=s}D(ge,no),ge.prototype.ua=function(){vt(this.g,"a")},ge.prototype.ta=function(s){vt(this.g,new ro(s))},ge.prototype.sa=function(s){vt(this.g,new so)},ge.prototype.ra=function(){vt(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Ca=function(){return new zn},Ra=function(){return Dn()},Aa=ee,gs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,Xn=Nn,vi.COMPLETE="complete",wa=vi,pi.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",mt.prototype.listen=mt.prototype.K,sn=pi,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,Ia=tt}).apply(typeof Kn<"u"?Kn:typeof self<"u"?self:typeof window<"u"?window:{});const wo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new pa("@firebase/firestore");function ve(){return ce.logLevel}function k(n,...t){if(ce.logLevel<=z.DEBUG){const e=t.map(Ns);ce.debug(`Firestore (${Me}): ${n}`,...e)}}function Ut(n,...t){if(ce.logLevel<=z.ERROR){const e=t.map(Ns);ce.error(`Firestore (${Me}): ${n}`,...e)}}function Se(n,...t){if(ce.logLevel<=z.WARN){const e=t.map(Ns);ce.warn(`Firestore (${Me}): ${n}`,...e)}}function Ns(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n="Unexpected state"){const t=`FIRESTORE (${Me}) INTERNAL ASSERTION FAILED: `+n;throw Ut(t),new Error(t)}function H(n,t){n||L()}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Oe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class uh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class ch{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class lh{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){H(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ue,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ue)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new Pa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string"),new yt(t)}}class hh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new hh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){H(this.o===void 0);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(H(typeof e.token=="string"),this.R=e.token,new fh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=ph(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function G(n,t){return n<t?-1:n>t?1:0}function be(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new it(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new it(0,0))}static max(){return new F(new it(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return gn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class et extends gn{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new et(e)}static emptyPath(){return new et([])}}const gh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends gn{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return gh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(et.fromString(t))}static fromName(t){return new M(et.fromString(t).popFirst(5))}static empty(){return new M(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new et(t.slice()))}}function _h(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new it(e+1,0):new it(e,r));return new Xt(i,M.empty(),t)}function yh(n){return new Xt(n.readTime,n.key,-1)}class Xt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Xt(F.min(),M.empty(),-1)}static max(){return new Xt(F.max(),M.empty(),-1)}}function Eh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:G(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Th{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==vh)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++l,l===o&&r(a)},p=>i(p))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Ih(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Fe(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}gr.oe=-1;function _r(n){return n==null}function ir(n){return n===0&&1/n==-1/0}function wh(n){return typeof n=="number"&&Number.isInteger(n)&&!ir(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ao(t)),t=Rh(n.get(e),t);return Ao(t)}function Rh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Ao(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function le(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ba(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hn(this.root,t,this.comparator,!0)}}class Hn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new lt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,i,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Co(this.data.getIterator())}getIteratorFrom(t){return new Co(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class Co{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new bt([])}unionWith(t){let e=new ut(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return be(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Va("Invalid base64 string: "+o):o}}(t);return new dt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Ch=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(n){if(H(!!n),typeof n=="string"){let t=0;const e=Ch.exec(n);if(H(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function yr(n){const t=n.mapValue.fields.__previous_value__;return ks(t)?yr(t):t}function _n(n){const t=Yt(n.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e,r,i,o,a,l,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}class yn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ks(n)?4:bh(n)?9007199254740991:Sh(n)?10:11:L()}function Nt(n,t){if(n===t)return!0;const e=Zt(n);if(e!==Zt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _n(n).isEqual(_n(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Yt(i.timestampValue),l=Yt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Jt(i.bytesValue).isEqual(Jt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return nt(i.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return nt(i.integerValue)===nt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=nt(i.doubleValue),l=nt(o.doubleValue);return a===l?ir(a)===ir(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return be(n.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ro(a)!==Ro(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Nt(a[h],l[h])))return!1;return!0}(n,t);default:return L()}}function En(n,t){return(n.values||[]).find(e=>Nt(e,t))!==void 0}function Ve(n,t){if(n===t)return 0;const e=Zt(n),r=Zt(t);if(e!==r)return G(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=nt(o.integerValue||o.doubleValue),h=nt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return Po(n.timestampValue,t.timestampValue);case 4:return Po(_n(n),_n(t));case 5:return G(n.stringValue,t.stringValue);case 6:return function(o,a){const l=Jt(o),h=Jt(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const p=G(l[f],h[f]);if(p!==0)return p}return G(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=G(nt(o.latitude),nt(a.latitude));return l!==0?l:G(nt(o.longitude),nt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return So(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,f,p;const T=o.fields||{},R=a.fields||{},P=(l=T.value)===null||l===void 0?void 0:l.arrayValue,D=(h=R.value)===null||h===void 0?void 0:h.arrayValue,N=G(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:So(P,D)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Wn.mapValue&&a===Wn.mapValue)return 0;if(o===Wn.mapValue)return 1;if(a===Wn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let T=0;T<h.length&&T<p.length;++T){const R=G(h[T],p[T]);if(R!==0)return R;const P=Ve(l[h[T]],f[p[T]]);if(P!==0)return P}return G(h.length,p.length)}(n.mapValue,t.mapValue);default:throw L()}}function Po(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return G(n,t);const e=Yt(n),r=Yt(t),i=G(e.seconds,r.seconds);return i!==0?i:G(e.nanos,r.nanos)}function So(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ve(e[i],r[i]);if(o)return o}return G(e.length,r.length)}function De(n){return _s(n)}function _s(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Yt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Jt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=_s(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${_s(e.fields[a])}`;return i+"}"}(n.mapValue):L()}function Yn(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yr(n);return t?16+Yn(t):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Yn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return le(r.fields,(o,a)=>{i+=o.length+Yn(a)}),i}(n.mapValue);default:throw L()}}function ys(n){return!!n&&"integerValue"in n}function xs(n){return!!n&&"arrayValue"in n}function bo(n){return!!n&&"nullValue"in n}function Vo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Jn(n){return!!n&&"mapValue"in n}function Sh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return le(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function bh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Jn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(e)}setAll(t){let e=ht.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=cn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Jn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Jn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){le(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new At(cn(this.value))}}function Da(n){const t=[];return le(n.fields,(e,r)=>{const i=new ht([e]);if(Jn(r)){const o=Da(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new bt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Et(t,0,F.min(),F.min(),F.min(),At.empty(),0)}static newFoundDocument(t,e,r,i){return new Et(t,1,e,F.min(),r,i,0)}static newNoDocument(t,e){return new Et(t,2,e,F.min(),F.min(),At.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,F.min(),F.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e){this.position=t,this.inclusive=e}}function Do(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Ve(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function No(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Nt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{}class st extends Na{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Nh(t,e,r):e==="array-contains"?new Oh(t,r):e==="in"?new Mh(t,r):e==="not-in"?new Lh(t,r):e==="array-contains-any"?new Fh(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new kh(t,r):new xh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ve(e,this.value)):e!==null&&Zt(this.value)===Zt(e)&&this.matchesComparison(Ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Na{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return ka(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ka(n){return n.op==="and"}function xa(n){return Dh(n)&&ka(n)}function Dh(n){for(const t of n.filters)if(t instanceof kt)return!1;return!0}function Es(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+De(n.value);if(xa(n))return n.filters.map(t=>Es(t)).join(",");{const t=n.filters.map(e=>Es(e)).join(",");return`${n.op}(${t})`}}function Oa(n,t){return n instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Nt(r.value,i.value)}(n,t):n instanceof kt?function(r,i){return i instanceof kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&Oa(a,i.filters[l]),!0):!1}(n,t):void L()}function Ma(n){return n instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${De(e.value)}`}(n):n instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ma).join(" ,")+"}"}(n):"Filter"}class Nh extends st{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class kh extends st{constructor(t,e){super(t,"in",e),this.keys=La("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class xh extends st{constructor(t,e){super(t,"not-in",e),this.keys=La("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function La(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Oh extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xs(e)&&En(e.arrayValue,this.value)}}class Mh extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&En(this.value.arrayValue,e)}}class Lh extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!En(this.value.arrayValue,e)}}class Fh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>En(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function ko(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Uh(n,t,e,r,i,o,a)}function Os(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Es(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),_r(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>De(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>De(r)).join(",")),t.ue=e}return t.ue}function Ms(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Vh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Oa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!No(n.startAt,t.startAt)&&No(n.endAt,t.endAt)}function vs(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bh(n,t,e,r,i,o,a,l){return new Er(n,t,e,r,i,o,a,l)}function Ls(n){return new Er(n)}function xo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jh(n){return n.collectionGroup!==null}function ln(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ut(ht.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new ar(o,r))}),e.has(ht.keyField().canonicalString())||t.ce.push(new ar(ht.keyField(),r))}return t.ce}function Vt(n){const t=U(n);return t.le||(t.le=qh(t,ln(n))),t.le}function qh(n,t){if(n.limitType==="F")return ko(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ar(i.field,o)});const e=n.endAt?new or(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new or(n.startAt.position,n.startAt.inclusive):null;return ko(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ts(n,t,e){return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function vr(n,t){return Ms(Vt(n),Vt(t))&&n.limitType===t.limitType}function Fa(n){return`${Os(Vt(n))}|lt:${n.limitType}`}function Te(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Ma(i)).join(", ")}]`),_r(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>De(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>De(i)).join(",")),`Target(${r})`}(Vt(n))}; limitType=${n.limitType})`}function Tr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of ln(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,h){const f=Do(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,ln(r),i)||r.endAt&&!function(a,l,h){const f=Do(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,ln(r),i))}(n,t)}function $h(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ua(n){return(t,e)=>{let r=!1;for(const i of ln(n)){const o=zh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function zh(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Ve(h,f):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){le(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return ba(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Z(M.comparator);function Bt(){return Gh}const Ba=new Z(M.comparator);function on(...n){let t=Ba;for(const e of n)t=t.insert(e.key,e);return t}function ja(n){let t=Ba;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function oe(){return hn()}function qa(){return hn()}function hn(){return new he(n=>n.toString(),(n,t)=>n.isEqual(t))}const Kh=new Z(M.comparator),Hh=new ut(M.comparator);function q(...n){let t=Hh;for(const e of n)t=t.add(e);return t}const Wh=new ut(G);function Qh(){return Wh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ir(t)?"-0":t}}function $a(n){return{integerValue:""+n}}function Xh(n,t){return wh(t)?$a(t):Fs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this._=void 0}}function Yh(n,t,e){return n instanceof ur?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ks(o)&&(o=yr(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof vn?Ga(n,t):n instanceof Tn?Ka(n,t):function(i,o){const a=za(i,o),l=Oo(a)+Oo(i.Pe);return ys(a)&&ys(i.Pe)?$a(l):Fs(i.serializer,l)}(n,t)}function Jh(n,t,e){return n instanceof vn?Ga(n,t):n instanceof Tn?Ka(n,t):e}function za(n,t){return n instanceof cr?function(r){return ys(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ur extends Ir{}class vn extends Ir{constructor(t){super(),this.elements=t}}function Ga(n,t){const e=Ha(t);for(const r of n.elements)e.some(i=>Nt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Tn extends Ir{constructor(t){super(),this.elements=t}}function Ka(n,t){let e=Ha(t);for(const r of n.elements)e=e.filter(i=>!Nt(i,r));return{arrayValue:{values:e}}}class cr extends Ir{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Oo(n){return nt(n.integerValue||n.doubleValue)}function Ha(n){return xs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Zh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof vn&&i instanceof vn||r instanceof Tn&&i instanceof Tn?be(r.elements,i.elements,Nt):r instanceof cr&&i instanceof cr?Nt(r.Pe,i.Pe):r instanceof ur&&i instanceof ur}(n.transform,t.transform)}class td{constructor(t,e){this.version=t,this.transformResults=e}}class Lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class wr{}function Wa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Xa(n.key,Lt.none()):new wn(n.key,n.data,Lt.none());{const e=n.data,r=At.empty();let i=new ut(ht.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new de(n.key,r,new bt(i.toArray()),Lt.none())}}function ed(n,t,e){n instanceof wn?function(i,o,a){const l=i.value.clone(),h=Lo(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof de?function(i,o,a){if(!Zn(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Lo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Qa(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function dn(n,t,e,r){return n instanceof wn?function(o,a,l,h){if(!Zn(o.precondition,a))return l;const f=o.value.clone(),p=Fo(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof de?function(o,a,l,h){if(!Zn(o.precondition,a))return l;const f=Fo(o.fieldTransforms,h,a),p=a.data;return p.setAll(Qa(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,l){return Zn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function nd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=za(r.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function Mo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&be(r,i,(o,a)=>Zh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wn extends wr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class de extends wr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Qa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Lo(n,t,e){const r=new Map;H(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,Jh(a,l,e[i]))}return r}function Fo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Yh(o,a,t))}return r}class Xa extends wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rd extends wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&ed(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=dn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=dn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=qa();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=Wa(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&be(this.mutations,t.mutations,(e,r)=>Mo(e,r))&&be(this.baseMutations,t.baseMutations,(e,r)=>Mo(e,r))}}class Us{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){H(t.mutations.length===r.length);let i=function(){return Kh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Us(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,$;function ad(n){switch(n){default:return L();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Ya(n){if(n===void 0)return Ut("GRPC error has no .code"),S.UNKNOWN;switch(n){case rt.OK:return S.OK;case rt.CANCELLED:return S.CANCELLED;case rt.UNKNOWN:return S.UNKNOWN;case rt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case rt.INTERNAL:return S.INTERNAL;case rt.UNAVAILABLE:return S.UNAVAILABLE;case rt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case rt.NOT_FOUND:return S.NOT_FOUND;case rt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case rt.ABORTED:return S.ABORTED;case rt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case rt.DATA_LOSS:return S.DATA_LOSS;default:return L()}}($=rt||(rt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new ae([4294967295,4294967295],0);function Uo(n){const t=ud().encode(n),e=new Ta;return e.update(t),new Uint8Array(e.digest())}function Bo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ae([e,r],0),new ae([i,o],0)]}class Bs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new an(`Invalid padding: ${e}`);if(r<0)throw new an(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new an(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new an(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ae.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(ae.fromNumber(r)));return i.compare(cd)===1&&(i=new ae([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Uo(t),[r,i]=Bo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Bs(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Uo(t),[r,i]=Bo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class an extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ar(F.min(),i,new Z(G),Bt(),q())}}class An{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new An(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Ja{constructor(t,e){this.targetId=t,this.me=e}}class Za{constructor(t,e,r=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class jo{constructor(){this.fe=0,this.ge=$o(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),r=q();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L()}}),new An(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=$o()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ld{constructor(t){this.Le=t,this.Be=new Map,this.ke=Bt(),this.qe=qo(),this.Qe=new Z(G)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(vs(o))if(r===0){const a=new M(o.path);this.Ue(e,a,Et.newNoDocument(a,F.min()))}else H(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),h=l?this.Xe(l,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=Jt(r).toUint8Array()}catch(h){if(h instanceof Va)return Se("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Bs(a,i,o)}catch(h){return Se(h instanceof an?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&vs(l.target)){const h=new M(l.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Et.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=q();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Ar(t,e,this.Qe,this.ke,r);return this.ke=Bt(),this.qe=qo(),this.Qe=new Z(G),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new jo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut(G),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new jo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function qo(){return new Z(M.comparator)}function $o(){return new Z(M.comparator)}const hd={asc:"ASCENDING",desc:"DESCENDING"},dd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fd={and:"AND",or:"OR"};class md{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Is(n,t){return n.useProto3Json||_r(t)?t:{value:t}}function lr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function pd(n,t){return lr(n,t.toTimestamp())}function Dt(n){return H(!!n),F.fromTimestamp(function(e){const r=Yt(e);return new it(r.seconds,r.nanos)}(n))}function js(n,t){return ws(n,t).canonicalString()}function ws(n,t){const e=function(i){return new et(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function eu(n){const t=et.fromString(n);return H(ou(t)),t}function As(n,t){return js(n.databaseId,t.path)}function rs(n,t){const e=eu(t);if(e.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(ru(e))}function nu(n,t){return js(n.databaseId,t)}function gd(n){const t=eu(n);return t.length===4?et.emptyPath():ru(t)}function Rs(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ru(n){return H(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function zo(n,t,e){return{name:As(n,t),fields:e.value.mapValue.fields}}function _d(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(H(p===void 0||typeof p=="string"),dt.fromBase64String(p||"")):(H(p===void 0||p instanceof Buffer||p instanceof Uint8Array),dt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const p=f.code===void 0?S.UNKNOWN:Ya(f.code);return new O(p,f.message||"")}(a);e=new Za(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=rs(n,r.document.name),o=Dt(r.document.updateTime),a=r.document.createTime?Dt(r.document.createTime):F.min(),l=new At({mapValue:{fields:r.document.fields}}),h=Et.newFoundDocument(i,o,a,l),f=r.targetIds||[],p=r.removedTargetIds||[];e=new tr(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=rs(n,r.document),o=r.readTime?Dt(r.readTime):F.min(),a=Et.newNoDocument(i,o),l=r.removedTargetIds||[];e=new tr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=rs(n,r.document),o=r.removedTargetIds||[];e=new tr([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new od(i,o),l=r.targetId;e=new Ja(l,a)}}return e}function yd(n,t){let e;if(t instanceof wn)e={update:zo(n,t.key,t.value)};else if(t instanceof Xa)e={delete:As(n,t.key)};else if(t instanceof de)e={update:zo(n,t.key,t.data),updateMask:Pd(t.fieldMask)};else{if(!(t instanceof rd))return L();e={verify:As(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof ur)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Tn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw L()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:pd(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(n,t.precondition)),e}function Ed(n,t){return n&&n.length>0?(H(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Dt(i.updateTime):Dt(o);return a.isEqual(F.min())&&(a=Dt(o)),new td(a,i.transformResults||[])}(e,t))):[]}function vd(n,t){return{documents:[nu(n,t.path)]}}function Td(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=nu(n,i);const o=function(f){if(f.length!==0)return iu(kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(R){return{field:Ie(R.field),direction:Ad(R.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Is(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function Id(n){let t=gd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){H(r===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(T){const R=su(T);return R instanceof kt&&xa(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(R=>function(D){return new ar(we(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(T){let R;return R=typeof T=="object"?T.value:T,_r(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(T){const R=!!T.before,P=T.values||[];return new or(P,R)}(e.startAt));let f=null;return e.endAt&&(f=function(T){const R=!T.before,P=T.values||[];return new or(P,R)}(e.endAt)),Bh(t,i,a,o,l,"F",h,f)}function wd(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function su(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=we(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=we(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=we(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=we(e.unaryFilter.field);return st.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return st.create(we(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(r=>su(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function Ad(n){return hd[n]}function Rd(n){return dd[n]}function Cd(n){return fd[n]}function Ie(n){return{fieldPath:n.canonicalString()}}function we(n){return ht.fromServerFormat(n.fieldPath)}function iu(n){return n instanceof st?function(e){if(e.op==="=="){if(Vo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NAN"}};if(bo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NAN"}};if(bo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ie(e.field),op:Rd(e.op),value:e.value}}}(n):n instanceof kt?function(e){const r=e.getFilters().map(i=>iu(i));return r.length===1?r[0]:{compositeFilter:{op:Cd(e.op),filters:r}}}(n):L()}function Pd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ou(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,r,i,o=F.min(),a=F.min(),l=dt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t){this.ct=t}}function bd(n){const t=Id({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ts(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.un=new Dd}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Xt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Dd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ut(et.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ut(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class It{constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(41943040,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ne(0)}static kn(){return new Ne(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko([n,t],[e,r]){const i=G(n,e);return i===0?G(t,r):i}class Nd{constructor(t){this.Un=t,this.buffer=new ut(Ko),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ko(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class kd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(t){k("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Fe(e)?k("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Le(e)}await this.Hn(3e5)})}}class xd{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(gr.oe);const r=new Nd(e);return this.Jn.forEachTarget(t,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(t,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Jn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Go)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Go):this.Xn(t,e))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,e){let r,i,o,a,l,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,a=Date.now(),this.nthSequenceNumber(t,i))).next(T=>(r=T,l=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(f=Date.now(),ve()<=z.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${T} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function Od(n,t){return new xd(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.changes=new he(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&dn(r.mutation,i,bt.empty(),it.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const i=oe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=on();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=oe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=Bt();const a=hn(),l=function(){return hn()}();return e.forEach((h,f)=>{const p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof de)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),dn(p.mutation,f,p.mutation.getFieldMask(),it.now())):a.set(f.key,bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var T;return l.set(f,new Ld(p,(T=a.get(f))!==null&&T!==void 0?T:null))}),l))}recalculateAndSaveOverlays(t,e){const r=hn();let i=new Z((a,l)=>a-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=r.get(h)||bt.empty();p=l.applyToLocalView(f,p),r.set(h,p);const T=(i.get(l.batchId)||q()).add(h);i=i.insert(l.batchId,T)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,p=h.value,T=qa();p.forEach(R=>{if(!o.has(R)){const P=Wa(e.get(R),r.get(R));P!==null&&T.set(R,P),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,T))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):jh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(oe());let l=-1,h=o;return a.next(f=>C.forEach(f,(p,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(t,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(p=>({batchId:l,changes:ja(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=on();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=on();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,h=>{const f=function(T,R){return new Er(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(p=>{p.forEach((T,R)=>{a=a.insert(T,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Et.newInvalidDocument(p)))});let l=on();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&dn(p.mutation,f,bt.empty(),it.now()),Tr(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:bd(i.bundledQuery),readTime:Dt(i.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.overlays=new Z(M.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=oe();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=oe(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Z((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=oe(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=oe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=i)););return C.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new id(e,r));let o=this.Ir.get(e);o===void 0&&(o=q(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.Tr=new ut(at.Er),this.dr=new ut(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new at(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new M(new et([])),r=new at(e,t),i=new at(e,t+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new et([])),r=new at(e,t),i=new at(e,t+1);let o=q();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||G(t.wr,e.wr)}static Ar(t,e){return G(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ut(at.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sd(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new at(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut(G);return e.forEach(i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new at(new M(o),0);let l=new ut(G);return this.br.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.wr)),!0)},a),C.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){H(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new at(e,0),i=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t){this.Mr=t,this.docs=function(){return new Z(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let r=Bt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Bt();const a=e.path,l=new M(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Eh(yh(p),r)<=0||(i.has(p.key)||Tr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L()}Or(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new zd(this)}getSize(t){return C.resolve(this.size)}}class zd extends Md{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t){this.persistence=t,this.Nr=new he(e=>Os(e),Ms),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qs,this.targetCount=0,this.kr=Ne.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Ne(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,e){this.qr={},this.overlays={},this.Qr=new gr(0),this.Kr=!1,this.Kr=!0,this.$r=new jd,this.referenceDelegate=t(this),this.Ur=new Gd(this),this.indexManager=new Vd,this.remoteDocumentCache=function(i){return new $d(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Sd(e),this.Gr=new Ud(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Bd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new qd(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const i=new Kd(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Kd extends Th{constructor(t){super(),this.currentSequenceNumber=t}}class $s{constructor(t){this.persistence=t,this.Jr=new qs,this.Yr=null}static Zr(t){return new $s(t)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const i=M.fromPath(r);return this.ei(t,i).next(o=>{o||e.removeEntry(i,F.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}class hr{constructor(t,e){this.persistence=t,this.ti=new he(r=>Ah(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Od(this,e)}static Zr(t,e){return new hr(t,e)}zr(){}jr(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Yn(t){const e=this.er(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}er(t){let e=0;return this.Zn(t,r=>{e++}).next(()=>e)}Zn(t,e){return C.forEach(this.ti,(r,i)=>this.nr(t,r,i).next(o=>o?C.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Or(t,a=>this.nr(t,a,e).next(l=>{l||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.ti.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.ti.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.ti.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.ti.set(e,t.currentSequenceNumber),C.resolve()}Wr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Yn(t.data.value)),e}nr(t,e,r){return C.or([()=>this.persistence.Hr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ti.get(e);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new zs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zc()?8:Ih(qc())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Hd;return this.Xi(t,e,a).next(l=>{if(o.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>o.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(ve()<=z.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Te(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(ve()<=z.DEBUG&&k("QueryEngine","Query:",Te(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ve()<=z.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Te(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(e))):C.resolve())}Yi(t,e){if(xo(e))return C.resolve(null);let r=Vt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ts(e,null,"F"),r=Vt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.ts(e,l);return this.ns(e,f,a,h.readTime)?this.Yi(t,Ts(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,r,i){return xo(e)||i.isEqual(F.min())?C.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,i)?C.resolve(null):(ve()<=z.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Te(e)),this.rs(t,a,e,_h(i,-1)).next(l=>l))})}ts(t,e){let r=new ut(Ua(t));return e.forEach((i,o)=>{Tr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,r){return ve()<=z.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Te(e)),this.Ji.getDocumentsMatchingQuery(t,e,Xt.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new Z(G),this._s=new he(o=>Os(o),Ms),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Fd(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Xd(n,t,e,r){return new Qd(n,t,e,r)}async function uu(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=q();for(const f of i){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:l}))})})}function Yd(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,h,f,p){const T=f.batch,R=T.keys();let P=C.resolve();return R.forEach(D=>{P=P.next(()=>p.getEntry(h,D)).next(N=>{const V=f.docVersions.get(D);H(V!==null),N.version.compareTo(V)<0&&(T.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),p.addEntry(N)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=q();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function cu(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Jd(n,t){const e=U(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const l=[];t.targetChanges.forEach((p,T)=>{const R=i.get(T);if(!R)return;l.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,T).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,T)));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?P=P.withResumeToken(dt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(T,P),function(N,V,j){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(R,P,p)&&l.push(e.Ur.updateTargetData(o,P))});let h=Bt(),f=q();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(Zd(o,a,t.documentUpdates).next(p=>{h=p.Ps,f=p.Is})),!r.isEqual(F.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(T=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return C.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=i,o))}function Zd(n,t,e){let r=q(),i=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Bt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):k("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function tf(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function ef(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new Ht(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Cs(n,t,e){const r=U(n),i=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Fe(a))throw a;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Ho(n,t,e){const r=U(n);let i=F.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const T=U(h),R=T._s.get(p);return R!==void 0?C.resolve(T.os.get(R)):T.Ur.getTargetData(f,p)}(r,a,Vt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:F.min(),e?o:q())).next(l=>(nf(r,$h(t),l),{documents:l,Ts:o})))}function nf(n,t,e){let r=n.us.get(t)||F.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Wo{constructor(){this.activeTargetIds=Qh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rf{constructor(){this.so=new Wo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Wo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn=null;function ss(){return Qn===null?Qn=function(){return 268435456+Math.round(2147483648*Math.random())}():Qn++,"0x"+Qn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class uf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,r,i,o,a){const l=ss(),h=this.xo(e,r.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${l}:`,h,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,i).then(p=>(k("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw Se("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(e,r,i,o,a,l){return this.Mo(e,r,i,o,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Me}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const i=of[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const o=ss();return new Promise((a,l)=>{const h=new Ia;h.setWithCredentials(!0),h.listenOnce(wa.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Xn.NO_ERROR:const p=h.getResponseJson();k(_t,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case Xn.TIMEOUT:k(_t,`RPC '${t}' ${o} timed out`),l(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const T=h.getStatus();if(k(_t,`RPC '${t}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const D=function(V){const j=V.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(j)>=0?j:S.UNKNOWN}(P.status);l(new O(D,P.message))}else l(new O(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new O(S.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{k(_t,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);k(_t,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,r,15)})}Bo(t,e,r){const i=ss(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ca(),l=Ra(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");k(_t,`Creating RPC '${t}' stream ${i}: ${p}`,h);const T=a.createWebChannel(p,h);let R=!1,P=!1;const D=new af({Io:V=>{P?k(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(R||(k(_t,`Opening RPC '${t}' stream ${i} transport.`),T.open(),R=!0),k(_t,`RPC '${t}' stream ${i} sending:`,V),T.send(V))},To:()=>T.close()}),N=(V,j,B)=>{V.listen(j,W=>{try{B(W)}catch(Y){setTimeout(()=>{throw Y},0)}})};return N(T,sn.EventType.OPEN,()=>{P||(k(_t,`RPC '${t}' stream ${i} transport opened.`),D.yo())}),N(T,sn.EventType.CLOSE,()=>{P||(P=!0,k(_t,`RPC '${t}' stream ${i} transport closed`),D.So())}),N(T,sn.EventType.ERROR,V=>{P||(P=!0,Se(_t,`RPC '${t}' stream ${i} transport errored:`,V),D.So(new O(S.UNAVAILABLE,"The operation could not be completed")))}),N(T,sn.EventType.MESSAGE,V=>{var j;if(!P){const B=V.data[0];H(!!B);const W=B,Y=W.error||((j=W[0])===null||j===void 0?void 0:j.error);if(Y){k(_t,`RPC '${t}' stream ${i} received error:`,Y);const Q=Y.status;let x=function(g){const E=rt[g];if(E!==void 0)return Ya(E)}(Q),y=Y.message;x===void 0&&(x=S.INTERNAL,y="Unknown error status: "+Q+" with message "+Y.message),P=!0,D.So(new O(x,y)),T.close()}else k(_t,`RPC '${t}' stream ${i} received:`,B),D.bo(B)}}),N(l,Aa.STAT_EVENT,V=>{V.stat===gs.PROXY?k(_t,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===gs.NOPROXY&&k(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function is(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){return new md(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e,r,i,o,a,l,h){this.ui=t,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new lu(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Ut(e.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cf extends hu{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=_d(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Dt(a.readTime):F.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Rs(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=vs(h)?{documents:vd(o,h)}:{query:Td(o,h)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=tu(o,a.resumeToken);const f=Is(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=lr(o,a.snapshotVersion.toTimestamp());const f=Is(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=wd(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Rs(this.serializer),e.removeTarget=t,this.a_(e)}}class lf extends hu{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return H(!!t.streamToken),this.lastStreamToken=t.streamToken,H(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){H(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Ed(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Rs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>yd(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,ws(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}Lo(t,e,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,ws(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class df{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ut(e),this.D_=!1):k("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{fe(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=U(h);f.L_.add(4),await Rn(f),f.q_.set("Unknown"),f.L_.delete(4),await Cr(f)}(this))})}),this.q_=new df(r,i)}}async function Cr(n){if(fe(n))for(const t of n.B_)await t(!0)}async function Rn(n){for(const t of n.B_)await t(!1)}function du(n,t){const e=U(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ws(e)?Hs(e):Ue(e).r_()&&Ks(e,t))}function Gs(n,t){const e=U(n),r=Ue(e);e.N_.delete(t),r.r_()&&fu(e,t),e.N_.size===0&&(r.r_()?r.o_():fe(e)&&e.q_.set("Unknown"))}function Ks(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ue(n).A_(t)}function fu(n,t){n.Q_.xe(t),Ue(n).R_(t)}function Hs(n){n.Q_=new ld({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ue(n).start(),n.q_.v_()}function Ws(n){return fe(n)&&!Ue(n).n_()&&n.N_.size>0}function fe(n){return U(n).L_.size===0}function mu(n){n.Q_=void 0}async function mf(n){n.q_.set("Online")}async function pf(n){n.N_.forEach((t,e)=>{Ks(n,t)})}async function gf(n,t){mu(n),Ws(n)?(n.q_.M_(t),Hs(n)):n.q_.set("Unknown")}async function _f(n,t,e){if(n.q_.set("Online"),t instanceof Za&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,t)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await dr(n,r)}else if(t instanceof tr?n.Q_.Ke(t):t instanceof Ja?n.Q_.He(t):n.Q_.We(t),!e.isEqual(F.min()))try{const r=await cu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(f);p&&o.N_.set(f,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(dt.EMPTY_BYTE_STRING,p.snapshotVersion)),fu(o,h);const T=new Ht(p.target,h,f,p.sequenceNumber);Ks(o,T)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await dr(n,r)}}async function dr(n,t,e){if(!Fe(t))throw t;n.L_.add(1),await Rn(n),n.q_.set("Offline"),e||(e=()=>cu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Cr(n)})}function pu(n,t){return t().catch(e=>dr(n,e,t))}async function Pr(n){const t=U(n),e=te(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;yf(t);)try{const i=await tf(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,Ef(t,i)}catch(i){await dr(t,i)}gu(t)&&_u(t)}function yf(n){return fe(n)&&n.O_.length<10}function Ef(n,t){n.O_.push(t);const e=te(n);e.r_()&&e.V_&&e.m_(t.mutations)}function gu(n){return fe(n)&&!te(n).n_()&&n.O_.length>0}function _u(n){te(n).start()}async function vf(n){te(n).p_()}async function Tf(n){const t=te(n);for(const e of n.O_)t.m_(e.mutations)}async function If(n,t,e){const r=n.O_.shift(),i=Us.from(r,t,e);await pu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Pr(n)}async function wf(n,t){t&&te(n).V_&&await async function(r,i){if(function(a){return ad(a)&&a!==S.ABORTED}(i.code)){const o=r.O_.shift();te(r).s_(),await pu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Pr(r)}}(n,t),gu(n)&&_u(n)}async function Xo(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=fe(e);e.L_.add(3),await Rn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Cr(e)}async function Af(n,t){const e=U(n);t?(e.L_.delete(2),await Cr(e)):t||(e.L_.add(2),await Rn(e),e.q_.set("Unknown"))}function Ue(n){return n.K_||(n.K_=function(e,r,i){const o=U(e);return o.w_(),new cf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:mf.bind(null,n),Ro:pf.bind(null,n),mo:gf.bind(null,n),d_:_f.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Ws(n)?Hs(n):n.q_.set("Unknown")):(await n.K_.stop(),mu(n))})),n.K_}function te(n){return n.U_||(n.U_=function(e,r,i){const o=U(e);return o.w_(),new lf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vf.bind(null,n),mo:wf.bind(null,n),f_:Tf.bind(null,n),g_:If.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Pr(n)):(await n.U_.stop(),n.O_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new Qs(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xs(n,t){if(Ut("AsyncQueue",`${t}: ${n}`),Fe(n))return new O(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=on(),this.sortedSet=new Z(this.comparator)}static emptySet(t){return new Ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.W_=new Z(M.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):L():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ke{constructor(t,e,r,i,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new ke(t,e,Ce.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Cf{constructor(){this.queries=Jo(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=U(e),o=i.queries;i.queries=Jo(),o.forEach((a,l)=>{for(const h of l.j_)h.onError(r)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Jo(){return new he(n=>Fa(n),vr)}async function Pf(n,t){const e=U(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new Rf,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=Xs(a,`Initialization of query '${Te(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Ys(e)}async function Sf(n,t){const e=U(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function bf(n,t){const e=U(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Ys(e)}function Vf(n,t,e){const r=U(n),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(e);r.queries.delete(t)}function Ys(n){n.Y_.forEach(t=>{t.next()})}var Ps,Zo;(Zo=Ps||(Ps={})).ea="default",Zo.Cache="cache";class Df{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ke(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ps.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t){this.key=t}}class Eu{constructor(t){this.key=t}}class Nf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=Ua(t),this.Ra=new Ce(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Yo,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,T)=>{const R=i.get(p),P=Tr(this.query,T)?T:null,D=!!R&&this.mutatedKeys.has(R.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;R&&P?R.data.isEqual(P.data)?D!==N&&(r.track({type:3,doc:P}),V=!0):this.ga(R,P)||(r.track({type:2,doc:P}),V=!0,(h&&this.Aa(P,h)>0||f&&this.Aa(P,f)<0)&&(l=!0)):!R&&P?(r.track({type:0,doc:P}),V=!0):R&&!P&&(r.track({type:1,doc:R}),V=!0,(h||f)&&(l=!0)),V&&(P?(a=a.add(P),o=N?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,T)=>function(P,D){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return N(P)-N(D)}(p.type,T.type)||this.Aa(p.doc,T.doc)),this.pa(r),i=i!=null&&i;const l=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new ke(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=q(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Eu(r))}),this.da.forEach(r=>{t.has(r)||e.push(new yu(r))}),e}ba(t){this.Ta=t.Ts,this.da=q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return ke.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class kf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class xf{constructor(t){this.key=t,this.va=!1}}class Of{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new he(l=>Fa(l),vr),this.Ma=new Map,this.xa=new Set,this.Oa=new Z(M.comparator),this.Na=new Map,this.La=new qs,this.Ba={},this.ka=new Map,this.qa=Ne.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Mf(n,t,e=!0){const r=Ru(n);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await vu(r,t,e,!0),i}async function Lf(n,t){const e=Ru(n);await vu(e,t,!0,!1)}async function vu(n,t,e,r){const i=await ef(n.localStore,Vt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Ff(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&du(n.remoteStore,i),l}async function Ff(n,t,e,r,i){n.Ka=(T,R,P)=>async function(N,V,j,B){let W=V.view.ma(j);W.ns&&(W=await Ho(N.localStore,V.query,!1).then(({documents:y})=>V.view.ma(y,W)));const Y=B&&B.targetChanges.get(V.targetId),Q=B&&B.targetMismatches.get(V.targetId)!=null,x=V.view.applyChanges(W,N.isPrimaryClient,Y,Q);return ea(N,V.targetId,x.wa),x.snapshot}(n,T,R,P);const o=await Ho(n.localStore,t,!0),a=new Nf(t,o.Ts),l=a.ma(o.documents),h=An.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=a.applyChanges(l,n.isPrimaryClient,h);ea(n,e,f.wa);const p=new kf(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Uf(n,t,e){const r=U(n),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!vr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Gs(r.remoteStore,i.targetId),Ss(r,i.targetId)}).catch(Le)):(Ss(r,i.targetId),await Cs(r.localStore,i.targetId,!0))}async function Bf(n,t){const e=U(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Gs(e.remoteStore,r.targetId))}async function jf(n,t,e){const r=Wf(n);try{const i=await function(a,l){const h=U(a),f=it.now(),p=l.reduce((P,D)=>P.add(D.key),q());let T,R;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=Bt(),N=q();return h.cs.getEntries(P,p).next(V=>{D=V,D.forEach((j,B)=>{B.isValidDocument()||(N=N.add(j))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,D)).next(V=>{T=V;const j=[];for(const B of l){const W=nd(B,T.get(B.key).overlayedDocument);W!=null&&j.push(new de(B.key,W,Da(W.value.mapValue),Lt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,j,l)}).next(V=>{R=V;const j=V.applyToLocalDocumentSet(T,N);return h.documentOverlayCache.saveOverlays(P,V.batchId,j)})}).then(()=>({batchId:R.batchId,changes:ja(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new Z(G)),f=f.insert(l,h),a.Ba[a.currentUser.toKey()]=f}(r,i.batchId,e),await Cn(r,i.changes),await Pr(r.remoteStore)}catch(i){const o=Xs(i,"Failed to persist write");e.reject(o)}}async function Tu(n,t){const e=U(n);try{const r=await Jd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?H(a.va):i.removedDocuments.size>0&&(H(a.va),a.va=!1))}),await Cn(e,r,t)}catch(r){await Le(r)}}function ta(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=U(a);h.onlineState=l;let f=!1;h.queries.forEach((p,T)=>{for(const R of T.j_)R.Z_(l)&&(f=!0)}),f&&Ys(h)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function qf(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),o=i&&i.key;if(o){let a=new Z(M.comparator);a=a.insert(o,Et.newNoDocument(o,F.min()));const l=q().add(o),h=new Ar(F.min(),new Map,new Z(G),a,l);await Tu(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),Js(r)}else await Cs(r.localStore,t,!1).then(()=>Ss(r,t,e)).catch(Le)}async function $f(n,t){const e=U(n),r=t.batch.batchId;try{const i=await Yd(e.localStore,t);wu(e,r,null),Iu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Cn(e,i)}catch(i){await Le(i)}}async function zf(n,t,e){const r=U(n);try{const i=await function(a,l){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,l).next(T=>(H(T!==null),p=T.keys(),h.mutationQueue.removeMutationBatch(f,T))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(r.localStore,t);wu(r,t,e),Iu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Cn(r,i)}catch(i){await Le(i)}}function Iu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function wu(n,t,e){const r=U(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Ss(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Au(n,r)})}function Au(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Gs(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Js(n))}function ea(n,t,e){for(const r of e)r instanceof yu?(n.La.addReference(r.key,t),Gf(n,r)):r instanceof Eu?(k("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Au(n,r.key)):L()}function Gf(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(k("SyncEngine","New document in limbo: "+e),n.xa.add(r),Js(n))}function Js(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new M(et.fromString(t)),r=n.qa.next();n.Na.set(r,new xf(e)),n.Oa=n.Oa.insert(e,r),du(n.remoteStore,new Ht(Vt(Ls(e.path)),r,"TargetPurposeLimboResolution",gr.oe))}}async function Cn(n,t,e){const r=U(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,h)=>{a.push(r.Ka(h,t,e).then(f=>{var p;if((f||e)&&r.isPrimaryClient){const T=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(f){i.push(f);const T=zs.Wi(h.targetId,f);o.push(T)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,f){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>C.forEach(f,R=>C.forEach(R.$i,P=>p.persistence.referenceDelegate.addReference(T,R.targetId,P)).next(()=>C.forEach(R.Ui,P=>p.persistence.referenceDelegate.removeReference(T,R.targetId,P)))))}catch(T){if(!Fe(T))throw T;k("LocalStore","Failed to update sequence numbers: "+T)}for(const T of f){const R=T.targetId;if(!T.fromCache){const P=p.os.get(R),D=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(D);p.os=p.os.insert(R,N)}}}(r.localStore,o))}async function Kf(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const r=await uu(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(l=>{l.forEach(h=>{h.reject(new O(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cn(e,r.hs)}}function Hf(n,t){const e=U(n),r=e.Na.get(t);if(r&&r.va)return q().add(r.key);{let i=q();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const l=e.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function Ru(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Tu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qf.bind(null,t),t.Ca.d_=bf.bind(null,t.eventManager),t.Ca.$a=Vf.bind(null,t.eventManager),t}function Wf(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$f.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zf.bind(null,t),t}class fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Xd(this.persistence,new Wd,t.initialUser,this.serializer)}Ga(t){return new au($s.Zr,this.serializer)}Wa(t){return new rf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fr.provider={build:()=>new fr};class Qf extends fr{constructor(t){super(),this.cacheSizeBytes=t}ja(t,e){H(this.persistence.referenceDelegate instanceof hr);const r=this.persistence.referenceDelegate.garbageCollector;return new kd(r,t.asyncQueue,e)}Ga(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new au(r=>hr.Zr(r,e),this.serializer)}}class bs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ta(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kf.bind(null,this.syncEngine),await Af(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Cf}()}createDatastore(t){const e=Rr(t.databaseInfo.databaseId),r=function(o){return new uf(o)}(t.databaseInfo);return function(o,a,l,h){return new hf(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new ff(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>ta(this.syncEngine,e,0),function(){return Qo.D()?new Qo:new sf}())}createSyncEngine(t,e){return function(i,o,a,l,h,f,p){const T=new Of(i,o,a,l,h,f);return p&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=U(i);k("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Rn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}bs.provider={build:()=>new bs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Ut("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=Sa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{k("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(k("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Xs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function os(n,t){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function na(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Jf(n);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Xo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Xo(t.remoteStore,i)),n._onlineComponents=t}async function Jf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await os(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Se("Error using user provided cache. Falling back to memory cache: "+e),await os(n,new fr)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await os(n,new Qf(void 0));return n._offlineComponents}async function Cu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await na(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await na(n,new bs))),n._onlineComponents}function Zf(n){return Cu(n).then(t=>t.syncEngine)}async function ra(n){const t=await Cu(n),e=t.eventManager;return e.onListen=Mf.bind(null,t.syncEngine),e.onUnlisten=Uf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Lf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Bf.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n,t,e){if(!e)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function em(n,t,e,r){if(t===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ia(n){if(!M.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Zs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function Pe(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zs(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}em("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ti{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uh;switch(r.type){case"firstParty":return new dh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=sa.get(e);r&&(k("ComponentProvider","Removing Datastore"),sa.delete(e),r.terminate())}(this),Promise.resolve()}}function nm(n,t,e,r={}){var i;const o=(n=Pe(n,ti))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Se("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=yt.MOCK_USER;else{l=jc(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new yt(f)}n._authCredentials=new ch(new Pa(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Sr(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class In extends Sr{constructor(t,e,r){super(t,e,Ls(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new M(t))}withConverter(t){return new In(this.firestore,t,this._path)}}function rm(n,t,...e){if(n=fn(n),arguments.length===1&&(t=Sa.newId()),tm("doc","path",t),n instanceof ti){const r=et.fromString(t,...e);return ia(r),new Rt(n,null,new M(r))}{if(!(n instanceof Rt||n instanceof In))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return ia(r),new Rt(n.firestore,n instanceof In?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new lu(this,"async_queue_retry"),this.Vu=()=>{const r=is();r&&k("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=is();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ue;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Fe(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ut("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Qs.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&L()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function ua(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class mr extends ti{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new aa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new aa(t),this._firestoreClient=void 0,await t}}}function sm(n,t){const e=typeof n=="object"?n:Xl(),r=typeof n=="string"?n:"(default)",i=Kl(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Uc("firestore");o&&nm(i,...o)}return i}function Su(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||im(n),n._firestoreClient}function im(n){var t,e,r;const i=n._freezeSettings(),o=function(l,h,f,p){return new Ph(l,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Pu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Yf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xe(dt.fromBase64String(t))}catch(e){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new xe(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=/^__.*__$/;class am{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new de(t,this.data,this.fieldMask,e,this.fieldTransforms):new wn(t,this.data,e,this.fieldTransforms)}}function Vu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class si{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new si(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return pr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Vu(this.Cu)&&om.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class um{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Rr(t)}Qu(t,e,r,i=!1){return new si({Cu:t,methodName:e,qu:r,path:ht.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cm(n){const t=n._freezeSettings(),e=Rr(n._databaseId);return new um(n._databaseId,!!t.ignoreUndefinedProperties,e)}function lm(n,t,e,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,i);xu("Data must be an object, but it was:",a,r);const l=Nu(r,a);let h,f;if(o.merge)h=new bt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const T of o.mergeFields){const R=hm(t,T,e);if(!a.contains(R))throw new O(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);fm(p,R)||p.push(R)}h=new bt(p),f=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,f=a.fieldTransforms;return new am(new At(l),h,f)}function Du(n,t){if(ku(n=fn(n)))return xu("Unsupported field value:",t,n),Nu(n,t);if(n instanceof bu)return function(r,i){if(!Vu(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let h=Du(l,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=fn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:lr(i.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lr(i.serializer,o)}}if(r instanceof ni)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xe)return{bytesValue:tu(i.serializer,r._byteString)};if(r instanceof Rt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:js(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ri)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Bu("VectorValues must only contain numeric values.");return Fs(l.serializer,h)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Zs(r)}`)}(n,t)}function Nu(n,t){const e={};return ba(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(n,(r,i)=>{const o=Du(i,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ku(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof ni||n instanceof xe||n instanceof Rt||n instanceof bu||n instanceof ri)}function xu(n,t,e){if(!ku(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Zs(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function hm(n,t,e){if((t=fn(t))instanceof ei)return t._internalPath;if(typeof t=="string")return Ou(n,t);throw pr("Field path arguments must be of type string or ",n,!1,void 0,e)}const dm=new RegExp("[~\\*/\\[\\]]");function Ou(n,t,e){if(t.search(dm)>=0)throw pr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ei(...t.split("."))._internalPath}catch{throw pr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function pr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new O(S.INVALID_ARGUMENT,l+n+h)}function fm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new mm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Lu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class mm extends Mu{data(){return super.data()}}function Lu(n,t){return typeof t=="string"?Ou(n,t):t instanceof ei?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gm{convertValue(t,e="none"){switch(Zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return le(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>nt(a.doubleValue));return new ri(o)}convertGeoPoint(t){return new ni(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=yr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=Yt(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);H(ou(r));const i=new yn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||Ut(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fu extends Mu{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Lu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class er extends Fu{data(t={}){return super.data(t)}}class ym{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new un(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new er(this._firestore,this._userDataWriter,r.key,r,new un(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new er(i._firestore,i._userDataWriter,l.doc.key,l.doc,new un(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new er(i._firestore,i._userDataWriter,l.doc.key,l.doc,new un(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Em(l.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Em(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Uu extends gm{constructor(t){super(),this.firestore=t}convertBytes(t){return new xe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function vm(n,t,e){n=Pe(n,Rt);const r=Pe(n.firestore,mr),i=_m(n.converter,t);return Im(r,[lm(cm(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Lt.none())])}function Tm(n,...t){var e,r,i;n=fn(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||ua(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(ua(t[a])){const T=t[a];t[a]=(e=T.next)===null||e===void 0?void 0:e.bind(T),t[a+1]=(r=T.error)===null||r===void 0?void 0:r.bind(T),t[a+2]=(i=T.complete)===null||i===void 0?void 0:i.bind(T)}let h,f,p;if(n instanceof Rt)f=Pe(n.firestore,mr),p=Ls(n._key.path),h={next:T=>{t[a]&&t[a](wm(f,n,T))},error:t[a+1],complete:t[a+2]};else{const T=Pe(n,Sr);f=Pe(T.firestore,mr),p=T._query;const R=new Uu(f);h={next:P=>{t[a]&&t[a](new ym(f,R,T,P))},error:t[a+1],complete:t[a+2]},pm(n._query)}return function(R,P,D,N){const V=new Xf(N),j=new Df(P,V,D);return R.asyncQueue.enqueueAndForget(async()=>Pf(await ra(R),j)),()=>{V.Za(),R.asyncQueue.enqueueAndForget(async()=>Sf(await ra(R),j))}}(Su(f),p,l,h)}function Im(n,t){return function(r,i){const o=new ue;return r.asyncQueue.enqueueAndForget(async()=>jf(await Zf(r),i,o)),o.promise}(Su(n),t)}function wm(n,t,e){const r=e.docs.get(t._key),i=new Uu(n);return new Fu(n,i,t._key,r,new un(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Me=i})(Ql),sr(new mn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new mr(new lh(r.getProvider("auth-internal")),new mh(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(f.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Re(wo,"4.7.4",t),Re(wo,"4.7.4","esm2017")})();const Am={apiKey:"AIzaSyCe07CwdOSCaOFSqcIT8uVm0EM0Ae5e4Fk",authDomain:"hw-topics-first-fb-project.firebaseapp.com",projectId:"hw-topics-first-fb-project",storageBucket:"hw-topics-first-fb-project.appspot.com",messagingSenderId:"513872626724",appId:"1:513872626724:web:e564fecb0e4ae3318d44b1"},Rm=ya(Am),Cm=sm(Rm),{document:as}=Sc;function ca(n,t,e){const r=n.slice();return r[9]=t[e],r[11]=e,r}function la(n){let t,e=n[9]+"",r,i;return{c(){t=Gt("span"),r=us(e),i=ye(),this.h()},l(o){t=Kt(o,"SPAN",{class:!0,style:!0});var a=rn(t);r=cs(a,e),i=Ee(a),a.forEach(ot),this.h()},h(){Pt(t,"class","rainbow-letter svelte-1a2nall"),co(t,"color",n[2][n[0][n[11]]])},m(o,a){St(o,t,a),Ae(t,r),Ae(t,i)},p(o,a){a&1&&co(t,"color",o[2][o[0][o[11]]])},d(o){o&&ot(t)}}}function Pm(n){let t,e="",r,i,o,a,l,h,f,p,T,R,P,D,N,V,j,B,W="part 1",Y=lo(n[3]),Q=[];for(let x=0;x<Y.length;x+=1)Q[x]=la(ca(n,Y,x));return{c(){t=Gt("script"),t.innerHTML=e,i=ye(),o=Gt("div"),a=us("bounces: "),l=us(n[1]),h=ye(),f=Gt("div"),p=ye(),T=Gt("img"),D=ye(),N=Gt("div"),V=Gt("b");for(let x=0;x<Q.length;x+=1)Q[x].c();j=ye(),B=Gt("a"),B.textContent=W,this.h()},l(x){const y=Rc("svelte-188204w",as.head);t=Kt(y,"SCRIPT",{src:!0,"data-svelte-h":!0}),uo(t)!=="svelte-98jtw6"&&(t.innerHTML=e),y.forEach(ot),i=Ee(x),o=Kt(x,"DIV",{class:!0});var m=rn(o);a=cs(m,"bounces: "),l=cs(m,n[1]),m.forEach(ot),h=Ee(x),f=Kt(x,"DIV",{id:!0,class:!0}),rn(f).forEach(ot),p=Ee(x),T=Kt(x,"IMG",{class:!0,src:!0,alt:!0,srcset:!0}),D=Ee(x),N=Kt(x,"DIV",{class:!0});var g=rn(N);V=Kt(g,"B",{});var E=rn(V);for(let v=0;v<Q.length;v+=1)Q[v].l(E);E.forEach(ot),g.forEach(ot),j=Ee(x),B=Kt(x,"A",{href:!0,"data-svelte-h":!0}),uo(B)!=="svelte-1pc28rm"&&(B.textContent=W),this.h()},h(){as.title="Michael Barr",io(t.src,r="/addedscript.js")||Pt(t,"src",r),Pt(o,"class","bottomleft svelte-1a2nall"),Pt(f,"id","inverter"),Pt(f,"class","svelte-1a2nall"),Pt(T,"class","bkg svelte-1a2nall"),io(T.src,R=bc)||Pt(T,"src",R),Pt(T,"alt",""),Ic(T,P="")||Pt(T,"srcset",P),Pt(N,"class","rainbow-text svelte-1a2nall"),Pt(B,"href","/bit")},m(x,y){Ae(as.head,t),St(x,i,y),St(x,o,y),Ae(o,a),Ae(o,l),St(x,h,y),St(x,f,y),St(x,p,y),St(x,T,y),St(x,D,y),St(x,N,y),Ae(N,V);for(let m=0;m<Q.length;m+=1)Q[m]&&Q[m].m(V,null);St(x,j,y),St(x,B,y)},p(x,[y]){if(y&2&&Cc(l,x[1]),y&13){Y=lo(x[3]);let m;for(m=0;m<Y.length;m+=1){const g=ca(x,Y,m);Q[m]?Q[m].p(g,y):(Q[m]=la(g),Q[m].c(),Q[m].m(V,null))}for(;m<Q.length;m+=1)Q[m].d(1);Q.length=Y.length}},i:oo,o:oo,d(x){x&&(ot(i),ot(o),ot(h),ot(f),ot(p),ot(T),ot(D),ot(N),ot(j),ot(B)),ot(t),Pc(Q,x)}}}function Sm(n,t,e){let r=["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#8B00FF"],i="Michael Barr".split(""),o,a=i.map((R,P)=>P%r.length);const l=()=>{e(0,a=a.map(R=>(R+1)%r.length))};ao(()=>(o=setInterval(l,200),()=>clearInterval(o)));function h(){const R=["/elmo.png","/elmo3.webp"];let P=0;const D=document.cookie.split("; ").find(V=>V.startsWith("index="));D&&(P=parseInt(D.split("=")[1])),console.log("cookie",D,P);const N=document.createElement("img");N.src=R[P],N.style.position="absolute",N.style.width="100px",document.body.appendChild(N),N.style.left="20px",N.style.bottom="20px",window.addEventListener("click",()=>{P===0&&T(),N.style.width="200px",P=(P+1)%R.length,N.src=R[P],document.cookie=`index=${P}; path=/; max-age=31536000`})}h();const f=rm(Cm,"bounces","bounces");let p=0;ao(async()=>{Tm(f,R=>{R&&R.exists()&&e(1,p=R.data().bounces)})});function T(){e(1,p++,p),vm(f,{bounces:p})}try{const R=new URL(window.location.href);console.log(R.hostname),R.hostname!=="topics.michaelbarr.dev"&&R.hostname!=="localhost"&&(R.hostname="topics.michaelbarr.dev",setTimeout(()=>{window.location.href=R.href},5e3))}catch(R){console.error("Invalid URL:",R)}return[a,p,r,i]}class xm extends wc{constructor(t){super(),Ac(this,t,Sm,Pm,Tc,{})}}export{xm as component};
