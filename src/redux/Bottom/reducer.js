import {IS_NONE, IS_ALL, IS_CHECKED, IS_UNCHECKED, IS_DELETE, PLAYER_CHECKED, PLAYER_UNCHECKED, OPTIMIZE, SALARY, FANTASY_POINTS, FINAL_FPTS, PROJECTION, TOTAL_POWNS} from "./ActionTypes";

const initialState = {
    "is_optimised": 1,
    "total_players": [
        {
            "name": "James Robinson",
            "pos": "RB",
            "team": "JAC",
            "fpts": 7.0,
            "ownership": 2.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 100,
            "playerId": 1918,
            "isChecked": true
        },
        {
            "name": "Las Vegas Raiders",
            "pos": "DEF",
            "team": "LV",
            "fpts": 4.5,
            "ownership": 0.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 100,
            "playerId": 13,
            "isChecked": true
        },
        {
            "name": "Justin Jefferson",
            "pos": "WR",
            "team": "MIN",
            "fpts": 4.6,
            "ownership": 4.0,
            "exp": 0,
            "expMin": 10,
            "expMax": 100,
            "playerId": 1941,
            "isChecked": true
        },
        {
            "name": "Davante Adams",
            "pos": "WR",
            "team": "GB",
            "fpts": 12.8,
            "ownership": 12.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 100,
            "playerId": 451,
            "isChecked": true
        },
        {
            "name": "Boston Scott",
            "pos": "RB",
            "team": "PHI",
            "fpts": 9.0,
            "ownership": 1.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 100,
            "playerId": 1400,
            "isChecked": true
        },
        {
            "name": "Henry Ruggs III",
            "pos": "WR",
            "team": "LV",
            "fpts": 7.0,
            "ownership": 5.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 100,
            "playerId": 1939,
            "isChecked": true
        },
        {
            "name": "Antonio Gibson",
            "pos": "RB",
            "team": "WAS",
            "fpts": 7.6,
            "ownership": 1.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 100,
            "playerId": 1957,
            "isChecked": true
        },
        {
            "name": "Zach Ertz",
            "pos": "TE",
            "team": "PHI",
            "fpts": 8.9,
            "ownership": 3.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 100,
            "playerId": 342,
            "isChecked": true
        },
        {
            "name": "Aaron Rodgers",
            "pos": "QB",
            "team": "GB",
            "fpts": 15.5,
            "ownership": 1.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 5,
            "playerId": 52,
            "isChecked": true
        },
        {
            "name": "Hunter Renfrow",
            "pos": "WR",
            "team": "LV",
            "fpts": 5.7,
            "ownership": 2.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 100,
            "playerId": 1579,
            "isChecked": true
        },
        {
            "name": "Chris Conley",
            "pos": "WR",
            "team": "JAC",
            "fpts": 4.9,
            "ownership": 1.0,
            "exp": 0,
            "expMin": 0,
            "expMax": 100,
            "playerId": 635,
            "isChecked": true
        }
    ],
    "lineups": [
        {
            "total_projection": 102.0,
            "total_salary": 49800,
            "total_fpts": 78.0,
            "total_final_fpts": 145.4,
            "total_ownership": 27.0,
            "isChecked": true,
            "players": [
                {
                    "name": "Boston Scott",
                    "pos": "flex",
                    "team": "PHI",
                    "salary": 4900,
                    "fpts": 9.0,
                    "final_fpts": 15.2,
                    "ownership": 1.0
                },
                {
                    "name": "Aaron Rodgers",
                    "pos": "QB",
                    "team": "GB",
                    "salary": 7600,
                    "fpts": 15.5,
                    "final_fpts": 20.0,
                    "ownership": 1.0
                },
                {
                    "name": "Antonio Gibson",
                    "pos": "RB",
                    "team": "WAS",
                    "salary": 4600,
                    "fpts": 7.6,
                    "final_fpts": 13.1,
                    "ownership": 1.0
                },
                {
                    "name": "Davante Adams",
                    "pos": "WR",
                    "team": "GB",
                    "salary": 8000,
                    "fpts": 12.8,
                    "final_fpts": 23.4,
                    "ownership": 12.0
                },
                {
                    "name": "Henry Ruggs III",
                    "pos": "WR",
                    "team": "LV",
                    "salary": 5100,
                    "fpts": 7.0,
                    "final_fpts": 14.1,
                    "ownership": 5.0
                },
                {
                    "name": "Hunter Renfrow",
                    "pos": "WR",
                    "team": "LV",
                    "salary": 5200,
                    "fpts": 5.7,
                    "final_fpts": 12.1,
                    "ownership": 2.0
                },
                {
                    "name": "James Robinson",
                    "pos": "RB",
                    "team": "JAC",
                    "salary": 4500,
                    "fpts": 7.0,
                    "final_fpts": 17.3,
                    "ownership": 2.0
                },
                {
                    "name": "Las Vegas Raiders",
                    "pos": "DEF",
                    "team": "LV",
                    "salary": 3200,
                    "fpts": 4.5,
                    "final_fpts": 11.0,
                    "ownership": 0.0
                },
                {
                    "name": "Zach Ertz",
                    "pos": "TE",
                    "team": "PHI",
                    "salary": 6700,
                    "fpts": 8.9,
                    "final_fpts": 19.2,
                    "ownership": 3.0
                }
            ],
            "id": 1
        },
        {
            "total_projection": 101.2,
            "total_salary": 49700,
            "total_fpts": 77.2,
            "total_final_fpts": 146.1,
            "total_ownership": 26.0,
            "isChecked": true,
            "players": [
                {
                    "name": "Antonio Gibson",
                    "pos": "flex",
                    "team": "WAS",
                    "salary": 4600,
                    "fpts": 7.6,
                    "final_fpts": 13.1,
                    "ownership": 1.0
                },
                {
                    "name": "Aaron Rodgers",
                    "pos": "QB",
                    "team": "GB",
                    "salary": 7600,
                    "fpts": 15.5,
                    "final_fpts": 20.0,
                    "ownership": 1.0
                },
                {
                    "name": "Boston Scott",
                    "pos": "RB",
                    "team": "PHI",
                    "salary": 4900,
                    "fpts": 9.0,
                    "final_fpts": 15.2,
                    "ownership": 1.0
                },
                {
                    "name": "Chris Conley",
                    "pos": "WR",
                    "team": "JAC",
                    "salary": 5100,
                    "fpts": 4.9,
                    "final_fpts": 12.8,
                    "ownership": 1.0
                },
                {
                    "name": "Davante Adams",
                    "pos": "WR",
                    "team": "GB",
                    "salary": 8000,
                    "fpts": 12.8,
                    "final_fpts": 23.4,
                    "ownership": 12.0
                },
                {
                    "name": "Henry Ruggs III",
                    "pos": "WR",
                    "team": "LV",
                    "salary": 5100,
                    "fpts": 7.0,
                    "final_fpts": 14.1,
                    "ownership": 5.0
                },
                {
                    "name": "James Robinson",
                    "pos": "RB",
                    "team": "JAC",
                    "salary": 4500,
                    "fpts": 7.0,
                    "final_fpts": 17.3,
                    "ownership": 2.0
                },
                {
                    "name": "Las Vegas Raiders",
                    "pos": "DEF",
                    "team": "LV",
                    "salary": 3200,
                    "fpts": 4.5,
                    "final_fpts": 11.0,
                    "ownership": 0.0
                },
                {
                    "name": "Zach Ertz",
                    "pos": "TE",
                    "team": "PHI",
                    "salary": 6700,
                    "fpts": 8.9,
                    "final_fpts": 19.2,
                    "ownership": 3.0
                }
            ],
            "id": 2
        },
        {
            "total_projection": 100.7,
            "total_salary": 49600,
            "total_fpts": 76.9,
            "total_final_fpts": 145.2,
            "total_ownership": 29.0,
            "isChecked": true,
            "players": [
                {
                    "name": "James Robinson",
                    "pos": "flex",
                    "team": "JAC",
                    "salary": 4500,
                    "fpts": 7.0,
                    "final_fpts": 17.3,
                    "ownership": 2.0
                },
                {
                    "name": "Aaron Rodgers",
                    "pos": "QB",
                    "team": "GB",
                    "salary": 7600,
                    "fpts": 15.5,
                    "final_fpts": 20.0,
                    "ownership": 1.0
                },
                {
                    "name": "Antonio Gibson",
                    "pos": "RB",
                    "team": "WAS",
                    "salary": 4600,
                    "fpts": 7.6,
                    "final_fpts": 13.1,
                    "ownership": 1.0
                },
                {
                    "name": "Boston Scott",
                    "pos": "RB",
                    "team": "PHI",
                    "salary": 4900,
                    "fpts": 9.0,
                    "final_fpts": 15.2,
                    "ownership": 1.0
                },
                {
                    "name": "Davante Adams",
                    "pos": "WR",
                    "team": "GB",
                    "salary": 8000,
                    "fpts": 12.8,
                    "final_fpts": 23.4,
                    "ownership": 12.0
                },
                {
                    "name": "Henry Ruggs III",
                    "pos": "WR",
                    "team": "LV",
                    "salary": 5100,
                    "fpts": 7.0,
                    "final_fpts": 14.1,
                    "ownership": 5.0
                },
                {
                    "name": "Justin Jefferson",
                    "pos": "WR",
                    "team": "MIN",
                    "salary": 5000,
                    "fpts": 4.6,
                    "final_fpts": 11.9,
                    "ownership": 4.0
                },
                {
                    "name": "Las Vegas Raiders",
                    "pos": "DEF",
                    "team": "LV",
                    "salary": 3200,
                    "fpts": 4.5,
                    "final_fpts": 11.0,
                    "ownership": 0.0
                },
                {
                    "name": "Zach Ertz",
                    "pos": "TE",
                    "team": "PHI",
                    "salary": 6700,
                    "fpts": 8.9,
                    "final_fpts": 19.2,
                    "ownership": 3.0
                }
            ],
            "id": 3
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
        if(item.playerId === val){
            item.isChecked = true;
        }
    });

    return list;
}

function handlePlayerUnCheck(list, val){
    list.forEach((item) => {
        if(item.playerId === val){
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
            lineupList: handleAll(state.lineups)
        }

        case IS_NONE: return{
            ...state,
            lineupList: handleNone(state.lineups)
        }

        case IS_CHECKED: return {
            ...state,
            lineupList: handleChecked(state.lineups, action.payload)
        }

        case IS_UNCHECKED: return {
            ...state,
            lineupList: handleUnchecked(state.lineups, action.payload)
        }

        case IS_DELETE: return{
            ...state,
            lineupList: handleDelete(state.lineups, action.payload)
        }

        case PLAYER_CHECKED: return{
            ...state,
            lineupPlayers: handlePlayerChecked(state.total_players, action.payload)
        }

        case PLAYER_UNCHECKED: return{
            ...state,
            lineupPlayers: handlePlayerUnCheck(state.total_players, action.payload)
        }

        case OPTIMIZE: return{
            ...state,
            lineupPlayers: handleOptimize(state.total_players)
        }

        case SALARY: return {
            ...state,
            lineupList: handleSalarySort(state.lineups)
        }

        case FANTASY_POINTS: return {
            ...state,
            lineupList: handleFantasyPointsSort(state.lineups)
        }

        case FINAL_FPTS: return {
            ...state,
            lineupList: handleFinalFPTS(state.lineups)
        }

        case PROJECTION: return {
            ...state,
            lineupList: handleProjectionChange(state.lineups)
        }

        case TOTAL_POWNS: return {
            ...state,
            lineupList: handleTotalPowns(state.lineups)
        }

        default: return state;
    }
}

export default reducer;