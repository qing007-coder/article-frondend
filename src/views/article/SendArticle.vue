<script setup>
import { ref } from 'vue'
import { sendArticleService } from '@/api/article.js';
import { ElMessage } from 'element-plus';

const sendArticleModel = ref({
  title: '',
  content: '',
})

const rules = {
  title: [
    {required: true, message: '请输入标题', trigger: 'blur'}
  ],
  content: [
    {required: true, message: '请输入内容', trigger: 'blur'}
  ]
}

const form = ref()

const sendArticle = async () => {
  await form.value.validate()
  const res = await sendArticleService(sendArticleModel.value)
  ElMessage({
    message: res.data.msg,
    type: 'success',
  })
  console.log(res.data);
  sendArticleModel.value = {
    title: '',
    content: '',
  }
}
</script>

<template>
  <el-form
  :model="sendArticleModel"
  :rules="rules"
  ref="form"
  >
  <el-form-item prop="title">
    <el-input
    id="title"
    size="large"
    v-model="sendArticleModel.title"
    maxlength="10"
    placeholder="请输入标题"
    show-word-limit
    type="text"
    />
  </el-form-item>

  <el-form-item prop="content" id="textArea">
    <el-input
      v-model="sendArticleModel.content"
      :rows="24"
      maxlength="100"
      placeholder="请输入内容"
      show-word-limit
      type="textarea"
    />
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="sendArticle">发布</el-button>
  </el-form-item>
  </el-form>
</template>

<style scoped>
#textArea{
  margin-top: 30px;
}
.el-form{
  margin-top: 20px;
}
</style>