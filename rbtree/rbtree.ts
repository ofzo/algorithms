export type RED = "RED"
export type BLACK = "BLACK"

type NIL = {
    parent: null,
    color: "BLACK"
}
export type Node<T> = {

    left: Node<T> | NIL,
    right: Node<T> | NIL,
    value: T,
    parent: Node<T> | NIL

    color: RED | BLACK
}

export type Tree<T> = {
    root: Node<T> | null
}

export const nil: NIL = {
    parent: null,
    color: "BLACK"
}

export function createNode<T>(value: T, color: RED | BLACK): Node<T> {
    return {
        left: nil,
        right: nil,
        value,
        parent: nil,
        color
    }
}

export default function init<T>(value?: T): Tree<T> {
    if (value) {
        var root = createNode(value, "RED")
        root.parent = nil
        return { root }
    }
    return { root: null }
}
