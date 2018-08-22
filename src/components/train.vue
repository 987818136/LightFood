c<template>
  <div class="traincontent">	
     <banner></banner>
     <div class="article-content">
        <foodarticle v-for="articleitem in articleList" :articleitem="articleitem"></foodarticle>         
     </div>

   </div>
</template>

<script type="text/javascript">
import swiper from "vue-awesome-swiper";
import banner from "./banner";
import foodarticle from "./foodarticle";
 import axios from "axios";
export default {
  name: 'train',
  components:{
   banner,
   foodarticle
  },
  data:function(){
    return {
     articleList:[]
    }
  },
    mounted:function(){
      this.getajax();
  },  
    activated:function(){
       this.getajax();
    },  
  methods:{  
    getajax:function(){
      var that=this;
    axios.get("./api/lf/getarticle.php?act=intro").then(function(re){
        that.articleList=re.data;
    });    
    }
  
   }
}
</script>

<style type="text/css">
.article-wraper{
  padding-bottom: 100px;
}
	.traincontent{
		padding-bottom: 100px;
    background-color: #f1f1f1;
    
	}
</style>