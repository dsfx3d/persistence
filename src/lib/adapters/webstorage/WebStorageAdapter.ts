import { AsyncAdapter } from '../../../types/adapters'

export class WebStorageAdapter implements AsyncAdapter {
  private baseKey: string
  private storage: Storage

  constructor(config: any) {
    this.baseKey = config.key
    this.storage = config.storage
  }

  async key(n: number): Promise<string> {
    return this.storage.key(n)
  }

  async getItem<T = any>(key: string, fallback: T): Promise<T> {
    const store = this.storage.getItem(`${this.baseKey}.${key}`)
    return store ? JSON.parse(store) : fallback
  }

  async setItem<T = any>(key: string, value: T): Promise<void> {
    const json = JSON.stringify(value)
    this.storage.setItem(`${this.baseKey}.${key}`, json)
  }

  async removeItem(key: string): Promise<void> {
    this.storage.removeItem(`${this.baseKey}.${key}`)
  }

  async clear() {
    this.storage.clear()
  }
}
