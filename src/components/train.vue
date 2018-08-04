c<template>
  <div class="traincontent">	
     <banner></banner>
     <div class="article-content">
        <foodarticle v-for="articleitem in articleList" :articleitem="articleitem"></foodarticle>         
     </div>

   </div>
</template>

<script type="text/javascript">
import swiper from "vue-awesome-swiper";
import banner from "./banner";
import foodarticle from "./foodarticle"
export default {
  name: 'train',
  components:{
   banner,
   foodarticle
  },
  data:function(){
    return {
     articleList:[
      {  
        id:"001",
        title:"it's title 1",
        type:"img",
        imgurl:"../../static/img/food.jpg",
        introduce:"很多人可能觉得吃草就能瘦，但是真的是这样的吗?骑士并不是如此"
      },
      {
        id:"002",
        title:"it's title 1",
        type:"img",
        imgurl:"../../static/img/food.jpg",
        introduce:"很多人可能觉得吃草就能瘦，但是真的是这样的吗?骑士并不是如此"
      },
      {
        id:"003",
        title:"it's title 1",
        type:"letter",
        imgurl:"../../static/img/food.jpg",
        introduce:"this is a letterletterletter a letterletterletter a letterletterletter a letterletterletter a letterletterletter"
      }            
     ]
    }
  },
  methods:{
  
   }
}
</script>

<style type="text/css">
.article-wraper{
  padding-bottom: 70px;
}
	.traincontent{
		padding-bottom: 100px;
    background-color: #f1f1f1;
    
	}
</style>