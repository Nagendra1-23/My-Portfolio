function display(){
    var num1=Math.floor(Math.random()*10);
    var num2=Math.floor(Math.random()*10);
    var num3=Math.floor(Math.random()*10);
    var num4=Math.floor(Math.random()*10);
    document.getElementById("input1").value=num1;
    document.getElementById("input2").value=num2;
    document.getElementById("input3").value=num3;
    document.getElementById("input4").value=num4;
    if(num1==num2 && num2==num3 && num3==num4){
        document.getElementById("image").style.display="block";
        document.getElementById("button").style.display="none";
        document.getElementById("span").style.display="none";
    }
    else{
        document.getElementById("span").innerHTML="Try Again";
    }
}