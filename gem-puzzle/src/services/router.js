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
                app.innerHTML = menu.template;
                menu.oninit();
                break;
            case 'options':
                app.innerHTML = options.template;
                options.oninit();
                break;
            case 'game':
                app.innerHTML = game.template;
                game.oninit();
                break;
            default:
                app.innerHTML = menu.template;
                menu.oninit();
                break;
        }
        this.initRoutes();
        setTimeout(() => {
            app.style.opacity = 1;
        }, 250);
    }, 200);
}