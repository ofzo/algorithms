import { InteractiveTreeSearch } from "../InteractiveTreeSearch"
import { RecursionTreeSearch } from "../RecursionTreeSearch"
import { buildTree, nodes as ns } from "./test.data"

const nodes = Object.values(ns)
var tree = buildTree()


it("recursion", () => {
    nodes.forEach(node => {
        expect(RecursionTreeSearch(tree, node.value)?.value).toEqual(node.value)
    })
})
it("interactive", () => {
    nodes.forEach(node => {
        expect(InteractiveTreeSearch(tree, node.value)?.value).toEqual(node.value)
    })
})
