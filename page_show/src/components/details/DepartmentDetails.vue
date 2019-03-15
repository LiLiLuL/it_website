<template>
    <div>
        <Title></Title>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/main.html' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/main/depdem'}">部门风采</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
       </el-breadcrumb>
       <el-tabs tab-position="left" v-model="activeName"  @tab-click="handleClick">
            <el-tab-pane label="部门人员" name="people">
                <el-table :data="data.slice((this.dataCurrentPage-1)*this.dataPagesize,this.dataCurrentPage*this.dataPagesize)" stripe border style="width: 100%" class="employee">
                    <el-table-column prop="name" label="姓名" ></el-table-column>
                    <el-table-column prop="sex" label="性别" ></el-table-column>
                    <el-table-column prop="group" label="所属组" ></el-table-column>
                    
                    <el-table-column prop="work" label="工作职责" ></el-table-column>
                </el-table>
                <div class="project-pagination">
                    <el-pagination
                        background
                        layout="prev, pager, next,jumper"
                        @current-change="handleCurrentChange"
                        :page-size="dataPagesize"
                        :total="data.length"
                       >
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="项目池" name="project">
                <div  >
                <p class="status">进行中</p>
                <el-card v-show="data.status=='进行中'" v-for="(data,index1) in projects" :key="index1" class="project-card"  >
                        <p class="project-name">{{data.name}}</p>
                        <ul>
                            <li>创建时间:{{data.startDate}}</li>
                            <li>负责人:{{data.owner}}</li>
                            <li>成员:<span v-for="(partner,index) in data.partner" :key="index">{{partner}},</span></li>
                            <li>概述：{{data.sum}}</li>   
                        </ul>
                         <router-link :to="{path:'/proInfo',query:{
                            id:data.id,newtitle:data.name,name:title
                        }}" class="find-details">查看详情<i class="icon iconfont icon-gengduo"/></router-link>
                </el-card>
                <div style="clear:both"></div>
                <p class="status">已完成</p>
                <el-card  v-show="data.status=='已完成'" v-for="(data,index2) in projects" :key="index2" class="project-card"  >
                        <p class="project-name">{{data.name}}</p>
                        <ul>
                            <li>创建时间:{{data.startDate}}</li>
                            <li> 完成时间:{{data.endDate}}</li>
                            <li>负责人:{{data.owner}}</li>
                            <li>成员:<span v-for="(partner,index) in data.partner" :key="index">{{partner}},</span></li>
                            <li>概述：{{data.sum}}</li>
                            <li>成果：{{data.result}}</li>
                        </ul>
                        <router-link :to="{path:'/proInfo',query:{
                            id:data.id,newtitle:data.name,name:title
                        }}" class="find-details">查看详情<i class="icon iconfont icon-gengduo"/></router-link>
                </el-card>
                <div style="clear:both"></div>
                <p class="status">待完成</p>
                <el-card v-show="data.status=='待完成'" v-for="(data,index3) in projects" :key="index3" class="project-card"  >
                        <p class="project-name">{{data.name}}</p>
                        <ul>
                            <li>创建时间:{{data.startDate}}</li>
                            <li v-show="data.status=='已完成'"> 完成时间:{{data.endDate}}</li>
                            <li>负责人:{{data.owner}}</li>
                            <li>成员:<span v-for="(partner,index) in data.partner" :key="index">{{partner}},</span></li>
                            <li>概述：{{data.sum}}</li>
                            <li v-show="data.status=='已完成'">成果：{{data.result}}</li>
                        </ul>
                        <router-link :to="{path:'/proInfo',query:{
                            id:data.id,newtitle:data.name,name:title
                        }}" class="find-details">查看详情<i class="icon iconfont icon-gengduo"/></router-link>
                </el-card>
                <div style="clear:both"></div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="团建活动" name="campaign">
                <div v-for="(act,index) in activeData" :key="index">
                    <p class="status"> {{act.date}}</p>
                    <el-card v-for="(imge,index) in act.information" :key="index" class="act-card"> 

                        <div  v-show="imge.type=='img'"  class="act-img">
                        <img :src="imge.url" alt=""/>
                        </div>
                        <div  class="act-video" v-show="imge.type=='video'">
                            <player v-bind:videoUrl="imge.url"  v-bind:poster="imge.poster"></player>
                        </div>

                    </el-card>
                    <div style="clear:both"></div>
                     </div>
                     <div class="project-pagination">
                    <el-pagination
                        background
                        layout="prev, pager, next,jumper"
                         @current-change="handleCurrentChange"
                        :page-size="activesize"
                        :total="activities.length"

                       >
                    </el-pagination>
                </div>
               
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import player from '../main/player'
import Title from '../header/headerTitle'
export default {
    components:{
       player,Title
    },
    data(){
        return {
           pageSize: 30, //总页数 -- 后台传值
　　　　    pageNo: 2,　　//当前页
           TypeId:this.$route.query.index,
           dataPagesize:10,
           dataCurrentPage:1,
           activesize: 2,
           activeCurrentPage:1,
           activeName:'people',        
           data:[
                    {name:'张三',sex:'女',personalid:'B189564',group:'流程管理组',job:'架构工程师',work:'架构与流程管理'},
                    {name:'李强',sex:'女',personalid:'B189565',group:'流程管理组',job:'架构工程师',work:'架构与流程管理'},
                    {name:'赵四',sex:'男',personalid:'B189566',group:'流程开发支持组',job:'流程开发工程师',work:'流程开发支持'},
                    {name:'张三',sex:'男',personalid:'B189567',group:'流程管理组',job:'架构助理工程师',work:'架构与流程管理'},
                    {name:'王三',sex:'女',personalid:'B189568',group:'流程开发支持组',job:'流程开发工程师',work:'流程开发支持组'},
                ],
           projects:[
                    {id:"pro1",name:'项目21',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',status:'待完成'},
                    {id:"pro2",name:'项目31',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',status:'待完成'},
                    {id:"pro3",name:'项目11',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',status:'进行中'},
                    {id:"pro4",name:'项目12',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',status:'进行中'},
                    {id:"pro5",name:'项目13',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',status:'进行中'},
                    {id:"pro6",name:'项目1',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果',status:'已完成'},
                    {id:"pro7",name:'项目2',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果',status:'已完成'},
                    {id:"pro8",name:'项目3',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果',status:'已完成'},
                    {id:"pro9",name:'项目4',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果',status:'已完成'},
                    {id:"pro10",name:'项目5',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果',status:'已完成'},
                    {id:"pro11",name:'项目6',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果',status:'已完成'},
                            
                ],
            activities:[
                        {date:'2018-07-12',theme:'阳澄湖大闸蟹',information:[
                            {type:'img',url:require('../.././assets/excellent-images/01.jpg')},
                            {type:'video',url:require("../.././assets/activities/videos/1.mp4"),poster:require('../.././assets/excellent-images/03.jpeg')},
                            {type:'video',url:require("../.././assets/activities/videos/1.mp4"),poster:require('../.././assets/excellent-images/05.jpg')},
                            {type:'img',url:require('../.././assets/excellent-images/04.png')},
                        ]},
                        {date:'2019-01-01',theme:'欢度元旦！',information:[
                            {type:'img',url:require('../.././assets/excellent-images/01.jpg')},
                            {type:'video',url:require("../.././assets/activities/videos/1.mp4"),poster:require('../.././assets/excellent-images/03.jpeg')},
                            {type:'img',url:require('../.././assets/excellent-images/04.png')},
                        ]},
                        {date:'2019-01-23',theme:'春节畅想！',information:[
                            {type:'img',url:require('../.././assets/excellent-images/01.jpg')},
                            {type:'video',url:require("../.././assets/activities/videos/1.mp4"),poster:require('../.././assets/excellent-images/03.jpeg')},
                            {type:'img',url:require('../.././assets/excellent-images/04.png')},
                        ]}
                    ]
        }
    },
    computed:{
        activeData(){

            let arr=this.activities;
           return arr.slice((this.activeCurrentPage-1)*this.activesize,this.activeCurrentPage*this.activesize)

        },
        projectLength(){
           let len=0;
           this.projects.forEach(ele => {
               len+=ele.data.length;
               
           });
           return len;
        },
        title(){
             let Id=parseInt(this.TypeId);
             switch(Id){
                 case 0:
                 return "架构与流程管理部";
                 break;
                 case 1:
                 return "业务解决方案部";
                 break;
                 case 2:
                 return "数据与技术平台部";
                 break;
                 case 3:
                 return "基础架构与运维部";
                 break;
                 case 4:
                 return "信息安全部"
                 default:
                 break;
             }
        }
    },
    methods:{
        handleClick(tab, event) {
            
            console.log(this.activeName)
        },
        handleCurrentChange(val){
            let name=this.activeName;
            switch(name){
                case 'people':
                return this.dataCurrentPage=val;
                break;
                case 'project':
                return this.projectCurrentPage=val;
                break;
                case 'campaign':
                return this.activeCurrentPage=val;
                default:
                return;
            }
        },
    }
    
}
</script>
<style scoped>

.img{
    text-align: center;
}
.organization{
    font-size:20px;
    font-weight: 700;
    color:#fff;
}
.status{
    padding-left:10px;
    border-left:5px solid #006666;
    font-weight:bold;
    color:#006666; 
}
.project-card{
    width:320px;
    margin:5px;
    float:left;
    border:1px solid #006666;
}
.project-card ul li{
   margin-bottom: 4px;
}
.project-name{
    text-align: center;
    font-weight:bold;
    color:#006666;
}
.find-details{
    float:right;
    border:none;
    background-color:#006666;
    color:#fff;
    font-size:12px;
    margin-bottom: 5px;
    padding:6px 8px;
    border-radius: 5px;
}
.find-details:focus,
.find-details:hover,
.find-details:active{
    background-color:rgb(230, 116, 10); 
}
.content{
    margin-bottom: 10px;
     box-shadow: 2px 2px 3px rgba(0,0,0,0.35);
    -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,0.35);
    -moz-box-shadow: 2px 2px 3px rgba(0,0,0,0.35);
}
.act-img{
    width:135px;
    height:135px;
}
.act-video{
    width:320px;
}
.act-img img{
    width:100%;
    height:100%;
    margin:2px;   
}
.act-card{
    float:left;
}
.project-pagination{
    text-align: right;
    padding-right:40px;
}
</style>
