<template>
  <div class="container">
<el-form v-model="form" @submit.prevent="submitForm1">

  <el-form-item  label="用户" >
    <el-input v-model="form.username" placeholder="Please input" clearable/>
  </el-form-item>

  <el-form-item  label="密码">
  <el-input type="password" v-model="form.password" placeholder="Please passwrods" clearable />
  </el-form-item>

  <el-form-item>
    <el-button type="primary" native-type="submit">登录</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script lang="ts"  setup>
import { ElMessage } from 'element-plus'
import {useRouter} from 'vue-router'
import {onBeforeMount, reactive, ref} from 'vue';
import {submitForm} from "../api/login"
    const form = reactive({
      username:"",
      password:"",
      isLogin: false, // 新增登录状态变量
    })
    const router = useRouter()
onBeforeMount(() => {
  const loginStatus = localStorage.getItem('isLogin');
  form.isLogin = loginStatus === 'true';
});
async function submitForm1() {
  try {
    const response = await submitForm(form)
    // 根据返回的状态码进行处理
    if (response.status === 200) {
      ElMessage({
        message: '登录成功！',
        type: 'success',
      })
      setTimeout(()=>{
        localStorage.setItem('isLogin', 'true');
        // 更新登录状态变量
        form.isLogin = true;

      router.push('/h');
      },3000)
    }
  } catch (error) {
    //error是一个response 可以获取到错误未访问到的数据
    if (error.response.status === 401) {
      ElMessage({
        message: 'warning！',
        type: 'warning',
      })
    }
    else if (error.response.status === 404) {
      ElMessage({
        message: 'error！',
        type: 'error',
      })
    }
    else {
      ElMessage({
        message: '不知道出了什么错误！',
      })
    }
  }
}
</script>


<style scoped lang="scss">
@import "../assets/sass/from";

</style>