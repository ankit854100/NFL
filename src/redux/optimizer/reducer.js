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
  UNIQUE_PLAYER,
  PLAYER_VS_DEFENCE,
  BROWSER_SERVER,
  PROJECTION_FPTs
} from "./actionType";

const initialState = {
  salaryRange: { first: 2000, second: 9500 },
  fpRange: { first: 0.1, second: 26.31 },
  salaryCap: { first: 0, second: 50000 },
  projectedOwnershipCap: { first: 0, second: 900 },
  numOfLineups: 3,
  flexPositions: { RB: 100, TE: 100, WR: 100 },
  passCatcher: false,
  forcePlayer: false,
  forceAtleast: {
    bool: false,
    dropdown: 1,
    QB: true,
    RB: true,
    WR: true,
    TE: true,
    DST: true,
    pOwn: 100
  },
  prioritize: false,
  randomization: 0,
  playerExposure: false,
  mode: "Optimal mode",
  projOrFpts: "Projection",
  uniquePLayer: 1,
  playerVsDefence: 1,
  browserOrServer: "Browser"
};

function handleSalaryRange(obj, value) {
  obj.first = value[0];
  obj.second = value[1];
  return obj;
}

function handleFpRange(obj, value) {
  obj.first = value[0];
  obj.second = value[1];

  return obj;
}

function handleSalaryCap(obj, value) {
  obj.first = value[0];
  obj.second = value[1];

  return obj;
}

function handleProjOwnCap(obj, value) {
  obj.first = value[0];
  obj.second = value[1];

  return obj;
}

function handleFlexPositions(obj, value) {
  obj.RB = value.RB;
  obj.TE = value.TE;
  obj.WR = value.WR;

  return obj;
}

function handleForceAtleast(obj, value) {
  obj.bool = value.bool;
  obj.dropdown = value.dropdown;
  obj.QB = value.QB;
  obj.RB = value.RB;
  obj.WR = value.WR;
  obj.TE = value.TE;
  obj.DST = value.DST;
  obj.pOwn = value.pOwn;

  return obj;
}

function handlePassCatcher(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handleNumOfLineups(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handleRandomization(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handlePrioritize(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handleForcePlayer(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handlePlayerExposure(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handleMode(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handleProjectionOrFpts(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handleUniquePlayer(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handlePlayerVsDefence(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function handleBrowserOrServer(oldVal, newVal) {
  oldVal = newVal;
  return oldVal;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SALARY_RANGE:
      return {
        ...state,
        salaryRange: handleSalaryRange(state.salaryRange, action.payload)
      };

    case FP_RANGE:
      return {
        ...state,
        fpRange: handleFpRange(state.fpRange, action.payload)
      };

    case SALARY_CAP:
      return {
        ...state,
        salaryCap: handleSalaryCap(state.salaryCap, action.payload)
      };

    case PROJECTED_OWNERSHIP_CAP:
      return {
        ...state,
        projectedOwnershipCap: handleProjOwnCap(
          state.projectedOwnershipCap,
          action.payload
        )
      };

    case NUM_OF_LINEUPS:
      return {
        ...state,
        numOfLineups: handleNumOfLineups(state.numOfLineups, action.payload)
      };

    case FLEX_POSITIONS:
      return {
        ...state,
        flexPositions: handleFlexPositions(state.flexPositions, action.payload)
      };

    case DISALLOW_PASSCATCHER:
      return {
        ...state,
        passCatcher: handlePassCatcher(state.passCatcher, action.payload)
      };

    case FORCE_PLAYER:
      return {
        ...state,
        forcePlayer: handleForcePlayer(state.forcePlayer, action.payload)
      };

    case FORCE_ATLEAST:
      return {
        ...state,
        forceAtleast: handleForceAtleast(state.forceAtleast, action.payload)
      };

    case PRIORITIZE:
      return {
        ...state,
        prioritize: handlePrioritize(state.prioritize, action.payload)
      };

    case RANDOMIZATION:
      return {
        ...state,
        randomization: handleRandomization(state.randomization, action.payload)
      };

    case PLAYER_EXPOSURE:
      return {
        ...state,
        playerExposure: handlePlayerExposure(
          state.playerExposure,
          action.payload
        )
      };

    case MODE:
      return {
        ...state,
        mode: handleMode(state.mode, action.payload)
      };

    case PROJECTION_FPTs:
      return {
        ...state,
        projOrFpts: handleProjectionOrFpts(state.projOrFpts, action.payload)
      };

    case UNIQUE_PLAYER:
      return {
        ...state,
        uniquePLayer: handleUniquePlayer(state.uniquePLayer, action.payload)
      };

    case PLAYER_VS_DEFENCE:
      return {
        ...state,
        playerVsDefence: handlePlayerVsDefence(
          state.playerVsDefence,
          action.payload
        )
      };

    case BROWSER_SERVER:
      return {
        ...state,
        browserOrServer: handleBrowserOrServer(
          state.browserOrServer,
          action.payload
        )
      };

    default:
      return state;
  }
}

export default reducer;
