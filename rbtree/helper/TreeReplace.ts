import { nil, Node, Tree } from "../rbtree";
import TreeInclude from "./TreeInclude";
import { TreeLink } from "./TreeLink";

/**
 * 用node替换origin
 */
export default function TreeReplace<T>(tree: Tree<T>, origin: Node<T>, node: Node<T> | typeof nil) {


    if (TreeInclude(tree, origin)) {
        throw new Error("node 不在树中")
    }

    type N = Node<T>;

    if (tree.root === origin) {
        if (node === nil) {
            tree.root = null
        } else {
            tree.root = node as N
        }
        return
    }

    origin.parent = origin.parent as Node<T>
    if (origin === origin.parent.left) {
        TreeLink(origin.parent, node, origin.parent.right as N)
    } else {
        TreeLink(origin.parent, origin.parent.left as N, node)
    }
}
