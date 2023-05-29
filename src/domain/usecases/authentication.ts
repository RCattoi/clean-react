import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: string
  password: string
  test: string
}
export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
