/* This takes the section and checks if each label inside contains aproprious data.
If inputs-type-text are filled with text, inputs-type-number filled with nums,
and select-lists are selected, this returns an array with all those values. If at least
one input is not filled correctly, this triggers aproprious alarms */
import {
    alertEngine
} from './alerts.js';
import {
    communicateEngine
} from './cleaningFormula';
import {
    stringToSafeString as nameChecker
} from './../tools/stringToSafeStr.js';
import {arrLikeToArr} from './../tools/arrlikeToArray.js';

export function inputEngine(section) {
    let formulaData;
    function inputNameValidator(input) {
        let value = input.value;
        let isValid;
        let name;
        let occupied;
        if (value.trim().length === 0) {
            isValid = false;
        } else {
            isValid = true;
            let legalName = nameChecker(value);
            name = legalName[0];
            occupied =legalName[1];
        }
        return [input, isValid, name, occupied];
    }
    function validDataFromInputs(section) {
        let currentInputs = arrLikeToArr(section.querySelectorAll("input"));
        let currentSelLs = arrLikeToArr(section.querySelectorAll("select"));
        let formulaValues = [];
        let i;
        let j;
        for (i = 0; i < currentInputs.length; i++) {
            let inp = currentInputs[i];
            let item = section.querySelectorAll(".alert input")[i];
            let alert = item.parentNode.parentNode;
            let checkInp = inputNameValidator(inp);
            if (checkInp[1] === true && (checkInp[3] !== true || inp !== document.querySelector('section input'))) {
                formulaValues.push(checkInp[2]);
                alertEngine(alert, false, checkInp[2], false);
            } else if (checkInp[1] === true && checkInp[3] === true &&
                inp === document.querySelector('section input')) {
                alertEngine(alert, true, checkInp[2], checkInp[3]);
            } else {
                alertEngine(alert, true, checkInp[2], false);
            }
        }
        for (j = 0; j < currentSelLs.length; j++) {
                formulaValues.push(currentSelLs[j].value);
                let item = section.querySelectorAll(".alert select")[j];
                let alert = item.parentNode.parentNode;
                alertEngine(alert, false);
        }
        getDataFromInput(formulaValues, i + j);
    }
    function getDataFromInput(array, num) {
        if (array.length === num) {
            formulaData = array;
        } else {
            formulaData = false;
        }
    }
    validDataFromInputs(section);
    if (formulaData !== false) {
        communicateEngine(formulaData, section);
    }
    return formulaData;
}