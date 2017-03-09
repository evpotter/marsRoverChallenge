var grid = function (height, width) {
    var _this = this;
    _this.height = height;
    _this.width = width;
    _this.grid = makeGrid();

    function makeGrid() {
        var gridArray = [];
        for(var i = 0; i < _this.height; i++) {
            var heightArray = [];
            for(var j = 0; j < _this.width; j++) {
                heightArray.push(0);
            }

            gridArray.push(heightArray);
        }

        return gridArray;
    }

    function getGridBack() {
        return _this.grid;
    }

    function checkCoord(x, y) {
        return _this.grid[x][y];
    }

    function getx(x) {
        var newx = x % _this.width;
        if(newx < 0)
            newx = _this.width + newx;

        return newx;
    }

    function gety(y) {
        var newy = y % _this.height;
        if(newy < 0)
            newy = _this.height + newy;

        return newy;
    }

    return {
        getGrid: getGridBack,
        checkCoordinates: checkCoord,
        getX: getx,
        getY: gety
    }
};
