document.getElementById('tracking').addEventListener('click', event => {
    event.preventDefault();
    LOCK('../logic/DB/resultInfo/selectAll.php', 'resultlab4-1', idSession, event, 3);
})

document.getElementById('pursuit').addEventListener('click', event => {
    event.preventDefault();
    LOCK('../logic/DB/resultInfo/selectAll.php', 'resultlab4-2', idSession, event, 3);
})