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
   
    const { data } = await axios.post("/moreChords", `${chordsState}`);
    console.log("data from db after requesting chords wButton", data);
    // return {
    //     type: "chords/GetRandomChords",
    //     randomChords: data,
    // };


}
