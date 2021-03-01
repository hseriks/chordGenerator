
const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/chords"
);

module.exports.getChords = (id) => {
    const q =
        "SELECT * from chordProgression WHERE id = $1" ;
    return db.query(q, [id]);
};

module.exports.getChordsWJoin = (id) => {
    const q =
        "SELECT prog.id, prog.song_url, prog.chord_url, prog.chord_1, pic1.picture_url AS chord1_url, prog.chord_2, pic2.picture_url AS chord_2_url, prog.chord_3, pic3.picture_url AS chord_3_url, pic4.picture_url, prog.chord_4 FROM chordProgression AS prog LEFT JOIN chordPictures AS pic1 ON prog.chord_1 = pic1.chord LEFT JOIN chordPictures AS pic2 ON prog.chord_2 = pic2.chord LEFT JOIN chordPictures AS pic3 ON prog.chord_3 = pic3.chord LEFT JOIN chordPictures AS pic4 ON prog.chord_4 = pic4.chord WHERE prog.id = $1"; 
    return db.query(q, [id]);
};

module.exports.getChordsWJoin2 = (id) => {
    const q =
        "SELECT prog.id, prog.chord_1, pic1.picture_url AS chord1 FROM chordProgression AS prog LEFT JOIN chordPictures AS pic1 ON prog.chord_1 = pic1.chord WHERE prog.id = $1";
    return db.query(q, [id]);
};

module.exports.getChordPics = (chord1, chord2, chord3, chord4) => {
    const q =
        "SELECT picture_url FROM chordPictures WHERE chord = $1 OR chord = $2 OR chord = $3 OR chord = $4";
    return db.query(q, [chord1, chord2, chord3, chord4]);
};