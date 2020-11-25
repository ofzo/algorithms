import { TreeLink } from "../helper/TreeLink"
import LeftRotate from "../LeftRotate"
import init, { createNode, Tree } from "../rbtree"


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
    var node11 = createNode(11, "BLACK")
    var node2 = createNode(2, "RED")
    var node1 = createNode(1, "BLACK")
    var node7 = createNode(7, "BLACK")
    var node5 = createNode(5, "RED")
    var node8 = createNode(8, "RED")
    var node14 = createNode(14, "BLACK")
    var node15 = createNode(15, "RED")
    var tree = init()

    tree.root = node11
    TreeLink(node11, node2, node14)
    TreeLink(node2, node1, node7)
    TreeLink(node7, node5, node8)
    TreeLink(node14, null, node15)

    LeftRotate(tree, node2)
    expect(node2.parent).toBe(node7)
    expect(node7.left).toBe(node2)
    expect(node2.right).toBe(node5)
})
