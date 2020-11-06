const { options } = require('../options/options')

exports.sliceImg = () => {
    const canv = document.createElement('canvas');
    //canv.id = "SlicerCanv";
    canv.width = 1000 / options.size;
    canv.height = 1000 / options.size;
    canv.style.background = 'black';
    var context = canv.getContext('2d');

    var imageObj = new Image();
    imageObj.onload = function() {
        var sourceX = -500;
        var sourceY = 0;
        if (imageObj.height >= imageObj.width) {
            var sourceWidth = 1000;
            var sourceHeight = 1000 * imageObj.height / imageObj.width;
        } else {
            var sourceWidth = 1000 * imageObj.width / imageObj.height;
            var sourceHeight = 1000;
        }
        context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight);

        dataUrl = canv.toDataURL('image/png');
        document.getElementById('puzzle-item').style.backgroundImage = `url(${dataUrl})`;
    };
    imageObj.src = 'darth-vader.jpg';
}

exports.buildField = () => {
    const puzzleField = document.getElementById('puzzle-field');
    const size = options.size ** 2;
    puzzleField.style.gridTemplateColumns = `repeat(${options.size}, 1fr)`;
    puzzleField.style.gridTemplateRows = `repeat(${options.size}, 1fr)`;
}