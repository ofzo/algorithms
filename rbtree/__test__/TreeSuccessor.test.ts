import init, { createNode, Tree } from "../rbtree"
import TreeSuccessor from "../TreeSuccessor"

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
