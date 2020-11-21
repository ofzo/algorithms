import { InteractiveTreeSearch } from "./InteractiveTreeSearch";
import { nil, Node, Tree } from "./rbtree";


export default function RightRotate<T>(tree: Tree<T>, node: Node<T>) {

    let has = InteractiveTreeSearch(tree, node.value)
    if (!has) {
        throw new Error("node 不在树中")
    }

    if (!tree.root) return

    if (node.left === nil) {
        return
    }
    let left = node.left as Node<T> // 3

    if (node.parent === nil) {
        if (tree.root === node) {
            //  node 是根节点
            if (node.left !== nil) {
                tree.root = left
                left.parent = tree.root
            }
        }
        return
    }

    let parent = node.parent as Node<T> // 8
    let left_right = left.right  //4
    if (parent.left === node) { //node是左节点
        parent.left = left
    } else { //node是右节点
        parent.right = left
    }

    left.parent = parent //3.parent = 8

    node.left = left.right //7.left = 3.right
    left.right.parent = node //4.parent = 7

    left.right = node //3.right = 7
    node.parent = left //7.parent = 3

}