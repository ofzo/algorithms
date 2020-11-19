import { Node } from "./tree";
import { TreeMaximum } from "./TreeMaximum";

export default function TreePredecessor<T>(node: Node<T>): Node<T> | null {

    if (node.left) {
        return TreeMaximum(node.left);
    }

    var parent = node.parent;
    var current = node;
    while (parent && parent.left === current) {
        current = parent;
        parent = parent.parent;
    }

    return parent;
}
