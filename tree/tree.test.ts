import { InteractiveTreeSearch } from "./InteractiveTreeSearch";
import { RecursionTreeSearch } from "./RecursionTreeSearch";
import * as tree from "./tree";
import TreeDelete from "./TreeDelete";
import TreeInsert from "./TreeInsert";
import { TreeMaximum } from "./TreeMaximum";
import { TreeMinimum } from "./TreeMinimum";
import TreePredecessor from "./TreePredecessor";
import TreeSuccessor from "./TreeSuccessor";

let values = Object.values(tree.nodes)

beforeEach(() => {
    tree.resetTree()
})


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
    expect(TreeMaximum(tree.root)).toEqual(tree.node22)
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
        let node = tree.createNode(24)
        TreeInsert(tree.root, node)
        expect(tree.node22.right?.value).toBe(24)
    })
})

describe("delete", () => {
    it("empty left and right", () => {
        TreeDelete(tree.root, tree.node2)
        expect(tree.node3.left).toEqual(null)
    })
    it("empty left and right", () => {
        TreeDelete(tree.root, tree.node4)
        expect(tree.node3.right).toEqual(null)
    })
    it("empty right", () => {
        TreeDelete(tree.root, tree.node13)
        expect(tree.node7.right?.value).toEqual(tree.node9.value)
    })
    it("empty left", () => {
        TreeDelete(tree.root, tree.node7)
        expect(tree.node6.right?.value).toEqual(tree.node13.value)
    })
    it("has left and right and successor is right", () => {
        TreeDelete(tree.root, tree.node6)
        expect(tree.node15.left?.value).toEqual(tree.node7.value)
    })
    it("has left and right and successor is not right", () => {
        var node = TreeSuccessor(tree.node18)
        TreeDelete(tree.root, tree.node18)
        expect(tree.node15.right?.value).toEqual(tree.node19.value)
    })
})