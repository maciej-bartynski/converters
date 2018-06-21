import {inputEngine} from './../alertsAndMsgs/formulaValidator.js';
import {cleaningCommunicateEngine} from './../alertsAndMsgs/cleaningFormula.js';
import {addNewUnitToExistingSystem} from './../dataStorage/addNewUnitToExistingSystem.js';
import { totalObject } from '../dataStorage/addDataEngine.js';
import {arrLikeToArr} from './../tools/arrlikeToArray.js';
document.addEventListener("DOMContentLoaded", newUnitInterfaceStart);
function newUnitInterfaceStart() {
    okbtnStart();
    openOrCloseFormInSecondSection();
}
function okbtnStart() {
    let section = document.querySelectorAll("section")[2];
    let button = section.querySelector(".btn");
    button.addEventListener("click", function () {
        let userData = inputEngine(section);
        if (userData!==false){
            let whatType = document.querySelector('.brnch-selected').innerText.toLowerCase().trim();
            addNewUnitToExistingSystem(userData, whatType, totalObject);
        }
    });
}
function openOrCloseFormInSecondSection() {
    let openButton = document.querySelector("#openFormulaToAddNewUnit");
    let closeButton = document.querySelector(".back");
    openButton.addEventListener("click", function (event) {
        formInSecondSection(event, openButton, closeButton);
    });
    closeButton.addEventListener("click", function (event) {
        formInSecondSection(event, openButton, closeButton);
    });
}
function formInSecondSection(event, openButton, closeButton) {
    let nodes = document.querySelectorAll("section");
    let toggleArea = document.querySelectorAll("div.hide-show-area");
    let sections = arrLikeToArr(nodes);
    let toggle = arrLikeToArr(toggleArea);
    if (event.currentTarget === openButton) {
        sections[2].classList.add("displayFlex");
        sections[2].classList.remove("displayNone");
        toggle[0].classList.add("rolltop");
        cleaningCommunicateEngine(nodes[1]);
    } else if (event.currentTarget === closeButton) {
        sections[2].classList.remove("displayFlex");
        sections[2].classList.add("displayNone");
        toggle[0].classList.remove("rolltop");
        cleaningCommunicateEngine(nodes[2]);
        dispatchEventClickOnCurrentBranchButtonForRefreshSelectlists();
    }
}
function dispatchEventClickOnCurrentBranchButtonForRefreshSelectlists(){
    let currentButton = document.querySelector('.brnch-selected');
    let evnt = document.createEvent('Event');
    evnt.initEvent('click', false, false);
    currentButton.dispatchEvent(evnt);
};