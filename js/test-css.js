function check() {

let q1   = document.myTest.q1.value;
let q2   = document.myTest.q2.value;
let q3   = document.myTest.q3.value;
let q4   = document.myTest.q4.value;
let q5   = document.myTest.q5.value;
let q6   = document.myTest.q6.value;
let q7   = document.myTest.q7.value;
let q8   = document.myTest.q8.value;
let q9   = document.myTest.q9.value;
let q10  = document.myTest.q10.value;
let q11  = document.myTest.q11.value;
let q12  = document.myTest.q12.value;
let q13  = document.myTest.q13.value;
let q14  = document.myTest.q14.value;
let q15  = document.myTest.q15.value;
let q16  = document.myTest.q16.value;
let q17  = document.myTest.q17.value;
let q18  = document.myTest.q18.value;
let q19  = document.myTest.q19.value;
let q20  = document.myTest.q20.value;
let q21  = document.myTest.q21.value;
let q22  = document.myTest.q22.value;
let q23  = document.myTest.q23.value;
let q24  = document.myTest.q24.value;
let q25  = document.myTest.q25.value;

let count = 0;

if (q1  == "b") {count=count+4;}
if (q2  == "b") {count=count+4;}
if (q3  == "b") {count=count+4;}
if (q4  == "b") {count=count+4;}
if (q5  == "b") {count=count+4;}
if (q6  == "b") {count=count+4;}
if (q7  == "b") {count=count+4;}
if (q8  == "b") {count=count+4;}
if (q9  == "b") {count=count+4;}
if (q10 == "b") {count=count+4;}
if (q11 == "b") {count=count+4;}
if (q12 == "b") {count=count+4;}
if (q13 == "b") {count=count+4;}
if (q14 == "b") {count=count+4;}
if (q15 == "b") {count=count+4;}
if (q16 == "b") {count=count+4;}
if (q17 == "b") {count=count+4;}
if (q18 == "b") {count=count+4;}
if (q19 == "b") {count=count+4;}
if (q20 == "b") {count=count+4;}
if (q21 == "b") {count=count+4;}
if (q22 == "b") {count=count+4;}
if (q23 == "b") {count=count+4;}
if (q24 == "b") {count=count+4;}
if (q25 == "b") {count=count+4;}
if (count == 100) {
   document.write("<div style='width:60%; height: auto; margin:auto; margin-top:250px; padding:20px; text-align:center; border-radius: 5px; background-color:#fff;color:#000; height:auto; font-size:30pt;'>Отлично, ты делаешь успехи)      <br><br>     "+count+"%<br><br><a style='color:#000;' href='test-style-obout.html'>Следующий тест</a></div>");
}
else{
   document.write("<div style='width:60%; height: auto; margin:auto; margin-top:250px; padding:20px; text-align:center; border-radius: 5px; background-color:#fff; color:#000; height:auto; font-size:30pt;'>Попробуй в следующий раз)     <br><br>     "+count+"%<br><br><a style='color:#000;' href='test-style-obout.html'>Вернутся назад</a></div>");
}
}