import {
    inputEngine
} from './../alertsAndMsgs/formulaValidator.js';
import {
    totalObject
} from './../dataStorage/addDataEngine.js';
import {
    calc
} from './../calcOperations/countingFunctions.js';
import {
    arrLikeToArr
} from './../tools/arrlikeToArray.js';
import {
    tellUserToAddDataFirst
} from './../elementsCreating/redirectBtns.js';
import {
    countInCalc
} from '../calcOperations/decideWhichFunctionUseTo.js';
document.addEventListener("DOMContentLoaded", convertInterfaceStart);
function convertInterfaceStart() {
    isThereAnyPossibleDataToConvert();
    okbtnStart();
}
function isThereAnyPossibleDataToConvert() {
    let branches = document.querySelector('.branches');
    let numberOfBranches = document.querySelectorAll('.branches div').length;
    if (branches.querySelectorAll('p').length !== 0 || numberOfBranches === 0) {
        tellUserToAddDataFirst(branches);
    }
}
function okbtnStart() {
    let section = document.querySelectorAll("section")[1];
    let button = section.querySelector(".btn");
    button.addEventListener("click", function () {
        let userData = inputEngine(section);
        if (userData !== false) {
            turnTheConverterOn(userData);
        };
    });
}
function turnTheConverterOn(userData) {
    let string = document.querySelector('.brnch-selected').innerText;
    let sysKey = string.toLowerCase().trim();
    let system = totalObject[sysKey];
    let pocket = userData[0];
    let input = (userData[1]).toLowerCase().trim();
    let output = (userData[2]).toLowerCase().trim();
    let score = countInCalc(system, pocket, input, output);
    showTheScore(score, userData);
}
function showTheScore(score, userData) {
    let outputField = document.querySelector('.output');
    let numOfUnit = userData[0];
    let inputUnit = userData[1];
    let referUnit = userData[2];
    outputField.innerText = numOfUnit + " razy " + inputUnit + " to " + score + " razy " + referUnit;
}
export function scoreCleaner() {
    let outputField = document.querySelector('.output');
    outputField.innerText = "Tu wyświetli się wynik."
}
export function handleOptions(event) {
    let currentList = event.currentTarget;
    let currentValue = (currentList.value).toLowerCase().trim();
    let converterSection = document.querySelectorAll('section')[1];
    let converterLists = converterSection.querySelectorAll('select');
    let listA = converterLists[0];
    let listB = converterLists[1];
    let listsTitle = (document.querySelector('.brnch-selected').innerText).toLowerCase().trim();
    let unitTypeOf = totalObject[listsTitle][currentValue][2];
    for (let i = 0; i < currentList.length; i++) {
        let unitdata = totalObject[listsTitle][listA[i].innerText];
        let unittype = unitdata[2];
        let optionABoundToThis = listA[i];
        let optionBBoundToThis = listB[i];
        if (unittype !== unitTypeOf) {
            listA.removeChild(optionABoundToThis);
            listB.removeChild(optionBBoundToThis);
            i--;
        }
    }
}
export function AllOutputFieldCommunicatesDifferentWithScore() {
    let area = document.querySelectorAll('section')[1];
    let input = area.querySelector('input');
    let output = area.querySelector('.output');
    let lists = area.querySelectorAll('select');
    let listA = lists[0];
    let listB = lists[1];
    input.addEventListener('keyup', function () {
        output.innerText = input.value + " " + listA.value + " na " + listB.value;
    });
    listA.addEventListener('change', function () {
        output.innerText = input.value + " " + listA.value + " na " + listB.value;
    });
    listB.addEventListener('change', function () {
        output.innerText = input.value + " " + listA.value + " na " + listB.value;
    });
}