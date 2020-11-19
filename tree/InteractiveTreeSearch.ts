import { Node } from "./tree";

// 循环版本
export function InteractiveTreeSearch<T>(node: Node<T> | null, target: T): Node<T> | null {
    var current = node;
    while (current && current.value !== target) {

        if (current.value > target) {
            current = current.left;
        } else {
            current = current.right;
        }

    }
    return current;
}
