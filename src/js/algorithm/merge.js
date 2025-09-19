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
}

export { merge };
