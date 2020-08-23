import { AsyncAdapter } from '../../types/adapters'

export class BaseAdapter<T> implements AsyncAdapter {
  constructor(config: T) {
    /* Do Nothing */
  }

  key(n: number): Promise<string> {
    throw new Error('Method not implemented.')
  }
  getItem<R = any>(key: string, fallback: R): Promise<R> {
    throw new Error('Method not implemented.')
  }
  setItem<R = any>(key: string, value: R): Promise<void> {
    throw new Error('Method not implemented.')
  }
  removeItem(key: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  clear(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
