

function setLockIf(promise, event, numOfTest){
    let array = [];
    return promise.then((result)=>{
        result.forEach((a)=>{
            array.push(a);
        })
    }).then(()=>{
        if (getCountElemArray(array) < numOfTest){

            window.location = event.target.href;

        }else {
            alert('Вы прошли все попытки теста('+numOfTest+')');
        }
    })

}

function getCountElemArray(array){
    let count = 0;

    array.forEach((a) => {
        if (a !== 'undefined' && a !== null){
            count++
        }
    })
    return count;
}

function LOCK(url, nameTable, id, event, numOfTest){
    setLockIf(getResultsInfo(url, nameTable, id), event, numOfTest);
}
