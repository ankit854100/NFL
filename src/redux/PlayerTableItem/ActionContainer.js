import {
  CHAIN_PLAYER,
  LOCK_PLAYER,
  CHECKED,
  UNCHECKED,
  FPTS,
  UNLOCK_PLAYER,
  ALL,
  MY_PLAYER,
  EXCLUDED_PLAYER,
  LOCKED_PLAYER,
  CALCULATE_COST,
  CLEAR_ALL,
  TOTAL
} from "./ActionTypes";

function setAllPlayer(value) {
  return {
    type: ALL,
    payload: value
  };
}

function setMyPlayer(value) {
  return {
    type: MY_PLAYER,
    payload: value
  };
}

function setExcludedPlayer(value) {
  return {
    type: EXCLUDED_PLAYER,
    payload: value
  };
}

function setLockedPlayer(value) {
  return {
    type: LOCKED_PLAYER,
    payload: value
  };
}

function checked(value) {
  return {
    type: CHECKED,
    payload: value
  };
}

function unChecked(value) {
  return {
    type: UNCHECKED,
    payload: value
  };
}

function chainPlayer(value) {
  return {
    type: CHAIN_PLAYER,
    payload: value
  };
}

function lockPlayer(value) {
  return {
    type: LOCK_PLAYER,
    payload: value
  };
}

function unLockPlayer(value) {
  return {
    type: UNLOCK_PLAYER,
    payload: value
  };
}

function changeFPTS(value) {
  return {
    type: FPTS,
    payload: value
  };
}

function setCalculateCost(){
  return{
    type: CALCULATE_COST
  }
}

function setClearAll(){
  return {
    type: CLEAR_ALL
  }
}

function setTotal(value){
  return {
    type: TOTAL,
    payload: value
  }
}

export default checked;
export {
  setClearAll,
  chainPlayer,
  lockPlayer,
  changeFPTS,
  unLockPlayer,
  unChecked,
  setAllPlayer,
  setExcludedPlayer,
  setLockedPlayer,
  setMyPlayer, 
  setCalculateCost,
  setTotal
};
