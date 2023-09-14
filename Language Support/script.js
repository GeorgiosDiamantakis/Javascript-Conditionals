let message = "";
let language = "Greek";

if (language === "English")
{
  message = "Thank you";
} else if (language === "Spanish") {
  message = "Gracias";
}else if (language === "German") {
  message = "Danke";
}
else{
  message = "We don't support Japanese";
}

console.log(message);