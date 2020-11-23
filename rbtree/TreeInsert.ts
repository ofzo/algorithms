import LeftRotate from "./LeftRotate";
import { nil, Node, Tree } from "./rbtree";
import RightRotate from "./RightRotate";

function fixup<T>(tree: Tree<T>, node: Node<T>) {
    type N = Node<T>;
    var current = node

    /**
     * 进入循环的条件:
     * 1. node 不会是根节点, 根节点无需fixup
     * 2. node 节点不会是第二层节点, 因为其父节点是红色, 红色节点不会是根节点
     */
    while (current.parent.color === "RED") { // 当前节点的父节点是 红色
        if (current.parent.parent !== nil) { // 根据进入循环条件的2, 可知祖父节点一定存在
            current.parent.parent = current.parent.parent as N;
            if (current.parent === current.parent.parent.left) {  //! 父节点是左节点
                let uncle = current.parent.parent.right
                let parent = current.parent
                if (uncle.color === "RED") { // 当前节点的叔节点也是红色
                    /** case 1
                     *                                  G(BLACK)
                     *                  l parent(RED)            r uncle(RED)
                     *? current(RED)
                     *
                     *! or
                     *
                     *                        G(BLACK)
                     *          l parent(RED)                         r uncle(RED)
                     *?                current(RED)
                     */
                    parent.color = "BLACK"
                    uncle.color = "BLACK"
                    parent.parent.color = "RED"
                    current = current.parent.parent;
                } else {
                    if (current === current.parent.right) {  // 当前节点的叔节点也是黑色
                        /** case 2
                         *                        G(BLACK)
                         *          l parent(RED)                 r uncle(BLACK)
                         *?                  current(RED)
                         */
                        current = current.parent // 节点上移一层
                        LeftRotate(tree, current) // 节点下移一层
                    }
                    current.parent.parent = current.parent.parent as N;
                    /** case 3
                    *                               G(BLACK)
                    *                 l parent(RED)             r uncle(BLACK)
                    *?current(RED)
                    */
                    current.parent.color = "BLACK"
                    current.parent.parent.color = "RED"
                    RightRotate(tree, current.parent.parent)
                }
            } else {
                let uncle = current.parent.parent.left
                let parent = current.parent
                if (uncle.color === "RED") { // 当前节点的叔节点也是红色
                    /** case 1
                     *                 G(BLACK)
                     * l uncle(RED)                   r parent(RED)
                     *?                     current(RED)
                     *
                     *! or
                     *
                     *                  G(BLACK)
                     * l uncle(RED)                   r parent(RED)
                     *?                     current(RED)
                     */
                    parent.color = "BLACK"
                    uncle.color = "BLACK"
                    parent.parent.color = "RED"
                    current = current.parent.parent;
                } else { //! 父节点是右节点
                    if (current === current.parent.left) {
                        /** case 2
                         *                G(BLACK)
                         *  l uncle(BLACK)            r parent(RED)
                         *?                     current(RED)
                         */
                        current = current.parent // 节点上移一层
                        RightRotate(tree, current) // 节点下移一层
                    }
                    current.parent.parent = current.parent.parent as N;
                    /** case 3
                     *                G(BLACK)
                     * l uncle(BLACK)            r parent(RED)
                     *?                                      current(RED)
                     */
                    current.parent.color = "BLACK"
                    current.parent.parent.color = "RED"
                    LeftRotate(tree, current.parent.parent)
                }
            }
        }
    }

    (tree.root as N).color = "BLACK"
}


export default function TreeInsert<T>(tree: Tree<T>, node: Node<T>) {
    type N = Node<T>;

    var current: N | null = tree.root
    if (!current) {
        node.color = "BLACK"
        tree.root = node
        return
    }

    while (current) {
        if (current.value > node.value) {
            if (current.left !== nil) {
                current = current.left as N
            } else {
                break
            }
        } else {
            if (current.right !== nil) {
                current = current.right as N
            } else {
                break
            }
        }
    }

    var parent = current

    if (parent.value > node.value) {
        parent.left = node
    } else {
        parent.right = node
    }
    node.parent = parent
    node.color = "RED"
    node.left = nil
    node.right = nil

    fixup(tree, node);
}
