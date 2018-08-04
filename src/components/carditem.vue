c<template>
  <div class="carditem-content"> 
    <div class="carditem-title">{{carddata.title}}</div>
    <div class="carditem-button">
      <button :class="['confirm-card',{carditemfinish:finish}]" @click="cardFin">{{finishmes}}</button>
      <button class="card-remove" @click="fatherDelete">删除</button>      
    </div>
   </div>
</template>

<script type="text/javascript">
export default {
  name: 'carditem',
  props:["carddata","index"],
  data:function(){
    return {
     finish:false,
     finishmes:"确认完成"
    }
  },
  methods:{
  cardFin:function(){
    if(!this.finish){
     this.finish=true;
     this.finishmes="已完成";
     this.$emit("finishadd");
    }
   },
   fatherDelete:function(){
    this.$emit("cardremove",this.index);
   }
  }
}
</script>

<style type="text/css">
 .carditem-title{
  padding:10px;
 }
 .carditem-content{
  margin-bottom: 15px;
    border-bottom:1px solid #e1e1e1;
    padding-bottom: 10px;
 }
 .confirm-card, .card-remove{
  border-radius: 10px;
  color: white;
 }
 .confirm-card{
  background-color:#15C015;
  width: 40%;
  padding: 4px 0;
 }
 .card-remove{
  width: 20%;
  padding: 5px 0;
  background-color: #777;
 }
 .carditemfinish{
  background-color: #C8C7C7;
 }
</style>