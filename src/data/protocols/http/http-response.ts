export enum HttpStatusCode{
  serverError = 500,
  notFound = 404,
  unauthrozied = 401,
  badRequest = 400,
  noContent = 204,
  ok =200,

}
export type HttpResonse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
