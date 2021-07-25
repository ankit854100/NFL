import PerTeam from "../../components/stacking/PerTeam";
import { COMBINATION, CORRELATION, CORRELATION_ARRAY, DELETE_COMBINATION, DELETE_LEGACY, DELETE_PER_TEAM, LEGACY, PER_TEAM } from "./actionTypes";

const initialState = {
    correlationArray: [],
    correlation: {
        universal: 1,
        values :[]
    },
    legacy: [],
    perTeam: [],
    combination: []
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

function reducer(state = initialState, action){
    switch(action.type){
        case CORRELATION: return{
            ...state,
            correlation: action.payload
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

        default: return state;
    }
}

export default reducer;