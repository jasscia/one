<template>
  <div class="container">
    <div class="controler">
      <div :class="enable=='lyric'?'active':'un'" @click="switchBar('lyric')">歌词</div>
      <div :class="enable=='desc'?'active':'un'" @click="switchBar('desc')">简介</div>
    </div>
    <div class="lyric">
      <p v-for="(item,index) in lyric" :key="index">{{item}}</p>
    </div>
    <div class="desc" >llll</div>
  </div>
</template>
<<script>
export default {
  props:["musicInfo"],
  data() {
    return{
      enable:"lyric"
    }
  },
   computed:{
    lyric:function(){
      return this.$props.musicInfo.lyric.split("\r")
    }
  },
  methods:{
    switchBar:name=>{
      this.enable=name;
    }
  }
}
</script>
<style>
.container{
  font-size: 0;
  margin:0;
  padding:0;
}
.active,.un{
  height: 40px;
  line-height: 40px;
  width: 50%;
  font-size:16px;
  text-align: center;
  display: inline-block;
}
  .active{
    color: gray;
    border-bottom: #333 2px solid;
  }
  .un{
    color: #000;
    border: none;
  }
  .lyric,.desc{
    color: #000;
    font-size: 12px;
  }
</style>



