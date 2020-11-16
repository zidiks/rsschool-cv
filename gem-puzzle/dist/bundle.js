var modules;modules=(()=>{var e,t,n,o,s={451:e=>{e.exports='<section id="game"> <div id="game-nav"> <span id="topause" class="game-nav-link game-nav-btn"><i class="material-icons">pause_circle_outline</i></span> <span class="game-nav-link" id=""><i style="margin-right:.2rem" class="material-icons">swap_horiz</i> <span id="move-count">0</span></span> <span class="game-nav-link" id=""><i style="margin-right:.2rem" class="material-icons">watch_later</i> <span id="min">00</span> : <span id="sec">00</span></span> <span class="game-nav-link game-nav-btn" id="revert-btn"><i class="material-icons">support</i></span> </div> <div id="puzzle-field"></div> <div id="game-layout"> <section id="menu" class="game-pause-menu"> <div id="menu-links"> <h1>Pause</h1> <span id="return-game" class="z-link-p options-btn options-toggle">Return</span> <span id="save-progress" class="z-link-p options-btn options-toggle">Save progress</span> <span class="z-link-p options-btn">Sound <span id="swapsound" class="material-icons options-toggle">volume_up</span></span> <z-link id="tomenu" to="menu" class="z-link-p">Exit</z-link> </div> <div id="author"> <h1>Created by Zidiks with love <span class="material-icons author-heart">favorite</span></h1> <span id="next" data-toggle-fullscreen>Play<i class="material-icons">navigate_next</i></span> </div> </section> </div> <div id="game-win"> <span style="font-size:1.8vw;margin-bottom:1rem;font-weight:600">Уou solved the puzzle! </span> <span>Time <span id="sol-min"></span>:<span id="sol-sec"></span></span> <span>Moves <span id="sol-moves"></span></span> <span id="save-result" style="margin-left:0" class="z-link-p options-btn options-toggle">Save result</span> <z-link style="font-size:1.5vw" id="tomenu-win" to="menu" class="z-link-p">Go to menu</z-link> </div> </section>'},335:e=>{e.exports='<section id="menu"> <div id="menu-links"> <h1>Gem-Puzzle<br>by Zidiks</h1> <z-link to="game" class="z-link-p">New game</z-link> <z-link id="load-progress" to="saved-game" class="z-link-p">Load progress</z-link> <z-link to="score" class="z-link-p">Score</z-link> <z-link to="options" class="z-link-p">Options</z-link> <z-link to="exit" class="z-link-p" data-toggle-fullscreen>Exit</z-link> </div> <div id="menu-logo"> <img src="/assets/logo.svg" alt="Zidiks"> </div> <div id="author"> <h1>Created by Zidiks with love <span class="material-icons author-heart">favorite</span></h1> <span id="next" data-toggle-fullscreen>Play<i class="material-icons">navigate_next</i></span> </div> </section>'},250:e=>{e.exports='<section id="menu"> <div id="menu-links"> <h1>Options</h1> <span class="z-link-p options-btn">Sound <span id="swapsound" class="material-icons options-toggle">volume_up</span></span> <span class="z-link-p options-btn">Field size <span> <select class="options-toggle" id="options-select"> <option value="4">4х4</option> <option value="5">5х5</option> <option value="6">6х6</option> <option value="7">7х7</option> <option value="8">8х8</option> <option value="9">9х9</option> </select> </span></span> <span class="z-link-p options-btn">Image <span class="material-icons options-toggle">insert_photo</span></span> <z-link to="menu" class="z-link-p">Back</z-link> </div> <div id="menu-logo"> <img src="/assets/settings.svg" alt="Zidiks"> </div> <div id="author"> <h1>Created by Zidiks with love <span class="material-icons author-heart">favorite</span></h1> <span id="next" data-toggle-fullscreen>Play<i class="material-icons">navigate_next</i></span> </div> </section>'},20:e=>{e.exports='<section id="menu"> <div id="menu-links"> <h1>Score</h1> <z-link to="menu" class="z-link-p">Back</z-link> </div> <div id="menu-logo"> <div id="scorelist"> <div class="scorelist-header"> <div class="scl-h-ul">#</div> <div class="scl-h-ul">DATE</div> <div class="scl-h-ul">TIME</div> <div class="scl-h-ul">MOVES</div> <div class="scl-h-ul">SCORE</div> </div> <div class="scorelist-content"> </div> </div> </div> </section>'},698:(e,t,n)=>{"use strict";n.r(t)},4:(e,t,n)=>{"use strict";n.r(t)},608:(e,t,n)=>{"use strict";n.r(t)},247:(e,t,n)=>{"use strict";n.r(t)},672:(e,t,n)=>{const{routeTo:o}=n(339);Element.prototype.requestFullscreen||(Element.prototype.requestFullscreen=Element.prototype.mozRequestFullscreen||Element.prototype.webkitRequestFullscreen||Element.prototype.msRequestFullscreen),document.exitFullscreen||(document.exitFullscreen=document.mozExitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen),document.fullscreenElement||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}}),Object.defineProperty(document,"fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}})),o("menu")},565:(e,t,n)=>{n.e(673).then((function(){n(110),n(377)})).catch(n.oe);const o=n(451),{globalProps:s,audioManager:i,options:l}=n(853),{buildField:a}=n(150),{getStrMatrix:r}=n(150);e.exports={template:o,oninit:()=>{const e=document.getElementById("swapsound"),t=document.getElementById("tomenu"),n=document.getElementById("tomenu-win"),o=document.getElementById("topause"),r=document.getElementById("game-layout"),d=document.getElementById("return-game"),u=document.getElementById("save-result"),m=document.getElementById("save-progress");u.addEventListener("click",(()=>{let e=[];e=window.localStorage.getItem("score")?JSON.parse(window.localStorage.getItem("score")):[];let t=new Date;e.push({time:s.timer,moves:s.movesCount,date:`${t.getDate()}-${t.getMonth()}-${t.getFullYear()}`,score:s.timer**-1*.4+s.movesCount**-1*.6}),window.localStorage.setItem("score",JSON.stringify(e.sort(((e,t)=>t.score<e.score?-1:e.score>t.score?1:0)).slice(0,10))),u.style.backgroundColor="#3aa82e",u.style.color="white",u.innerHTML="Saved",u.disabled=!0})),m.addEventListener("click",(()=>{const e={matrix:s.matrix,size:l.size,movesCount:s.movesCount,moves:s.moves,time:s.timer,clearPuzzleXY:s.clearPuzzleXY};m.style.backgroundColor="#3aa82e",m.style.color="white",m.innerHTML="Saved",window.localStorage.setItem("progress",JSON.stringify(e))})),o.addEventListener("click",(()=>{s.autocomplete||(s.pause=!0,r.style.display="block")})),d.addEventListener("click",(()=>{s.pause=!1,r.style.display="none"})),t.addEventListener("click",(()=>{setTimeout((()=>{i("play","menu")}),100)})),n.addEventListener("click",(()=>{setTimeout((()=>{i("play","menu")}),100)})),e.addEventListener("click",(()=>{i("swapsound","game")})),s.sound?e.innerHTML="volume_up":e.innerHTML="volume_off",a()}}},691:(e,t,n)=>{n(4);const o=n(335),{globalProps:s,audioManager:i}=n(853);e.exports={template:o,oninit:()=>{const e=document.getElementById("author");s.fopen&&(s.fopen=!1,e.style.display="flex");const t=document.getElementById("next");document.addEventListener("click",(function(e){e.target.hasAttribute("data-toggle-fullscreen")&&(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen())}),!1),t.addEventListener("click",(()=>{e.style.display="none",console.log("Start menu"),i("play","menu")})),window.localStorage.getItem("progress")?document.getElementById("load-progress").style.display="block":document.getElementById("load-progress").style.display="none"},soundInterval:void 0}},241:(e,t,n)=>{e.exports={menu:n(691),options:n(853),game:n(565),score:n(269),main_css:n(698),router:n(339)}},853:(e,t,n)=>{n(608);const o=n(250),s=window.localStorage,i={size:s.getItem("size")?Number(s.getItem("size")):4,savedGame:void 0},l={clearPuzzleXY:{x:0,y:0},matrix:[],solution:[],moves:[],movesCount:0,timer:0,pause:!0,stop:!0,win:!1,fopen:!0,audioFile:new Audio("/assets/bg-audio.mp3"),moveAudio:new Audio("/assets/move.mp3"),sound:!s.getItem("sound")||function(e){switch(e){case"false":return!1;default:return!0}}(s.getItem("sound")),gap:0,currEl:void 0,currAnimation:void 0,autocomplete:!1,blockanim:!1,blockmove:!0,lock:!1,xpercent:0,ypercent:0},a=(e,t)=>{const n=document.getElementById("swapsound");switch(e){case"swapsound":case"pause":break;default:switch(t){case"game":l.audioFile.load(),l.audioFile=new Audio("/assets/play-audio.mp3");break;default:l.audioFile.load(),l.audioFile=new Audio("/assets/bg-audio.mp3")}}switch(e){case"pause":l.audioFile.pause();break;case"swapsound":l.sound?(n.innerHTML="volume_off",l.sound=!1,l.audioFile.volume=0):(n.innerHTML="volume_up",l.sound=!0,l.audioFile.volume=1),s.setItem("sound",l.sound);break;case"stop":l.audioFile.currentTime=0,l.audioFile.pause();break;case"return":l.audioFile.play();case"play":l.sound?(l.sound=!0,l.audioFile.volume=1):(l.sound=!1,l.audioFile.volume=0),l.audioFile.currentTime=0,l.audioFile.addEventListener("ended",(function(){this.currentTime=0,this.play()}),!1),setTimeout((()=>{l.audioFile.play()}),300)}};e.exports={template:o,options:i,oninit:()=>{const e=document.getElementById("swapsound"),t=document.getElementById("options-select");t.value=i.size.toString(),t.addEventListener("change",(e=>{i.size=Number(e.target.value),s.setItem("size",i.size),console.log(i.size)})),l.sound?e.innerHTML="volume_up":e.innerHTML="volume_off",e.addEventListener("click",(()=>{a("swapsound","options")})),console.log("Start options")},globalProps:l,createApp:()=>{const e=document.body,t=document.createElement("app");e.appendChild(t);const n=document.createElement("div");n.id="app-bg",n.classList.add("area"),n.innerHTML='<ul id="app-bg-circles" class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>',e.appendChild(n);const o=document.createElement("div");o.id="loading",o.innerHTML='<img src="/assets/loading.svg">',e.appendChild(o)},audioManager:a}},269:(e,t,n)=>{n(247);const o=n(20);e.exports={template:o,oninit:()=>{const e=document.getElementById("scorelist"),t=JSON.parse(window.localStorage.getItem("score"));t&&t.forEach(((t,n)=>{const o=document.createElement("div");o.classList.add("scorelist-content");let s=document.createElement("div");s.classList.add("scl-h-ul"),s.innerHTML=n+1,o.appendChild(s);let i=document.createElement("div");i.classList.add("scl-h-ul"),i.innerHTML=t.date,o.appendChild(i);let l=document.createElement("div");l.classList.add("scl-h-ul");let a=t.time%60,r=t.time>=60?(t.time-a)/60:0;l.innerHTML=`${r}:${a}`,o.appendChild(l);let d=document.createElement("div");d.classList.add("scl-h-ul"),d.innerHTML=t.moves,o.appendChild(d),e.appendChild(o);let u=document.createElement("div");u.classList.add("scl-h-ul"),u.innerHTML=Math.round(1e4*t.score.toFixed(4)),o.appendChild(u),e.appendChild(o)})),console.log("Start score")}}},150:(e,t,n)=>{const{options:o,globalProps:s,audioManager:i}=n(853);function l(e,t){let n=e-.5+Math.random()*(t-e+1);return Math.round(n)}function a(e){let t,n=[],o=1;for(let s=0;s<e;s++){t=[];for(let n=0;n<e;n++)t.push("P"+o),o++;n.push(t)}return n}function r(e){let t=[];return e.forEach((e=>{t.push(`"${e.join(" ")}"`)})),t.join(" ")}function d(e,t,n){let i=[];var l;e.x-1>=0&&i.push({x:e.x-1,y:e.y,anim:{top:0,left:1}}),e.x+1<=n-1&&i.push({x:e.x+1,y:e.y,anim:{left:-1,top:0}}),e.y-1>=0&&i.push({x:e.x,y:e.y-1,anim:{left:0,top:1}}),e.y+1<=n-1&&i.push({x:e.x,y:e.y+1,anim:{left:0,top:-1}}),l=i,Array.from(document.getElementsByClassName("puzzle-item")).forEach((e=>{e.classList.remove("movable-puzzle")})),document.getElementById("puzzle-field").outerHTML=document.getElementById("puzzle-field").outerHTML,l.forEach((e=>{const t=document.getElementById(s.matrix[e.y][e.x]);t.classList.add("movable-puzzle"),t.addEventListener("mousedown",(n=>{t.ondragstart=function(){return!1},s.blockmove=!1;const o=document.getElementsByClassName("puzzle-item")[0].offsetWidth+3,i=n.pageX,l=n.pageY;function a(n){t.ondragstart=function(){return!1};let a=e.anim.left<0?i-n.pageX<0?0:Math.abs((i-n.pageX)/o):e.anim.left>0&&i-n.pageX>0?0:Math.abs((i-n.pageX)/o),r=e.anim.top<0?l-n.pageY<0?0:Math.abs((l-n.pageY)/o):e.anim.top>0&&l-n.pageY>0?0:Math.abs((l-n.pageY)/o);a=a<0?0:a>1?1:a,r=r<0?0:r>1?1:r,s.xpercent=a,s.ypercent=r,(a>.1||r>.1)&&(s.blockanim=!0),s.blockmove||(document.getElementById(t.id).style.left=e.anim.left*a*o+"px",document.getElementById(t.id).style.top=e.anim.top*r*o+"px")}document.addEventListener("mousemove",a),document.getElementById("puzzle-field").onmouseup=function(e){!function(e,t){if(!s.lock){var n=document.createEvent("MouseEvents");n.initEvent("mouseup",!0,!0),e.dispatchEvent(n),s.lock=!0,setTimeout((()=>{s.lock=!1}),100)}}(t),document.getElementById(t.id).style.left="0px",document.getElementById(t.id).style.top="0px",document.removeEventListener("mousemove",a),t.onmouseup=null,s.blockanim=!1}})),t.addEventListener("mouseup",(()=>{s.lock||(s.currEl=s.matrix[e.y][e.x],(s.xpercent>.5||s.ypercent>.5||0==s.blockanim)&&function(e){s.moveAudio.currentTime=0,s.sound&&s.moveAudio.play(),setTimeout((()=>{s.moveAudio.pause()}),400),s.movesCount++,s.moves.push({to:s.clearPuzzleXY,from:e});let t=s.matrix[e.y][e.x];s.matrix[e.y][e.x]=s.matrix[s.clearPuzzleXY.y][s.clearPuzzleXY.x],s.matrix[s.clearPuzzleXY.y][s.clearPuzzleXY.x]=t,s.clearPuzzleXY=e,d(s.clearPuzzleXY,s.matrix,o.size),document.getElementById("move-count").innerHTML=s.movesCount,s.solution.toString()==s.matrix.toString()&&0==s.pause&&0==s.stop&&g()}(e),p(s.currEl,e.anim),s.blockmove=!0,s.lock=!0,setTimeout((()=>{s.lock=!1}),200))}))}))}function u(e,t,n){let i=[];e.x-1>=0&&i.push({x:e.x-1,y:e.y,anim:{top:0,left:1}}),e.x+1<=n-1&&i.push({x:e.x+1,y:e.y,anim:{left:-1,top:0}}),e.y-1>=0&&i.push({x:e.x,y:e.y-1,anim:{left:0,top:1}}),e.y+1<=n-1&&i.push({x:e.x,y:e.y+1,anim:{left:0,top:-1}}),function(e){s.moves.push({to:s.clearPuzzleXY,from:e});let t=s.matrix[e.y][e.x];s.matrix[e.y][e.x]=s.matrix[s.clearPuzzleXY.y][s.clearPuzzleXY.x],s.matrix[s.clearPuzzleXY.y][s.clearPuzzleXY.x]=t,s.clearPuzzleXY=e,d(s.clearPuzzleXY,s.matrix,o.size),document.getElementById("move-count").innerHTML=s.movesCount,s.solution.toString()==s.matrix.toString()&&0==s.pause&&0==s.stop&&g()}(i[l(0,i.length-1)])}function m(){setTimeout((()=>{if(!s.pause&&!s.stop){s.timer++;let e=s.timer%60,t=s.timer>=60?(s.timer-e)/60:0;document.getElementById("min").innerHTML=t<10?"0"+t:t,document.getElementById("sec").innerHTML=e<10?"0"+e:e}s.stop||m()}),1e3)}function c(){s.autocomplete=!0,s.moves.reverse().forEach(((e,t)=>{setTimeout((()=>{s.win||function(e,t){s.movesCount++;let n=s.matrix[e.y][e.x];s.currEl=s.matrix[e.y][e.x],p(s.currEl,t,-1),s.matrix[e.y][e.x]=s.matrix[s.clearPuzzleXY.y][s.clearPuzzleXY.x],s.matrix[s.clearPuzzleXY.y][s.clearPuzzleXY.x]=n,s.clearPuzzleXY=e,d(s.clearPuzzleXY,s.matrix,o.size),document.getElementById("move-count").innerHTML=s.movesCount,s.solution.toString()==s.matrix.toString()&&0==s.pause&&0==s.stop&&g()}(e.to,e.from.anim)}),320*(t+1))}))}function p(e,t,n=1){if(e&&!s.blockanim){const o=(document.getElementsByClassName("puzzle-item")[0].offsetWidth+5)/300;let i=Date.now(),l=setInterval((function(){let a=Date.now()-i;if(a>=300)return clearInterval(l),void setTimeout((()=>{document.getElementById("puzzle-field").style.gridTemplateAreas=r(s.matrix),document.getElementById(e).style.left="0px",document.getElementById(e).style.top="0px"}),10);!function(s){document.getElementById(e).style.left=s*t.left*n*o+"px",document.getElementById(e).style.top=s*t.top*n*o+"px"}(a)}),10)}e&&s.blockanim&&(document.getElementById("puzzle-field").style.gridTemplateAreas=r(s.matrix)),e||(document.getElementById("puzzle-field").style.gridTemplateAreas=r(s.matrix)),s.currEl=void 0}function g(){s.pause=!0,s.win=!0,setTimeout((()=>{let e=s.timer%60,t=s.timer>=60?(s.timer-e)/60:0;document.getElementById("sol-min").innerHTML=t<10?"0"+t:t,document.getElementById("sol-sec").innerHTML=e<10?"0"+e:e,document.getElementById("sol-moves").innerHTML=s.movesCount;const n=document.getElementById("puzzle-field");n.style.backgroundColor="rgba(255, 255, 255, 1)";for(var o=document.getElementsByClassName("puzzle-item"),i=0;i<o.length;i++)o[i].style.opacity="0";n.style.boxShadow="0px 0px 50px white",n.style.setProperty("grid-column-gap","0"),n.style.setProperty("grid-row-gap","0"),setTimeout((()=>{n.style.backgroundColor="rgba(255, 255, 255, 0)";for(var e=document.getElementsByClassName("puzzle-item"),t=0;t<e.length;t++)e[t].style.opacity="1";n.style.boxShadow="0px 0px 50px black"}),1500),setTimeout((()=>{document.getElementById("game-win").style.display="flex"}),3500)}),100)}t.buildField=()=>{document.getElementById("loading").style.display="flex";const e=document.createElement("canvas"),t=document.getElementById("loading"),n=document.getElementById("revert-btn");e.width=1e3/o.size,e.height=1e3/o.size;var g=e.getContext("2d"),v=new Image;const y=document.getElementById("puzzle-field"),z=o.size**2;y.style.gridTemplateColumns=`repeat(${o.size}, 1fr)`,y.style.gridTemplateRows=`repeat(${o.size}, 1fr)`;var h=0,f=0;v.onload=function(){if(v.height>=v.width)var E=1e3,x=1e3*v.height/v.width;else E=1e3*v.width/v.height,x=1e3;for(let t=1;t<=z;t++){const n=document.createElement("div");n.classList.add("puzzle-item"),n.id="P"+t,g.drawImage(v,h,f,E,x),dataUrl=e.toDataURL("image/png"),n.style.backgroundImage=`url(${dataUrl})`,y.appendChild(n),t%o.size==0?(h=0,f-=1e3/o.size):h-=1e3/o.size}s.clearPuzzleXY=o.savedGame?o.savedGame.clearPuzzleXY:{x:l(0,o.size-1),y:l(0,o.size-1)},s.timer=o.savedGame?o.savedGame.time:0,s.moves=o.savedGame?o.savedGame.moves:[],s.movesCount=o.savedGame?o.savedGame.movesCount:0,s.win=!1,s.blockanim=!1,s.autocomplete=!1,s.blockmove=!0,s.matrix=a(o.size),s.solution=a(o.size),function(){if(o.savedGame)document.getElementById("move-count").innerHTML=s.movesCount,s.matrix=o.savedGame.matrix,d(s.clearPuzzleXY,s.matrix,o.size),document.getElementById("puzzle-field").style.gridTemplateAreas=r(s.matrix),o.savedGame=void 0;else{window.localStorage.removeItem("progress");for(let e=0;e<13*o.size+5*o.size;e++)u(s.clearPuzzleXY,s.matrix,o.size);d(s.clearPuzzleXY,s.matrix,o.size),p()}}(),document.getElementById(s.matrix[s.clearPuzzleXY.y][s.clearPuzzleXY.x]).classList.add("clear-puzzle"),s.pause=!1,s.stop=!1,n.addEventListener("click",c),setTimeout((()=>{t.style.display="none",i("play","game")}),1e3),m()},v.src="darth-vader.jpg"},t.getStrMatrix=()=>r(s.matrix)},339:function(e,t,n){const{menu:o,game:s,options:i,score:l}=n(241);i.createApp();const a=document.getElementsByTagName("app")[0];function r(e){a.innerHTML=e.template,e.oninit()}document.getElementById("loading"),t.initRoutes=()=>{Array.from(document.querySelectorAll("z-link")).forEach((e=>{e.addEventListener("click",(()=>{this.routeTo(e.getAttribute("to"))}))}))},t.routeTo=e=>{a.style.opacity=0,setTimeout((()=>{switch(e){case"menu":r(o),i.globalProps.pause=!0,i.globalProps.stop=!0;break;case"score":r(l),i.globalProps.pause=!0,i.globalProps.stop=!0;break;case"options":r(i),i.globalProps.pause=!0,i.globalProps.stop=!0;break;case"saved-game":i.options.savedGame=JSON.parse(window.localStorage.getItem("progress")),console.log(i.options.savedGame),i.options.size=i.options.savedGame.size,i.audioManager("stop","game"),r(s);break;case"game":i.audioManager("stop","game"),r(s);break;case"exit":break;default:r(o)}this.initRoutes(),setTimeout((()=>{a.style.opacity=1}),250)}),200)}}},i={};function l(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return s[e].call(t.exports,t,t.exports,l),t.exports}return l.m=s,l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>e+".bundle.js",l.miniCssF=e=>(179===e?"main":e)+".css",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="modules:",l.l=(n,o,s)=>{if(e[n])e[n].push(o);else{var i,a;if(void 0!==s)for(var r=document.getElementsByTagName("script"),d=0;d<r.length;d++){var u=r[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){i=u;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[o];var m=(t,o)=>{i.onerror=i.onload=null,clearTimeout(c);var s=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((e=>e(o))),t)return t(o)},c=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),a&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),n=e=>new Promise(((t,n)=>{var o=l.miniCssF(e),s=l.p+o;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var s=(l=n[o]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===e||s===t))return l}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var l;if((s=(l=i[o]).getAttribute("data-href"))===e||s===t)return l}})(o,s))return t();((e,t,n,o)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onerror=s.onload=i=>{if(s.onerror=s.onload=null,"load"===i.type)n();else{var l=i&&i.target&&i.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=l,s.parentNode.removeChild(s),o(a)}},s.href=t,document.head.appendChild(s)})(e,s,t,n)})),o={179:0},l.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{673:1}[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={179:0};l.f.j=(t,n)=>{var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var s=new Promise(((n,s)=>{o=e[t]=[n,s]}));n.push(o[2]=s);var i=l.p+l.u(t),a=new Error;l.l(i,(n=>{if(l.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,o[1](a)}}),"chunk-"+t)}};var t=self.webpackChunkmodules=self.webpackChunkmodules||[],n=t.push.bind(t);t.push=t=>{for(var o,s,[i,a,r]=t,d=0,u=[];d<i.length;d++)s=i[d],l.o(e,s)&&e[s]&&u.push(e[s][0]),e[s]=0;for(o in a)l.o(a,o)&&(l.m[o]=a[o]);for(r&&r(l),n(t);u.length;)u.shift()()}})(),l(672)})();