require('./options.css');
const template = require('./options.html');

const options = {
    size: 4
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
    gap: 0,
    currPage: undefined,
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

const audioManager = (action, page) => {
    switch (page) {
        case 'game':
            globalProps.audioFile.load();
            globalProps.audioFile = new Audio('/assets/play-audio.mp3');
            break;
        default:
            globalProps.audioFile.load();
            globalProps.audioFile = new Audio('/assets/bg-audio.mp3');
            break;
    }
    switch (action) {
        case 'pause':
            globalProps.audioFile.pause();
            break;
        case 'stop':
            globalProps.audioFile.currentTime = 0;
            globalProps.audioFile.pause();
            break;
        case 'return':
            globalProps.audioFile.play();
        case 'play':
            globalProps.audioFile.currentTime = 0;
            globalProps.audioFile.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            globalProps.audioFile.play();
            break;
    }
}

module.exports = {
    template: template,
    options: options,
    oninit: OnInit,
    globalProps: globalProps,
    createApp: CreateApp,
    audioManager: audioManager
}