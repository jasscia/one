<template>
    <div class="myBody">
        <div class="header">
            <span><Icon type="chevron-left"></Icon></span>
            <span>阅读</span>
            <span><Icon type="android-bookmark"></Icon></span>
        </div>
        <div class="artical">
            <div class="title">{{ artical.hp_title }}</div>
            <div class="side_title">文/{{ artical.hp_author }}</div>
            <div class="anchor" v-if="artical.anchor">
                <Icon type="android-volume-up" class="icon"></Icon>
                <span>有声阅读|{{artical.anchor}}</span>
                <span>{{duration}}</span>
            </div>
            <div class="content" v-html="artical.hp_content"></div>
            <div class="side_title">{{artical.hp_author_introduce}}</div>
            <div class="author other">
                <div class="author_title other_title">作者</div>
                <div class="author_info other_info">
                    <div class="author_img other_img"></div>
                    <div class="author_info_text other_info_text">
                        <div class="author_name other_name">{{artical.hp_author}}</div>
                        <div class="summary side_title">{{artical.author[0].summary}}</div>
                    </div>
                    <div class="care">关注</div>
                </div>
            </div>
            <div class="recommend other">
                <div class="recommend_title other_title">相关推荐</div>
                <div class="recommend_info other_info">
                    <div class="recommend_img other_img">阅读</div>
                    <div class="recommend_info_text other_info_text">
                        <div class="recommend_name other_name">{{artical.hp_author}}</div>
                        <div class="recommend_author side_title">{{artical.author[0].summary}}</div>
                    </div>
                </div>
            </div>
            <div class="commend other">
                <div class="commend_info other_title">评论列表</div>
                <div class="commend_info" v-for="comment in comments">
                    <div class="other_info commend_author ">
                        <div class="commend_img ">img</div>
                        <div class="commend_name ">{{comment.user.user_name}}</div>
                        <div class="commend_time">{{comment.created_at}}</div>
                    </div>
                    <div class="commend_content">{{comment.content}}</div>
                    <div class="commend_option">
                        <Icon type="chatbox-working" class="opt"></Icon>
                        <Icon type="thumbsup" class="opt"></Icon>
                        <span class="opt count">{{comment.praisenum}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <!-- <div> -->
                <input class="eval" value="写一个评论..."/>
                <div class="love">
                    <Icon type="android-favorite-outline"></Icon>                 
                    <div  class="asign">{{artical.commentnum}}</div>
                    </div>
                <div class="evalCount">
                    <Icon type="ios-chatbubble-outline"></Icon>                 
                    <div  class="asign">{{artical.sharenum}}</div>
                </div>
                <div class="share">
                    <Icon type="share"></Icon>
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    // props:["centent_id"];
    export default{
        name:"Artical",
        data(){
            return{
                artical:"",
                comments:""
            }
        },
        computed:{
            duration:function(){
                var audio_duration=this.artical.audio_duration;
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
            var url="http://v3.wufazhuce.com:8000/api/essay/" + 2949 + "?version=3.5.0&platform=android";
            axios.get(url)
                .then(data=>{
                        this.artical=data.data.data;
                        // console.log(data.data.data);
                    })
                .catch();
            var url_com="http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/" + 2949 + "/0?version=3.5.0&platform=android"
            axios.get(url_com)
                .then(data=>{
                    this.comments=data.data.data.data;
                    console.log(this.comments);
                    })
                .catch();          
        }
    }
</script>
<style scoped>
   .commend_info{
        display: flex;
        flex-direction: column;
    }
    .commend_author{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* background: red; */
    }
    .commend_img,.commend_name,.commend_time{
        margin: 0 5px;
        /* width:30px; */
        height:30px;
        line-height: 30px;
        color:#999;
        margin-bottom:5px;
    }
    .commend_img{
        width:30px;
        border-radius: 50%;
        background: yellow;
    }
    .commend_time{
        flex:1;
        text-align: right;
        letter-spacing: 0;
    }
    .commend_content{
        /* height: 18px; */
        width:calc(100% - 20px);
        
        font-size:14px;
        padding:0 10px;
        line-height: 18px;
        letter-spacing: 1px;
        text-align: left;
    }
   
    .commend_option{
        font-size:25px;
        display: flex;
        justify-content: flex-end;  
        align-items: center; 
        transform: translate(40px);     
    }
    .opt{
        width:30px;
        margin: 5px 10px;
    }
    .opt.count{
        transform: translate(-30px);
        font-size:15px;
    }
    
    .myBody{
        margin:0;
        padding:0;
        position: relative;
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
    .artical{
        width:calc(100% - 20px);
        margin:0 10px;
        overflow: scroll;
        position: fixed;
        top:60px;
        bottom:60px;
    }
    .title{
        font-size:22px;
        margin-bottom: 5px;
        font-weight: 900;
        letter-spacing: 2px;
    }
    .side_title{
        font:14px;
        color: #666;
        margin-bottom: 5px;
        letter-spacing: 2px;
    }
    .anchor{
        font-size: 20px;
        letter-spacing: 1px;
        line-height: 20px;
        margin:auto;
        margin-bottom: 20px;
        padding:10px;
        width:calc(100% - 20px);
        height: 40px;
        border: solid 2px #000;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        margin:0 10px;
        font-size:16px;
        color: #333;
        line-height: 25px;
        letter-spacing: 1px;
        text-align: left;
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
        /* color: red; */
        font-size: 5px;
        text-align:center;
        /* margin:-30px 0 0 0; */
        transform: translate(20px,-35px);
    }

    .other{
        margin-bottom:10px;
        /* background: red; */
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
    .author_img{        
        background: url("../assets/logo.png");
        background-size:cover;
    }
    .other_info_text{
        height: 40px;
        /* width:calc(100% - 150px); */
        /* margin:0 auto; */
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