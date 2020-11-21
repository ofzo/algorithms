import InsertSort from "./InsertSort";


export default function QuickSort(arr: Number[], left = 0, right = arr.length) {
    if (right - left <= 10) {
        InsertSort(arr, left, right);
        return;
    }

    var key = Math.floor(Math.random() * (right - left) + left);
    // ? 为什么要随机一个值
    // 为了防止传入的是一个有序的数组, 在这种情况下如果始终使用第一个值, 这排序算法将会退化一个选择排序
    var base = arr[key];
    arr[key] = arr[left];
    arr[left] = base;

    // [left, i)        [i, j]           [j+1 ,right)
    //                       current
    var current = left + 1, i = left, j = right - 1;

    while (current <= j) {

        if (arr[current] < base) {
            var t = arr[current];
            arr[current] = arr[i];
            arr[i] = t;
            i++;
            current++;
        } else if (arr[current] > base) {
            var t = arr[current];
            arr[current] = arr[j];
            arr[j] = t;
            j--;
        } else {
            current++;
        }
    }

    QuickSort(arr, left, i);
    QuickSort(arr, j + 1, right);
}
