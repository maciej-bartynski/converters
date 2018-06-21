import {
    totalObject
} from './../dataStorage/addDataEngine.js';
import {
    addUserSystemToConverterObject as addDataToApp
} from './../dataStorage/userSysToConverterObject.js';
import {
    addNewUnitToExistingSystem
} from './../dataStorage/addNewUnitToExistingSystem.js';
document.addEventListener("DOMContentLoaded", ajaxStart);

function ajaxStart() {
    let section = document.querySelectorAll("section")[3];
    let button = section.querySelector(".btn");
    button.addEventListener("click", addDataAndBtns);
}
function addDataAndBtns() {
    getJsonData();
    let section = document.querySelectorAll('section')[3];
    let board = section.querySelector('.board');
    board.classList.add('green-alert');
    let p = document.createElement('P');
    p.innerText = "Pobrane Systemy Miar umieszczono w konwerterze";
    p.classList.add('alert_p');
    board.insertBefore(p, section.querySelector('.btn'));
    let button = section.querySelector(".btn");
    button.removeEventListener("click", addDataAndBtns);
}
function getJsonData() {
    let req = new XMLHttpRequest();
    let url = './dataToConvert.json';
    req.responseType = 'json';
    req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
            let data = req.response;
            addJSONDataToConverterObject(data);
        }
    };
    req.open("GET", url);
    req.send();
}
function addJSONDataToConverterObject(data) {
    for (var key in data) {
        let newSys = key;
        let newBasic;
        let newType;
        let unitData;
        let obj = data[key];
        for (var val in obj) {
            let i = 0;
            if (obj[val][0] === 'basic') {
                i++;
                newBasic = val;
                newType = obj[val][2];
            }
            unitData = [];
            unitData.push(val);
            unitData.push(obj[val][1]);
            unitData.push(obj[val][0]);
            if (i === 1) {
                let dataToStoreInApp = [newSys, newBasic, newType]
                addDataToApp(dataToStoreInApp);
            } else if (i!==1) {
                addNewUnitToExistingSystem(unitData, key, totalObject);
                unitData = [];
            }
        }
    }
}