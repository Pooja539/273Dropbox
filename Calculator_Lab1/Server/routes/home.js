var ejs = require("ejs");

function add(req,res)
{
	var op1 = Number(req.param("op1"));
	var op2= Number(req.param("op2"));
	console.log("hii"+op1);
	console.log("hii"+op2);
	var result= op1+op2;
	console.log("hii"+result);
	res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({ "result": result }));
}

function sub(req,res)
{
	var op1 = Number(req.param("op1"));
	var op2= Number(req.param("op2"));
	
	var result= op1-op2;
	
	res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({ result: result }));
}

function mult(req,res)
{
	var op1 = Number(req.param("op1"));
	var op2= Number(req.param("op2"));
	
	var result= op1*op2;

	res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({ result: result }));
}

function divide(req,res)
{
	var op1 = Number(req.param("op1"));
	var op2= Number(req.param("op2"));
	
	var result= op1/op2;
	
	res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({ result: result }));
}































exports.add=add;
exports.sub=sub;
exports.mult=mult;
exports.divide=divide;