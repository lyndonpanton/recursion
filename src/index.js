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

console.log(fibs(8));
