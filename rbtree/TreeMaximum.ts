import { nil, Node, Tree } from "./rbtree";


export function TreeMaximum<T>(tree: Tree<T>): Node<T> | null {

    var current = tree.root;
    while (current && current.right && current.right !== nil) {
        current = current.right as Node<T>;
    }
    return current;
}
