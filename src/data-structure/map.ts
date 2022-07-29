export class Map<T> {
  private readonly map: { [key: string]: T }

  constructor() {
    this.map = {}
  }

  add(key: string, value: T): void {
    this.map[key] = value
  }

  get(key: string): T {
    return this.map[key]
  }
}
