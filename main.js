let a = document.getElementById("vol").value;
let b = Number(a);
document.getElementById("demo").innerHTML = b + 273;
document.getElementById("demo2").innerHTML = b * 1.8 + 32;
document.getElementById("demo3").innerHTML = b;

a.oninput = function() {
    let c = Number(a.value);
    document.getElementById("demo").innerHTML = c + 273;
    document.getElementById("demo2").innerHTML = c * 1.8 + 32;
    document.getElementById("demo3").innerHTML = c;
}