let results;



// Асинхранные функции ВСЕГДА возвращают промисы
async function returnPromiseAdminDB(){

    let formData = new FormData();
    formData.append('id', 75);
    formData.append('table', 'resultpvk');
    let response = await fetch('../../logic/DB/forMenu/adminDB.php', {
        method: 'POST',
        body: formData
    })

    return response.json();


    // let formData = new FormData();
    // formData.append('id', 75);
    // formData.append('table', 'resultpvk');
    // fetch('../../logic/DB/forMenu/adminDB.php', {
    //     method: 'POST',
    //     body: formData
    // }).then(function (response)  {
    //
    //     return response.json()
    //
    // }).then(function (body) {
    //
    //     results = body
    //

    // })

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function parsePromise(promise){

    let counter = 0;
    await promise.then(
        function (result){
            for (let key in result[0]) {
                counter++;
            }
        }
    )

    if (counter !== 0) {
        promise.then(
            function (result) {
                result.forEach((a) => {

                    console.log(a)

                })
            }
        )
    }else {
        console.log('ERR')
    }

}

parsePromise(returnPromiseAdminDB())

//returnPromiseAdminDB().then(function (result){result.forEach((a)=> {console.log(a)})});