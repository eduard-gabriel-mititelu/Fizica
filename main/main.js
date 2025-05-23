let r = document.getElementById("r");
let l = document.getElementById("l");
let s = document.getElementById("s");
let p = document.getElementById("p");
let lung = document.getElementById("lung");
let surf = document.getElementById("surf");
let decimalRange = document.getElementById("rezis");
let decimalValue = document.getElementById("rl");
let surfDig = document.getElementById("surfDig");
let lungDig = document.getElementById("lungDig");
let surfHeight = 100;
let lungWidth = 100;
let pv = 0.016;
let fontStep = 15;
let rFont = 75;
let sFont = 75;
let lFont = 75;
let pFont = 75;
let prevLV = parseFloat(lung.value);
let prevSV = parseFloat(surf.value);
let prevDecimal = parseFloat(decimalRange.value);


function updateFonts() {
    let lv = parseFloat(lung.value);
    let sv = parseFloat(surf.value);
    let decVal = parseFloat(decimalRange.value);

    let deltaLV = lv - prevLV;
    let deltaSV = sv - prevSV;

    
    let deltaDecSteps = Math.round((decVal - prevDecimal) / 0.01);
    let stepFontDecimal = 3;

    let rChange = 0;
    let sChange = 0;
    let lChange = 0;
    let pChange = 0;

    if (deltaSV < 0) {
        rChange += Math.abs(deltaSV) * fontStep;
        sChange -= Math.abs(deltaSV) * fontStep;
        surfHeight = Math.max(10, surfHeight - 20);
    } else if (deltaSV > 0) {
        rChange -= Math.abs(deltaSV) * fontStep;
        sChange += Math.abs(deltaSV) * fontStep;
        surfHeight += 20;
    }

    if (deltaLV < 0) {
        rChange -= Math.abs(deltaLV) * fontStep;
        lChange -= Math.abs(deltaLV) * fontStep;
        lungWidth = Math.max(10, lungWidth - 100);
    } else if (deltaLV > 0) {
        rChange += Math.abs(deltaLV) * fontStep;
        lChange += Math.abs(deltaLV) * fontStep;
        lungWidth += 100;
    }

    if (deltaDecSteps < 0) {
        rChange -= Math.abs(deltaDecSteps) * stepFontDecimal;
        pChange -= Math.abs(deltaDecSteps) * stepFontDecimal;
    } else if (deltaDecSteps > 0) {
        rChange += Math.abs(deltaDecSteps) * stepFontDecimal;
        pChange += Math.abs(deltaDecSteps) * stepFontDecimal;
    }

    rFont = Math.max(15, rFont + rChange);
    sFont = Math.max(15, sFont + sChange);
    lFont = Math.max(15, lFont + lChange);
    pFont = Math.max(15, pFont + pChange);

    r.style.fontSize = rFont + "px";
    s.style.fontSize = sFont + "px";
    l.style.fontSize = lFont + "px";
    p.style.fontSize = pFont + "px";
    surfDig.style.height = surfHeight + "px";
    lungDig.style.height = surfHeight + "px";
    surfDig.style.width = lungWidth + "px";
    lungDig.style.width = lungWidth + "px";

    document.getElementById("bl").textContent = lv;
    document.getElementById("bs").textContent = sv;
    decimalValue.textContent = decVal.toFixed(2);
    document.getElementById("rez").textContent = (decVal * lv / sv).toFixed(4);
    document.getElementById("rl").textContent = decVal.toFixed(2);

    prevLV = lv;
    prevSV = sv;
    prevDecimal = decVal;
}

lung.addEventListener("input", updateFonts);
surf.addEventListener("input", updateFonts);
decimalRange.addEventListener("input", updateFonts);