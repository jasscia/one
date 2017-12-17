<template>
    <div>
        <div class="title">{{ artical.hp_title }}</div>
        <div class="side_title">文/{{ artical.hp_author }}</div>
        <div class="anchor" v-if="artical.anchor" @click="ifPlayAudio">
            <Icon type="android-volume-up" class="icon icon-volume-up"></Icon>
            <span>有声阅读|
                <span v-html="artical.anchor"></span>
            </span>
            <span v-if="playAudio" v-html="currentTime"></span>
            <span v-else v-html="duration"></span>
        </div>
        <AudioIt  v-if="artical.anchor" 
                :showAudio="showAudio"
                :artical="artical" 
                :playAudio="playAudio"
                v-on:ifShowAudio="ifShowAudio"
                v-on:getCurrentTime="getCurrentTime"></AudioIt>

        <div class="content" v-html="artical.hp_content"></div>
        <div class="side_title">{{artical.hp_author_introduce}}</div>
    </div>
</template>
<script>
import axios from "axios";
import {Icon} from "iview";
import AudioIt from "./AudioIt"
    export default{
        name:"ArticalContent",
        // component:{Icon},
        components:{
            AudioIt,
            Icon
        },
        data(){
            return{
                artical:"",
                showAudio:false,
                currentTime:'0\'0\"',
                playAudio:false
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
            var content_id=this.$route.params.id;
            var url="http://v3.wufazhuce.com:8000/api/essay/" + content_id + "?version=3.5.0&platform=android";
            axios.get(url)
                .then(data=>{
                        this.artical=data.data.data;
                        console.log(this.artical.audio)
                    })
                .catch();        
        },
        methods:{
            ifShowAudio:function(){
                this.showAudio=!this.showAudio;
            },
            ifPlayAudio:function(){
                this.playAudio=!this.playAudio;
            },
            getCurrentTime:function(playTime){
                this.currentTime=playTime
            }
        }
    }
</script>

<style scoped>
    .title{
        font-size:20px;
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
        font-size: 18px;
        letter-spacing: 1px;
        line-height: 18px;
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
    .icon-volume-up{
        font-size: 20px;
    }
</style>
