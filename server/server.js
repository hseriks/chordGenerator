const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/chords", (req,res) => {


    const randNumber = Math.floor(Math.random() * 41);

    db.getChords(randNumber).then((results)=> {
        console.log("results from getchord", results.rows);
        res.json(results.rows[0]);
    
    
    });

    // here I want to emit the response from the server to the socket listener 

});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
