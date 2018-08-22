<template>
 <div class="header bgcolor flex-fix">
 	<div class="header-left iconfont" @click="getback">&#xe604</div>
 	<h4>{{this.headertitleson}}</h4>
 	<router-link class="header-right" to="/message"><div class="header-right iconfont">&#xe60d</div></router-link>
 </div>
</template>
<script type="text/javascript">
	export default {
       name:"kcalhead",
       data:function(){
       	return {
       		headertitleson:"热量计算"
       	}
       },
       mounted:function(){
       this.titlechange();
       },
       watch:{
        	$route:function(){
           this.titlechange();
       	}
       },
       methods:{
       	getback:function(){
       		history.back();
       	},
       	titlechange:function(){
       		var mes= this.$route.path;
       		if(mes.indexOf("/train")!=-1){
       			mes="/train";
       		}
       		switch(mes){
       			case "/":
       			this.headertitleson="热量计算";
       			break;       			
       			case "/train":
       			this.headertitleson="健身技巧";
       			break;       			
       			case "/card":
       			this.headertitleson="日常打卡";
       			break;       			
       			case "/mine":
       			this.headertitleson="个人中心";
       			break;       			
       			case "/login":
       			this.headertitleson="登陆";
       			break;
       			case "/reg":
       			this.headertitleson="注册";
       			break;
       			case "/mine/history":
       			this.headertitleson="历史记录";
       			break;
       			case "/mine/reverse":
       			this.headertitleson="修改资料";
       			break;   
       			case "/message":
       			this.headertitleson="消息"; 			       			       			
       		}
       	}
       }
	}
</script>
<style type="text/css">
	.header{
		width: 100%;
		padding: 6px 0px;
		height:25px;
		top: 0;
	}
	.header h4{
   text-align: center;
   flex-grow: 1;
   line-height:25px;
   color: white;
	}
	.header-left,.header-right{
		color: white;
		line-height:25px;
	}
	.header-left{
            width: 8%;
	}
	.header-right{
		width: 8%
	}
</style>