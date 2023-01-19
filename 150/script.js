const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov){
    // return mov = eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(move * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => 
    `Movement ${i+ 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);