let r = document.getElementById("r");
let p = document.getElementById("p");
let l = document.getElementById("l");
let s = document.getElementById("s");
let lung = document.getElementById("lung");
let surf = document.getElementById("surf");
let lungDig = document.getElementById("lungDig");
let surfDig = document.getElementById("surfDig");

let pv = 0.016;
let lv = lung.value * 2;
let sv = surf.value;

lung.oninput = function() {
    let r2 = r.style.fontSize + 75;
    let l2 = l.style.fontSize + 75;
    r.style.fontSize = String(r2) + "px";
    l.style.fontSize = String(l2) + "px";
    document.getElementById("bl").innerHTML = this.value;
    document.getElementById("rez").innerHTML = pv * lv/(sv * sv);
}

surf.oninput = function() {
    let r2 = r.style.fontSize + 75;
    let s2 = l.style.fontSize + 75;
    r.style.fontSize = String(r2) + "px";
    s.style.fontSize = String(s2) + "px";
    document.getElementById("bs").innerHTML = this.value;
    document.getElementById("rez").innerHTML = pv * lv/(sv * sv);
}
