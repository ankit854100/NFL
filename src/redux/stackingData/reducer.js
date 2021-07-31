import {CLEAR_ALL_STACKING_ARRAY, COMBINATION_ARRAY, CORRELATION_SECONDARY_ID, DELETE_FROM_COMBINATION_ARRAY, DELETE_FROM_LEGACY_ARRAY, DELETE_FROM_PERTEAM_ARRAY, LEGACY_ARRAY, PER_TEAM_ARRAY} from "./ActionTypes";

const initialState = {
    legacyArray: [],
    perTeamArray: [],
    combinationArray: [],
    correlationSecondaryID: 0
}

const deleteFromArray = (array, value) => {

    let temp = array.filter((item) => {
        return item.output !== value.output
    });

    return temp;
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LEGACY_ARRAY: return {
            ...state,
            legacyArray: [...state.legacyArray, action.payload]
        }

        case PER_TEAM_ARRAY: return {
            ...state,
            perTeamArray: [...state.perTeamArray, action.payload]
        }

        case COMBINATION_ARRAY: return {
            ...state,
            combinationArray: [...state.combinationArray, action.payload]
        }

        case DELETE_FROM_LEGACY_ARRAY: return {
            ...state,
            legacyArray: deleteFromArray(state.legacyArray, action.payload)
        }

        case DELETE_FROM_PERTEAM_ARRAY: return {
            ...state,
            perTeamArray: deleteFromArray(state.perTeamArray, action.payload)
        }

        case DELETE_FROM_COMBINATION_ARRAY: return {
            ...state,
            combinationArray: deleteFromArray(state.combinationArray, action.payload)
        }

        case CLEAR_ALL_STACKING_ARRAY: return {
            legacyArray: [],
            perTeamArray: [],
            combinationArray: [],
            correlationSecondaryID: 0
        }

        case CORRELATION_SECONDARY_ID: return {
            ...state,
            correlationSecondaryID: 1
        }

        default: return {
            ...state
        }
    }
}

export default reducer;