window.setTimeout("Tick()", 1000);

function Tick() {
window.setTimeout("Tick()", 1000);
}
 
var Timer;
var TotalSeconds;


function CreateTimer(TimerID, Time) {
Timer = document.getElementById(TimerID);
TotalSeconds = Time;

UpdateTimer()
window.setTimeout("Tick()", 1000);
}

function Tick() {
TotalSeconds -= 1;
UpdateTimer()
window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {
Timer.innerHTML = TotalSeconds;
}
function startTime() {
    var today = new Date();
    document.getElementById('txt').innerHTML = today
    var t = setTimeout(startTime, 500);