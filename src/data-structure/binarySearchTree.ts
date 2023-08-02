export type Node<T> = {
  value: T
  left?: Node<T>
  right?: Node<T>
}

export function insert<T>(value: T, node: Node<T>): void {
  if (value < node.value) {
    if (!node.left) {
      node.left = { value }
    } else {
      insert(value, node.left)
    }
  } else {
    if (!node.right) {
      node.right = { value }
    } else {
      insert(value, node.right)
    }
  }
}

export function search<T>(value: T, node?: Node<T>): Node<T> | undefined {
  if (!node || node.value === value) {
    return node
  } else if (value < node.value) {
    return search(value, node.left)
  } else {
    return search(value, node.right)
  }
}

function lift<T>(node: Node<T>, nodeToRemove: Node<T>): Node<T> | undefined {
  if (node.left) {
    node.left = lift(node.left, nodeToRemove)
    return node
  } else {
    nodeToRemove.value = node.value
    return node.right
  }
}

export function remove<T>(value: T, node?: Node<T>): Node<T> | undefined {
  if (!node) {
    return node
  } else {
    if (value < node.value) {
      node.left = remove(value, node.left)
      return node
    } else if (value > node.value) {
      node.right = remove(value, node.right)
      return node
    } else if (value === node.value) {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      } else {
        node.right = lift(node.right, node)
        return node
      }
    }
  }
}
