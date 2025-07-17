function pick(val){
document.getElementById("a").value +=val;
}
function result(){
   let x=document.getElementById("a").value;
   let y=eval(x);
   document.getElementById("a").value=y;
}
function clr(){
   let y=" ";
   document.getElementById("a").value=y;
}
function del(){
    let x=document.getElementById("a").value;
    let y=x.slice(0,-1);
     document.getElementById("a").value=y;
}