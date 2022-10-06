// // Создаём первый промис
// const firstPromise = new Promise.resolve((resolve, reject) => {
//     if (someCondition) {
//       resolve('Первый промис');
//     } else {
//       reject();
//     }
//   });
  
//   // Создаём второй промис
//   const secondPromise = new Promise((resolve, reject) => {
//     if (secondCondition) {
//       resolve('Второй промис');
//     } else {
//       reject();
//     }
//   });
  
//   // Создаём массив с промисами
//   const promises = [firstPromise, secondPromise]
  
//   // Передаём массив с промисами методу Promise.all
//   Promise.all(promises)
//     .then((results) => {
//       console.log(results); // ["Первый промис", "Второй промис"]
//     });