
var scene = document.getElementById('super');
var buttonStart = document.querySelector('button');

var map = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0], [21, 0], [22, 0], [23, 0], [24, 0], [25, 0], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1], [20, 1], [21, 1], [22, 1], [23, 1], [24, 1]];

buttonStart.addEventListener('click', function (){
    fillScene();
})

function ArrayShuffle(a) {
    var d, c, b = a.length;
    while (b) {
        console.log(a[1]);
        c = Math.floor(Math.random() * b);
        d = a[--b];
        a[b] = a[c];
        a[c] = d
    }
    return a
}

function fillScene(){
    scene.innerHTML = '';

    map = ArrayShuffle(map);
    res = '';
    for (let key in map){
        let val =  map[key];
        if (val[1] === 0){
            res += '<div id="' + key +'" class="cell" onclick="forEach(returnVal(this.style.color, this.getAttribute('+"'val'"+')))" style="color: black" val="' + val[0] +'">' + val[0] + '</div>';
        }else {
            res += '<div id="' + key +'" class="cell" onclick="forEach(returnVal(this.style.color, this.getAttribute('+"'val'"+')))" style="color: red" val="' + val[0] +'">' + val[0] + '</div>';
        }
    }
    scene.innerHTML = res;

}

function returnVal(e, el){
    console.log([e, el]);
    return [e, el];
}

//fillScene();

let count = 1;
let flag = false;
let startTime = 0;
function forEach(b = []) {

    if (parseInt(b[1]) === count && b[0] === 'black'){

        if (startTime === 0){

            startTime = performance.now();
        }

        count++;
        //console.log('збс черн')

        if (parseInt(b[1]) === 25){

            //console.log('Черные цифры успешно пройдены')
            time = 0;
            count = 1;
            flag = true;
        }
    }

    else if (parseInt(b[1]) === count && b[0] === 'red' && flag){

        count++;
        //console.log('збс красн')

        if (parseInt(b[1]) === 24){

            //console.log('Все цифры успешно пройдены')
            time = 0;
            count = 1;
            flag = false
            startTime = 0;

            let formData = new FormData();
            formData.append('time', parseInt(formatTime(performance.now() - startTime)));
            formData.append('table', 'resultLab5-1');
            fetch('../logic/DB/lab5-1DB.php', {
                method: 'POST',
                body: formData
            }).then(function (response)  {
                return response.text()
            }).then(function (body) {
                console.log(body)
            })


            window.location.replace("http://localhost/WebLab1/lab5/main-lab5.php");

        }

    }else {
        time = 0;
        count = 1;
        flag = false;
        alert("Вы допустили ошибку, повторите попытку")
        window.location.replace("http://localhost/WebLab1/lab5/attentive.php");
    }

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