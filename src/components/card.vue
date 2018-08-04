<template>
  <div class="cardcontent">	
  	 <div class="carded-day-content"><span>已经打卡</span><span class="card-num">{{finishday}}</span><span>天</span></div>
     <carditem v-for="item,index in cardList" :carddata="item" :index="index" @cardremove="cardremove" @finishadd="finishadd"></carditem>
     <div class="card-add-content">
       <div class="card-add-button" v-show="addshow==='add'" >
       	 <button @click="showinput">添加目标</button>
       </div>
       <div class="card-add-input" v-show="addshow==='input'">
       	 <input type="" v-model="readyadd" />
       	 <button @click="addtarget">添加</button>
       	 <button @click="getbackadd">取消</button>
       </div>
     </div>
      <button 
      :class="['all-unfinishi',{allfinish:allfinish},{hadsend:hadsend}]"
       @click="sendfinish"
       v-html="targetstate">
     </button>
   </div>
</template>

<script type="text/javascript">
import carditem from "./carditem"
export default {
  name: 'train',
  components:{
   carditem,
  },
  data:function(){
    return {
     cardList:[{title:'跑步40分钟'},{title:'只吃一份500g沙拉'},{title:'平板支撑20分钟'}],
     finishnum:0,
     readyadd:'',
     addshow:"add",
     finishday:0,
     allfinish:false,
     nowstate:0,
     hadsend:false
    }
  },
  methods:{
   cardremove:function(x){
    this.cardList.splice(x,1);
   },
   finishadd:function(){
   	this.finishnum++;
   },
   showinput:function(){
   	this.addshow="input";
   },
   getbackadd:function(){
   	this.addshow="add";
   },
   addtarget:function(){
   	this.cardList.push({title:this.readyadd});
   	this.readyadd='';
   	this.getbackadd();
   },
   sendfinish:function(){
    if(this.allfinish){
      this.finishday++;
      this.allfinish=false;
      this.nowstate=3;
      this.hadsend=true;
    }
   }
  },
  computed:{
  	alltarget:function(){
  		return this.cardList.length;
  	},
    targetstate:function(){
      if(this.nowstate===0){
       return "<span>"+this.finishnum+'/'+this.alltarget+"</span><span>今日打卡</span>";
      }
      else if(this.nowstate===1){
        return "<span>"+this.finishnum+'/'+this.alltarget+"</span><span>今日打卡</span>";
      }
      else{
        return "已经全部打卡"
      }
    }
  },
  watch:{
    finishnum:function(newnum,old){
      if(newnum===this.alltarget){
        this.allfinish=true;
        this.nowstate=1;
      }
    }
  }
}
</script>

<style type="text/css">
  .cardcontent{
    text-align: center;
    padding-bottom: 70px;
  }
 .carded-day-content{
  padding: 8px;
  font-size: 16px;
  box-shadow:0px 1px 19px rgba(171, 162, 162, 0.5);
  margin-bottom:10px;
 }
 .card-num{
  font-weight: 600px;
  color: green;
  padding: 0 4px;
 }
 .all-unfinishi{
  background-color:#C8C7C7;
  width: 60%;
  padding: 4px 0;
  border-radius: 10px;
  margin-top: 15px;
 }
  .all-unfinishi span{
  color: white;
  }
  .allfinish{
  background-color: #15C015;
  color: white;
 }
 .hadsend{
  background-color: #C8C7C7;
  color: white;
 }
 .card-add-button button{
  background-color: #777;
  width: 40%;
  padding: 4px;
  border-radius: 10px;
  color: white;
 }
 .card-add-input input{
  padding: 2px 4px;
  border:1px solid #777;
  width: 40%;
    border-radius: 10px;
 }
  .card-add-input button{
    background-color: #777;
    width: 20%;
    padding: 4px 0px;
  }
</style>