var rover = function (x, y, direction, grid) {
    var _this = this;
    _this.x = x;
    _this.y = y;
    _this.directionPair = getDirectionPairFromCardinal(direction);
    _this.grid = grid;

    function commandSequence(sequence) {
        
    }
    
    function getDirection() {
        
    }

    function getDirectionPairFromCardinal(direction) {

    }

    return {
        setCommandSequence: commandSequence,
        isFacing: getDirection
    };
};