<template>
  <div class="cardcontent">	
  	 <div class="carded-day-content"><span>已经打卡</span><span class="card-num">{{finishday}}</span><span>天</span></div>
     <carditem v-for="item,index in cardList" :carddata="item" :index="index" :uid="uid" :targetid="item.targetid" @cardremove="cardremove" @finishadd="finishadd"></carditem>
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
     <div class="button-finish-group">
      <button 
      :class="['all-unfinishi',{allfinish:allfinish},{hadsend:hadsend}]"
       @click="sendfinish"
       v-html="targetstate">
     </button>
       <transition name="card"  enter-active-class="card-finishmessage-show">
        <div class="card-finish-message" v-show="hadsend"><span class="iconfont">&#xe601</span>很赞，今日完成，打卡+1</div>
       </transition>     
     </div>
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
     cardList:[],
     finishnum:0,
     readyadd:'',
     addshow:"add",
     finishday:0,
     allfinish:false,
     nowstate:0,
     hadsend:false,
     uid:0
    }
  },
     mounted:function(){
      this.getajax();
     },
    activated:function(){
       this.getajax();
    },  
  methods:{
      getajax:function(fn){
        var that=this;
        this.axios.get("./api/lf/getcookie.php").then(function(re){
            var uid=re.data;
            that.uid=uid;
           that.axios.post("./api/lf/cardread.php?act=read","uid="+uid).then(function(re2){
              var _length=re2.data.length-1;
              var _cardis=re2.data[_length].cardis-0;
             that.finishday=re2.data[_length].cardday;
              var _target=re2.data.splice(0,_length);
              that.cardList=_target;
              console.log(_target);
             if(!_cardis==0){
              that.hadsend=true;
              that.nowstate=3;
             }
           });
        });    
      },    
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
    that=this;
    this.cardList.push({target:this.readyadd,targetid:0});
    this.axios.post("./api/lf/cardread.php?act=add","uid="+this.uid+"&target="+this.readyadd).then(function(re){
       that.cardList[that.cardList.length-1][targetid]=re.data;
    });    
   	this.readyadd='';
   	this.getbackadd();
   },
   sendfinish:function(){
    if(this.hadsend){

    }
    else{
    if(this.allfinish){
      this.finishday++;
      this.allfinish=false;
      this.nowstate=3;
      this.hadsend=true;
      var _string="uid="+this.uid+"&cardday="+this.finishday;
         this.axios.post("./api/lf/cardsend.php", _string).then(function(re2){
            console.log(re2.data);   
           });      
     }
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
  .button-finish-group{
    position: relative;
  }
  .card-finish-message{
    position: absolute;
    bottom:0px;
    text-align: center;
    width: 100%;
    opacity: 0;
    color: #666;
  } .card-finish-message span{
    color: #666;
  }
  .card-finishmessage-show{
    animation: card 1.5s
  }
 @keyframes card{
  0% {
    opacity: 0;
    bottom: 0;
  }
  50% {
    opacity: 1;
    bottom: 35px;
  }
  100% {
    opacity: 0;
    bottom: 60px;
  }
}
</style>