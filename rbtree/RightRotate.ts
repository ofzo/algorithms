import TreeInclude from "./helper/TreeInclude";
import { nil, Node, Tree } from "./rbtree";


export default function RightRotate<T>(tree: Tree<T>, node: Node<T>) {


    if (!TreeInclude(tree, node)) {
        throw new Error("node 不在树中")
    }


    if (node.left === nil) {
        return
    }
    let left = node.left as Node<T> // 3
    let left_right = left.right
    let parent = node.parent  // 8

    if (node.parent === nil) {
        if (tree.root === node) {
            //  node 是根节点
            if (node.left !== nil) {
                tree.root = left
                left.parent = nil
            }
        }
    } else {
        parent = node.parent as Node<T>

        if (parent.left === node) { //node是左节点
            parent.left = left
        } else { //node是右节点
            parent.right = left
        }
        left.parent = parent //3.parent = 8
    }

    node.parent = left //7.parent = 3
    left.right = node //3.right = 7

    left_right.parent = node //4.parent = 7
    node.left = left_right //7.left = 3.right

}
