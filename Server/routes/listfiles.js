var fs = require('fs');
var ejs = require('ejs');
var testFolder = './uploads/sal@yahoo.com';

function listfiles(req,res)
{
	var response = "";
	/*var getfiles="select filePath from files where email='"+req.param("email")+"'";
	console.log("Query is:"+getfiles);
	mysql.getfiles(function(err,results){
		if(err){
			throw err;h
		}
		else 
		else 
		{*/
				console.log("hii"+ req.session.email);
				//testFolder+= "sal@yahoo.com";
				console.log(testFolder);
				fs.readdir(testFolder, function (err, files) 
				{

					console.log(files.length);
					console.log(files);
					/*for(var i=0;i<files.length;i++)
					{
						response += files[i]+"','";
					}
					var responseJson = {
						"files":[response],
						//status : "file"
						
					}*/
					var responseJson = files;

					console.log(responseJson);
					res.setHeader('Content-Type', 'application/json');
					res.send(JSON.stringify(responseJson));
					//console.log(response :reponse);
					
					//res.send(response);

				});
		//}
	//});
}
exports.listfiles = listfiles;