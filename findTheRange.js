const array = [-20, 4, -10, 2, 37, -4];

let rangeMin = undefined;
let rangeMax = undefined;

for (let i = 0; i < array.length; i++) {

    if (i === 0) {

        rangeMin = array[i];
        rangeMax = array[i];

    } else if (i !== 0) {

        if (array[i] > rangeMax) {

            rangeMax = array[i];

        } else if (array[i] < rangeMin) {

            rangeMin = array[i];

        }

    }

}

console.log(rangeMin);
console.log(rangeMax);