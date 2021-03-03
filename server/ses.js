const aws = require("aws-sdk");
const fs = require("fs");
const { s3Url } = require("./config.json");

let secrets;

if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("./secrets");
}

const s3 = new aws.S3({
    accessKeyId: secrets.AWS_KEY,
    secretAccessKey: secrets.AWS_SECRET,
});

exports.upload = (req, res, next) => {
    if (!req.file) {
        return res.sendStatus(500);
    }

    // this gives you additional info about the file you just uploaded
    const { filename, mimetype, size, path } = req.file;

    const promise = s3
        .putObject({
            Bucket: "pulse-today", //spicedling if you're using spiced's credentials
            ACL: "public-read",
            Key: filename,
            Body: fs.createReadStream(path),
            ContentType: mimetype,
            ContentLength: size,
        })
        .promise();

    promise
        .then(() => {
            // it worked!!!
            console.log("amazon upload is complete!!!");
            next();
            // this will delete the img you just uploaded to aws from uploads folder - this is optional!
            // fs.unlink(path, () => {});
        })
        .catch((err) => {
            // uh oh
            console.log(err);
        });
};
