import { CLEAR_INDEX, COMBINATION, CORRELATION, CORRELATION_ARRAY, DELETE_COMBINATION, DELETE_CORRELATION, DELETE_LEGACY, DELETE_PER_TEAM, INCREMENT_INDEX, LEGACY, PER_TEAM } from "./actionTypes";


function setCorrelation(value){
    return{
        type: CORRELATION,
        payload: value
    }
}

function setCorrelationArray(value){
    return{
        type: CORRELATION_ARRAY,
        payload: value
    }
}

function setLegacy(value){
    return {
        type: LEGACY,
        payload: value
    }
}

function setPerTeam(value){
    return {
        type: PER_TEAM,
        payload: value
    }
}

function setCombination(value){
    return {
        type: COMBINATION,
        payload: value
    }
}

function setDeleteLegacy(value){
    return{
        type: DELETE_LEGACY,
        payload: value
    }
}

function setDeletePerTeam(value){
    return {
        type: DELETE_PER_TEAM,
        payload: value
    }
}

function setDeleteCombination(value){
    return{
        type: DELETE_COMBINATION,
        payload: value
    }
}

function setDeleteCorrelation(){
    return {
        type: DELETE_CORRELATION
    }
}

export {
    setCorrelation,
    setLegacy,
    setPerTeam,
    setCombination,
    setCorrelationArray,
    setDeleteLegacy,
    setDeletePerTeam,
    setDeleteCombination,
    setDeleteCorrelation
}