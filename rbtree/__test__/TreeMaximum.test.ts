import init, { createNode, Tree } from "../rbtree"
import { TreeMaximum } from "../TreeMaximum"


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
