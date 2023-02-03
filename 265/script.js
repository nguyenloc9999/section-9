/* const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
const imgContainer = document.querySelector('.images');
const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function(){
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;

createImage('img/img-1.jpg').then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
})
.then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
})
.then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
})
.then(() => {
    currentImg.style.display = 'none';
})
.catch(err => console.error(err)); */

/* const getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

fetch(`https://restcountries.eu/rest/v2/name${country}`).then(res => console.log(res))
const whereAmI = async function() {
    try {
    // Geolocation
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if(!resGeo.ok) throw new Error('Problem getting location data')
    const dataGeo = await resGeo.json();
    
    // Country data
    const res = await fetch(`https://restcountries.eu/rest/v2/name${dataGeo.country}`);
    if(!resGeo.ok) throw new Error('Problem getting country')
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]); 
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch(err) {
        console.error(`${err}`);
        renderError(`${err.message}`);
        // Reject promise returned from async function 
        throw err;
    }
};
console.log('1: Will get location');
const city = whereAmI();
console.log(city);
whereAmI().then(city => console.log(`2: ${city}`)).catch(err => console.error(`2: ${err.message}`)).finally(() => console.log('3: Finished getting location'));
(async function() {
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`)
    }catch(err) {
        console.error(`2: ${err.message}`);
    }
    console.log('3: Finished getting location')
})(); */


const get3Countries = async function(c1, c2, c3) {
    try{
       /*  const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
        const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
        const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`); 
        console.log([data1.capital, data2.capital, data3.capital]); */
        const data = await Promise.all([getJSON(`https://restcountries.eu/rest/v2/name/${c1}`), getJSON(`https://restcountries.eu/rest/v2/name/${c2}`), getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),]);
        console.log(data.map(d => d[0].capital));
    }catch(err) {
        console.error(err);
    }
};
get3Countries('portugal', 'canada', 'tanzania');