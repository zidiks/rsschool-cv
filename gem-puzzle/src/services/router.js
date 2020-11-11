const { menu, game, options } = require('../modules');

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
                options.globalProps.playAudio.currentTime = 0;
                options.globalProps.playAudio.pause();
                if (options.globalProps.fopen) {
                    options.globalProps.audioFile.currentTime = 0;
                    options.globalProps.audioFile.play();
                    var soundMenuInterval = setInterval(() => {
                        if (options.globalProps.stop == true) {
                            options.globalProps.audioFile.currentTime = 0;
                            options.globalProps.audioFile.play();
                        } else {
                            clearInterval(soundMenuInterval);
                        }
                    }, 42670);
                }
                break;
            case 'options':
                swapHTML(options);
                options.globalProps.pause = true;
                options.globalProps.stop = true;
                break;
            case 'game':
                options.globalProps.audioFile.currentTime = 0;
                options.globalProps.audioFile.pause();
                clearInterval(menu.soundInterval);
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