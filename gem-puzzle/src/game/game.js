require('./game.css');
const template = require('./game.html');
const { options } = require('../options/options');
const { buildField } = require('../services/puzzle-service');


const OnInit = () => {
    buildField();
}

module.exports = {
    template: template,
    oninit: OnInit
}