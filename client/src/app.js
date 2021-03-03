/* eslint-disable react/jsx-key */

import { useState, useEffect } from "react";
import { getChords, getMoreChords } from "./action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faspotify } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import { Animated } from "react-animated-css";
import ReactAudioPlayer from "react-audio-element";
import Modal from "react-bootstrap/Modal";


export default function chordLaunch() {

    const dispatch = useDispatch();
    
    const chordsState = useSelector((state) => state.chords);
    
    console.log("chordState", chordsState);
    // chordsState && console.log("chordst:", chordsState);


    // console.log("chordState", chordsState.id);

    // console.log("chordState1", chordsState.chord_1);

    // const [chord, updateChord] = useState("");

    // function moreChords() {
    //     dispatch(getMoreChords());


    // }

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // function getChordsHandler() {

    //     const randNumber = Math.floor(Math.random() * 41);

    //     dispatch(getChords(id));
    // }


    // button hide

    // const [button, setButton] = useState(true);
      
    // console.log(button);

    // const handleclick = () => setButton(false);
    // const handlPrio= () => setButton(true);

    // function disable() {
    //     {handleclick};
    // }

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

            <Row>
                <Col sm={4}></Col>
                <Col sm={4}></Col>
                <Col sm={2}></Col>
                <Col sm={1}>
                    {" "}
                    <div
                        className="satoshipay-placeholder-donation"
                        data-sp-type="donation"
                        data-sp-id="5b4e1c443ee5b200106479b9"
                        data-sp-currency="USD"
                    ></div>
                </Col>
            </Row>

            <Row>
                {/* <Col sm={3}>
                    {" "}
                    {chordsState && (
                        <iframe
                            src={`https://open.spotify.com/embed/track/${chordsState.song_url}`}
                            width="300"
                            height="350"
                            allowtransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                    )}
                </Col> */}

                <Col sm={12}>
                    <div className="d-flex justify-content-center ">
                        <Row>
                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.chord1_url}`
                                    }
                                    // src={chordsState && chordsState.chord1_url}
                                    rounded
                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>

                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.chord_2_url}`
                                    }
                                    rounded
                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>
                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.chord_3_url}`
                                    }
                                    rounded
                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>
                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.picture_url}`
                                    }
                                    rounded
                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>

                            {/* Extra cords */}

                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        chordsState.chord5_url &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.chord5_url}`
                                    }
                                    rounded
                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>
                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        chordsState.chord6_url &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.chord6_url}`
                                    }
                                    rounded
                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>
                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        chordsState.chord7_url &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.chord7_url}`
                                    }
                                    rounded
                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="d-flex justify-content-center">
                        {chordsState && (
                            <ReactAudioPlayer
                                className="d-inline-flex p-1"
                                src={`https://pulse-today.s3.amazonaws.com/Chord_songs/${chordsState.chord_url}`}
                            />
                        )}
                    </div>
                    <div className="d-flex justify-content-center ">
                        <Badge
                            className="d-inline-flex p-2 justify-content-center align-items-center"
                            pill
                            variant="success"
                            onClick={() => dispatch(getChords())}
                            type="submit"
                            style={{ width: "15vw", height: "5vh" }}
                        >
                            Get New Chord Progression
                        </Badge>

                        {
                            <Badge
                                className="d-inline-flex p-2 justify-content-center align-items-center {button}"
                                disbled
                                pill
                                variant="success"
                                type="submit"
                                style={{ width: "15vw", height: "5vh" }}
                                // onClick={handleShow}
                                onClick={() => {
                                    dispatch(getMoreChords(chordsState));
                                    disable();
                                }}
                            >
                                {/* <FontAwesomeIcon icon={faCog} color="white" />{" "} */}
                                Get More Suitable Chords
                            </Badge>
                        }
                    </div>
                </Col>
            </Row>

            <Row>
                {/* <col sm={12}>
                    {" "}
                    <FontAwesomeIcon icon={faspotify} size="2x" color="green" />
                </col> */}
            </Row>

            <Row>
                <Col
                    sm={12}
                    className="d-inline-flex p-2 justify-content-center align-items-center"
                >
                    {" "}
                    {chordsState && (
                        <iframe
                            src={`https://open.spotify.com/embed/track/${chordsState.song_url}`}
                            width="300"
                            height="100"
                            allowtransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                    )}
                </Col>
            </Row>

            {/* <h1>{chordsState && chordsState.chord_1}</h1>
            <h1>{chordsState && chordsState.chord_2}</h1>
            <h1>{chordsState && chordsState.chord_3}</h1>
            <h1>{chordsState && chordsState.chord_4}</h1>
            <h1>{chordsState && chordsState.chord_5}</h1> */}

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Welcome to Chordy{" "}
                        <FontAwesomeIcon
                            icon={faGuitar}
                            size="1x"
                            color="black"
                        />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Here you get random chord progression patterns, often used
                    in famous pop songs! Press the PLAY button to listen to the
                    current progression. Play the Spotify song, to listen to a
                    song that uses the current chosen chord progression. And If
                    you like the initial progression, press GET MORE CHORDS, to
                    get even more chords to fit together. Good luck in making
                    your next hit!{" "}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* {chordsState &&
                chordsState.map((input, index) => {
                    return <div key={index}>{input}</div>;
                })} */}
        </main>
    );
}