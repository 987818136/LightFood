<template>
  <div id="app">
    <myhead :headertitle="headertitle"></myhead>
    <div class="wraper" ref="scrollwrap">
     <keep-alive> 
      <router-view/>
     </keep-alive>
    </div>
    <myfoot @footerchange="footerchange"></myfoot>
  </div>
</template>

<script>
import myhead from "./components/kcalhead"
import myfoot from "./components/kcalfooter"
import "./style/all.css"
import "./style/reset.css"
import "./assets/iconfont/iconfont.css"
import scroll from "better-scroll"
export default {
  name: 'App',
  components:{
      myhead,
      myfoot
  },
   mounted:function(){
    console.log(1);
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
    }
  },
  methods:{
    footerchange:function(mes){
        this.headertitle=mes;
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
 top: 42px;
 width: 100%;
 bottom: 0px;
 overflow: hidden;
 box-sizing: border-box;
 
}
</style>
