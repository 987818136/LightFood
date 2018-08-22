<template>
 <div class="reverse-content">
   <div class="primary-input-content">
   	 <label>昵称：</label>
   	 <input type="text"/>
   </div>
   <div class="primary-input-content">
   	 <label>性别：</label>
     <select>
     	<option>男</option>
     	<option>女</option>
     </select>
   </div>
   <div class="primary-input-content">
   	 <label>身高(cm)：</label>
   	 <input type="text"/>
   </div> 
   <div class="primary-input-content">
   	 <label>体重(kg)：</label>
   	 <input type="text"/>
   </div>   
   <div class="primary-input-content">
   	 <label>年龄：</label>
   	 <input type="text"/>
   </div>   
   <div class="reverse-button-group">
      <button class="confirm">确认</button> 
      <button class="cancel">取消</button>
   </div>           
 </div>
</template>
<script type="text/javascript">
	export default {
       name:"reverse",
       props:[ ],
       data:function(){
       	return {
       	}
       },
       methods:{
    
       }
	}
</script>
<style type="text/css">
 .reverse-button-group{
 	text-align: center;
 }
   .reverse-button-group{
   	padding-top: 35px;
   }
  .reverse-button-group  button{
  	width: 30%;
  	text-align: center;
  	color: white;
  	padding:10px 0;
  	border-radius: 15px;
  }
 .reverse-button-group .confirm{
 	margin-right: 15px;
   background-color: #15C015
 }
 .reverse-button-group .cancel{
 	background-color: #777;
 }
</style>