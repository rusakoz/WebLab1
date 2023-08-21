
async function getResultsInfo(url, nameTable, id) {

    let formData = new FormData();
    formData.append('id', id);
    formData.append('table', nameTable);
    let response = await fetch(url, {
        method: 'POST',
        body: formData
    })

    return response.json();

}