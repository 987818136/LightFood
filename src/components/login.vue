<template>
   <div class="login-content">
     <p>
      您尚未登录，请
      <router-link  to="/loginin">登录</router-link>
      <span>/</span>
      <router-link  to="/loginme">注册</router-link>
     </p>
   </div>
</template>

<script type="text/javascript">

	export default {
		name:"mine",
		data:function(){
			return {
 
			}
		},
     mounted:function(){

     },
		methods:{
	    
		}
	}
</script>

<style type="text/css">
  .login-content{
    width: 100%;
    padding-top: 50%;
  }
  .login-content p{
    text-align: center;
  }
    .login-content a{
      color: blue;
      font-weight: 600;
    }
</style>