// new code here
var express = require('express');
var router = express.Router();
var multer = require('multer');
var glob = require('glob');
var mv = require('mv');
var Router = require('router')
var router = Router()
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/'+req.session.email);
    },
    filename: function (req, file, cb) {
        //cb(null, file.fieldname + '-' + Date.now())
        cb(null,file.originalname);
    }
});

var upload = multer({storage:storage});

/* GET users listing. */

router.post('/upload', upload.single('mypic'), function (req, res, next) {
  console.log(req.sessionID);
  console.log("hey its auth" + req.session.email);
       //console.log(req.uploads);
       /* mv("./uploads/" + req.uploads[0].filename, "./uploads/" +"kena@gmail.com"+ "/"
                + req.uploads[0].filename, function(err) {

            if (err) {
                console.log(err);
            }
        });*/
        //res.end("File is uploaded at : " + "pooja" + "/"
               // + req.uploads[0].filename);
               res.status(204).end();
        //res.end (
});


module.exports = router;


