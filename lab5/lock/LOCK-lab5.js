document.getElementById('attentive').addEventListener('click', event => {
    event.preventDefault();
    LOCK('../logic/DB/resultInfo/selectAll.php', 'resultlab5-1', idSession, event, 3);
})

document.getElementById('memory').addEventListener('click', event => {
    event.preventDefault();
    LOCK('../logic/DB/resultInfo/selectAll.php', 'resultlab5-2', idSession, event, 3);
})

document.getElementById('thinking').addEventListener('click', event => {
    event.preventDefault();
    LOCK('../logic/DB/resultInfo/selectAll.php', 'resultlab5-3', idSession, event, 3);
})