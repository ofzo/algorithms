import { Node } from "./tree";
import TreeSuccessor from "./TreeSuccessor";


export default function TreeDelete<T>(tree: Node<T> | null, node: Node<T>) {

    var parent = null
    var current: Node<T> | null = tree
    while (current && current.value !== node.value) {
        if (current.value < node.value) {
            parent = current
            current = current.right
        } else {
            parent = current
            current = current.left
        }
    }
    if (!current) {
        return //节点不在树中
    }

    //! 1.
    if (!current.left && !current.right) {
        if (parent) {
            if (parent.left === current) {
                parent.left = null
            } else {
                parent.right = null
            }
        } else {
            // 要删除的是根节点
            tree = null
        }
        return
    }
    //! 2.
    if (!current.left) {
        if (parent) {
            if (parent.left === current) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }
        } else {
            tree = current.right
        }
        return
    }
    if (!current.right) {
        if (parent) {
            if (parent.left === current) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }
        } else {
            tree = current.left
        }
        return
    }

    var Y = TreeSuccessor(current)
    if (Y) {
        if (Y === current.right) {
            //! 3.1
            Y.left = current.left
            if (parent) {
                if (parent.left === current) {
                    parent.left = Y
                } else {
                    parent.right = Y
                }
            } else {
                // 要删除的是根节点
                tree = Y
            }
        } else {
            //!3.2
            var Y_r = Y.right
            if (Y.parent) { // true
                Y.parent.left = Y_r // 一定是左节点
            }
            Y.right = current.right
            Y.left = current.left
            if (parent) {
                if (parent.left === current) {
                    parent.left = Y
                } else {
                    parent.right = Y
                }
            } else {
                // 要删除的是根节点
                tree = Y
            }
        }
        return
    }
}