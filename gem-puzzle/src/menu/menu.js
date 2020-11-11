require('./menu.css');
const template = require('./menu.html');
const { globalProps } = require('../options/options');
var soundInterval;

const OnInit = () => {
    const author = document.getElementById('author');
    if (globalProps.fopen) {
        globalProps.fopen = false;
        author.style.display = 'flex';
    }
    const next = document.getElementById('next');

    document.addEventListener('click', function(event) {
        if (!event.target.hasAttribute('data-toggle-fullscreen')) return;

        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }

    }, false);

    next.addEventListener('click', () => {
        author.style.display = 'none';
        console.log('Start menu');
        globalProps.audioFile.currentTime = 0;
        globalProps.audioFile.play();
        soundInterval = setInterval(() => {
            if (globalProps.stop == true) {
                globalProps.audioFile.currentTime = 0;
                globalProps.audioFile.play();
            } else {
                clearInterval(soundInterval);
            }
        }, 42670);
    })
}

module.exports = {
    template: template,
    oninit: OnInit,
    soundInterval: soundInterval
}