import { nil, Node, Tree } from "./rbtree";


export function TreeMinimum<T>(tree: Tree<T>): Node<T> | null {

    var current = tree.root;
    while (current && current.left && current.left !== nil) {
        current = current.left as Node<T>;
    }
    return current;

}
