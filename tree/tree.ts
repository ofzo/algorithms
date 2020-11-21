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


export var node200: Node<Number> = createNode(200)
export var node300: Node<Number> = createNode(300)
export var node400: Node<Number> = createNode(400)
export var node600: Node<Number> = createNode(600)
export var node700: Node<Number> = createNode(700)
export var node900: Node<Number> = createNode(900)
export var node1300: Node<Number> = createNode(1300)
export var node1500: Node<Number> = createNode(1500)
export var node1700: Node<Number> = createNode(1700)
export var node1750: Node<Number> = createNode(1750)
export var node1800: Node<Number> = createNode(1800)
export var node1900: Node<Number> = createNode(1900)
export var node1950: Node<Number> = createNode(1950)
export var node2000: Node<Number> = createNode(2000)
export var node2050: Node<Number> = createNode(2050)
export var node2100: Node<Number> = createNode(2100)
export var node2200: Node<Number> = createNode(2200)

export const nodes = {
    node200,
    node300,
    node400,
    node600,
    node700,
    node900,
    node1300,
    node1500,
    node1700,
    node1750,
    node1800,
    node1900,
    node1950,
    node2000,
    node2050,
    node2100,
    node2200
}
export var root: Node<Number> = node1500

root.left = node600
root.right = node1800
node600.parent = root
node1800.parent = root

// 6
node600.left = node300
node600.right = node700
node300.parent = node600
node700.parent = node600

//17
node1700.right = node1750
node1750.parent = node1700

// 18
node1800.left = node1700
node1800.right = node2000
node1700.parent = node1800
node2000.parent = node1800

// 3
node300.left = node200
node300.right = node400
node200.parent = node300
node400.parent = node300

// 7
node700.right = node1300
node1300.parent = node700

// 13
node1300.left = node900
node900.parent = node1300

//19
node1900.right = node1950
node1950.parent = node1900

//20
node2000.left = node1900
node2000.right = node2200
node1900.parent = node2000
node2200.parent = node2000

//21
node2100.left = node2050
node2100.parent = node2200
node2050.parent = node2100

//22
node2200.left = node2100
node2100.parent = node2200

export function resetTree() {
    node200 = createNode(200)
    node300 = createNode(300)
    node400 = createNode(400)
    node600 = createNode(600)
    node700 = createNode(700)
    node900 = createNode(900)
    node1300 = createNode(1300)
    node1500 = createNode(1500)
    node1700 = createNode(1700)
    node1750 = createNode(1750)
    node1800 = createNode(1800)
    node1900 = createNode(1900)
    node1950 = createNode(1950)
    node2000 = createNode(2000)
    node2050 = createNode(2050)
    node2100 = createNode(2100)
    node2200 = createNode(2200)


    //

    root = node1500

    root.left = node600
    root.right = node1800
    node600.parent = root
    node1800.parent = root

    // 6
    node600.left = node300
    node600.right = node700
    node300.parent = node600
    node700.parent = node600

    // 18
    node1800.left = node1700
    node1800.right = node2000
    node1700.parent = node1800
    node2000.parent = node1800

    // 3
    node300.left = node200
    node300.right = node400
    node200.parent = node300
    node400.parent = node300

    // 7
    node700.right = node1300
    node1300.parent = node700

    // 13
    node1300.left = node900
    node900.parent = node1300

    //17
    node1700.right = node1750
    node1750.parent = node1700

    //19
    node1900.right = node1950
    node1950.parent = node1900

    //20
    node2000.left = node1900
    node2000.right = node2200
    node1900.parent = node2000
    node2200.parent = node2000

    //21
    node2100.left = node2050
    node2100.parent = node2200
    node2050.parent = node2100

    //22
    node2200.left = node2100
    node2100.parent = node2200
}