const container = document.getElementById('container');
const text = document.getElementById('text');


// Create variables to set times
const totalTime = 7500; // 7.5 seconds
const breatheTime = totalTime / 2.5;
const holdTime = totalTime / 5;




// Puts Breathe In, Hold, Breathe Out, into const text (p in html) && container.className makes circle grow and shrink from CSS
function breathAnimation(){
    text.innerText = 'Breathe In';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
        text.innerText = 'Breathe Out';
        container.className = 'container shrink';

        }, holdTime);
    }, breatheTime);
}
// Calls breathAnimation function to run it
breathAnimation();




// Runs breathAnimation function every 7.5 seconds 
setInterval(breathAnimation, totalTime);