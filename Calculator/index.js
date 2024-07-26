var result=0, num='', op='';
var screen=document.querySelector("#screen");
var screenValue="";
for(var i=1; i<document.querySelectorAll(".button").length; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function () {
        var click=this.innerHTML;
        Calculate(click);
    });
}
document.addEventListener("keypress", function(event){
    Calculate(event.key);
});


function Calculate(click){
    console.log(click);
    if(click=="x"){
        click='*';
        screenValue+=click;
        screen.value=screenValue;
    }
    else if(click=="π"){
        screen.value=screenValue+"π";
        click='3.1416';
        screenValue+=click;
    }
    else if(click=='C'){
        screenValue='';
        screen.value=screenValue;
    }
    else if(click=='=' || click=="Enter"){
        screen.value=eval(screenValue);
    }
    else{
        screenValue+=click;
        screen.value=screenValue;
    }
    // if(click>='0' && click<='9'){
    //     num+=click;
    //     if(num[0]=='0' && num[1]=='0')document.querySelector(".screen").innerHTML='0', num='';
    //     else document.querySelector(".screen").innerHTML=num;
    // }
    // else if(click=='+' || click=='-' || click=='x' || click=='/' || click=='%' || click=='^'){
    //     var x=0;
    //     for(var i=0; i<num.length; i++){
    //         x=(x*10)+(num[i]-'0');
    //     }
    //     if(result){
    //         if(op=='+')result+=x;
    //         else if(op=='-')result-=x;
    //         else if(op=='x')result*=x;
    //         else if(op=='/')result/=x;
    //         else if(op=='%')result%=x;
    //         else if(op=='^')result=Math.pow(result, x);
    //     }else
    //         result=x;
    //     num='';
    //     document.querySelector(".screen").innerHTML=click;
    //     op=click
    // }
    // else if(click=='=' || click=="Enter"){
    //     var x=0;
    //     for(var i=0; i<num.length; i++){
    //         x=(x*10)+(num[i]-'0');
    //     }
    //     if(result){
    //         if(op=='+')result+=x;
    //         else if(op=='-')result-=x;
    //         else if(op=='x')result*=x;
    //         else if(op=='/')result/=x;
    //         else if(op=='%')result%=x;
    //         else if(op=='^')result=Math.pow(result, x);
    //     }
    //     document.querySelector(".screen").innerHTML=result;
    //     num='';
    //     op='';
    // }
    // else if(click=='C'){
    //     document.querySelector(".screen").innerHTML=" ";
    //     result=0;
    //     num='';
    // }
}