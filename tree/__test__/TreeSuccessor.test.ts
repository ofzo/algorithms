import TreeSuccessor from "../TreeSuccessor"
import { nodes as ns } from "./test.data"

const nodes = Object.values(ns)


test("index > 0", () => {
    nodes.slice(0, -1).forEach((node, index) => {
        expect(TreeSuccessor(node)).toEqual(nodes[index + 1])
    })
})
test("index = 0", () => {
    expect(TreeSuccessor(nodes[nodes.length - 1])).toEqual(null)
})
