/* This disables formula-alerts or communicate, depends on situation.
If formula data is correct, button calls 'comunicateEngine' to clean
all alerts and show approval-communicate instead. If each of
nav-buttons is clicked, layout-managing-function calls
cleaningCommunicateEngine to disable all alerts and approval-communicate,
if enable */
function cleaningFormula(node) {
    let alerts = node.querySelectorAll('.alert');
    for (let i = 0; i < alerts.length; i++) {
        alerts[i].classList.remove("green-alert");
        alerts[i].classList.remove("red-alert");
        let label = alerts[i].querySelector('label');
        if (label.lastElementChild.tagName === 'INPUT') {
            label.lastElementChild.value = "";
        }
        if (alerts[i].firstElementChild.tagName === 'P') {
            alerts[i].removeChild(alerts[i].firstElementChild);
        }
    }
}
export function cleaningCommunicateEngine(section) {
    let board = section.querySelector(".board");
    board.classList.remove("green-alert");
    if (board.firstElementChild.tagName === 'P') {
        board.removeChild(board.querySelector('p'));
    }
    cleaningFormula(section);
}
export function communicateEngine(formulaData, section) {
    if (section !== document.querySelectorAll('section')[1]){
        let board = section.querySelector(".board");
        board.classList.add("green-alert");
        let string = "Uzupełniono dane:";
        if (board.firstElementChild.tagName !== 'P') {
            let p = document.createElement("p");
            p.classList.add('alert_p');
            board.insertBefore(p, section.querySelector(".btn"));
        }
        let info = board.querySelector("p");
        let formDta = [formulaData[0], formulaData[1], formulaData[2]];
        if (formDta[2]==='0'){
            formDta.pop();
            formDta.push(' podstawowy system miar');
        }else if(formDta[2]==='1'){
            formDta.pop();
            formDta.push(' system trójwymiarowy');
        }
        info.innerText = string + " " + formDta.join(', '); 
    }
    cleaningFormula(section);
}