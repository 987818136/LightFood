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
  new scroll(this.$refs.scrollwrap);
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
  padding-top: 45px;
  padding-bottom: 48px;
}
.wraper{
 position: absolute;
 top: 45px;
 width: 100%;
 bottom: 48px;
 overflow: hidden;
 box-sizing: border-box;
 padding: 0 10px;
}
</style>
