/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise       *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Return Promise object that is resolved with string value === 'Hooray!!! She said "Yes"!',
 * if boolean value === true is passed, resolved with string value === 'Oh no, she said "No".',
 * if boolean value === false is passed, and rejected
 * with error message === 'Wrong parameter is passed! Ask her again.',
 * if is not boolean value passed
 *
 * @param {boolean} isPositiveAnswer
 * @return {Promise}
 *
 * @example
 *    const p1 = willYouMarryMe(true);
 *    p1.then(answer => console.log(answer)) // 'Hooray!!! She said "Yes"!'
 *
 *    const p2 = willYouMarryMe(false);
 *    p2.then(answer => console.log(answer)) // 'Oh no, she said "No".';
 *
 *    const p3 = willYouMarryMe();
 *    p3.then(answer => console.log(answer))
 *      .catch((error) => console.log(error.message)) // 'Error: Wrong parameter is passed!
 *                                                    //  Ask her again.';
 */
function willYouMarryMe(isPositiveAnswer) {
  return new Promise(((resolve, reject) => {
    if (typeof isPositiveAnswer === 'boolean') {
      if (isPositiveAnswer) { resolve('Hooray!!! She said "Yes"!'); } else { resolve('Oh no, she said "No".'); }
    }
    reject(new Error('Wrong parameter is passed! Ask her again.'));
  }));
}


/**
 * Return Promise object that should be resolved with array containing plain values.
 * Function receive an array of Promise objects.
 *
 * @param {Promise[]} array
 * @return {Promise}
 *
 * @example
 *    const promises = [Promise.resolve(1), Promise.resolve(3), Promise.resolve(12)]
 *    const p = processAllPromises(promises);
 *    p.then((res) => {
 *      console.log(res) // => [1, 2, 3]
 *    })
 *
 */
function processAllPromises(array) {
  // новый промис разрешится, когда решились все переданные в массиве промисы
  // Promise.all - возвращает результат только после обработки всех промисов
  return new Promise((resolve, reject) => {
    Promise.all(array).then((values) => { resolve(values); }, (err) => reject(err));
  });
}

/**
 * Return Promise object that should be resolved with value received from
 * Promise object that will be resolved first.
 * Function receive an array of Promise objects.
 *
 * @param {Promise[]} array
 * @return {Promise}
 *
 * @example
 *    const promises = [
 *      Promise.resolve('first'),
 *      new Promise(resolve => setTimeout(() => resolve('second'), 500)),
 *    ];
 *    const p = processAllPromises(promises);
 *    p.then((res) => {
 *      console.log(res) // => [first]
 *    })
 *
 */
function getFastestPromise(array) {
  // Promise.race - возвращает самый быстрый ответ
  return new Promise((resolve, reject) => {
    Promise.race(array).then((value) => { resolve(value); }, (err) => { reject(err); });
  });
}

/**
 * Return Promise object that should be resolved with value that is
 * a result of action with values of all the promises that exists in array.
 * If some of promise is rejected you should catch it and process the next one.
 *
 * @param {Promise[]} array
 * @param {Function} action
 * @return {Promise}
 *
 * @example
 *    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
 *    const p = chainPromises(promises, (a, b) => a + b);
 *    p.then((res) => {
 *      console.log(res) // => 6
 *    });
 *
 */
function chainPromises(/* array, action */) {
  // read -> chaining promises
  throw new Error('Not implemented');
  // const result = new Array(array.length);
  // const p = new Promise((resolve, reject) => {
  //   for (let i = 0; i < array.length; i += 1) {
  //     result[i] = Promise.resolve(array[i])
  //       .then((val) => {
  //         if (val.status === 'fulfilled') {
  //           resolve(val);
  //         } else {
  //           resolve(' ');
  //         }
  //       }, (err) => reject(err));
  //   }
  // })
  //   .then((res) => {
  //     res.filter((elem) => elem !== ' ');
  //     res.reduce(action);
  //   })
  //   .catch((err) => { console.log(err); });
  // return p;

  // const fulfilledResults = [];
  // return new Promise((resolve, reject) => {
  //   Promise.allSettled(array)
  //     .then((results) => {
  //       results.forEach((result) => {
  //         if (result.status === 'fulfilled') {
  //           fulfilledResults.push(result);
  //         }
  //       });
  //       resolve(action(results));
  //     }, (err) => { reject(err); });
  // });
}

module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
