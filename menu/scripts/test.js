let results;
let mainRow = document.getElementById('main-row')
let mainCol = document.getElementById('main-col')



// Асинхранные функции ВСЕГДА возвращают промисы
async function returnPromiseAdminDB(){

    //let formData = new FormData();
    //formData.append('table', 'resultpvk');
    let response = await fetch('../../logic/DB/forMenu/adminDB.php', {
        method: 'POST',
        //body: formData
    })

    return response.json().catch(()=>alert('Произошла ошибка запроса'));


    // let formData = new FormData();
    // formData.append('id', 75);
    // formData.append('table', 'resultpvk');
    // fetch('../../logic/DB/forMenu/adminDB.php', {
    //     method: 'POST',
    //     body: formData
    // }).then(function (response)  {
    //
    //     return response.json()
    //
    // }).then(function (body) {
    //
    //     results = body
    //

    // })

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function parsePromise(promise){

    let counter = 0;
    await promise.then(
        function (result){
            for (let key in result[0]) {
                counter++;
            }
        }
    )

    if (counter !== 0) {
        let res = '';
        let last = '';
        return await promise.then(
            function (result) {
                let div = document.createElement('div');
                div.className = mainCol.className;
                div.id = mainCol.id;

                let button = document.createElement('button');
                button.id = 'button-submit'
                button.type = 'submit';
                button.className = 'btn btn-primary';
                button.innerText = 'Отправить'

                let buttonBack = document.createElement('button');
                buttonBack.id = 'button-back'
                buttonBack.type = 'submit';
                buttonBack.className = 'btn btn-primary';
                buttonBack.innerText = 'Назад'


                result.forEach((a) => {
                    //console.log(a)
                    if (a.ПРОФЕССИЯ !== last){
                        let h4 = document.createElement('h4');
                        h4.style.color = 'red'
                        let div1 = document.createElement('div');
                        div1.className = 'container text-center';
                        let div2 = document.createElement('div');
                        div2.className = 'row';
                        let div3_1 = document.createElement('div');
                        div3_1.className = 'col';
                        let div3_2 = document.createElement('div');
                        div3_2.className = 'div';
                        let div3_3 = document.createElement('div');
                        div3_3.className = 'div';
                        let h4pvk = document.createElement('h4');
                        h4pvk.className = 'getInfo';
                        h4pvk.style.color = 'blue'
                        let h4score = document.createElement('h4');
                        h4score.className = 'getInfo';
                        let input = document.createElement('input');
                        input.type = 'range';
                        input.className = 'form-range getInfo';
                        input.min = '0'
                        input.max = '100'
                        input.step = '10'
                        let h4testSens = document.createElement('h4');
                        h4testSens.className = 'getInfo';
                        let h4testLab3 = document.createElement('h4');
                        h4testLab3.className = 'getInfo';
                        let h4testLab4 = document.createElement('h4');
                        h4testLab4.className = 'getInfo';
                        let h4testLab5 = document.createElement('h4');
                        h4testLab5.className = 'getInfo';
                        h4testSens.innerText = 'Сенсомоторные тесты'
                        h4testLab3.innerText = 'Тесты 3-й лабы'
                        h4testLab4.innerText = 'Тесты 4-й лабы'
                        h4testLab5.innerText = 'Тесты 5-й лабы'
                        let end = document.createElement('h4');
                        end.className = 'end'
                        end.innerText = '------------------------------------------------------------------------------------------------------------'


                        h4.innerHTML = a.ПРОФЕССИЯ;
                        div.append(h4);

                        div.append(div1);
                        div1.append(div2);

                        h4pvk.innerText = a.ПВК;
                        div2.append(div3_1);
                        div3_1.append(h4pvk)

                        //div3_2.innerHTML = '<input type="range" className="form-range getInfo" min="0" max="100" step="10" id="customRange3">';
                        div2.append(div3_2);
                        div3_2.append(h4testSens)
                        div3_2.append(input)
                        div3_2.append(h4testLab3)
                        div3_2.append(input.cloneNode())
                        div3_2.append(h4testLab4)
                        div3_2.append(input.cloneNode())
                        div3_2.append(h4testLab5)
                        div3_2.append(input.cloneNode())


                        // h4.innerText = 'ТЕСТ1'
                        //
                        // h4.innerText = 'ТЕСТ1'
                        //
                        // h4.innerText = 'ТЕСТ1'
                        //
                        // h4.innerText = 'ТЕСТ1'
                        //
                        // h4.innerText = 'ТЕСТ1'
                        //
                        // h4.innerText = 'ТЕСТ1'
                        //
                        // h4.innerText = 'ТЕСТ1'
                        //
                        // h4.innerText = 'ТЕСТ1'





                        h4score.innerText = 'Рейтинг экспертов: ' + a.СР_ОЦЕНКА
                        div2.append(div3_3);
                        div3_3.append(h4score);

                        div.append(end);

                        last = a.ПРОФЕССИЯ;
                    }else{
                        let div1 = document.createElement('div');
                        div1.className = 'container text-center';
                        let div2 = document.createElement('div');
                        div2.className = 'row';
                        let div3_1 = document.createElement('div');
                        div3_1.className = 'col';
                        let div3_2 = document.createElement('div');
                        div3_2.className = 'div';
                        let div3_3 = document.createElement('div');
                        div3_3.className = 'div';
                        let h4pvk = document.createElement('h4');
                        h4pvk.className = 'getInfo';
                        h4pvk.style.color = 'blue'
                        let h4score = document.createElement('h4');
                        h4score.className = 'getInfo';
                        let input = document.createElement('input');
                        input.type = 'range';
                        input.className = 'form-range getInfo';
                        input.min = '0'
                        input.max = '100'
                        input.step = '10'
                        let h4testSens = document.createElement('h4');
                        h4testSens.className = 'getInfo';
                        let h4testLab3 = document.createElement('h4');
                        h4testLab3.className = 'getInfo';
                        let h4testLab4 = document.createElement('h4');
                        h4testLab4.className = 'getInfo';
                        let h4testLab5 = document.createElement('h4');
                        h4testLab5.className = 'getInfo';
                        h4testSens.innerText = 'Сенсомоторные тесты'
                        h4testLab3.innerText = 'Тесты 3-й лабы'
                        h4testLab4.innerText = 'Тесты 4-й лабы'
                        h4testLab5.innerText = 'Тесты 5-й лабы'
                        let end = document.createElement('h4');
                        end.className = 'end'
                        end.innerText = '-------------------------------------------------------------------------------------------------------------'

                        div.append(div1);
                        div1.append(div2);

                        h4pvk.innerText = a.ПВК;
                        div2.append(div3_1);
                        div3_1.append(h4pvk)

                        div2.append(div3_2);
                        div3_2.append(h4testSens)
                        div3_2.append(input)
                        div3_2.append(h4testLab3)
                        div3_2.append(input.cloneNode())
                        div3_2.append(h4testLab4)
                        div3_2.append(input.cloneNode())
                        div3_2.append(h4testLab5)
                        div3_2.append(input.cloneNode())
                        //div3_2.innerHTML = '<input type="range" className="form-range getInfo" min="0" max="100" step="10" id="customRange3">';

                        h4score.innerText = 'Рейтинг экспертов: ' + a.СР_ОЦЕНКА
                        div2.append(div3_3);
                        div3_3.append(h4score);

                        div.append(end);

                        last = a.ПРОФЕССИЯ;
                    }

                })
                div.append(button)
                div.append(buttonBack)
            return div}
        );
    }else {
        console.log('ERR')
    }

}

function app(a, b){
    a.append(b)
}

async function createElement(str){
    //console.log(str)
    mainCol.remove();
    await str.then((result) => {

        mainRow.append(result);
    })


    document.getElementById('button-submit').addEventListener('click', event=>{
        let info = document.body.querySelectorAll('.getInfo')
            info.forEach(function(node) {
            if (node){
                if (node.textContent){
                    console.log(node.textContent)
                }
                else{
                    console.log(node.value);
                }
                //console.log(node);
            }
            // if (node)
            console.log(info)
        });
    })


}

// let test = document.getElementById('test');
// test.innerHTML = '<input type="range" className="form-range getInfo" min="0" max="100" step="10" id="customRange3">'


// document.body.querySelectorAll('.getInfo').forEach(function(node) {
//     if (node){
//         console.log(node);
//     }
// });
createElement(parsePromise(returnPromiseAdminDB()))

//returnPromiseAdminDB().then(function (result){result.forEach((a)=> {console.log(a)})});