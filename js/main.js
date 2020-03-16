var arrMethods = ['HTML', 11, 'JavaScript', 2, 'CSS', 23, 12];
document.write(arrMethods + '<br/>');
arrMethods.push('-11');
console.log(arrMethods);
document.write(arrMethods + '---' + 'Array methods push' + '<br/>');
arrMethods.unshift('1000');
console.log(arrMethods);
document.write(arrMethods + '---' + 'Array methods unshift' + '<br/>');
arrMethods.push('Last array element');
console.log(arrMethods);
document.write(arrMethods + '---' + 'Array methods push' + '<br/>');
arrMethods.splice(3, 1);
console.log(arrMethods);
document.write(arrMethods + '---' + 'Array methods splice' + '<br/>');
var arr = arrMethods.filter(
    function (value) {
        return (typeof value === 'number');
    }
);
console.log(arr);
document.write(arr + '---' + 'Array methods filter typeof item number' + '<br/>');
arrSquare = arr.map(function (a) {
    return a * a;
});
console.log(arrSquare);
document.write(arrSquare + '---' + 'Array methods map()' + '<br/>');
console.log(Math.max.apply(null, arrSquare));
document.write(Math.max.apply(null, arrSquare) + '---' + 'Array methods math max');