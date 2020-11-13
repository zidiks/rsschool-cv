var modules;modules=(()=>{var e,t,n,i,o={451:e=>{e.exports='<section id="game"> <div id="game-nav"> <z-link id="tomenu" class="game-nav-link" to="menu"><i class="material-icons">pause_circle_outline</i></z-link> <span class="game-nav-link" id=""><i style="margin-right:.2rem" class="material-icons">swap_horiz</i> <span id="move-count">0</span></span> <span class="game-nav-link" id=""><i style="margin-right:.2rem" class="material-icons">watch_later</i> <span id="min">00</span> : <span id="sec">00</span></span> <san class="game-nav-link game-nav-btn" id="revert-btn"><i class="material-icons">support</i> </san></div> <div id="puzzle-field"></div> </section>'},335:e=>{e.exports='<section id="menu"> <div id="menu-links"> <h1>Gem-Puzzle<br>by Zidiks</h1> <z-link to="game" class="z-link-p">Play</z-link> <z-link to="menu" class="z-link-p">Score</z-link> <z-link to="options" class="z-link-p">Options</z-link> <z-link to="exit" class="z-link-p" data-toggle-fullscreen>Exit</z-link> </div> <div id="menu-logo"> <img src="/assets/logo.svg" alt="Zidiks"> </div> <div id="author"> <h1>Created by Zidiks with love <span class="material-icons author-heart">favorite</span></h1> <span id="next" data-toggle-fullscreen>Play<i class="material-icons">navigate_next</i></span> </div> </section>'},250:e=>{e.exports='<section id="menu"> <div id="menu-links"> <h1>Options</h1> <span class="z-link-p options-btn">Sound <span id="swapsound" class="material-icons options-toggle">volume_up</span></span> <span class="z-link-p options-btn">Field size <span> <select class="options-toggle" id="options-select"> <option value="4">4х4</option> <option value="5">5х5</option> <option value="6">6х6</option> <option value="7">7х7</option> <option value="8">8х8</option> <option value="9">9х9</option> </select> </span></span> <span class="z-link-p options-btn">Image <span class="material-icons options-toggle">insert_photo</span></span> <z-link to="menu" class="z-link-p">Back</z-link> </div> <div id="menu-logo"> <img src="/assets/settings.svg" alt="Zidiks"> </div> <div id="author"> <h1>Created by Zidiks with love <span class="material-icons author-heart">favorite</span></h1> <span id="next" data-toggle-fullscreen>Play<i class="material-icons">navigate_next</i></span> </div> </section>'},698:(e,t,n)=>{"use strict";n.r(t)},4:(e,t,n)=>{"use strict";n.r(t)},608:(e,t,n)=>{"use strict";n.r(t)},672:(e,t,n)=>{const{routeTo:i}=n(339);Element.prototype.requestFullscreen||(Element.prototype.requestFullscreen=Element.prototype.mozRequestFullscreen||Element.prototype.webkitRequestFullscreen||Element.prototype.msRequestFullscreen),document.exitFullscreen||(document.exitFullscreen=document.mozExitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen),document.fullscreenElement||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}}),Object.defineProperty(document,"fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}})),i("menu")},565:(e,t,n)=>{n.e(673).then((function(){n(110),n(377)})).catch(n.oe);const i=n(451),{globalProps:o,audioManager:l}=n(853),{buildField:a}=n(150);e.exports={template:i,oninit:()=>{document.getElementById("tomenu").addEventListener("click",(()=>{setTimeout((()=>{l("play","menu")}),400)})),a()}}},691:(e,t,n)=>{n(4);const i=n(335),{globalProps:o,audioManager:l}=n(853);e.exports={template:i,oninit:()=>{const e=document.getElementById("author");o.fopen&&(o.fopen=!1,e.style.display="flex");const t=document.getElementById("next");document.addEventListener("click",(function(e){e.target.hasAttribute("data-toggle-fullscreen")&&(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen())}),!1),t.addEventListener("click",(()=>{e.style.display="none",console.log("Start menu"),l("play","menu")}))},soundInterval:void 0}},241:(e,t,n)=>{e.exports={menu:n(691),options:n(853),game:n(565),main_css:n(698),router:n(339)}},853:(e,t,n)=>{n(608);const i=n(250),o={size:4},l={clearPuzzleXY:{x:0,y:0},matrix:[],solution:[],moves:[],timer:0,pause:!0,stop:!0,win:!1,fopen:!0,audioFile:new Audio("/assets/bg-audio.mp3"),sound:!0,gap:0,currEl:void 0,currAnimation:void 0},a=(e,t)=>{const n=document.getElementById("swapsound");switch(e){case"swapsound":case"pause":break;default:switch(t){case"game":l.audioFile.load(),l.audioFile=new Audio("/assets/play-audio.mp3");break;default:l.audioFile.load(),l.audioFile=new Audio("/assets/bg-audio.mp3")}}switch(e){case"pause":l.audioFile.pause();break;case"swapsound":l.sound?(n.innerHTML="volume_off",l.sound=!1,l.audioFile.volume=0):(n.innerHTML="volume_up",l.sound=!0,l.audioFile.volume=1);break;case"stop":l.audioFile.currentTime=0,l.audioFile.pause();break;case"return":l.audioFile.play();case"play":l.sound?(l.sound=!0,l.audioFile.volume=1):(l.sound=!1,l.audioFile.volume=0),l.audioFile.currentTime=0,l.audioFile.addEventListener("ended",(function(){this.currentTime=0,this.play()}),!1),l.audioFile.play()}};e.exports={template:i,options:o,oninit:()=>{const e=document.getElementById("swapsound"),t=document.getElementById("options-select");t.value=o.size.toString(),t.addEventListener("change",(e=>{o.size=Number(e.target.value),console.log(o.size)})),l.sound?e.innerHTML="volume_up":e.innerHTML="volume_off",e.addEventListener("click",(()=>{a("swapsound","options")})),console.log("Start options")},globalProps:l,createApp:()=>{const e=document.body,t=document.createElement("app");e.appendChild(t);const n=document.createElement("div");n.id="app-bg",n.classList.add("area"),n.innerHTML='<ul id="app-bg-circles" class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>',e.appendChild(n);const i=document.createElement("div");i.id="loading",i.innerHTML='<img src="/assets/loading.svg">',e.appendChild(i)},audioManager:a}},150:(e,t,n)=>{const{options:i,globalProps:o,audioManager:l}=n(853);function a(e,t){let n=e-.5+Math.random()*(t-e+1);return Math.round(n)}function s(e){let t,n=[],i=1;for(let o=0;o<e;o++){t=[];for(let n=0;n<e;n++)t.push("P"+i),i++;n.push(t)}return console.log(n),n}function r(e){let t=[];return e.forEach((e=>{t.push(`"${e.join(" ")}"`)})),t.join(" ")}function u(e,t,n){let l=[];var a;e.x-1>=0&&l.push({x:e.x-1,y:e.y,anim:{top:0,left:1}}),e.x+1<=n-1&&l.push({x:e.x+1,y:e.y,anim:{left:-1,top:0}}),e.y-1>=0&&l.push({x:e.x,y:e.y-1,anim:{left:0,top:1}}),e.y+1<=n-1&&l.push({x:e.x,y:e.y+1,anim:{left:0,top:-1}}),a=l,Array.from(document.getElementsByClassName("puzzle-item")).forEach((e=>{e.classList.remove("movable-puzzle")})),document.getElementById("puzzle-field").outerHTML=document.getElementById("puzzle-field").outerHTML,a.forEach((e=>{const t=document.getElementById(o.matrix[e.y][e.x]);t.classList.add("movable-puzzle"),t.addEventListener("click",(()=>{o.currEl=o.matrix[e.y][e.x],function(e){o.moves.push({to:o.clearPuzzleXY,from:e});let t=o.matrix[e.y][e.x];o.matrix[e.y][e.x]=o.matrix[o.clearPuzzleXY.y][o.clearPuzzleXY.x],o.matrix[o.clearPuzzleXY.y][o.clearPuzzleXY.x]=t,o.clearPuzzleXY=e,u(o.clearPuzzleXY,o.matrix,i.size),console.log(o.moves),document.getElementById("move-count").innerHTML=o.moves.length-(13*i.size+5*i.size),o.solution.toString()==o.matrix.toString()&&0==o.pause&&0==o.stop&&g()}(e),p(o.currEl,e.anim)}))}))}function c(e,t,n){let l=[];e.x-1>=0&&l.push({x:e.x-1,y:e.y,anim:{top:0,left:1}}),e.x+1<=n-1&&l.push({x:e.x+1,y:e.y,anim:{left:-1,top:0}}),e.y-1>=0&&l.push({x:e.x,y:e.y-1,anim:{left:0,top:1}}),e.y+1<=n-1&&l.push({x:e.x,y:e.y+1,anim:{left:0,top:-1}}),function(e){o.moves.push({to:o.clearPuzzleXY,from:e});let t=o.matrix[e.y][e.x];o.matrix[e.y][e.x]=o.matrix[o.clearPuzzleXY.y][o.clearPuzzleXY.x],o.matrix[o.clearPuzzleXY.y][o.clearPuzzleXY.x]=t,o.clearPuzzleXY=e,u(o.clearPuzzleXY,o.matrix,i.size),console.log(o.moves),document.getElementById("move-count").innerHTML=o.moves.length-(13*i.size+5*i.size),o.solution.toString()==o.matrix.toString()&&0==o.pause&&0==o.stop&&g()}(l[a(0,l.length-1)])}function d(){setTimeout((()=>{if(!o.pause&&!o.stop){o.timer++;let e=o.timer%60,t=o.timer>=60?(o.timer-e)/60:0;document.getElementById("min").innerHTML=t<10?"0"+t:t,document.getElementById("sec").innerHTML=e<10?"0"+e:e}o.stop||d()}),1e3)}function m(){o.moves.reverse().forEach(((e,t)=>{setTimeout((()=>{o.win||function(e,t){let n=o.matrix[e.y][e.x];o.currEl=o.matrix[e.y][e.x],p(o.currEl,t,-1),o.matrix[e.y][e.x]=o.matrix[o.clearPuzzleXY.y][o.clearPuzzleXY.x],o.matrix[o.clearPuzzleXY.y][o.clearPuzzleXY.x]=n,o.clearPuzzleXY=e,u(o.clearPuzzleXY,o.matrix,i.size),document.getElementById("move-count").innerHTML=o.moves.length,o.solution.toString()==o.matrix.toString()&&0==o.pause&&0==o.stop&&g()}(e.to,e.from.anim)}),320*(t+1))}))}function p(e,t,n=1){if(console.log(e),e){const i=(document.getElementsByClassName("puzzle-item")[0].offsetWidth+5)/300;let l=Date.now(),a=setInterval((function(){let s=Date.now()-l;if(s>=300)return clearInterval(a),void setTimeout((()=>{document.getElementById("puzzle-field").style.gridTemplateAreas=r(o.matrix),document.getElementById(e).style.left="0px",document.getElementById(e).style.top="0px"}),10);!function(o){document.getElementById(e).style.left=o*t.left*n*i+"px",document.getElementById(e).style.top=o*t.top*n*i+"px"}(s)}),10)}e||(document.getElementById("puzzle-field").style.gridTemplateAreas=r(o.matrix)),o.currEl=void 0}function g(){setTimeout((()=>{o.pause=!0,o.win=!0,console.log("You win!")}),100)}t.buildField=()=>{document.getElementById("loading").style.display="flex";const e=document.createElement("canvas"),t=document.getElementById("loading"),n=document.getElementById("revert-btn");e.width=1e3/i.size,e.height=1e3/i.size;var r=e.getContext("2d"),g=new Image;const y=document.getElementById("puzzle-field"),f=i.size**2;y.style.gridTemplateColumns=`repeat(${i.size}, 1fr)`,y.style.gridTemplateRows=`repeat(${i.size}, 1fr)`;var z=0,v=0;g.onload=function(){if(g.height>=g.width)var h=1e3,x=1e3*g.height/g.width;else h=1e3*g.width/g.height,x=1e3;for(let t=1;t<=f;t++){const n=document.createElement("div");n.classList.add("puzzle-item"),n.id="P"+t,r.drawImage(g,z,v,h,x),dataUrl=e.toDataURL("image/png"),n.style.backgroundImage=`url(${dataUrl})`,y.appendChild(n),t%i.size==0?(z=0,v-=1e3/i.size):z-=1e3/i.size}o.clearPuzzleXY={x:a(0,i.size-1),y:a(0,i.size-1)},o.timer=0,o.moves=[],o.win=!1,o.matrix=s(i.size),o.solution=s(i.size),function(){for(let e=0;e<13*i.size+5*i.size;e++)c(o.clearPuzzleXY,o.matrix,i.size);u(o.clearPuzzleXY,o.matrix,i.size),p()}(),document.getElementById(o.matrix[o.clearPuzzleXY.y][o.clearPuzzleXY.x]).classList.add("clear-puzzle"),o.pause=!1,o.stop=!1,n.addEventListener("click",m),setTimeout((()=>{t.style.display="none",l("play","game")}),1e3),o.timer=0,d()},g.src="darth-vader.jpg"}},339:function(e,t,n){const{menu:i,game:o,options:l}=n(241);l.createApp();const a=document.getElementsByTagName("app")[0];function s(e){a.innerHTML=e.template,e.oninit()}document.getElementById("loading"),t.initRoutes=()=>{Array.from(document.querySelectorAll("z-link")).forEach((e=>{e.addEventListener("click",(()=>{this.routeTo(e.getAttribute("to"))}))}))},t.routeTo=e=>{a.style.opacity=0,setTimeout((()=>{switch(e){case"menu":s(i),l.globalProps.pause=!0,l.globalProps.stop=!0;break;case"options":s(l),l.globalProps.pause=!0,l.globalProps.stop=!0;break;case"game":l.audioManager("stop","game"),s(o);break;case"exit":break;default:s(i)}this.initRoutes(),setTimeout((()=>{a.style.opacity=1}),250)}),200)}}},l={};function a(e){if(l[e])return l[e].exports;var t=l[e]={exports:{}};return o[e].call(t.exports,t,t.exports,a),t.exports}return a.m=o,a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+".bundle.js",a.miniCssF=e=>(179===e?"main":e)+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="modules:",a.l=(n,i,o)=>{if(e[n])e[n].push(i);else{var l,s;if(void 0!==o)for(var r=document.getElementsByTagName("script"),u=0;u<r.length;u++){var c=r[u];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+o){l=c;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[i];var d=(t,i)=>{l.onerror=l.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(i))),t)return t(i)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),n=e=>new Promise(((t,n)=>{var i=a.miniCssF(e),o=a.p+i;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=(a=n[i]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){var a;if((o=(a=l[i]).getAttribute("data-href"))===e||o===t)return a}})(i,o))return t();((e,t,n,i)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=l=>{if(o.onerror=o.onload=null,"load"===l.type)n();else{var a=l&&l.target&&l.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,o.parentNode.removeChild(o),i(s)}},o.href=t,document.head.appendChild(o)})(e,o,t,n)})),i={179:0},a.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{673:1}[e]&&t.push(i[e]=n(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={179:0};a.f.j=(t,n)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise(((n,o)=>{i=e[t]=[n,o]}));n.push(i[2]=o);var l=a.p+a.u(t),s=new Error;a.l(l,(n=>{if(a.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",s.name="ChunkLoadError",s.type=o,s.request=l,i[1](s)}}),"chunk-"+t)}};var t=self.webpackChunkmodules=self.webpackChunkmodules||[],n=t.push.bind(t);t.push=t=>{for(var i,o,[l,s,r]=t,u=0,c=[];u<l.length;u++)o=l[u],a.o(e,o)&&e[o]&&c.push(e[o][0]),e[o]=0;for(i in s)a.o(s,i)&&(a.m[i]=s[i]);for(r&&r(a),n(t);c.length;)c.shift()()}})(),a(672)})();