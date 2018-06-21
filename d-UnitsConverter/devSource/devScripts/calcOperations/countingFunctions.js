let countingEngineOfConverter = {
    howMuchOfBasicIsIt(unit, system) {
        let refer ='';
        let num = 1;
        while (refer !== 'basic') {
            num = num*system[unit][1];
            refer = system[unit][0];
            unit = refer;
        }
        return num;
    },
    converter(pocket, unitToConvert, unitConverted, system) {
        return pocket * (this.howMuchOfBasicIsIt(unitToConvert, system) / this.howMuchOfBasicIsIt(unitConverted, system));
    },
    sideOfSquare(pocket, unitToConvert, unitConverted, system) {
        let sideOfSquareSurfaceEqualToPocket = Math.sqrt(pocket);
        let sideInOutputUnit = this.converter(sideOfSquareSurfaceEqualToPocket, unitToConvert, unitConverted, system);
        return sideInOutputUnit;
    },
    edgeOfCube(pocket, unitToConvert, unitConverted, system) {
        let edgeOfCubeEqualToPocket = Math.pow(pocket, 1 / 3);
        let edgeInOutputUnit = this.converter(edgeOfCubeEqualToPocket, unitToConvert, unitConverted, system);
        return edgeInOutputUnit;
    },
    square(pocket, unitToConvert, unitConverted, system) {
        let convertedSquareSide = this.sideOfSquare(pocket, unitToConvert, unitConverted, system);
        let convertedSquare = Math.pow(convertedSquareSide, 2);
        return convertedSquare;
    },
    cube(pocket, unitToConvert, unitConverted, system) {
        let convertedCubeEdge = this.edgeOfCube(pocket, unitToConvert, unitConverted, system);
        let convertedCube = Math.pow(convertedCubeEdge, 3);
        return convertedCube;
    },
    convertToNewUnit(system, pocket, input, output){
        return this.converter(pocket, input, output, system);
    },
    squareToNewUnit(system, pocket, input, output){
        return this.square(pocket, input, output, system);
    },
    cubeToNewUnit (system, pocket, input, output){
        return this.cube(pocket, input, output, system);
    }
};
export {
    countingEngineOfConverter as calc
};
