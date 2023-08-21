document.getElementById('sensLight').addEventListener('click', event => {
    event.preventDefault();
    LOCK('logic/DB/resultInfo/selectAll.php', 'resultlight', idSession, event, 3);
})

document.getElementById('sensSound').addEventListener('click', event => {
    event.preventDefault();
    LOCK('logic/DB/resultInfo/selectAll.php', 'resultsound', idSession, event, 3);
})

document.getElementById('sensThreeLight').addEventListener('click', event => {
    event.preventDefault();
    LOCK('logic/DB/resultInfo/selectAll.php', 'resultthreelight', idSession, event, 3);
})

document.getElementById('sensHardSound').addEventListener('click', event => {
    event.preventDefault();
    LOCK('logic/DB/resultInfo/selectAll.php', 'resulthardsound', idSession, event, 3);
})

document.getElementById('sensAddition').addEventListener('click', event => {
    event.preventDefault();
    LOCK('logic/DB/resultInfo/selectAll.php', 'resultaddition', idSession, event, 3);
})