/**
  * ! [2, 3, 4, 6, 7 , 9, 13, 15, 17, 18, 20]
  * 15
  * L----6
  *      L----3
  *           L----2
  *           R----4
  *      R----7
  *           R----13
  *                 L----9
  * R----18
  *      L----17
  *      R----20
  *           L----19
  *           R----22
*/

export type Node<T> = {
    parent: Node<T> | null,
    value: T,
    left: Node<T> | null,
    right: Node<T> | null
}

export function createNode<T>(value: T): Node<T> {
    return { parent: null, value, left: null, right: null }
}


export var node2: Node<Number> = createNode(2)
export var node3: Node<Number> = createNode(3)
export var node4: Node<Number> = createNode(4)
export var node6: Node<Number> = createNode(6)
export var node7: Node<Number> = createNode(7)
export var node9: Node<Number> = createNode(9)
export var node13: Node<Number> = createNode(13)
export var node15: Node<Number> = createNode(15)
export var node17: Node<Number> = createNode(17)
export var node18: Node<Number> = createNode(18)
export var node20: Node<Number> = createNode(20)
export var node19: Node<Number> = createNode(19)
export var node22: Node<Number> = createNode(22)

export const nodes = {
    node2,
    node3,
    node4,
    node6,
    node7,
    node9,
    node13,
    node15,
    node17,
    node18,
    node19,
    node20,
    node22
}
export var root: Node<Number> = node15

root.left = node6
root.right = node18
node6.parent = root
node18.parent = root

// 6
node6.left = node3
node6.right = node7
node3.parent = node6
node7.parent = node6

// 18
node18.left = node17
node18.right = node20
node17.parent = node18
node20.parent = node18

// 3
node3.left = node2
node3.right = node4
node2.parent = node3
node4.parent = node3

// 7
node7.right = node13
node13.parent = node7

// 13
node13.left = node9
node9.parent = node13

//20
node20.left = node19
node20.right = node22
node19.parent = node20
node22.parent = node20

export function resetTree() {
    node2 = createNode(2)
    node3 = createNode(3)
    node4 = createNode(4)
    node6 = createNode(6)
    node7 = createNode(7)
    node9 = createNode(9)
    node13 = createNode(13)
    node15 = createNode(15)
    node17 = createNode(17)
    node18 = createNode(18)
    node20 = createNode(20)


    //

    root = node15

    root.left = node6
    root.right = node18
    node6.parent = root
    node18.parent = root

    // 6
    node6.left = node3
    node6.right = node7
    node3.parent = node6
    node7.parent = node6

    // 18
    node18.left = node17
    node18.right = node20
    node17.parent = node18
    node20.parent = node18

    // 3
    node3.left = node2
    node3.right = node4
    node2.parent = node3
    node4.parent = node3

    // 7
    node7.right = node13
    node13.parent = node7

    // 13
    node13.left = node9
    node9.parent = node13

    //20
    node20.left = node19
    node20.right = node22
    node19.parent = node20
    node22.parent = node20
}