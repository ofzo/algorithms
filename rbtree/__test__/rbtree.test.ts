import { InteractiveTreeSearch } from "../InteractiveTreeSearch"
import LeftRotate from "../LeftRotate"
import init, { createNode, Node, Tree } from "../rbtree"
import { RecursionTreeSearch } from "../RecursionTreeSearch"
import RightRotate from "../RightRotate"
import { TreeMaximum } from "../TreeMaximum"
import { TreeMinimum } from "../TreeMinimum"
import TreePredecessor from "../TreePredecessor"
import TreeSuccessor from "../TreeSuccessor"

function link<T>(parent: Node<T>, left: Node<T> | null, right: Node<T> | null) {
    if (left) {
        parent.left = left
        left.parent = parent
    }
    if (right) {
        parent.right = right
        right.parent = parent
    }
}

var node11 = createNode(11, "BLACK")
var node2 = createNode(2, "RED")
var node1 = createNode(1, "BLACK")
var node7 = createNode(7, "BLACK")
var node5 = createNode(5, "RED")
var node8 = createNode(8, "RED")
var node14 = createNode(14, "BLACK")
var node15 = createNode(15, "RED")
var tree = init()

beforeEach(() => {
    tree.root = node11
    link(node11, node2, node14)
    link(node2, node1, node7)
    link(node7, node5, node8)
    link(node14, null, node15)
})





describe("find node", () => {
    it("find node", () => {
        var tree = init(4)
        expect(InteractiveTreeSearch(tree, 3)).toBe(null)
        expect(RecursionTreeSearch(tree, 3)).toBe(null)
    })
    it("find node", () => {
        var tree = init(4)
        expect(InteractiveTreeSearch(tree, 4)).toBe(tree.root)
        expect(RecursionTreeSearch(tree, 4)).toBe(tree.root)

        expect(RecursionTreeSearch(tree, 21)).toBe(null)
        expect(InteractiveTreeSearch(tree, 21)).toBe(null)
    })
    it("find node", () => {
        var node7 = createNode(7, "RED")
        var node3 = createNode(3, "BLACK")
        var node4 = createNode(4, "RED")
        var node1 = createNode(1, "RED")
        var node11 = createNode(11, "BLACK")

        node7.left = node3
        node3.parent = node7
        node3.left = node1
        node1.parent = node3
        node3.right = node4
        node4.parent = node3

        node7.right = node11
        node11.parent = node7

        var tree: Tree<Number> = init()
        tree.root = node7

        expect(InteractiveTreeSearch(tree, 7)).toBe(tree.root)
        expect(RecursionTreeSearch(tree, 7)).toBe(tree.root)

        expect(RecursionTreeSearch(tree, 3)).toBe(node3)
        expect(InteractiveTreeSearch(tree, 3)).toBe(node3)

        expect(RecursionTreeSearch(tree, 1)).toBe(node1)
        expect(InteractiveTreeSearch(tree, 1)).toBe(node1)

        expect(RecursionTreeSearch(tree, 4)?.value).toBe(node4.value)
        expect(InteractiveTreeSearch(tree, 4)).toBe(node4)

        expect(RecursionTreeSearch(tree, 11)).toBe(node11)
        expect(InteractiveTreeSearch(tree, 11)).toBe(node11)

    })
})


describe("rotate right", () => {
    it("rotate root 1", () => {
        var node8 = createNode(8, "RED")
        var node7 = createNode(7, "RED")
        var node3 = createNode(3, "BLACK")
        var node4 = createNode(4, "RED")
        var node1 = createNode(1, "RED")
        var node11 = createNode(11, "BLACK")

        node8.left = node7
        node7.parent = node8

        node7.left = node3
        node3.parent = node7
        node3.left = node1
        node1.parent = node3
        node3.right = node4
        node4.parent = node3

        node7.right = node11
        node11.parent = node7

        var tree: Tree<Number> = init()
        tree.root = node8

        RightRotate(tree, node7)
        expect(node8.left.value).toBe(node3.value)
        expect(node3.parent.value).toBe(node8.value)

        expect(node7.parent.value).toBe(node3.value)
        expect(node3.right.value).toBe(node7.value)

        expect(node7.left.value).toBe(node4.value)
        expect(node4.parent.value).toBe(node7.value)
    })
    it("rotate root 2", () => {
        var node6 = createNode(6, "RED")
        var node7 = createNode(7, "RED")
        var node3 = createNode(3, "BLACK")
        var node4 = createNode(4, "RED")
        var node1 = createNode(1, "RED")
        var node11 = createNode(11, "BLACK")

        node6.right = node7
        node7.parent = node6

        node7.left = node3
        node3.parent = node7
        node3.left = node1
        node1.parent = node3
        node3.right = node4
        node4.parent = node3

        node7.right = node11
        node11.parent = node7

        var tree: Tree<Number> = init()
        tree.root = node6

        RightRotate(tree, node7)
        expect(node6.right.value).toBe(node3.value)
        expect(node3.parent.value).toBe(node6.value)

        expect(node7.parent.value).toBe(node3.value)
        expect(node3.right.value).toBe(node7.value)

        expect(node7.left.value).toBe(node4.value)
        expect(node4.parent.value).toBe(node7.value)
    })
    it("rotate root 3", () => {
        var node7 = createNode(7, "RED")
        var node3 = createNode(3, "BLACK")
        var node4 = createNode(2, "RED")
        var node1 = createNode(1, "RED")
        var node11 = createNode(11, "BLACK")

        node7.left = node3
        node3.parent = node7
        node3.left = node1
        node1.parent = node3
        node3.right = node4
        node4.parent = node3

        node7.right = node11
        node11.parent = node7

        var tree: Tree<Number> = init()
        tree.root = node7

        RightRotate(tree, node7)
        expect(tree.root).toBe(node3)
    })
    it("rotate root", () => {
        var node7 = createNode(7, "RED")

        var tree: Tree<Number> = init()
        tree.root = node7

        RightRotate(tree, node7)
        expect(tree.root).toBe(node7)
    })
    it("rotate root 4", () => {
        var node7 = createNode(7, "RED")
        var tree: Tree<Number> = init()

        expect(tree.root).toBe(null)
        expect(() => {
            RightRotate(tree, node7)
        }).toThrowError("node 不在树中")
    })
    it("test right rotate", () => {
        tree.root = node11
        link(node11, node7, node14)
        link(node7, node2, node8)
        link(node2, node1, node5)
        link(node14, null, node15)
        RightRotate(tree, node11)

        expect(tree.root).toBe(node7)
        expect(node7.left).toBe(node2)
        expect((node7.right as Node<number>).value).toBe(node11.value)
        expect(node11.left).toBe(node8)
    })
})


describe("rotate left", () => {
    it("rotate root 1", () => {
        var node8 = createNode(8, "RED")
        var node7 = createNode(7, "RED")
        var node3 = createNode(3, "BLACK")
        var node4 = createNode(4, "RED")
        var node1 = createNode(1, "RED")
        var node11 = createNode(11, "BLACK")

        node8.left = node3
        node3.parent = node8

        node3.left = node1
        node1.parent = node3

        node3.right = node7
        node7.parent = node3

        node7.left = node4
        node4.parent = node7

        node7.right = node11
        node11.parent = node7

        var tree: Tree<Number> = init()
        tree.root = node8

        LeftRotate(tree, node3)
        expect(node8.left.value).toBe(node7.value)
        expect(node7.parent.value).toBe(node8.value)

        expect(node3.parent.value).toBe(node7.value)
        expect(node3.right.value).toBe(node4.value)

        expect(node7.left.value).toBe(node3.value)
        expect(node4.parent.value).toBe(node3.value)
    })
    it("rotate root 2", () => {
        var node2 = createNode(2, "RED")
        var node7 = createNode(7, "RED")
        var node3 = createNode(3, "BLACK")
        var node4 = createNode(4, "RED")
        var node1 = createNode(1, "RED")
        var node11 = createNode(11, "BLACK")

        node2.right = node3
        node3.parent = node2

        node7.left = node4
        node4.parent = node7
        node3.left = node1
        node1.parent = node3
        node3.right = node7
        node7.parent = node3

        node7.right = node11
        node11.parent = node7

        var tree: Tree<Number> = init()
        tree.root = node2

        LeftRotate(tree, node3)
        expect(node2.right.value).toBe(node7.value)
        expect(node3.parent.value).toBe(node7.value)

        expect(node7.parent.value).toBe(node2.value)
        expect(node3.right.value).toBe(node4.value)

        expect(node7.left.value).toBe(node3.value)
        expect(node4.parent.value).toBe(node3.value)
    })
    it("rotate root 3", () => {
        var node7 = createNode(7, "RED")
        var node3 = createNode(3, "BLACK")
        var node4 = createNode(2, "RED")
        var node1 = createNode(1, "RED")
        var node11 = createNode(11, "BLACK")

        node3.left = node1
        node1.parent = node3
        node7.left = node4
        node4.parent = node7
        node3.right = node7
        node7.parent = node3

        node7.right = node11
        node11.parent = node7

        var tree: Tree<Number> = init()
        tree.root = node3

        LeftRotate(tree, node3)
        expect(tree.root).toBe(node7)
    })
    it("rotate root", () => {
        var node7 = createNode(7, "RED")

        var tree: Tree<Number> = init()
        tree.root = node7

        LeftRotate(tree, node7)
        expect(tree.root).toBe(node7)
    })
    it("rotate root 4", () => {
        var node7 = createNode(7, "RED")
        var tree: Tree<Number> = init()

        expect(tree.root).toBe(null)
        expect(() => {
            LeftRotate(tree, node7)
        }).toThrowError("node 不在树中")
    })
    it("test left rotate", () => {
        LeftRotate(tree, node2)
        expect(node2.parent).toBe(node7)
        expect(node7.left).toBe(node2)
        expect(node2.right).toBe(node5)
    })
})

it("maximum", () => {
    var node6 = createNode(6, "RED")
    var node7 = createNode(7, "RED")
    var node3 = createNode(3, "BLACK")
    var node4 = createNode(4, "RED")
    var node1 = createNode(1, "RED")
    var node11 = createNode(11, "BLACK")

    node6.right = node7
    node7.parent = node6

    node6.left = node3
    node3.parent = node6
    node3.left = node1
    node1.parent = node3
    node3.right = node4
    node4.parent = node3

    node7.right = node11
    node11.parent = node7

    var tree: Tree<Number> = init()
    tree.root = node6
    expect(TreeMaximum(tree)).toEqual(node11)
})

it("minimum", () => {
    var node6 = createNode(6, "RED")
    var node7 = createNode(7, "RED")
    var node3 = createNode(3, "BLACK")
    var node4 = createNode(4, "RED")
    var node1 = createNode(1, "RED")
    var node11 = createNode(11, "BLACK")

    node6.right = node7
    node7.parent = node6

    node6.left = node3
    node3.parent = node6
    node3.left = node1
    node1.parent = node3
    node3.right = node4
    node4.parent = node3

    node7.right = node11
    node11.parent = node7

    var tree: Tree<Number> = init()
    tree.root = node6
    expect(TreeMinimum(tree)?.value).toEqual(node1.value)
})

describe("predecessor", () => {
    var node7 = createNode(7, "RED")
    var node3 = createNode(3, "BLACK")
    var node4 = createNode(4, "RED")
    var node1 = createNode(1, "RED")
    var node11 = createNode(11, "BLACK")

    node7.left = node3
    node3.parent = node7
    node3.left = node1
    node1.parent = node3
    node3.right = node4
    node4.parent = node3

    node7.right = node11
    node11.parent = node7

    var tree: Tree<Number> = init()
    tree.root = node7

    test("index = 0", () => {
        expect(TreePredecessor(node3)).toEqual(node1)
        expect(TreePredecessor(node7)).toEqual(node4)
        expect(TreePredecessor(node4)).toEqual(node3)
    })
    test("index = 0", () => {
        expect(TreePredecessor(node11)).toEqual(node7)
    })
    test("null tree", () => {
        expect(TreePredecessor(node1)).toBe(null)
    })
})
describe("successor", () => {
    var node7 = createNode(7, "RED")
    var node3 = createNode(3, "BLACK")
    var node4 = createNode(4, "RED")
    var node1 = createNode(1, "RED")
    var node11 = createNode(11, "BLACK")

    node7.left = node3
    node3.parent = node7
    node3.left = node1
    node1.parent = node3
    node3.right = node4
    node4.parent = node3

    node7.right = node11
    node11.parent = node7

    var tree: Tree<Number> = init()
    tree.root = node7

    test("index = 0", () => {
        expect(TreeSuccessor(node3)).toEqual(node4)
        expect(TreeSuccessor(node7)).toEqual(node11)
        expect(TreeSuccessor(node4)).toEqual(node7)
    })
    test("index = 0", () => {
        expect(TreeSuccessor(node11)).toEqual(null)
    })
    test("null tree", () => {
        expect(TreeSuccessor(node1)).toBe(node3)
    })
})
