/* const whereAmI = function(lat, lng) {
    fetch(`http://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => { if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        res.json(); })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);
        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
        if(!res.ok) throw new Error(`Country not found (${res.status})`);
        return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => 
console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
    for(let i = 0; i < 1000000000; i++) {}
    console.log(res);
});
console.log('Test end'); */


const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lotter draw is happening');
    setTimeout(function(){
        if(Math.random() >= 0.5){
            resolve('You WIN')
        }else {
            reject(new Error ('You lost your money'));
        }
    }, 2000)
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000);
    });
};
wait(1)
.then(() => {
    console.log('1 second passed');
    return wait(1);
})
.then(() => {
    console.log('2 second passed');
    return wait(1);
})
.then(() => {
    console.log('3 second passed');
    return wait(1);
})
.then(() => console.log('4 second passed'));

/* setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000); */

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));