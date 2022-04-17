<template>
  <div class="menu">
    <el-menu
      class="el-menu-vertical"
      default-active="dashboard"
      background-color="rgb(50, 65, 87)"
      text-color="rgb(215, 221, 233)"
      active-text-color="#409eff"
      unique-opened
      router
    >
      <div v-for="(item, index) in menusList" :key="index">
        <el-menu-item :index="item.path" v-if="item.children.length === 0">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu v-else>
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group v-for="(children, index) in item.children" :key="index">
            <template slot="title">{{ children.title }}</template>
            <el-menu-item :index="children.path">
              <i :class="children.icon"></i>
              {{ children.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import { menusListAPi } from '@/api/menus'
import { ref } from 'vue'
let menusList = ref([])

const initMenusList = async () => {
  const data = await menusListAPi()
  menusList.value = data.result
  console.log(menusList)
}
initMenusList()
</script>

<style lang="scss" scoped>
.menu,
.el-menu-vertical {
  height: 100%;
}
::v-deep .el-menu-item:hover,
::v-deep .el-submenu__title:hover {
  background-color: rgb(38, 52, 69) !important;
}
</style>
