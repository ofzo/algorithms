import TreePredecessor from "../TreePredecessor"
import { nodes as ns } from "./test.data"

const nodes = Object.values(ns)

test("index > 0", () => {
    nodes.slice(1).forEach((node, index) => {
        expect(TreePredecessor(node)?.value).toEqual(nodes[index].value)
    })
})
test("index = 0", () => {
    expect(TreePredecessor(nodes[0])).toEqual(null)
})
