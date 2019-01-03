<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in banerlist">
      <img :src="slide.imgurl"/>
      <div class="slide-title">{{slide.mes}}</div>
    </swiper-slide>
  </swiper>
</template>

<script type="text/javascript">
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Vue from "vue";
 
	export default {
       name:"banner",
       components:{
        swiper,
        swiperSlide        
       },
       data:function(){
       	return {
       		banerlist:[{id:"001",imgurl:"../../static/img/b1.jpg",mes:"轻食时代助你小蛮腰"},{id:"002",imgurl:"../../static/img/b2.jpg",mes:"瘦腿不只是跑步而已"},{id:"003",imgurl:"../../static/img/b3.jpg",mes:"身材好是什么样的体验"}],
       		swiperOption:{
       			loop:true
       		}
       	}
       },
       methods:{
       	callback:function(){

       	}
       }
	}
</script>
<style type="text/css">
    .swiper-slide{
     height: 0;
    	overflow: hidden;
    	position: relative;
      padding-bottom: 50%;
    }
    .banneritem-message{
    	position: absolute;
    	top: 175px;
    	text-align: center;
    	background-color:rgba(82, 79, 79, 0.6);
    	width: 100%;
    	height: 35PX;
    	line-height: 35PX;
    	color:white;

    }
	.swiper-slide img{
		width: 100%;
	}
  .slide-title{
    position: absolute;
    bottom: 0px;
    background-color: rgba(22, 18, 18, 0.5);
    color: white;
    width: 100%;
    text-align: center;
    padding: 8px 0px;
    font-size: 12px;
  }
</style>