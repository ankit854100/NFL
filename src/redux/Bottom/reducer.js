import {IS_NONE, IS_ALL, IS_CHECKED, IS_UNCHECKED, IS_DELETE, PLAYER_CHECKED, PLAYER_UNCHECKED, OPTIMIZE, SALARY, FANTASY_POINTS, FINAL_FPTS, PROJECTION, TOTAL_POWNS} from "./ActionTypes";

const initialState = {
    lineupList: [
        {
            id: 1,
            isChecked: true,
            projection: 150,
            salary: 80000,
            fpts: 270,
            final: 300,
            totalPown: 218,
            players:[
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                }
            ]
        },
        {
            id: 2,
            isChecked: true,
            projection: 180,
            salary: 50000,
            fpts: 170,
            final: 200,
            totalPown: 118,
            players:[
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                }
            ]
        },
        {
            id: 3,
            isChecked: true,
            projection: 200,
            salary: 20000,
            fpts: 120,
            final: 140,
            totalPown: 108,
            players:[
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                },
                {
                    name: "Laviska Shenault Jr.",
                    pos: "QB",
                    team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
                    salary: 50000,
                    fpts: "13.27",
                    final: "9.87",
                    projOwn: "6.66"
                }
            ]
        }
    ],
    lineupPlayers: [
        {   
            id: 1,
            name: "Laviska Shenault Jr.",
            Pos: "QB",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 2,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 3,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 4,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 5,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 6,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 7,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 8,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 9,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 10,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 11,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 12,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 13,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          },
          {
            id: 14,
            name: "Laviska Shenault Jr.",
            Pos: "WR",
            team: "https://domination.dfsarmy.com/images/teams/nfl/jax.svg",
            Fpts: "13.27",
            exp: "67%(2)",
            projOwn: "6.66",
            min: "0%",
            max: "100%",
            isChecked: true
          }
    ]
}

function handleAll(list){
    list.forEach((item, index) => {
        item.isChecked = true;
    });

    return list;
}

function handleChecked(list, val){
    list.forEach((item, index) => {
        if(item.id === val){
            item.isChecked = true;
        }
    });

    return list;
}

function handleUnchecked(list, val){
    list.forEach((item, index) => {
        if(item.id === val){
            item.isChecked = false;
        }
    });

    return list;
}

function handleNone(list){
    list.forEach((item, index) => {
        item.isChecked = false;
    });

    return list;
}

function handleDelete(list, val){
    const newList = list.filter((item) => item.id !== val);

    return newList;
}

function handlePlayerChecked(list, val){
    list.forEach((item) => {
        if(item.id === val){
            item.isChecked = true;
        }
    });

    return list;
}

function handlePlayerUnCheck(list, val){
    list.forEach((item) => {
        if(item.id === val){
            item.isChecked = false;
        }
    });

    return list;
}

function handleOptimize(list){
    const newList = list.filter((item) => item.isChecked === true);
    // console.log("remaining players: ", newList);

    return newList;
}

function handleSalarySort(list){
    list.sort(function(a, b) {
        return a.salary - b.salary;
    });

    return list;
}

function handleFantasyPointsSort(list){
    list.sort(function(a, b) {
        return a.fpts - b.fpts;
    });

    return list;
}

function handleFinalFPTS(list){
    list.sort(function(a, b) {
        return a.final - b.final;
    });

    return list;
}

function handleProjectionChange(list){
    list.sort(function(a, b) {
        return a.projection - b.projection;
    });

    return list;
}

function handleTotalPowns(list){
    list.sort(function(a, b) {
        return a.totalPown - b.totalPown;
    });

    return list;
}

function reducer(state = initialState, action){
    switch(action.type){
        case IS_ALL: return{
            ...state,
            lineupList: handleAll(state.lineupList)
        }

        case IS_NONE: return{
            ...state,
            lineupList: handleNone(state.lineupList)
        }

        case IS_CHECKED: return {
            ...state,
            lineupList: handleChecked(state.lineupList, action.payload)
        }

        case IS_UNCHECKED: return {
            ...state,
            lineupList: handleUnchecked(state.lineupList, action.payload)
        }

        case IS_DELETE: return{
            ...state,
            lineupList: handleDelete(state.lineupList, action.payload)
        }

        case PLAYER_CHECKED: return{
            ...state,
            lineupPlayers: handlePlayerChecked(state.lineupPlayers, action.payload)
        }

        case PLAYER_UNCHECKED: return{
            ...state,
            lineupPlayers: handlePlayerUnCheck(state.lineupPlayers, action.payload)
        }

        case OPTIMIZE: return{
            ...state,
            lineupPlayers: handleOptimize(state.lineupPlayers)
        }

        case SALARY: return {
            ...state,
            lineupList: handleSalarySort(state.lineupList)
        }

        case FANTASY_POINTS: return {
            ...state,
            lineupList: handleFantasyPointsSort(state.lineupList)
        }

        case FINAL_FPTS: return {
            ...state,
            lineupList: handleFinalFPTS(state.lineupList)
        }

        case PROJECTION: return {
            ...state,
            lineupList: handleProjectionChange(state.lineupList)
        }

        case TOTAL_POWNS: return {
            ...state,
            lineupList: handleTotalPowns(state.lineupList)
        }

        default: return state;
    }
}

export default reducer;