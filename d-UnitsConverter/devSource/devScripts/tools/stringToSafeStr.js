import {totalObject} from '../dataStorage/addDataEngine';
export function stringToSafeString(word) {
    word = word.toLowerCase().trim();
    let forbidden = [
        "/",
        "<",
        ">",
        "?",
        ";",
        "\'",
        ":",
        "\"",
        "[",
        "]",
        "{",
        "}",
        "`",
        "~",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "(",
        ")",
        "=",
        "+",
        "\\",
        "|"
    ];
    forbidden.forEach(function (character) {
        for (let i = 0; i < word.length; i++) {
            if (word.charAt(i) === character) {
                let del = "\*";
                word = word.replace(character, del);
            }
        }
    });
    let occupied;
    let toOverSave;
    for (let key in totalObject){
        if (key === word) {
            occupied = true;
        }
        let currentObj = totalObject[key];
            for (let prop in currentObj){
                if (prop===word){
                    toOverSave=true;
                }
            } 
    }
    let pack = [word, occupied, toOverSave];
    return pack;
}