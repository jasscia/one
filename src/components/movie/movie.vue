<template>
    <div class="container">
        <div class="header">
            <span  @click="$router.go(-1)"><Icon type="chevron-left"></Icon></span>
            <span><Icon type="android-bookmark"></Icon></span>
        </div>
        
        <div class="movieBbody">
            <transition name="slide-fade">
              <movieDiscribe :movieInfo="movie"></movieDiscribe>
            </transition>
            
            <div class="author other">
                <div class="author_title other_title">作者</div>
                <div class="author_info other_info" v-for = "(item,index) in author_list" :key="index">
                    <img class="author_img other_img" :src="item.web_url"/>
                    <div class="author_info_text other_info_text">
                        <div class="author_name other_name">{{item.user_name}}</div>
                        <div class="summary side_title">{{item.summary}}</div>
                    </div>
                    <div class="care">关注</div>
                </div>
            </div>            
            <!-- <div class="recommend other">
                <div class="recommend_title other_title">相关推荐</div>
                <div class="recommend_info other_info">
                    <div class="recommend_img other_img">阅读</div>
                    <div class="recommend_info_text other_info_text">
                        <div class="recommend_name other_name">{{artical.hp_author}}</div>
                        <div class="recommend_author side_title">{{artical.author&&artical.author[0].summary}}</div>
                    </div>
                </div>
            </div> -->
            <commentList></commentList>
        </div>
        <div class="footer">
                <input class="eval" placeholder="写一个评论..."/>
                <div class="love">
                    <Icon type="android-favorite-outline"></Icon>                 
                    <div  class="asign">{{movie.praisenum}}</div>
                    </div>
                <div class="evalCount">
                    <Icon type="ios-chatbubble-outline"></Icon>                 
                    <div  class="asign">{{movie.sharenum}}</div>
                </div>
                <div class="share">
                    <Icon type="share"></Icon>
                </div>
        </div>
    </div>
</template>

<script>
    import commentList from "./commentList";
    import movieDiscribe from "./movieDiscribe";
    import axios from "axios";
    import {Icon} from "iview";
    export default{
        name:"movie",
        // component:{},
        props:["movieTitle"],
        components:{
            commentList,
            movieDiscribe,
            Icon
        },
        data(){
            return{
                author_list:[],
                movie:"",
                comments:""
            }
        },
        computed:{
            duration:function(){
                var audio_duration=this.movie.audio_duration;
                var hour=parseInt(audio_duration/3600);
                var min=parseInt((audio_duration-hour*3600)/60);
                var sedc=(audio_duration-hour*3600-min*60);
                if(sedc<10){
                    sedc="0"+sedc;
                }
                if(min){
                    audio_duration=min+":"+sedc;
                }
                if(hour){
                    audio_duration=hour+":"+audio_duration;
                }
                return audio_duration;
            }
        },
        created:function(){
            var movie_id=this.$route.params.id;
            var url="http://v3.wufazhuce.com:8000/api/movie/" + movie_id + "/story/1/0?version=3.5.0&platform=android";
            axios.get(url)
                .then(data=>{
                        this.movie=data.data.data.data[0];
                        this.author_list=this.movie.author_list;
                        console.log("movie:");
                        console.log(this.movie);
                    })
                .catch();        
        }
    }
</script>
<style scoped>
    .container{
        margin:0;
        padding:0;
        position: relative;
        width: 100%;
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
    }
    .header .title{
        font-size: 18px;
    }
    .movieBody{
        width:calc(100% - 20px);
        margin:0 10px;
        overflow: scroll;
        position: fixed;
        top:60px;
        bottom:60px;
    }
    
    .footer{
        width:calc(100% - 20px);
        height:40px;
        margin:10px 10px 0 10px;
        display: flex;
        align-items: center;
        position: fixed;
        bottom:0px;
        border-top: solid 1px #ddd;
        background: #eee;
    }
    .eval,.love,.evalCount,.share{
        display: inline;
    }
    .eval{
        height: 30px;
        width: 100px;
        flex:1;
        border: solid 1px #666;
        border-radius: 10px;
        text-indent: 8px;
        letter-spacing: 1px;
    }
    .love,.evalCount,.share{
        margin: 5px 0;
        height: 30px;
        line-height: 30px;
        width: 50px;
        font-size:20px;
        text-align: center;
        position: relative;
    } 
    .asign{
        font-size: 5px;
        text-align:center;
        transform: translate(20px,-35px);
    }

    .other{
        margin-bottom:10px;
        padding:10px;
    }
    .other_title{
        height: 40px;
        width: 80px;
        font-size:20px;
        font-weight: 900;
        border-bottom: solid 4px #000;
        margin-bottom:5px;
        text-align: left;
    }
    .other_info{
        display: flex;
    } 
    .other_img{
        height:40px;
        width:40px;
        border-radius: 50%;
        font-size:14px;
        letter-spacing: 1px;
        padding:5px;
        line-height:20px;
    }
    /* .author_img{        
        background: url("../assets/logo.png");
        background-size:cover;
    } */
    .other_info_text{
        height: 40px;
        margin-left:10px;
        text-align: left;
        flex:1;
    }
    .other_name{
        font-size:16px;
        letter-spacing: 1px;
    }

    .care{
        height: 40px;
        width:60px;
        color:#999;
        border: solid 1px #999;
        border-radius: 5px;
        font-size:20px;
        line-height: 20px;
        padding:10px 0;
        text-align: center;
    }
 

</style>