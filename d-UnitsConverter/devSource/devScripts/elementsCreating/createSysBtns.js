import {
    arrLikeToArr
} from './../tools/arrlikeToArray.js';
import {
    displayUnitLists
} from './createUnitOpt.js';
import {
    scoreCleaner
} from './../sectionsInterfaces/convertSection.js';
import {cleaningCommunicateEngine} from './../alertsAndMsgs/cleaningFormula.js';
import {AllOutputFieldCommunicatesDifferentWithScore} from './../sectionsInterfaces/convertSection.js';
export function createSysBtns(totalObject) {
    let branches = document.querySelector('.branches');
    let iterator = 0;
    for (var idx in totalObject) {
        iterator++;
    }
    if (iterator !== 0) {
        createBtns();
    }
    function createBtns() {
        if (branches.querySelectorAll('p').length !== 0) {
            branches.removeChild(branches.querySelector('p'));
        }
        let i = branches.querySelectorAll('div').length;
        for (let j = 0; j < i; j++) {
            branches.removeChild(branches.querySelectorAll('div')[0]);
        }
        for (var key in totalObject) {
            let btn = document.createElement('div');
            btn.innerText = key;
            branches.appendChild(btn);
            letItListenForEvent(btn);
        }
    }
    function letItListenForEvent(btn) {
        btn.addEventListener("click", function () {
            branchIsClicked(btn);
            scoreCleaner();
            cleaningCommunicateEngine(btn.parentNode.parentNode);
            AllOutputFieldCommunicatesDifferentWithScore();
        });
    }
    function branchIsClicked(btn) {
        let y = branches.querySelectorAll('div').length;
        let bttn = branches.querySelectorAll('div');
        for (let x = 0; x < y; x++) {
            bttn[x].classList.remove('brnch-selected');
        }
        btn.classList.add('brnch-selected');
        prepareLists(btn);
        manageToggleArea()
    }
    function manageToggleArea() {
        let toggleArea = document.querySelectorAll("div.hide-show-area");
        let toggle = arrLikeToArr(toggleArea);
        toggle[0].classList.remove('rolltop');
        let hiddenArea = document.querySelectorAll("section");
        let hidden = arrLikeToArr(hiddenArea);
        hidden[2].classList.remove('displayFlex');
        hidden[2].classList.add('displayNone');
    }
    function prepareLists(btn) {
        let name = btn.innerText.toUpperCase().trim();
        for (var key in totalObject) {
            let prop = key.toUpperCase().trim()
            if (prop === name) {
                displayUnitLists(totalObject, key);
            }
        }
    }
}