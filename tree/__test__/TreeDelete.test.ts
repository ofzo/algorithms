import { TreeLink } from "../helper/TreeLink";
import { createNode } from "../tree";
import TreeDelete from "../TreeDelete";
import { buildTree, nodes } from "./test.data";

var tree = buildTree()
beforeEach(() => {
    tree = buildTree()
})

it("not in tree", () => {
    TreeDelete(tree, createNode(-1))
    expect(nodes.node200.left).toEqual(null)
})
it("only one node and delete it", () => {
    let node = createNode(-1)
    let T = { root: node }
    TreeDelete(T, node)
    expect(T.root).toEqual(null)
})
it("root only have left and delete root", () => {
    let node = createNode(-1)
    let left = createNode(-2)
    TreeLink(node, left, null)

    let T = { root: node }
    TreeDelete(T, node)
    expect(T.root).toEqual(left)
})
it("root only have right and delete root", () => {
    let node = createNode(-1)
    let right = createNode(0)
    TreeLink(node, null, right)
    let T = { root: node }
    TreeDelete(T, node)
    expect(T.root).toEqual(right)
})
it("empty left and right", () => {
    TreeDelete(tree, nodes.node200)
    expect(nodes.node300.left).toEqual(null)
})
it("empty left and right", () => {
    TreeDelete(tree, nodes.node400)
    expect(nodes.node300.right).toEqual(null)
})
it("empty right and as right", () => {
    TreeDelete(tree, nodes.node1300)
    expect(nodes.node700.right?.value).toEqual(nodes.node900.value)
    expect(nodes.node900.parent?.value).toEqual(nodes.node700.value)
})
it("empty right and as left", () => {
    TreeDelete(tree, nodes.node2100)
    expect(nodes.node2200.left?.value).toEqual(nodes.node2050.value)
    expect(nodes.node2050.parent?.value).toEqual(nodes.node2200.value)
})
it("empty left and as right", () => {
    TreeDelete(tree, nodes.node700)
    expect(nodes.node600.right?.value).toEqual(nodes.node1300.value)
    expect(nodes.node1300.parent?.value).toEqual(nodes.node600.value)
})
it("empty left and as left", () => {
    TreeDelete(tree, nodes.node1700)
    expect(nodes.node1800.left?.value).toEqual(nodes.node1750.value)
    expect(nodes.node1750.parent?.value).toEqual(nodes.node1800.value)
})
it("has left and right and successor is right", () => {
    TreeDelete(tree, nodes.node600)
    expect(nodes.node1500.left?.value).toEqual(nodes.node700.value)
    expect(nodes.node700.parent?.value).toEqual(nodes.node1500.value)
    expect(nodes.node700.left?.value).toEqual(nodes.node300.value)
})
it("has left and right and successor is not right", () => {
    TreeDelete(tree, nodes.node1800)
    expect(nodes.node1500.right?.value).toEqual(nodes.node1900.value)
    expect(nodes.node1900.parent?.value).toEqual(nodes.node1500.value)
    expect(nodes.node2000.parent?.value).toEqual(nodes.node1900.value)
    expect(nodes.node2000.left?.value).toEqual(nodes.node1950.value)
})
it("delete root node", () => {
    TreeDelete(tree, nodes.node1500)
    expect(nodes.node1700.right?.value).toEqual(nodes.node1800.value)
    expect(nodes.node1800.left?.value).toEqual(nodes.node1750.value)
    expect(nodes.node1750.parent?.value).toEqual(nodes.node1800.value)
})

it("delete  node", () => {
    let root = createNode(0)
    let left = createNode(-1)
    let right = createNode(1)
    root.left = left
    root.right = right
    left.parent = root
    right.parent = root

    let T = { root }

    TreeDelete(T, root)
    expect(T.root).toBe(right)
})
it("delete  node", () => {
    let root = createNode(10)
    let left = createNode(-10)
    let right = createNode(20)
    let right_r = createNode(30)
    let right_l = createNode(15)
    root.left = left
    root.right = right
    left.parent = root
    right.parent = root

    //
    right.left = right_l
    right.right = right_r
    right_l.parent = right_r.parent = right

    let T = { root }

    TreeDelete(T, right)
    expect(T.root.right).toBe(right_r)
    expect(right_r.parent).toBe(T.root)
    expect(right_r.left).toBe(right_l)
})

it("delete  node", () => {
    let root = createNode(100)
    let node140 = createNode(140)
    let node20 = createNode(20)
    let node30 = createNode(30)
    let node15 = createNode(15)
    let node25 = createNode(25)
    let node28 = createNode(28)
    root.left = node20
    root.right = node140
    node20.parent = root
    node140.parent = root

    //
    node20.left = node15
    node20.right = node30
    node15.parent = node30.parent = node20

    //
    node30.left = node25
    node25.right = node28
    node25.parent = node30
    node28.parent = node25

    let T = { root }

    TreeDelete(T, node20)
    expect(T.root.left).toBe(node25)
    expect(node25.parent).toBe(T.root)
    expect(node25.left).toBe(node15)

    expect(node30.left).toBe(node28)
    expect(node30.parent).toBe(node25)

    expect(node28.parent).toBe(node30)
})
