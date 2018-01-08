<template>
    <div class="container" v-if="music">
        <div v-if="showLyric">
            <lyric :musicInfo="music" v-on:ifShowLyric="ifShowLyric"></lyric>
        </div>
        <div v-else>
            <div class="header">
                <span class="icn" @click="$router.go(-1)"><Icon type="chevron-left"></Icon></span>           
            </div>
            
            <div class="musicBody">
                <transition name="slide-fade">
                <musicDiscribe :musicInfo="music" v-on:ifShowLyric="ifShowLyric"></musicDiscribe>
                </transition>
                
                <div class="author other">
                    <div class="author_title other_title">作者</div>
                    <div class="author_info other_info" v-for = "(item,index) in music.author_list" :key="index">
                        <img class="author_img other_img" :src="item.web_url"/>
                        <div class="author_info_text other_info_text">
                            <div class="author_name other_name">{{item.user_name}}</div>
                            <div class="summary side_title">{{item.summary}}</div>
                        </div>
                        <div class="care">关注</div>
                    </div>
                </div>
            </div>
            <div class="footer">
                    <input class="eval" placeholder="写一个评论..."/>
                    <div class="love">
                        <Icon type="android-favorite-outline"></Icon>                 
                        <div  class="asign">{{music.praisenum}}</div>
                        </div>
                    <div class="evalCount">
                        <Icon type="ios-chatbubble-outline"></Icon>                 
                        <div  class="asign">{{music.sharenum}}</div>
                    </div>
                    <div class="share">
                        <Icon type="share"></Icon>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import commentList from "./commentList";
    import musicDiscribe from "./musicDiscribe";
    import lyric from "./lyric";
    import axios from "axios";
    import {Icon} from "iview";
    export default{
        name:"music",
        components:{
            commentList,
            musicDiscribe,
            lyric,
            Icon
        },
        data(){
            return{
                comments:"",
                music:"",
                showLyric:false
            }
        },
        computed:{
            duration:function(){
                var audio_duration=this.music.audio_duration;
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
            var music_id=this.$route.params.id;
            var url="http://v3.wufazhuce.com:8000/api/music/detail/" + music_id + "?version=3.5.0&platform=android";
            axios.get(url)
                .then(data=>{
                        this.music=data.data.data;
                        this.author_list=this.music.author_list;
                        console.log("music:");
                        console.log(this.music);
                    })
                .catch(err=>{
                    console.log(err);
                });        
        },
        methods:{
            ifShowLyric:function(){
                this.showLyric=!this.showLyric;
            }
        }
    }
</script>
<style scoped>
    body{
        margin:0;
        padding:0;
    }
    .container{
        margin:0;
        padding:0;
        position: relative;
    }
  
    .header{
        width:100%;
    }
    .icn{
        position: absolute;
        left: 0;
        top:0;
        z-index: 1;
        margin-left:10px;
        margin-top:10px;
        font-size: 30px;
        color: #ffffff;
    }
    
    .musicBody{
        width:calc(100% - 20px);
        margin:0 10px;
        overflow: scroll;
        margin-bottom:60px;
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