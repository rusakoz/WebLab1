
const time = document.querySelector('div.results p');
const audio = document.querySelector('audio');
const source = document.querySelector('source');
let started = false;
let playedTime = 0;
let timeout;
let counts = 0;
let resul = 0;
let loop = 10;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function formatTime(time) {
    time = Math.round(time);
    let outputTime = time / 1000;
    if (time < 10000) {
        outputTime = '0' + outputTime;
    }
    while (outputTime.length < 6) {
        outputTime += '0';
    }
    return outputTime;
}

function getRandomSound() {
    let songs =
        [
            { filename: "logic/Include/sounds/5.mp3"}
        ];

    let randomIndex = Math.floor(Math.random() * songs.length);
    let song = songs[randomIndex];
    audio.src = song.filename;
    audio.volume = 1;
    audio.play()

}

function click(event){
    let timeStamp = performance.now();
    //console.log(timeStamp +"timeStamp");
    if (started){
        // (async () => {
        //     end(timeStamp);
        //     started = false;
        //     click();
        // })();
        end(timeStamp);
        started = false;
    } else {
        start();
        started = true;
        count++;
    }
}

function start(){
    let min = 1,
        max = 4;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    time.textContent = '00.000';
    //console.log("start")

    timeout = setTimeout(  async () => {
        getRandomSound()

        playedTime = performance.now();

        //console.log(playedTime);
    }, rand * 1000);
}

function end(timeStamp){
    if(!playedTime){
        time.textContent = "Слишком быстро!";
        clearTimeout(timeout);
        //console.log("fast")
    } else {
        //console.log(time);
        //console.log(playedTime +"played");
        const currentTime = timeStamp - playedTime - 1000;

        resul += parseFloat(formatTime(currentTime));

        time.textContent = formatTime(currentTime).toString();
        //console.log(resul);
        playedTime = 0;
        // source.src="";
        audio.src="";
        audio.pause();
    }
}

document.querySelector('div.main').addEventListener("click", evt => {

    while (counts !== loop){
        sleep(1000);
        click();
        counts++;
        //console.log(counts);

    }
    if (counts === loop){
        //console.log(resul);
        time.textContent = resul;
        resul = parseFloat((resul / counts).toFixed(loop));
        let formData = new FormData();
        formData.append('results', resul);
        formData.append('table', 'resultSound');
        fetch('logic/DB/databaseJS.php', {
            body: formData,
            method: "POST"
        }).then(function (response)  {
            return response.text()
        }).then(function (body) {
            console.log(body)
        })
        window.location.replace('http://localhost/WebLab1/sens.php');
    }

}, {passive: false});
