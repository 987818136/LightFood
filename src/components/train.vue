<template>
  <div class="traincontent">	
     {{this.mes1}}___________{{this.mes2}}
   </div>
</template>

<script type="text/javascript">
 import {mapState} from "vuex"
 console.log({...mapState(["mes1"])})
	export default {
		name:"train",
		mounted:function(){
 
		},
		methods:{
 
		},
		computed:{
		  ...mapState(["mes1","mes2"])
		}
	}
</script>

<style type="text/css">
	.traincontent{
		padding-bottom: 100px;
	}
</style>