export class Stack<T> {
  private readonly item: T[] = []

  count(): number {
    return this.item.length
  }

  push(item: T): void {
    this.item.push(item)
  }

  pop(): T | undefined {
    return this.item.pop()
  }

  peek(): T | undefined {
    return this.item[this.item.length - 1]
  }
}
