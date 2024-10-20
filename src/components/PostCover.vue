<script setup>

</script>


<template>
  <div class="container">
    <h2><slot name="Author"></slot></h2>
    <h1><slot name="Title"></slot></h1>
    <p>阅读量<slot name="Read"></slot>，点赞<slot name="Like"></slot></p>
  </div>
</template>

<style scoped>
.container {
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 20px;
  width: 900px;
  height: 70%;
  border: 1px solid black;
  padding: 20px;
  background-color: rgba(255, 255, 255, .65);
}
.container:hover{
  background-color: rgb(206, 203, 203);
}
</style>