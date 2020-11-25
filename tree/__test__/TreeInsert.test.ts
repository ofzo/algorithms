import { createNode } from "../tree"
import TreeInsert from "../TreeInsert"
import { buildTree, nodes } from "./test.data"


var tree = buildTree()
beforeEach(() => {
    tree = buildTree()
})


test("insert a node", () => {
    let node = createNode(200)
    TreeInsert(tree, node)
    expect(nodes.node200.right?.value).toBe(200)
})
test("insert a node", () => {
    let node = createNode(1500)
    TreeInsert(tree, node)
    expect(nodes.node1700.left?.value).toBe(1500)
})
test("insert a node", () => {
    let node = createNode(500)
    TreeInsert(tree, node)
    expect(nodes.node400.right?.value).toBe(500)
})
test("insert a node", () => {
    let node = createNode(800)
    TreeInsert(tree, node)
    expect(nodes.node900.left?.value).toBe(800)
})
test("insert a node", () => {
    let node = createNode(2400)
    TreeInsert(tree, node)
    expect(nodes.node2200.right?.value).toBe(2400)
})
test("insert a node on empty tree", () => {
    let node = createNode(2400)
    let T = { root: null }
    TreeInsert(T, node)
    expect(T.root).toBe(node)
})
