<template>
	<div class="choosecontent">
    <div class="select-content">
     <div class="my-selected sport-type sport-select" @click="dropdown" >
       <span class="sport-name">{{this.sportType}}</span>
       <span :class="['iconfont',sporticon]"></span>
       <transition name="drop">
       <div class="dropdown" v-show="dropdownshow" >
         <div class="dropdown-li" v-for="item of sportList" @click="lichoose(item.type,item.kcal)">{{item.type}}</div>
       </div>
       </transition>
     </div>
   
     <div class="my-selected time-select"><input type="text" v-model="sportTime" :placeholder="choosetype==='sport'?'运动时间':'食物量'" /><span class="sport-name">
      {{choosetype==='sport'?'分钟':'份'}}</span>
     </div>    
     <button class="primary-button choose-delete" @click="choosedelet">删除</button> 
    </div>
      <div class="kcal-message"><span class="iconfont">&#xe6a0</span><span>{{this.singleKcal+'kCal'}}</span></div>          
	</div>						
</template>

<script type="text/javascript">
 
	export default {
		name:"choose",
    props:['index',"choosetype"],
	 data:function(){
    return {
      sportList:[
      {type:"慢跑",kcal:10.9},
      {type:"快跑",kcal:12}, 
      {type:"跳绳",kcal:7.4},
      {type:"有氧操",kcal:10.1},
      {type:"游泳",kcal:9},
      {type:"跳舞（快）",kcal:6.4},
      {type:"跳舞(慢)",kcal:4.8},
      {type:"散步",kcal:3.8},
      {type:"无氧训练",kcal:7.2}
      ],
      sportkCal:0,
      sportType:"运动类型",
      sportTime:'',
      singleKcal:0,
      dropdownshow:false,
      sporticon:"icon-xialajiantou"
    }
   },
   computed:{
 
   },
   mounted:function(){
    if(this.choosetype==="sport"){
      this.sportList=[
      {type:"慢跑",kcal:10.9},
      {type:"快跑",kcal:12}, 
      {type:"跳绳",kcal:7.4},
      {type:"有氧操",kcal:10.1},
      {type:"游泳",kcal:9},
      {type:"跳舞（快）",kcal:6.4},
      {type:"跳舞(慢)",kcal:4.8},
      {type:"散步",kcal:3.8},
      {type:"无氧训练",kcal:7.2}
      ];
    }
    else{
      this.sportList=[
      {type:"鸡胸肉沙拉",kcal:1296},      
      {type:"果蔬沙拉",kcal:765.5}, 
      {type:"龙利鱼沙拉",kcal:1194.4},
      {type:"水果酸奶沙拉",kcal:824.2},
      {type:"健身小盒",kcal:1924.6},
      {type:"减脂小盒",kcal:1230.4},       
      {type:"玉米紫薯",kcal:236},
      {type:"粗粮抓饭",kcal:210},
      {type:"香辣烤鸡胸",kcal:628},
      {type:"烤龙利鱼",kcal:523},
      {type:"麻辣鸡丝",kcal:729},
      ];
      this.sportType="菜品种类"      
    }
   },
   methods:{
    choosedelet:function(){
      this.$emit("fatherdelet",this.index,this.choosetype);
    },
    dropdown:function(type){
      this.dropdownshow=!this.dropdownshow;
        if(this.sporticon==="icon-xialajiantou"){
          this.sporticon="icon-shangjiantou"
        }
        else{
          this.sporticon="icon-xialajiantou"
        }
    },
    lichoose:function(type,kcal){
       this.sportType=type;
       this.sportkCal=kcal;
    },
   },

   watch:{
    sportTime:function(newnum,old){
      var kcal=this.sportkCal;
     this.singleKcal=newnum*kcal;
    },
    sportkCal:function(newnum){
      var time=this.sportTime;
     this.singleKcal=newnum*time;
    },
    singleKcal:function(newnum){
      this.$emit("datachang",this.index,this.sportTime,newnum,this.choosetype);
    }
   }
	}
</script>

<style type="text/css">
.drop-enter-active, .drop-leave-active {
  transition: opacity .5s;
}
.drop-enter, .drop-leave-to {
  opacity: 0;
}
 .select-content{
   height: 28px;
   padding-left: 10px;
 }
 .choosecontent{
  padding-bottom: 10px;
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
  width:40%;
 }
 .kcal-message{
  margin-top: 5px;
  font-size: 16px;
 }
  .kcal-message .iconfont{
    color: red;
    margin-right: 10px;
  }
 .time-select{
  margin-left:10px;
  width: 30%;
  overflow: hidden;
 }
  .time-select input{
    width: 55%;
    height: 100%;
    float: left;
    padding-left: 8px;
  }
    .time-select input,.time-select span{
      line-height: 25px;
      font-size: 12px;
    }
    .time-select span{
      float: right;
    }
    .time-select input::placeholder{
      font-size: 12px;
    }
.choose-delete{
  width: 20%;
  color: white;
  background-color: #777;
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
.dropdown-li{
  padding-bottom: 6px;
}

</style>