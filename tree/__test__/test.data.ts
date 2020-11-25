import { TreeLink } from "../helper/TreeLink"
import { createNode, init, Node } from "../tree"


var node200: Node<Number> = createNode(200)
var node300: Node<Number> = createNode(300)
var node400: Node<Number> = createNode(400)
var node600: Node<Number> = createNode(600)
var node700: Node<Number> = createNode(700)
var node900: Node<Number> = createNode(900)
var node1300: Node<Number> = createNode(1300)
var node1500: Node<Number> = createNode(1500)
var node1700: Node<Number> = createNode(1700)
var node1750: Node<Number> = createNode(1750)
var node1800: Node<Number> = createNode(1800)
var node1900: Node<Number> = createNode(1900)
var node1950: Node<Number> = createNode(1950)
var node2000: Node<Number> = createNode(2000)
var node2050: Node<Number> = createNode(2050)
var node2100: Node<Number> = createNode(2100)
var node2200: Node<Number> = createNode(2200)

export var nodes = {
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
export function buildTree() {

    var tree = init()

    TreeLink(node1500, node600, node1800)
    TreeLink(node600, node300, node700)
    TreeLink(node1800, node1700, node2000)
    TreeLink(node1700, null, node1750)
    TreeLink(node300, node200, node400)
    TreeLink(node700, null, node1300)
    TreeLink(node1300, node900, null)
    TreeLink(node2000, node1900, node2200)
    TreeLink(node1900, null, node1950)
    TreeLink(node2200, node2100, null)
    TreeLink(node2100, node2050, null)

    tree.root = node1500

    return tree
}
buildTree()
