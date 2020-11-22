import { nil, Node } from "./rbtree";
import { TreeMaximum } from "./TreeMaximum";

export default function TreePredecessor<T>(node: Node<T>): Node<T> | null {

    if (node.left && node.left !== nil) {
        return TreeMaximum({ root: node.left as Node<T> });
    }

    var parent = node.parent;
    var current = node;
    while (parent && parent !== nil && (parent as Node<T>).left === current) {
        current = parent as Node<T>;
        parent = parent.parent as Node<T>;
    }

    return parent === nil ? null : parent as Node<T>;
}
