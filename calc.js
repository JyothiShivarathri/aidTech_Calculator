let result=document.getElementById("display");
let calculate=(number)=>{
    result.value+=number;
}
let Result=()=>{
    try{
       result.value=eval(result.value);
    }
    catch(err){
        result.value="ERROR";
    }
}
function clr(){
    result.value=" ";
}
function del(){
    result.value=result.value.slice(0,-1);
}