import { Node } from "./tree";

// 递归版本, 符合尾递归优化, 通常一些编译器会将递归版本优化为循环版本
export function RecursionTreeSearch<T>(node: Node<T> | null, target: T): Node<T> | null {

    if (node === null || target === node.value) {
        return node;
    }
    if (node.value > target) {

        return RecursionTreeSearch(node.left, target);

    } else {

        return RecursionTreeSearch(node.right, target);

    }

}
