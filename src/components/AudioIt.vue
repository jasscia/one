<template>
    <div class="myaudio" @click.stop.prevent="playControl">
        <audio  ref="audio" :loop="repeat" 
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
                    <Icon type="play" v-if="playAudio"  ></Icon>
                    <Icon type="pause" v-else ></Icon>
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
        <div v-else class="showless" @click="$emit('ifShowAudio')">
            <div class="disc playing">

                <!-- <Icon type="disc" :class="'icon icon-disc '+playAudio?'playing':''"></Icon> -->
            </div>
        </div>
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
          var audio=this.$refs.audio;
          if(this.playAudio){
              audio.play();
          }else{
            //   console.log(audio);
              audio.pause();
          }
      }
  },
  methods:{
    playControl:function(){
        this.$emit('ifPlayAudio');
      },
    play_time:function(){
        var audio=this.$refs.audio;
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
    animatePlayAudio:function(){

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
        border-bottom: solid 20px lightgray;
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
    .disc{
        width:10px;
        height:10px;
        border:solid 10px;
        border-radius: 50%;
        border-color:red green yellow blue;        
        /* border-top:solid 3px red; */
        transform: translateX(-50%);
        vertical-align:middle;
        opacity: 0.6;
    }
    .playing{        
        transform-origin:center;
        animation: playit 0.5s linear 0 infinite;
    }
    @keyframes playit {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>

