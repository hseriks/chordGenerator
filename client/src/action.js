import axios from "axios";

export async function getChords(randNumber) {
    console.log("rand number passed from app", randNumber);
    const { data } = await axios.get(`/chords/${randNumber}`);
    console.log("data from db after requesting chords", data);
    return {
        type: "chords/getChords",
        chords: data,
        id: randNumber
    };
}


export async function getMoreChords(chordsState) {
    console.log("testing more chords:", chordsState.id );
    const {data}  = await axios.get(`/moreChords/${chordsState.id}`);
    console.log("data from db after requesting chords wButton", data);
    return {
        type: "chords/getExtraChords",
        extraChords: data,
    };
    
}


export async function savedChords(chordsState) {
    console.log("saved chords in action:", chordsState);
    return {
        type: "chords/savedChords",
        savedChords: chordsState,
    };
}
