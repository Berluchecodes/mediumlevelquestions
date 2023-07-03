// Q1 return the first element to falsy ✅ ✅ ✅
// function filterOutfalsy (elem1, elem2) {
//     return (!elem1) ? elem1 : elem2
// }

// console.log (filterOutfalsy(0 , 5))

// Q2 get length of array ✅ ✅ ✅
// function arrLength (arr) {
//     return arr.length
// }
// console.log (arrLength ([1,2,3,5]))

// Q3 find the number at the end of the array ✅ ✅ ✅
// function arrLength (arr) {
//     return arr [arr.length -1]
// }
// console.log (arrLength ([1,2,3,5]))

// Q4 return of all elemets in an array 🙅🏾‍♂️ 🙌🏾 ✅
// function arrSum (arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; ++i) [
//         sum = sum + arr[i]
//     ]
//     return sum
// }

// console.log(arrSum([2,2,2]))

// Q5 add up the numbers from a single number 🙅🏾‍♂️ 🙌🏾 ✅
// function progressiveSum (num) {
//     let sum = 0
//     for (let i = 1; i <= num; ++i) {
//          sum = sum + i
//     }
//    return sum

// }

// console.log (progressiveSum(3))



// Q6 calculate the time 🙅🏾‍♂️🙅🏾‍♂️✅
// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60)
//     let timerSeconds = seconds % 60

//     if (timerMinutes.toString ().length === 1) {
//         timerMinutes = `0` + timerMinutes
//     }

//     return timerMinutes + `:` + timerSeconds
// }

// console.log (calcTime(70))

// Q7 find the largest number 🙅🏾‍♂️ 🙌🏾 ✅
// function getMax (arr) {  
//     let max =  arr[0] <---- dont forget this part
// for (let i = 1; i < arr.length; ++i) {
//     if (arr[i] > max){
//       max = arr[i]
//     }
// }
// return max

// }
// console.log (getMax([-100, -50, -300]))

// // Q8 reverse a string 🙌🏾 🙌🏾 🙌🏾 note* focus on the let function 
// function reverseString (str) {
//     let reverseString = ``
//     for (let i = 0; i < str.length; ++i) {
//        reverseString = str[i] + reverseString
//     }
//     return reverseString

// }
// this reverse i did good ✅✅ remenber split in the begining and join at the end
//  console.log ( reverseString('abc'))

//  function reverseString2 (str) {
//     return str.split(``).reverse().join(``)
//  }
// console.log (reverseString2 (`abc`))

// // Q9 turn every element in an array into 0 🙌🏾 🙌🏾 🙌🏾 REVIEW
// function convertToZero (arr) {
//     let convertArr = []
//     for (let i = 0; i < arr.length; ++i) {
//         convertArr[i] = 0
//     }
// return convertArr
// }

// console.log (convertToZero([4,6,5,4]))

// got this one ✅✅
// function convertToZero2 (arr) {

// return arr.map(elem => 0)
// }

// console.log (convertToZero2([4,6,5,4]))

// Q10 filter out all apples 🙅🏾‍♂️ 🙅🏾‍♂️ ✅

// function removeApples(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] !== `apples`) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeApples([`banana`, `apples`, `apples`, `banana`]));

// hell yea got thie filter method down ✅ ✅
// function removeApples(arr) {
//   return arr.filter(elem => elem !== `apples`)
// }

// console.log(removeApples([`banana`, `apples`, `apples`, `banana`]));


// Q11 filter out all the falsy values 🙌🏾 🙌🏾 ✅ *review again

// function filterOutFalsy (arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//     newArr.push(arr[i])
//         }
//     }

//     return newArr
// }

// console.log(filterOutFalsy([0, `apples`, false, `banana`]));

// almost 🙌🏾 ✅
// function filterOutFalsy (arr) {
//     return arr.filter(elem => !!elem === true )
    
// }

// console.log(filterOutFalsy([0, `apples`, false, `banana`]));


// Q12 truthy to true falsy to false 🙅🏾‍♂️✅

// function convertToBoolean (arr) {
//     return arr.map(elem => !!elem)
// }

// console.log (convertToBoolean([500, null, `david`, false]))

function filterOutFalsy(arr) {
    let newArr = []
    for (i = 0; i < arr.length; ++i) {
       if (!!(arr)[i] === true) {
        newArr.push(arr[i])
       }
    }
    return newArr
 }
 console.log (filterOutFalsy([`apple`, `banana`, 0, NaN, null, `fruites`]))


 