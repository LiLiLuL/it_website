<template>
    <div>
        <fieldset>
            <legend>部门公告</legend>
            <ul class="common-ul"> 
                <li  v-for="(item,index) in notice" :key="index">
                    <span>{{item.title}}</span>
                    <span class="date">{{item.date}}</span>
                </li>
            </ul>
            <a class="find-more">查看更多<i class="icon iconfont icon-gengduo"></i></a>
        </fieldset>
        <!-- <fieldset class="aside-card">
            <legend>快速链接</legend>
            <ul class="common-ul"> 
                <li  v-for="(item,index) in link" :key="index">
                    <i class="icon iconfont icon-gengduo"></i>
                    <a href="item.url">{{item.title}}</a>
                </li>
            </ul>
          
        </fieldset> -->
        <fieldset class="aside-card">
            <legend>优秀团队&个人</legend>
            <ul class="common-ul"> 
                <li  v-for="(item,index) in excellent" :key="index">
                   <div class="left-img">
                      <img :src="item.imgUrl" alt="">
                   </div>
                   <div class="right-text">
                      <p class="excellent-name">{{item.name}}</p>
                      <p class="excellent-reason">{{item.reason}}</p>
                   </div>
                </li>
            </ul>
            <router-link to="/greatInfo" class="find-more">查看更多<i class="icon iconfont icon-gengduo"></i></router-link>
        </fieldset>
    </div>
</template>
<script>
export default {
    data(){
        return {
            notice:[
                {title:'部门公告1',date:'2019-02-01'},
                {title:'部门公告2',date:'2019-02-02'},
                {title:'部门公告3',date:'2019-02-03'},
                {title:'部门公告4',date:'2019-02-04'},
                {title:'部门公告5',date:'2019-02-05'},
                {title:'部门公告6',date:'2019-02-06'},
                {title:'部门公告7',date:'2019-02-07'},
                {title:'部门公告8',date:'2019-02-08'},
            ],
            link:[
                {title:'百度',link:'http://www.baidu.com'},
                {title:'百度',link:'http://www.baidu.com'},
                {title:'百度',link:'http://www.baidu.com'},
                {title:'百度',link:'http://www.baidu.com'},
                {title:'百度',link:'http://www.baidu.com'},
                {title:'百度',link:'http://www.baidu.com'},
            ],
            excellent:[
                {imgUrl:require('../.././assets/excellent-images/01.jpg'),name:'某项目一期团队',reason:'给公司带来了最大的效益,给公司带来了最大的效益,给公司带来了最大的效益,给公司带来了最大的效益给公司带来了最大的效益,给公司带来',date:'2019-02'},
                {imgUrl:require('../.././assets/excellent-images/02.jpg'),name:'张三',reason:'给公司带来了最大的效益',date:'2019-02'},
                {imgUrl:require('../.././assets/excellent-images/04.png'),name:'李四',reason:'完全达到预期效果',date:'2019-02'},
                {imgUrl:require('../.././assets/excellent-images/03.jpeg'),name:'某项目二期团队',reason:'给公司带来了最大的效益',date:'2019-03'},
                {imgUrl:require('../.././assets/excellent-images/05.jpg'),name:'王超',reason:'给公司带来了最大的效益',date:'2019-03'},
                {imgUrl:require('../.././assets/excellent-images/06.jpeg'),name:'某项目一期团队',reason:'给公司带来了最大的效益',date:'2019-04'},
                {imgUrl:require('../.././assets/excellent-images/07.jpg'),name:'张强',reason:'给公司带来了最大的效益',date:'2019-04'},
            ]

        }
    }
}
</script>
<style scoped>
.find-more{
    float: right;
}
.date{
    float: right;
}
.common-ul li{
    margin-bottom: 5px;
}
.common-ul li:focus,
.common-ul li:hover,
.common-ul li:active{
    color:#006666;
    font-weight: bold;
}
.find-more:focus,
.find-more:hover,
.find-more:active{
    color:#006666;
    font-weight: bold;
    text-decoration:underline;
}
.aside-card{
    margin-top:20px;
}
.left-img{
    width:80px;
    height:60px;
    display: inline-block;
}
.left-img img{
    width:100%;
    height:100%;
}
.right-text{
    margin-right:-80px;
    display:inline-block;
    width:200px;
    height:60px;
    overflow: hidden;
}
.excellent-name{
     margin-block-start: 0.1em;
    margin-block-end: 0.2em;
    padding: 0px;
    font-size: 12px;
    font-weight: bold;

}
.excellent-reason{ 
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
</style>
