import { nil, Node, Tree } from "./rbtree";

// 循环版本
export function InteractiveTreeSearch<T>(tree: Tree<T>, target: T): Node<T> | null {
    var current: Node<T> | null = tree.root;

    while (current && current.value !== target) {

        if (current.value > target) {
            if (current.left === nil) {
                return null
            } else {
                current = current.left as Node<T>;
            }
        } else {
            if (current.right === nil) {
                return null
            } else {
                current = current.right as Node<T>;
            }
        }
    }

    return current;
}
