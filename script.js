let day = parseInt(prompt("Please enter your day"));
let month = parseInt(prompt("Please enter your month"));
if (isNaN(day) || isNaN(month)){
  alert ("Please enter only Number");
}else if(day <1 || day >31 || month <1 || month >12){
  alert ("Invalid Date");
}else if(
  (day >= 21&& month == 3) ||
  (day<= 19&& month == 4)
){
  alert ("Aries");
}else if ( day == 31 && month == 4){
  alert ("Invalid Date");
}else if (
  (day >= 20&& month == 4) ||
  (day<= 20&& month == 5)
) {
  alert ("Taurus")
}else if(
  (day >= 21&& month == 5) ||
  (day<= 20&& month == 6)
){
  alert ("Gemini")
}else if (
  (day >= 20&& month == 6) ||
  (day<= 20&& month == 7)
){
  alert ("Cancer")
}else if(
  (day >= 23&& month == 7) ||
  (day<= 22&& month == 8)
){
  alert ("Leo")
}else if(
  (day >= 23&& month == 8) ||
  (day<= 22&& month == 9)
){
  alert ("Virgo")
}else if(
  (day >= 23&& month == 9) ||
  (day<= 22&& month == 10)
){
  alert ("Libra")
}else if(
  (day >= 23&& month == 10) ||
  (day<= 21&& month == 11)
){
  alert ("Scorpio")
}else if(
  (day >= 22&& month == 11) ||
  (day<= 21&& month == 12)
){
  alert ("Sagittarius")
}else if(
  (day >= 22&& month == 12) ||
  (day<= 19&& month == 1)
){
  alert ("Capricorn")
}else if(
  (day >= 20&& month == 1) ||
  (day<= 18&& month == 2)
){
  alert ("Aquarius")
}else if(
  (day >= 19&& month == 2) ||
  (day<= 20&& month == 3)
){
  alert ("Pisces")
}
