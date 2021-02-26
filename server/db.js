
const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/chords"
);

module.exports.getChords = (chords) => {
    const q =
        "SELECT * from chordprogression WHERE chord_prog_id = $1";
    return db.query(q, [chords]);
};