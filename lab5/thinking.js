var scene = document.getElementById('super');
var startButton = document.querySelector('button');
let waitAnswer;
let countLoop = 1;
let rightAnswer = 0;

startButton.addEventListener('click', function (){

    startTest();

})

function startTest(){
    let str = generateSubsequence(generateOperations());
    waitAnswer = str.at(-1);
    str.pop();
    str.push('?');
    scene.innerHTML =
        '<div id="main-expert" class="main container-fluid">\n' +
        '    <div id="expert-button" class="main-content container">\n' +
        '        <div class="row" id="super">\n' +
        '\n' +
        '            <div class="col">\n' +
        '            </div>\n' +
        '            <div class="col">\n' +
        '\n' +
        '                <form id="form">\n' +
        '                   <div class="mb-3">\n' +
        '                       <h4 style="margin-left: 100px">'+ str + '</h4>' +
        '                       <input name="inputWord" type="text" class="form-control" id="exampleInputWords" style="margin-top: 40px" >\n' +
        '                   </div>\n' +
        '                       <button id="button" type="submit" class="btn btn-secondary" name="button-next" style="margin-top: 30px; margin-left: 100px"> Отправить ответ</button>\n' +
        '                </form>' +
        '\n' +
        '            </div>\n' +
        '            <div class="col">\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>'

    let button = document.getElementById('form');

    button.addEventListener('submit', function (){
        const name = button.querySelector('[name="inputWord"]')

        let answer = name.value;
        if (answer === waitAnswer && countLoop !== 5){
            countLoop++;
            rightAnswer++
            startTest();
        }
        else if(answer !== waitAnswer && countLoop !== 5){
            countLoop++;
            startTest();
        }else if (countLoop === 5){

            if (answer === waitAnswer){
                rightAnswer++
            }

            let formData = new FormData();
            formData.append('result', rightAnswer);
            formData.append('table', 'resultLab5-3');
            fetch('../logic/DB/lab5-3DB.php', {
                method: 'POST',
                body: formData
            }).then(function (response)  {
                return response.text()
            }).then(function (body) {
                console.log(body)
            })

            window.location.replace("http://localhost/WebLab1/lab5/thinking.php")

        }
    })

}


function generateSubsequence(a = ''){

    let rand = Math.round(Math.random() * 2 + 3);
    let randCoefficient = Math.round(Math.random() * 4 + 2);

    if (a === 'multiply'){
        let resultStr = rand.toString();
        let resultInt = rand;
        for (let b = 0; b < 3; b++){
            resultInt = resultInt * randCoefficient;
            resultStr += ', ' + resultInt;
            //console.log(resultStr)
        }
        return resultStr.split(', ');
    }
    if (a === 'addition'){
        let resultInt = rand;
        let resultStr = resultInt.toString();
        let resultCoeff = randCoefficient + Math.round(Math.random() * 8)
        for (let b = 0; b < 3; b++){
            resultInt = resultInt + resultCoeff;
            resultStr += ', ' + resultInt;
            //console.log(resultStr)
        }
        return resultStr.split(', ');
    }
    if (a === 'subtraction'){
        let resultInt = Math.round(Math.random() * 30 + 20);
        let resultCoeff = randCoefficient
        let resultStr = resultInt.toString();
        for (let b = 0; b < 3; b++){
            resultInt = resultInt - resultCoeff;
            resultStr += ', ' + resultInt;
            //console.log(resultStr)
        }
        return resultStr.split(', ');
    }
    if (a === 'febonacci'){
        let feb  = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
        let resultInt = Math.round(Math.random() * 10);
        let resultStr = feb[resultInt];
        for (let b = 1; b < 5; b++){
            resultStr += ', ' + feb[resultInt + b];
            //console.log(resultStr)
        }
        return resultStr.split(', ');
    }


}

function generateOperations(){
    let operations = ['multiply', 'addition', 'subtraction', 'febonacci']
    let rand = Math.round(Math.random() * 3);
    return operations[rand];
}