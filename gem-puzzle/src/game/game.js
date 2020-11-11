require(['./game.css', './items-areas.css']);
const template = require('./game.html');
const { globalProps } = require('../options/options');
const { buildField } = require('../services/puzzle-service');


const OnInit = () => {
    const tomenu = document.getElementById('tomenu');
    tomenu.addEventListener('click', () => {
        setTimeout(() => {
            globalProps.audioFile.currentTime = 0;
            globalProps.audioFile.play();
        }, 400);
    })
    buildField();
}

module.exports = {
    template: template,
    oninit: OnInit
}