<template>
  <div class="top">
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
>
  <el-menu-item index="1">关注</el-menu-item>
  <el-menu-item index="2">热榜</el-menu-item>
  <el-menu-item index="3">推荐</el-menu-item>
</el-menu>
    <router-view></router-view>
  </div>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const route = useRouter()
import { ref } from 'vue'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if (key==="1")
  {
    route.push({name:"Follow"})
  }
  else if (key==="2"){
    route.push({name:"HotList"})

  } else if (key==="3"){
    route.push({name:"Recommend"})

  }
}
</script>

<style lang="sass">
.top
  padding-top: 10px
</style>
