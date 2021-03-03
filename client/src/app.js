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
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { Animated } from "react-animated-css";
import ReactAudioPlayer from "react-audio-element";
import Modal from "react-bootstrap/Modal";


export default function chordLaunch() {
    const dispatch = useDispatch();

    const chordsState = useSelector((state) => state.chords);

    const idList = useSelector((state) => state.visitedIds);

    console.log("chordState", chordsState);
    // chordsState && console.log("chordst:", chordsState);

    // console.log("chordState", chordsState.id);
    // console.log("chordState1", chordsState.chord_1);
    // const [chord, updateChord] = useState("");
    // function moreChords() {
    //     dispatch(getMoreChords());
    // }

    const [savedChords, saveChords] = useState([]);

    console.log("saved chords", savedChords);

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getChordsHandler() {
        const randNumber = Math.floor(Math.random() * 41);

        const visited = idList.some((item) => item === randNumber);

        if (visited) {
            return getChordsHandler();
        }

        dispatch(getChords(randNumber));
    }

    // function disable() {
    //     var disableButton = true;
    // }

    // button hide

    // const [button, setButton] = useState(true);

    // console.log(button);

    // const handleclick = () => setButton(false);
    // const handlPrio= () => setButton(true);

    // function disable() {
    //     {handleclick};
    // }

    const [button, setColor] = useState(false);

    // const disableButton = () => setColor(true);

    useEffect(() => {
        console.log("use effect mounted");
        dispatch(getChords(1));
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

                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>

                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.chord_2_url}`
                                    }
                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>
                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.chord_3_url}`
                                    }
                                    style={{ height: "5", width: "6vw" }}
                                />
                            </Col>
                            <Col>
                                <Image
                                    src={
                                        chordsState &&
                                        chordsState.picture_url &&
                                        `https://pulse-today.s3.amazonaws.com/Pictures+chords/${chordsState.picture_url}`
                                    }
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
                            // onClick={() => dispatch(getChords())}
                            onClick={() => {
                                getChordsHandler();
                                setColor(false);
                            }}
                            type="submit"
                            style={{ width: "15vw", height: "5vh" }}
                        >
                            <FontAwesomeIcon
                                icon={faRandom}
                                size="1x"
                                color="black"
                            />{" "}
                            &nbsp; Get New Chord Progression
                        </Badge>

                        {
                            <Badge
                                // className={
                                //     disableButton
                                //         ? "d-inline-flex p-2 justify-content-center align-items-center disabled"
                                //         : "d-inline-flex p-2 justify-content-center align-items-center"
                                // }

                                className="d-inline-flex p-2 justify-content-center align-items-center"
                                pill
                                variant={button ? "secondary" : "success"}
                                type="submit"
                                style={{ width: "15vw", height: "5vh" }}
                                // onClick={handleShow}
                                onClick={() => {
                                    dispatch(getMoreChords(chordsState));
                                    setColor(true);
                                }}
                            >
                                {/* <FontAwesomeIcon icon={faCog} color="white" />{" "} */}
                                <FontAwesomeIcon
                                    icon={faExpand}
                                    size="1x"
                                    color="black"
                                />
                                &nbsp; Get More Suitable Chords
                            </Badge>
                        }
                        {""}
                        <FontAwesomeIcon
                            icon={faHeart}
                            size="2x"
                            color="red"
                            onClick={() => {
                                saveChords({ ...chordsState });
                            }}
                        />
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

            {/* <Row>My Favorite Chord Progressions</Row>

            <Row>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Chord 1</th>
                            <th>Chord 2</th>
                            <th>Chord 3</th>
                            <th>Chord 4</th>
                            <th>Chord 5</th>
                            <th>Chord 6</th>
                            <th>Chord 7</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Row> */}

            {/* <h1>{chordsState && chordsState.chord_1}</h1>
            <h1>{chordsState && chordsState.chord_2}</h1>
            <h1>{chordsState && chordsState.chord_3}</h1>
            <h1>{chordsState && chordsState.chord_4}</h1>
            <h1>{chordsState && chordsState.chord_5}</h1> */}

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Welcome to Chordy!{" "}
                        {/* <FontAwesomeIcon
                            icon={faGuitar}
                            size="1x"
                            color="black"
                        /> */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item action variant="light">
                            <FontAwesomeIcon
                                icon={faRandom}
                                size="1x"
                                color="black"
                            />
                            &nbsp; Here you can quickly play randomized chord
                            progressions used in famous pop songs,
                        </ListGroup.Item>
                        <ListGroup.Item action variant="light">
                            <FontAwesomeIcon
                                icon={faHeart}
                                size="1x"
                                color="black"
                            />
                            &nbsp; save your favorite chord progressions,
                        </ListGroup.Item>
                        <ListGroup.Item action variant="light">
                            <FontAwesomeIcon
                                icon={faHeadphones}
                                size="1x"
                                color="black"
                            />
                            &nbsp; listen to Spotify songs using these spesific
                            chord progression patterns,
                        </ListGroup.Item>

                        <ListGroup.Item action variant="light">
                            <FontAwesomeIcon
                                icon={faExpand}
                                size="1x"
                                color="black"
                            />
                            &nbsp; and expand on the progressions, by requesting
                            even more chords!
                        </ListGroup.Item>
                    </ListGroup>
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