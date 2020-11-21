import { Node, Tree } from "./tree";

// 循环版本
export function InteractiveTreeSearch<T>(tree: Tree<T>, target: T): Node<T> | null {
    var current: Node<T> | null = tree.root;
    while (current && current.value !== target) {

        if (current.value > target) {
            current = current.left;
        } else {
            current = current.right;
        }

    }
    return current;
}
