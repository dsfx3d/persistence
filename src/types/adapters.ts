export interface Adapter {
  key(n: number): string
  getItem<T = any>(key: string, fallback: T): T
  setItem<T = any>(key: string, value: T): void
  removeItem(key: string): void
  clear(): void
}

export interface AdapterFactory<T = any> {
  build(): T
}
