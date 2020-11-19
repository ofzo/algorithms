/**      [2, 3, 4, 6, 7 , 9, 13, 15, 17, 18, 20]
  *                      15
  *                     /
  *                6                   18
  *
  *           3         7            17    20
  *
  *        2     4         13
  *
  *                    9
*/

export type Node<T> = {
    parent: Node<T> | null,
    value: T,
    left: Node<T> | null,
    right: Node<T> | null
}

export const node2: Node<Number> = { parent: null, value: 2, left: null, right: null }
export const node3: Node<Number> = { parent: null, value: 3, left: null, right: null }
export const node4: Node<Number> = { parent: null, value: 4, left: null, right: null }
export const node6: Node<Number> = { parent: null, value: 6, left: null, right: null }
export const node7: Node<Number> = { parent: null, value: 7, left: null, right: null }
export const node9: Node<Number> = { parent: null, value: 9, left: null, right: null }
export const node13: Node<Number> = { parent: null, value: 13, left: null, right: null }
export const node15: Node<Number> = { parent: null, value: 15, left: null, right: null }
export const node17: Node<Number> = { parent: null, value: 17, left: null, right: null }
export const node18: Node<Number> = { parent: null, value: 18, left: null, right: null }
export const node20: Node<Number> = { parent: null, value: 20, left: null, right: null }

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
    node20
}
export const root: Node<Number> = node15

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
