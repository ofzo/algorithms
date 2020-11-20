import { InteractiveTreeSearch } from "./InteractiveTreeSearch";
import { RecursionTreeSearch } from "./RecursionTreeSearch";
import * as tree from "./tree";
import TreeInsert from "./TreeInsert";
import { TreeMaximum } from "./TreeMaximum";
import { TreeMinimum } from "./TreeMinimum";
import TreePredecessor from "./TreePredecessor";
import TreeSuccessor from "./TreeSuccessor";

let values = Object.values(tree.nodes)

describe("search", () => {
    it("recursion", () => {
        values.forEach(node => {
            expect(RecursionTreeSearch(tree.root, node.value)).toEqual(node)
        })
    })
    it("interactive", () => {
        values.forEach(node => {
            expect(InteractiveTreeSearch(tree.root, node.value)).toEqual(node)
        })
    })
})


it("get maximum", () => {
    expect(TreeMaximum(tree.root)).toEqual(tree.node20)
})

it("get minimum", () => {
    expect(TreeMinimum(tree.root)).toEqual(tree.node2)
})

describe("get predecessor", () => {
    test("index > 0", () => {
        values.slice(1).forEach((node, index) => {
            expect(TreePredecessor(node)).toEqual(values[index])
        })
    })
    test("index = 0", () => {
        expect(TreePredecessor(values[0])).toEqual(null)
    })
})

describe("get successor", () => {
    let length = values.length
    test("index < values.length", () => {
        values.slice(0, -1).forEach((node, index) => {
            expect(TreeSuccessor(node)).toEqual(values[index + 1])
        })
    })
    test("index = values.length", () => {
        expect(TreeSuccessor(values[length - 1])).toEqual(null)
    })
})
describe("insert", () => {
    test("insert a node", () => {
        let node = tree.createNode(2)
        TreeInsert(tree.root, node)
        expect(tree.node2.right?.value).toBe(2)
    })
    test("insert a node", () => {
        let node = tree.createNode(15)
        TreeInsert(tree.root, node)
        expect(tree.node17.left?.value).toBe(15)
    })
    test("insert a node", () => {
        let node = tree.createNode(5)
        TreeInsert(tree.root, node)
        expect(tree.node4.right?.value).toBe(5)
    })
    test("insert a node", () => {
        let node = tree.createNode(8)
        TreeInsert(tree.root, node)
        expect(tree.node9.left?.value).toBe(8)
    })
    test("insert a node", () => {
        let node = tree.createNode(22)
        TreeInsert(tree.root, node)
        expect(tree.node20.right?.value).toBe(22)
    })
})