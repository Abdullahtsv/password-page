var password = prompt("enter password (Hint! Pakistani)");
var pass = "Pakistani";
var blank = ("");

if(password === pass){
    document.write("<h1>" + "Correct Password!" + "</h1>")
}
else if(password === blank){
    document.write("<h1>" + "Please enter your password!" + "</h1>")
}
else{
    document.write("<h1>" + "In-Correct Password!" + "</h1>")
}
