<script setup>
import { ref } from 'vue'
import { Lock } from '@element-plus/icons-vue';
import { modifyPasswordService } from '@/api/user';
import { ElMessage } from 'element-plus';

const form = ref()

const modifyForm = ref({
  oldPassword: '',
  newPassword: '',
  rePassword: '',
})

const rules = {
  oldPassword: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {pattern: /^\S{6,15}$/, message: '密码是6-15非空字符', trigger: 'blur'}
  ],
  newPassword: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {pattern: /^\S{6,15}$/, message: '密码是6-15非空字符', trigger: 'blur'}
  ],
  rePassword: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {pattern: /^\S{6,15}$/, message: '密码是6-15非空字符', trigger: 'blur'},
    {
      validator: (rule, value, callback) => {
        if (value !== modifyForm.value.newPassword) {
          callback(new Error('两次密码不一致'))
        }else{
          callback()
        }
      }
    }
  ]
}

const modifyPassword = async () => {
  const res = await modifyPasswordService(modifyForm.value)
  ElMessage({
    message: res.data.msg,
    type: 'success',
  })
  modifyForm.value = {
    oldPassword: '',
    newPassword: '',
    rePassword: '',
  }
}
</script>

<template>
  <el-col :span="6" :offset="9">
    <el-form
    ref="form"
    :model="modifyForm" 
    :rules="rules"
    class="form" 
    >
      <el-form-item prop="oldPassword">
        <el-input
        v-model="modifyForm.oldPassword"
        class="inp" 
        placeholder="请输入原密码" 
        :prefix-icon="Lock"
        />
      </el-form-item>
      <el-form-item prop="newPassword">
        <el-input 
        v-model="modifyForm.newPassword"
        show-password
        class="inp"
        placeholder="请输入新密码" 
        :prefix-icon="Lock"
        />
      </el-form-item>

      <el-form-item prop="rePassword">
        <el-input 
        v-model="modifyForm.rePassword"
        show-password
        class="inp"
        placeholder="请再次输入新密码" 
        :prefix-icon="Lock"
        />
      </el-form-item>

      <el-form-item>
        <el-button :plain="true" @click="modifyPassword">确认更改</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<style scoped>
.inp{
  margin-top: 20px;
  height: 50px;
}

button{
  margin: 0 auto;
  margin-top: 20px;
  height: 50px;
  width: 40%;
}

</style>