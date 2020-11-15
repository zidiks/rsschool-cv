require('./menu.css');
const template = require('./menu.html');
const { globalProps, audioManager } = require('../options/options');
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
        audioManager('play', 'menu');
    })
    if (window.localStorage.getItem('progress')) document.getElementById('load-progress').style.display = 'block';
    else document.getElementById('load-progress').style.display = 'none';
}

module.exports = {
    template: template,
    oninit: OnInit,
    soundInterval: soundInterval
}