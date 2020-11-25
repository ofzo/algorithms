import { TreeMinimum } from "../TreeMinimum"
import { buildTree } from "./test.data"

var tree = buildTree()

it("maximum", () => {
    expect(TreeMinimum(tree)?.value).toEqual(200)
})
