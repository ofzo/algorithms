import { Node, Tree } from "./tree";


export function TreeMaximum<T>(tree: Tree<T>): Node<T> | null {

    var current = tree.root;
    while (current && current.right) {
        current = current.right;
    }
    return current;

}
