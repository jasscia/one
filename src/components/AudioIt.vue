<template>
    <div class="myaudio" @click.stop.prevent="playControl">
        <audio  id="audio" :loop="repeat" 
                    :src="artical.audio"
                    @timeupdate="play_time"></audio>
        <div v-if="showAudio" class="showmore">
            <!-- <div v-html="artical.hp_title"></div> -->
            
            <div class="anchor" v-html="artical.anchor"></div>
            <div class="playtime" >{{currentTime}}</div>
            <div class="play-controler">
                <div>
                    <Icon type="skip-backward"></Icon>
                </div>
                <div @click="playControl">                        
                    <Icon type="pause" v-if="pause"  ></Icon>
                    <Icon type="play" v-else ></Icon>
                </div>
                <div>
                    <Icon type="skip-forward"></Icon>
                </div>
            </div>
            <div class="play-style">
                <div class="style"  @click="repeat=!repeat">                    
                    <Icon type="ios-reverse-camera-outline" v-if="repeat"></Icon>
                    <Icon type="ios-barcode-outline" v-else></Icon>
                </div>
                <!-- <div class="other" >
                    <Icon type="android-playstore"></Icon>
                </div> -->
                <div class="other" @click.stop.prevent="$emit('ifShowAudio')">
                    <Icon type="android-contract"></Icon>
                </div>                
            </div>
        </div>
        <div v-else class="showless" @click="$emit('ifShowAudio')"><Icon type="disc" class="icon icon-disc"></Icon></div>
    </div>
</template>

<script>
import {Icon} from "iview";
export default {
  name:"AudioIt",
  components:{Icon},
  props:['showAudio','artical','playAudio'],
  data:function(){
      return {
          repeat:false,
          currentTime:0
          }
  },
  watch:{
      playAudio:function(){
          var audio=document.getElementById('audio');
          if(this.playAudio){
              audio.play();
          }else{
              console.log(audio);
              audio.pause();
          }
      }
  },
  methods:{
    playControl:function(){
        this.$emit('ifPlayAudio');
      },
    play_time:function(){
        var audio=document.getElementById('audio');
        // console.log(audio);
        if(audio){              
        var playtime=audio.currentTime;
        // console.log(playtime);
                var hour=parseInt(playtime/3600);
                var min=parseInt((playtime-hour*3600)/60);
                var sedc=parseInt(playtime-hour*3600-min*60);
                if(playtime<60){
                    this.currentTime=sedc+"\"";
                }
                if(playtime<3600){
                    this.currentTime=min+"\'"+sedc+"\"";
                }
                if(playtime>=3600){
                    this.currentTime=hour+":"+min+":"+sedc;
                }
                this.$emit('getCurrentTime',this.currentTime);
        }
    },
    hiddenAudio:function(){
        this.$emit('ifShowAudio')
    }
  },
}
</script>
<style scoped>
    .myaudio{
        display: flex;
        left: 0px;
        z-index: 9999;
    }
    .showmore{
        position: absolute;
        top:0px;
        /* transform: translateY(-40px); */
        margin:0;
        padding:0;
        width:100%;
        background: rgb(245,245,245);
        font-size:20px;
        /* margin-bottom: 10px; */
    }
    #audio{
        width: 100%;
        /* opacity: 0.9; */
    }
    .anchor{
        font-size:80%;
        margin:5px;
    }
    .showless{
        position: absolute;
        right: 0px;
        top:25px;
        height: 0;
        width: 40px;
        border-bottom: solid 18px lightgray;
    }
    .play-controler{
        display: flex;
        justify-content: center;
        letter-spacing: 20px;
    }
    .play-style{
        font-size:30px;
    }
    .style{
        float: left;
        transform: translate(10px,5px);
    }
    .other{
        float: right;
        margin:0 5px;
    }
    .icon-disc{
        /* position: relative;
        right: 30px; */
        font-size: 20px;
        transform: translateX(-20px);
        vertical-align:middle;
    }
</style>

