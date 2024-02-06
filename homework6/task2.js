function countToZero(num) {
    for (let a = num; a >= 0; a--) {
        console.log(a);
    }
}
countToZero(5);
function recursiveCounter(num) {
    if (num > 0) {
        recursiveCounter(num - 1);
    }
}
recursiveCounter(5);