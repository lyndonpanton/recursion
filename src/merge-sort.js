import { merge } from "./merge";

function mergeSort(array) {
    let low = 0;
    let high = array.length - 1;

    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        let left = array.slice(0, mid + 1);
        let right = array.slice(mid + 1);

        mergeSort(left);
        mergeSort(right);

        merge(left, right, array);
    }
}

export { mergeSort };
