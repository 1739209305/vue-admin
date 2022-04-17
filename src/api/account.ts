import { AccountModel, CheckModel, LoginModel } from './model/accountModel'
import service from '@/utils/request'

enum Api {
  ACCOUNT_INFO = '/account/getAccountInfo',
  CHECK_INFO = '/account/check'
}

// 检查是否登录
export const checkLoginApi = (form: LoginModel) =>
  service.request<CheckModel>({
    method: 'get',
    url: Api.CHECK_INFO,
    data: form
  })

// 获取全部的用户信息
export const accountInfoApi = () =>
  service.request<AccountModel>({ method: 'get', url: Api.ACCOUNT_INFO })
