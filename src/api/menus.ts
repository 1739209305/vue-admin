import service from '@/utils/request'
import { MenuModel } from './model/menuModel'

enum Api {
  MENUS_LIST_INFO = '/menu/getAll'
}

// 获取全部的菜单列表
export const menusListAPi = () =>
  service.request<MenuModel[]>({
    method: 'get',
    url: Api.MENUS_LIST_INFO
  })
