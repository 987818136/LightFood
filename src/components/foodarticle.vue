  <template>
  <div class="article-item-content" >	
    <router-link :to="'/train/'+articleitem.aid">
    <div class="article-img-item" v-if="articleitem.atype==='img'">
      <div class="article-left"><img :src="articleitem.imgurl"></div>
      <div class="article-right">
        <h5 class="article-title">{{articleitem.title}}</h5>
        <p class="three-line color-p">{{articleitem.description}}</p>
      </div>
    </div>
    <div class="article-simple-item" v-if="articleitem.atype==='letter'">
        <h5 class="article-title">{{articleitem.title}}</h5>
        <p class="three-line color-p">{{articleitem.description}}</p>
    </div>
    </router-link>
   </div>
</template>

<script type="text/javascript">
import swiper from "vue-awesome-swiper";
import banner from "./banner";
export default {
  name: 'foodsarticle',
  props:["articleitem"],
  data:function(){
    return {
    
    }
  },
  methods:{
  
   }
}
</script>

<style type="text/css">
.article-item-content{
  background-color: white;
  padding: 8px 10px;
  margin-bottom: 8px;
}
 .article-img-item,article-simple-item{
  overflow: hidden;
  widows: 100%;
   font-size: 12px;
 }
 .article-title{
  font-size: 16px;
  font-weight: 600;
  padding-bottom:6px;
 }
 
 .article-left{
  width: 40%;
  float: left;
  height: 0px;
  padding-bottom: 33%;
 }
 .article-left img{
  width: 100%;
  padding-bottom: 50%;
 }
 .article-right{
  float: right;
  width: 55%;
  font-size: 12px;
 }
 .three-line{
  overflow:hidden; 
font-size: 12px;
text-overflow:ellipsis;

display:-webkit-box; 

-webkit-box-orient:vertical;

-webkit-line-clamp:3; 
 }
 
</style>