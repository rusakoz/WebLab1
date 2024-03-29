
const buttonStart = document.getElementById('button')
const mainCol = document.getElementById('main-col')

buttonStart.addEventListener('click', function (event){
    conclusion(bestFromTests(processStat()));
})



function conclusion(bestFromTests) {

    let score = 0;
    let localMap = new Map()
    let resMap = new Map()
    let resul = 0

    bestFromTests.then((a) => {
        if (a === 'stop'){
            return Promise.reject('Пользователь не прошел все тесты')
            //throw new Error('teret')
        }
        for (var key of a) {

            localMap.set(key[0], key[1])

        }

    }).then((b)=>{

        console.log(localMap)


    getResultsInfo('../logic/DB/forMenu/selectAll.php', 'scale').then((res) => {
        console.log(res)

            res.forEach((a) => {
            //console.debug(a.name)
            //console.debug(localMap.get(a.name))

            for (var key of Object.keys(a)) {
                //console.debug(a[key] + ' ' + parseFloat(localMap.get(a.name)) + ' ' + key)
                //console.debug(a.name)
                if (a.name === 'Тест_на_свет' || a.name === 'Тест_на_сложение_визуально' ||
                    a.name === 'Тест_на_звук' || a.name === 'Тест_на_сложение_в_уме' ||
                    a.name === 'Тест_на_3_цвета' || a.name === 'Тест_на_слежение' ||
                    a.name === 'Тест_на_внимание'){

                    if (parseFloat(a[key]) >= parseFloat(localMap.get(a.name))){
                        resul = parseFloat(key)
                        //console.debug(resul)
                    }

                }else {
                    if (parseFloat(a[key]) <= parseFloat(localMap.get(a.name))){
                        resul = parseFloat(key)
                        //console.debug(resul)
                    }
                }
            }


            resMap.set(a.name, resul)
            resul = 0

        })
        console.log(resMap)
        return resMap
    }).then((res) =>{
        //console.debug(res)

        let sens = 0
        let countSens = 0
        let lab3 = 0
        let count3 = 0
        let lab4 = 0
        let count4 = 0
        let lab5 = 0
        let count5 = 0


        for (let r of res) {

            if (r[0] === 'Тест_на_свет' || r[0] === 'Тест_на_сложение_визуально' || r[0] === 'Тест_на_звук' ||
                r[0] === 'Тест_на_сложение_в_уме' || r[0] === 'Тест_на_3_цвета'){
                countSens++
                sens += r[1]
            }else if(r[0] === 'Тест_3лаба_легкий' || r[0] === 'Тест_3лаба_сложный'){
                count3++
                lab3 += r[1]
                //console.log(count3 + ' ' + lab3)
            }else if(r[0] === 'Тест_на_слежение' || r[0] === 'Тест_на_преследование'){
                count4++
                lab4 += r[1]
            }else if(r[0] === 'Тест_на_внимание' || r[0] === 'Тест_на_память' || r[0] === 'Тест_на_мышление'){
                count5++
                lab5 += r[1]
            }

        }

        return new Map().set('Сенсомоторные тесты', Math.floor(sens / countSens))
                        .set('Тесты_3-й_лабы', Math.floor(lab3 / count3))
                        .set('Тесты_4-й_лабы', Math.floor(lab4 / count4))
                        .set('Тесты_5-й_лабы', Math.floor(lab5 / count5))

    }).then((res)=> {
        score += parseInt(res.get('Сенсомоторные тесты')) + parseInt(res.get('Тесты_3-й_лабы')) + parseInt(res.get('Тесты_4-й_лабы')) + parseInt(res.get('Тесты_5-й_лабы'))
        function makeObj(prof, pvk, state, requirement, your, test, stat){
            return {
                'профессия': prof,
                'пвк': pvk,
                'состояние': state,
                'требуемо': requirement,
                'ваше': your,
                'тест': test,
                'разница': stat
            }
        }

        //console.log()
        let array = []

        getResultsInfo('../logic/DB/forMenu/selectAll.php', 'adminresult').then((resTwo) => {
            console.log(res) // map с баллами
            console.log(resTwo) // массив из бд
            resTwo.forEach((a)=>{
                if (parseInt(a['Сенсомоторные_тесты']) > parseInt(res.get('Сенсомоторные тесты'))){
                    //console.log(a['Тесты_5-й_лабы'])
                    //console.log(res.get('Тесты_5-й_лабы'))
                    array.push(makeObj(a['профессия'], a['пвк'], false, parseInt(a['Сенсомоторные_тесты']), parseInt(res.get('Сенсомоторные тесты')), 'Сенсомоторные_тесты'))
                }else{
                    array.push(makeObj(a['профессия'], a['пвк'], true, parseInt(a['Сенсомоторные_тесты']), parseInt(res.get('Сенсомоторные тесты')), 'Сенсомоторные_тесты', parseInt(res.get('Сенсомоторные тесты')) - parseInt(a['Сенсомоторные_тесты'])))
                }
                if (parseInt(a['Тесты_3-й_лабы']) > parseInt(res.get('Тесты_3-й_лабы'))){
                    array.push(makeObj(a['профессия'], a['пвк'], false, parseInt(a['Тесты_3-й_лабы']), parseInt(res.get('Тесты_3-й_лабы')), 'Тесты_3-й_лабы'))
                }else{
                    array.push(makeObj(a['профессия'], a['пвк'], true, parseInt(a['Тесты_3-й_лабы']), parseInt(res.get('Тесты_3-й_лабы')), 'Тесты_3-й_лабы', parseInt(res.get('Тесты_3-й_лабы')) - parseInt(a['Тесты_3-й_лабы'])))
                }
                if (parseInt(a['Тесты_4-й_лабы']) > parseInt(res.get('Тесты_4-й_лабы'))){
                    array.push(makeObj(a['профессия'], a['пвк'], false, parseInt(a['Тесты_4-й_лабы']), parseInt(res.get('Тесты_4-й_лабы')), 'Тесты_4-й_лабы'))
                }else{
                    array.push(makeObj(a['профессия'], a['пвк'], true, parseInt(a['Тесты_4-й_лабы']), parseInt(res.get('Тесты_4-й_лабы')), 'Тесты_4-й_лабы', parseInt(res.get('Тесты_4-й_лабы')) - parseInt(a['Тесты_4-й_лабы'])))
                }
                if (parseInt(a['Тесты_5-й_лабы']) > parseInt(res.get('Тесты_5-й_лабы'))){
                    array.push(makeObj(a['профессия'], a['пвк'], false, parseInt(a['Тесты_5-й_лабы']), parseInt(res.get('Тесты_5-й_лабы')), 'Тесты_5-й_лабы'))
                }
                else{
                    array.push(makeObj(a['профессия'], a['пвк'], true, parseInt(a['Тесты_5-й_лабы']), parseInt(res.get('Тесты_5-й_лабы')), 'Тесты_5-й_лабы', parseInt(res.get('Тесты_5-й_лабы')) - parseInt(a['Тесты_5-й_лабы'])))
                }

            })

            return array

        }).then((res)=>{
            console.log(res)
            let countProf = 0
            let countPvk = 0
            let lastCountProf = ''
            res.forEach((a)=>{
                countPvk++
                if (a['профессия'] !== lastCountProf){
                    countProf++
                    lastCountProf = a['профессия']
                }
            })

            let lastProf = ''
            let resArray = []
            let resMap = new Map();
            let countAll = 0
            let countTrue = 0
            let count = 0
            let difference = 0;
            if (countProf > 1){
                res.forEach((a)=>{
                    count++
                    console.log(a['профессия'] + ' ' + a['пвк'] + ' ' + a['ваше'] + ' ' + a['требуемо'] + ' ' + a['тест'])
                    if (a['профессия'] === lastProf){
                        //lastProf = a['профессия']
                        countAll++
                        if (!a['состояние']){
                            //resArray.push('Профессия: ' + lastProf + ' --- Вы не набрали необходимое кол-во баллов для пвк(' + a['пвк'] + ') по - ' + a['тест'] + ' набрано - ' + a['ваше'] + ' из ' + a['требуемо'])
                            //return Promise.reject('не набрано необходимое кол-во баллов')
                        }else{
                            difference += a['разница']
                            countTrue++
                        }

                    }else{

                        if (countAll === countTrue && count > 1) {
                            resArray.unshift('Вам подходит профессия - ' + lastProf + ' ' + difference)
                            resMap.set(difference, 'Вам подходит профессия - ' + lastProf)
                            sendResultToDB('../logic/DB/lab7-DB.php','../logic/DB/insertlab7-DB.php' , 'top', idSession, score, lastProf, difference);
                        }

                        difference = 0
                        lastProf = a['профессия']
                        countAll = 1
                        countTrue = 0

                        if (!a['состояние']){
                            //resArray.push('Профессия: ' + lastProf + ' --- Вы не набрали необходимое кол-во баллов для(' + a['пвк'] + ') пвк по - ' + a['тест'] + ' набрано - ' + a['ваше'] + ' из ' + a['требуемо'])
                            //return Promise.reject('не набрано необходимое кол-во баллов')
                        }else {
                            difference += a['разница']
                            countTrue++
                        }
                    }

                })

            }else if(countProf === 1){

                res.forEach((a)=> {
                    countAll++
                    if (!a['состояние']) {
                        //resArray.push('Вы не набрали необходимое кол-во баллов для пвк(' + a['пвк'] + ') по - ' + a['тест'] + ' набрано - ' + a['ваше'] + ' из ' + a['требуемо'])
                        //return Promise.reject('не набрано необходимое кол-во баллов')
                    } else {
                        difference += a['разница']
                        countTrue++
                    }
                })
                if (countAll === countTrue){
                    resArray.unshift('Вам подходит профессия - ' + lastProf + ' ' + difference)
                    resMap.set(difference, 'Вам подходит профессия - ' + lastProf)
                    sendResultToDB('../logic/DB/lab7-DB.php','../logic/DB/insertlab7-DB.php' , 'top', idSession, score, lastProf, difference);
                }

            }else if(countProf === 0){
                alert('Произошла непредвиденная ошибка')
            }

            if(count === countPvk){
                if (countAll === countTrue) {
                    resArray.unshift('Вам подходит профессия - ' + lastProf + ' ' + difference)
                    resMap.set(difference, 'Вам подходит профессия - ' + lastProf)
                    sendResultToDB('../logic/DB/lab7-DB.php','../logic/DB/insertlab7-DB.php' , 'top', idSession, score, lastProf, difference);
                }
            }
            return resMap
        }).then((res)=>{

            const mapSort = new Map([...res.entries()].reverse());

            let resHTML = '<h4 style="color: darkblue">Профессии показаны от наиболее подходящих к менее</h4>'
            for (const key of mapSort.keys()) {
                resHTML += '<h4>' + mapSort.get(key) + '</h4>'
            }
            if (res.size === 0){
                resHTML = '<h4 style="color: darkblue">Вам не подходит ни одна профессия</h4>'
            }
            mainCol.innerHTML = resHTML
        })
    }).catch((err)=>{
            alert(err)
        })

    })

    /*
    * 1. Запрос к adminResult
    * 2. Запрос к scale
    * 2. Сверка по bestFromTests и scale
    * 3. Вывод, какая профессия подходит
    * */

}


function sendResultToDB(urlDelete, urlInsert, table, idSession, score, prof, difference){
    let formDataTwo = new FormData();
    formDataTwo.append('table', table);
    formDataTwo.append('id', idSession);
    fetch(urlDelete, {
        method: 'POST',
        body: formDataTwo
    }).then((res)=>{
        let formData = new FormData();
        formData.append('table', table);
        formData.append('id', idSession);
        formData.append('score', score);
        formData.append('prof', prof);
        formData.append('diff', difference);
        fetch(urlInsert, {
            method: 'POST',
            body: formData
        })
    }).catch((err)=>{
        console.warn(err.message)
    })
}


let flag = true
async function bestFromTests(promiseStat){
    let arrayRes = new Map();
    let warnAlert = ''

    await promiseStat.then((result)=>{
        let count = -1;
        let test = '';
        let lastRes = -12345;
        if (result.length !== 0) {

            result.forEach((a) => {
                //console.log(result)
                if(a.length > 1) {
                    count++
                    //console.log(result)
                    a.forEach((b) => {


                        if (typeof b === 'string') {
                            test = b;
                        }

                        if (test === 'Тест_на_свет' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res  < lastRes){
                                lastRes = res;
                            }

                        }
                        if (test === 'Тест_на_сложение_визуально' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест_на_звук' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест_на_сложение_в_уме' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест_на_3_цвета' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест_на_слежение' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.result)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест_на_преследование' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.super) + Math.floor(b.good / 2) // super дает 1 балл, good дает 0.5 балла loss дает 0 баллов
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res > lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест_на_внимание' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест_на_память' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.result)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res > lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест_на_мышление' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.result)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res > lastRes){
                                lastRes = res;
                            }
                        }

                        if (test === 'Тест_3лаба_легкий' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.hit) + Math.floor(b.far / 2) + Math.floor(b.close / 2)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res > lastRes){
                                lastRes = res;
                            }
                        }

                        if (test === 'Тест_3лаба_сложный' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.hit) + Math.floor(b.far / 2) + Math.floor(b.close / 2)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res > lastRes){
                                lastRes = res;
                            }
                        }



                    });

                    arrayRes.set(a[0], lastRes);
                    lastRes = -12345;
                    console.log('---------')
                }else {
                    count++
                    //console.log(count)
                    flag = false
                    arrayRes.set(result[count].test, 'Не пройден ни разу')
                    warnAlert = 'Вы не прошли еще ни одного теста в ' + result[count].test
                }
            })
        }else {
            flag = false
            warnAlert = 'Вы не прошли еще ни одного теста'
        }
    })
    if (warnAlert !== ''){
        alert(warnAlert)
        return 'stop'
    }else{
        return arrayRes;
    }
}



async function processStat() {
    return await Promise.all([
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlight', idSession, 'Тест_на_свет'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultaddition', idSession, 'Тест_на_сложение_визуально'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultsound', idSession, 'Тест_на_звук'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resulthardsound', idSession, 'Тест_на_сложение_в_уме'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultthreelight', idSession, 'Тест_на_3_цвета'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab3-1', idSession, 'Тест_3лаба_легкий'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab3-2', idSession, 'Тест_3лаба_сложный'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab4-1', idSession, 'Тест_на_слежение'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab4-2', idSession, 'Тест_на_преследование'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab5-1', idSession, 'Тест_на_внимание'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab5-2', idSession, 'Тест_на_память'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab5-3', idSession, 'Тест_на_мышление')
    ]).catch((errr) => alert('Ошибка запроса ' + errr.message))
        .then((result) => {

            return result;

        }).catch((err) => console.error(err.message))
}

