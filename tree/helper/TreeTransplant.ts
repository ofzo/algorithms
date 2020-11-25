import { Node, Tree } from "../tree";
import TreeInclude from "./TreeInclude";
import { TreeLink } from "./TreeLink";

/**
 * 用node替换origin
 */
export default function TreeTransplant<T>(tree: Tree<T>, origin: Node<T>, node: Node<T> | null) {


    if (!TreeInclude(tree, origin)) {
        throw new Error("node 不在树中")
    }

    type N = Node<T>;

    if (tree.root === origin) {
        tree.root = node
        return
    }

    origin.parent = origin.parent as N
    if (origin === origin.parent.left) {
        TreeLink(origin.parent, node, null)
    } else {
        TreeLink(origin.parent, null, node)
    }
}
