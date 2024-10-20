<script setup>
import { getJudgeArticleQueue, judgeArticles } from '@/api/article.js';
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const tableData = ref([])

const addTableData = async () => {
  const res = await getJudgeArticleQueue()
  tableData.value.push(...res.data.data.queue)
  console.log(res);
}

addTableData()
console.log(tableData.value);

const judgement = async (row) => {
  const res = await judgeArticles(row.ArticleId, "1")
  ElMessage(res.data.message)
  console.log(res);
}


</script>

<template>
  <el-table :data="tableData" style="width: 100%" @row-click="judgement">
    <el-table-column prop="ArticleId" label="articleID" width="180"/>
  </el-table>
</template>

<style>
.el-table {
  margin-top: 10px;
}
</style>