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
