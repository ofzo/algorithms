import { TreeMaximum } from "../TreeMaximum"
import { buildTree } from "./test.data"

var tree = buildTree()

it("maximum", () => {
    expect(TreeMaximum(tree)?.value).toEqual(2200)
})
