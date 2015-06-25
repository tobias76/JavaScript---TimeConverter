//Toby Reed
function calcDistance(distance)
{
    var Result = parseInt(distance) / 0.62137

    //This checks to make sure the input is a number
    if(isNaN(Result))
    {
      alert("Excuse me? Try again.")
    }
    //This concats the input and prints it to the screen.
    else
    {
      document.getElementById("conversionResult").
      innerHTML = "Kilometers = ".concat(Result);
    }
}
