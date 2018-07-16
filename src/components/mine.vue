<template>
	<div class="minecontent">
    
       {{this.$store.state.mes1}}
       <button @click="getchang">get chang</button>
	</div>
</template>

<script type="text/javascript">

	export default {
		name:"mine",
		data:function(){
			return {
	 
			}
		},
		methods:{
			getchang:function(){
				 this.$store.dispatch("ac1","i think i was successful")
			}
		}
	}
</script>

<style type="text/css">
	
</style>