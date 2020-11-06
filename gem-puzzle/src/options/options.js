require('./options.css');
const template = require('./options.html');

const options = {
    size: 2
}

const OnInit = () => {
    console.log('Start options');
}

module.exports = {
    template: template,
    options: options,
    oninit: OnInit
}