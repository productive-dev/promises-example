// Promise.all()
// Useful for aggregating the results of multiple promises
// Returns a single Promise that fulfills when all of the Promises
// passed to it have been fulfilled. It rejects with the reason
// of the first promise that rejects or with the error
// caught by the first argument, if that argument has caught an error inside it
// using try/catch/throw blocks

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hello');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'World');
});

const p3 = 1000;

// Promise.all([p1, p2, p3]).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.error('Promise.all rejection!', err)
// });


// Promise.race()
// Returns a promise that fulfills or rejects as soon as one of the
// Promises in an iterable fulfills or rejects, with the value or
// reason from that promise.
Promise.race([p1, p2]).then((result) => {
    console.log(result)
}).catch((err) => {
    console.error('Promise.all rejection!', err)
});