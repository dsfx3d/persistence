export interface AdapterFactory<T = any> {
  build(): T
}
