// task 1

// const geriSayim = document.querySelector(".geriSayim");

// function geriSayimFunction(saniye) {
//   const pr = new Promise((resole, reject) => {
//     const metod = setInterval(() => {
//       geriSayim.textContent = saniye;

//       saniye -= 1;
//       if (saniye == 0) {
//         geriSayim.textContent = "finis";
//         clearInterval(metod);
//       }
//     }, 1000);
//   });
// }

// geriSayimFunction(5);

// task 1_end

// task 2

// function firstTask() {
//   return new Promise((resole, reject) => {
//     return resole("(men 1 ci yam)");
//   });
// }
// function secondTask() {
//   return new Promise((resole, reject) => {
//     return resole("(men 2 ci yam)");
//   });
// }

// let topla = "";

// firstTask()
//   .then((value) => {
//     topla += value;
//     return secondTask();
//   })
//   .then((value) => {
//     topla += value;
//   })
//   .finally(() => {
//     console.log(topla);
//   });

// task 2_end

// task 3

// function f1() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       return resole("(f1)");
//     }, 2000);
//   });
// }
// function f2() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       return resole("(f2)");
//     }, 2000);
//   });
// }
// function f3() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       return resole("(f3)");
//     }, 2000);
//   });
// }

// Promise.all([f1(), f2(), f3()]).then((valueArr) => {
//   console.log(valueArr[0] + valueArr[1] + valueArr[2]);
// });

// task 3_end

// task 4

// function fastTask() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       return resole("fastTask nenem");
//     }, 1000);
//   });
// }
// function slowTask() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       return resole("slowTask nenem");
//     }, 2000);
//   });
// }

// Promise.race([fastTask(), slowTask()]).then((value) => {
//   console.log(value);
// });

// task 4_end
