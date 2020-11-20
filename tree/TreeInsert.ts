import { Node } from "./tree";


export default function TreeInsert<T>(tree: Node<T>, node: Node<T>) {
    var parent = null
    var current: Node<T> | null = tree

    while (current) {
        if (current.value > node.value) {
            parent = current
            current = current.left
        } else {
            parent = current
            current = current.right
        }
    }
    node.parent = parent
    if (!parent) {
        tree = node
    } else if (parent.value > node.value) {
        parent.left = node
    } else {
        parent.right = node
    }
}