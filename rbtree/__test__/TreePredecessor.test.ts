import init, { createNode, Tree } from "../rbtree"
import TreePredecessor from "../TreePredecessor"

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
