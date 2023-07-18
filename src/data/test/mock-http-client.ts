import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpResonse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResonse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResonse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
