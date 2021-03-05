asyncOne();
testSpread();

/**
 * @description Kick off a quick test to see if async/await is working correctly.
 */
async function asyncOne() {
  const result = await asyncTwo();

  const testResultNode = document.querySelector('#async-await-result');
  if (result === 'OK' && testResultNode) {
    testResultNode.innerText = result;
    testResultNode.classList.add('test-success');
  }
}

/**
 * @description After a brief delay, resolve the returned promise with a simple message.
 * @returns {Promise}
 */
async function asyncTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 1000);
  });
}

console.log(111);

/**
 * @description Quick test to see that some ES6 features are in place, specifically ES6 sets and the spread operator.
 */
function testSpread() {
  const integers = [1, 2, 3, 4, 5, 5];
  const set = new Set(integers);

  const uniqueValues = [...set];
  const testResultNode = document.querySelector('#spread-result');
  if (uniqueValues.length === 5 && testResultNode) {
    testResultNode.innerText = 'OK';
    testResultNode.classList.add('test-success');
  }
}
