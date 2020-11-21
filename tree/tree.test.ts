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
            expect(RecursionTreeSearch(tree.Tree, node.value)?.value).toEqual(node.value)
        })
    })
    it("interactive", () => {
        values.forEach(node => {
            expect(InteractiveTreeSearch(tree.Tree, node.value)?.value).toEqual(node.value)
        })
    })
})


it("maximum", () => {
    expect(TreeMaximum(tree.Tree)).toEqual(tree.node2200)
})

it("minimum", () => {
    expect(TreeMinimum(tree.Tree)).toEqual(tree.node200)
})

describe("predecessor", () => {
    test("index > 0", () => {
        values.slice(1).forEach((node, index) => {
            expect(TreePredecessor({ root: node })).toEqual(values[index])
        })
    })
    test("index = 0", () => {
        expect(TreePredecessor({ root: values[0] })).toEqual(null)
    })
    test("null tree", () => {
        expect(TreePredecessor({ root: null })).toBe(null)
    })
})

describe("get successor", () => {
    let length = values.length
    test("index < values.length", () => {
        values.slice(0, -1).forEach((node, index) => {
            expect(TreeSuccessor({ root: node })).toEqual(values[index + 1])
        })
    })
    test("index = values.length", () => {
        expect(TreeSuccessor({ root: values[length - 1] })).toEqual(null)
    })
    test("null tree", () => {
        expect(TreeSuccessor({ root: null })).toBe(null)
    })
})
describe("insert", () => {
    test("insert a node", () => {
        let node = tree.createNode(200)
        TreeInsert(tree.Tree, node)
        expect(tree.node200.right?.value).toBe(200)
    })
    test("insert a node", () => {
        let node = tree.createNode(1500)
        TreeInsert(tree.Tree, node)
        expect(tree.node1700.left?.value).toBe(1500)
    })
    test("insert a node", () => {
        let node = tree.createNode(500)
        TreeInsert(tree.Tree, node)
        expect(tree.node400.right?.value).toBe(500)
    })
    test("insert a node", () => {
        let node = tree.createNode(800)
        TreeInsert(tree.Tree, node)
        expect(tree.node900.left?.value).toBe(800)
    })
    test("insert a node", () => {
        let node = tree.createNode(2400)
        TreeInsert(tree.Tree, node)
        expect(tree.node2200.right?.value).toBe(2400)
    })
    test("insert a node on empty tree", () => {
        let node = tree.createNode(2400)
        let T = { root: null }
        TreeInsert(T, node)
        expect(T.root).toBe(node)
    })
})

describe("delete", () => {
    it("not in tree", () => {
        TreeDelete(tree.Tree, tree.createNode(-1))
        expect(tree.node200.left).toEqual(null)
    })
    it("only one node and delete it", () => {
        let node = tree.createNode(-1)
        let T = { root: node }
        TreeDelete(T, node)
        expect(T.root).toEqual(null)
    })
    it("root only have left and delete root", () => {
        let node = tree.createNode(-1)
        let left = tree.createNode(-2)
        node.left = left
        left.parent = node
        let T = { root: node }
        TreeDelete(T, node)
        expect(T.root).toEqual(left)
    })
    it("root only have right and delete root", () => {
        let node = tree.createNode(-1)
        let right = tree.createNode(0)
        node.right = right
        right.parent = node
        let T = { root: node }
        TreeDelete(T, node)
        expect(T.root).toEqual(right)
    })
    it("empty left and right", () => {
        TreeDelete(tree.Tree, tree.node200)
        expect(tree.node300.left).toEqual(null)
    })
    it("empty left and right", () => {
        TreeDelete(tree.Tree, tree.node400)
        expect(tree.node300.right).toEqual(null)
    })
    it("empty right and as right", () => {
        TreeDelete(tree.Tree, tree.node1300)
        expect(tree.node700.right?.value).toEqual(tree.node900.value)
        expect(tree.node900.parent?.value).toEqual(tree.node700.value)
    })
    it("empty right and as left", () => {
        TreeDelete(tree.Tree, tree.node2100)
        expect(tree.node2200.left?.value).toEqual(tree.node2050.value)
        expect(tree.node2050.parent?.value).toEqual(tree.node2200.value)
    })
    it("empty left and as right", () => {
        TreeDelete(tree.Tree, tree.node700)
        expect(tree.node600.right?.value).toEqual(tree.node1300.value)
        expect(tree.node1300.parent?.value).toEqual(tree.node600.value)
    })
    it("empty left and as left", () => {
        TreeDelete(tree.Tree, tree.node1700)
        expect(tree.node1800.left?.value).toEqual(tree.node1750.value)
        expect(tree.node1750.parent?.value).toEqual(tree.node1800.value)
    })
    it("has left and right and successor is right", () => {
        TreeDelete(tree.Tree, tree.node600)
        expect(tree.node1500.left?.value).toEqual(tree.node700.value)
        expect(tree.node700.parent?.value).toEqual(tree.node1500.value)
        expect(tree.node700.left?.value).toEqual(tree.node300.value)
    })
    it("has left and right and successor is not right", () => {
        TreeDelete(tree.Tree, tree.node1800)
        expect(tree.node1500.right?.value).toEqual(tree.node1900.value)
        expect(tree.node1900.parent?.value).toEqual(tree.node1500.value)
        expect(tree.node2000.parent?.value).toEqual(tree.node1900.value)
        expect(tree.node2000.left?.value).toEqual(tree.node1950.value)
    })
    it("delete root node", () => {
        TreeDelete(tree.Tree, tree.node1500)
        expect(tree.node1700.right?.value).toEqual(tree.node1800.value)
        expect(tree.node1800.left?.value).toEqual(tree.node1750.value)
        expect(tree.node1750.parent?.value).toEqual(tree.node1800.value)
    })

    it("delete  node", () => {
        let root = tree.createNode(0)
        let left = tree.createNode(-1)
        let right = tree.createNode(1)
        root.left = left
        root.right = right
        left.parent = root
        right.parent = root

        let T = { root }

        TreeDelete(T, root)
        expect(T.root).toBe(right)
    })
    it("delete  node", () => {
        let root = tree.createNode(10)
        let left = tree.createNode(-10)
        let right = tree.createNode(20)
        let right_r = tree.createNode(30)
        let right_l = tree.createNode(15)
        root.left = left
        root.right = right
        left.parent = root
        right.parent = root

        //
        right.left = right_l
        right.right = right_r
        right_l.parent = right_r.parent = right

        let T = { root }

        TreeDelete(T, right)
        expect(T.root.right).toBe(right_r)
        expect(right_r.parent).toBe(T.root)
        expect(right_r.left).toBe(right_l)
    })

    it("delete  node", () => {
        let root = tree.createNode(100)
        let node140 = tree.createNode(140)
        let node20 = tree.createNode(20)
        let node30 = tree.createNode(30)
        let node15 = tree.createNode(15)
        let node25 = tree.createNode(25)
        let node28 = tree.createNode(28)
        root.left = node20
        root.right = node140
        node20.parent = root
        node140.parent = root

        //
        node20.left = node15
        node20.right = node30
        node15.parent = node30.parent = node20

        //
        node30.left = node25
        node25.right = node28
        node25.parent = node30
        node28.parent = node25

        let T = { root }

        TreeDelete(T, node20)
        expect(T.root.left).toBe(node25)
        expect(node25.parent).toBe(T.root)
        expect(node25.left).toBe(node15)

        expect(node30.left).toBe(node28)
        expect(node30.parent).toBe(node25)

        expect(node28.parent).toBe(node30)
    })
})