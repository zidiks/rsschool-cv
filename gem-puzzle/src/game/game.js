require(['./game.css', './items-areas.css']);
const template = require('./game.html');
const { globalProps, audioManager } = require('../options/options');
const { buildField } = require('../services/puzzle-service');


const OnInit = () => {
    const swapsound = document.getElementById('swapsound');
    const tomenu = document.getElementById('tomenu');
    const tomenuu = document.getElementById('tomenu');
    const topause = document.getElementById('topause');
    const pauseLayout = document.getElementById('game-layout');
    const returnBtn = document.getElementById('return-game');
    topause.addEventListener('click', () => {
        globalProps.pause = true;
        pauseLayout.style.display = 'block';
    })
    returnBtn.addEventListener('click', () => {
        globalProps.pause = false;
        pauseLayout.style.display = 'none';
    })
    tomenu.addEventListener('click', () => {
        setTimeout(() => {
            audioManager('play', 'menu');
        }, 100);
    })
    tomenuu.addEventListener('click', () => {
        setTimeout(() => {
            audioManager('play', 'menu');
        }, 100);
    })
    swapsound.addEventListener('click', () => {
        audioManager('swapsound', 'game');
    })
    if (globalProps.sound) {
        swapsound.innerHTML = 'volume_up';
    } else {
        swapsound.innerHTML = 'volume_off';
    }
    buildField();
}

module.exports = {
    template: template,
    oninit: OnInit
}