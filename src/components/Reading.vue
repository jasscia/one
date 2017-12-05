<template>
  <div class="hello">
    <div v-for = "item in msg" class="item" >
      <div class="img" ></div>
      <div class="text">
        <p class="title">{{ item.hp_title }}</p>
        <p class="author">文/{{ item.author[0].user_name }}</p>
      </div>
    </div>
    <!-- <p >{{ msg }}</p> -->
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  name: 'Reading',
  data () {
    return {
      msg:""
    }
  },
  created:function(){
    var url="http://v3.wufazhuce.com:8000/api/reading/index/?version=3.5.0&platform=android";
    axios.get(url)
      .then((data)=>{this.msg=data.data.data.essay;console.log(this.msg)})
      .catch()  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    margin:0;
    padding:0;
  }  
  .item{
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
