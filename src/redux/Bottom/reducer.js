import {IS_NONE, IS_ALL, IS_CHECKED, IS_UNCHECKED, IS_DELETE, PLAYER_CHECKED, PLAYER_UNCHECKED, OPTIMIZE, SALARY, FANTASY_POINTS, FINAL_FPTS, PROJECTION, TOTAL_POWNS, SET_LINEUPS, SET_TOTAL_PLAYERS, SET_IS_OPTIMIZED, CLEAR_EVERY_STATE} from "./ActionTypes";

const initialState = {
    "is_optimised": 0,
    "total_players": [],
    "lineups": []
}

function handleAll(list){
    list.forEach((item, index) => {
        item.isChecked = true;
    });

    return list;
}

function handleChecked(list, val){
    list.forEach((item, index) => {
        if(item.id === val){
            item.isChecked = true;
        }
    });

    return list;
}

function handleUnchecked(list, val){
    list.forEach((item, index) => {
        if(item.id === val){
            item.isChecked = false;
        }
    });

    return list;
}

function handleNone(list){
    list.forEach((item, index) => {
        item.isChecked = false;
    });

    return list;
}

function handleDelete(list, val){
    const newList = list.filter((item) => item.id !== val);

    return newList;
}

function handlePlayerChecked(list, val){
    list.forEach((item) => {
        if(item.playerId === val){
            item.isChecked = true;
        }
    });

    return list;
}

function handlePlayerUnCheck(list, val){
    list.forEach((item) => {
        if(item.playerId === val){
            item.isChecked = false;
        }
    });

    return list;
}

function handleOptimize(list){
    const newList = list.filter((item) => item.isChecked === true);
    // console.log("remaining players: ", newList);

    return newList;
}

function handleSalarySort(list){
    list.sort(function(a, b) {
        return a.salary - b.salary;
    });

    return list;
}

function handleFantasyPointsSort(list){
    list.sort(function(a, b) {
        return a.fpts - b.fpts;
    });

    return list;
}

function handleFinalFPTS(list){
    list.sort(function(a, b) {
        return a.final - b.final;
    });

    return list;
}

function handleProjectionChange(list){
    list.sort(function(a, b) {
        return a.projection - b.projection;
    });

    return list;
}

function handleTotalPowns(list){
    list.sort(function(a, b) {
        return a.totalPown - b.totalPown;
    });

    return list;
}

function reducer(state = initialState, action){
    switch(action.type){
        case CLEAR_EVERY_STATE: return{
            is_optimised: 0,
            total_players: [],
            lineups: []
        }

        case SET_LINEUPS: return{
            ...state,
            lineups: [...state.lineups, action.payload]
        }

        case SET_TOTAL_PLAYERS: return {
            ...state,
            total_players: [...state.total_players, action.payload]
        }

        case SET_IS_OPTIMIZED: return {
            ...state,
            is_optimised: action.payload
        }
        
        case IS_ALL: return{
            ...state,
            lineups: handleAll(state.lineups)
        }

        case IS_NONE: return{
            ...state,
            lineups: handleNone(state.lineups)
        }

        case IS_CHECKED: return {
            ...state,
            lineups: handleChecked(state.lineups, action.payload)
        }

        case IS_UNCHECKED: return {
            ...state,
            lineups: handleUnchecked(state.lineups, action.payload)
        }

        case IS_DELETE: return{
            ...state,
            lineups: handleDelete(state.lineups, action.payload)
        }

        case PLAYER_CHECKED: return{
            ...state,
            total_players: handlePlayerChecked(state.total_players, action.payload)
        }

        case PLAYER_UNCHECKED: return{
            ...state,
            total_players: handlePlayerUnCheck(state.total_players, action.payload)
        }

        case OPTIMIZE: return{
            ...state,
            total_players: handleOptimize(state.total_players)
        }

        case SALARY: return {
            ...state,
            lineups: handleSalarySort(state.lineups)
        }

        case FANTASY_POINTS: return {
            ...state,
            lineups: handleFantasyPointsSort(state.lineups)
        }

        case FINAL_FPTS: return {
            ...state,
            lineups: handleFinalFPTS(state.lineups)
        }

        case PROJECTION: return {
            ...state,
            lineups: handleProjectionChange(state.lineups)
        }

        case TOTAL_POWNS: return {
            ...state,
            lineups: handleTotalPowns(state.lineups)
        }

        default: return state;
    }
}

export default reducer;