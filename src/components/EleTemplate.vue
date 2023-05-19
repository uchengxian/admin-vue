<template>
  <div class="container">
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0" >{{ home }}</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" >{{ login }}</el-menu-item>
    <el-menu-item index="2">{{ regis }}</el-menu-item>
  </el-menu>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import {ref} from 'vue'
const login = ref("登录")
const home = ref("首页")
const regis = ref("注册")

const router = useRouter();

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key)
  console.log(keyPath)
  if (key==="0")
  {
    router.push({name:"home"})
  } else if (key==="1")
  {
    router.push({name:"login"})
  }
  else if (key==="2"){
    router.push({name:"regis"})
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/menu";
.flex-grow {
  flex-grow: 1;
}
</style>