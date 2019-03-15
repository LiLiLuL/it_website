<template>
    <div>
        <div class="information">
            <h3>
                本年度资料卡
            </h3>
            <el-form :model="annualInformation" ref="annualInformation">
                <el-col :span="12">
                    <el-form-item prop="aim" label="目标：">
                        <span>{{annualInformation.aim}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item prop="requirement" label="要求:">
                        <span>{{annualInformation.requirement}}</span>
                    </el-form-item>
                </el-col>
                <el-form-item prop="description" label="重点项目描述:">
                        <span>{{annualInformation.description}}</span>
                </el-form-item>
            </el-form>     
        </div>
        <el-card v-for="(item,index) in importProject" :key="index" class="box-card">
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
        <a class="find-more"><router-link to="/impro">查看更多<i class="icon iconfont icon-gengduo"></i></router-link></a>
    </div>
</template>
<script>
export default {
    name:'importantproject',
     data() {
      return {
        annualInformation:{
          aim:'完成三大目标任务',
          requirement:'按时、按量完成，若有延迟应当给予适当的理由',
          description:'今年IT共有76个项目，其中主数据项目、大数据BI项目以及研发管理项目是今年的重点项目'
        },
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
        ]
        
      };
    },
    methods: {
    }
}
</script>
<style scoped>
.information{
    color:#006666;
    font-size:20px;
    font-weight:bold;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.35);
    -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,0.35);
    -moz-box-shadow: 2px 2px 3px rgba(0,0,0,0.35);
   
}
.information h3{
    text-align: center;
    font-size: 3rem;
    margin-block-start: 0em;
    margin-block-end: 0em;

}
.information span{
    text-decoration: underline;
}
.box-card{
    box-shadow: 2px 2px 3px rgba(0,0,0,0.35);
    margin-bottom: 10px;
}
.box-card p{
    margin-bottom: 10px;
}
.box-card p:last-child{
    margin-bottom: 2px;
}
.clearfix{
    font-size:20px;
    font-weight: bold;
    color:#006666;
}
.find-more{
    float: right;
}
.find-more:focus,
.find-more:hover,
.find-more:active{
    color:#006666;
    font-weight: bold;
    text-decoration:underline;
}
</style>
