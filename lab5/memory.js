var scene = document.getElementById('super');
var startButton = document.querySelector('button');
let res = [];

let arrayWords = ['яблоко', 'апельсин', 'мандарин', 'стул', 'стол', 'яма',
    'холм', 'рука', 'топор', 'небо', 'пол', 'мыло', 'крендель', 'слово', 'колонка',
    'провод', 'мышка', 'диван', 'солнце', 'пляж', 'море', 'кресло', 'вода', 'камень',
    'ящерица', 'игра', 'автобус', 'дерево', 'мясо', 'шорты', 'утюг', 'зеркало', 'очки',
    'стекло', 'кнопка', 'мозг', 'телефон', 'стакан', 'ложка', 'гараж', 'дом', 'огород',
    'цветок', 'подушка', 'облако', 'камера', 'замок', 'дверь', 'машина', 'самолет', 'фотография'];

startButton.addEventListener('click', function (){

    (async () => {
        await generateSet();
        await outPut(fillScene(set));
        await result()
        const f = document.getElementById('form');
        f.addEventListener('submit', function (event){
            event.preventDefault();
            const name = f.querySelector('[name="inputWord"]')
            let rSet = [];
            rSet = name.value.split(' ');

            let resultScore = 0;
            for (let a = 0; a < res.length; a++){
                if (res[a] === rSet[a]){
                    resultScore++
                }
            }

            let formData = new FormData();
            formData.append('result', resultScore);
            formData.append('table', 'resultLab5-2');
            fetch('../logic/DB/lab5-2DB.php', {
                method: 'POST',
                body: formData
            }).then(function (response)  {
                return response.text()
            }).then(function (body) {
                console.log(body)
            })

            window.location.replace("http://localhost/WebLab1/lab5/main-lab5.php")

        })
    })();
})


function result(){

    scene.innerHTML = '<form id="form">\n' +
        '  <div class="mb-3">\n' +
        '    <label for="inputWords" class="form-label">Восстановите последовательность слов через пробел</label>\n' +
        '    <input name="inputWord" type="text" class="form-control" id="exampleInputWords" aria-describedby="emailHelp">\n' +
        '  </div>\n' +
        '  <button type="submit" class="btn btn-primary">Отправить</button>\n' +
        '</form>'

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function outPut(a = []){

    for (let b = 0; b < a.length; b++) {
        scene.innerHTML = '<h4>' + a[b] + '</h4>';
        await sleep(3000);
    }
}


function fillScene(a = Set){
    a.forEach(key => res.push(key))
    return res;
}

let set = new Set();
function generateSet(){
    let a = arrayWords.length;
    while (set.size !== 10){
        let b = Math.floor(Math.random() * a);
        set.add(arrayWords[b]);
    }
}