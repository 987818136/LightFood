<template>
   <div class="minecontent">
       <div class="userinformation bgcolor">
         <div class="user-namecontent">
            <div class="user-img-content">
       	 <img src="../../static/img/kk.jpeg" />
            </div>
            <div class="user-name-content">
              <div class="user-name">
               {{userdata.name}}
              </div>
              <div class="user-grary">
                <span class="iconfont">&#xe60e</span><span>{{userdata.honner+'个'}}</span>
              </div>
            </div>
          </div>
          <div class="user-kcalc">
       	 <div class="user-target-content">
             <div class="user-target-letter">
               <span class="user-now">当前瘦身：{{userdata.nowreduce}}</span>
               <span class="user-target">目标瘦身：{{userdata.targetreduce}}</span>
             </div>
             <canvas ref="linedraw" ></canvas>
       	 </div>
          </div>  
          <div class="user-sport-group">
           <div class="user-sport-data">
            <h5 class="user-sport-tile">累积消耗了</h5>
            <div class="user-sport-record">
            <div class="user-sport">
              <div class="user-sport-num">
               {{userdata.allconsume}}
              </div>
              <div class="danwei">
                kCal
              </div>
            </div>
            </div>
           </div>  
           <div class="user-sport-data">
            <h5 class="user-sport-tile">累积摄入了</h5>
            <div class="user-sport-record">
            <div class="user-sport">
              <div class="user-sport-num">
                {{userdata.allfood}}
              </div>
              <div class="danwei">
                kCal
              </div>
            </div>
            </div>
           </div>
          </div>     	 
       </div>
       <div class="mine-handle-content ">
          <div class="handle-li"  @click="changetargetshow">
            <span v-show="!targetshow">修改目标</span>
            <div class="card-add-input" v-show="targetshow">
             <input type="" />
             <button @click.stop="changetarget">添加</button>
             <button @click.stop="hiddenchange">取消</button>
            </div>
          </div>
          <router-link to="/mine/history">
          <div class="handle-li">历史记录</div>
          </router-link >
          <router-link to="/mine/reverse">          
          <div class="handle-li">修改资料</div>
          </router-link >
          <div class="handle-li" @click="loginout">退出登录</div>
       </div>
    </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
	export default {
		name:"mine",
		data:function(){
			return {
       targetshow:false,
       uid:0,
       userdata:{}
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
        axios.get("./api/lf/getcookie.php").then(function(re){
            var uid=re.data;
           axios.post("./api/lf/getuserinfo.php","uid="+uid).then(function(re2){
               that.userdata=re2.data;
               console.log(re2.data);
               that.drawline(re2.data.nowreduce,re2.data.targetreduce)
           })
        });    
      },
     drawline:function(now,target){
      var cav=this.$refs.linedraw;
      var per=now/target;

      var width=document.body.clientWidth-30;
      cav.width=width;
      cav.height=10; 
      var ctx=cav.getContext("2d");
      ctx.beginPath();     
      ctx.shadowBlur=10;
      ctx.shadowColor="#F9BC73";      
      ctx.rect(0,0,width*per,10);
      ctx.fillStyle="#F9BC73" ;     
      ctx.fill();
     },
	   changetargetshow:function(){
      this.targetshow=true;
     },
     hiddenchange:function(){
      this.targetshow=false;
     },
     changetarget:function(){
       this.hiddenchange();
     },
     loginout:function(){
        this.$router.push('/login'); 
        axios.get("./api/lf/login.php?act=loginout").then(function(re){
          console.log(re.data);
        });      
     }
		}
	}
</script>

<style type="text/css">
.user-namecontent,.user-sport-record,.user-sport{
  overflow: hidden;   
}
.user-namecontent{
   padding-top: 10px;
}
.user-namecontent  *{
       color: white;
}
.user-img-content{
   padding-left: 15px;
   float: left;
}
.user-img-content img{
   width: 65px;
   border-radius:65px;
}
.user-name-content{
   float: left;
   padding-left: 15px; 
}
.user-name{
   font-size: 14px;
   padding-top: 8px;
}
.user-target-content{
padding:15px;
text-align: center;
}
.user-target-content canvas{
  border:2px solid white;
  border-radius: 15px;
  width: 100%;
  height: 10px;
}
.user-grary{
       padding-top: 8px;
       font-size: 12px;
}
 
.user-sport-record .user-sport-num{
  font-size: 20px;
  padding-right: 10px;
  color:#FF9857;
}
.user-sport-num,.danwei{
  float: left;
  font-size: 12px;
}
.handle-li{
  padding-left: 15px;
  padding-top: 10px;
  font-size: 14px;
  padding-bottom: 10px;
  
}
.userinformation{
background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}
.user-grary span{
  vertical-align: middle;
  margin-right: 10px;
}
.user-grary .iconfont{
  color:yellow;
}
.user-sport-data{
  padding-left: 15px;
 float: left;
  padding-bottom: 10px;
  width: 40%;
}
.user-sport-data *{
  color: white;
}
.user-sport-group{
  overflow: hidden;
}

.user-now{
  float: left;
}
.user-target{
  float: right;
}
.user-target,.user-now{
  font-size: 12px;
  padding-bottom: 4px;
  color:white;
}
.handle-li{
  border-bottom: 1px solid #e1e1e1;
}
.card-add-input{
  text-align: center;
}
 .card-add-input button{
  background-color: #777;
  width: 40%;
  padding: 4px;
  border-radius: 10px;
  color: white;
 }
  .card-add-input button{
    background-color: #777;
    width: 20%;
    padding: 4px 0px;
  }

</style>