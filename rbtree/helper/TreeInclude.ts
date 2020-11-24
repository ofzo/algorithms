
import { nil, Node, Tree } from "../rbtree";

export default function TreeInclude<T>(tree: Tree<T>, node: Node<T>): boolean {

    var current: Node<T> | null = tree.root;

    while (current && current !== node) {
        if (current.value > node.value) {
            if (current.left === nil) {
                return false
            } else {
                current = current.left as Node<T>;
            }
        } else {
            if (current.right === nil) {
                return false
            } else {
                current = current.right as Node<T>;
            }
        }
    }

    return !!current;
}
