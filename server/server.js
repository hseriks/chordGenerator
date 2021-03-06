const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/chords/:id", (req,res) => {
    console.log("req.body:", req.params.id);


    // const randNumber = Math.floor(Math.random() * 41);

    db.getChordsWJoin(req.params.id).then((results)=> {
        console.log("results from getchord", results.rows);

        // const chord1 = results.rows[0].chord_1;
        // const chord2 = results.rows[0].chord_2;
        // const chord3 = results.rows[0].chord_3;
        // const chord4 = results.rows[0].chord_4;

        // console.log(chord1);
        // console.log(chord2);
        // console.log(chord3);
        // console.log(chord4);

        res.json(results.rows[0]);


        // db.getChordPics(chord1, chord2, chord3, chord4)
        //     .then((pics) => {
        //         console.log("results from getchord", pics.rows);

        //         // const picture = pics.rows;

        //         res.json({...results.rows[0], pics: pics.rows});
        //     })
        //     .catch((error) => {
        //         console.log("error getting back from server",error);
        //     });

        

    }).catch((error) => console.log("error getting back from server", error));

    // here I want to emit the response from the server to the socket listener 

});

app.get("/moreChords/:id", (req,res) => {
    console.log("req.body:", req.params);

    db.getMoreChords(req.params.id).then((results)=> {
        console.log("results after getting back more chords", results);
        console.log("results [0]", results.rows[0]);
        res.json(results.rows[0]);
    }).catch((error) => {
        console.log("results after getting back more chords", error);
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
