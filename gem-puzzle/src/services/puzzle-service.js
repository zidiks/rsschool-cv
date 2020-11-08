const { options, globalProps } = require('../options/options')

exports.buildField = () => {
    const canv = document.createElement('canvas');
    canv.width = 1000 / options.size;
    canv.height = 1000 / options.size;
    var context = canv.getContext('2d');
    var imageObj = new Image();

    const puzzleField = document.getElementById('puzzle-field');
    let puzzleMatrix;
    const size = options.size ** 2;
    puzzleField.style.gridTemplateColumns = `repeat(${options.size}, 1fr)`;
    puzzleField.style.gridTemplateRows = `repeat(${options.size}, 1fr)`;

    var sourceX = 0;
    var sourceY = 0;

    imageObj.onload = function() {
        if (imageObj.height >= imageObj.width) {
            var sourceWidth = 1000;
            var sourceHeight = 1000 * imageObj.height / imageObj.width;
        } else {
            var sourceWidth = 1000 * imageObj.width / imageObj.height;
            var sourceHeight = 1000;
        }

        for (let index = 1; index <= size; index++) {
            const puzzle = document.createElement('div');
            puzzle.classList.add('puzzle-item');
            puzzle.id = `P${index}`;

            context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight);

            dataUrl = canv.toDataURL('image/png');
            puzzle.style.backgroundImage = `url(${dataUrl})`;

            puzzleField.appendChild(puzzle);

            if (index % options.size == 0) {
                sourceX = 0;
                sourceY -= 1000 / options.size;
            } else {
                sourceX -= 1000 / options.size;
            }

        }

        globalProps.clearPuzzleXY = {
            x: randomInteger(0, options.size - 1),
            y: randomInteger(0, options.size - 1)
        }

        globalProps.moves = [];
        globalProps.timer = 0;

        globalProps.matrix = createMatrix(options.size);
        globalProps.solution = createMatrix(options.size);
        document.getElementById('puzzle-field').style.gridTemplateAreas = fromMatrix(globalProps.matrix);
        document.getElementById(globalProps.matrix[globalProps.clearPuzzleXY.y][globalProps.clearPuzzleXY.x]).classList.add('clear-puzzle');
        getMovable(globalProps.clearPuzzleXY, globalProps.matrix, options.size);
        globalProps.pause = false;
        globalProps.stop = false;
        timer();
    };

    imageObj.src = 'darth-vader.jpg';
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function createMatrix(size) {

    let matrix = [];
    let lineArray;
    let id = 1;
    for (let index = 0; index < size; index++) {
        lineArray = [];
        for (let i = 0; i < size; i++) {
            lineArray.push(`P${id}`);
            id++;
        }
        matrix.push(lineArray);
    }
    console.log(matrix);
    return matrix;
}

function fromMatrix(matrix) {
    let templateAreas = [];
    matrix.forEach(element => {
        templateAreas.push(`"${element.join(' ')}"`)
    });
    return templateAreas.join(' ');
}

function getMovable(clearPuzzleXY, puzzleMatrix, size) {
    let movEls = [];

    if (clearPuzzleXY.x - 1 >= 0) {
        movEls.push({
            x: clearPuzzleXY.x - 1,
            y: clearPuzzleXY.y
        });
    }
    if (clearPuzzleXY.x + 1 <= size - 1) {
        movEls.push({
            x: clearPuzzleXY.x + 1,
            y: clearPuzzleXY.y
        });
    }
    if (clearPuzzleXY.y - 1 >= 0) {
        movEls.push({
            x: clearPuzzleXY.x,
            y: clearPuzzleXY.y - 1
        });
    }
    if (clearPuzzleXY.y + 1 <= size - 1) {
        movEls.push({
            x: clearPuzzleXY.x,
            y: clearPuzzleXY.y + 1
        });
    }

    addMoveListener(movEls);
}

function addMoveListener(array) {
    Array.from(document.getElementsByClassName('puzzle-item')).forEach(item => {
        item.classList.remove('movable-puzzle');
    });
    document.getElementById('puzzle-field').outerHTML = document.getElementById('puzzle-field').outerHTML;
    array.forEach(element => {
        const el = document.getElementById(globalProps.matrix[element.y][element.x]);
        el.classList.add('movable-puzzle');
        el.addEventListener('click', () => {
            moveFunc(element);
        })
    });
    document.getElementById('puzzle-field').style.gridTemplateAreas = fromMatrix(globalProps.matrix);
}

function moveFunc(element) {
    globalProps.moves.push({
        to: globalProps.clearPuzzleXY,
        from: element
    })
    let cache = globalProps.matrix[element.y][element.x];
    globalProps.matrix[element.y][element.x] = globalProps.matrix[globalProps.clearPuzzleXY.y][globalProps.clearPuzzleXY.x];
    globalProps.matrix[globalProps.clearPuzzleXY.y][globalProps.clearPuzzleXY.x] = cache;
    globalProps.clearPuzzleXY = element;
    getMovable(globalProps.clearPuzzleXY, globalProps.matrix, options.size);
    console.log(globalProps.moves);
    document.getElementById('move-count').innerHTML = globalProps.moves.length;
    if (globalProps.solution.toString() == globalProps.matrix.toString()) {
        setTimeout(() => {
            alert('You win!');
        }, 100);
    }
}

function timer() {
    globalProps.timer = 0;
    timerUp();
}

function timerUp() {
    setTimeout(() => {
        if (!globalProps.pause && !globalProps.stop) {
            globalProps.timer++;
            let sec = globalProps.timer % 60;
            let min = globalProps.timer >= 60 ? (globalProps.timer - sec) / 60 : 0;
            document.getElementById('min').innerHTML = min < 10 ? `0${min}` : min;
            document.getElementById('sec').innerHTML = sec < 10 ? `0${sec}` : sec;
        }
        if (!globalProps.stop) timerUp();
    }, 1000);
}

function Randomizer() {}