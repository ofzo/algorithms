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
            expect(RecursionTreeSearch(tree.root, node.value)?.value).toEqual(node.value)
        })
    })
    it("interactive", () => {
        values.forEach(node => {
            expect(InteractiveTreeSearch(tree.root, node.value)?.value).toEqual(node.value)
        })
    })
})


it("get maximum", () => {
    expect(TreeMaximum(tree.root)).toEqual(tree.node2200)
})

it("get minimum", () => {
    expect(TreeMinimum(tree.root)).toEqual(tree.node200)
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
        let node = tree.createNode(200)
        TreeInsert(tree.root, node)
        expect(tree.node200.right?.value).toBe(200)
    })
    test("insert a node", () => {
        let node = tree.createNode(1500)
        TreeInsert(tree.root, node)
        expect(tree.node1700.left?.value).toBe(1500)
    })
    test("insert a node", () => {
        let node = tree.createNode(500)
        TreeInsert(tree.root, node)
        expect(tree.node400.right?.value).toBe(500)
    })
    test("insert a node", () => {
        let node = tree.createNode(800)
        TreeInsert(tree.root, node)
        expect(tree.node900.left?.value).toBe(800)
    })
    test("insert a node", () => {
        let node = tree.createNode(2400)
        TreeInsert(tree.root, node)
        expect(tree.node2200.right?.value).toBe(2400)
    })
})

describe("delete", () => {
    it("empty left and right", () => {
        TreeDelete(tree.root, tree.node200)
        expect(tree.node300.left).toEqual(null)
    })
    it("empty left and right", () => {
        TreeDelete(tree.root, tree.node400)
        expect(tree.node300.right).toEqual(null)
    })
    it("empty right and as right", () => {
        TreeDelete(tree.root, tree.node1300)
        expect(tree.node700.right?.value).toEqual(tree.node900.value)
        expect(tree.node900.parent?.value).toEqual(tree.node700.value)
    })
    it("empty right and as left", () => {
        TreeDelete(tree.root, tree.node2100)
        expect(tree.node2200.left?.value).toEqual(tree.node2050.value)
        expect(tree.node2050.parent?.value).toEqual(tree.node2200.value)
    })
    it("empty left and as right", () => {
        TreeDelete(tree.root, tree.node700)
        expect(tree.node600.right?.value).toEqual(tree.node1300.value)
        expect(tree.node1300.parent?.value).toEqual(tree.node600.value)
    })
    it("empty left and as left", () => {
        TreeDelete(tree.root, tree.node1700)
        expect(tree.node1800.left?.value).toEqual(tree.node1750.value)
        expect(tree.node1750.parent?.value).toEqual(tree.node1800.value)
    })
    it("has left and right and successor is right", () => {
        TreeDelete(tree.root, tree.node600)
        expect(tree.node1500.left?.value).toEqual(tree.node700.value)
        expect(tree.node700.parent?.value).toEqual(tree.node1500.value)
        expect(tree.node700.left?.value).toEqual(tree.node300.value)
    })
    it("has left and right and successor is not right", () => {
        TreeDelete(tree.root, tree.node1800)
        expect(tree.node1500.right?.value).toEqual(tree.node1900.value)
        expect(tree.node1900.parent?.value).toEqual(tree.node1500.value)
        expect(tree.node2000.parent?.value).toEqual(tree.node1900.value)
        expect(tree.node2000.left?.value).toEqual(tree.node1950.value)
    })
})