import {CLEAR_SELECTED, CLEAR_SLATE_PLAYERS, GAMES, ICONS, SELECTED, SELECT_SLATE, SET_SLATE_PLAYERS, UNSELECTED} from "./actionTypes";

const initialState = {
    selectedSlate: {},
    selectedList: [],
    games: [],
    icons: [],
    slatePlayers: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SELECTED: return{
            ...state,
            selectedList: [...state.selectedList, action.payload]
        };

        case UNSELECTED: return{
            ...state,
            selectedList: state.selectedList.filter((val) => val !== action.payload)
        };

        case SELECT_SLATE: return{
            ...state,
            selectedSlate: action.payload
        };

        case GAMES: return{
            ...state,
            games: action.payload
        };

        case CLEAR_SELECTED: return{
            ...state,
            selectedList: []
        };

        case ICONS: return{
            ...state,
            icons: action.payload
        }

        case SET_SLATE_PLAYERS: return {
            ...state,
            slatePlayers: [...state.slatePlayers, action.payload]
        }

        case CLEAR_SLATE_PLAYERS: return {
            ...state,
            slatePlayers: []
        }

        default: return state;
    }
}

export default reducer;

