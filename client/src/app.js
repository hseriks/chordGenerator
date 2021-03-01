/* eslint-disable react/jsx-key */

import { useState, useEffect } from "react";
import { getChords, getRandomChords } from "./action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import { Animated } from "react-animated-css";


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
        <main className="container-fluid">
            <Navbar bg="dark" variant="dark">
                <Animated animationIn="bounce" isVisible={true}>
                    <div>
                        <Navbar.Brand>CHORDY</Navbar.Brand>
                        <FontAwesomeIcon
                            icon={faGuitar}
                            size="2x"
                            color="white"
                        />
                    </div>
                </Animated>
            </Navbar>

            {/* <h1>{chordsState && chordsState.chord_1}</h1>
            <h1>{chordsState && chordsState.chord_2}</h1>
            <h1>{chordsState && chordsState.chord_3}</h1>
            <h1>{chordsState && chordsState.chord_4}</h1>
            <h1>{chordsState && chordsState.chord_5}</h1> */}
            <div>
                <Row>
                    <Col>
                        <Image
                            src={chordsState && chordsState.chord1_url}
                            rounded
                            style={{ height: "5", width: "10vw" }}
                        />
                    </Col>
                
                    <Col>
                        <Image
                            src={chordsState && chordsState.chord_2_url}
                            rounded
                            style={{ height: "5", width: "10vw" }}
                        />
                    </Col>
                    <Col>
                        <Image
                            src={chordsState && chordsState.chord_3_url}
                            rounded
                            style={{ height: "5", width: "10vw" }}
                        />
                    </Col>
                    <Col>
                        <Image
                            src={chordsState && chordsState.picture_url}
                            rounded
                            style={{ height: "5", width: "10vw" }}
                        />
                    </Col>
                </Row>
            </div>
            <div className="d-flex justify-content-center ">
                <Badge
                    pill
                    variant="success"
                    onClick={() => dispatch(getChords())}
                    type="submit"
                    style={{ width: "20vw", height: "5vh" }}
                >
                    Get New Chord Progression
                </Badge>

                <Badge
                    pill
                    variant="success"
                    type="submit"
                    style={{ width: "3vw" }}
                >
                    <FontAwesomeIcon icon={faCog} color="white" />
                </Badge>
            </div>
            {chordsState && (
                <iframe
                    src={`https://open.spotify.com/embed/track/${chordsState.song_url}`}
                    width="300"
                    height="380"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>
            )}
            {chordsState && (
                <iframe
                    src={`${chordsState.chord_url}`}
                    width="300"
                    height="200"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>
            )}
            {/* {chordsState &&
                chordsState.map((input, index) => {
                    return <div key={index}>{input}</div>;
                })} */}
        </main>
    );
}