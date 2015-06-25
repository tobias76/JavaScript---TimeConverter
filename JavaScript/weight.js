// Toby Reed
function calcWeight(c)
{
  var Stone = parseInt(c) * 2.2 / 14;

  //This checks to make sure the input is a number
  if(isNaN(Stone))
  {
    alert("Please enter a number")
  }
  //This concats the input and prints it to the screen.
  else
  {
    document.getElementById("conversionResult").
    innerHTML = "Conversion Answer: ".concat(Stone);
  }
}
