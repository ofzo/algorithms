
export type Node<T> = {
    parent: Node<T> | null,
    value: T,
    left: Node<T> | null,
    right: Node<T> | null
}

export type Tree<T> = {
    root: Node<T> | null
}

export function createNode<T>(value: T): Node<T> {
    return { parent: null, value, left: null, right: null }
}

export function init<T>(): Tree<T> {
    return { root: null }
}
