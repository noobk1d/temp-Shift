
const countriesContainer = document.querySelector('.countries');

//First AJAX call:XMLHttpRequest

const getCountryData = function(country){
   const request = new XMLHttpRequest();
   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
   request.send();
   
   request.addEventListener('load',function(e){
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      const currency = Object.keys(data.currencies);
      const language = Object.keys(data.languages);
   
   
      const html =   `<div class="country">
             <img class="country__img" src="${data.flags.png}" alt="flag" />
             <div class="country__data">
               <h3 class="country__name">${data.name.common}</h3>
               <h4 class="country__region">${(
                  +data.population / 1000000).toFixed(1)} people</h4>
               <p class="country__row"><span>👫</span>${data.region}</p>
               <p class="country__row"><span>🗣️</span>${data.languages[language[0]]}</p>
               <p class="country__row"><span>💰</span>${data.currencies[currency].name}</p>
             </div>
           </div>`;
           countriesContainer.insertAdjacentHTML('beforeend', html);
           countriesContainer.style.opacity = 1;
   });
}

getCountryData('russia');