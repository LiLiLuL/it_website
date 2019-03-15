<template>
    <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="(item,index) in images" :key="index">
        <img :src="item.url" class="carousel-img"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data(){
        return {
            images:[
                {name:'',url:require('../.././assets/carousel-images/1.jpeg')},
                {name:'',url:require('../.././assets/carousel-images/2.jpg')},
                {name:'',url:require('../.././assets/carousel-images/3.jpg')},
                {name:'',url:require('../.././assets/carousel-images/4.jpg')},
                {name:'',url:require('../.././assets/carousel-images/5.jpeg')},
                {name:'',url:require('../.././assets/carousel-images/6.jpg')},
            ]
        }
    }
}
</script>
<style scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .carousel-img{
      width:100%;
      height:100%;
  }
</style>
