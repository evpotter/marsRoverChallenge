var rover = function (x, y, direction, grid) {
    var _this = this;
    _this.x = x;
    _this.y = y;
    _this.directionPair = setDirectionPairFromCardinal(direction);
    _this.grid = grid;

    function commandSequence(sequence) {
        sequence.forEach(runCommand);
    }

    function runCommand(command) {
        if(command == 'f' || command == 'b') {
            moveCommand(command);
        } else {
            turnCommand(command);
        }
    }

    function moveCommand(command) {
        var axis = _this.directionPair.axis;
        var mag = _this.directionPair.mag;
        var moveFunc;
        if(command == 'f') {
            moveFunc = moveForward;
        } else {
            moveFunc = moveBack;
        }

        if(axis == 'x') {
            _this.x = moveFunc(_this.x, mag);
        } else {
            _this.y = moveFunc(_this.y, mag);
        }
    }

    function moveForward(pos, mag) {
        return pos + mag;
    }

    function moveBack(pos, mag) {
        return pos - mag;
    }

    function turnCommand(command) {
        var axis = _this.directionPair.axis;

        if(axis == 'x') {
            _this.directionPair.axis = y;
            if(command == 'r') {
                _this.directionPair.mag *= -1;
            }
        } else {
            _this.directionPair.axis = x;
            if(command == 'l') {
                _this.directionPair.mag *= -1;
            }
        }
    }
    
    function getDirection() {
        if(_this.directionPair.axis == 'x') {
            if(_this.directionPair.mag) {
                return 'e'
            } else {
                return 'w'
            }
        } else {
            if(_this.directionPair.mag) {
                return 'n'
            } else {
                return 's'
            }
        }
    }

    function setDirectionPairFromCardinal(direction) {
        if(direction == 'n') {
            return {axis: 'y', mag: 1}
        }

        if(direction == 's') {
            return {axis: 'y', mag: -1}
        }

        if(direction == 'e') {
            return {axis: 'x', mag: 1}
        }

        if(direction == 'w') {
            return {axis: 'y', mag: -1}
        }

        return "incorrect direction";
    }

    return {
        setCommandSequence: commandSequence,
        isFacing: getDirection
    };
};