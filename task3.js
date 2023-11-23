const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
    if (request) { 
        const result = JSON.parse(request.responseText);
    
        console.log(result); 

        const displayElement = document.getElementById('result');

    
        for (let i = 0; i < result.length; i++) {
            if (result[i].hasOwnProperty('name') ) {
                const population = result[i].population;
                console.log('popuation : '+population); 
                const countryName = result[i].name.common;
                console.log('country : '+countryName); 
                const flags = result[i].flags;
                console.log('flags : '+flags); 
                const region = result[i].region;
                console.log('region : '+region); 
                const subRegion = result[i].subregion;
                console.log('subRegion : '+subRegion); 
                // const paragraph = document.createElement('p');
                // paragraph.textContent = countryName;
                // displayElement.appendChild(paragraph);
            }
        }
    } else {
        console.log('Error:', request.status); 
    }
};

