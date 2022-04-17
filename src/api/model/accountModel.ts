export interface AccountModel {
  userid: string
  userName: string
  role: string
  sex: string
  phone: string
  address: string
}

export interface LoginModel {
  userName: string
  password: string
}

export interface CheckModel {
  type: string
}
