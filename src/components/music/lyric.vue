<template>
  <div class="container">
    <div class="close" @click="$emit('ifShowLyric')">
      <Icon type="close-round"></Icon>
    </div>
    <div class="controler">
      <div :class="enable=='lyric'?'active':'un'" @click="switchBar('lyric')">歌词</div>
      <div :class="enable=='desc'?'active':'un'" @click="switchBar('desc')">简介</div>
    </div>
    <div class="lyric" v-if="enable=='lyric'">
      <p v-for="(item,index) in lyric" :key="index">{{item}}</p>
    </div>
    <div class="desc" v-if="enable=='desc'" >
      <img class="img" :src="musicInfo.cover">
      <p v-for="(item,index) in info" :key="index">{{item}}</p>
    </div>
  </div>
</template>
<<script>
import {Icon} from "iview";
export default {
  props:["musicInfo"],
  components:{
    Icon
  },
  data() {
    return{
      enable:"lyric"
    }
  },
   computed:{
    lyric:function(){
      return this.musicInfo.lyric.split("\r")
    },
    info:function(){
      return this.musicInfo.info.split("\r")
    }
  },
  methods:{
    switchBar:function(name){
      this.enable=name;
      console.log(this);
    }
  }
}
</script>
<style scoped>
.container{
  font-size: 0;
  margin:0;
  padding:0;
}
.close{
  color:gray;
  font-size: 20px;
  position:absolute;
  right: 10px;
  top:10px;
}
.active,.un{
  height: 40px;
  line-height: 40px;
  width:100px;
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
  .img{
    margin-top:20px;
    height: 300px;
  }
  .lyric p,.desc p{
    margin-top:5px;
    font-size:12px;
  }
</style>



