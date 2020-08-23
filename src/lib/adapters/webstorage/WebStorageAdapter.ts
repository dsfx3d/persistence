import { Adapter } from '../../../types/adapters'

export class WebStorageAdapter implements Adapter {
  private baseKey: string
  private storage: Storage

  constructor(config: any) {
    this.baseKey = config.key
    this.storage = config.storage
  }

  key(n: number): string {
    return this.storage.key(n)
  }

  getItem<T = any>(key: string, fallback: T): T {
    const store = this.storage.getItem(`${this.baseKey}.${key}`)
    return store ? JSON.parse(store) : fallback
  }

  setItem<T = any>(key: string, value: T): void {
    const json = JSON.stringify(value)
    this.storage.setItem(`${this.baseKey}.${key}`, json)
  }

  removeItem(key: string) {
    this.storage.removeItem(`${this.baseKey}.${key}`)
  }

  clear() {
    this.storage.clear()
  }
}
