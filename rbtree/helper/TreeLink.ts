import { nil, Node } from "../rbtree";

/**
 * 连接一个节点的两个子节点
 * @param parent
 * @param left
 * @param right
 */
export function TreeLink<T>(parent: Node<T>, left: Node<T> | typeof nil | null, right: Node<T> | typeof nil | null) {
    if (left) {
        parent.left = left;
        left.parent = parent;
    } else {
        parent.left = nil;
    }
    if (right) {
        parent.right = right;
        right.parent = parent;
    } else {
        parent.right = nil;
    }
}
