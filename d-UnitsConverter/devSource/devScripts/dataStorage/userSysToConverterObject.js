import {totalObject} from './addDataEngine';
import {addDemensionsForLineUnit} from './addDimensionsToLineUnit.js';
export function addUserSystemToConverterObject(userData){
    let newSysName = userData[0];
    let basicUnit = userData[1];
    let typeOfUnit = Number(userData[2]);
    totalObject[newSysName] = {};
    totalObject[newSysName][basicUnit] = ['basic', 1, typeOfUnit];
    addDemensionsForLineUnit(totalObject, newSysName, basicUnit);
}