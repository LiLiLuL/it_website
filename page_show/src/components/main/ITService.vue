<template>
    <div >
        <el-card v-for="(item,index) in services" :key="index" class="services">
            <div class="service-title"> 
                <h3>{{item.name}}</h3>
            </div>
            <p class="service-owner">{{item.owner}}:{{item.iphone}}</p>
            <div>
                {{item.description}}
            </div>
        </el-card>
        <div style="clear:both"></div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            services:[
                {name:'IT服务1',description:'IT服务相关说明',owner:'张三',iphone:'21-5825'},
                {name:'IT服务2',description:'IT服务相关说明',owner:'张三',iphone:'21-5825'},
                {name:'IT服务3',description:'IT服务相关说明',owner:'张三',iphone:'21-5825'},
                {name:'IT服务4',description:'IT服务相关说明',owner:'张三',iphone:'21-5825'},
                {name:'IT服务5',description:'IT服务相关说明',owner:'张三',iphone:'21-5825'},
                {name:'IT服务6',description:'IT服务相关说明',owner:'张三',iphone:'21-5825'},
            ]
        }
    }
}
</script>
<style scoped>
.services{
    float:left;
    width: 300px;
    border:2px solid #006666;
    background: rgb(136, 190, 183);
    margin:5px;
}
.service-title{
    display: flex;
    justify-content: center;
    align-items: center;
}
.service-owner{
    text-align: right;
}
</style>
