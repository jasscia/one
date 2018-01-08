<template>
  <div class="block_choose">
      <p @click="$router.push('/musics/list')">音乐</p>
      <p @click="$router.push('/movies/list')">电影</p>
      <p @click="$router.push('/reading/list')">阅读</p>
    </div>
</template>

<style scoped>
    .block_choose{
        width:calc(100% - 20px);
        position: fixed;
        top:60px;
        background: #fff;
    }
    .block_choose p{
        height: 40px;
        line-height: 40px;
        font-size:20px;
    }
</style>
