export function addDemensionsForLineUnit(totalObject, newSysName, basicUnit){
    let isDimensional = totalObject[newSysName][basicUnit];
    let name = basicUnit;
    let refer = isDimensional[0];
    let count = isDimensional[1];
    let typeofunit = isDimensional[2];
    if (typeofunit===1){
        let squareName = name+" kw";
        totalObject[newSysName][squareName]=[refer, count*count, 2];
        let cubicName = name+" sz";
        totalObject[newSysName][cubicName]=[refer, (count*count)*count, 3];
    }
}