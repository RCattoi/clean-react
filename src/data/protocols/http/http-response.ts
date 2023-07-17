export enum HttpStatusCode{
  unathrozied = 401,
  noContent = 204,
}
export type HttpResonse = {
  statusCode: HttpStatusCode
  body?: any
}
