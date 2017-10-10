var fs = require('fs');
var ejs = require('ejs');
var testFolder = './routes';

function listfiles(req,res)
{
	var response = "";
	testFolder = req.param('dir');
	console.log(testFolder);
	fs.readdir(testFolder, function (err, files) 
	{

		console.log(files.length);
		console.log(files);
		for(var i=0;i<files.length;i++)
		{
			response += files[i]+"<br>";
		}
		res.send(response);
	});
}

exports.listfiles = listfiles;