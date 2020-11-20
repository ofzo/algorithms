class Heap<T> {

    heap: T[] = [];

    constructor(init: T[]) {
        this.heap = [...init];
        for (let i = Math.floor((init.length - 1) / 2); i >= 0; i--) {
            this.shiftDown(i);
        }
    }
    shiftDown(index: number) {
        while (2 * index + 1 < this.heap.length) {

            let i = 2 * index + 1;
            if (i + 1 < this.heap.length && this.heap[i] > this.heap[i + 1]) {
                i = i + 1;
            }

            if (this.heap[index] > this.heap[i]) {
                var t = this.heap[i];
                this.heap[i] = this.heap[index];
                this.heap[index] = t;
            }
            index = i;
        }
    }
    pop(): T {
        var t = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        delete this.heap[this.heap.length - 1]
        this.heap.length--
        this.shiftDown(0)
        return t
    }
}

export function HeapSort(arr: Number[]): Number[] {
    var h = new Heap(arr)
    var len = h.heap.length
    var r = []
    for (let i = 0; i < len; i++) {
        r.push(h.pop())
    }
    return r
}