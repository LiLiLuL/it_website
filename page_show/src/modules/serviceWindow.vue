<template>
  <div>
    <el-card v-for="(item,index) in organizations" :key="index" class="service-card">
        <p class="region">{{item.region}}</p>
        <ul>
            <li v-for="(sev,index) in item.services" :key="index">
                {{sev.name}}:{{sev.description}}
            </li>
        </ul>
    </el-card>
    <div class="service-card back">
    <el-card  id="key" @click.native="go">
        <h1>看这里</h1>
        <h1>点此进入到首页</h1>
    </el-card>
    </div>
    <div style="clear:both"></div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            organizations:[
                {region:'成都',services:[
                    {name:'服务1',description:'服务一的解释'},
                    {name:'服务2',description:'服务一的解释'},
                    {name:'服务3',description:'服务一的解释'},
                    {name:'服务4',description:'服务一的解释'},
                ]},
                 {region:'武汉',services:[
                    {name:'服务1',description:'服务一的解释'},
                    {name:'服务2',description:'服务一的解释'},
                    {name:'服务3',description:'服务一的解释'},
                    {name:'服务4',description:'服务一的解释'},
                ]},
                 {region:'上海浦东',services:[
                    {name:'服务1',description:'服务一的解释'},
                    {name:'服务2',description:'服务一的解释'},
                    {name:'服务3',description:'服务一的解释'},
                    {name:'服务4',description:'服务一的解释'},
                ]},
                 {region:'深圳',services:[
                    {name:'服务1',description:'服务一的解释'},
                    {name:'服务2',description:'服务一的解释'},
                    {name:'服务3',description:'服务一的解释'},
                    {name:'服务4',description:'服务一的解释'},
                ]},
                 {region:'上海浦西',services:[
                    {name:'服务1',description:'服务一的解释'},
                    {name:'服务2',description:'服务一的解释'},
                    {name:'服务3',description:'服务一的解释'},
                    {name:'服务4',description:'服务一的解释'},
                ]},
                 {region:'厦门',services:[
                    {name:'服务1',description:'服务一的解释'},
                    {name:'服务2',description:'服务一的解释'},
                    {name:'服务3',description:'服务一的解释'},
                    {name:'服务4',description:'服务一的解释'},
                ]},
                 {region:'海外',services:[
                    {name:'服务1',description:'服务一的解释'},
                    {name:'服务2',description:'服务一的解释'},
                    {name:'服务3',description:'服务一的解释'},
                    {name:'服务4',description:'服务一的解释'},
                ]}
            ]
        }
    },
    methods:{
        go(){

            window.location.href = '/main.html'
        }
    }
}
</script>
<style scoped>
li{
  list-style: none;
}
.service-card{
    float: left;
    margin:10px;
    height:400px;
    width:320px;
    border:2px solid #006666;
    box-shadow: 8px -8px 6px 3px #1b202083;   /*上边阴影  红色*/
}
#key{
    width:100%;
    height:100%;
    background-color: #08080879;
    border-radius: 50%;
    color:#fff;
}
h1{
    width:30px;
    margin:0 auto;
    margin-left:-40px;
    margin-right:40px;
    padding-right:10px; 
    border-right:1px solid #fff;
    line-height:40px;
    display: inline-block;  
    font-family: STXingkai; 
    font-weight:900;
    text-shadow: 5px 2px 6px #fff;
}
h1:first-child{
    margin-top:30px;
}

.back{
    border-radius: 50%;

    background-image: url('../pages/main/assets/three.jpeg');
}
#key:hover,
#key:focus,
#key:active{
    
    background-color: #08080800;
}
.region{
    font-size:1.6rem;
    font-weight:bold;
    text-shadow: 3px 2px 6px #000;
}
</style>
