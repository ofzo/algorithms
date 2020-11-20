
export default function InsertSort(arr: Number[], left = 0, right = arr.length) {
    for (let i = left + 1; i < right; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
