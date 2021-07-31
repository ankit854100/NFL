import {CLEAR_ALL_STACKING_ARRAY, COMBINATION_ARRAY, CORRELATION_SECONDARY_ID, DELETE_FROM_COMBINATION_ARRAY, DELETE_FROM_LEGACY_ARRAY, DELETE_FROM_PERTEAM_ARRAY, LEGACY_ARRAY, PER_TEAM_ARRAY} from "./ActionTypes";

const setLegacyArray = (value) => {
    return {
        type: LEGACY_ARRAY,
        payload: value
    }
}

const setPerTeamArray = (value) => {
    return {
        type: PER_TEAM_ARRAY,
        payload: value
    }
}

const setCombinationArray = (value) => {
    return {
        type: COMBINATION_ARRAY,
        payload: value
    }
}

const deleteFromLegacyArray = (value) => {
    return {
        type: DELETE_FROM_LEGACY_ARRAY,
        payload: value
    }
}

const deletePerTeamArray = (value) => {
    return {
        type: DELETE_FROM_PERTEAM_ARRAY,
        payload: value
    }
}

const deleteFromCombinationArray = (value) => {
    return {
        type: DELETE_FROM_COMBINATION_ARRAY,
        payload: value
    }
}

const clearAllStackingArray = () => {
    return {
        type: CLEAR_ALL_STACKING_ARRAY
    }
}

const setCorrelationSecondaryID = () => {
    return {
        type: CORRELATION_SECONDARY_ID
    }
}



export {
    setLegacyArray,
    setPerTeamArray,
    setCombinationArray,
    deleteFromLegacyArray,
    deletePerTeamArray,
    deleteFromCombinationArray,
    clearAllStackingArray,
    setCorrelationSecondaryID
}