var modules;modules=(()=>{var e,t,n,o,i={451:e=>{e.exports='<section id="game"> <div id="game-nav"> <span id="topause" class="game-nav-link game-nav-btn"><i class="material-icons">pause_circle_outline</i></span> <span class="game-nav-link" id=""><i style="margin-right:.2rem" class="material-icons">swap_horiz</i> <span id="move-count">0</span></span> <span class="game-nav-link" id=""><i style="margin-right:.2rem" class="material-icons">watch_later</i> <span id="min">00</span> : <span id="sec">00</span></span> <span class="game-nav-link game-nav-btn" id="revert-btn"><i class="material-icons">support</i></span> </div> <div id="puzzle-field"></div> <div id="game-layout"> <section id="menu" class="game-pause-menu"> <div id="menu-links"> <h1>Pause</h1> <span id="return-game" class="z-link-p options-btn options-toggle">Return</span> <span class="z-link-p options-btn options-toggle">Save progress</span> <span class="z-link-p options-btn">Sound <span id="swapsound" class="material-icons options-toggle">volume_up</span></span> <z-link id="tomenu" to="menu" class="z-link-p">Exit</z-link> </div> <div id="author"> <h1>Created by Zidiks with love <span class="material-icons author-heart">favorite</span></h1> <span id="next" data-toggle-fullscreen>Play<i class="material-icons">navigate_next</i></span> </div> </section> </div> <div id="game-win"> <span style="font-size:1.8vw;margin-bottom:1rem;font-weight:600">Уou solved the puzzle! </span> <span>Time <span id="sol-min"></span>:<span id="sol-sec"></span></span> <span>Moves <span id="sol-moves"></span></span> <span id="save-result" style="margin-left:0" class="z-link-p options-btn options-toggle">Save result</span> <z-link style="font-size:1.5vw" id="tomenuu" to="menu" class="z-link-p">Go to menu</z-link> </div> </section>'},335:e=>{e.exports='<section id="menu"> <div id="menu-links"> <h1>Gem-Puzzle<br>by Zidiks</h1> <z-link to="game" class="z-link-p">Play</z-link> <z-link to="menu" class="z-link-p">Score</z-link> <z-link to="options" class="z-link-p">Options</z-link> <z-link to="exit" class="z-link-p" data-toggle-fullscreen>Exit</z-link> </div> <div id="menu-logo"> <img src="/assets/logo.svg" alt="Zidiks"> </div> <div id="author"> <h1>Created by Zidiks with love <span class="material-icons author-heart">favorite</span></h1> <span id="next" data-toggle-fullscreen>Play<i class="material-icons">navigate_next</i></span> </div> </section>'},250:e=>{e.exports='<section id="menu"> <div id="menu-links"> <h1>Options</h1> <span class="z-link-p options-btn">Sound <span id="swapsound" class="material-icons options-toggle">volume_up</span></span> <span class="z-link-p options-btn">Field size <span> <select class="options-toggle" id="options-select"> <option value="4">4х4</option> <option value="5">5х5</option> <option value="6">6х6</option> <option value="7">7х7</option> <option value="8">8х8</option> <option value="9">9х9</option> </select> </span></span> <span class="z-link-p options-btn">Image <span class="material-icons options-toggle">insert_photo</span></span> <z-link to="menu" class="z-link-p">Back</z-link> </div> <div id="menu-logo"> <img src="/assets/settings.svg" alt="Zidiks"> </div> <div id="author"> <h1>Created by Zidiks with love <span class="material-icons author-heart">favorite</span></h1> <span id="next" data-toggle-fullscreen>Play<i class="material-icons">navigate_next</i></span> </div> </section>'},698:(e,t,n)=>{"use strict";n.r(t)},4:(e,t,n)=>{"use strict";n.r(t)},608:(e,t,n)=>{"use strict";n.r(t)},672:(e,t,n)=>{const{routeTo:o}=n(339);Element.prototype.requestFullscreen||(Element.prototype.requestFullscreen=Element.prototype.mozRequestFullscreen||Element.prototype.webkitRequestFullscreen||Element.prototype.msRequestFullscreen),document.exitFullscreen||(document.exitFullscreen=document.mozExitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen),document.fullscreenElement||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}}),Object.defineProperty(document,"fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}})),o("menu")},565:(e,t,n)=>{n.e(673).then((function(){n(110),n(377)})).catch(n.oe);const o=n(451),{globalProps:i,audioManager:s}=n(853),{buildField:l}=n(150);e.exports={template:o,oninit:()=>{const e=document.getElementById("swapsound"),t=document.getElementById("tomenu"),n=document.getElementById("tomenu"),o=document.getElementById("topause"),a=document.getElementById("game-layout"),r=document.getElementById("return-game"),u=document.getElementById("save-result");u.addEventListener("click",(()=>{u.style.backgroundColor="#3aa82e",u.style.color="white",u.innerHTML="Saved"})),o.addEventListener("click",(()=>{i.pause=!0,a.style.display="block"})),r.addEventListener("click",(()=>{i.pause=!1,a.style.display="none"})),t.addEventListener("click",(()=>{setTimeout((()=>{s("play","menu")}),100)})),n.addEventListener("click",(()=>{setTimeout((()=>{s("play","menu")}),100)})),e.addEventListener("click",(()=>{s("swapsound","game")})),i.sound?e.innerHTML="volume_up":e.innerHTML="volume_off",l()}}},691:(e,t,n)=>{n(4);const o=n(335),{globalProps:i,audioManager:s}=n(853);e.exports={template:o,oninit:()=>{const e=document.getElementById("author");i.fopen&&(i.fopen=!1,e.style.display="flex");const t=document.getElementById("next");document.addEventListener("click",(function(e){e.target.hasAttribute("data-toggle-fullscreen")&&(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen())}),!1),t.addEventListener("click",(()=>{e.style.display="none",console.log("Start menu"),s("play","menu")}))},soundInterval:void 0}},241:(e,t,n)=>{e.exports={menu:n(691),options:n(853),game:n(565),main_css:n(698),router:n(339)}},853:(e,t,n)=>{n(608);const o=n(250),i=window.localStorage,s={size:i.getItem("size")?Number(i.getItem("size")):4},l={clearPuzzleXY:{x:0,y:0},matrix:[],solution:[],moves:[],movesCount:0,timer:0,pause:!0,stop:!0,win:!1,fopen:!0,audioFile:new Audio("/assets/bg-audio.mp3"),sound:!i.getItem("sound")||function(e){switch(e){case"false":return!1;default:return!0}}(i.getItem("sound")),gap:0,currEl:void 0,currAnimation:void 0},a=(e,t)=>{const n=document.getElementById("swapsound");switch(e){case"swapsound":case"pause":break;default:switch(t){case"game":l.audioFile.load(),l.audioFile=new Audio("/assets/play-audio.mp3");break;default:l.audioFile.load(),l.audioFile=new Audio("/assets/bg-audio.mp3")}}switch(e){case"pause":l.audioFile.pause();break;case"swapsound":l.sound?(n.innerHTML="volume_off",l.sound=!1,l.audioFile.volume=0):(n.innerHTML="volume_up",l.sound=!0,l.audioFile.volume=1),i.setItem("sound",l.sound);break;case"stop":l.audioFile.currentTime=0,l.audioFile.pause();break;case"return":l.audioFile.play();case"play":l.sound?(l.sound=!0,l.audioFile.volume=1):(l.sound=!1,l.audioFile.volume=0),l.audioFile.currentTime=0,l.audioFile.addEventListener("ended",(function(){this.currentTime=0,this.play()}),!1),setTimeout((()=>{l.audioFile.play()}),300)}};e.exports={template:o,options:s,oninit:()=>{const e=document.getElementById("swapsound"),t=document.getElementById("options-select");t.value=s.size.toString(),t.addEventListener("change",(e=>{s.size=Number(e.target.value),i.setItem("size",s.size),console.log(s.size)})),l.sound?e.innerHTML="volume_up":e.innerHTML="volume_off",e.addEventListener("click",(()=>{a("swapsound","options")})),console.log("Start options")},globalProps:l,createApp:()=>{const e=document.body,t=document.createElement("app");e.appendChild(t);const n=document.createElement("div");n.id="app-bg",n.classList.add("area"),n.innerHTML='<ul id="app-bg-circles" class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>',e.appendChild(n);const o=document.createElement("div");o.id="loading",o.innerHTML='<img src="/assets/loading.svg">',e.appendChild(o)},audioManager:a}},150:(e,t,n)=>{const{options:o,globalProps:i,audioManager:s}=n(853);function l(e,t){let n=e-.5+Math.random()*(t-e+1);return Math.round(n)}function a(e){let t,n=[],o=1;for(let i=0;i<e;i++){t=[];for(let n=0;n<e;n++)t.push("P"+o),o++;n.push(t)}return console.log(n),n}function r(e){let t=[];return e.forEach((e=>{t.push(`"${e.join(" ")}"`)})),t.join(" ")}function u(e,t,n){let s=[];var l;e.x-1>=0&&s.push({x:e.x-1,y:e.y,anim:{top:0,left:1}}),e.x+1<=n-1&&s.push({x:e.x+1,y:e.y,anim:{left:-1,top:0}}),e.y-1>=0&&s.push({x:e.x,y:e.y-1,anim:{left:0,top:1}}),e.y+1<=n-1&&s.push({x:e.x,y:e.y+1,anim:{left:0,top:-1}}),l=s,Array.from(document.getElementsByClassName("puzzle-item")).forEach((e=>{e.classList.remove("movable-puzzle")})),document.getElementById("puzzle-field").outerHTML=document.getElementById("puzzle-field").outerHTML,l.forEach((e=>{const t=document.getElementById(i.matrix[e.y][e.x]);t.classList.add("movable-puzzle"),t.addEventListener("click",(()=>{i.currEl=i.matrix[e.y][e.x],function(e){i.movesCount++,i.moves.push({to:i.clearPuzzleXY,from:e});let t=i.matrix[e.y][e.x];i.matrix[e.y][e.x]=i.matrix[i.clearPuzzleXY.y][i.clearPuzzleXY.x],i.matrix[i.clearPuzzleXY.y][i.clearPuzzleXY.x]=t,i.clearPuzzleXY=e,u(i.clearPuzzleXY,i.matrix,o.size),console.log(i.moves),document.getElementById("move-count").innerHTML=i.movesCount,i.solution.toString()==i.matrix.toString()&&0==i.pause&&0==i.stop&&g()}(e),p(i.currEl,e.anim)}))}))}function d(e,t,n){let s=[];e.x-1>=0&&s.push({x:e.x-1,y:e.y,anim:{top:0,left:1}}),e.x+1<=n-1&&s.push({x:e.x+1,y:e.y,anim:{left:-1,top:0}}),e.y-1>=0&&s.push({x:e.x,y:e.y-1,anim:{left:0,top:1}}),e.y+1<=n-1&&s.push({x:e.x,y:e.y+1,anim:{left:0,top:-1}}),function(e){i.moves.push({to:i.clearPuzzleXY,from:e});let t=i.matrix[e.y][e.x];i.matrix[e.y][e.x]=i.matrix[i.clearPuzzleXY.y][i.clearPuzzleXY.x],i.matrix[i.clearPuzzleXY.y][i.clearPuzzleXY.x]=t,i.clearPuzzleXY=e,u(i.clearPuzzleXY,i.matrix,o.size),console.log(i.moves),document.getElementById("move-count").innerHTML=i.movesCount,i.solution.toString()==i.matrix.toString()&&0==i.pause&&0==i.stop&&g()}(s[l(0,s.length-1)])}function c(){setTimeout((()=>{if(!i.pause&&!i.stop){i.timer++;let e=i.timer%60,t=i.timer>=60?(i.timer-e)/60:0;document.getElementById("min").innerHTML=t<10?"0"+t:t,document.getElementById("sec").innerHTML=e<10?"0"+e:e}i.stop||c()}),1e3)}function m(){i.moves.reverse().forEach(((e,t)=>{setTimeout((()=>{i.win||function(e,t){i.movesCount++;let n=i.matrix[e.y][e.x];i.currEl=i.matrix[e.y][e.x],p(i.currEl,t,-1),i.matrix[e.y][e.x]=i.matrix[i.clearPuzzleXY.y][i.clearPuzzleXY.x],i.matrix[i.clearPuzzleXY.y][i.clearPuzzleXY.x]=n,i.clearPuzzleXY=e,u(i.clearPuzzleXY,i.matrix,o.size),document.getElementById("move-count").innerHTML=i.movesCount,i.solution.toString()==i.matrix.toString()&&0==i.pause&&0==i.stop&&g()}(e.to,e.from.anim)}),320*(t+1))}))}function p(e,t,n=1){if(console.log(e),e){const o=(document.getElementsByClassName("puzzle-item")[0].offsetWidth+5)/300;let s=Date.now(),l=setInterval((function(){let a=Date.now()-s;if(a>=300)return clearInterval(l),void setTimeout((()=>{document.getElementById("puzzle-field").style.gridTemplateAreas=r(i.matrix),document.getElementById(e).style.left="0px",document.getElementById(e).style.top="0px"}),10);!function(i){document.getElementById(e).style.left=i*t.left*n*o+"px",document.getElementById(e).style.top=i*t.top*n*o+"px"}(a)}),10)}e||(document.getElementById("puzzle-field").style.gridTemplateAreas=r(i.matrix)),i.currEl=void 0}function g(){i.pause=!0,i.win=!0,setTimeout((()=>{let e=i.timer%60,t=i.timer>=60?(i.timer-e)/60:0;document.getElementById("sol-min").innerHTML=t<10?"0"+t:t,document.getElementById("sol-sec").innerHTML=e<10?"0"+e:e,document.getElementById("sol-moves").innerHTML=i.movesCount;const n=document.getElementById("puzzle-field");n.style.backgroundColor="rgba(255, 255, 255, 1)";for(var o=document.getElementsByClassName("puzzle-item"),s=0;s<o.length;s++)o[s].style.opacity="0";n.style.boxShadow="0px 0px 50px white",n.style.setProperty("grid-column-gap","0"),n.style.setProperty("grid-row-gap","0"),setTimeout((()=>{n.style.backgroundColor="rgba(255, 255, 255, 0)";for(var e=document.getElementsByClassName("puzzle-item"),t=0;t<e.length;t++)e[t].style.opacity="1";n.style.boxShadow="0px 0px 50px black"}),1500),setTimeout((()=>{document.getElementById("game-win").style.display="flex"}),3500)}),100)}t.buildField=()=>{document.getElementById("loading").style.display="flex";const e=document.createElement("canvas"),t=document.getElementById("loading"),n=document.getElementById("revert-btn");e.width=1e3/o.size,e.height=1e3/o.size;var r=e.getContext("2d"),g=new Image;const y=document.getElementById("puzzle-field"),v=o.size**2;y.style.gridTemplateColumns=`repeat(${o.size}, 1fr)`,y.style.gridTemplateRows=`repeat(${o.size}, 1fr)`;var z=0,f=0;g.onload=function(){if(g.height>=g.width)var h=1e3,x=1e3*g.height/g.width;else h=1e3*g.width/g.height,x=1e3;for(let t=1;t<=v;t++){const n=document.createElement("div");n.classList.add("puzzle-item"),n.id="P"+t,r.drawImage(g,z,f,h,x),dataUrl=e.toDataURL("image/png"),n.style.backgroundImage=`url(${dataUrl})`,y.appendChild(n),t%o.size==0?(z=0,f-=1e3/o.size):z-=1e3/o.size}i.clearPuzzleXY={x:l(0,o.size-1),y:l(0,o.size-1)},i.timer=0,i.moves=[],i.movesCount=0,i.win=!1,i.matrix=a(o.size),i.solution=a(o.size),function(){for(let e=0;e<13*o.size+5*o.size;e++)d(i.clearPuzzleXY,i.matrix,o.size);u(i.clearPuzzleXY,i.matrix,o.size),p()}(),document.getElementById(i.matrix[i.clearPuzzleXY.y][i.clearPuzzleXY.x]).classList.add("clear-puzzle"),i.pause=!1,i.stop=!1,n.addEventListener("click",m),setTimeout((()=>{t.style.display="none",s("play","game")}),1e3),i.timer=0,c()},g.src="darth-vader.jpg"}},339:function(e,t,n){const{menu:o,game:i,options:s}=n(241);s.createApp();const l=document.getElementsByTagName("app")[0];function a(e){l.innerHTML=e.template,e.oninit()}document.getElementById("loading"),t.initRoutes=()=>{Array.from(document.querySelectorAll("z-link")).forEach((e=>{e.addEventListener("click",(()=>{this.routeTo(e.getAttribute("to"))}))}))},t.routeTo=e=>{l.style.opacity=0,setTimeout((()=>{switch(e){case"menu":a(o),s.globalProps.pause=!0,s.globalProps.stop=!0;break;case"options":a(s),s.globalProps.pause=!0,s.globalProps.stop=!0;break;case"game":s.audioManager("stop","game"),a(i);break;case"exit":break;default:a(o)}this.initRoutes(),setTimeout((()=>{l.style.opacity=1}),250)}),200)}}},s={};function l(e){if(s[e])return s[e].exports;var t=s[e]={exports:{}};return i[e].call(t.exports,t,t.exports,l),t.exports}return l.m=i,l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>e+".bundle.js",l.miniCssF=e=>(179===e?"main":e)+".css",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="modules:",l.l=(n,o,i)=>{if(e[n])e[n].push(o);else{var s,a;if(void 0!==i)for(var r=document.getElementsByTagName("script"),u=0;u<r.length;u++){var d=r[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[o];var c=(t,o)=>{s.onerror=s.onload=null,clearTimeout(m);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(o))),t)return t(o)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=c.bind(null,s.onerror),s.onload=c.bind(null,s.onload),a&&document.head.appendChild(s)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),n=e=>new Promise(((t,n)=>{var o=l.miniCssF(e),i=l.p+o;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=(l=n[o]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===e||i===t))return l}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){var l;if((i=(l=s[o]).getAttribute("data-href"))===e||i===t)return l}})(o,i))return t();((e,t,n,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=s=>{if(i.onerror=i.onload=null,"load"===s.type)n();else{var l=s&&s.target&&s.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=l,i.parentNode.removeChild(i),o(a)}},i.href=t,document.head.appendChild(i)})(e,i,t,n)})),o={179:0},l.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{673:1}[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={179:0};l.f.j=(t,n)=>{var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((n,i)=>{o=e[t]=[n,i]}));n.push(o[2]=i);var s=l.p+l.u(t),a=new Error;l.l(s,(n=>{if(l.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,o[1](a)}}),"chunk-"+t)}};var t=self.webpackChunkmodules=self.webpackChunkmodules||[],n=t.push.bind(t);t.push=t=>{for(var o,i,[s,a,r]=t,u=0,d=[];u<s.length;u++)i=s[u],l.o(e,i)&&e[i]&&d.push(e[i][0]),e[i]=0;for(o in a)l.o(a,o)&&(l.m[o]=a[o]);for(r&&r(l),n(t);d.length;)d.shift()()}})(),l(672)})();