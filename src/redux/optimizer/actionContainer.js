import {
  SALARY_CAP,
  SALARY_RANGE,
  FP_RANGE,
  PROJECTED_OWNERSHIP_CAP,
  NUM_OF_LINEUPS,
  FLEX_POSITIONS,
  DISALLOW_PASSCATCHER,
  FORCE_ATLEAST,
  FORCE_PLAYER,
  PRIORITIZE,
  RANDOMIZATION,
  PLAYER_EXPOSURE,
  MODE,
  PROJECTION_FPTs,
  UNIQUE_PLAYER,
  PLAYER_VS_DEFENCE,
  BROWSER_SERVER
} from "./actionType";

function salaryCap(value) {
  return {
    type: SALARY_CAP,
    payload: value
  };
}

function salaryRange(value) {
  // console.log("value from actionContainer", value);
  return {
    type: SALARY_RANGE,
    payload: value
  };
}

function fpRange(value) {
  return {
    type: FP_RANGE,
    payload: value
  };
}

function projectedOwnershipCap(value) {
  return {
    type: PROJECTED_OWNERSHIP_CAP,
    payload: value
  };
}

function numOfLineups(value) {
  return {
    type: NUM_OF_LINEUPS,
    payload: value
  };
}

function flexPositions(value) {
  return {
    type: FLEX_POSITIONS,
    payload: value
  };
}

function passCatcher(value) {
  return {
    type: DISALLOW_PASSCATCHER,
    payload: value
  };
}

function forceAtleast(value) {
  return {
    type: FORCE_ATLEAST,
    payload: value
  };
}

function forcePlayer(value) {
  return {
    type: FORCE_PLAYER,
    payload: value
  };
}

function prioritize(value) {
  return {
    type: PRIORITIZE,
    payload: value
  };
}

function randomization(value) {
  return {
    type: RANDOMIZATION,
    payload: value
  };
}

function playerExposure(value) {
  console.log("player exposure", value);
  return {
    type: PLAYER_EXPOSURE,
    payload: value
  };
}

function selectMode(value) {
  return {
    type: MODE,
    payload: value
  };
}

function projectionOrFpts(value) {
  return {
    type: PROJECTION_FPTs,
    payload: value
  };
}

function uniquePLayer(value) {
  return {
    type: UNIQUE_PLAYER,
    payload: value
  };
}

function playerVsDefence(value) {
  return {
    type: PLAYER_VS_DEFENCE,
    payload: value
  };
}

function browserOrServer(value) {
  return {
    type: BROWSER_SERVER,
    payload: value
  };
}


export default salaryCap;
export {
  salaryRange,
  fpRange,
  projectedOwnershipCap,
  randomization,
  prioritize,
  playerExposure,
  passCatcher,
  numOfLineups,
  flexPositions,
  forceAtleast,
  forcePlayer,
  selectMode,
  projectionOrFpts,
  uniquePLayer,
  playerVsDefence,
  browserOrServer
};
