import { Node, Tree } from "./tree";


export function TreeMinimum<T>(tree: Tree<T>): Node<T> | null {

    var current = tree.root;
    while (current && current.left) {
        current = current.left;
    }
    return current;

}
