export function alertEngine(alert, alertRequired, occupiedName, occupied) {
    alert.classList.remove("red-alert");
    alert.classList.remove("green-alert");

    function fireTheAlert(alert) {
        alert.classList.add("red-alert");
        if (alert.firstElementChild.tagName !== 'P') {
            let p = document.createElement('p');
            if (occupied === false) {
                p.innerText = "uzupełnij poprawnie";
            }else{
                p.innerText = occupiedName + ": nazwa Systemu jest zajęta";
            }
            p.classList.add("alert_p");
            alert.insertBefore(p, alert.querySelector('label'));
        } else {
            if (alert.querySelector('p').innerText === 'UZUPEŁNIJ POPRAWNIE') {
                if (occupied === false) {
                    alert.querySelector('p').innerText = 'proszę, popraw treść';
                }else{
                    alert.querySelector('p').innerText = occupiedName + ": nazwa już istnieje";
                }
            } else {
                if (occupied === false) {
                    alert.querySelector('p').innerText = 'uzupełnij poprawnie';
                }else{
                    alert.querySelector('p').innerText = occupiedName + ": nazwa Systemu jest zajęta";
                }
            }
        }
    }

    function fireTheGreenLightOfLightLordForThoseWhoAreStayingCorrectAmongCorruption(alert) {
        alert.classList.add("green-alert");
        let value = alert.querySelector('label').lastElementChild.value;
        if (alert.querySelector('label').lastElementChild.tagName === 'SELECT'){
            if(value==='0'){
                value = "podstawowy system miar";
            }else if (value==='1'){
                value = "system trójwymiarowy";
            }
        };
        if (alert.firstElementChild.tagName !== 'P') {
            let p = document.createElement('p');
            p.innerText = "Poprawnie zaznaczono: " + value;
            p.classList.add("alert_p");
            alert.insertBefore(p, alert.querySelector('label'));
        } else {
            alert.querySelector('p').innerText = 'Poprawnie zaznaczono: ' + value;
        }
    }
    if (alertRequired === true) {
        fireTheAlert(alert);
    } else {
        fireTheGreenLightOfLightLordForThoseWhoAreStayingCorrectAmongCorruption(alert);
    }
}
//alertEngine(alert, false, checkInp[2], "occupied")