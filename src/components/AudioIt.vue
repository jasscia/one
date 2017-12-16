<template>
    <div class="myaudio">
        <div v-if="showAudio" class="showmore">
            <!-- <div v-html="artical.hp_title"></div> -->
            <audio  id="audio" controls :loop="repeat" src="http://music.wufazhuce.com/lnWLuH7ledvvvT7JhL1cVb1_HxT8"></audio>
            <div class="anchor" v-html="artical.anchor"></div>
            <div class="playtime" v-html="playTime"></div>
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
                <div class="other" >
                    <Icon type="android-playstore"></Icon>
                    <Icon type="android-contract"></Icon>
                </div>                
            </div>
        </div>
        <div v-else class="showless"><Icon type="disc" class="icon icon-disc"></Icon></div>
    </div>
</template>

<script>
export default {
  name:"AudioIt",
  props:['showAudio','artical'],
  data:function(){
      return {
          pause:false,
          repeat:false
          }
  },
  computed:{
      playTime:function(){
          var audio=document.getElementById('audio');
          console.log(audio);
          if(audio){              
            var playTime=audio.currentTime;
            console.log(playTime);
                    var hour=parseInt(playTime/3600);
                    var min=parseInt((playTime-hour*3600)/60);
                    var sedc=(playTime-hour*3600-min*60);
                    if(playTime<60){
                        return sedc+"\"";
                    }
                    if(playTime<3600){
                        return min+"\'"+sedc+"\"";
                    }
                    // if(currentTime){
                        return hour+":"+min+":"+sedc;
                    // }
          }else {return 0};
      }
  },
  methods:{
    playControl:function(){
          this.pause=!this.pause;
          var audio=document.getElementById('audio');
          if(this.pause){
              audio.play();
          }else{
              audio.pause();
          }
      }
  }
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

