/* eslint-disable react/jsx-key */

import { useState, useEffect } from "react";
import { getChords } from "./action";
import { useDispatch, useSelector } from "react-redux";

export default function chordLaunch() {

    const dispatch = useDispatch();
    
    const chordsState = useSelector((state) => state.chords);
    console.log("chordState", chordsState);
    // console.log("chordState1", chordsState.chord_1);

    // const [chord, updateChord] = useState("");


    useEffect(() => {
        console.log("use effect mounted");
        dispatch(getChords());
        // the issue now is that im now update use state
        
    }, []);

    // async test for handle submit

    return (
        <div>
            <h1>Hello user</h1>
            <h1>{chordsState && chordsState.chord_1}</h1>
            <h1>{chordsState && chordsState.chord_2}</h1>
            <h1>{chordsState && chordsState.chord_3}</h1>

            {/* {chordsState &&
                chordsState.map((input, index) => {
                    return <div key={index}>{input}</div>;
                })} */}
        </div>
    );
}