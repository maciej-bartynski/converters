import {
    inputEngine
} from './../alertsAndMsgs/formulaValidator.js';
import {
    addUserSystemToConverterObject
} from './../dataStorage/userSysToConverterObject.js';
document.addEventListener("DOMContentLoaded", newSysSectionInterfaceStart);
function newSysSectionInterfaceStart() {
    okbtnStart();
}
function okbtnStart() {
    let section = document.querySelectorAll("section")[0];
    let button = section.querySelector(".btn");
    button.addEventListener("click", function () {
        let userData = inputEngine(section);
        if (userData !== false) {
            addUserSystemToConverterObject(userData);
        }
    });
}