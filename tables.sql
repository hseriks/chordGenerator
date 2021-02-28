
DROP TABLE IF EXISTS chordPictures;

CREATE TABLE chordPictures(
      id SERIAL PRIMARY KEY,
      chord VARCHAR,
      picture_url VARCHAR
 );

DROP TABLE IF EXISTS chordProgression;

CREATE TABLE chordProgression(
    id SERIAL PRIMARY KEY,
    chord_prog_id VARCHAR,
    chord_1 VARCHAR,
    chord_2 VARCHAR, 
    chord_3 VARCHAR, 
    chord_4 VARCHAR, 
    chord_5 VARCHAR, 
    chord_6 VARCHAR,
    chord_7 VARCHAR, 
 );

DROP TABLE IF EXISTS songs;

CREATE TABLE songs(
    chord_prog_id VARCHAR,
    song_1_api_link VARCHAR,
    song_2_api_link VARCHAR,
    song_3_api_link VARCHAR
);
