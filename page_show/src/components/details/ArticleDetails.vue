<template>
    <el-container>
        <el-header><Title></Title></el-header>
        <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/main.html' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/main/exshare'}">心得分享</el-breadcrumb-item>
                <el-breadcrumb-item>{{articleTheTitle}}</el-breadcrumb-item>
           </el-breadcrumb>
           <p class="search">
               <el-input size="medium" class="article-search" placeholder="请输入文章标题" ></el-input>
               <el-button type="success">搜索</el-button>
           </p>
           <el-col :span="4" class="readlist">
                <fieldset>
                    <legend>阅读排行榜</legend>
                    <ul>
                        <li v-for="(item,index) in readlist" :key="index" @click="goArticleInfo(item)" >                                  
                                <span name="theOne">{{index+1}}.{{item.title}}</span>  
                                <span>阅读（{{item.num}}）</span>
                        </li> 
                    </ul>
                </fieldset>
            </el-col>
            <el-col :span="20">
                <div class="read-head">
                    <el-col :span="15" >
                        <div class="head-img">
                        <img :src="article.imgUrl" alt="" >
                        </div>
                        <h3>{{article.title}}</h3>
                        <p class="author">作者：{{article.author}}</p>
                    </el-col>
                    <el-col :span="5">
                        <calendar></calendar>
                    </el-col>
                </div>  
                <div style="clear:both"></div>
                <div class="content">
                    {{article.content}}
                    <p class="basis-info"> 发表于{{article.date}},{{article.author}} &nbsp;&nbsp;阅读（{{article.num}}）</p>
                </div>
                <div class="split"></div>
                <div class='comment'>
                        <el-button type="success" class="comment-button" @click="dialogFormVisible = true"><i class="icon iconfont icon-pinglun"></i> &nbsp;&nbsp;发表评论</el-button>
                        <el-dialog title="评论" :visible.sync="dialogFormVisible" class="comment-dialog">
                            <el-form :model="form">
                                <el-form-item label="昵称" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="评论内容" :label-width="formLabelWidth">
                                    <el-input type="textarea" :rows="4" v-model="form.content"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button type="warning" @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="success" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                        <ul class="comments">
                            <li v-for="(item,index) in comments" :key="index">
                            <p> {{item.name}}说：{{item.comment}}</p>
                                <a class="find-more"  @click="dialogFormVisible = true"><i class="icon iconfont icon-pinglun"></i> 评论</a>
                            </li>
                        </ul>
                </div>
            </el-col>
        </el-main>
    </el-container>
</template>
<script>
import Title from '../header/headerTitle'
import calendar from '../main/calendar'
import {mapGetters, mapState, mapActions} from 'vuex' 
export default {
    components:{
        Title,calendar
    },
    data(){
        return{
            title:this.$route.query.articleTitle,
            indexId:this.$route.query.articleId,
             readlist:[
                {title:'mysql的解压缩方式安装和彻底删除',num:234},
                {title:'vue语法之is特性',num:230},
                {title:'node如何配置在nginx上',num:204},
                {title:'常遇见的浏览器兼容小bug',num:199},
                {title:'office简单小技巧',num:187},
                {title:'邮件的轻松使用方式',num:162},
                {title:'大数据的深度思考',num:150},
                
            ],
            dialogFormVisible: false,
            form: {
              name: '',
              content:''
            },
            formLabelWidth: '100px',
            comments:[
                {name:'张三',comment:'今天真的是个好天气'},
                {name:'张三',comment:'今天真的是个好天气'},
                {name:'张三',comment:'今天真的是个好天气'},
                {name:'张三',comment:'今天真的是个好天气'},
                {name:'张三',comment:'今天真的是个好天气'},
            ]
        }
    },
    computed:{
    ...mapState({
        articleId:state=>state.article.index,
        articleTheTitle:state=>state.article.title,
    }),
    article(){
       return {title:this.articleTheTitle,num:234,date:'2018-09-12',imgUrl:require('../.././assets/excellent-images/02.jpg'),author:'张三',content:'停止服务，然后应该在控制面板里去找mysql开头的软件去卸载它，但我没有找着，我选择直接删除安装文件，提示我文件被占用'}
    },
   
},
     updated(){
        
    },
    created(){
       this.init();
       console.log('新建')
    },
    methods:{
        goArticleInfo(val){
            
            this.$router.push({path:'/articleInfo',query:{articleTitle:val.title}});
            this.setTitle(val.title);
            console.log('标题变化');
            console.log(this.articleTheTitle);
            console.log(this.article)
        },
        init(){
           this.setTitle(this.title);
           console.log(this.articleTheTitle)
        },
         ...mapActions('article',{
        setIndex:'transmissionIndex',
        setTitle:'transmissionTitle'
    }),
    }
    
}
</script>
<style scoped>
.readlist{
    font-size:14px;
}
.readlist li{
    margin-bottom: 4px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight:500;
}
.readlist li:focus,
.readlist li:hover,
.readlist li:active
{
  color:#006666;
}
.read-head img{
    width:300px;
    height:300px;

}
.head-img{
    height: 320px;
}
h3{
    font-size:xx-large;
}
.author{
    text-align: right;
    font-weight:700;
}
 .content{
   margin-top:16px;
   min-height:300px;
   position:relative;
 }
 .basis-info{
     font-size:12px;
     width:100%;
     text-align: right;
     bottom: 10px;
     position: absolute;
 }
 div.content:after{
     content: '';
     position: relative;
     margin-top:16px;
     min-height:300px;
 }
 .split{
     content: '';
     position:relative;
     height:1px;
     background: #006666;
 }
 .comment-button{
     margin-top:10px;
     font-weight:700;
 }
 .comment-dialog{
     width:60%;
     left:20%;
 }
 .comments li{
     margin-bottom: 5px;
     border-bottom: 1px solid #006666;
     height:50px;
 }
 .comments li:last-child{
     border-bottom: 0px;
 }
 .search{
     text-align: right;
 }
 .article-search{
     width:300px;
 }
</style>
