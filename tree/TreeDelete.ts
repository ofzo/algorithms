import TreeInclude from "./helper/TreeInclude";
import { TreeLink } from "./helper/TreeLink";
import TreeTransplant from "./helper/TreeTransplant";
import { Node, Tree } from "./tree";
import { TreeMinimum } from "./TreeMinimum";


export default function TreeDelete<T>(tree: Tree<T>, node: Node<T>) {

    if (!TreeInclude(tree, node)) {
        // throw new Error("node 不在树中")
        return
    }

    if (!node.left) {
        TreeTransplant(tree, node, node.right)
    } else if (!node.right) {
        TreeTransplant(tree, node, node.left)
    } else {
        let min = TreeMinimum({ root: node.right }) as Node<T>
        if (min.parent !== node) {
            TreeTransplant(tree, min, min.right)
            TreeLink(min, undefined, node.right)
        }
        TreeTransplant(tree, node, min)
        TreeLink(min, node.left, undefined)
    }
}
