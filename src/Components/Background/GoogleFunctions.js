let init = {
    method: 'GET',
    async: true,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem("tokenGoogle"),
        'Content-Type': 'application/json'
    },
    'contentType': 'json'
};
fetch(
    'https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&key=<API_Key_Here>',
    init)
    .then((response) => response.json())
    .then(data => {

    });