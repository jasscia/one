<template>
<div>
    <div class="block" @click="$router.push('/musics/list')">
        <img src="http://image.wufazhuce.com/FkP6kQCxqtzo7K9fHoFhrmefONVA">
        <div>音乐</div>
    </div>
    <div class="block" @click="$router.push('/reading/list')">
        <img src="http://image.wufazhuce.com/Fqr3dFLsc1RoLW4TRFq42Qc9vLqd">
        <div>阅读</div>
    </div>
    <div class="block"  @click="$router.push('/movies/list')">    
        <img src="http://image.wufazhuce.com/FhQWYxCQhYU4-gLXthINGIAO0DLy">
        <div>电影</div>
    </div>
</div>
    

</template>
<style scoped>
.block{
    height: 250px;
    width:100%;
    margin:10px 0;
    font-size:0;
}
img{
    height: 250px;
    width:100%;
    z-index:0;
}
.block div{
    color:#000;
    font-size:20px;
    z-index:1;
    transform: translateY(-150px);
    position: relative;
    /* top:0; */
    /* left:50%; */
}
</style>
<script>
export default {
  name:"index"
}
</script>


