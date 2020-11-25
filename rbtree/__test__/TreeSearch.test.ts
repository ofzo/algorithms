import { InteractiveTreeSearch } from "../InteractiveTreeSearch"
import init, { createNode, Tree } from "../rbtree"
import { RecursionTreeSearch } from "../RecursionTreeSearch"


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
