// console.log("Webpack configured successfully");

function fibs(n) {
    let result = [];

    let a = 0;
    let b = 0;
    let c = 1;

    for (let i = 0; i < n; i++) {
        result.push(a);

        a = c;
        c = a + b;
        b = a;
    }
    
    return result;
}


function fibsRec(n, result = []) {
    if (result.length < n) {
        if (result.length == 0) {
            result.push(0);
        } else if (result.length == 1) {
            result.push(1);
        } else {
            result.push(
                result[result.length - 2]
                + result[result.length - 1]
            );
        }

        return fibsRec(n, result);
    } else {
        return result;
    }
}

console.log(fibs(8));
console.log(fibsRec(8));
