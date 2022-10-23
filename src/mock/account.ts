import { RoleEnum, SexEnum } from '@/enums/userEnum'
import { resultSuccess, resultError } from './utils'
import Mock from 'mockjs'

// const checkInfoSuccess = {
//   type: LoginResultEnum.SUCCESS
// }

// const checkInfoFailed = {
//   type: LoginResultEnum.FAILED
// }

const userInfo = {
  userid: '00000001',
  userName: 'xxx',
  role: RoleEnum.SUPER,
  sex: SexEnum.MALE,
  phone: '@cname',
  address: 'xxxxx'
}

export default [
  {
    url: '/account/check',
    method: 'post',
    response: (data) => {
      const reqData = JSON.parse(data.body)
      if (reqData.userName === 'xin.yao' && reqData.password === '123456') {
        return resultSuccess(Mock.mock(userInfo))
      } else if (
        reqData.userName === 'visitor' &&
        reqData.password === '123456'
      ) {
        userInfo.role = RoleEnum.VISITOR
        return resultSuccess(Mock.mock(userInfo))
      } else {
        return resultError(Mock.mock(userInfo))
      }
    }
  }
  // {
  //   url: '/account/getAccountInfo',
  //   method: 'get',
  //   response: (res) => {
  //     return resultSuccess(Mock.mock(userInfo))
  //   }
  // }
]
