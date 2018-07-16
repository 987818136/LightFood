<template>
	<div class="choosecontent">
    <div class="select-content">
     <div class="my-selected sport-type sport-select" @click="dropdown">
       <span class="sport-name">{{this.sportType}}</span>
       <span :class="['iconfont',sporticon]"></span>
       <div class="dropdown" v-if="dropdownshow">
         <div class="dropdown-li" v-for="item of sportList">{{item.type}}</div>
       </div>
     </div>
     <div class="my-selected sport-time time-select" @click="dropdown">
       <span class="sport-name">{{this.timeString}}</span>
       <span :class="['iconfont',timeicon]"></span>
       <div class="dropdown">
         <div class="dropdown-li" v-for="item of timelist"></div>
       </div>
     </div>    
     <button class="primary-button choose-delete" @click="choosedelet">删除</button> 
    </div>
      <div class="kcal-message"><span class="iconfont">&#xe6a0</span><span>{{this.singleKcal+'Kcal'}}</span></div>          
	</div>						
</template>

<script type="text/javascript">
 
	export default {
		name:"choose",
    props:['index'],
	 data:function(){
    return {
      sportList:[
      {type:"慢跑",kcal:0},
      {type:"快跑",kcal:0},
      {type:"跳绳",kcal:0},
      {type:"有氧操",kcal:0},
      {type:"游泳",kcal:0},
      {type:"跳舞（快）",kcal:0},
      {type:"跳舞(慢)",kcal:0},
      {type:"散步",kcal:0},
      {type:"无氧训练",kcal:0}
      ],
      timelist:[],
      sportType:"请选择运动类型",
      sportTime:0,
      singleKcal:0,
      dropdownshow:false,
      sporticon:"icon-xialajiantou",
      timeicon:"icon-xialajiantou",
    }
   },
   computed:{
    timeString:function(){
      return this.sportTime+"分钟"
    }
   },
   methods:{
    choosedelet:function(){
      this.$emit("fatherdelet",this.index);
    },
    dropdown:function(type){
      this.dropdownshow=!this.dropdownshow;
      if(type==="sport"){
        if(this.sporticon==="icon-xialajiantou"){
          this.sporticon="icon-shangjiantou"
        }
        else{
          this.sporticon="icon-xialajiantou"
        }
      }
      else{
        if(this.sporticon==="icon-xialajiantou"){
          this.sporticon="icon-shangjiantou"
        }
        else{
          this.sporticon="icon-xialajiantou"
        }        
      }
    }
   }
	}
</script>

<style type="text/css">
 .select-content{
   height: 28px;
 }
 .choosecontent{
  padding-bottom: 20px;
    font-size: 12px;
 }
 .my-selected{
  float: left;
  height: 25px;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  line-height: 25px;
  position: relative;
 }
 .sport-select{
  width:45%;
 }
 .kcal-message{
  margin-top: 10px;
  font-size: 16px;
 }
  .kcal-message .iconfont{
    color: red;
    margin-right: 10px;
  }
 .time-select{
  margin-left:10px;
  width: 25%;
 }
.choose-delete{
  width: 20%;
  color: white;
  background-color: #FF9B0B;
  border-radius: 5px;
  float: left;
  margin-left: 10px;

}
.my-selected span{
  vertical-align: middle;
}
.my-selected:active{
  border-color: #524F4F;
}
.dropdown{
  position: absolute;
  top:28px;
  z-index: 9999;
  width: 100%;
  text-align: center;
  background-color: white;
}
</style>