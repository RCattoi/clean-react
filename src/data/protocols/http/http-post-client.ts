import { HttpResonse } from './http-response'

export type HttpPostParams = {
  url: string
  body: object
}

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<HttpResonse>
}
