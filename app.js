var math = +prompt("Enter your Maths number?")
var english = +prompt("Enter your English Marks ?")
var comp = +prompt("Enter  your Computer ?")
var islamiat = +prompt("Enter your Islamiat?")
var total = math + english + comp + islamiat
var percent = total / 400 * 100
document.write('<center>'+'<table border=2>' + '<tr>' + '<td>' + "Maths" + '</td>'+ '<td>' + math + '</td>' + '</tr>' +'<tr>'+'<td>'+"English"+'</td>'+ '<td>' + english + '</td>'+'</tr>'+ '</tr>' +'<tr>'+'<td>'+"Computer"+'</td>'+'</td>'+ '<td>' + comp +'</tr>'+ '</tr>' +'<tr>'+'<td>'+"Islamiat"+'</td>'+ '<td>' + islamiat +'</tr>'+'</tr>'+'<tr>'+'<td>'+"Total"+'</td>'+'<td>'+total+'</td>'+'</tr>'+'<tr>'+'<td>'+"Percentage"+'</td>'+'<td>'+percent+'</td>'+'</tr>'+'</table>'+'</center>')

if (percent >= 90 && percent <= 100) {
    document.write("<center><table border=2><tr><td>Grade</td><td>A1+</td></tr></table></center>")
}
else if (percent >= 80 && percent <= 90) {
    document.write("<center><table  border=2><tr><td>Grade</td><td>A1</td></tr></table></center>")
}
else if (percent >= 70 && percent <= 80) {
    document.write("<center><table  border=2><tr><td>Grade</td><td>A</td></tr></table></center>")
}
else if (percent >= 60 && percent <= 70) {
    document.write("<center><table  border=2><tr><td>Grade</td><td>B</td></tr></table></center>")
}
else if (percent >= 50 && percent <= 60) {
    document.write("<center><table  border=2><tr><td>Grade</td><td>C</td></tr></table></center>")
}
else if (percent >= 40 && percent <= 50) {
    document.write("<center><table  border=2><tr><td>Grade</td><td>D</td></tr></table></center>")
}
else if (percent >= 100) {
    document.write("Invalid")
}
else {
    document.write("<table border=2><tr><td>Grade</td><td>Fail</td></tr></table>")
}