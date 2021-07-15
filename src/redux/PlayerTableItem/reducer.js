import { propTypes } from "react-bootstrap/esm/Image";
import { setAllPlayer } from "./ActionContainer";
import {
  CHAIN_PLAYER,
  LOCK_PLAYER,
  CHECKED,
  UNCHECKED,
  FPTS,
  UNLOCK_PLAYER,
  EXCLUDED_PLAYER,
  ALL,
  CALCULATE_COST,
  CLEAR_ALL,
  TOTAL
} from "./ActionTypes";

const initialState = {
  total: [],
  all: [],
  myPlayer: [],
  excludedPlayer: [],
  lockedPlayer: [],
  lockedCost: 0
};

function changeALLFpts(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === value.id) {
      arr.fpts = value.fpts;
    }
  }
  return arr;
}

function stateAllPlayer(value){
  // if(!all.includes(value)){
  //   return [...all, value];
  // }
  return value;
}

function stateChecked(my, all, value) {
  if(!my.includes(value)){
    let temp = all.filter((item) => item === value);
    temp[0].isChecked = true;
    return [...my, temp[0]];
  }
  return my;
}

function stateUnCheck(all, my, value){
  let newMy = my.filter((item) => item !== value);
  let temp = all.filter((item) => item === value);
  temp[0].isChecked = false;

  return newMy; 
}

function stateLock(all, locked, value){
  let temp = all.filter((item) => item === value);
  temp[0].isLocked = true;
  locked.push(temp[0]);
  return locked;
}

function stateUnLock(all, locked, value){
  let newLocked = locked.filter((item) => item !== value);
  let temp = all.filter((item) => item === value);
  temp[0].isLocked = false;
  return newLocked;
}

function calculateLockedCost(lockedPlayer){
  let lockedCost = 0;
  lockedPlayer.forEach((item) => {
    lockedCost += parseFloat(item.salary);
  });

  return lockedCost;
}


function reducer(state = initialState, action) {
  switch (action.type) {

    case CLEAR_ALL: return {
      total: [],
      all: [],
      myPlayer: [],
      excludedPlayer: [],
      lockedPlayer: [],
      lockedCost: 0
    }

    case TOTAL: return {
      ...state,
      total: [...state.total, action.payload]
    }

    case ALL:
      return {
        ...state,
        all: [...state.all, action.payload]
        // all: stateAllPlayer(action.payload)
      };

    case EXCLUDED_PLAYER:
      return {
        ...state,
        excludedPlayer: action.payload
      };

    case CHECKED:
      return {
        ...state,
        // myPlayer: [...state.myPlayer, action.payload]
        myPlayer: stateChecked(state.myPlayer, state.all, action.payload)
      };

    case UNCHECKED:
      return {
        ...state,
        myPlayer: stateUnCheck(state.all, state.myPlayer, action.payload)
      };

    case LOCK_PLAYER:
      return {
        ...state,
        lockedPlayer: stateLock(state.all, state.lockedPlayer, action.payload)
      };

    case UNLOCK_PLAYER:
      return {
        ...state,
        lockedPlayer: stateUnLock(state.all, state.lockedPlayer, action.payload)
      };

    case FPTS:
      return {
        ...state,
        all: changeALLFpts(state.all, action.payload)
      };

    case CALCULATE_COST: return{
      ...state,
      lockedCost: calculateLockedCost(state.lockedPlayer)
    }
    
    default:
      return state;
  }
}

export default reducer;
