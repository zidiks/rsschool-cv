require('./options.css');
const template = require('./options.html');
const gameStorage = window.localStorage;

const options = {
    size: gameStorage.getItem('size') ? Number(gameStorage.getItem('size')) : 4,
    savedGame: undefined
}

const globalProps = {
    clearPuzzleXY: {
        x: 0,
        y: 0
    },
    matrix: [],
    solution: [],
    moves: [],
    movesCount: 0,
    timer: 0,
    pause: true,
    stop: true,
    win: false,
    fopen: true,
    audioFile: new Audio('/assets/bg-audio.mp3'),
    moveAudio: new Audio('/assets/move.mp3'),
    sound: gameStorage.getItem('sound') ? getSoundBol(gameStorage.getItem('sound')) : true,
    gap: 0,
    currEl: undefined,
    currAnimation: undefined,
    autocomplete: false
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

function getSoundBol(str) {
    switch (str) {
        case 'false':
            return false
        default:
            return true
    }
}


const OnInit = () => {
    const swapsound = document.getElementById('swapsound');
    const sizeSelect = document.getElementById('options-select');
    sizeSelect.value = options.size.toString();
    sizeSelect.addEventListener('change', (e) => {
        options.size = Number(e.target.value);
        gameStorage.setItem('size', options.size);
        console.log(options.size);
    })
    if (globalProps.sound) {
        swapsound.innerHTML = 'volume_up';
    } else {
        swapsound.innerHTML = 'volume_off';
    }
    swapsound.addEventListener('click', () => {
        audioManager('swapsound', 'options');
    })
    console.log('Start options');
}

const audioManager = (action, page) => {
    const swapsound = document.getElementById('swapsound');
    switch (action) {
        case 'swapsound':
        case 'pause':
            break;
        default:
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
            break;
    }
    switch (action) {
        case 'pause':
            globalProps.audioFile.pause();
            break;
        case 'swapsound':
            if (globalProps.sound) {
                swapsound.innerHTML = 'volume_off';
                globalProps.sound = false;
                globalProps.audioFile.volume = 0;
            } else {
                swapsound.innerHTML = 'volume_up';
                globalProps.sound = true;
                globalProps.audioFile.volume = 1;
            }
            gameStorage.setItem('sound', globalProps.sound);
            break;
        case 'stop':
            globalProps.audioFile.currentTime = 0;
            globalProps.audioFile.pause();
            break;
        case 'return':
            globalProps.audioFile.play();
        case 'play':
            if (globalProps.sound) {
                globalProps.sound = true;
                globalProps.audioFile.volume = 1;
            } else {
                globalProps.sound = false;
                globalProps.audioFile.volume = 0;
            }
            globalProps.audioFile.currentTime = 0;
            globalProps.audioFile.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            setTimeout(() => {
                globalProps.audioFile.play();
            }, 300);
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