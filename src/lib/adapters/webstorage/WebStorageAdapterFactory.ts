import { AdapterFactory } from '../../../types/adapters'
import { WebStorageAdapter } from './WebStorageAdapter'

export class WebStorageAdapterFactory
  implements AdapterFactory<WebStorageAdapter> {
  private config: any = {}
  setBaseKey(baseKay: string) {
    this.config.baseKey = baseKay
  }

  build() {
    return new WebStorageAdapter(this.config)
  }
}
