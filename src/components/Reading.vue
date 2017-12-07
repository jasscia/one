<template>
  <div class="hello">
    <div v-for = "artical in artical_list" class="artical_list" v-on:click="linkTo(artical.content_id)">
      <!-- <router-link :to="{name:'reading/artical',params:{centent_id:artical.content_id}}">连接</router-link> -->
      <div class="img" ></div>
      <div class="text">
        <p class="title">{{ artical.hp_title }}</p>
        <p class="author">文/{{ artical.author[0].user_name }}</p>
      </div>
    </div>
    <!-- <p >{{ msg }}</p> -->
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  name: 'Reading_list',
  data () {
    return {
      artical_list:""
    }
  },
  created:function(){
    var url="http://v3.wufazhuce.com:8000/api/reading/index/?version=3.5.0&platform=android";
    axios.get(url)
      .then((data)=>{this.artical_list=data.data.data.essay;})
      .catch()  
  },
  methods:{
    linkTo:function(content_id){
      console.log(content_id);
        this.$router.push({name: 'Artical',
        params: {
          id: content_id
        }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    margin:0;
    padding:0;
  }  
  .artical_list{
    border-bottom:solid 1px #eee;
    display: flex;
    margin:10px;
    padding-bottom:5px;
  }
  .img{
    width: 40px;
    height: 40px;
    background:url(../assets/logo.png);
    background-size: cover;
    margin:0 5px;
  }
  .text{
    width:calc(100% - 50px);
    height: 40px;
    line-height: 20px;
  }
  .title,.author{
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
  .author{
    font-size:6px;
    color:#ddd;
    /* line-height: 15px; */
  }
</style>
