import { AsyncAdapter, WebStorageConfig } from '../../../types/adapters'

export class WebStorageAdapter implements AsyncAdapter {
  private baseKey: string
  private storage: Storage

  private static _LOCAL: symbol = Symbol('local')
  private static _SESSION: symbol = Symbol('session')

  constructor(config: WebStorageConfig) {
    this._validateConfig(config)
    this._parseConfig(config)
  }

  private _validateConfig(config: WebStorageConfig) {
    const validStorage =
      config.storage === WebStorageAdapter.LOCAL ||
      config.storage === WebStorageAdapter.LOCAL

    if (!validStorage) {
      throw new Error(
        '[persistence] config property "storage" must be one of "local" or "session"'
      )
    }
  }

  private _parseConfig(config: WebStorageConfig) {
    this.baseKey = config.key
    this.storage =
      config.storage === WebStorageAdapter.LOCAL ? localStorage : sessionStorage
  }

  static get LOCAL(): symbol {
    return this._LOCAL
  }

  static get SESSION(): symbol {
    return this._SESSION
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
