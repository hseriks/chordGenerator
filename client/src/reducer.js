
let defaultState = {
    visitedIds: []
};

export function reducer(state = defaultState, action) {
    // this checks the actions  and updates the state based on data passed. Which is then passed on to the global state

    if (action.type === "chords/getChords") {
        state = {
            ...state,
            chords: action.chords,
            visitedIds: [...state.visitedIds, action.id]
        };
        console.log("new state in getChords:", state);
    }

    if (action.type === "chords/getExtraChords") {
        state = {
            ...state,
            chords: {...state.chords, ...action.extraChords }
        };

        console.log("new state in getChords wButton:", state);
    }

    console.log("new state", state);

    return state;
}
