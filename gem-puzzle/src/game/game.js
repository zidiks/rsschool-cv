require('./game.css');
const template = require('./game.html');
const { options } = require('../options/options');
const { sliceImg, buildField } = require('../services/puzzle-service');


const OnInit = () => {
    sliceImg();
    buildField();
}

module.exports = {
    template: template,
    oninit: OnInit
}