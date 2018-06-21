import '../devStyles/rwdStyles.scss';
import '../devStyles/devMain.scss';
import './sectionsInterfaces/newSysSection.js';
import './sectionsInterfaces/newUnitSection.js';
import './sectionsInterfaces/convertSection.js';
import './sectionsInterfaces/ajaxReqSection.js';
import './alertsAndMsgs/inputSuggestions.js';
import {arrLikeToArr} from './tools/arrlikeToArray.js';
import {totalObject} from './dataStorage/addDataEngine';
import {createSysBtns} from './elementsCreating/createSysBtns.js';
import {
    cleaningCommunicateEngine
} from './alertsAndMsgs/cleaningFormula.js';
document.addEventListener("DOMContentLoaded", init);
function init() {
    startNav();
    setWelcomeViewOfConverter();
}
function setWelcomeViewOfConverter() {
    let nodes = document.querySelectorAll("section");
    let sections = arrLikeToArr(nodes);
    sections[0].style.display = "none";
    sections[1].style.display = "none";
    sections[2].classList.add("displayNone");
    sections[3].style.display = "none";
    sections[4].style.display = "flex";
}
function startNav() {
    let nodes = document.querySelectorAll("nav div");
    let btns = arrLikeToArr(nodes);
    btns.forEach(btn => btn.addEventListener("click", function (event) {
        navBtnIsClicked(event, btns);
        navBtnIsTurningSectionOn(event);
    }));
}
function navBtnIsClicked(event, btns) {
    btns.forEach(div => div.classList.remove("selected"));
    let currentBtn = event.currentTarget;
    currentBtn.classList.add("selected");
}
function navBtnIsTurningSectionOn(event) {
    let nodes = document.querySelectorAll("section");
    let sections = arrLikeToArr(nodes);
    let toggleArea = document.querySelectorAll("div.hide-show-area");
    let toggle = arrLikeToArr(toggleArea);
    let buttons = document.querySelectorAll("nav div");
    let btn = event.currentTarget;
    if (btn === buttons[0]) {
        createSysBtns(totalObject);
        sections[0].style.display = "none";
        sections[1].style.display = "flex";
        toggle[0].classList.add('rolltop');
        sections[2].classList.add("displayNone");
        sections[2].classList.remove("displayFlex");
        sections[3].style.display = "none";
        sections[4].style.display = "none";
        cleaningCommunicateEngine(nodes[1]);
        cleaningCommunicateEngine(nodes[2]);
    } else if (btn === buttons[1]) {
        sections[0].style.display = "flex";
        sections[1].style.display = "none";
        sections[2].classList.add("displayNone");
        sections[2].classList.remove("displayFlex");
        sections[3].style.display = "none";
        sections[4].style.display = "none";
        cleaningCommunicateEngine(nodes[0]);
    } else if (btn === buttons[2]) {
        sections[0].style.display = "none";
        sections[1].style.display = "none";
        sections[2].classList.add("displayNone");
        sections[2].classList.remove("displayFlex");
        sections[3].style.display = "flex";
        sections[4].style.display = "none";
    }
}