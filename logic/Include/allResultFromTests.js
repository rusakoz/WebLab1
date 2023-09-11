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
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultsound')
        .then((res)=>{
            let resHTML = '<h4>id/Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button2.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultlight')
        .then((res)=>{
            let resHTML = '<h4>id/Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button3.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultthreelight')
        .then((res)=>{
            let resHTML = '<h4>id/Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button4.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resulthardsound')
        .then((res)=>{
            let resHTML = '<h4>id/Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button5.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultaddition')
        .then((res)=>{
            let resHTML = '<h4>id/Время</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + a['time'] + ' секунд(а)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button6.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultlab3-1')
        .then((res)=>{
            let resHTML = '<h4>id/Проценты попадания</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + 'Идеально ' + a['hit'] + '% --- Перелет ' + a['far'] + '% --- Недолет ' + a['close'] + '% --- Промах ' + a['loss'] + '%' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button7.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultlab3-2')
        .then((res)=>{
            let resHTML = '<h4>id/Проценты попадания</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + 'Идеально ' + a['hit'] + '% --- Перелет ' + a['far'] + '% --- Недолет ' + a['close'] + '% --- Промах ' + a['loss'] + '%' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button8.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultlab4-1')
        .then((res)=>{
            let resHTML = '<h4>id/Среднее затраченное время(с) на возврат цели</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + a['result'] + ' секунда(ы)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button9.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultlab4-2')
        .then((res)=>{
            let resHTML = '<h4>id/Процент попадания по мишени</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + 'Идеально ' + a['super'] + '% --- Хорошо ' + a['good'] + '% --- Промах ' + a['loss']  + '%' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button10.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultlab5-1')
        .then((res)=>{
            let resHTML = '<h4>id/Затраченное время(с)</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + a['time'] + ' секунда(ы)' + '</h4>'
                }

            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button11.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultlab5-2')
        .then((res)=>{
            let resHTML = '<h4>id/Количество запомненных слов из (указано в тесте)</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + a['result'] + '</h4>'
                }
            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})

button12.addEventListener('click', function (event){
    getResultsInfo('logic/DB/forMenu/selectAll.php', 'resultlab5-3')
        .then((res)=>{
            let resHTML = '<h4>id/Количество верных ответов из (указано в тесте)</h4>'
            let count = 0
            res.forEach((a)=>{
                if (a instanceof Object) {
                    resHTML += '<h4>' + ++count + '. id:' + a['id'] + ' Результаты: ' + a['result'] + '</h4>'
                }
            })
            if (count === 0){
                alert('Не пройдено ни одного теста')
            }else {
                mainRow.innerHTML = resHTML
            }
        })
})