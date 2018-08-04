<template>
  <div class="record-content flex-fix" >\
    <p>{{this.finalkcal}}</p>    
    <div v-html="message"></div>
    <button @click="hiddenme">我知道了</button>
  </div>
</template>

<script>
export default {
  name:"record",
  props:['sportkcal','foodkcal',"usertarget"],
  data:function(){
    return { 
    recoreNum:0,
    }
  },
  methods:{
   hiddenme:function(){
    this.$emit("hiddenrecord")
   }
  },
  computed:{
    finalkcal:function(){
      var _num=this.foodkcal-this.sportkcal;
      this.recoreNum=_num;
      var mess=_num<0?'今日消耗了':'今日堆积了';
      return mess+Math.abs(_num)+"kCal";
    },
    message:function(){
      var _message="";
      var _num=this.recoreNum;
      var _absnum=Math.abs(_num);
      var _fatreduce=_absnum/7700;
     if(_num<0){
        _message+="<p>很棒噢，"
        _message+="今天减少了<span class='numstrong'>"+_fatreduce.toFixed(2)+"</span>克脂肪，</p>"
        _message+="<p>离目标靠近了<span class='numstrong'>"+(_fatreduce/this.usertarget).toFixed(4)+"%</span>。</p>"
      }
      else{
        _message+="<p>还要加油奥 "
        _message+="今天增加了<span class='numstrong'>"+_fatreduce+"</span>克脂肪，</p>"
        _message+="<p>离目标远离了<span class='numstrong'>"+_fatreduce/this.usertarget+"%</span>。</p>"        
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
  color: red
}
</style>
