

function calcTime(city, offset)
{
  // Creating an object which holds the date.
  d = new Date();

  Date()

  localTime = d.getTime();

  //Obatining the offset in regards to UTC and converting it
  //to Milliseconds. Minus number is ahead of UTC and a positive
  //is above.
  localOffset = d.getTimezoneOffset() * 60000;

  //Obataining the UTC time in Milliseconds
  utc = localTime + localOffset;

  //Obataining and adding the destinations UTC time offset
  //Using Juba in South Sudan.

  offset = 3.0;

  juba = utc + (3600000*offset);

  //Converting the millisecond value to a date string.
  nd = new Date(utc + (3600000*offset));
  document.writeIn("The local time of your city is: ") + nd.toLocaleString() + "<br>");

}
