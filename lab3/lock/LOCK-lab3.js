document.getElementById('first-test').addEventListener('click', event => {
    event.preventDefault();
    LOCK('../logic/DB/resultInfo/selectAll.php', 'resultlab3-1', idSession, event, 3);
})

document.getElementById('second-test').addEventListener('click', event => {
    event.preventDefault();
    LOCK('../logic/DB/resultInfo/selectAll.php', 'resultlab3-2', idSession, event, 3);
})