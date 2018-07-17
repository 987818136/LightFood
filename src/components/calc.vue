<template>
	<div class="homecontent content">
    <div class="sport-calc-content">
      <h5 class="left-header sport-title title-m">
        <span class="iconfont">&#xe608</span>
        <span>运动量计算</span>
        <div class="sport-data-content">
          <div class="sport-data-item">
            <div class="sport-data-row"><span>运动总时长</span></div>
            <div class="sport-data-row"><span>{{this.alltime}}</span><span>分钟</span></div>            
          </div>
          <div class="sport-data-item">
            <div class="sport-data-row"><span>运动消耗热量</span></div>
            <div class="sport-data-row"><span>{{this.sportkcal}}</span><span>kCal</span></div>            
          </div>
          <div class="sport-data-item">
            <div class="sport-data-row"><span>整体消耗热量</span></div>
            <div class="sport-data-row"><span>{{this.allkcal}}</span><span>kCal</span></div>            
          </div>                    
        </div>
      </h5>
      <choose v-for="(item,index) in this.sportList" :index="index" @fatherdelet='fatherdelet' @datachang="datachang" choosetype="kCal">
      </choose>
     <button class="primary-button add-button" @click="additem">添加运动项目</button>
    </div> 
    <div class="sport-calc-content">
      <h5 class="left-header sport-title title-m">
        <span class="iconfont">&#xe608</span>
        <span>摄入量计算</span>
        <div class="sport-data-content">
          <div class="sport-data-item">
            <div class="sport-data-row"><span>总食物摄取</span></div>
            <div class="sport-data-row"><span>{{this.alltime}}</span><span>分钟</span></div>            
          </div>
          <div class="sport-data-item">
            <div class="sport-data-row"><span>建议食物摄取</span></div>
            <div class="sport-data-row"><span>{{this.sportkcal}}</span><span>kCal</span></div>            
          </div>                   
        </div>
      </h5>
      <choose v-for="(item,index) in this.foodList" :index="index" @fatherdelet='fatherdelet' @datachang="datachang" choosetype="克">
      </choose>
      <button class="primary-button add-button" @click="additem">添加食物</button>      
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
        ],
        foodList:[
        {
          kcal:0,
          weight:0
        }
        ],
        primarykcal:1700
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
      },
      datachang:function(index,time,kcal){
        this.sportList[index].time=time;
        this.sportList[index].kcal=kcal;
      }
    },
    computed:{
      alltime:function(){
        var _num=0;
       this.sportList.map(function(item){
         var itemnum=item.time-0
         _num+=itemnum;
       });
       return _num;
      },
      sportkcal:function(){
        var _num=0;
       this.sportList.map(function(item){
         var itemnum=item.kcal-0
         _num+=itemnum;
       });
       return _num-0;        
      },
      allkcal:function(){
        return this.sportkcal+this.primarykcal;
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
 .sport-data-content{
  font-size: 12px;
  display: flex;
 }
 .sport-data-item{
  flex-grow: 1; 

 } 
.sport-data-row{
  text-align: center;
  padding-bottom: 5px;
}
</style>