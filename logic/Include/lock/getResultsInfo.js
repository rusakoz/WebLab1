
async function getResultsInfo(url, nameTable, id, test = '') {

    let formData = new FormData();
    formData.append('id', id);
    formData.append('table', nameTable);
    formData.append('test', test);
    let response = await fetch(url, {
        method: 'POST',
        body: formData
    })
        .then((res)=>{
        if (res.ok){
            return res.json()

        }else {
            throw new Error('')
        }
    })

    return response

}