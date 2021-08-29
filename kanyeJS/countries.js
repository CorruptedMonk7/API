function loadCountries(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountry(data) )
}
loadCountries();

const displayCountry = para =>{
    //console.log(para);
    const dis = document.getElementById('divId')
    
    for(const country of para){
        const createDiv = document.createElement('div')
        createDiv.classList.add('styl')
        createDiv.innerHTML = `
        <h3> ${country.name} </h3>
        <p> ${country.capital} </p>
        <button onclick="loadDetails('${country.name}')">Details</button>
        `
        dis.appendChild(createDiv)

    }
}
const loadDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0]))
}