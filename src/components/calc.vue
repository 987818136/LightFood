<template>
	<div class="homecontent content wrap-content">
    <div class="sport-calc-content">
      <h5 class="left-header sport-title title-m">
        <div class="calc-firse-title">
          <span class="iconfont">&#xe807</span>
          <span>运动量计算</span>
       </div>
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
      <choose v-for="(item,index) in this.sportList" :index="index" @fatherdelet='fatherdelet' @datachang="datachang" choosetype="sport">
      </choose>
     <button class="primary-button add-button" @click="additem('sportList')">添加运动项目</button>
    </div> 
    <div class="sport-calc-content">
      <h5 class="left-header sport-title title-m">
        <div class="calc-firse-title">
          <span class="iconfont">&#xe613</span>
          <span>摄入量计算</span>
       </div>
        <div class="sport-data-content">
          <div class="sport-data-item">
            <div class="sport-data-row"><span>总食物摄取</span></div>
            <div class="sport-data-row"><span>{{this.foodkcal}}</span><span>kCal</span></div>            
          </div>
          <div class="sport-data-item">
            <div class="sport-data-row"><span>建议食物摄取</span></div>
            <div class="sport-data-row"><span>{{this.sugfood}}</span><span>kCal</span></div>            
          </div>                   
        </div>
      </h5>
      <choose v-for="(item,index) in this.foodList" :index="index" @fatherdelet='fatherdelet' @datachang="datachang" choosetype="food">
      </choose>
      <button class="primary-button add-button" @click="additem('foodList')">添加食物</button>      
    </div>   
    <button class="submit primary-button" @click="showrecord">记录</button>  
    <transition name="record">
    <record v-if="recordshow" :sportkcal="allkcal" :foodkcal="foodkcal" @hiddenrecord="hiddenrecord" :usertarget="usertarget"></record>
    </transition>                                                          
	</div>						
</template>

<script type="text/javascript">
 import choose from "./choose"
 import record from "./record"
	export default {
		name:"calc",
		components:{choose,record},
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
          time:0
        }
        ],
        primarykcal:1700,
        sugfood:1600,
        recordshow:false,
        usertarget:20
      }
    },
    methods:{
      additem:function(type){
          this[type].push({
          kcal:0,
          time:0
        });
      },
      fatherdelet:function(index,type){
        this[type+'List'].splice(index,1);
      },
      datachang:function(index,time,kcal,type){
        this[type+'List'][index].time=time;
        this[type+'List'][index].kcal=kcal;
      },
      showrecord:function(){
        this.recordshow=true;
      },
      hiddenrecord:function(){
        this.recordshow=false;
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
      },
      foodkcal:function(){
        var _num=0;
        this.foodList.map(function(item){
         var itemnum=item.kcal-0
         _num+=itemnum;
       });
        return _num;
      }         
    }
	}
</script>

<style type="text/css">
 .sport-calc-content{
  text-align: center;
 }
 .add-button{
  width: 40%;
  font-size: 12px;
  border-radius: 15px;
 }
 .sport-title{
  border-bottom: 2px solid #F1F1F1;

  margin-bottom: 10px;
 }
  .sport-title>span{
    vertical-align: middle;
    font-weight: 500;

  }
 .sport-title .iconfont{
  font-size: 22px;
  color:rgba(34, 34, 34, 0.4);
 }
 .sport-data-content{
  margin-top: 4px;
  padding-top: 6px;
  font-size: 12px;
  display: flex;
background-image: linear-gradient(120deg, #fda085 0%, #f6d365 100%);
 }
 .sport-data-item{
  flex-grow: 1; 

 } 
.sport-data-row{
  text-align: center;
  padding-bottom: 5px;

}
.sport-data-row span{
  color: white;
}
.submit{
  width: 40%;
  margin: 0 auto;
}
.calc-firse-title{
 
  padding: 6px 15px;
}
.calc-firse-title span{
 vertical-align: bottom;
}
.submit{
  display: block;
  margin: 20px auto;
  width: 80%;
  border-radius: 5px;
  padding: 8px 0px;

}
</style>