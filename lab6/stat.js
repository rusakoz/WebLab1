

function conclusion(bestFromTests){

    /*
    * 1. Запрос к adminResult
    * 2. Сверка по bestFromTests и adminResult
    * 3. Вывод, какая профессия подходит
    * */

}

async function bestFromTests(promiseStat){
    let arrayRes = new Map();
    await promiseStat.then((result)=>{
        let test = '';
        let count = 0;
        let lastRes = -12345;
        if (result.length !== 0) {

            result.forEach((a) => {
                if(a.length > 1) {
                    console.log(a[0])
                    a.forEach((b) => {

                        if (typeof b === 'string') {
                            test = b;
                        }
                        if (test === 'Тест на свет' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res  < lastRes){
                                lastRes = res;
                            }

                        }
                        if (test === 'Тест на сложение визуально' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест на звук' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест на сложение в уме' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест на 3 цвета' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест на слежение' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseFloat(b.result)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест на преследование' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.super) + Math.floor(b.good / 2) // super дает 1 балл, good дает 0.5 балла loss дает 0 баллов
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res > lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест на внимание' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.time)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res < lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест на память' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.result)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res > lastRes){
                                lastRes = res;
                            }
                        }
                        if (test === 'Тест на мышление' && typeof b !== 'string') {
                            console.log(b)
                            let res = parseInt(b.result)
                            if (lastRes === -12345){
                                lastRes = res;
                            }
                            else if (res > lastRes){
                                lastRes = res;
                            }
                        }

                        // if (test === 'Тест 3-1 лаба' && typeof b !== 'string') {
                        //     console.log(b)
                        //     let res = parseInt(b.result)
                        //     if (lastRes === -12345){
                        //         lastRes = res;
                        //     }
                        //     else if (res > lastRes){
                        //         lastRes = res;
                        //     }
                        // }
                        //
                        // if (test === 'Тест 3-2 лаба' && typeof b !== 'string') {
                        //     console.log(b)
                        //     let res = parseInt(b.result)
                        //     if (lastRes === -12345){
                        //         lastRes = res;
                        //     }
                        //     else if (res > lastRes){
                        //         lastRes = res;
                        //     }
                        // }



                    });

                    arrayRes.set(a[0], lastRes);
                    lastRes = -12345;
                    console.log('---------')
                }else {
                    console.log('Вы не прошли еще ни одного теста в ' + a[0])
                }
            })
        }else {
            console.log('Вы не прошли еще ни одного теста')
        }
    })
    return arrayRes;
}



async function processStat() {
    return await Promise.all([
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlight', idSession, 'Тест на свет'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultaddition', idSession, 'Тест на сложение визуально'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultsound', idSession, 'Тест на звук'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resulthardsound', idSession, 'Тест на сложение в уме'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultthreelight', idSession, 'Тест на 3 цвета'),
        //getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab3-1', idSession, 'Тест 3-1 лаба'),
        //getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab3-2', idSession, 'Тест 3-2 лаба),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab4-1', idSession, 'Тест на слежение'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab4-2', idSession, 'Тест на преследование'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab5-1', idSession, 'Тест на внимание'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab5-2', idSession, 'Тест на память'),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab5-3', idSession, 'Тест на мышление')
    ]).catch((errr) => alert('Ошибка запроса ' + errr.message))
        .then((result) => {

            return result;
            // result.forEach((a) => {
            //     a.forEach((b => {
            //         if (b === 'resultlight') {
            //
            //         }
            //         console.log(b)
            //
            //
            //     }));
            //     console.log('---------')
            // })
        }).catch((err) => console.error(err.message))
}

console.log(bestFromTests(processStat()));