<template>
  <div class="container">
    <div class="header">
            <span @click="$router.go(-1)"><Icon type="chevron-left" ></Icon></span>
            <span>音乐</span>
            <span class="chevron_down" @click="chooseBlock=!chooseBlock"><Icon type="chevron-down"></Icon></span>
    </div>
    <chooseBlock  v-if="chooseBlock"></chooseBlock>
    <div v-for = "(music,index) in musicInfo_list" :key="index" class="list" 
        v-on:click="linkTo(music.id)" >
      <img class="img" :src="music.feeds_cover"/>
      <div class="text">
        <p class="title">{{ music.story_title}}</p>
        <p class="musicTitle">{{ music.title}}|{{music.author.user_name}}</p>
      </div>
    </div>
  </div>
  
</template>
<style scoped>
  .container{
    margin-top:60px;
    padding:0;
  }  
  .header{
        margin:10px;
        width:calc(100% - 20px);
        height:40px;
        letter-spacing: 2px;
        position: fixed;
        top:0px;
        font-size:20px;
        color:#000;
        display: flex;
        justify-content: space-between;
        border-bottom: solid 1px #ddd;
    }
  .chevron_down{
    transform:translate(-100%)
  }
  .list{
    border-bottom:solid 1px #eee;
    display: flex;
    margin:10px;
    padding-bottom:5px;
  }
  .img{
    width: 40px;
    height: 40px;
    background:url(../../assets/logo.png);
    background-size: cover;
    margin:0 5px;
  }
  .text{
    width:calc(100% - 50px);
    height: 40px;
    line-height: 20px;
  }
  .title,.musicTitle{
    text-align: left;
    margin:0;
    margin-left:5px;
    margin-bottom:5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height:20px;
    letter-spacing: 2px;
  }
  .title{
    font-size: 14px;
    color:#333;
    /* line-height: 19px; */
  }
  .musicTitle{
    font-size:6px;
    color:#ddd;
    /* line-height: 15px; */
  }
</style>

<script>
import axios from "axios";
import {Icon} from "iview";
import chooseBlock from "../chooseBlock";
export default {
  name:"music_list",
  components:{Icon,chooseBlock},
  data(){
      return {
          musicInfo_list:[],
          music_list:[],
          chooseBlock:false
      }
  },
  created(){
      let url="http://v3.wufazhuce.com:8000/api/music/idlist/0?version=3.5.0&platform=android";
      axios.get(url)
      .then(
          data=>{
            
              this.music_list=data.data.data;
              // console.log(this.music_list);
              this.musicInfo_list=[];
              this.info_list=[];
              this.music_list.forEach(item=>{
                  let info_path="http://v3.wufazhuce.com:8000/api/music/detail/"+item+"?version=3.5.0&platform=android";
                  axios.get(info_path)
                  .then(data=>{
                      this.musicInfo_list.push(data.data.data);
                    })
                  });
                  
          }
      );
  },
  methods:{
    linkTo:function(music_id){
        this.$router.push({
          name: 'music',
          params: {
            id: music_id
          }
        })
    }
  }
}
</script>
