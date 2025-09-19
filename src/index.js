console.log("Webpack configured successfully");

import { fibs, fibsRec } from "./fibonacci";
import { merge, mergeSort } from "./merge-sort";

console.log(fibs(8));
console.log(fibsRec(8));

console.log(merge([1, 3, 7, 9], [0, 5, 6, 11]));