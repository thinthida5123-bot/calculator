let s= document.getElementById("display");

function add(num){
    s.value = s.value + num;
}

function clearAll(){
    s.value = "";
}

function back(){
    s.value=s.value.slice(0,-1);
}

function result(){
    s.value = eval(s.value);
}