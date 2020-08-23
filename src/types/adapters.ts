export interface AsyncAdapter {
  key(n: number): Promise<string>
  getItem<T = any>(key: string, fallback: T): Promise<T>
  setItem<T = any>(key: string, value: T): Promise<void>
  removeItem(key: string): Promise<void>
  clear(): Promise<void>
}

export interface AdapterFactory<T = any> {
  build(): T
}
