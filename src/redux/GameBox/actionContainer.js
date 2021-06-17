import {CLEAR_SELECTED, GAMES, SELECTED, SELECT_SLATE, UNSELECTED, ICONS, SET_SLATE_PLAYERS, CLEAR_SLATE_PLAYERS} from "./actionTypes";

function selectTeam(value){
    return{
        type: SELECTED,
        payload: value
    };
}

function unselectTeam(value){
    return{
        type: UNSELECTED,
        payload: value
    };
}
function selectSlate(value){
    return{
        type: SELECT_SLATE,
        payload: value
    };
}

function setGames(value){
    return{
        type: GAMES,
        payload: value
    }
}

function setClearSelected(){
    return{
        type: CLEAR_SELECTED
    }
}

function setIcons(value){
    return{
        type: ICONS,
        payload: value
    };
}

function setSlatePlayers(value){
    return{
        type: SET_SLATE_PLAYERS,
        payload: value
    }
}

function setClearSlatePlayer(){
    return{
        type: CLEAR_SLATE_PLAYERS
    }
}

export default selectTeam;
export {unselectTeam, selectSlate, setGames, setClearSelected, setIcons, setSlatePlayers, setClearSlatePlayer};