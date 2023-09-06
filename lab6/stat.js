
//console.log(bestFromTests(processStat()));
conclusion(bestFromTests(processStat()));

function conclusion(bestFromTests) {

    let localMap = new Map()
    let resMap = new Map()
    let resulMap = new Map()
    let resul = 0
    bestFromTests.then((a) => {

        for (var key of a) {

            localMap.set(key[0], key[1])
        }

    })

    getResultsInfo('../logic/DB/forMenu/selectAll.php', 'scale').then((res) => {
        res.forEach((a) => {
            //console.log(a.name)
            //console.log(localMap.get(a.name))

            for (var key of Object.keys(a)) {
                //console.log(a[key] + ' ' + parseFloat(localMap.get(a.name)) + ' ' + key)
                //console.log(a.name)
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
        return resMap
    }).then((res) =>{
        console.log(res)

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
                console.log(count3 + ' ' + lab3)
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

        function makeObj(prof, pvk, state){
            return {
                'профессия': prof,
                'пвк': pvk,
                'состояние': state
            }
        }

        console.log()
        let array = []

        getResultsInfo('../logic/DB/forMenu/selectAll.php', 'adminresult').then((resTwo) => {
            console.log(res)
            console.log(resTwo)
            resTwo.forEach((a)=>{
                console.log()
                if (a['Сенсомоторные_тесты'] > res.get('Сенсомоторные тесты') ||
                    a['Тесты_3-й_лабы'] > res.get('Тесты_3-й_лабы') ||
                    a['Тесты_4-й_лабы'] > res.get('Тесты_4-й_лабы') ||
                    a['Тесты_5-й_лабы'] > res.get('Тесты_5-й_лабы')){
                    array.push(makeObj(a['профессия'], a['пвк'], false))
                }else{
                    array.push(makeObj(a['профессия'], a['пвк'], true))
                }

            })

            return array

        }).then((res)=>{
            console.log(res)
            // доработать если тест не пройден ни разу
        })

    })

    /*
    * 1. Запрос к adminResult
    * 2. Запрос к scale
    * 2. Сверка по bestFromTests и scale
    * 3. Вывод, какая профессия подходит
    * */

}


let flag = true
async function bestFromTests(promiseStat){
    let arrayRes = new Map();

    await promiseStat.then((result)=>{
        let count = 0;
        let test = '';
        let lastRes = -12345;
        if (result.length !== 0) {

            result.forEach((a) => {

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
                    flag = false
                    arrayRes.set(result[count].test, 'Не пройден ни разу')
                    console.log('Вы не прошли еще ни одного теста в ' + result[count].test)
                }
            })
        }else {
            flag = false
            console.log('Вы не прошли еще ни одного теста')
        }
    })
    return arrayRes;
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

