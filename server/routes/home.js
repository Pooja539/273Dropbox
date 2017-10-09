var ejs = require("ejs");
var mysql = require('./mysql');
var fs = require('fs');

function authenticate(req,res)
{
	var checkUser="select * from users where email='"+req.param("email")+"' and password='" + req.param("password") +"'";
	console.log("Query is:"+checkUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length)
			{
				let user = results[0];
				console.log(results);
				let responseJson = ({
					status: 201,
                            user : {email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            
                            token: 'fake-jwt-token'}
                        });

                console.log(responseJson);        
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(responseJson));
			}
			else 
			{    
				let responseJson = ({
					error : 'error',
					status: 500
				})
				console.log(responseJson); 
				console.log("Invalid Login");       
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(responseJson));
				
				/*let responseJson={
					status: 'invalid'
				};
				console.log(responseJson);
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify({responseJson}));*/
			}
		}  
	},checkUser);



}
//if (url.endsWith('/users/register') && opts.method === 'POST')
function register(req,res) 
{
                    // get new user object from post body
                    //let newUser = JSON.parse(opts.body);
                    
                   	var duplicateUser = "select * from users where email = '"+req.param("email")+"'";
                   	console.log("Duplicate user query is" + duplicateUser);
                   	mysql.fetchData(function(err)
                   	{
						if(err)
						{
							throw err;
						}
						else 
						{
								/*if(duplicateUser)
								{
									reject('Email "' + req.param("email") + '" already taken');
                        			return;
                   				}*/
                   				//else

                   				//{
                   					var addUser= "INSERT INTO users(firstName,lastName,email,password) VALUES ('"+req.param("firstName")+"','"+req.param("lastName")+"','"+req.param("email")+"','"+req.param("password")+"')";
                   					console.log("query is"+addUser);
                   					
									mysql.addUser(function(err){
									if(err)
									{
										throw err;
									}
									else
									{
										fs.mkdir("./files/" + req.param("email"), function(err) {
										if (!err) {
										console.log("directory created");

									} else {
										return res.end("Dir creation failed : " + err);
									}
									});

										console.log("pooja");
										res.setHeader('Content-Type', 'application/json');
										res.send(JSON.stringify({}));
	
									}
								},addUser);
                   				//}

					}
				},duplicateUser);
}

exports.authenticate = authenticate;
exports.register= register;					