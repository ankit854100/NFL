import PerTeam from "../../components/stacking/PerTeam";
import { CLEAR_INDEX, CLEAR_STACKING, COMBINATION, CORRELATION, CORRELATION_ARRAY, DELETE_COMBINATION, DELETE_CORRELATION, DELETE_LEGACY, DELETE_PER_TEAM, INCREMENT_INDEX, LEGACY, PER_TEAM, REMOVE_STACKING_ARRAY_LEGACY, STACKING_ARRAY_COMBINATION, STACKING_ARRAY_LEGACY, STACKING_ARRAY_PERTEAM } from "./actionTypes";

const initialState = {
    correlationArray: [],
    correlation: 1,
    legacy: [],
    perTeam: [],
    combination: [],
    stackingarray: []
};

function handleDelete(arr, value){
    let temp = arr.filter((item) => item !== value);
    // console.log(temp);
    return temp;
}

function handleCombinationDelete(arr, value){
    let temp = arr.filter((item) => item !== value);
    // console.log(temp, value);
    return temp;
}

function handleRemoveLegacyStacking(stackingArray, id){
    const spliced = stackingArray.slice(0, id).concat(stackingArray.slice(id + 1, stackingArray.length));

    return spliced;
}

function addToStackingArray(stackingArray, value){
    console.log("from reducer: ",stackingArray, value);
    // let temp = stackingArray;
    // temp.push(value);
    // return [...stackingArray, value];
    return [];
}

function handleError(arg1, arg2){
    console.log(arg1);

    return arg2;
}

function reducer(state = initialState, action){
    switch(action.type){
        case CORRELATION: return{
            ...state,
            correlation: handleError(state, action.payload)
        }

        case CORRELATION_ARRAY: return{
            ...state,
            correlationArray: [...state.correlationArray, action.payload]
        }

        case LEGACY: return{
            ...state,
            legacy: [...state.legacy, action.payload]
        };

        case PER_TEAM: return {
            ...state,
            perTeam: [...state.perTeam, action.payload]
        };

        case COMBINATION: return {
            ...state,
            combination: [...state.combination, action.payload]
        };

        case DELETE_LEGACY: return {
            ...state,
            legacy: handleDelete(state.legacy, action.payload)
        }

        case DELETE_PER_TEAM: return {
            ...state,
            perTeam: handleDelete(state.perTeam, action.payload)
        }

        case DELETE_COMBINATION: return {
            ...state,
            combination: handleDelete(state.combination, action.payload)
        }

        case DELETE_CORRELATION: return{
            ...state,
            correlationArray: []
        }

        case CLEAR_STACKING: return {
            correlationArray: [],
            correlation: 1,
            legacy: [],
            perTeam: [],
            combination: []
        }

        case STACKING_ARRAY_LEGACY: return {
            ...state,
            stackingarray: addToStackingArray(state.stackingarray, action.payload)
        }

        default: return state
    }
}

export default reducer;