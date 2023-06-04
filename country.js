const loadCountries =()=>{
     fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))

}

const displayCountries=countries=>{
    console.log(countries);
    const countryContainer =document.getElementById('countries');
    for(const country of countries){
        const countryDiv =document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
            <h3>Country Name :<p class="sojib">${country.name.common}</p></h3>
            
            <button onclick="loadCountry('${country.cca2}')" type="button" id="btn-search" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Details
            </button>
        `;
        countryContainer.appendChild(countryDiv);

        // document.getElementById('btn-search').addEventListener('click', function(){
        //     console.log("hello");
        // })

    }
}
const loadCountry = code =>{
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    console.log('country code',code);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetails(data[0]))
}

const displayCountryDetails =country=>{

    const modalTitle =document.getElementById('exampleModalLabel');
    modalTitle.innerText=country.name.common;

    const countryDetail =document.getElementById('country-details');
    countryDetail.innerHTML =`
    <img src="${country.flags.png}">
    <p>Official Name : ${country.name.official}</p>
    <p>Capital : ${country.capital}</p>
    <p>Region :${country.region}</p>
    <p>Population : ${country.population}</p>
    `
}


loadCountries();