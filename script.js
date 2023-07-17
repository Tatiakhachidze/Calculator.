const first=prompt("enter first number:");
const second=prompt("enter second number:");
const x=parseInt(first);
const y=parseInt(second);

function add(){
   /* var c=x+y;
    document.getElementById('result').innerText = "The result is: " + c;*/
    alert(x+y);
}
function sub(){
    alert(x-y);
}
function mul(){
    alert(x*y);
}
function div(){
    alert(x/y);
}
function pow(){
    /*var b;
    var a = x;
		   for (b = 0;b < y - 1;b++){
		   a = a * x;
		   };
    alert(a);*/
    alert(Math.pow(x,y));
}
function or(){
    alert(x|y);
}
function and(){
    alert(x&y);
}
function xor(){
    alert(x^y);
}
function per(){
    alert(x%y);
}
function pi(){
    var π=3.1415926536;
    alert(x*π);
}
function sqrt(){
    alert(Math.sqrt(x));
}
function sin(){
    alert(Math.sin(x));
}
function cos(){
    alert(Math.cos(x));
}
function tan(){
    alert(Math.tan(x));
}

function asinu(){
    alert(Math.asin(x));
}
function acosu(){
    alert(Math.acos(x));
}
function atan(){
    alert(Math.atan(x));
}
function log(){
    alert(Math.log(x));
}
function log2(){
    alert(Math.log2(x));
}
function exp(){
    alert(Math.exp(x));
}
function abs(){
    alert(Math.abs(x));
}
function cosh(){
    alert(Math.cosh(x));
}

function reload(){
    location.reload(true);
}

function setMyKeyDownListener() {
    document.addEventListener(
      "keyup",
      function(event) {MyFunction(event.key)}
    )
}

function MyFunction (the_Key) {
    location.reload(true);
}
