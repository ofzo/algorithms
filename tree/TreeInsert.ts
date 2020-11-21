import { Node, Tree } from "./tree";


export default function TreeInsert<T>(tree: Tree<T>, node: Node<T>) {
    var parent = null
    var current: Node<T> | null = tree.root

    while (current) {
        if (current.value > node.value) {
            parent = current
            current = current.left
        } else {
            parent = current
            current = current.right
        }
    }
    if (!parent) {
        tree.root = node
        return
    }
    if (parent.value > node.value) {
        node.parent = parent
        parent.left = node
    } else {
        node.parent = parent
        parent.right = node
    }
}