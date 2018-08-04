<template>
  <div id="app">
    <myhead :headertitle="headertitle"></myhead>
    <div class="wraper" ref="scrollwrap">
     <keep-alive> 
      <router-view @recordme="recordme"/>
     </keep-alive>
    </div>
    <myfoot @footerchange="footerchange"></myfoot>
    <transition name="record">
     <record v-if="recordshow" :sportkcal="allkcal" :foodkcal="foodkcal" @hiddenrecord="hiddenrecord" :usertarget="usertarget"></record> 
    </transition>       

  </div>
</template>

<script>
import myhead from "./components/kcalhead"
import myfoot from "./components/kcalfooter"
import "./style/all.css"
import "./style/reset.css"
import "./assets/iconfont/iconfont.css"
import scroll from "better-scroll"
 import record from "./components/record"
export default {
  name: 'App',
  components:{
      myhead,
      myfoot,
      record
  },
   mounted:function(){
  new scroll(this.$refs.scrollwrap,{
    click:true
  });
  },
  updated:function(){
  new scroll(this.$refs.scrollwrap,{
    click:true
  });
  },
  data:function(){
    return {
      headertitle:"热量计算",
        recordshow:false,
        usertarget:20,
        allkcal:0,
        foodkcal:0     
    }
  },
  methods:{
    footerchange:function(mes){
        this.headertitle=mes;
    },
    hiddenrecord:function(){
        this.recordshow=false;
    },
    recordme:function(allkcal,foodkcal){
      this.allkcal=allkcal;
      this.foodkcal=foodkcal;
      this.recordshow=true;
    }     
  }
}
</script>

<style>
#app{
 overflow: hidden;
}
.wraper{
 position: absolute;
 top: 37px;
 width: 100%;
 bottom: 0px;
 overflow: hidden;
 box-sizing: border-box;
 
}
</style>
