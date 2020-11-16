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
        let scoreList = [];
        if (window.localStorage.getItem('score')) {
            scoreList = JSON.parse(window.localStorage.getItem('score'));
        } else {
            scoreList = [];
        }
        let date = new Date;
        scoreList.push({
            time: globalProps.timer,
            moves: globalProps.movesCount,
            date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
            score: (globalProps.timer ** (-1)) * 0.4 + (globalProps.movesCount ** (-1) * 0.6)
        });
        window.localStorage.setItem('score', JSON.stringify(scoreList.sort((a, b) => {
            if (b.score < a.score) {
                return -1;
            }
            if (a.score > b.score) {
                return 1;
            }
            return 0;
        }).slice(0, 10)));
        saveResult.style.backgroundColor = '#3aa82e';
        saveResult.style.color = 'white';
        saveResult.innerHTML = 'Saved';
        saveResult.disabled = true;
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
        if (!globalProps.autocomplete) {
            globalProps.pause = true;
            pauseLayout.style.display = 'block';
        }
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