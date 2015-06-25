function calcTemp(variable)
{
  myAnswer = parseInt(variable) * 9 / 5 + 32

  if(isNaN(myAnswer))
  {
    alert("Please enter a number")
  }
  else
  {
    document.getElementById("conversionResult").innerHTML = "Result: ".concat(myAnswer)
  }
}
