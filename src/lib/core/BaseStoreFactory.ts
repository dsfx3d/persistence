import { StoreFactory } from '../../types/persistance'

export class BaseStoreFactory implements StoreFactory<any> {
  addAdapter<A>(adapter: A): unknown {
    throw new Error('Method not implemented.')
  }
  build<A, C>(config: C): A {
    throw new Error('Method not implemented.')
  }
}
