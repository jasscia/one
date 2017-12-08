<template>
    <div class="comment other">
        <div class="comment_info other_title">评论列表</div>
        <div class="comment_info" v-for="(comment,index) in comments" :key="index">
            <div class="other_info comment_author ">
                <img class="comment_img " :src="comment.user.web_url" />
                <div class="comment_name ">{{comment.user.user_name}}</div>
                <div class="comment_time">{{comment.created_at}}</div>
            </div>
            <div class="comment_content">{{comment.content}}</div>
            <div class="comment_option">
                <Icon type="chatbox-working" class="opt"></Icon>
                <Icon type="thumbsup" class="opt"></Icon>
                <span class="opt count">{{comment.praisenum}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default{
        name:"CommentList",
        // props:["contentId"],
        data(){
            return{
                comments:""
            }
        },
        created:function(){
            var content_id=this.$route.params.id;         
            var url_com="http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/" + content_id + "/0?version=3.5.0&platform=android"
            axios.get(url_com)
                .then(data=>{
                    this.comments=data.data.data.data;
                    // console.log(this.comments);
                    })
                .catch();          
        }
    }
</script>
<style>
   .comment_info{
        display: flex;
        flex-direction: column;
    }
    .comment_author{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* background: red; */
    }
    .comment_img,.comment_name,.comment_time{
        margin: 0 5px;
        /* width:30px; */
        height:30px;
        line-height: 30px;
        color:#999;
        margin-bottom:5px;
    }
    .comment_img{
        width:30px;
        border-radius: 50%;
        background: yellow;
    }
    .comment_time{
        flex:1;
        text-align: right;
        letter-spacing: 0;
    }
    .comment_content{
        /* height: 18px; */
        width:calc(100% - 20px);
        
        font-size:14px;
        padding:0 10px;
        line-height: 18px;
        letter-spacing: 1px;
        text-align: left;
    }
   
    .comment_option{
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
    
</style>