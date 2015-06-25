function calcTime(c)
{
   var	time = parseInt(c) / 60;

   if(isNaN(time))
   {
   	alert("Please enter a number!")
   }
   else
   {
      document.getElementById("conversionResult").
      innerHTML = "Conversion Result: ".concat(time);
   }
}
