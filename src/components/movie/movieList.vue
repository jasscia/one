<template>
  <div class="container">
    <div class="header">
            <span><Icon type="chevron-left" ></Icon></span>
            <span>影视</span>
            <span class="chevron_down"><Icon type="chevron-down"></Icon></span>
        </div>
    <div v-for = "(movie,index) in info_list" :key="index" class="list" v-on:click="linkTo(movie.movie_id)">
      <img class="img" :src="movie.imgUrl" />
      <div class="text">
        <p class="title">{{ info_list.title }}</p>
        <p class="movieTitle">{{ info_list.movieTitle }}</p>
      </div>
    </div>
  </div>
  
</template>
<style scoped>
  .container{
    margin:0;
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
export default {
  name:"movie_list",
  components:{Icon},
  data(){
      return {
          movieInfo_list:[],
          movie_list:[],
          info_list:[]
      }
  },
  created(){
      let url="http://v3.wufazhuce.com:8000/api/movie/list/0?version=3.5.0&platform=android";
      axios.get(url)
      .then(
          data=>{
            
              this.movie_list=data.data.data;
              this.movieInfo_list=[];
              this.info_list=[];
              this.movie_list.forEach(item=>{
                  let i=0;
                  
                  let info_path="http://v3.wufazhuce.com:8000/api/movie/"+item.id+"/story/1/0?version=3.5.0&platform=android";
                  axios.get(info_path)
                  .then(data=>{
                      this.movieInfo_list.push(data.data.data.data[0]);
                      this.info_list[i]={
                                  "movieID":item.id,
                                  "movieTitle":item.title,
                                  "title":data.data.data.data[0].title
                                };
                      console.log(this.info_list);
                    })
                  let img_path="http://v3.wufazhuce.com:8000/api/movie/detail/"+item.id+"?version=3.5.0&platform=android";
                  axios.get(img_path)
                  .then(data=>{
                    // console.log("image:"+item.id);
                    // console.log(data);
                    this.info_list[i].imgUrl=data.data.data.detailcover

                  })
                  i++
                  });
                  
          }
      );
  }
}
</script>
