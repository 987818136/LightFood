<template>
  <div class="record-content flex-fix" >\
    <p v-html="finalkcal"></p>    
    <div v-html="message"></div>
    <button @click="recoreto" class="recore-hidden">记录</button>
    <button @click="hiddenme" class="recore-hidden record-re">重新计算</button>
  </div>
</template>

<script>
export default {
  name:"record",
  props:['sportkcal','foodkcal',"usertarget"],
  data:function(){
    return { 
    recoreNum:0,
    fatreduce:0
    }
  },
  methods:{
   hiddenme:function(){
    this.$emit("hiddenrecord")
   },
   recoreto:function(){
    var that=this;
    this.hiddenme();
 
    this.axios.get("./api/lf/getcookie.php").then(function(re){
            var uid=re.data;
            var _data="allconsume="+that.sportkcal+"&allfood="+that.foodkcal+"&reduce="+that.fatreduce/500+"&uid="+uid;
           that.axios.post("./api/lf/recordcalc.php",_data).then(function(re){
              console.log(re.data);
           })
        });   
   }
  },
  computed:{
    finalkcal:function(){
      var _num=this.foodkcal-this.sportkcal;
      this.recoreNum=_num;
      var mess=_num<0?'今日消耗了':'今日堆积了';
      return mess+"<span class='numstrong'>"+Math.abs(_num)+"kCal</span>";
    },
    message:function(){
      var _message="";
      var _num=this.recoreNum;
      var _absnum=Math.abs(_num);
      this.fatreduce=_absnum/7700*1000;
     if(_num<0){
        _message+="<p>很棒噢，"
        _message+="今天减少了<span class='numstrong'>"+this.fatreduce.toFixed(2)+"</span>克脂肪，</p>"
        _message+="<p>离目标靠近了<span class='numstrong'>"+(this.fatreduce/this.usertarget).toFixed(4)+"%</span>。</p>"
      }
      else{
        _message+="<p>还要加油奥 "
        _message+="今天增加了<span class='numstrong'>"+this.fatreduce.toFixed(2)+"</span>克脂肪，</p>"
        _message+="<p>离目标远离了<span class='numstrong'>"+(this.fatreduce/this.usertarget).toFixed(4)+"%</span>。</p>"        
      }
      return _message
    }
  }
}
</script>

<style>
.record-content *{
  color: white;
}
.record-content{
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: block;
  background-image: linear-gradient(120deg, #fda085 0%, #f6d365 100%);
  text-align: center;
}
.record-enter-active, .record-leave-active {
  transition: left .5s;
}
.record-enter, .record-leave-to {
  left:999px;
}
.numstrong{
  color: #15C015;
  font-size:28px;
}
.record-content p{
  padding-bottom: 15px;
}
.recore-hidden{
  width: 40%;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 15px;
  background-color: #15C015;
}
.record-re{
  background-color: #777;
}
</style>
