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

    return {
        getGrid: getGridBack
    }
};
