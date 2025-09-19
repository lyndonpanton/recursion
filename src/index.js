console.log("Webpack configured successfully");

import "./css/styles.css"

import { fibs, fibsRec } from "./js/fibonacci";
import { merge } from "./js/merge";
import { mergeSort } from "./js/merge-sort";

// console.log(fibs(8));
// console.log(fibsRec(8));

// let a = [1, 3, 7, 9];
// let b = [0, 5, 6, 11];
// let c = [];
// console.log(a);
// console.log(b);
// merge(a, b, c);
// console.log(c);

let d = [9, 3, 7, 5, 6, 4, 8, 2];
console.log(d);
mergeSort(d);
console.log(d);
