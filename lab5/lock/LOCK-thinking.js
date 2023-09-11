var blockedVar = false
var numOfTestVar = 0
function setLockIf(promise, event, numOfTest){
    let array = [];
    return promise.then((result)=>{
        result.forEach((a)=>{
            array.push(a);
        })
    }).then(()=>{
        if (getCountElemArray(array) < numOfTest){

            blockedVar = true
        }else {

            numOfTestVar = numOfTest
        }
    })

}

function getCountElemArray(array){
    let count = 0;

    array.forEach((a) => {
        if (a !== 'undefined' && a !== null && a !== ''){
            count++
            console.log(count)
        }
    })
    return count;
}

function LOCK(url, nameTable, id, event, numOfTest){
    setLockIf(getResultsInfo(url, nameTable, id), event, numOfTest);
}


// document.getElementById('start-button').addEventListener('click', event => {
//     event.preventDefault();
//     LOCK('../logic/DB/resultInfo/selectAll.php', 'resultlab5-3', idSession, event, 3);
// })