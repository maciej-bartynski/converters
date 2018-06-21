export function tellUserToAddDataFirst(branches) {
    if (branches.querySelectorAll('p').length !== 0) {
        branches.removeChild(branches.querySelector('p'));
        branches.removeChild(branches.querySelectorAll('div')[0]);
        branches.removeChild(branches.querySelectorAll('div')[1]);
    }
    let redirct = document.createElement('div');
    let rdirect = document.createElement('div');
    redirct.innerText = "Pobierz dane!";
    rdirect.innerText = "Dodaj własne dane!";
    branches.appendChild(redirct);
    branches.appendChild(rdirect);
    let info = document.createElement('p');
    info.style.paddingLeft = "1px";
    info.innerText = 'Najpierw dodaj lub pobierz Systemy Miar:';
    branches.insertBefore(info, redirct);
    redirct.addEventListener("click", function (event) {
        redirect(redirct)
    });
    rdirect.addEventListener("click", function (event) {
        redirect(rdirect)
    });
    function redirect(btn) {
        let click = document.createEvent('Event');
        click.initEvent('click', false, false);
        let naviBtns = document.querySelectorAll('nav div');
        if (btn.innerText.trim().toLowerCase() === "pobierz dane!") {
            naviBtns[2].dispatchEvent(click);
        } else {
            naviBtns[1].dispatchEvent(click);
        }
    }
}