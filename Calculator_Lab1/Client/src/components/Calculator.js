import React, {Component} from 'react';
//import * as API from './API';
var Button = require('react-button');

class Calculator extends Component {
  add()
        {
          document.getElementById("errormessage").innerHTML = "";
          var op1= document.getElementById("op1").value;
          
          var op2= document.getElementById("op2").value;
          
          fetch('http://localhost:3000/add', {
          method: 'POST', 
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({"op1":op1,"op2":op2})
           }).then((response) => response.json()).then((responseJson) => {
        //console.log("heyyy"+responseJson);
        document.getElementById("result").innerHTML = responseJson.result;
        
        return responseJson;
    })
        .catch(error => {
            console.log("This is error"+error);
            return error;
});

        }

        sub()
        {
          document.getElementById("errormessage").innerHTML = "";
          var op1= document.getElementById("op1").value;
          var op2= document.getElementById("op2").value;
          
          fetch('http://localhost:3000/sub', {
          method: 'POST', 
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({"op1":op1,"op2":op2})
           }).then((response) => response.json()).then((responseJson) => {
        console.log(responseJson.result);
        document.getElementById("result").innerHTML = responseJson.result;
        
        return responseJson;
    })
        .catch(error => {
            console.log("This is error"+error);
            return error;
});
          
        }
        mult()
        {
          document.getElementById("errormessage").innerHTML = "";
           var op1= document.getElementById("op1").value;
          
          var op2= document.getElementById("op2").value;
          
          fetch('http://localhost:3000/mult', {
          method: 'POST', 
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({"op1":op1,"op2":op2})
           }).then((response) => response.json()).then((responseJson) => {
        console.log(responseJson.result);
        document.getElementById("result").innerHTML = responseJson.result;
        
        return responseJson;
    })
        .catch(error => {
            console.log("This is error"+error);
            return error;
});

        }
        divide()
        {
          document.getElementById("errormessage").innerHTML = "";
          var op1= document.getElementById("op1").value;
          var op2= document.getElementById("op2").value;
          try
          {
          	if(op2==0) throw "Invalid Operand 2 - Cannot divide by Zero";
          }
          catch(err) {
       document.getElementById("errormessage").innerHTML = err;
    }
          fetch('http://localhost:3000/divide', {
          method: 'POST', 
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({"op1":op1,"op2":op2})
           }).then((response) => response.json()).then((responseJson) => {
        console.log(responseJson.result);
        document.getElementById("result").innerHTML = responseJson.result;
        
        return responseJson;
    })
        .catch(error => {
            console.log("This is error"+error);
            return error;
});

        }
	render(){
        return(
<div id="background" style={{backgroundColor: 'powderblue',height:500}}>        
        <br/>
        <h1>Calculator</h1>
         <div id="main">
             <div id="first-rows">
 				<b>Enter Operand 1:</b>&nbsp;&nbsp;<input type="number" id="op1"/><br/>
               <b>Enter Operand 2:</b>&nbsp;&nbsp;<input type="number" id="op2"/>
                 </div>  
                 <br/>
               <div className="rows">
               <Button value="+" overStyle={{background: 'darkblue'}} activeStyle={{background: 'green'}} onClick={this.add}>+</Button>&nbsp;&nbsp;&nbsp;
               <Button value="-" overStyle={{background: 'darkblue'}} activeStyle={{background: 'green'}} onClick={this.sub}>-</Button>&nbsp;&nbsp;&nbsp;
               <Button value="*" overStyle={{background: 'darkblue'}} activeStyle={{background: 'green'}} onClick={this.mult}>*</Button>&nbsp;&nbsp;&nbsp;
               <Button value="/" overStyle={{background: 'darkblue'}} activeStyle={{background: 'green'}} onClick={this.divide}>/</Button>&nbsp;&nbsp;&nbsp;
               </div>
             </div>
             <br/>
             <b> Result: </b> <b><div id="result">0</div> </b>
             <p id="errormessage"></p>
         </div>     
           
        )
    }
}
export default Calculator;