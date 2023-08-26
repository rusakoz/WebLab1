
function processStat(){
    Promise.all([
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlight', idSession),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultaddition', idSession),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultsound', idSession),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resulthardsound', idSession),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultthreelight', idSession),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab4-1', idSession),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab4-2', idSession),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab5-1', idSession),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab5-2', idSession),
        getResultsInfo('../logic/DB/resultInfo/selectAll.php', 'resultlab5-3', idSession)
    ]).then((result)=>{
        result.forEach((a) => {
            a.forEach((b => console.log(b)));
            console.log('---------')
        })
    }).catch(()=> alert('Ошибка загрузки данных с базы данных'))
}

processStat();