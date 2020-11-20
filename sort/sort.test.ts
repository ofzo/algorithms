import BubbleSort from "./BubbleSort"
import { HeapSort } from "./Heap"
import InsertSort from "./InsertSort"
import MergeSort from "./MergeSort"
import QuickSort from "./QuickSort"
import SelectSort from "./SelectSort"

var arr: number[] = []
var result: number[] = []
function resetArr() {
    for (let index = 0; index < 100; index++) {
        arr[index] = Math.floor(Math.random() * 100000)
    }
    result = [...arr].sort((a: number, b: number) => a - b)
}
beforeEach(() => {
    resetArr()
})
describe("normal sort", () => {
    it("BubbleSort", () => {
        BubbleSort(arr)
        expect(arr).toEqual(result)
    })
    it("SelectSort", () => {
        SelectSort(arr)
        expect(arr).toEqual(result)
    })
    it("InsertSort", () => {
        InsertSort(arr)
        expect(arr).toEqual(result)
    })
    it("MergeSort", () => {
        let r = MergeSort(arr)
        expect(r).toEqual(result)
    })
    it("HeapSort", () => {
        let r = HeapSort(arr)
        expect(r).toEqual(result)
    })
    it("QuickSort", () => {
        QuickSort(arr)
        expect(arr).toEqual(result)
    })
})