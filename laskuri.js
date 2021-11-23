'use strict'
const plusc=document.getElementById('plus');
function lisääplus() {
    document.getElementById('lasku').value +="+";
}
const miinusc=document.getElementById('miinus');
function lisäämiinus() {
    document.getElementById('lasku').value +="-";
}
const jakoc=document.getElementById('jako');
function lisääjako() {
    document.getElementById('lasku').value +="/";
}
const kertoc=document.getElementById('kerto');
function lisääkerto() {
    document.getElementById('lasku').value +="*";
}

plusc.addEventListener('click', lisääplus);
miinusc.addEventListener('click', lisäämiinus);
jakoc.addEventListener('click', lisääjako);
kertoc.addEventListener('click', lisääkerto);

function lisääyhteensä() {
    let input = document.getElementById('lasku').value;
    let erotettu = input.split(/\/|\+|\*/);
    if (input.includes('+')) {
        document.getElementById('tulos').innerHTML=Number(erotettu[0]) + Number(erotettu[1]);
    }
    else if (input.includes('/')) {
        document.getElementById('tulos').innerHTML=Number(erotettu[0]) / Number(erotettu[1]);
    }
    else if (input.includes('*')) {
        document.getElementById('tulos').innerHTML=Number(erotettu[0]) * Number(erotettu[1]);
    }
    else {
        erotettu = input.split(/(?=-)/);
        let a=erotettu.length;
        if (a>2) {
            document.getElementById('tulos').innerHTML=Number(erotettu[0]) - Number(erotettu[2]);
        }
        else {
            document.getElementById('tulos').innerHTML = Number(erotettu[0]) + Number(erotettu[1]);
        }
    }
    return false;
}
