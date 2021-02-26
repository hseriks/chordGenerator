export function reducer(state = {}, action) {
    // this checks the actions  and updates the state based on data passed. Which is then passed on to the global state

    if (action.type === "chords/getChords") {
        state = {
            ...state,
            chords: action.chords,
        };

        console.log("new state in getChords:", state);
    }

    return state;
}
