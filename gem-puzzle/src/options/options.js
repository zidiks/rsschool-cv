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




const OnInit = () => {
    console.log('Start options');
}

module.exports = {
    template: template,
    options: options,
    oninit: OnInit,
    globalProps: globalProps
}