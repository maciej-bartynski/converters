//This looks quite ridiculos: each "if" statement do exactly the same. Why?
//Whole module comes from previous (and pre-previous) version of app,
//where data were always stored as 'length', even if concerned
//square or cubic units (in that case length was 'side of square' or 'edge of cube',
//eg. ar (100square meters) was stored as its own side, such is 10meters, and 
//according to it, 'litr' (1 cubic dm) was stored as its edge, 10cm).
//Every operation in app required reconstructing appropriate sqare or cubic unit
//from side (or edge) length, or in reverse, reconstructing length from squares
//and cubes. It was quite complicated, but worked. Now things work much simplier,
//end each case is equal (so as each 'if' statement). Those lines of code are lesson
//from me to myself - it is remainder that if someone sleeps a little and coding
//all night long, solutions become much more complicated than morning-ones.

import {calc} from './countingFunctions.js';
function wiseOperationsBeyondYourUnderstanding(system, pocket, input, output){
    let x;
    if (system[input][2]===0){
        x = calc.convertToNewUnit(system, pocket, input, output);
    }else if(system[input][2]===1){
        x = calc.convertToNewUnit(system, pocket, input, output);
    }else if(system[input][2]===2){
        x = calc.convertToNewUnit(system, pocket, input, output);
    }else{
        x = calc.convertToNewUnit(system, pocket, input, output);
    }
    return x;
}
export {wiseOperationsBeyondYourUnderstanding as countInCalc};