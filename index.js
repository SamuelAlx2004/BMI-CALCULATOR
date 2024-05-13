function calculate(){
    var height=(document.getElementById("height").value)/100;
    var weight=document.getElementById("weight").value;

    var bmi=weight/height**2;
    var text=""

   if(bmi<18.5){
    text="Your BMI are under"
   }else if(bmi<24.9){
    text="Your BMI are normal"
   }else if(bmi<29.9){
    text="Your BMI are over"
   }else if(bmi<39.9){
    text="Your BMI are obese"
   }
   document.getElementById("text_area").innerText=text
}