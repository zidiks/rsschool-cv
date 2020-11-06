const { options } = require('../options/options')

exports.buildField = () => {
    const canv = document.createElement('canvas');
    canv.width = 1000 / options.size;
    canv.height = 1000 / options.size;
    var context = canv.getContext('2d');
    var imageObj = new Image();

    const puzzleField = document.getElementById('puzzle-field');
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
            puzzle.id = index;

            context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight);

            dataUrl = canv.toDataURL('image/png');
            puzzle.style.backgroundImage = `url(${dataUrl})`;

            puzzleField.appendChild(puzzle);

            console.log(index);
            if (index % options.size == 0) {
                sourceX = 0;
                sourceY -= 1000 / options.size;
            } else {
                sourceX -= 1000 / options.size;
            }

        }
        //document.getElementById('7').style.opacity = 0;
    };

    imageObj.src = 'darth-vader.jpg';
}