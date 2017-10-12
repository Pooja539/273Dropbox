var fs = require('fs');
var ejs = require('ejs');
var testFolder = './uploads/sal@yahoo.com';
var mysql = require('mysql');
function listfiles(req,res)
{
				var response = "";
				console.log("hii"+ req.session.email);
				//testFolder+= "sal@yahoo.com";
				console.log(testFolder);
				fs.readdir(testFolder, function (err, files) 
				{
					console.log(files.length);
					console.log(files);
					var responseJson = files;
					console.log(responseJson);
					res.setHeader('Content-Type', 'application/json');
					res.send(JSON.stringify(responseJson));
				});
}

function starfile(req,res)
{
	var star = true;
	var starfilequery = "INSERT into files(star) VALUES('"+star+"') where filename='"+req.param("filename")+"'";
		mysql.starfilequery(function(err)
                   	{
						if(err)
						{
							throw err;
						}
						else 
						{
							res.send(JSON.stringify("starred"));
						}
					}		
}
exports.listfiles = listfiles;