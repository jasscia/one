<template>
  <div class="hello">
    <div class="header">
            <span  @click="$router.go(-1)"><Icon type="chevron-left" ></Icon></span>
            <span>阅读</span>
            <span class="chevron_down" @click="chooseBlock=!chooseBlock"><Icon type="chevron-down"></Icon></span>
    </div>
    <chooseBlock  v-if="chooseBlock"></chooseBlock>
    <div v-for = "(artical,index) in artical_list" :key="index" class="artical_list" v-on:click="linkTo(artical.content_id)">
      <!-- <router-link :to="{name:'reading/artical',params:{centent_id:artical.content_id}}">连接</router-link> -->
      <img class="img" :src="img_list[index]" />
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
import {Icon} from "iview";
import chooseBlock from "../chooseBlock";
export default {
  name: 'Reading_list',
  components:{Icon,chooseBlock},
  data () {
    return {
      artical_list:"",
      img_list:[],
      chooseBlock:false
    }
  },
  created:function(){
    var url="http://v3.wufazhuce.com:8000/api/reading/index/?version=3.5.0&platform=android";
    axios.get(url)
      .then((data)=>{
            this.artical_list=data.data.data.essay;
            })
      .catch()
    var imgs_url="http://v3.wufazhuce.com:8000/api/hp/idlist/0?version=3.5.0&platform=android";
    var imgs_id_list="";
    axios.get(imgs_url)
      .then(data=>{imgs_id_list=data.data.data;
                  imgs_id_list.forEach(element => {
                    var img_url="http://v3.wufazhuce.com:8000/api/hp/detail/" + element + "?version=3.5.0&platform=android";
                    axios.get(img_url)
                      .then(data=>{this.img_list.push(data.data.data.hp_img_url);console.log(data.data.data.hp_img_url)})
                      .catch()                    
                    });
                  })
      .catch()
  },
  methods:{
    linkTo:function(content_id){
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
  .artical_list{
    border-bottom:solid 1px #eee;
    display: flex;
    margin:10px;
    padding-bottom:5px;
  }
  .img{
    width: 40px;
    height: 40px;
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
