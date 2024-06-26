



var count = 0
var gcount = 0
document.getElementById("counter").innerHTML = count;  
document.getElementById("counters").innerHTML = count;  

function add1() {
    count++
    document.getElementById("counter").innerHTML = count
}
  
function add2() {
    count+=2
    document.getElementById("counter").innerHTML = count
}

function add3() {
    count+=3
    document.getElementById("counter").innerHTML = count
}

function add11() {
    gcount++
    document.getElementById("counters").innerHTML = gcount
}
  
function add22() {
    gcount+=2
    document.getElementById("counters").innerHTML = gcount
}

function add33() {
    gcount+=3
    document.getElementById("counters").innerHTML = gcount
}
  
function startOver() {
    count = 0;
    gcount = 0;
    document.getElementById("counter").innerHTML = 0;  
    document.getElementById("counters").innerHTML = 0;  
}

console.log(document.querySelectorAll("#countDownAPI"))