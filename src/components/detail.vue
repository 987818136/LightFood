<template>
	<div class="sportercontent">
	 <h4>{{this.id}}</h4>
	 <p>{{this.content}}</p>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
	export default {
		name:"detail",
		data:function(){
			return{
			  id:this.$route.params.id,
			  content:"",
			}
		},
		mounted:function(){
			var that=this
	    axios.get('./api/detail.json').then(function(res){
         that.content=res.data[that.id];
    });		
		
		}
		
}
</script>

<style type="text/css">
	
</style>