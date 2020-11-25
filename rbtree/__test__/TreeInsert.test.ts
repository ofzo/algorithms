import { TreeLink } from "../helper/TreeLink"
import init, { createNode } from "../rbtree"
import TreeInsert from "../TreeInsert"

var tree = init()


test("insert a 4", () => {
    var node9 = createNode(9, "BLACK")
    var node2 = createNode(2, "RED")
    var node1 = createNode(1, "BLACK")
    var node7 = createNode(7, "BLACK")
    var node5 = createNode(5, "RED")
    var node8 = createNode(8, "RED")
    var node12 = createNode(12, "BLACK")
    var node15 = createNode(15, "RED")
    tree.root = node9
    TreeLink(node9, node2, node12)
    TreeLink(node2, node1, node7)
    TreeLink(node7, node5, node8)
    TreeLink(node12, null, node15)
    var node4 = createNode(4, "RED")

    TreeInsert(tree, node4)
    expect(node4.parent).toBe(node5)

    expect(tree.root).toBe(node7)
    expect(node7.left).toBe(node2)
    expect(node7.right).toBe(node9)
    expect(node2.right).toBe(node5)
    expect(node9.left).toBe(node8)
    expect(node7.color).toBe("BLACK")
    expect(node1.color).toBe("BLACK")
    expect(node5.color).toBe("BLACK")
    expect(node8.color).toBe("BLACK")
    expect(node12.color).toBe("BLACK")
    expect(node2.color).toBe("RED")
    expect(node4.color).toBe("RED")
    expect(node9.color).toBe("RED")
    expect(node15.color).toBe("RED")
})
test("insert a 16", () => {
    var node9 = createNode(9, "BLACK")
    var node2 = createNode(2, "RED")
    var node1 = createNode(1, "BLACK")
    var node7 = createNode(7, "BLACK")
    var node5 = createNode(5, "RED")
    var node8 = createNode(8, "RED")
    var node12 = createNode(12, "BLACK")
    var node15 = createNode(15, "RED")
    tree.root = node9
    TreeLink(node9, node2, node12)
    TreeLink(node2, node1, node7)
    TreeLink(node7, node5, node8)
    TreeLink(node12, null, node15)
    var node16 = createNode(16, "RED")

    TreeInsert(tree, node16)
    expect(node16.parent).toBe(node15)

    expect(tree.root).toBe(node9)
    expect(node15.left).toBe(node12)
    expect(node12.parent).toBe(node15)
    expect(node15.right).toBe(node16)

    expect(node12.color).toBe("RED")
    expect(node9.color).toBe("BLACK")
    expect(node16.color).toBe("RED")
    expect(node15.color).toBe("BLACK")
})
test("insert a 10", () => {
    var node11 = createNode(11, "BLACK")
    var node4 = createNode(4, "BLACK")
    var node5 = createNode(4, "RED")
    var node20 = createNode(20, "RED")
    var node14 = createNode(14, "BLACK")
    var node12 = createNode(12, "RED")
    var node16 = createNode(16, "RED")
    var node21 = createNode(21, "BLACK")

    tree.root = node11
    TreeLink(node11, node4, node20)
    TreeLink(node4, node5, null)
    TreeLink(node20, node14, node21)
    TreeLink(node14, node12, node16)

    var node17 = createNode(17, "RED")

    TreeInsert(tree, node17)
    expect(tree.root).toBe(node14)
    expect(node14.left).toBe(node11)
    expect(node14.right).toBe(node20)
    expect(node20.left).toBe(node16)
    expect(node11.right).toBe(node12)

    expect(node14.color).toBe("BLACK")
    expect(node4.color).toBe("BLACK")
    expect(node12.color).toBe("BLACK")
    expect(node16.color).toBe("BLACK")
    expect(node21.color).toBe("BLACK")

    expect(node5.color).toBe("RED")
    expect(node11.color).toBe("RED")
    expect(node20.color).toBe("RED")
    expect(node17.color).toBe("RED")

})
test("insert into empty tree", () => {
    var tree = init()
    var node = createNode(0, "RED")
    TreeInsert(tree, node)
    expect(tree.root).toBe(node)
    expect(node.color).toBe("BLACK")
})
