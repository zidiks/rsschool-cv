require(['./game.css', './items-areas.css']);
const template = require('./game.html');
const { globalProps, audioManager } = require('../options/options');
const { buildField } = require('../services/puzzle-service');


const OnInit = () => {
    const tomenu = document.getElementById('tomenu');
    tomenu.addEventListener('click', () => {
        setTimeout(() => {
            audioManager('play', 'menu');
        }, 400);
    })
    buildField();
}

module.exports = {
    template: template,
    oninit: OnInit
}