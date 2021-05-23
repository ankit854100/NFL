import {
  CHAIN_PLAYER,
  LOCK_PLAYER,
  CHECKED,
  UNCHECKED,
  FPTS,
  UNLOCK_PLAYER,
  EXCLUDED_PLAYER,
  ALL
} from "./ActionTypes";

import { playersData, excludedList } from "../../data";
import { changeFPTS } from "./ActionContainer";

const initialState = {
  all: playersData,
  myPlayer: playersData,
  excludedPlayer: excludedList,
  lockedPlayer: []
};

function checkIfPresent(arr, value) {
  console.log(value);
  if (arr.includes(value)) return arr;
  else return [...arr, value];
}

function changeALLFpts(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === value.id) {
      arr.fpts = value.fpts;
    }
  }
  console.log(value);
  return arr;
}
// function handleUncheck(arr, value) {
//   arr = arr.filter((data) => data.id !== value.id);

// }

function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL:
      return {
        ...state,
        all: action.payload
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
        myPlayer: checkIfPresent(state.myPlayer, action.payload)
      };

    case UNCHECKED:
      return {
        ...state,
        myPlayer: state.myPlayer.filter(
          (player) => player.id !== action.payload.id
        )
      };

    case LOCK_PLAYER:
      return {
        ...state,
        lockedPlayer: [...state.lockedPlayer, action.payload]
      };

    case UNLOCK_PLAYER:
      return {
        ...state,
        lockedPlayer: state.lockedPlayer.filter((id) => id !== action.payload)
      };

    case FPTS:
      return {
        ...state,
        all: changeALLFpts(state.all, action.payload)
      };
    default:
      return state;
  }
}

export default reducer;
