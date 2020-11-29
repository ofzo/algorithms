import TreeInclude from "./helper/TreeInclude";
import { TreeLink } from "./helper/TreeLink";
import TreeTransplant from "./helper/TreeTransplant";
import LeftRotate from "./LeftRotate";
import { nil, Node, Tree } from "./rbtree";
import RightRotate from "./RightRotate";
import { TreeMinimum } from "./TreeMinimum";

export default function TreeDelete<T>(tree: Tree<T>, node: Node<T>) {

    if (!TreeInclude(tree, node)) {
        throw new Error("node 不在树中")
    }

    type N = Node<T>;
    var originColor = node.color

    var fixNode = null

    if (node.left === nil) {
        fixNode = node.right
        TreeTransplant(tree, node, node.right)
    } else if (node.right === nil) {
        fixNode = node.left
        TreeTransplant(tree, node, node.left)
    } else {
        let min = TreeMinimum({ root: node.right as N }) as N
        originColor = min.color
        fixNode = min.right
        if (min.parent !== node) {
            TreeTransplant(tree, min, min.right)
            TreeLink(min, null, node.right)
        }
        TreeTransplant(tree, node, min)
        TreeLink(min, node.left, null)
        min.color = node.color
    }

    if (originColor === "BLACK" && fixNode !== nil) {
        fixup(tree, fixNode as N)
    }
}

function fixup<T>(tree: Tree<T>, node: Node<T>) {
    type N = Node<T>;
    while (node !== tree.root && node.color === "BLACK") {
        node.parent = node.parent as N
        if (node === node.parent.left) {
            var brother = node.parent.right as N
            if (brother.color === "RED") {
                /**
                 *                 P(R/B)
                 *     node(B)              brother(R)
                 *                   b-left(B)        b-right(B)
                 *
                 * --- 左旋
                 *
                 *                           brother(R)
                 *              P(R/B)                    b-right(B)
                 *     node(B)         b-left(B)
                 */
                brother.color = "BLACK"
                node.parent.color = "RED"
                LeftRotate(tree, node.parent)
                brother = node.parent.right as N
            }
            /**
             *                 P(R/B)
             *     node(B)              brother(B)
             *                      (B)         (B)
             */
            if (brother.left.color === "BLACK" && brother.right.color === "BLACK") {
                brother.color = "RED"
                node = node.parent
            } else {
                if (brother.right.color === "BLACK") {
                    /**
                     *                  P(R/B)
                     * node(B)                      brother(B)
                     *                      b-left(R)         b-right(B)
                     *
                     * --- 右旋
                     *
                     *                  P(R/B)
                     * node(B)                  b-left(B)
                     *                                  brother(R)
                     *                                              b-right(B)
                     *
                     */
                    brother.left.color = "BLACK"
                    brother.color = "RED"
                    RightRotate(tree, brother)
                    brother = (node.parent as N).right as N;
                }
                /**
                 *              P(R/B)
                 * node(B)                  brother(B)
                 *                      (R/B)          (R)
                 */
                brother.color = node.parent.color
                node.parent.color = "BLACK"
                brother.right.color = "BLACK"
                LeftRotate(tree, node.parent)
                node = tree.root as N;  // 退出循环
            }
        } else {
            var brother = node.parent.left as N;
            if (brother.color === "RED") {
                brother.color = "BLACK"
                node.parent.color = "RED"
                RightRotate(tree, node.parent)
                brother = node.parent.left as N;
            }

            if (brother.left.color === "BLACK" && brother.right.color === "BLACK") {
                brother.color = "RED"
                node = node.parent
            } else {
                if (brother.left.color === "BLACK") {
                    brother.right.color = "BLACK"
                    brother.color = "RED"
                    LeftRotate(tree, brother)
                    brother = (node.parent as N).left as N;
                }
                brother.color = node.parent.color
                brother.parent.color = "BLACK"
                brother.left.color = "BLACK"
                RightRotate(tree, node.parent)
                node = tree.root as N;
            }
        }
    }
    node.color = "BLACK"
}
