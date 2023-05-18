<template>
  <h1>132</h1>
  <h1>{{name}}</h1>
  <h1>{{name2}}</h1>
  <h1>{{age}}</h1>
  <h1>{{obj.id}}</h1>
  <h1>{{obj.name}}</h1>
  <button @click="name2impl">点击显示</button>
</template>

<script lang="ts">
import {ref,reactive,defineComponent} from "vue";
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    interface Menber{
      id:number,
      name:string
    }
    const obj = reactive<Menber>({
      id: 0, name: "jiantao"
    })
    // 定义一个对象
    const userInfo: Menber = reactive({
      id: 1,
      name: 'Tom',
    })

    let name = ref("jiantao")
    let age = ref<number>(123)
    let name2 = ref<string>()
    function name2impl() {
      name2.value = "牛逼"
      obj.name = "chengxian"
    }
    return{
      name,age,
      name2,name2impl,obj
    }
  }
})
</script>
