import { Node, Tree } from "./tree";
import { TreeMaximum } from "./TreeMaximum";

export default function TreePredecessor<T>(tree: Tree<T>): Node<T> | null {
    var node: Node<T> | null = tree.root

    if (!node) {
        return null
    }

    if (node.left) {
        return TreeMaximum({ root: node.left });
    }

    var parent = node.parent;
    var current = node;
    while (parent && parent.left === current) {
        current = parent;
        parent = parent.parent;
    }

    return parent;
}
