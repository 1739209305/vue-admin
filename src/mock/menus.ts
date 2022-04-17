import Mock from 'mockjs'
import { MenuModel } from '@/api/model/menuModel'
import { resultSuccess } from './utils'

const MenusList: MenuModel[] = [
  {
    icon: 'el-icon-s-home',
    title: '首页',
    path: 'dashboard',
    children: []
  },
  {
    icon: 'el-icon-files',
    title: '文档',
    path: 'file',
    children: [
      {
        icon: 'el-icon-files',
        title: '22',
        path: '333',
        children: []
      },
      {
        icon: 'el-icon-files',
        title: '32',
        path: '888',
        children: []
      }
    ]
  }
]

export default [
  {
    url: '/menu/getAll',
    method: 'get',
    response: (data) => {
      //   const reqData = JSON.parse(data.body)
      return resultSuccess(Mock.mock(MenusList))
    }
  }
]
