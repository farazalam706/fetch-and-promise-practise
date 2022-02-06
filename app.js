// // var userName = "MohammadArsalan"
// // fetch(`https://api.github.com/users/${userName}`)
// // .then(function(response){
// //     return response.json()
// // })
// // .then(function(data){
// //     console.log(data.avatar_url)
// // })
// // .catch(function(error){
// //     console.log(error)
// // })
var condition = true;
var prom = new Promise(function (resolve, reject) {
  if (condition) {
    return resolve("I love you!");
  } else {
    return reject("You deserve better!");
  }
});

prom.then(function succ(success) {
  console.log(success);
});
prom.catch(function err(error) {
  console.log(error);
});

// function prom(condition) {
//   return new Promise(function (resolve, reject) {
//     if (condition) {
//       resolve("Restaurant chlte hainn..");
//     } else {
//       reject("Abba nhi man rhe..");
//     }
//   });
// }

// let onFullfilment = function fulfill(results) {
//   console.log(results);
// };

// let onRejection = function fulfill(reject) {
//   console.log(reject);
// };
// // prom(false);
// // console.log(prom);
// prom(true).then(onFullfilment);
// prom(true).catch(onRejection);
