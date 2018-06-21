import {totalObject} from './addDataEngine';
import {addDemensionsForLineUnit} from './addDimensionsToLineUnit.js';
export function addNewUnitToExistingSystem (userData, whatSystem, totalObject){
    let name = userData[0];
    let num = Number(userData[1]);
    let refer = userData[2];
    let typeofunit = totalObject[whatSystem][refer][2];
    let array = [refer, num, typeofunit];
    totalObject[whatSystem][name]=array;
    addDemensionsForLineUnit(totalObject, whatSystem, name);
};
