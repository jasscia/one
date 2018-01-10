<template>
  <div class="container">
    <div class="header">
            <span  @click="$router.go(-1)"><Icon type="chevron-left" ></Icon></span>
            <span>电影</span>
            <span class="chevron_down" @click="chooseBlock=!chooseBlock"><Icon type="chevron-down"></Icon></span>
    </div>
    <chooseBlock  v-if="chooseBlock"></chooseBlock>
    <div v-if="movie_list" >
      <div v-for = "(movie,index) in movie_list" :key="index" 
            class="list" 
            v-on:click="linkTo(movie.id)" 
            :movieTitle="movie.title">
            <!-- v-if="movie.movieInfo&&movie.movieImg"> -->
        <img v-if="loadDone" class="img"  :src="movie.movieImg.detailcover"/>
        <div v-if="loadDone" class="text" >
          <p class="title" >{{movie.movieInfo.title}}</p>
          <p class="movieTitle">{{ movie.title}}</p>
        </div>
        <div v-else>loading</div>
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
  .title,.movieTitle{
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
  .movieTitle{
    font-size:6px;
    color:#ddd;
    /* line-height: 15px; */
  }
</style>

<script>
import axios from "axios";
import {Icon} from "iview";
import chooseBlock from "../chooseBlock"
export default {
  name:"movie_list",
  components:{Icon,chooseBlock},
  data(){
      return {
          movieInfo_list:[],
          movie_list:[],
          chooseBlock:false,
          loadDone:false
      }
  },
  created(){
      let url="http://v3.wufazhuce.com:8000/api/movie/list/0?version=3.5.0&platform=android";
      axios.get(url)
      .then(
          data=>{            
              this.movie_list=data.data.data;
              this.movieInfo_list=[];
              for (let i=0;i<this.movie_list.length;i++){
                let info_path="http://v3.wufazhuce.com:8000/api/movie/"+this.movie_list[i].id+"/story/1/0?version=3.5.0&platform=android";
                  axios.get(info_path)
                  .then(data=>{
                      this.movie_list[i].movieInfo=data.data.data.data[0];
                    });
                let img_path="http://v3.wufazhuce.com:8000/api/movie/detail/"+this.movie_list[i].id+"?version=3.5.0&platform=android"
                  axios.get(img_path)
                  .then(data=>{
                      this.movie_list[i].movieImg=data.data.data;
                      // console.log(this.movie_list[i])
                      // if(i==this.movie_list.length-1){
                        this.loadDone=(i==this.movie_list.length-1?true:false)
                      // }
                      console.log(this.loadDone);
                    })
              }
                  
          }
      );
  },
  methods:{
    linkTo:function(movie_id){
        this.$router.push({
          name: 'movie',
          params: {
            id: movie_id
          }
        })
    }
  }
}
</script>
