<template>
  <div class="login-content">
    <div class="logonwrap"><img src="../../static/img/lflog.png"></div>
   <div class="primary-input-content inputforuser">
     <label>用户名：</label>
     <input type="text" v-model="username" name="username" />
   </div>
   <div class="primary-input-content inputforuser">
     <label>密码：</label>
     <input type="password" v-model="password" name="password" />
   </div>
   <div class="loginbutton-group">
    <button @click="login" class="loginin login-in-use">登录</button>
    <router-link to="/reg">
    <button class="loginin login-un-use">注册</button>    
   </router-link>
   </div>
 </div>
</template>

<script type="text/javascript">
  import axios from "axios"
	export default {
		name:"login",
		data:function(){
			return {
      username:"",
      password:"",
      remeber:false
			}
	  	},
     mounted:function(){

     },
	  	methods:{
	     login:function(){
        var that=this;
        var _string='username=';
        _string+=this.username;
        _string+='&password=';
        _string+=this.password;
        console.log(_string);        
        axios.post("./api/lf/login.php?act=login",_string).then(function(re){
          if(typeof re.data==="string"){
            alert(re.data);
          }
          else{
            that.$router.push('/');
            that.hub.$emit("loginfooter");
            that.hub.$emit("getuser",re.data);
          }
        });
       }
	  	}
	}
</script>

<style type="text/css">
 .login-content{
  padding-top: 100px;
  height:100%;
  box-sizing: border-box;
  background:url("../../static/img/b3.jpg") no-repeat;
  background-size:cover;
 
 }
 .logonwrap{
  text-align: center;
  width: 100%;
 }

 .logonwrap img{
  width: 30%;
 }
</style>