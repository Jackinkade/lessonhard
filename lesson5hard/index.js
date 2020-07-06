const arr = [13213, 213, 321, 213, 3123, 4234, 53454, 3123, 42352, 42312];
const asd = arr.filter(numb => ['2', '4'].includes(numb.toString()[0]));
console.log(asd);


function isPrime(n) {
    for (let i = 2; i * i <= n; i === 2 ? i++ : i += 2) if (n % i === 0) return false;
    return n > 1;
}

const res = [...Array(101)].reduce((a, _, i) =>
    a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}` : []), []).join('\n');

console.log(res);