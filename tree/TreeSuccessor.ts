import { Node } from "./tree";
import { TreeMinimum } from "./TreeMinimum";

export default function TreeSuccessor<T>(node: Node<T>): Node<T> | null {

    if (node.right) {
        return TreeMinimum(node.right);
    }

    var parent = node.parent;
    var current = node;
    while (parent && parent.right === current) {
        current = parent;
        parent = parent.parent;
    }

    return parent;
}
