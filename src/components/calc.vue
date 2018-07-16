<template>
	<div class="homecontent content">
    <div class="sport-calc-content">
      <h5 class="left-header sport-title title-m">
        <span class="iconfont">&#xe608</span>
        <span>运动量计算</span>
      </h5>
      <choose v-for="(item,index) in this.sportList" :index="index" @fatherdelet='fatherdelet'>
        
      </choose>
     <button class="primary-button add-button" @click="additem">添加运动项目</button>
    </div>                                       
	</div>						
</template>

<script type="text/javascript">
 import choose from "./choose"
	export default {
		name:"calc",
		components:{choose,},
    data:function(){
      return{
        sportList:[
        {
          kcal:0,
          time:0
        }
        ]
      }
    },
    methods:{
      additem:function(){
          this.sportList.push({
          kcal:0,
          time:0
        });
      },
      fatherdelet:function(index){
        this.sportList.splice(index,1);
        console.log(1);
      }
    }
	}
</script>

<style type="text/css">
 .sport-calc-content{
  text-align: center;
 }
 .add-button{
  width: 50%;
  font-size: 16px;
  border-radius: 15px;
 }
 .sport-title{
  border-bottom: 2px solid #F1F1F1;
  padding: 8px 0px;
  margin-bottom: 10px;
 }
  .sport-title span{
    vertical-align: middle;
  }
 .sport-title .iconfont{
  font-size: 48px;
 }
</style>