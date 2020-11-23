const { menu, game, options, score } = require('../modules');

options.createApp();

const app = document.getElementsByTagName('app')[0];
const loading = document.getElementById('loading');


exports.initRoutes = () => {
    Array.from(document.querySelectorAll('z-link')).forEach(element => {
        element.addEventListener('click', () => {
            this.routeTo(element.getAttribute('to'));
        })
    });

}

exports.routeTo = (route) => {
    app.style.opacity = 0;
    setTimeout(() => {
        switch (route) {
            case 'menu':
                swapHTML(menu);
                options.globalProps.pause = true;
                options.globalProps.stop = true;
                break;
            case 'score':
                swapHTML(score);
                options.globalProps.pause = true;
                options.globalProps.stop = true;
                break;
            case 'options':
                swapHTML(options);
                options.globalProps.pause = true;
                options.globalProps.stop = true;
                break;
            case 'saved-game':
                options.options.savedGame = JSON.parse(window.localStorage.getItem('progress'));
                console.log(options.options.savedGame);
                options.options.size = options.options.savedGame.size;
                options.audioManager('stop', 'game');
                swapHTML(game);
                break;
            case 'game':
                options.audioManager('stop', 'game');
                swapHTML(game);
                break;
            case 'exit':
                break;
            default:
                swapHTML(menu);
                break;
        }
        this.initRoutes();
        setTimeout(() => {
            app.style.opacity = 1;
        }, 250);
    }, 200);
}

function swapHTML(tmpl) {
    app.innerHTML = tmpl.template;
    tmpl.oninit();
}