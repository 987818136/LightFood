<template>
	<div class="article-wraper">
	 <h4>{{this.articledata.title}}</h4>
	 <div class="article-information">
	  <span>作者:</span>
	  <span class="article-dataspan">{{this.articledata.author}}</span>
	  <span>时间:</span>
	  <span class="article-dataspan">{{this.articledata.time}}</span>
	 </div>
	 <div class="article-content" v-html="articledata.content">
	 
	 </div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
	export default {
		name:"detail",
		data:function(){
			return{
			  id:this.$route.params.id,
			  articledata:{
			  	title:'吃草并不一定等于瘦',
			  	author:'爱减肥的',
			  	time:'2018-4-23',
			  	content:"<p>爱减肥不一定瘦，爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦爱减肥不一定瘦</p><img src='../../static/img/food.jpg'><p>减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功减肥成功</p>"
			  }
			}
		}
		
}
</script>

<style type="text/css">
    .article-wraper{
    	padding: 15px;
    }
	.article-wraper h4{
	 font-size: 16px;
	 font-weight: 600;
     padding-bottom: 15px;
	}
	.article-information{
		font-size: 12px;
		padding-bottom: 15px;
	}
	.article-information span{
		color: #777;
	}
   .article-dataspan{
   	padding-right: 8px;
    }
    .article-content p{
       padding: 10px 0;
    }
    .article-content img{
        width: 100%;
    }
</style>