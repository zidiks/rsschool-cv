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
    stop: true
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