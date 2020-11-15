require(['./game.css', './items-areas.css']);
const template = require('./game.html');
const { globalProps, audioManager, options } = require('../options/options');
const { buildField } = require('../services/puzzle-service');
const { getStrMatrix } = require('../services/puzzle-service');


const OnInit = () => {
    const swapsound = document.getElementById('swapsound');
    const tomenu = document.getElementById('tomenu');
    const tomenuu = document.getElementById('tomenu-win');
    const topause = document.getElementById('topause');
    const pauseLayout = document.getElementById('game-layout');
    const returnBtn = document.getElementById('return-game');
    const saveResult = document.getElementById('save-result');
    const saveProgress = document.getElementById('save-progress');
    saveResult.addEventListener('click', () => {
        saveResult.style.backgroundColor = '#3aa82e';
        saveResult.style.color = 'white';
        saveResult.innerHTML = 'Saved';
    })
    saveProgress.addEventListener('click', () => {
        const progress = {
            matrix: globalProps.matrix,
            size: options.size,
            movesCount: globalProps.movesCount,
            moves: globalProps.moves,
            time: globalProps.timer,
            clearPuzzleXY: globalProps.clearPuzzleXY
        }
        saveProgress.style.backgroundColor = '#3aa82e';
        saveProgress.style.color = 'white';
        saveProgress.innerHTML = 'Saved';
        window.localStorage.setItem('progress', JSON.stringify(progress));
    })
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