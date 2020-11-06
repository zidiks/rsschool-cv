const { menu, game, options } = require('../modules');

const app = document.getElementsByTagName('app')[0];


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
                break;
            case 'options':
                swapHTML(options);
                break;
            case 'game':
                swapHTML(game);
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