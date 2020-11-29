import { TreeLink } from "../helper/TreeLink"
import init, { createNode, nil } from "../rbtree"
import TreeDelete from "../TreeDelete"


var tree = init()
it("tree only have one node", () => {
    var node4 = createNode(4, "BLACK")
    tree.root = node4

    TreeDelete(tree, node4)
    expect(tree.root).toBe(null)
})

it("only have left node", () => {
    var node4 = createNode(4, "BLACK")
    var node2 = createNode(2, "RED")
    var node1 = createNode(1, "BLACK")

    TreeLink(node4, node2, nil)
    TreeLink(node2, node1, nil)
    tree.root = node4

    TreeDelete(tree, node4)
    expect(tree.root).toBe(node2)
    expect(node2.color).toBe("BLACK")
    expect(node2.color).toBe("BLACK")
})
it("only have right node", () => {
    var node4 = createNode(4, "BLACK")
    var node6 = createNode(6, "RED")

    TreeLink(node4, nil, node6)
    tree.root = node4

    TreeDelete(tree, node4)
    expect(tree.root).toBe(node6)
    expect(node6.color).toBe("BLACK")
})

it(" have two node", () => {
    var node4 = createNode(4, "BLACK")
    var node6 = createNode(6, "RED")
    var node2 = createNode(2, "RED")

    TreeLink(node4, node2, node6)
    tree.root = node4

    TreeDelete(tree, node4)
    expect(tree.root).toBe(node6)
    expect(node6.color).toBe("BLACK")
})

it(" have two node", () => {
    var node4 = createNode(4, "BLACK")
    var node6 = createNode(6, "BLACK")
    var node2 = createNode(2, "RED")
    var node1 = createNode(1, "BLACK")

    TreeLink(node4, node2, node6)
    TreeLink(node2, node1, nil)
    tree.root = node4

    TreeDelete(tree, node2)
    expect(tree.root).toBe(node4)
    expect(node4.left).toBe(node1)
})

it(" have two node", () => {
    var node10 = createNode(10, "BLACK")

    var node4 = createNode(4, "BLACK")
    var node6 = createNode(6, "BLACK")
    var node2 = createNode(2, "RED")
    var node1 = createNode(1, "BLACK")

    var node12 = createNode(12, "BLACK")
    var node13 = createNode(13, "BLACK")

    TreeLink(node10, node4, node12)
    TreeLink(node12, nil, node13)

    TreeLink(node4, node2, node6)
    TreeLink(node2, node1, nil)
    tree.root = node10

    TreeDelete(tree, node4)

    expect(node10.left).toBe(node6)
    expect(node6.left).toBe(node2)
})


it(" have two node", () => {
    var node10 = createNode(10, "BLACK")

    var node4 = createNode(4, "BLACK")

    var node2 = createNode(2, "BLACK")
    var node1 = createNode(1, "BLACK")

    var node12 = createNode(12, "BLACK")
    var node11 = createNode(12, "RED")
    var node13 = createNode(13, "BLACK")
    var node14 = createNode(14, "BLACK")

    TreeLink(node10, node4, node12)
    TreeLink(node12, node11, node13)
    TreeLink(node13, nil, node14)

    TreeLink(node4, node2, nil)
    TreeLink(node2, node1, nil)
    tree.root = node10

    /**
     *              10B
     *   X---> 4B        12B
     *      2B        11R   13B
     *  1B                      14B
     */

    TreeDelete(tree, node4)

    expect(tree.root).toBe(node11)
    expect(node11.left).toBe(node10)
    expect(node11.right).toBe(node12)
    expect(node12.color).toBe("BLACK")
})


it(" have two node", () => {
    var node8 = createNode(8, "BLACK")

    var node4 = createNode(4, "BLACK")
    var node2 = createNode(2, "BLACK")
    var node1 = createNode(1, "BLACK")

    var node12 = createNode(12, "BLACK")
    var node11 = createNode(12, "BLACK")
    var node10 = createNode(10, "BLACK")

    var node13 = createNode(13, "BLACK")
    var node14 = createNode(14, "BLACK")

    TreeLink(node8, node4, node12)
    TreeLink(node12, node11, node13)
    TreeLink(node11, node10, nil)
    TreeLink(node13, nil, node14)

    TreeLink(node4, node2, nil)
    TreeLink(node2, node1, nil)
    tree.root = node8
    /**
     *              8B
     *   X---> 4B        12B
     *      2B        11B   13B
     *  1B        10B           14B
     */
    TreeDelete(tree, node4)

    expect(tree.root).toBe(node8)
    expect(node8.left).toBe(node2)
    expect(node8.right).toBe(node12)
    expect(node12.color).toBe("RED")
})



it(" have two node", () => {

    var node20 = createNode(20, "BLACK")

    var node8 = createNode(8, "RED")

    var node4 = createNode(4, "BLACK")
    var node2 = createNode(2, "BLACK")
    var node1 = createNode(1, "BLACK")

    var node12 = createNode(12, "BLACK")
    var node11 = createNode(12, "BLACK")
    var node10 = createNode(10, "BLACK")

    var node13 = createNode(13, "BLACK")
    var node14 = createNode(14, "BLACK")

    TreeLink(node20, node8, nil) // 忽略右侧节点
    TreeLink(node8, node4, node12)
    TreeLink(node12, node11, node13)
    TreeLink(node11, node10, nil)
    TreeLink(node13, nil, node14)

    TreeLink(node4, node2, nil)
    TreeLink(node2, node1, nil)
    tree.root = node20
    /**                         20B
     *              8R                   ...
     *   X---> 4B        12B
     *      2B        11B   13B
     *  1B        10B           14B
     */
    TreeDelete(tree, node4)

    expect(tree.root).toBe(node20)
    expect(node8.left).toBe(node2)
    expect(node8.right).toBe(node12)
    expect(node8.color).toBe("BLACK")
    expect(node12.color).toBe("RED")
})


it(" have two node", () => {

    var node20 = createNode(20, "BLACK")

    var node8 = createNode(8, "BLACK")

    var node4 = createNode(4, "BLACK")
    var node2 = createNode(2, "BLACK")
    var node1 = createNode(1, "BLACK")

    var node12 = createNode(12, "RED")
    var node11 = createNode(11, "BLACK")
    var node10 = createNode(10, "RED")

    var node13 = createNode(13, "BLACK")
    var node14 = createNode(14, "BLACK")

    TreeLink(node20, node8, nil) // 忽略右侧节点
    TreeLink(node8, node4, node12)
    TreeLink(node12, node11, node13)
    TreeLink(node11, node10, nil)
    TreeLink(node13, nil, node14)

    TreeLink(node4, node2, nil)
    TreeLink(node2, node1, nil)
    tree.root = node20
    /**                         20B
     *              8B                   ...
     *   X---> 4B        12R
     *      2B        11B   13B
     *  1B        10R           14B
     */
    TreeDelete(tree, node4)

    expect(tree.root).toBe(node20)
    expect(node20.left).toBe(node12)
    expect(node12.left).toBe(node10)
    expect(node10.left).toBe(node8)
    expect(node10.right).toBe(node11)
    expect(node8.left).toBe(node2)
    expect(node8.color).toBe("BLACK")
    expect(node10.color).toBe("RED")
    expect(node12.color).toBe("BLACK")
})



it(" have two node", () => {

    // var node20 = createNode(20, "BLACK")

    var node8 = createNode(8, "RED")

    var node4 = createNode(4, "BLACK")
    var node2 = createNode(2, "BLACK")
    var node1 = createNode(1, "RED")
    var node5 = createNode(5, "BLACK")
    var node6 = createNode(6, "RED")

    var node12 = createNode(12, "BLACK")
    var node11 = createNode(11, "BLACK")
    var node10 = createNode(10, "RED")

    var node13 = createNode(13, "BLACK")
    var node14 = createNode(14, "RED")

    // TreeLink(node20, node8, nil) // 忽略右侧节点
    TreeLink(node8, node4, node12)
    TreeLink(node12, node11, nil)
    TreeLink(node11, node10, nil)
    // TreeLink(node13, nil, node14)

    TreeLink(node4, node2, node5)
    TreeLink(node6, nil, node6)
    TreeLink(node2, node1, nil)
    tree.root = node8
    /**
     *                    8R
     *          4B                  12B   <--- X
     *      2B    5B            11B
     *  1R          6R       10R
     */
    TreeDelete(tree, node12)

    expect(tree.root).toBe(node8)
    expect(node8.left).toBe(node4)
    expect(node4.color).toBe("RED")
})




it(" have two node", () => {

    // var node20 = createNode(20, "BLACK")

    var node8 = createNode(8, "RED")

    var node4 = createNode(4, "BLACK")
    var node2 = createNode(2, "RED")
    var node1 = createNode(1, "BLACK")
    var node5 = createNode(5, "BLACK")
    var node6 = createNode(6, "RED")

    var node12 = createNode(12, "BLACK")
    var node11 = createNode(11, "BLACK")
    var node10 = createNode(10, "RED")

    var node13 = createNode(13, "BLACK")
    var node14 = createNode(14, "RED")

    // TreeLink(node20, node8, nil) // 忽略右侧节点
    TreeLink(node8, node4, node12)
    TreeLink(node12, node11, nil)
    TreeLink(node11, node10, nil)
    // TreeLink(node13, nil, node14)

    TreeLink(node4, node2, node5)
    TreeLink(node6, nil, node6)
    TreeLink(node2, node1, nil)
    tree.root = node8
    /**
     *                    8R
     *          4B                  12B   <--- X
     *      2R    5B            11B
     *  1R          6R       10R
     */
    TreeDelete(tree, node12)

    expect(tree.root).toBe(node4)
    expect(node4.color).toBe("BLACK")
    expect(node2.color).toBe("BLACK")
    expect(node8.left).toBe(node5)
})



it(" have two node", () => {

    // var node20 = createNode(20, "BLACK")

    var node8 = createNode(8, "RED")

    var node4 = createNode(4, "BLACK")
    var node2 = createNode(2, "BLACK")
    var node1 = createNode(1, "BLACK")
    var node5 = createNode(5, "RED")
    var node6 = createNode(6, "BLACK")

    var node12 = createNode(12, "BLACK")
    var node11 = createNode(11, "BLACK")
    var node10 = createNode(10, "RED")

    var node13 = createNode(13, "BLACK")
    var node14 = createNode(14, "RED")

    // TreeLink(node20, node8, nil) // 忽略右侧节点
    TreeLink(node8, node4, node12)
    TreeLink(node12, node11, nil)
    TreeLink(node11, node10, nil)
    // TreeLink(node13, nil, node14)

    TreeLink(node4, node2, node5)
    TreeLink(node5, nil, node6)
    TreeLink(node2, node1, nil)
    tree.root = node8
    /**
     *                    8R
     *          4B                  12B   <--- X
     *      2B    5R            11B
     *  1R          6B       10R
     */
    TreeDelete(tree, node12)

    expect(tree.root).toBe(node5)
    expect(node4.color).toBe("BLACK")
    expect(node8.left).toBe(node6)
})




it(" have two node", () => {

    // var node20 = createNode(20, "BLACK")

    var node8 = createNode(8, "BLACK")

    var node4 = createNode(4, "RED")
    var node2 = createNode(2, "BLACK")
    var node1 = createNode(1, "BLACK")
    var node5 = createNode(5, "BLACK")
    var node6 = createNode(6, "RED")

    var node12 = createNode(12, "BLACK")
    var node11 = createNode(11, "BLACK")
    var node10 = createNode(10, "RED")

    var node13 = createNode(13, "BLACK")
    var node14 = createNode(14, "RED")

    // TreeLink(node20, node8, nil) // 忽略右侧节点
    TreeLink(node8, node4, node12)
    TreeLink(node12, node11, nil)
    TreeLink(node11, node10, nil)
    // TreeLink(node13, nil, node14)

    TreeLink(node4, node2, node5)
    TreeLink(node5, nil, node6)
    TreeLink(node2, node1, nil)
    tree.root = node8
    /**
     *                    8B
     *          4R                  12B   <--- X
     *      2B    5B            11B
     *  1R          6R       10R
     */
    TreeDelete(tree, node12)

    expect(tree.root).toBe(node4)
    expect(node4.color).toBe("BLACK")
    expect(node4.right).toBe(node6)
    expect(node6.right).toBe(node8)
    expect(node6.color).toBe("RED")
    expect(node5.color).toBe("BLACK")
})
