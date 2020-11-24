import { Node, Tree } from "./tree";
import TreeSuccessor from "./TreeSuccessor";


export default function TreeDelete<T>(tree: Tree<T>, node: Node<T>) {

    var parent = null
    var del_node: Node<T> | null = tree.root
    while (del_node && del_node.value !== node.value) {
        if (del_node.value < node.value) {
            parent = del_node
            del_node = del_node.right
        } else {
            parent = del_node
            del_node = del_node.left
        }
    }
    if (!del_node) {
        return //节点不在树中
    }

    //! 1.
    if (!del_node.left && !del_node.right) {
        if (parent) {
            if (parent.left === del_node) {
                parent.left = null
            } else {
                parent.right = null
            }
        } else {
            // 要删除的是根节点
            tree.root = null
        }
        return
    }
    //! 2.
    if (!del_node.left && del_node.right) { //has right
        if (parent) {
            if (parent.left === del_node) {
                parent.left = del_node.right
                del_node.right.parent = parent
            } else {
                parent.right = del_node.right
                del_node.right.parent = parent
            }
        } else {
            tree.root = del_node.right
        }
        return
    }
    if (!del_node.right && del_node.left) {
        if (parent) {
            if (parent.left === del_node) {
                parent.left = del_node.left
                del_node.left.parent = parent
            } else {
                parent.right = del_node.left
                del_node.left.parent = parent
            }
        } else {
            tree.root = del_node.left
        }
        return
    }

    var Y = TreeSuccessor(del_node)
    if (Y) {
        if (Y === del_node.right) {
            //! 3.1
            Y.left = del_node.left
            if (parent) {
                if (parent.left === del_node) {
                    parent.left = Y
                    Y.parent = parent
                } else {
                    parent.right = Y
                    Y.parent = parent
                }
            } else {
                // 要删除的是根节点
                tree.root = Y
            }
        } else {
            //!3.2
            var Y_r = Y.right
            if (Y.parent) { // true
                Y.parent.left = Y_r // 一定是左节点
                if (Y_r) {
                    Y_r.parent = Y.parent
                }
            }
            Y.right = del_node.right
            Y.left = del_node.left
            if (del_node.left) {
                del_node.left.parent = Y
            }
            if (del_node.right) {
                del_node.right.parent = Y
            }
            if (parent) {
                if (parent.left === del_node) {
                    parent.left = Y
                    Y.parent = parent
                } else {
                    parent.right = Y
                    Y.parent = parent
                }
            } else {
                // 要删除的是根节点
                tree.root = Y
            }
        }
        return
    }
}
