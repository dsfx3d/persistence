export interface StoreFactory<T> {
  addAdapter<A>(adapter: A): T
  build<A, C>(config: C): A
}
