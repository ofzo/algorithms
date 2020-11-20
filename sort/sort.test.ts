import BubbleSort from "./BubbleSort"
import { HeapSort } from "./Heap"
import InsertSort from "./InsertSort"
import MergeSort from "./MergeSort"
import QuickSort from "./QuickSort"
import SelectSort from "./SelectSort"

var arr: Number[] = [5, 4, 3, 2, 6, 9, 8, 2, 0, 1]
var result: Number[] = [0, 1, 2, 2, 3, 4, 5, 6, 8, 9]
function resetArr() {
    arr = [5, 4, 3, 2, 6, 9, 8, 2, 0, 1]
}
describe("sort", () => {
    it("BubbleSort", () => {
        resetArr()
        BubbleSort(arr)
        expect(arr).toEqual(result)
    })
    it("SelectSort", () => {
        resetArr()
        SelectSort(arr)
        expect(arr).toEqual(result)
    })
    it("InsertSort", () => {
        resetArr()
        InsertSort(arr)
        expect(arr).toEqual(result)
    })
    it("MergeSort", () => {
        resetArr()
        arr = MergeSort(arr)
        expect(arr).toEqual(result)
    })
    it("HeapSort", () => {
        resetArr()
        arr = HeapSort(arr)
        expect(arr).toEqual(result)
    })
    it("QuickSort", () => {
        resetArr()
        QuickSort(arr)
        expect(arr).toEqual(result)
    })
})