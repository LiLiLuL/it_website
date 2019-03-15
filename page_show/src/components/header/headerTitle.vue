<template>
    <div class="bodyImg">
       <h1>流程与信息管理中心门户网站</h1>
       <div class="right">
           <h2>TIANMA</h2>
           <div class="logo"> <img src="../../assets/image.png" alt=""/></div>
       </div>
       <div style="clear:both"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.bodyImg{
    background-image: url('../.././assets/head.jpg');
}
/* .bodyImg:after{
    content:'';
    position: absolute;
    top:5px;
    width:96.5%;
    height:90px;
    background-color:rgba(223, 198, 176, 0);
} */
h1{
    font-weight:bolder;
    width:500px;
    float:left;
    color:rgb(0, 84, 159);
    font-size:2rem;
}
h2{
    font-size:3rem;
   margin-block-start: 0.22em;
    margin-block-end: 0em;
    color:rgb(0, 84, 159);
    margin-right:5px;
}
.right{
    display:flex;
    float:right;
}
.logo{
    width:80px;
    height:80px;
}
.logo img{
    width:100%;
    height:100%;
}
</style>
