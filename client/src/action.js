import axios from "axios";

export async function getChords() {
    const { data } = await axios.get("/chords",);
    console.log("data from db after requesting chords", data);
    return {
        type: "chords/getChords",
        chords: data,
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
