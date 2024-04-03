let Result= document.getElementById("result");

let insertValue=(value)=>{
   return Result.value += value;
}

let Clear=()=>{
    return Result.value='';
}

let Delete=()=>{
    return Result.value=Result.value.slice(0,-1);
}

let Calculate=()=>{
    try{
        Result.value=eval(Result.value);
    }
    catch(error){
        Result.value="error";

    }
}

