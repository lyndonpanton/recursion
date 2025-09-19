function merge(left, right, array) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            array[k++] = left[i++];
        } else {
            array[k++] = right[j++];
        }
    }

    while (i < left.length) {
        array[k++] = left[i++];
    }

    while (j < right.length) {
        array[k++] = right[j++];
    }

    // console.log(array);
}

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

export { merge, mergeSort };
