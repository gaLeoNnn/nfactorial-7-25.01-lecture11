function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve, ms)
  })
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));


/// task 2 
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
//answer 1 


//task 3
promise.then(f1).catch(f2);
promise.then(f1, f2);
// not equal