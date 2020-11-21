import { Node, Tree } from "./tree";

// 递归版本, 符合尾递归优化, 通常一些编译器会将递归版本优化为循环版本
export function RecursionTreeSearch<T>(tree: Tree<T>, target: T): Node<T> | null {
    var node: Node<T> | null = tree.root;

    if (node === null || target === node.value) {
        return node;
    }
    if (node.value > target) {

        return RecursionTreeSearch({ root: node.left }, target);

    } else {

        return RecursionTreeSearch({ root: node.right }, target);

    }

}
