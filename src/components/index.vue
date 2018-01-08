<template>
<div>
    <div class="block music" @click="$router.push('/musics/list')">
        <!-- <img src="http://image.wufazhuce.com/FkP6kQCxqtzo7K9fHoFhrmefONVA"> -->
        <div>音乐</div>
    </div>
    <div class="block reading" @click="$router.push('/reading/list')">
        <!-- <img src="http://image.wufazhuce.com/Fqr3dFLsc1RoLW4TRFq42Qc9vLqd"> -->
        <div>阅读</div>
    </div>
    <div class="block movie"  @click="$router.push('/movies/list')">    
        <!-- <img src="http://image.wufazhuce.com/FhQWYxCQhYU4-gLXthINGIAO0DLy"> -->
        <div>电影</div>
    </div>
</div>
    

</template>
<style scoped>
.block{
    height:250px;
    width:100%;
    margin:10px 0;
    font-size:0;
}
.block div{
    color:#000;
    font-size:20px;
    line-height: 250px;
}
.music{
    background: url('http://image.wufazhuce.com/FkP6kQCxqtzo7K9fHoFhrmefONVA');
    background-size: cover;
}
.reading{
    background: url('http://image.wufazhuce.com/Fqr3dFLsc1RoLW4TRFq42Qc9vLqd');
    background-size: cover;
}
.movie{
    background: url('http://image.wufazhuce.com/FhQWYxCQhYU4-gLXthINGIAO0DLy');
    background-size: cover;
}

</style>
<script>
export default {
  name:"index"
}
</script>


