import TreeInclude from "./helper/TreeInclude";
import { nil, Node, Tree } from "./rbtree";


export default function LeftRotate<T>(tree: Tree<T>, node: Node<T>) {

    if (!TreeInclude(tree, node)) {
        throw new Error("node 不在树中")
    }


    if (node.right === nil) {
        return
    }
    let right = node.right as Node<T>

    if (node.parent === nil) {
        if (tree.root === node) {
            //  node 是根节点
            if (node.right !== nil) {
                tree.root = right
                right.parent = nil
            }
        }
    } else {
        let parent = node.parent as Node<T>
        if (parent.left === node) { //node是左节点
            parent.left = right
        } else { //node是右节点
            parent.right = right
        }

        right.parent = parent
    }

    node.right = right.left
    right.left.parent = node

    right.left = node
    node.parent = right

}
