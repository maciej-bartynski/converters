document.addEventListener('DOMContentLoaded', suggestionsEngine);
import {
    stringToSafeString
} from './../tools/stringToSafeStr.js';
import {
    arrLikeToArr
} from '../tools/arrlikeToArray.js';
function suggestionsEngine() {
    let inputs = document.querySelectorAll('input');
    let amount = inputs.length;
    for (let i = 0; i < amount; i++) {
        let input = inputs[i];
        input.addEventListener('keyup', function () {
            if (input.name === 'unitsys') {
                showNameSuggestion(input, true, false);
            } else if (input.name !== 'unitsys' &&
                input.name !== 'basicunit' &&
                input.name !== 'num' &&
                input.name !== 'numofrefer') {
                showNameSuggestion(input, false, true);
            } else if (input.name === 'basicunit') {
                showNameSuggestion(input, false, false);
            }
        });
    }
    function showNameSuggestion(input, isSysName, isRegUnitName) {
        let parent = input.parentNode;
        let inp = parent.querySelector('input');
        let suggestion = stringToSafeString(inp.value);
        let string;
        let name = suggestion[0];
        let nameExistAsSystem = suggestion[1];
        let nameExistAsUnit = suggestion[2];
        let itIsRequestAboutSysName = isSysName //if true, then yes it is;
        let itIsRequestAboutUniName = isRegUnitName //if true, then yes it is;
        inp.value = name;
        if (itIsRequestAboutSysName === true) {
            showEndFormatAndInformIfNameExistAsSystem();
        } else if (itIsRequestAboutUniName === true) {
            showEndFormatAndInformIfNameWillBeNewOrOversaved();
        } else {
            showEndFormatOfThisFirstUnitInNewSys();
        }
        function showEndFormatAndInformIfNameExistAsSystem() {
            if (nameExistAsSystem === true) {
                string = 'Nazwa systemu jest zajęta i nie może zostać użyta'
                suggestionAlert(inp, string, true);
            } else {
                suggestionAlert(inp, string, false);
            }
        }
        function showEndFormatAndInformIfNameWillBeNewOrOversaved() {
            if (nameExistAsUnit === true) {
                string = 'Jednostka \'' + name + '\' już istnieje, ale może zostać nadpisana';
                suggestionAlert(inp, string, true);
            } else {
                suggestionAlert(inp, string, false);
            }
        }
        function showEndFormatOfThisFirstUnitInNewSys() {
            string = 'do not show any communicates, remove alerts';
            suggestionAlert(inp, string, false);
        }
    }
    function suggestionAlert(input, info, toggleInfoElement) {
        let div = input.parentNode.parentNode;
        let label = div.lastElementChild;
        div.classList.remove('green-alert');
        div.classList.remove('red-alert');
        while (div.firstElementChild.tagName === 'P') {
            let pa = div.querySelectorAll('p');
            let p = pa[0];
            div.removeChild(p);
        }
        if (toggleInfoElement === true) {
            let par = document.createElement('p');
            par.classList.add('alert_p')
            div.insertBefore(par, label)
            par.innerText = info;
        }
    }
}