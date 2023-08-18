
async function returnPromiseResult(){

    let result;

    let formData = new FormData();
    formData.append('id', 75);
    formData.append('table', 'resultpvk');
    await fetch('../../logic/DB/forMenu/adminDB.php', {
        method: 'POST',
        body: formData
    }).then(function (response)  {

        return response.json()

    }).then(function (body) {

        //console.log(body)
        result = body
        //console.log(result)

    })
    return result

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


(async () => {
    // returnPromiseResult()
    // await sleep(50)
    //console.log(result)
    console.log(returnPromiseResult())

})();
