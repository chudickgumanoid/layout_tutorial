function check() {

let q1   = document.myTest.q1.value;
let q2   = document.myTest.q2.value;
let q3   = document.myTest.q3.value;
let q4   = document.myTest.q4.value;
let q5   = document.myTest.q5.value;

let count = 0;

if (q1  == "b") {count=count+20;}
if (q2  == "b") {count=count+20;}
if (q3  == "b") {count=count+20;}
if (q4  == "b") {count=count+20;}
if (q5  == "b") {count=count+20;}
if (count == 100) {
   document.write("<div style='width:60%; height: auto; margin:auto; margin-top:250px; padding:20px; text-align:center; border-radius: 5px; background-color:#fff;color:#000; height:auto; font-size:30pt;'>Отлично, ты делаешь успехи)      <br><br>     "+count+"%<br><br><a style='color:#000;' href='organize.html'>Следующий урок</a></div>");
}
else{
   document.write("<div style='width:60%; height: auto; margin:auto; margin-top:250px; padding:20px; text-align:center; border-radius: 5px; background-color:#fff; color:#000; height:auto; font-size:30pt;'>Попробуй в следующий раз)     <br><br>     "+count+"%<br><br><a style='color:#000;' href='organize.html'>Вернутся назад</a></div>");
}
}