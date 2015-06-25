//calculate function
function calcSpeed(c)
{

//variables
var mph = parseInt(c) * 2.2369

if(isNaN(mph))
  {
    alert("Please enter a number.")
  }
  else
  {
    document.getElementById("conversionResult").
    innerHTML = "Converted Number: ".concat(mph)  
  }
}
