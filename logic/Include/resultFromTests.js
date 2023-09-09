let mainRow = document.getElementById('main-row')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')
let button6 = document.getElementById('button6')
let button7 = document.getElementById('button7')
let button8 = document.getElementById('button8')
let button9 = document.getElementById('button9')
let button10 = document.getElementById('button10')
let button11 = document.getElementById('button11')
let button12 = document.getElementById('button12')

button1.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultsound', idSession)
        .then((res)=>{
            let resHTML = '<h4>Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button2.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultlight', idSession)
        .then((res)=>{
            let resHTML = '<h4>Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button3.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultthreelight', idSession)
        .then((res)=>{
            let resHTML = '<h4>Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button4.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resulthardsound', idSession)
        .then((res)=>{
            let resHTML = '<h4>Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button5.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultaddition', idSession)
        .then((res)=>{
            let resHTML = '<h4>Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button6.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultlab3-1', idSession)
        .then((res)=>{
            let resHTML = '<h4>Проценты попадания</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + 'Идеально ' + a['hit'] + '% --- Перелет ' + a['far'] + '% --- Недолет ' + a['close'] + '% --- Промах ' + a['loss'] + '%' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button7.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultlab3-2', idSession)
        .then((res)=>{
            let resHTML = '<h4>Проценты попадания</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + 'Идеально ' + a['hit'] + '% --- Перелет ' + a['far'] + '% --- Недолет ' + a['close'] + '% --- Промах ' + a['loss'] + '%' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button8.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultlab4-1', idSession)
        .then((res)=>{
            let resHTML = '<h4>Среднее затраченное время(с) на возврат цели</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + a['result'] + ' секунда(ы)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button9.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultlab4-2', idSession)
        .then((res)=>{
            let resHTML = '<h4>Процент попадания по мишени</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + 'Идеально ' + a['super'] + '% --- Хорошо ' + a['good'] + '% --- Промах ' + a['loss']  + '%' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button10.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultlab5-1', idSession)
        .then((res)=>{
            let resHTML = '<h4>Затраченное время(с)</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + a['time'] + ' секунда(ы)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button11.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultlab5-2', idSession)
        .then((res)=>{
            let resHTML = '<h4>Количество запомненных слов из (указано в тесте)</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + a['result'] + '</h4>'
                }
            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button12.addEventListener('click', function (event){
    getResultsInfo('logic/DB/resultInfo/selectAll.php', 'resultlab5-3', idSession)
        .then((res)=>{
            let resHTML = '<h4>Количество верных ответов из (указано в тесте)</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. ' + a['result'] + '</h4>'
                }
            })
            if (count === 0){
                alert('Вы не прошли ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})