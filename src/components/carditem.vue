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
     this.finish=true;
     this.finishmes="已完成";
     this.$emit("finishadd");
   },
   fatherDelete:function(){
    this.$emit("cardremove",this.index);
   }
  }
}
</script>

<style type="text/css">
 
</style>