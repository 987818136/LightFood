<template>
  <div class="history-content" >
    <div class="history-item" v-for="item in data">
      <h4 class="history-data-title">{{item.time}}</h4>
      <div class="history-list">
        <li v-for="sonitem in item.staff">{{sonitem}}</li>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:"history",
  props:[ ],
  data:function(){
    return { 
    data:[
      {
        time:"2018-7-13",
        staff:["跑步30分钟","游泳60分钟","蹲起10分钟","沙拉100g","未打卡"]
      },
      {
        time:"2018-7-14",
        staff:["跑步30分钟","沙拉100g","未打卡"]
      },
      {
        time:"2018-7-15",
        staff:["跑步30分钟","游泳60分钟","蹲起10分钟","沙拉100g","打卡"]
      }
    ]
    }
  },
  methods:{
 
  },
  computed:{
 
  }
}
</script>

<style>
 .history-content{
  text-align: center;
 }
 .history-item{
  background-color: white;
  margin-bottom: 15px;
  margin-top: 10px;
 }
  .history-item h4{
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .history-list li{
    text-align: left;
    padding-left: 15px;
    padding-bottom: 8px;
    padding-top: 8px;
    border-bottom: 1px solid #efefef;
  }
</style>
