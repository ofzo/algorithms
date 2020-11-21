import { Node, Tree } from "./tree";
import { TreeMinimum } from "./TreeMinimum";

export default function TreeSuccessor<T>(tree: Tree<T>): Node<T> | null {

    var node: Node<T> | null = tree.root

    if (!node) {
        return null
    }

    if (node.right) {
        return TreeMinimum({ root: node.right });
    }

    var parent = node.parent;
    var current = node;
    while (parent && parent.right === current) {
        current = parent;
        parent = parent.parent;
    }

    return parent;
}
