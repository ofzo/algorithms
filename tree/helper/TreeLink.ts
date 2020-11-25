import { Node } from "../tree";

/**
 * 连接一个节点的两个子节点
 * @param parent
 * @param left
 * @param right
 */
export function TreeLink<T>(parent: Node<T>, left: Node<T> | null | undefined, right: Node<T> | null | undefined) {
    if (typeof left !== "undefined") {
        parent.left = left;
        if (left) {
            left.parent = parent;
        }
    }
    if (typeof right !== "undefined") {
        parent.right = right;
        if (right) {
            right.parent = parent;
        }
    }
}
