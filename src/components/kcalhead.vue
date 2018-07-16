<template>
 <div class="header bgcolor">
 	<div class="header-left iconfont">&#xe604</div>
 	<h4>{{this.headertitle}}</h4>
 	<div class="header-right iconfont">&#xe60d</div>
 </div>
</template>
<script type="text/javascript">
	export default {
       name:"kcalhead",
       props:['headertitle'],
       data:function(){
       	return {
       	}
       }
	}
</script>
<style type="text/css">
	.header{
		display: flex;
		position: fixed;
		width: 100%;
		padding: 6px 0px;
		height: 30px;
		top: 0;
        z-index: 99999;
	}
	.header h4{
   text-align: center;
   flex-grow: 1;
   line-height: 30px;
   color: white;
	}
	.header-left,.header-right{
		color: white;
	}
	.header-left{
            width: 8%;
	}
	.header-right{
		width: 8%
	}
</style>