let url = ` https://restcountries.eu/rest/v2/name/Australia`

function waitForData (res){
    return res.json();
}

function handleData(data){
    let pop = data[0].population;
    console.log (` The population in Australia is ${pop}`);
    //debugger; // give access to data
}

fetch(url, { method: "GET"}).then(waitForData).then(handleData);