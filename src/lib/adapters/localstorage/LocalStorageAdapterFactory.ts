import { AdapterFactory } from '../../../types/AdapterFactory'
import { LocalStorageAdapter } from './LocalStorageAdapter'

export class LocalStorageAdapterFactory
  implements AdapterFactory<LocalStorageAdapter> {
  private config: any = {}
  setBaseKey(baseKay: string) {
    this.config.baseKey = baseKay
  }

  build(): LocalStorageAdapter {
    return new LocalStorageAdapter(this.config)
  }
}
