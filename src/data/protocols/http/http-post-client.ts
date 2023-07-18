import { HttpResonse } from './http-response'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResonse<R>>
}
