<template>
    
    <el-container>
      <el-header height="120px"> 
         <Title></Title>      
        <div class="box">
        <p class="notice">
          <i class="icon iconfont icon-tongzhi" ></i>
          <span>{{notice.text}}</span>
          <a href="notice.url">戳这里了解详情</a>
        </p>
        </div>
      </el-header>
      <el-container>
        <el-main>
          <MainIndex/>
        </el-main>
        <el-aside width="300px">
          <AsideIndex />
        </el-aside>
      </el-container>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  
</template>
<script>
import Carousel from './header/CarouselPicture'
import Title from './header/headerTitle'
import AsideIndex from './aside/AsideIndex'
import MainIndex from './main/MainIndex'
import Footer from './footer/footer'
export default {
    components:{
      Carousel,AsideIndex,MainIndex,Footer,Title
    },
    data(){
      return {
        notice:{ text:'MDM系统已经上线啦！欢迎各位小伙伴们来了解哦~',url: 'http://baidu.com'}
      }
    }
}
</script>
<style scoped>
.el-header{
  min-height:60px ! important;
}
.box{
  width:100%;
  height:32px;
  margin-top:2px;
  border-top:1px solid #006666;
  border-bottom:1px solid #006666;
}
.notice{
  height:30px;
  line-height: 30px;
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  color:red;
   margin-top:-1px;
   animation: 20s wordsLoop linear infinite normal;
 }
 @keyframes wordsLoop {
            0% {
                transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
            }
            100% {
                transform: translateX(300%);
                -webkit-transform: translateX(300%);
            }
        }
 
@-webkit-keyframes wordsLoop {
             0% {
                transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
            }
            100% {
                transform: translateX(300%);
                -webkit-transform: translateX(300%);
            }
        }
</style>
