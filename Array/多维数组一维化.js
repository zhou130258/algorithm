const result = [];
const st = (arr, result) => {
    for (let i = 0; i < arr.length; ++i) {
        if (Array.isArray(arr[i])) {
            st(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
}
st([1, [1, 4, 5], [5, 6, [4, 5]]], result)
console.log(result);