import { parse } from 'url';
const projects=[
    {
        name:'项目一',
        owner:'张三',
        partner:[
            {userId:1,username:'里斯',avatar:'',position:'工程师'},
            {userId:2,username:'里斯1',avatar:'',position:'工程师'},
            {userId:3,username:'里斯3',avatar:'',position:'工程师'},
            {userId:4,username:'里斯4',avatar:'',position:'工程师'},
            {userId:5,username:'里斯6',avatar:'',position:'工程师'},
        ],
        milepost:[
            {postId:1,date:'2019-08-04',event:'项目立项',status:'已完成'},
            {postId:2,date:'2019-06-04',event:'项目调研',status:'已完成'},
            {postId:3,date:'2019-07-04',event:'项目需求收集',status:'已完成'},
            {postId:4,date:'2019-09-04',event:'项目供应商入场',status:'进行中'},
            {postId:5,date:'2019-10-24',event:'项目实施',status:'未完成'},
            {postId:6,date:'2019-12-24',event:'项目上线验收',status:'未完成'},
        ],
        summary:'这里是关于项目的一些简介和基本信息',
        create_time:'2019-06-13',
        department:'数据管理组',
        enclosure:[],
        id:1,
        current:2
    },
    {
        name:'项目2',
        owner:'张三',
        partner:[
            {userId:1,username:'里斯',avatar:'',position:'工程师'},
            {userId:2,username:'里斯1',avatar:'',position:'工程师'},
            {userId:3,username:'里斯3',avatar:'',position:'工程师'},
            {userId:4,username:'里斯4',avatar:'',position:'工程师'},
            {userId:5,username:'里斯6',avatar:'',position:'工程师'},
        ],
        milepost:[
            {postId:1,date:'2019-08-04',event:'项目立项',status:'已完成'},
            {postId:2,date:'2019-06-04',event:'项目调研',status:'已完成'},
            {postId:3,date:'2019-07-04',event:'项目需求收集',status:'已完成'},
            {postId:4,date:'2019-09-04',event:'项目供应商入场',status:'进行中'},
            {postId:5,date:'2019-10-24',event:'项目实施',status:'未完成'},
            {postId:6,date:'2019-12-24',event:'项目上线验收',status:'未完成'},
        ],
        summary:'这里是关于项目的一些简介和基本信息',
        create_time:'2019-06-13',
        department:'数据管理组',
        enclosure:[],
        id:2,
        current:2
    },
    {
        name:'项目3',
        owner:'张三',
        partner:[
            {userId:1,username:'里斯',avatar:'',position:'工程师'},
            {userId:2,username:'里斯1',avatar:'',position:'工程师'},
            {userId:3,username:'里斯3',avatar:'',position:'工程师'},
            {userId:4,username:'里斯4',avatar:'',position:'工程师'},
            {userId:5,username:'里斯6',avatar:'',position:'工程师'},
        ],
        milepost:[
            {postId:1,date:'2019-08-04',event:'项目立项',status:'已完成'},
            {postId:2,date:'2019-06-04',event:'项目调研',status:'已完成'},
            {postId:3,date:'2019-07-04',event:'项目需求收集',status:'已完成'},
            {postId:4,date:'2019-09-04',event:'项目供应商入场',status:'进行中'},
            {postId:5,date:'2019-10-24',event:'项目实施',status:'未完成'},
            {postId:6,date:'2019-12-24',event:'项目上线验收',status:'未完成'},
        ],
        summary:'这里是关于项目的一些简介和基本信息',
        create_time:'2019-06-13',
        department:'数据管理组',
        enclosure:[],
        id:3,
        current:3
    },
    {
        name:'项目4',
        owner:'张三',
        partner:[
            {userId:1,username:'里斯',avatar:'',position:'工程师'},
            {userId:2,username:'里斯1',avatar:'',position:'工程师'},
            {userId:3,username:'里斯3',avatar:'',position:'工程师'},
            {userId:4,username:'里斯4',avatar:'',position:'工程师'},
            {userId:5,username:'里斯6',avatar:'',position:'工程师'},
        ],
        milepost:[
            {postId:1,date:'2019-08-04',event:'项目立项',status:'已完成'},
            {postId:2,date:'2019-06-04',event:'项目调研',status:'已完成'},
            {postId:3,date:'2019-07-04',event:'项目需求收集',status:'已完成'},
            {postId:4,date:'2019-09-04',event:'项目供应商入场',status:'进行中'},
            {postId:5,date:'2019-10-24',event:'项目实施',status:'未完成'},
            {postId:6,date:'2019-12-24',event:'项目上线验收',status:'未完成'},
        ],
        summary:'这里是关于项目的一些简介和基本信息',
        create_time:'2019-06-13',
        department:'数据管理组',
        enclosure:[],
        id:4,
        current:3
    },
    {
        name:'项目5',
        owner:'张三',
        partner:[
            {userId:1,username:'里斯',avatar:'',position:'工程师'},
            {userId:2,username:'里斯1',avatar:'',position:'工程师'},
            {userId:3,username:'里斯3',avatar:'',position:'工程师'},
            {userId:4,username:'里斯4',avatar:'',position:'工程师'},
            
       ],
        milepost:[
            {postId:1,date:'2019-08-04',event:'项目立项',status:'已完成'},
            {postId:2,date:'2019-06-04',event:'项目调研',status:'已完成'},
            {postId:3,date:'2019-07-04',event:'项目需求收集',status:'已完成'},
            {postId:4,date:'2019-09-04',event:'项目供应商入场',status:'进行中'},
            {postId:5,date:'2019-10-24',event:'项目实施',status:'未完成'},
            {postId:6,date:'2019-12-24',event:'项目上线验收',status:'未完成'},
        ],
        summary:'这里是关于项目的一些简介和基本信息',
        create_time:'2019-06-13',
        department:'数据管理组',
        enclosure:[],
        id:5,
        current:2
    },
    {
        name:'项目6',
        owner:'张三',
        partner:[
            {userId:1,username:'里斯',avatar:'',position:'工程师'},
            {userId:2,username:'里斯1',avatar:'',position:'工程师'},
            {userId:4,username:'里斯4',avatar:'',position:'工程师'},
            {userId:5,username:'里斯6',avatar:'',position:'工程师'},
       ],
        milepost:[
            {postId:1,date:'2019-08-04',event:'项目立项',status:'已完成'},
            {postId:2,date:'2019-06-04',event:'项目调研',status:'已完成'},
            {postId:3,date:'2019-07-04',event:'项目需求收集',status:'已完成'},
            {postId:4,date:'2019-09-04',event:'项目供应商入场',status:'进行中'},
            {postId:5,date:'2019-10-24',event:'项目实施',status:'未完成'},
            {postId:6,date:'2019-12-24',event:'项目上线验收',status:'未完成'},
        ],
        summary:'这里是关于项目的一些简介和基本信息',
        create_time:'2019-06-13',
        department:'数据管理组',
        enclosure:[],
        id:6,
        current:2
    },
]

function getProjects(req,res){
    return res.json(projects);
}
function getDetails(req,res,u){
    let url = u;
    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url; // eslint-disable-line
    }
    const params = parse(url, true).query;
    let id=parseInt(params.id);
    let result= projects.filter(item=>{
       return item.id===id;
   })
   
   return res.json(result);
}
export default{
    'GET /server/project/all':getProjects,
    'GET /server/project/detail':getDetails
}