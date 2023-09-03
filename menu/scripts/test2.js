
let buttonTwo = document.getElementById('buttonTwo')


buttonTwo.addEventListener('click', async function () {
    //console.log(getPromiseScaleDB())
    await createElem(parseHTML(getPromiseScaleDB()), mainCol)

    document.getElementById('button-submit').addEventListener('click', async event => {

        let formData = new FormData();
        let regCount = 1;
        let info = document.body.querySelectorAll('.getInfo');
        let lastTest = ''
        let lastBall = ''
        let arrayFormData2 = [];
        await forEachNode2();
        await sendData(arrayFormData2);
        window.location.reload()

        async function sendData(arrayFormData) {

            arrayFormData.forEach(b=>console.log(b))

            const mapOfFetch = arrayFormData.map(b => fetch('../../logic/DB/forMenu/updateScale.php', {
                method: 'POST',
                body: b
            }).then((res) => {
                if (res.statusText !== 'OK') throw new Error('Ошибка отправки данных')
            }))

            await Promise.all(mapOfFetch)
                .catch((err) => {
                    alert(err.message)
                })



        }

        async function forEachNode2() {
            for (const node of info) {
                if (node) {

                    if (node.getAttribute('name') === 'test') {

                        if (node.textContent) {
                            console.log(node.textContent)
                            formData.append('name', node.textContent)
                            lastTest = node.textContent
                        }
                    } else if (regCount < 23) {
                        regCount++
                        console.log(regCount)
                        if (node.textContent) {

                            console.log(node.textContent)
                            lastBall = node.textContent + 'b'
                        }
                        else if (node.value) {

                            console.log(node.value)
                            formData.append(lastBall.toString(), node.value);

                        }

                        if (regCount === 23) {

                            formData.append('table', 'scale')
                            arrayFormData2.push(formData)

                            console.log(regCount)


                            function del() {

                                regCount = 1;
                                formData = new FormData();
                            }

                            del();
                        }
                    }

                } else {
                    alert('err2')
                }

            }
        }

    })

})





async function createElem(promise, mainCol){

    mainCol.remove();
    await promise.then((result) => {

        mainRow.append(result);

    })

}


async function getPromiseScaleDB(){

    //let formData = new FormData();
    //formData.append('table', 'resultpvk');
    return await getResultsInfo('../../logic/DB/forMenu/selectAll.php', 'scale')
        .then((result) => {
            return result;
        })

    //return response.json().catch(()=>alert('Произошла ошибка запроса'));

}


async function parseHTML(promise){

    console.log(await promise.then((res)=>{

        checkData = res.length

        return res
    }))

    let counter = 0;
    await promise.then(
        function (result){
            for (let key in result[0]) {
                counter++;
            }
        }
    )


        if (counter !== 0) {
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
                        console.log(a)


                            let div1 = document.createElement('div');
                            div1.className = 'container text-center';
                            let div2 = document.createElement('div');
                            div2.className = 'row';
                            let div3_1 = document.createElement('div');
                            div3_1.className = 'div';
                            let div3_2 = document.createElement('div');
                            div3_2.className = 'row';
                            let div3_3 = document.createElement('div');
                            div3_3.className = 'col';
                            let div3_4 = document.createElement('div');
                            div3_4.className = 'col';
                            let h4pvk = document.createElement('h4');
                            h4pvk.className = 'getInfo';
                            h4pvk.setAttribute('name', 'test');
                            h4pvk.style.color = 'blue';

                            let h4_1 = document.createElement('h4');
                            h4_1.textContent = '0'
                        h4_1.className = 'getInfo'
                        let h4_2 = document.createElement('h4');
                        h4_2.textContent = '10'
                        h4_2.className = 'getInfo'
                        let h4_3 = document.createElement('h4');
                        h4_3.textContent = '20'
                        h4_3.className = 'getInfo'
                        let h4_4 = document.createElement('h4');
                        h4_4.textContent = '30'
                        h4_4.className = 'getInfo'
                        let h4_5 = document.createElement('h4');
                        h4_5.textContent = '40'
                        h4_5.className = 'getInfo'
                        let h4_6 = document.createElement('h4');
                        h4_6.textContent = '50'
                        h4_6.className = 'getInfo'
                        let h4_7 = document.createElement('h4');
                        h4_7.textContent = '60'
                        h4_7.className = 'getInfo'
                        let h4_8 = document.createElement('h4');
                        h4_8.textContent = '70'
                        h4_8.className = 'getInfo'
                        let h4_9 = document.createElement('h4');
                        h4_9.textContent = '80'
                        h4_9.className = 'getInfo'
                        let h4_10 = document.createElement('h4');
                        h4_10.textContent = '90'
                        h4_10.className = 'getInfo'
                        let h4_11 = document.createElement('h4');
                        h4_11.textContent = '100'
                        h4_11.className = 'getInfo'

                        let h4_1def = document.createElement('h4');
                        h4_1def.style.paddingTop = 20 + 'px'
                        h4_1def.textContent = 'текущее значение: ' + a['0']
                        let h4_2def = document.createElement('h4');
                        h4_2def.style.paddingTop = 30 + 'px'
                        h4_2def.textContent = 'текущее значение: ' + a['10']
                        let h4_3def = document.createElement('h4');
                        h4_3def.style.paddingTop = 30 + 'px'
                        h4_3def.textContent = 'текущее значение: ' + a['20']
                        let h4_4def = document.createElement('h4');
                        h4_4def.style.paddingTop = 30 + 'px'
                        h4_4def.textContent = 'текущее значение: ' + a['30']
                        let h4_5def = document.createElement('h4');
                        h4_5def.style.paddingTop = 30 + 'px'
                        h4_5def.textContent = 'текущее значение: ' + a['40']
                        let h4_6def = document.createElement('h4');
                        h4_6def.style.paddingTop = 30 + 'px'
                        h4_6def.textContent = 'текущее значение: ' + a['50']
                        let h4_7def = document.createElement('h4');
                        h4_7def.style.paddingTop = 30 + 'px'
                        h4_7def.textContent = 'текущее значение: ' + a['60']
                        let h4_8def = document.createElement('h4');
                        h4_8def.style.paddingTop = 30 + 'px'
                        h4_8def.textContent = 'текущее значение: ' + a['70']
                        let h4_9def = document.createElement('h4');
                        h4_9def.style.paddingTop = 30 + 'px'
                        h4_9def.textContent = 'текущее значение: ' + a['80']
                        let h4_10def = document.createElement('h4');
                        h4_10def.style.paddingTop = 30 + 'px'
                        h4_10def.textContent = 'текущее значение: ' + a['90']
                        let h4_11def = document.createElement('h4');
                        h4_11def.style.paddingTop = 30 + 'px'
                        h4_11def.textContent = 'текущее значение: ' + a['100']

                            let input = document.createElement('input');
                            input.className = 'getInfo';


                            let end = document.createElement('h4');
                            end.className = 'end';
                            end.innerText = '------------------------------------------------------------------------------------------------------------'


                            div.append(div1);
                            div1.append(div2);

                            h4pvk.innerText = a.name;
                            div2.append(div3_1);
                            div3_1.append(h4pvk);

                            div3_2.append(div3_3)
                            div3_2.append(div3_4)
                            div2.append(div3_2);

                            div3_3.append(h4_1)
                            div3_3.append(input);
                        div3_3.append(h4_2)
                        div3_3.append(input.cloneNode());
                        div3_3.append(h4_3)
                        div3_3.append(input.cloneNode());
                        div3_3.append(h4_4)
                        div3_3.append(input.cloneNode());
                        div3_3.append(h4_5)
                        div3_3.append(input.cloneNode());
                        div3_3.append(h4_6)
                        div3_3.append(input.cloneNode());
                        div3_3.append(h4_7)
                        div3_3.append(input.cloneNode());
                        div3_3.append(h4_8)
                        div3_3.append(input.cloneNode());
                        div3_3.append(h4_9)
                        div3_3.append(input.cloneNode());
                        div3_3.append(h4_10)
                        div3_3.append(input.cloneNode());
                        div3_3.append(h4_11)
                        div3_3.append(input.cloneNode());

                        //h4score.textContent = 'текущее значение: ' + a['10']
                        //div3_3.append(h4_1def)

                        div3_4.append(h4_1def)
                        div3_4.append(h4_2def)
                        div3_4.append(h4_3def)
                        div3_4.append(h4_4def)
                        div3_4.append(h4_5def)
                        div3_4.append(h4_6def)
                        div3_4.append(h4_7def)
                        div3_4.append(h4_8def)
                        div3_4.append(h4_9def)
                        div3_4.append(h4_10def)
                        div3_4.append(h4_11def)





                            div.append(end);



                    })
                    div.append(button);
                    div.append(buttonBack);
                    return div
                }
            );
        } else {
            console.log('ERR');
        }



}