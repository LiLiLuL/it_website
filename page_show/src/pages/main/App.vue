<template>

    <div class="router">
      <router-view/>
    </div>
   
  
</template>

<script>
 import Index from '@/components/index'
export default {
  name: 'App',

}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
ul{
  padding-inline-start: 0px;
}
li{
  list-style: none;
}
p{
  margin-block-start: 0em;
  margin-block-end: 0em;
}
a:-webkit-any-link {
  text-decoration: none;
}
.el-form-item__content {
    font-size: 18px;
}
.el-step__head.is-success {
    color:#006666;
    border-color: #006666;
}
.el-step__description.is-success{
  color:#006666;
}
.el-step__title.is-success{
    color:#006666;
}
.el-step__head.is-process {
    color: #cc871f;
    border-color: #cc871f;
}
.el-step__description.is-process {
    color: #cc871f;
}
.el-step__title.is-process {
    color: #cc871f;
}
div.content>.el-card__header {
    background: #006666;
    padding: 12px 14px;
}
.el-tabs__item.is-active {
    color: #fff;
     text-shadow: 3px 3px 3px #000;
     background-color:#006666d0;
}
.el-tabs__active-bar{
    background-color: #006666;
}
.el-tabs__item:hover{
    color: #006666;
     text-shadow: 3px 3px 3px #000;
}
.el-table thead{
    color:#006666;
    text-align: center;
}
.vjs-custom-skin > .video-js .vjs-big-play-button {
    background-color: rgba(0,0,0,0.45);
    font-size: 3.5em;
    border-radius: 50%;
    height: 1.5em!important;
    line-height: 1.5em !important;
    margin-top: -1em !important;
    width: 1.5em;
    top:54%;
    left:60%;
   
}
.find-more{
  float:right;
}
.find-more:focus,
.find-more:hover,
.find-more:active{
    color:#006666;
    font-weight: bold;
    text-decoration:underline;
}
.el-timeline-item__timestamp{
    color:rgb(0, 84, 159);
    font-weight:bolder;
    font-size:24px;
}
.el-timeline-item__tail {
    border-left: 2px solid rgb(0, 84, 159);
}
.el-tabs--left .el-tabs__item.is-left{
    font-size:1rem;
    font-weight:900;
}
.el-breadcrumb {
    font-size: 1.4rem;
    margin-top:20px;
    margin-bottom: 15px;
   
}
</style>

