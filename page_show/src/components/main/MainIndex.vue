<template>
<div>
    <el-menu :default-active="activeIndex" class="nav-menu" mode="horizontal" @select="handleSelect">
    <el-menu-item index="impro">
        <router-link to="/main/impro" >重点项目纪要</router-link>
    </el-menu-item>
    <el-menu-item index="itservice">
        <router-link to="/main/itservice"> IT服务</router-link>
    </el-menu-item>
    <el-menu-item index="depdem">
        <router-link to="/main/depdem"> 部门风采</router-link>
    </el-menu-item>
    <el-menu-item index="exshare">
         <router-link to="/main/exshare"> 心得分享</router-link>
    </el-menu-item>
    </el-menu>
     <router-view></router-view>
</div>


</template>
<script>
export default {
     data() {
      return {
        activeIndex: 'impro',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>
.nav-menu{
    margin-top:-5px;
    /* background: #006666; */
    height: 50px;
    font-weight: bold;
    color:aquamarine;
}
.nav-menu li{
  line-height: 50px;
}
/* .nav-menu li:focus,
.nav-menu li:hover,
.nav-menu li:active{
  background:#006666;
  color:#006666;
} */
.el-menu-item{
  height:46px;
  font-size:1.4rem;
}

.el-menu--horizontal>.el-menu-item.is-active {
    background-color: #006666;
    border-bottom: 2px solid #006666;
    color: #fff;
}
.nav-menu li:after {
    content: '';
    position: absolute; 
    width: 2px;
    height: 40px;
    top:10%;
    right:-1%;
    background-color: #909399;
}
.nav-menu li:last-child::after{
  display: none;
}

</style>
