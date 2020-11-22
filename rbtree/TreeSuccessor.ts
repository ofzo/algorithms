import { nil, Node } from "./rbtree";
import { TreeMinimum } from "./TreeMinimum";

export default function TreeSuccessor<T>(node: Node<T>): Node<T> | null {

    if (node.right && node.right !== nil) {
        return TreeMinimum({ root: node.right as Node<T> });
    }

    var parent = node.parent;
    var current = node;
    while (parent && parent !== nil && (parent as Node<T>).right === current) {
        current = parent as Node<T>;
        parent = parent.parent as Node<T>;
    }

    return parent === nil ? null : parent as Node<T>;
}
