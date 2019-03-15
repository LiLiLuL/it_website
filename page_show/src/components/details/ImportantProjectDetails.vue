<template>
    <div>
        <Title></Title>
       <el-breadcrumb separator-class="el-icon-arrow-right" class="detail-title">
            <el-breadcrumb-item :to="{ path: '/main.html' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>重点项目详情页</el-breadcrumb-item>
       </el-breadcrumb>
       <p class="main-text">项目报表查看</p>
        <div class="report">
            <div class="echartMVG" > 
                <div id="circle" ></div>
                <div id="projects" :key='sizeKey' ></div>
            </div>
            <div id="yearPie" ></div>
            <div class="search-pie">
                <span class="demonstration">请选择要查看的年</span>
                <el-date-picker
                v-model="selectedYear"
                @change="handleSelectedYear"
                type="year"
                placeholder="选择年"
                value-format="yyyy"
                >
                </el-date-picker>
                <div id="selectedPie">

                </div>
            </div>
        </div>
       <div style="clear:both"></div>
       <p class="main-text">历年重点项目纪要</p>
  
        <div class="search">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" class="search-input" clearable></el-input>
            <el-button type="success" round style="background:#006666">搜 索</el-button>
        </div>
       
        <div style="min-height:1200px">
            <div   v-for="(projects,index) in yearprojects" :key="index"  >
                <p class="year">{{projects.year}}</p>
                <el-card v-for="(item,index) in projects.projects" :key="index" class="box-card">
                <div slot="header" class="clearfix">
                    <span>{{item.name}}</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                </div>
                <div >
                <el-steps :active="item.nowactive" align-center finish-status="success" process-status="process">
                    <el-step v-for="(step,index) in item.steps" :key="index" :title="step.title" :description="step.description">
                    </el-step>
                </el-steps>
                <p><b>项目负责人：</b>{{item.owner}}</p>
                <p >
                    <b> 项目成员：</b><span v-for="(people,o) in item.partner" :key="o">{{people}}，&nbsp;</span>
                </p>
                <p><b>项目介绍：</b>{{item.introduce}}</p>
                </div>
                </el-card>
            </div>
        </div>
         <div class="project-pagination">
            <el-pagination
                background
                layout="prev, pager, next,jumper"
                @current-change="handleCurrentChange"
                :page-size="pagesize"
                :total="pageTotal">
            </el-pagination>
        </div>
    </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
require('echarts/lib/component/title')
   
import {mapGetters, mapState, mapActions} from 'vuex'
import { setTimeout } from 'timers';
import ImportantProject from '../main/ImportantProject'
import Title from '../header/headerTitle'
//对象数组排序
function sortBy(field) {
    return function(a,b) {
        return a[field] - b[field];
    }
}
export default {
    components:{
     ImportantProject,Title
    },
    data(){
        return{ 
            currentPage:1, //初始页
            pagesize:1, 
            pageTotal:'',   //    每页的数据
            projects:[
                {name:'',num:30},
                {name:'',num:30},
                {name:'',num:30},
                {name:'',num:30},
                {name:'',num:30},
            ],
            nums:[
                {year:'2016',data:[30,30,30,40,4]},
                {year:'2014',data:[12,34,23,2,3]},
                {year:'2015',data:[2,3,4,6,10]},
                {year:'2018',data:[12,10,24,9,1]},
                {year:'2017',data:[12,23,45,7,9]},
            ],
            num:[30,30,30,40,4],
            sizeKey:3,
            sizeKey1:5,
            importProject:[
                {
                    name:'重点项目1',
                    owner:'张三',
                    partner:[
                        '李四','王强','何妨','小甲'
                    ],
                    steps:[
                        {title:'步骤1',description:'步骤1的描述'},
                        {title:'步骤2',description:'步骤2的描述'},
                        {title:'步骤3',description:'步骤3的描述'},
                        {title:'步骤4',description:'步骤4的描述'},
                        {title:'步骤5',description:'步骤5的描述'},
                    ],
                    status:['已完成','进行中','待完成'],
                    nowactive:3,
                    introduce:'此项目的目的是为了节源开流，简要叙述项目提出的背景、依据和必要性，以及资源配置、生产力布局现状及规划，外部条件（项目建设所必需的建设条件，如能源，原材料供应，交通运输条件，生产技术及开工建设条件等）、环境评价（是否符合国家产业政策和环境保护法规）、市场分析（项目产品供需现状，主要销售方向及相关产品对本产品的影响，进行优劣势比较，并结合相关产业，提出项目产品发展前景预测及市场价格预测）等'
                },
                {
                    name:'重点项目2',
                    owner:'张三',
                    partner:[
                        '李四','王强','何妨','小甲'
                    ],
                    steps:[
                        {title:'步骤1',description:'步骤1的描述'},
                        {title:'步骤2',description:'步骤2的描述'},
                        {title:'步骤3',description:'步骤3的描述'},
                        {title:'步骤4',description:'步骤4的描述'},
                    ],
                    status:['已完成','进行中','待完成'],
                    nowactive:2,
                    introduce:'此项目的目的是为了节源开流，简要叙述项目提出的背景、依据和必要性，以及资源配置、生产力布局现状及规划，外部条件（项目建设所必需的建设条件，如能源，原材料供应，交通运输条件，生产技术及开工建设条件等）、环境评价（是否符合国家产业政策和环境保护法规）、市场分析（项目产品供需现状，主要销售方向及相关产品对本产品的影响，进行优劣势比较，并结合相关产业，提出项目产品发展前景预测及市场价格预测）等'
                },
                {
                    name:'重点项目3',
                    owner:'张三',
                    partner:[
                        '李四','王强','何妨','小甲'
                    ],
                    steps:[
                        {title:'步骤1',description:'步骤1的描述'},
                        {title:'步骤2',description:'步骤2的描述'},
                        {title:'步骤3',description:'步骤3的描述'},
                    ],
                    status:['已完成','进行中','待完成'],
                    nowactive:2,
                    introduce:'此项目的目的是为了节源开流，简要叙述项目提出的背景、依据和必要性，以及资源配置、生产力布局现状及规划，外部条件（项目建设所必需的建设条件，如能源，原材料供应，交通运输条件，生产技术及开工建设条件等）、环境评价（是否符合国家产业政策和环境保护法规）、市场分析（项目产品供需现状，主要销售方向及相关产品对本产品的影响，进行优劣势比较，并结合相关产业，提出项目产品发展前景预测及市场价格预测）等'
                },
                {
                    name:'重点项目4',
                    owner:'张三',
                    partner:[
                        '李四','王强','何妨','小甲'
                    ],
                    steps:[
                        {title:'步骤1',description:'步骤1的描述'},
                        {title:'步骤2',description:'步骤2的描述'},
                        {title:'步骤3',description:'步骤3的描述'},
                        {title:'步骤4',description:'步骤4的描述'},
                        {title:'步骤5',description:'步骤5的描述'},
                    ],
                    status:['已完成','进行中','待完成'],
                    nowactive:1,
                    introduce:'此项目的目的是为了节源开流，简要叙述项目提出的背景、依据和必要性，以及资源配置、生产力布局现状及规划，外部条件（项目建设所必需的建设条件，如能源，原材料供应，交通运输条件，生产技术及开工建设条件等）、环境评价（是否符合国家产业政策和环境保护法规）、市场分析（项目产品供需现状，主要销售方向及相关产品对本产品的影响，进行优劣势比较，并结合相关产业，提出项目产品发展前景预测及市场价格预测）等'
                }
            ],
            selected:false,
            selectedYear:'2019',
        }            
    },
   watch:{
        widthOrHight(){//监听浏览器页面的高度和宽度
           let that =this;
           const index=1;
           that.sizeKey=that.sizeKey+index;
           that.sizeKey1=that.sizeKey1+index;
           setTimeout(function(){          
                that.drawBar(); //监听到页面变化则需要重新绘制div           
           },400)

        }
   
   },
    mounted(){ 
        this.drawLine();
        window.onresize=()=>{
            return (()=>{
                this.transmissionWidth(document.body.clientWidth);
                this.transmissionHeight(document.body.clientHeight);
            })()
        }
    },
    computed:{
       ...mapState(
           {
            w:state=>state.resize.width,
            h:state=>state.resize.height
           }
       ),
        ...mapGetters('resize',{
            width:'renderWidth', //'别名':'getter'里的方法名
            height:'renderHeight',
        }),
        widthOrHight(){ // 合并宽高，只需要监听一个值变化既可
                 return [this.width,this.height]
        },
        yearprojects(){
           let arr= [
            {year:2019,projects:this.importProject},
            {year:2018,projects:this.importProject},
            {year:2017,projects:this.importProject},
        ];
            this.pageTotal=arr.length;
            return arr.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize);
        },
        totalPage(){
            return   this.yearprojects.length/this.pagesize+1;
        },
        pieText(){
            if(! this.selected){
                return '2018-2019项目完成百分比';
            }else{
                return this.selectedYear;
            }
        }
    },
    methods:{
        ...mapActions('resize',[
            'transmissionWidth','transmissionHeight'
        ]),
        initPage(){
           this.drawLine();
        },
   
        drawBar(){
            let newArr=[];
            this.nums.forEach((item)=>{
                 let obj={type:'bar',name:item.year,data:item.data};
                newArr.push(obj);                 
            });  
             newArr.sort(sortBy("name"));
            // 基于准备好的dom，初始化echarts实例
            let theProjects = echarts.init(document.getElementById('projects'));
            // 绘制柱状图
            theProjects.setOption({
                tooltip: {},
                legend: {},
                title: { 
                    text: '近五年各部门项目数量',
                    textStyle: {
                    color: '#006666'
                    }
                },
                xAxis: {
                    
                    name: '部门',
                    nameLocation:'end',
                    data: ["架构与流程管理部","业务解决方案部","数据与技术平台部","基础架构与运维部","信息安全部"],
                    axisLabel:{
                        //interval:0,//强制显示所有标签
                        formatter : function(params){
                        var newParamsName = "";// 最终拼接成的字符串
                                var paramsNameNumber = params.length;// 实际标签的个数
                                var provideNumber = 4;// 每行能显示的字的个数
                                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                                /**
                                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                                 */
                                // 条件等同于rowNumber>1
                                if (paramsNameNumber > provideNumber) {
                                    /** 循环每一行,p表示行 */
                                    for (var p = 0; p < rowNumber; p++) {
                                        var tempStr = "";// 表示每一次截取的字符串
                                        var start = p * provideNumber;// 开始截取的位置
                                        var end = start + provideNumber;// 结束截取的位置
                                        // 此处特殊处理最后一行的索引值
                                        if (p == rowNumber - 1) {
                                            // 最后一次不换行
                                            tempStr = params.substring(start, paramsNameNumber);
                                        } else {
                                            // 每一次拼接字符串并换行
                                            tempStr = params.substring(start, end) + "\n";
                                        }
                                        newParamsName += tempStr;// 最终拼成的字符串
                                    }

                                } else {
                                    // 将旧标签的值赋给新标签
                                    newParamsName = params;
                                }
                                //将最终的字符串返回
                                return newParamsName
                    }
                    }
                },
                yAxis: {
                    name: '个数',
                    nameLocation:'end',
                },
                series:newArr
            });

        },
        drawPie(){
            let thePie=echarts.init(document.getElementById("yearPie"));
            thePie.setOption({            
                legend: {},
                tooltip: {
                    
                },
                title:{
                    text:'历年项目完成率',
                    textStyle: {
                    color: '#006666'
                    }

                },
                dataset: {
                    source: [
                        ['product', '2012', '2013', '2018','2014', '2015', '2016', '2017'],
                        ['待完成', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,78.1],
                        ['已完成', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1,88.2],
                        ['未完成', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5,33.2],
                        ['推迟', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1,40.5]
                    ]
                },
                series: [{
                    type: 'pie',
                    radius: 80,
                    center: ['15%', '30%']
                    // No encode specified, by default, it is '2012'.
                }, {
                    type: 'pie',
                    radius: 80,
                    center: ['50%', '30%'],
                    encode: {
                        itemName: 'product',
                        value: '2013'
                    }
                }, {
                    type: 'pie',
                    radius: 80,
                    center: ['80%', '30%'],
                    encode: {
                        itemName: 'product',
                        value: '2018'
                    }
                }, 
                {
                    type: 'pie',
                    radius: 80,
                    center: ['30%', '75%'],
                    encode: {
                        itemName: 'product',
                        value: '2014'
                    }
                }, {
                    type: 'pie',
                    radius: 80,
                    center: ['65%', '75%'],
                    encode: {
                        itemName: 'product',
                        value: '2015'
                    }
                }]

            });
            // 基于准备好的dom，初始化echarts实例
            let theCircle=echarts.init(document.getElementById("circle"));
            //绘制饼状图
            theCircle.setOption({
                title: {
                    text: this.pieText,
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#006666'
                    }
                },

                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:21, name:'未完成'},
                            {value:50, name:'已完成'},
                            {value:20, name:'待完成'},
                            {value:13, name:'推迟'},
                        ].sort(function (a, b) { return a.value - b.value; }),
                    
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgb(19, 18, 18)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgb(19, 18, 18)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        // itemStyle: {
                        //     normal: {
                        //         color: '#c23531',
                        //         shadowBlur: 200,
                        //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                        //     }
                        // },

                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            })

        },
        drawCompletionRate(){
             // 基于准备好的dom，初始化echarts实例
            let theCircle=echarts.init(document.getElementById("selectedPie"));
            //绘制饼状图
            theCircle.setOption({
                title: {
                    text: this.selectedYear,
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#006666'
                    }
                },

                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:21, name:'未完成'},
                            {value:50, name:'已完成'},
                            {value:20, name:'待完成'},
                            {value:13, name:'推迟'},
                        ].sort(function (a, b) { return a.value - b.value; }),
                    
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgb(19, 18, 18)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgb(19, 18, 18)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        // itemStyle: {
                        //     normal: {
                        //         color: '#c23531',
                        //         shadowBlur: 200,
                        //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                        //     }
                        // },

                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            })
        },
        drawLine(){
           
            // 绘制柱状图
            this.drawBar();
            //绘制饼状图
            this.drawPie();
            this.drawCompletionRate();
        },
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val;
        window.scrollTo(0,600);
        },
        handleSelectedYear(){
            this.selected=true;
            this.drawCompletionRate();
            console.log(this.selectedYear)

        }
    }
}
</script>
<style scoped>
.echartMVG{
    width:100%;
    height:300px;
}
/* div.echartMVG:after{
    border:2px solid #006666;
    content: '';
    display: block;
    margin-top:5px;
} */
#circle{
    float:right;
    width: 400px;
    height: 100%;
}
#circle::after{
    clear:both;
    content: '';
    display: block;
    visibility: hidden;
}
#projects{
    margin-right:400px;
    height:100%;
    overflow: hidden;
}
.year{
    border-left:10px solid #006666;
    font-size:2.5rem;
    padding-left:10px;
    margin:5px;
    font-weight:900;
}
.project-pagination{
    text-align: right;
    /* min-width:400px; */
}
.search{
    text-align: right;
   
    padding-right:30px;   
}
.search-input{
      width:300px;
      border:1px solid #006666;
}
#yearPie{
   width:60%;
   height: 400px; 
   float: left;
   border-bottom: 1px solid #000;
}
.search-pie{
    float:left;
    height:400px;
    width:40%;
    border-bottom: 1px solid #000;
}
#selectedPie{
    height: 300px;
}
.main-text{
    font-size:2.8rem;
    font-weight:bold;
    text-align:center;
    margin-top:30px;
    text-shadow: 3px 2px 2px #000;
    color:#006666;
}
.report{
   
    overflow: hidden;
}

</style>
