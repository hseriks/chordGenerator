/* eslint-disable react/jsx-key */

import { useState, useEffect } from "react";
import { getChords, getRandomChords } from "./action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

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

            <button
                onClick={() => dispatch(getChords())}
                type="submit"
                include
                className="btn btn-primary btn-sm btn-block"
            >
                New chords
            </button>

            <h1>{chordsState && chordsState.chord_1}</h1>
            <h1>{chordsState && chordsState.chord_2}</h1>
            <h1>{chordsState && chordsState.chord_3}</h1>
            <h1>{chordsState && chordsState.chord_4}</h1>
            <h1>{chordsState && chordsState.chord_5}</h1>

            <img src={chordsState && chordsState.chord1_url} />
            <img src={chordsState && chordsState.chord_2_url} />
            <img src={chordsState && chordsState.chord_3_url} />
            <img src={chordsState && chordsState.picture_url} />

            <iframe
                src="https://open.spotify.com/embed/track/1QPkRQ9mFmjPQaOMmsPB9S"
                width="300"
                height="380"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>

            {/* {chordsState &&
                chordsState.map((input, index) => {
                    return <div key={index}>{input}</div>;
                })} */}
        </div>
    );
}