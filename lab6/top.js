
let mainRow = document.getElementById('main-row');

function topScore(){
    let count = 0;
    let resHTML = '<h4 style="color: darkblue">Рейтинг всех респондентов, от более подходящих к менее </h4>'
    getResultsInfo('logic/DB/toplab7-DB.php', 'top').then((res)=>{
        res.forEach((a)=>{

            resHTML += '<h4>' + ++count + '. Имя: ' + a['username'] + ' ~~~ Профессия: ' + a['prof'] + ' ~~~ Рейтинг: ' + a['diff'] + '</h4>'
        })
    }).then((a)=>{

        mainRow.innerHTML = resHTML
    })
}

topScore()