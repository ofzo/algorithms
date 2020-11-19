import { Node } from "./tree";


export function TreeMinimum<T>(node: Node<T> | null): Node<T> | null {

    var current = node;
    while (current && current.left) {
        current = current.left;
    }
    return current;

}
