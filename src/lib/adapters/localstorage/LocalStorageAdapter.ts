import { Adapter } from '../../../types/Adapter'

export class LocalStorageAdapter implements Adapter {
  private baseKey: string

  constructor(config: any) {
    this.baseKey = config.baseKey
  }

  key(n: number): string {
    return localStorage.key(n)
  }

  getItem<T = any>(key: string, fallback: T): T {
    const store = localStorage.getItem(`${this.baseKey}.${key}`)
    return store ? JSON.parse(store) : fallback
  }

  setItem<T = any>(key: string, value: T): void {
    const json = JSON.stringify(value)
    localStorage.setItem(`${this.baseKey}.${key}`, json)
  }

  removeItem(key: string) {
    localStorage.removeItem(`${this.baseKey}.${key}`)
  }

  clear() {
    localStorage.clear()
  }
}
