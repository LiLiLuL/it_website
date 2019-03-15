<template>
  <div id="index">
     <Carousel />
     <h1>IT-各区域服务窗口</h1>
     <div class="region">
      <Service />
     </div> 
     <Footer></Footer>
  </div>
</template>

<script>
import Carousel from '@/components/header/CarouselPicture'
import Service from '@/modules/serviceWindow'
import Footer from '@/components/footer/footer'
export default {
  name: 'Index',
  components:{Carousel,Service,Footer}
}
</script>

 <style scoped>
.region{
  text-align: center;
  padding-left:5%;
  
}
h1{
  text-align: center;
}

</style>
