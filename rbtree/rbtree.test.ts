import { InteractiveTreeSearch } from "./InteractiveTreeSearch"
import init, { createNode, Tree } from "./rbtree"
import { RecursionTreeSearch } from "./RecursionTreeSearch"
import RightRotate from "./RightRotate"

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
})