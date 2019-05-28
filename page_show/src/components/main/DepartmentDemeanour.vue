<template>
    <div>
        <div class="img">
            <img src="../.././assets/organization1.jpg" alt=""/>
            <p>流程与信息化管理中心组织架构图</p>
        </div>
        <el-card v-for="(item,index) in contents" :key="index"  class="content"> 
            <p slot="header"  class="organization">{{item.organization}}</p>
            <el-tabs tab-position="left" >
                <el-tab-pane label="部门人员">
                    <el-table :data="item.data" stripe border style="width: 100%" class="employee">
                        <el-table-column prop="name" label="姓名" ></el-table-column>
                        <el-table-column prop="sex" label="性别" ></el-table-column>
                        <el-table-column prop="group" label="所属组" ></el-table-column>
                      
                        <el-table-column prop="work" label="工作职责" ></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="项目池">
                    <div v-for="(pro,index) in item.projects" :key="index">
                    <p class="status">{{pro.status}}</p>
                    <el-card v-for="(data,index) in pro.data" :key="index" class="project-card"  >
                          <p class="project-name">{{data.name}}</p>
                          <ul>
                              <li>创建时间:{{data.startDate}}</li>
                              <li v-show="pro.status=='已完成'"> 完成时间:{{data.endDate}}</li>
                              <li>负责人:{{data.owner}}</li>
                              <li>成员:<span v-for="(partner,index) in data.partner" :key="index">{{partner}},</span></li>
                              <li>概述：{{data.sum}}</li>
                              <li v-show="pro.status=='已完成'">成果：{{data.result}}</li>
                          </ul>
                          <!-- <button class="find-details">查看详情<i class="icon iconfont icon-gengduo"/></button> -->
                    </el-card>
                    <div style="clear:both"></div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="团建活动">
                    <div v-for="(act,index) in item.activities" :key="index">
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
                </el-tab-pane>
            </el-tabs>
           <router-link class="find-more" 
            :to="{path:'/departInfo',query:{id:index,index}}">查看更多<i class="icon iconfont icon-gengduo"></i></router-link>
    
        </el-card>

    </div>
</template>
<script>
import player from './player'
export default {
    components:{
       player
    },
    data(){
        return {
            show:true,
            contents:[
                {
                    organization:'架构与流程管理部(architecture)',
                    data:[
                     {name:'张三',sex:'女',personalid:'B189564',group:'流程管理组',job:'架构工程师',work:'架构与流程管理'},
                     {name:'李强',sex:'女',personalid:'B189565',group:'流程管理组',job:'架构工程师',work:'架构与流程管理'},
                     {name:'赵四',sex:'男',personalid:'B189566',group:'流程开发支持组',job:'流程开发工程师',work:'流程开发支持'},
                     {name:'张三',sex:'男',personalid:'B189567',group:'流程管理组',job:'架构助理工程师',work:'架构与流程管理'},
                     {name:'王三',sex:'女',personalid:'B189568',group:'流程开发支持组',job:'流程开发工程师',work:'流程开发支持组'},
                    ],
                    projects:[
                        {status:'已完成',data:[
                            {name:'项目1',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目2',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目3',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目4',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目5',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目6',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                        ]},
                        {status:'进行中',data:[
                            {name:'项目11',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目12',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目13',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
                        {status:'待完成',data:[
                            {name:'项目21',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目31',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
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
                        ]}
                    ]
                },
                 {
                    organization:'业务解决方案部(business)',
                    data:[
                     {name:'刘英',sex:'女',personalid:'B149564',group:'财务组',job:'财务',work:'公司财务管理'},
                     {name:'赵丽',sex:'女',personalid:'B149565',group:'供应链组',job:'供应链',work:'供应链管理'},
                     {name:'三三',sex:'男',personalid:'B199566',group:'研发组',job:'研发工程师',work:'研发新流程'},
                     {name:'吉林',sex:'男',personalid:'B139567',group:'消费品事业部',job:'销售',work:'售卖公司产品'},
                     {name:'徐英',sex:'女',personalid:'B109568',group:'制造计划组',job:'制造计划工程师',work:'制造计划制定'},
                     ],
                      projects:[
                        {status:'已完成',data:[
                            {name:'项目1',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目2',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目3',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目4',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目5',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目6',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                        ]},
                        {status:'进行中',data:[
                            {name:'项目11',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目12',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目13',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
                        {status:'待完成',data:[
                            {name:'项目21',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目31',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
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
                        ]}
                    ]
                },
                 {
                     organization:'数据与技术平台部(datatechnology)',
                     data:[
                     {name:'白白',sex:'男',personalid:'B148564',group:'软件开发组',job:'软件开发工程师',work:'软件开发'},
                     {name:'解决',sex:'男',personalid:'B148565',group:'软件开发组',job:'软件开发工程师',work:'软件开发'},
                     {name:'谢颖',sex:'女',personalid:'B198566',group:'应用集成',job:'应用开发工程师',work:'接口开发'},
                     {name:'郝建强',sex:'男',personalid:'B138567',group:'数据管理组',job:'数据分析工程师',work:'数据管理'},
                     {name:'黄少天',sex:'男',personalid:'B108568',group:'数据管理组',job:'数据分析工程师',work:'数据管理'},
                     ],
                      projects:[
                        {status:'已完成',data:[
                            {name:'项目1',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目2',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目3',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目4',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目5',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目6',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                        ]},
                        {status:'进行中',data:[
                            {name:'项目11',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目12',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目13',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
                        {status:'待完成',data:[
                            {name:'项目21',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目31',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
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
                        ]}
                    ]
                },
                 {
                     organization:'基础架构与运维(basis)',
                     data:[
                     {name:'毕业',sex:'男',personalid:'B148964',group:'基础架构组',job:'基础架构工程师',work:'基础架构'},
                     {name:'谢谢',sex:'男',personalid:'B148965',group:'基础架构组',job:'基础架构工程师',work:'基础架构'},
                     {name:'依然',sex:'女',personalid:'B198966',group:'浦东运维组',job:'运维工程师',work:'IT运维'},
                     {name:'伊天',sex:'男',personalid:'B138967',group:'深圳运维组',job:'运维工程师',work:'IT运维'},
                     {name:'蓝河',sex:'男',personalid:'B108968',group:'成都运维组',job:'运维工程师',work:'IT运维'},
                     ],
                      projects:[
                        {status:'已完成',data:[
                            {name:'项目1',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目2',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目3',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目4',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目5',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目6',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                        ]},
                        {status:'进行中',data:[
                            {name:'项目11',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目12',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目13',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
                        {status:'待完成',data:[
                            {name:'项目21',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目31',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
                    ],
                     activities:[
                        {date:'2018-07-12',theme:'阳澄湖大闸蟹',information:[
                            {type:'video',url:require("../.././assets/activities/videos/1.mp4"),poster:require('../.././assets/excellent-images/03.jpeg')},
                            {type:'video',url:require("../.././assets/activities/videos/1.mp4"),poster:require('../.././assets/excellent-images/05.jpg')},
                            {type:'img',url:require('../.././assets/excellent-images/04.png')},
                        ]},
                        {date:'2019-01-01',theme:'欢度元旦！',information:[
                            {type:'img',url:require('../.././assets/excellent-images/01.jpg')},
                            {type:'video',url:require("../.././assets/activities/videos/1.mp4"),poster:require('../.././assets/excellent-images/03.jpeg')},
                            {type:'img',url:require('../.././assets/excellent-images/04.png')},
                        ]}
                    ]
                },
                 {
                     organization:'信息安全部(safety)',
                     data:[
                     {name:'黄河',sex:'男',personalid:'B148574',group:'信息安全组',job:'信息安全工程师',work:'信息安全宣传与维护'},
                     {name:'常江',sex:'男',personalid:'B148575',group:'信息安全组',job:'信息安全工程师',work:'信息安全宣传与维护'},
                     ],
                      projects:[
                        {status:'已完成',data:[
                            {name:'项目1',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目2',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目3',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目4',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目5',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                            {name:'项目6',startDate:'2018-12-12',endDate:'2019-01-10',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述',result:'项目所得到的成果'},
                        ]},
                        {status:'进行中',data:[
                            {name:'项目11',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目12',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目13',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
                        {status:'待完成',data:[
                            {name:'项目21',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                            {name:'项目31',startDate:'2018-12-12',owner:'张三',partner:['张子','刘悦','李四','半夏'],sum:'项目的概述'},
                        ]},
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

                            {type:'img',url:require('../.././assets/excellent-images/07.jpg')},
                        ]}
                    ]
                 
                },

            ],

        }
    },
    updated(){
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


</style>
