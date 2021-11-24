// Code your solution here
// function reduce(arr, cb, init) { }

// const couponLocations = [
//   { room: "Living room", amount: 5 },
//   { room: "Kitchen", amount: 2 },
//   { room: "Bathroom", amount: 1 },
//   { room: "Master bedroom", amount: 7 },
// ];

//--======= How the method works =======--
// function reducer(arr, cb, init) {
//   let result = init;
//   for (const element of arr) {
//     result = cb(result, element);
//     console.log(result);
//     console.log(element);
//   }
//   return result;
// }

// function couponCounter(totalAmount, location) {
//   return totalAmount + location.amount;
// }

// console.log(reducer(couponLocations, couponCounter, 0));

// --=======Using reduce========--
// primitive returns arr.reduce(cb, init)

// function couponCounter(totalAmount, location) {
//   return totalAmount + location.amount;
// }
// console.log(couponLocations.reduce(couponCounter, 0));

// console.log(
//   couponLocations.reduce(function couponCounter(total, location) {
//     return total + location.amount;
//   }, 0)
// );

//Output doesnt need to be string or number. Can also be an object
