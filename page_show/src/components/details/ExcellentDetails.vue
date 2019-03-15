<template>
    <el-container>
        <el-header>
        <Title></Title>
        </el-header>
        <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/main.html' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>优秀团队&个人</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="radio">
            查看顺序：
            <el-radio-group v-model="reverse">
            <el-radio :label="true">最近时间在后</el-radio>
            <el-radio :label="false">最近时间在前</el-radio>
            </el-radio-group>
        </div>
        <div class="block">
            <el-timeline :reverse="reverse">
                <el-timeline-item v-for="(item,index) in pagenationGroup"
                    :key="index"
                    :timestamp="item.date"
                    :size="theTimeLine.size"
                    :color="theTimeLine.color"
                    placement="top">
                    <el-card v-for="(imge,index) in item.dataArry" :key="index" class="act-card"> 
                        <div class="people-img"><img :src="imge.imgUrl" alt=""/></div>
                        <h4>{{imge.name}}</h4>
                        <p>{{imge.reason}}</p>    
                    </el-card>
                    <div style="clear:both">  </div>
                </el-timeline-item>
            </el-timeline>
        </div>
        <div class="excellent-pagenation">
            <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="dataPagesize"
            :total="excellentGroup.length">
            </el-pagination>
        </div>
        </el-main>
    </el-container>
</template>
<script>
import Title from '../header/headerTitle'
function compare(date1,date2){
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    if(oDate1.getTime() > oDate2.getTime()){
        return true;
    } else {
        return false;
    }

}
//如果某个属性值在对象数组中存在，找到这个对象
function findOne(item,arr){
    let newArr=arr.filter(function(items){
      return  items.key==item;
    });
    if(newArr.length==0){
      let str='此元素不存在';
        return str;
    }
    return newArr;
}

export default {
    components:{
        Title
    },
    data() {
      return {
         dataCurrentPage:1,
         dataPagesize:5,
         reverse:true,
         excellent:[
                    {imgUrl:require('../.././assets/excellent-images/01.jpg'),name:'某项目一期团队',reason:'给公司带来了最大的效益,给公司带来了最大的效益,给公司带来了最大的效益,给公司带来了最大的效益给公司带来了最大的效益,给公司带来',date:'2018-12-12'},
                    {imgUrl:require('../.././assets/excellent-images/02.jpg'),name:'张三',reason:'给公司带来了最大的效益',date:'2019-02-12'},
                    {imgUrl:require('../.././assets/excellent-images/04.png'),name:'李四',reason:'完全达到预期效果',date:'2019-02-15'},
                     {imgUrl:require('../.././assets/excellent-images/02.jpg'),name:'张三',reason:'给公司带来了最大的效益',date:'2019-02-12'},
                    {imgUrl:require('../.././assets/excellent-images/04.png'),name:'李四',reason:'完全达到预期效果',date:'2019-02-15'},
                    {imgUrl:require('../.././assets/excellent-images/03.jpeg'),name:'某项目二期团队',reason:'给公司带来了最大的效益',date:'2019-03-14'},
                    {imgUrl:require('../.././assets/excellent-images/05.jpg'),name:'王超',reason:'给公司带来了最大的效益',date:'2019-03-31'},
                    {imgUrl:require('../.././assets/excellent-images/06.jpeg'),name:'某项目一期团队',reason:'给公司带来了最大的效益',date:'2019-04-01'},
                    {imgUrl:require('../.././assets/excellent-images/07.jpg'),name:'张强',reason:'给公司带来了最大的效益',date:'2019-04-01'},    
                    {imgUrl:require('../.././assets/excellent-images/07.jpg'),name:'张强k',reason:'给公司带来了最大的效益',date:'2018-04-01'},    
            ],
        theTimeLine:{
            size:'large',
            color:'#006666'
        }
      };
    },
    computed:{
        excellentGroup(){
            let arr=this.excellent;
            let newArr=[];
            arr.forEach((ele,index)=>{
              let newDate= ele.date.slice(0,-3);
                if(index==0){
                    let obj={date:newDate,dataArry:[]};
                    obj.dataArry.push(ele);
                    newArr.push(obj);
                }else{
                    let flag=newArr.some(item=>{
                        if(item.date==newDate){ return true}
                    })
                    if(flag){
                        newArr.map((item,index)=>{
                            if(item.date==newDate){
                                item.dataArry.push(ele);
                            }                            
                            return item;
                        });     
                    }else{
                        let obj={date:newDate,dataArry:[]};
                        obj.dataArry.push(ele);
                        newArr.push(obj);
                    }

                }

            });
            newArr.sort((a,b)=>{
                a=new Date(a.date);
                b=new Date(b.date);
                return b.getTime()-a.getTime();
            });
            return newArr;
        },
        pagenationGroup(){
            return this.excellentGroup.slice((this.dataCurrentPage-1)*this.dataPagesize,this.dataCurrentPage*this.dataPagesize)
        }

    },
    methods:{
        handleCurrentChange(val){
            this.dataCurrentPage=val;
        }
    }
}
</script>
<style scoped>
.act-card{
    width:360px;
    height:400px;
    float:left;
}
.people-img{
    width: 320px;
    height:200px;
    margin:auto;
}

.people-img img{
    width:100%;
    height:100%;
}
h4{
    text-align: center;
}
.block{
    margin-top:30px;
}
.radio{
    text-align: right;
}
.excellent-pagenation{
    text-align: right;
}

</style>

