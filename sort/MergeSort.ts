import InsertSort from "./InsertSort";

export default function MergeSort(arr: Number[], left = 0, right = arr.length): Number[] {

    if (right - left <= 10) {
        InsertSort(arr);
        return arr;
    }

    var mid = left + Math.floor((right - left) / 2);
    // ? 为何不是 mid = Math.floor( ( left + right ) / 2 )
    // 在数学计算中, 两者等价, 但在计算机中, 如果left 和 right 足够大,
    // 可能会导致 left+right 超过Number类型的最大值, 从而发生越界, 进而得到错误的结果.
    var leftArr = MergeSort(arr.slice(left, mid)), rightArr = MergeSort(arr.slice(mid, right));

    var indexL = 0, indexR = 0, r = [];

    while (indexL < leftArr.length && indexR < rightArr.length) {

        if (leftArr[indexL] > rightArr[indexR]) {
            r.push(rightArr[indexR]);
            indexR++;
        } else {
            r.push(leftArr[indexL]);
            indexL++;
        }
    }

    while (indexL < leftArr.length) {
        r.push(leftArr[indexL]);
        indexL++;
    }

    while (indexR < rightArr.length) {
        r.push(rightArr[indexR]);
        indexR++;
    }

    return r;
}
