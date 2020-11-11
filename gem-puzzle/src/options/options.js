require('./options.css');
const template = require('./options.html');

const options = {
    size: 8
}

const globalProps = {
    clearPuzzleXY: {
        x: 0,
        y: 0
    },
    matrix: [],
    solution: [],
    moves: [],
    timer: 0,
    pause: true,
    stop: true,
    win: false,
    fopen: true,
    audioFile: new Audio('/assets/bg-audio.mp3'),
    playAudio: new Audio('/assets/play-audio.mp3'),
    gap: 0,
    gameInterval: undefined,
    currEl: undefined,
    currAnimation: undefined
}

const CreateApp = () => {
    const body = document.body;
    const appel = document.createElement('app');
    body.appendChild(appel);
    const bgdiv = document.createElement('div');
    bgdiv.id = 'app-bg';
    bgdiv.classList.add('area');
    bgdiv.innerHTML = '<ul id="app-bg-circles" class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>'
    body.appendChild(bgdiv);
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.innerHTML = '<img src="/assets/loading.svg">';
    body.appendChild(loading);
}


const OnInit = () => {
    console.log('Start options');
}

module.exports = {
    template: template,
    options: options,
    oninit: OnInit,
    globalProps: globalProps,
    createApp: CreateApp
}