require('./score.css');
const template = require('./score.html');

const OnInit = () => {
    const scoreList = document.getElementById('scorelist');
    const scores = JSON.parse(window.localStorage.getItem('score'));
    if (scores) scores.forEach((element, index) => {
        const div = document.createElement('div');
        div.classList.add('scorelist-content');
        let num = document.createElement('div');
        num.classList.add('scl-h-ul');
        num.innerHTML = index + 1;
        div.appendChild(num);
        let date = document.createElement('div');
        date.classList.add('scl-h-ul');
        date.innerHTML = element.date;
        div.appendChild(date);
        let time = document.createElement('div');
        time.classList.add('scl-h-ul');
        let sec = element.time % 60;
        let min = element.time >= 60 ? (element.time - sec) / 60 : 0;
        time.innerHTML = `${min}:${sec}`;
        div.appendChild(time);
        let moves = document.createElement('div');
        moves.classList.add('scl-h-ul');
        moves.innerHTML = element.moves;
        div.appendChild(moves);
        scoreList.appendChild(div);
        let currscore = document.createElement('div');
        currscore.classList.add('scl-h-ul');
        currscore.innerHTML = element.score.toFixed(4) * 10000;
        div.appendChild(currscore);
        scoreList.appendChild(div);
    });
    console.log('Start score');
}

module.exports = {
    template: template,
    oninit: OnInit
}