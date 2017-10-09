var express = require('express');
var ejs = require("ejs");
var router = express.Router();
var multer = require('multer');
var glob = require('glob');
var mv = require('mv');
var bodyParser = require('body-parser');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files/meet@gmail.com')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({storage:storage});

/* GET users listing. */

/*router.post('/upload', upload.single('mypic'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file);
    res.status(204).end();
});*/
router.POST('/upload', upload.single('mypic'),function(req, res, next) {
  /*console.log(req.body);
    console.log(req.file);
    res.status(204).end();*/

    console.log("i am here");
    upload(req, res, function(err) {
        if (err) {
            return res.end("Error uploading file.");
        }
         console.log("data");
        // console.log(req.body);
         console.log("files");
         console.log(req.files);
        mv("./files/" + req.files[0].filename, "./files/" + "meet@gmail.com" + "/"
                + req.files[0].filename, function(err) {

            if (err) {
                console.log(err);
            }
        });
        res.end("File is uploaded at : " + "meet@gmail.com" + "/"
                + req.files[0].filename);

    });
});

module.exports = router;
