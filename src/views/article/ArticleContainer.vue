<script setup>
import PostCover from '@/components/PostCover.vue';
import { getArticleService } from '@/api/article.js';
import {  ref } from 'vue';

const data = ref([])

// onMounted(async () => {
//   const res = await getArticleService()
//   data.value = res.data.data.data
//   console.log(data.value);
// })

const addData = async () => {
  const res = await getArticleService()
  data.value.push(...res.data.data.data)
}

</script>


<template>
  <ul v-infinite-scroll="addData" class="infinite-list" style="overflow: auto">
    <li v-for="item in data" :key="item.id" class="infinite-list-item">
      <PostCover @click="$router.push({
        path: `/article/main/${item.id}`
      })">
        <template #Author>
          {{ item.author_id }}
        </template>
      
        <template #Title>
          {{ item.title }}
        </template>
      
        <template #Read>
          {{ item.read }}
        </template>
      
        <template #Like>
          {{ item.like }}
        </template>
      </PostCover>
    </li>
  </ul>
</template> 

<style scoped>
.infinite-list {
  height: 700px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  /* background: var(--el-color-primary-light-9); */
  margin: 10px;
  /* color: var(--el-color-primary); */
}
.infinite-list-item{
  height: 170px;
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>