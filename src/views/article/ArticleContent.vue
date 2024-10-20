<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { getArticleAllInfo } from '@/api/article.js'

const route = new useRoute()

const data = ref({
  article: {
    ArticleId: '',
    Author: '',
    Time: '',
    Content: '',
    Like: 0,
    Read: 0,
    Title: ''
  },
  author: {
    Account: '',
    Password: '',
    Email: '',
  }
})
onMounted(async () => {
  const res = await getArticleAllInfo(route.params.articleId)
  data.value = res.data.data
  console.log(res.data.data);
})
</script>

<template>
  <el-row>
    <el-col :span="7">
      <div id="infoContainer">
        <el-avatar :size="100"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <div>{{ data.author.Account }}|{{ data.author.Email }}</div>
        <ul>
          <li>总阅览数</li>
          <li>总点赞数</li>
          <li>发布文章数</li>
        </ul>
      </div>
    </el-col>
    <el-col :span="10">
    <div id="contentContainer">
      <h1>{{ data.article.title }}</h1>
      <p>{{ data.article.content }}</p>
    </div>
    </el-col>
    <el-col :span="7"></el-col>
  </el-row>
</template>

<style scoped>  
#infoContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 350px;
  width: 350px;
  background-color: rgba(255, 255, 255, .65);
}

ul{
  display: flex;
}
li{
  width: 100px;
  height: 100px;
}
h1{
  text-align: center;
}
#contentContainer{
  height: 780px;
  background-color: rgba(255, 255, 255, .65);
}
</style>