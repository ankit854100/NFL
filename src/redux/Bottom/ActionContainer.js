import { seedValue } from "faker";
import {CLEAR_EVERY_STATE, FANTASY_POINTS, FINAL_FPTS, IS_ALL, IS_CHECKED, IS_DELETE, IS_NONE, IS_UNCHECKED, OPTIMIZE, PLAYER_CHECKED, PLAYER_UNCHECKED, PROJECTION, SALARY, SET_IS_OPTIMIZED, SET_LINEUPS, SET_TOTAL_PLAYERS, TOTAL_POWNS} from "./ActionTypes"


function setAllClick(){
    return {
        type: IS_ALL
    }
}

function setNoneClicked(){
    return {
        type: IS_NONE
    }
}

function setIsChecked(value){
    return {
        type: IS_CHECKED,
        payload: value
    }
}

function setUnChecked(value){
    return {
        type: IS_UNCHECKED,
        payload: value
    }
}

function setIsDelete(value){
    return {
        type: IS_DELETE,
        payload: value
    }
}

function setPlayerChecked(value){
    return {
        type: PLAYER_CHECKED,
        payload: value
    }
}

function setPlayerUnChecked(value){
    return {
        type: PLAYER_UNCHECKED,
        payload: value
    }
}

function setOptimize(){
    return {
        type: OPTIMIZE
    }
}

function sortByFantasyPoints(){
    return {
        type:FANTASY_POINTS
    }
}

function sortByProjection(){
    return {
        type: PROJECTION
    }
}

function sortBySalary(){
    return {
        type: SALARY
    }
}

function sortByFinalFpts(){
    return {
        type: FINAL_FPTS
    }
}

function sortByTotalPowns(){
    return {
        type: TOTAL_POWNS
    }
}

function setLineups(value){
    return{
        type: SET_LINEUPS,
        payload: value
    }
}

function setTotalplayers(value){
    return {
        type: SET_TOTAL_PLAYERS,
        payload: value
    }
}

function setIsOptimized(value){
    return {
        type: SET_IS_OPTIMIZED,
        payload: value
    }
}

function setClearEveryStates(){
    return{
        type: CLEAR_EVERY_STATE
    }
}

export default setAllClick;

export {
    setNoneClicked,
    setIsChecked,
    setUnChecked,
    setIsDelete,
    setPlayerChecked,
    setPlayerUnChecked,
    setOptimize,
    sortByTotalPowns,
    sortByFinalFpts,
    sortBySalary,
    sortByProjection,
    sortByFantasyPoints,
    setLineups,
    setTotalplayers,
    setIsOptimized,
    setClearEveryStates
};