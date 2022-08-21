function check() {

var	q1 = document.myTest.q1.value;
var	q2 = document.myTest.q2.value;

var count = 0;

if (q1 == "b") {
	count=count+50;
}
if (q2 == "b") {
	count=count+50;
}
if (count == 100) {
	document.write("<div style='width:700px; margin:auto; margin-top:150px; padding:20px; text-align:center; border-radius: 5px; background-color:#fff;color:#000; height:auto; font-size:30pt;'>Отлчно, ты делаеш успехи)   <br><br>    Очков: "+count+"<br><a href='test-style-two.html'<img height='200px' src='img/css/css_osnovy.png'></a><br><a style='color:#000;' href='test-style-two.html'>Next</a></div>");
}
else{
	document.write("<div style='width:700px; margin:auto; margin-top:150px; padding:20px; text-align:center; border-radius: 5px; background-color:#fff; color:#000; height:auto; font-size:30pt;'>Попробуй в следующий раз)     <br><br>    Очков: "+count+"<br><a href='test-style-two.html'<img height='200px' src='img/css/css_osnovy.png'></a><br><a style='color:#000;' href='test-style.html'>Backup</a></div>");
}
}