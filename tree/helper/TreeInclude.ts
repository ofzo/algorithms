
import { Node, Tree } from "../tree";

export default function TreeInclude<T>(tree: Tree<T>, node: Node<T>): boolean {

    var current: Node<T> | null = tree.root;

    while (current && current !== node) {
        if (current.value > node.value) {
            current = current.left
        } else {
            current = current.right
        }
    }
    return !!current;
}
