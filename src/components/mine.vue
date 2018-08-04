<template>
   <div class="minecontent">
       <div class="userinformation bgcolor">
         <div class="user-namecontent">
            <div class="user-img-content">
       	 <img src="../../static/img/kk.jpeg" />
            </div>
            <div class="user-name-content">
              <div class="user-name">
               闪闪发光的sparsh
              </div>
              <div class="user-grary">
                <span class="iconfont">&#xe60e</span><span>10个</span>
              </div>
            </div>
          </div>
          <div class="user-kcalc">
       	 <div class="user-target-content">
             <div class="user-target-letter">
               <span class="user-now">当前瘦身：{{this.usernow}}</span>
               <span class="user-target">目标瘦身：{{this.usertarget}}</span>
             </div>
             <canvas ref="linedraw"  ></canvas>
       	 </div>
          </div>       	 
           <div class="user-sport-data">
            <h5 class="user-sport-tile">累积消耗了</h5>
       	    <div class="user-sport-record">
       	    <div class="user-sport">
       	      <div class="user-sport-num">
       	      	0
       	      </div>
       	      <div class="danwei">
       	      	kCal
       	      </div>
       	    </div>
       	 </div>
        </div>
       </div>
       <div class="mine-handle-content ">
          <div class="handle-li">修改目标</div>
          <div class="handle-li">历史记录</div>
       </div>
    </div>
</template>

<script type="text/javascript">

	export default {
		name:"mine",
		data:function(){
			return {
	     usernow:4.5,
       usertarget:20
			}
		},
     mounted:function(){
      var cav=this.$refs.linedraw;
      var width=document.body.clientWidth-30;
      cav.width=width;
      cav.height=10; 
      var ctx=cav.getContext("2d");
      ctx.beginPath();     
      ctx.shadowBlur=10;
      ctx.shadowColor="#F9BC73";      
      ctx.rect(0,0,width*0.3,10);
      ctx.fillStyle="#F9BC73" ;     
      ctx.fill();
     },
		methods:{
	    
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
}
.user-grary{
       padding-top: 8px;
       font-size: 12px;
}
 
.user-sport-num{
  font-size: 24px;
  padding-right: 10px;
}
.user-sport-num,.danwei{
  float: left;
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

  padding-bottom: 10px;
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
</style>