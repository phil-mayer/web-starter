
asyncOne();
testSpread();

async function asyncOne() {
    const result = await asyncTwo();
    console.log(result);
}

async function asyncTwo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Async await test.');
        }, 2000);
    });
}

function testSpread() {
    const integers = [1, 2, 3, 4];
    console.log(...integers);
}
