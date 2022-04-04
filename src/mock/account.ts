import { RoleEnum, SexEnum } from '@/enums/userEnum'
import { resultSuccess } from './utils'

const userInfo = {
  userid: '00000001',
  userName: 'xxx',
  role: RoleEnum.SUPER,
  sex: SexEnum.MALE,
  phone: '15078670978',
  address: 'xxxxx'
}

export default [
  {
    url: '/account/getAccountInfo',
    method: 'get',
    response: () => {
      return resultSuccess(userInfo)
    }
  }
]
