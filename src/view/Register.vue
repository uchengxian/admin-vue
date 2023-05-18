<template>
  <div class="container">
    <el-form ref="registerForm" :model="form" :rules="rules" label-width="120px" @submit.prevent="submitForm" >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="form.confirmPassword" placeholder="请确认密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive ,ref} from "vue";
import {ElMessage} from "element-plus";
import {ToRegis} from "../api/regis"
const form = reactive({
  username:"",
  password:"",
  confirmPassword:"",
})
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== form.password) {
          callback(new Error('两次输入的密码不一致'));
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ]
};
async function submitForm() {
  try {
    const response = await ToRegis(form)
    console.log(response)
    ElMessage({
      message: '注册成功了！！',
      type: 'success',
    })
  }catch (e) {
    console.log(e)
    ElMessage({
      message: '失败了！！',
      type: 'error',
    })
  }
}

</script>

<style lang="scss" scoped>

@import "../assets/sass/from";

</style>