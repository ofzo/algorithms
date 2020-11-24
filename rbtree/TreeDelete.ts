import TreeInclude from "./helper/TreeInclude";
import { nil, Node, Tree } from "./rbtree";

export default function TreeDelete<T>(tree: Tree<T>, node: Node<T>) {

    if (!TreeInclude(tree, node)) {
        throw new Error("node 不在树中")
    }

    if (node.left === nil && node.right === nil) {
        if (node.parent === nil) {
            tree.root = null
        } else {

        }
    }


}
