

<template>
  <swiper :options="swiperOption" @someSwiperEvent="callback">
    <swiper-slide v-for="item in banerlist">
      <img :src="item.imgurl">
      <div class="banneritem-message">this is a message</div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
	<!--<swiper :options="" @someSwiperEvent="">
	  <swiper-slide v-for="item in banerlist" :key="item.id">
	  	 <img :src="item.imgurl" />
	  </swiper-slide>
	   <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>-->
	

<script type="text/javascript">
	export default {
       name:"banner",
       data:function(){
       	return {
       		banerlist:[{id:"001",imgurl:"../../static/img/b1.jpg",mes:""},{id:"002",imgurl:"../../static/img/b2.jpg",mes:""},{id:"003",imgurl:"../../static/img/b3.jpg",mes:""}],
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
    	height: 210px;
    	overflow: hidden;
    	position: relative;
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
</style>