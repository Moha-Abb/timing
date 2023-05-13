let inputs, clock, alarm, hours, minutes, seconds, repeater;

//---------------------RELOJ-------------------------------

const hora = document.getElementById('hora');
const min = document.getElementById('min');
const seg = document.getElementById('seg');

function reloj() {

    //-----crear los datos
    const tiempo = new Date();
    let horas = quitarZeros(tiempo.getHours());
    let minutos = quitarZeros(tiempo.getMinutes());
    let segundos = quitarZeros(tiempo.getSeconds());

    //------Mostrar los datos
    hora.textContent = horas + ' h';
    min.textContent = minutos + ' m';
    seg.textContent = segundos + ' s';


}
reloj();
const repeaterReloj = countdown(reloj);
function quitarZeros(n) {

    if (n <= 9) return ('0' + n);
    return n;
}

//---------------------CRONOMETRO----------------------------------

inputs = Array.from(document.getElementsByClassName('number'));
clock = document.querySelector('.contenedor1');
alarm = new Audio('ringtones-pato-donald.mp3');


function starttimer() {
    //leer los inputs
    parsetime();

    //actualizar la vista

    settimer();
    //arrancar el timer
    countdown(runner)
}

function parsetime() {

    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);

    if (seconds > 59) {
        alert("segundos no pueden ser superiores a 59");
        location.reload();
    }
    if (minutes > 59) {
        alert("minutos no pueden ser superiores a 59");
        location.reload();
    }
    if (hours > 24) {
        alert("horas no pueden ser superiores a 24");
        location.reload();
    }


}

function settimer() {

    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span>
    <p class="number">${minutes > 9 ? minutes : ('0' + minutes)}</p><span>min</span>
    <p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>sg</span> `

    document.title = ` ${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}   `;
}

function countdown(variable) {
    repeater = setInterval(variable, 1000);

}

function runner() {

    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            if (hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                alarm.play();
            }
        }
    }

    settimer();
}

function stoptimer() {
    clearInterval(repeater);

    location.reload();
}