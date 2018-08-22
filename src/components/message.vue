<template>
  <div class="messagecontent">	
     <div class="message-item" v-for="item in messList">
       <p>{{item}}</p>
       <button>已读</button>
       <button>删除</button>
     </div>
   </div>
</template>

<script type="text/javascript">
 
export default {
  name: 'train',
  data:function(){
    return {
      messList:["您已经长胖了很多了，快运动吧","您已经长胖了很多了，快运动吧","您已经长胖了很多了，快运动吧"]
    }
  },
  methods:{
   additem:function(type){
 
      },
  },
  computed:{
 
  },
  watch:{
 
  }
}
</script>

<style type="text/css">
.message-item{
  font-size: 12px;
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 0px;
}
.message-item p{
  padding-bottom: 6px;
}
.message-item button{
  width: 48%;
  text-align: center;
  background-color: white;
}
.message-item button+button{
  border-left:1px solid #e1e1e1;
}
.message-item button:active{
  
}
</style>