// Use array size to determine depth
function merge(left, right) {
    let i = 0;
    let j = 0;
    let k = 0;
    let result = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result[k++] = left[i++];
        } else {
            result[k++] = right[j++];
        }
    }

    while (i < left.length) {
        result[k++] = left[i++];
    }

    while (j < right.length) {
        result[k++] = right[j++];
    }

    return result;
}

function mergeSort(array) {
    const left = array.slice(0, Math.floor(array.length / 2));
    const right = array.slice(Math.floor(array.length() / 2));

    
}

export { merge, mergeSort };
