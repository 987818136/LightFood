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
                <span></span><span>10个</span>
              </div>
            </div>
          </div>
          <div class="user-kcalc">
       	 <div class="user-target-content">
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
      ctx.shadowColor="red";      
      ctx.rect(0,0,width*0.3,10);
      ctx.fillStyle="rgba(255, 41, 41,1)" ;     
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
</style>