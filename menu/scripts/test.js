let results;
let mainRow = document.getElementById('main-row')
let mainCol = document.getElementById('main-col')
let countProf = 0;



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
                        countProf++
                        let h4 = document.createElement('h4');
                        h4.style.color = 'red'
                        h4.className = 'getInfo'
                        h4.setAttribute('value', countProf);
                        h4.setAttribute('name', 'prof')
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
                        h4pvk.setAttribute('name', 'pvk');
                        h4pvk.style.color = 'blue';
                        let h4score = document.createElement('h4');
                        h4score.className = 'getInfo';
                        h4score.setAttribute('name', 'score');
                        let input = document.createElement('input');
                        input.type = 'range';
                        input.className = 'form-range getInfo';
                        input.min = '0'
                        input.max = '100'
                        input.step = '10'
                        let h4testSens = document.createElement('h4');
                        h4testSens.className = 'getInfo';
                        h4testSens.setAttribute('name', 'test');
                        let h4testLab3 = document.createElement('h4');
                        h4testLab3.className = 'getInfo';
                        h4testLab3.setAttribute('name', 'test');
                        let h4testLab4 = document.createElement('h4');
                        h4testLab4.className = 'getInfo';
                        h4testLab4.setAttribute('name', 'test');
                        let h4testLab5 = document.createElement('h4');
                        h4testLab5.className = 'getInfo';
                        h4testLab5.setAttribute('name', 'test');
                        h4testSens.innerText = 'Сенсомоторные_тесты';
                        h4testLab3.innerText = 'Тесты_3-й_лабы';
                        h4testLab4.innerText = 'Тесты_4-й_лабы';
                        h4testLab5.innerText = 'Тесты_5-й_лабы';
                        let end = document.createElement('h4');
                        end.className = 'end';
                        end.innerText = '------------------------------------------------------------------------------------------------------------'


                        h4.innerHTML = a.ПРОФЕССИЯ;
                        div.append(h4);

                        div.append(div1);
                        div1.append(div2);

                        h4pvk.innerText = a.ПВК;
                        div2.append(div3_1);
                        div3_1.append(h4pvk);

                        //div3_2.innerHTML = '<input type="range" className="form-range getInfo" min="0" max="100" step="10" id="customRange3">';
                        div2.append(div3_2);
                        div3_2.append(h4testSens);
                        div3_2.append(input);
                        div3_2.append(h4testLab3);
                        div3_2.append(input.cloneNode());
                        div3_2.append(h4testLab4);
                        div3_2.append(input.cloneNode());
                        div3_2.append(h4testLab5);
                        div3_2.append(input.cloneNode());


                        h4score.innerText = 'Рейтинг экспертов: ' + a.СР_ОЦЕНКА;
                        h4score.setAttribute('value', a.СР_ОЦЕНКА);
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
                        h4pvk.setAttribute('name', 'pvk');
                        h4pvk.style.color = 'blue'
                        let h4score = document.createElement('h4');
                        h4score.className = 'getInfo';
                        h4score.setAttribute('name', 'score');
                        let input = document.createElement('input');
                        input.type = 'range';
                        input.className = 'form-range getInfo';
                        input.min = '0';
                        input.max = '100';
                        input.step = '10';
                        let h4testSens = document.createElement('h4');
                        h4testSens.className = 'getInfo';
                        h4testSens.setAttribute('name', 'test');
                        let h4testLab3 = document.createElement('h4');
                        h4testLab3.className = 'getInfo';
                        h4testLab3.setAttribute('name', 'test');
                        let h4testLab4 = document.createElement('h4');
                        h4testLab4.className = 'getInfo';
                        h4testLab4.setAttribute('name', 'test');
                        let h4testLab5 = document.createElement('h4');
                        h4testLab5.className = 'getInfo';
                        h4testLab5.setAttribute('name', 'test');
                        h4testSens.innerText = 'Сенсомоторные_тесты';
                        h4testLab3.innerText = 'Тесты_3-й_лабы';
                        h4testLab4.innerText = 'Тесты_4-й_лабы';
                        h4testLab5.innerText = 'Тесты_5-й_лабы';
                        let end = document.createElement('h4');
                        end.className = 'end';
                        end.innerText = '-------------------------------------------------------------------------------------------------------------'

                        div.append(div1);
                        div1.append(div2);

                        h4pvk.innerText = a.ПВК;
                        div2.append(div3_1);
                        div3_1.append(h4pvk);

                        div2.append(div3_2);
                        div3_2.append(h4testSens);
                        div3_2.append(input);
                        div3_2.append(h4testLab3);
                        div3_2.append(input.cloneNode());
                        div3_2.append(h4testLab4);
                        div3_2.append(input.cloneNode());
                        div3_2.append(h4testLab5);
                        div3_2.append(input.cloneNode());
                        //div3_2.innerHTML = '<input type="range" className="form-range getInfo" min="0" max="100" step="10" id="customRange3">';

                        h4score.innerText = 'Рейтинг экспертов: ' + a.СР_ОЦЕНКА;
                        h4score.setAttribute('value', a.СР_ОЦЕНКА);
                        div2.append(div3_3);
                        div3_3.append(h4score);

                        div.append(end);

                        last = a.ПРОФЕССИЯ;
                    }

                })
                div.append(button);
                div.append(buttonBack);
            return div}
        );
    }else {
        console.log('ERR');
    }

}

function app(a, b){
    a.append(b);
}

async function createElement(str){
    //console.log(str)
    mainCol.remove();
    await str.then((result) => {

        mainRow.append(result);
    })


    document.getElementById('button-submit').addEventListener('click', async event => {

        await fetch('../../logic/DB/forMenu/TruncateAdminResult.php', {
            method: 'POST'
        }).catch(() => alert('Ошибка очистки таблицы'))

        let formData = new FormData();
        let count = 0;
        let regCount = 1;
        let info = document.body.querySelectorAll('.getInfo');
        let lastTest = ''
        let lastProf = ''
        let arrayFormData = [];
        await forEachNode();
        sendData(arrayFormData);

        function sendData(a){

                for (const aElement of a) {
                    fetch('../../logic/DB/forMenu/insetAdminResult.php', {
                        method: 'POST',
                        body: aElement
                    }).then((res) => {
                        if (res.status !== 200) throw new Error('Ошибка отправки данных')
                    }).catch((err)=>alert(err.message))
                }

        }

        async function forEachNode() {
            for (const node of info) {
                if (node) {
                    if (node.getAttribute('value') > count && node.getAttribute('name') === 'prof') {
                        count++
                        if (node.textContent) {
                            //console.log(node.textContent)
                            formData.append('профессия', node.textContent)
                            lastProf = node.textContent
                        }
                    } else if (regCount < 11) {
                        regCount++
                        formData.append('профессия', lastProf)
                        if (node.textContent) {
                            if (node.getAttribute('name') === 'pvk') {
                                //console.log(node.textContent)
                                formData.append('пвк', node.textContent)
                            } else if (node.getAttribute('name') === 'score') {
                                //console.log(node.textContent)
                                //console.log('2')
                                formData.append('ср_оценка_эксперта', node.getAttribute('value'))
                            } else if (node.getAttribute('name') === 'test') {
                                //console.log(node.textContent)
                                lastTest = node.textContent;
                            } else {
                                alert('err3')
                            }
                            //console.log(node.textContent)
                            //formData.append(node.textContent, node.textContent)
                        } else if (node.value) {
                            formData.append(lastTest.toString(), node.value);

                            //console.log(lastTest)
                            //console.log(node.value)
                        } else {
                            alert('err')
                        }
                        if (regCount === 11) {
                            formData.append('table', 'adminResult')
                            arrayFormData.push(formData)

                            // formData.append('table', 'adminResult')
                            //
                            // await fetch('../../logic/DB/forMenu/insertAdmiResult.php', {
                            //     method: 'POST',
                            //     body: formData
                            // }).then((res) => {
                            //     if (res.status !== 200) throw new Error()
                            // })
                            //     .catch(() => {
                            //
                            //     })


                            // console.log(formData.get('профессия'))
                            // console.log(formData.get('пвк'))
                            // console.log(formData.get('Сенсомоторные_тесты'))
                            // console.log(formData.get('Тесты_3-й_лабы'))
                            // console.log(formData.get('Тесты_4-й_лабы'))
                            // console.log(formData.get('Тесты_5-й_лабы'))
                            // console.log(formData.get('ср_оценка_эксперта'))
                            function del() {

                                regCount = 1;
                                formData = new FormData();
                            }

                            del();
                        }
                    }
                    // else if (regCount === 11) {
                    //     // console.log(formData.get('профессия'))
                    //     // console.log(formData.get('пвк'))
                    //     // console.log(formData.get('Сенсомоторные тесты'))
                    //     // console.log(formData.get('Тесты 3-й лабы'))
                    //     // console.log(formData.get('Тесты 4-й лабы'))
                    //     // console.log(formData.get('Тесты 5-й лабы'))
                    //     // console.log(formData.get('ср_оценка_эксперта'))
                    //     console.log('wtf')
                    //     regCount = 1;
                    //     formData = new FormData();
                    // }
                    //console.log(node);
                } else {
                    alert('err2')
                }
                // if (node)
                //console.log(countProf);
            }
        }

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