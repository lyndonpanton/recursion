console.log("Webpack configured successfully");

import { fibs, fibsRec } from "./fibonacci";
import { merge, mergeSort } from "./merge-sort";

// console.log(fibs(8));
// console.log(fibsRec(8));

// console.log(merge([1, 3, 7, 9], [0, 5, 6, 11]));
let a = [9, 3, 7, 5, 6, 4, 8, 2];
console.log(a);
mergeSort(a);
console.log(a);

// function mergeSort(array) {
//     let low = 0;
//     let high = array.length - 1;

//     if (low < high) {
//         let mid = Math.floor((low + high) / 2);

//         let left = array.slice(0, mid + 1);
//         let right = array.slice(mid);
//         console.log(left);
//         console.log(right);

//         mergeSort(left);
//         mergeSort(right);

//         merge(left, right);
//     }
// }
