import { BaseStoreFactory } from './core/BaseStoreFactory'
import { StoreFactory } from '../types/persistance'

export class Persistence extends BaseStoreFactory
  implements StoreFactory<Persistence> {
  private config: any

  addAdapter<A>(adapter: A): Persistence {
    this.config.Adapter = adapter
    return this
  }

  build<A, C>(config: C): A {
    return new this.config.Adapter(config)
  }
}
