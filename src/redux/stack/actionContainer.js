import { CLEAR_INDEX, CLEAR_STACKING, COMBINATION, CORRELATION, CORRELATION_ARRAY, DELETE_COMBINATION, DELETE_CORRELATION, DELETE_LEGACY, DELETE_PER_TEAM, INCREMENT_INDEX, LEGACY, PER_TEAM, REMOVE_STACKING_ARRAY_COMBINATION, REMOVE_STACKING_ARRAY_LEGACY, REMOVE_STACKING_ARRAY_PERTEAM, STACKING_ARRAY_COMBINATION, STACKING_ARRAY_LEGACY, STACKING_ARRAY_PERTEAM } from "./actionTypes";


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

function setClearStacking(){
    return{
        type: CLEAR_STACKING
    }
}

function setLegacyStackingArray(value){
    return{
        type: STACKING_ARRAY_LEGACY,
        payload: value
    }
}

function setPerTeamStackingArray(value){
    return{
        type: STACKING_ARRAY_PERTEAM,
        payload: value
    }
}

function setCombinationStackingArray(value){
    return{
        type: STACKING_ARRAY_COMBINATION,
        payload: value
    }
}

function removeLegacyStackingArray(value){
    return{
        type: REMOVE_STACKING_ARRAY_LEGACY,
        payload: value
    }
}

function removePerTeamStackingArray(value){
    return{
        type: REMOVE_STACKING_ARRAY_PERTEAM,
        payload: value
    }
}

function removeCombinationStackingArray(value){
    return{
        type: REMOVE_STACKING_ARRAY_COMBINATION,
        payload: value
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
    setDeleteCorrelation,
    setClearStacking,
    setLegacyStackingArray,
    setPerTeamStackingArray,
    setCombinationStackingArray,
    removeCombinationStackingArray,
    removePerTeamStackingArray,
    removeLegacyStackingArray
}