import {handleOptions} from './../sectionsInterfaces/convertSection.js';
export function displayUnitLists(totalObject, key) {
    let converter = document.querySelectorAll('section')[1];
    let formula = document.querySelectorAll('section')[2];
    let listA = converter.querySelectorAll('select')[0];
    let labelA = listA.parentElement;
    let listB = converter.querySelectorAll('select')[1];
    let labelB = listB.parentElement;
    let listC = formula.querySelector('select');
    let labelC = listC.parentElement;
    labelA.removeChild(listA);
    labelB.removeChild(listB);
    labelC.removeChild(listC);
    for (let i = 0; i < 3; i++) {
        let label;
        let list = document.createElement('select');
        if (i === 1) {
            label = labelA;
            list.addEventListener('change', function(event){
                handleOptions(event);
            });
        } else if (i === 2) {
            label = labelB;
            list.addEventListener('change', function(event){
                handleOptions(event);
            });
        } else {
            label = labelC;
        }
        label.appendChild(list);
        setFullListOptions(list, totalObject, key);
    }
    function setFullListOptions(list, totalObject, key) {
        let obj = totalObject[key];
        for (let prop in obj) {
            let option = document.createElement('option');
            option.innerText = String(prop);
            list.appendChild(option);
        }
    }
};