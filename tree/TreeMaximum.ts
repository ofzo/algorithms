import { Node } from "./tree";


export function TreeMaximum<T>(node: Node<T> | null): Node<T> | null {

    var current = node;
    while (current && current.right) {
        current = current.right;
    }
    return current;

}
