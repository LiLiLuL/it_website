<template>
    <el-container>
        <el-header>
          <Title></Title>
        </el-header>
        <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/main.html' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/main/depdem'}">部门风采</el-breadcrumb-item>
            <el-breadcrumb-item >{{name}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
       </el-breadcrumb>
       <div class="mainContent">
            <div class="steps">
                    <el-steps direction="vertical" :active="activeItem">
                        <el-step v-for="item in theProject.steps" :key="item.id" :title="item.name"></el-step>
                    </el-steps>
            </div>
            <div style="width:60%;">
                <h2>{{theProject.name}}</h2>
                <h3>负责人：{{theProject.owner}}</h3>
                <h4>成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;员：<span v-for="(pro,index) in theProject.partner" :key="index">{{pro}}&nbsp;&nbsp;&nbsp;</span></h4>
                <p>项目详述：{{theProject.sum}}</p>
                <p v-show="theProject.state=='已完成'"> 项目成果：{{theProject.result}}</p>
            </div>
            <div class="progress">  
               <p>{{theProject.state}}</p> 
                <el-progress type="circle" :percentage="percent" color="#006666" class="progress-style"></el-progress>
            </div>             
        </div> 
        </el-main>  
    </el-container>
</template>
<script>
import Title from '../header/headerTitle'
//获得当前的日期yyyy--mm--dd
function getNowDate(){
    let date = new Date();
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
//比较两个日期的大小yyyy--mm--dd
function compare(date1,date2){
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    if(oDate1.getTime() > oDate2.getTime()){
        return true;
    } else {
        return false;
    }

}
export default {
    components:{
        Title
    },
    data(){
       return{
           name:this.$route.query.name,
           title:this.$route.query.newtitle,
           theProject: {
               id:"pro11",
               name:this.$route.query.newtitle,
               startDate:'2018-10-12',
               endDate:'2019-08-12',
               owner:'张三',
               partner:['张子','刘悦','李四','半夏'],
               state:'进行中',
               sum:'项目的概述a',
               result:'项目所得到的成果s',
               steps:[
                   {name:'创建',date:'2018-10-12',id:0,active:false},
                   {name:'需求调研',date:'2018-11-12',id:1,active:false},
                   {name:'供应商选择',date:'2018-12-12',id:2,active:false},
                   {name:'商务',date:'2019-03-31',id:3,active:false},
                   {name:'开发',date:'2019-04-30',id:4,active:false},
                   {name:'测试',date:'2019-06-20',id:5,active:false},
                   {name:'上线',date:'2019-08-12',id:6,active:false},
               ]
               },
       }
    },
    computed:{
        activeItem(){
            let flag='';
            let theDay=getNowDate();
            let arr=this.theProject.steps;
            console.log(arr.length);
            for(let i in arr){
                let result=compare(theDay,arr[i].date);
                if(result){                     
                        arr[i].active=true;
                        flag=arr[i].id;                   
                }
            }
            return flag;
        },
        percent(){
           console.log(this.activeItem);
           let arr=this.theProject.steps.length;
           let theact=this.activeItem+1;
           let res=theact/arr*100;
           res=parseFloat(res.toFixed(2));
           console.log(this.theProject.state)
           return res;
        }
    }
 
}
</script>
<style scoped>
.breadcrumb{
    margin-bottom: 20px;
}
.mainContent{
    display: flex;
    min-height:600px;
}
.steps{
     height: 300px; 
     width:20%;
     padding-top:30px;
}
.progress p{
    text-align: center;
    font-size:1.5rem;
    font-weight: bolder;
    margin-bottom: 5px;
    color:rgb(230, 154, 13);
    border:2px solid #ccc;
    background: #006666;
    border-radius: 8px;
}
.progress-style{
    background: rgb(179, 178, 172);
    border-radius: 50%;
}
</style>
