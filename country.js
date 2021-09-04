//----------- COUNTRY BANNERS----------

const load_countries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => collectInfo(data))
}
load_countries()
const collectInfo = (info) => {
    const country = document.getElementById("countryBanner");
    info.forEach(name => {

        const createDiv = document.createElement("div");
        createDiv.classList.add("contryStyle")
        createDiv.innerHTML = `<h2>${name.name} </h2>
        <p>${name.capital}</p>
        <button onclick = "detailCountry('${name.name}')" >Click Me </button>`;
        country.appendChild(createDiv)

    })

}




// ---------------SHOW DETAIL---------------------- 

const detailCountry = nam => {
    const countryLink = `https://restcountries.eu/rest/v2/name/${nam}`
    fetch(countryLink)
        .then(res => res.json())
        .then(data => countryDetail(data[0]))
}
const countryDetail = showDetail => {
    const getCountry = document.getElementById("countryDetails")
    getCountry.innerHTML = `<h1> ${showDetail.name} </h1><h3>population : ${showDetail.population} </h2> <img width="250px" src="${showDetail.flag}"> `


}
