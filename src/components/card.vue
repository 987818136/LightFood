c<template>
  <div class="cardcontent">	
  	 <div class="carded-day-contetn"><span>已经打卡</span><span>{{finishday}}</span><span>天</span></div>
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
      <button><span>{{finishnum+'/'+alltarget}}</span><span>今日打卡</span></button>
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
     finishday:0
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
   }
  },
  computed:{
  	alltarget:function(){
  		return this.cardList.length;
  	}
  }
}
</script>

<style type="text/css">
 
</style>