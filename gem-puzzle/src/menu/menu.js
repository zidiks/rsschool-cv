require('./menu.css');
const template = require('./menu.html');

const OnInit = () => {
    console.log('Start menu');
}

module.exports = {
    template: template,
    oninit: OnInit
}