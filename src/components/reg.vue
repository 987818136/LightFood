<template>
  <div class="login-content">
   <div class="primary-input-content inputforuser">
     <label>昵称：</label>
     <input type="text" name="username" v-model="username"/>
   </div>
   <div class="primary-input-content inputforuser">
     <label>密码：</label>
     <input type="password" name="password" v-model="password"/>
   </div>
   <div class="loginbutton-group">
    <button class="loginin login-in-use" @click="sendreg">确认</button>
    <button class="loginin login-un-use">取消</button>    
   </div>
 </div>
</template>

<script type="text/javascript">
 import axios from 'axios'
  export default {
    name:"login",
    data:function(){
      return {
        username:"",
        password:""
      }
      },
     mounted:function(){

     },
      methods:{
       sendreg:function(){
 
        var _string='username=';
        _string+=this.username;
        _string+='&password=';
        _string+=this.password;
 
        axios.post("./api/lf/login.php?act=reg",_string).then(function(re){
          console.log(re.data);
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
 }
</style>