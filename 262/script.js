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

const getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

/* fetch(`https://restcountries.eu/rest/v2/name${country}`).then(res => console.log(res)) */
const whereAmI = async function() {
    // Geolocation
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    // Country data
    const res = await fetch(`https://restcountries.eu/rest/v2/name${country}`);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
};
whereAmI();
console.log('FIRST');