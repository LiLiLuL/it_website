const department=[
    {
        id:1,
        name:'流程与信息管理中心',
        level:'0.1', 
        parent_id:0,
        seq:1,
        mtime:'2019-03-02 16:20:10',
        ctime:'2019-03-02 16:20:10',
        muser_id:12,
        cuser_id:10
    },
    {
        id:2,
        name:'架构与流程管理部',
        level:'0.1', 
        parent_id:1,
        seq:1,
        mtime:'2019-03-02 16:20:10',
        ctime:'2019-03-02 16:20:10',
        muser_id:12,
        cuser_id:10
    },
    {
        id:3,
        name:'流程管理支持组',
        level:'0.1.2', 
        parent_id:2,
        seq:1,
        mtime:'2019-03-02 16:20:10',
        ctime:'2019-03-02 16:20:10',
        muser_id:12,
        cuser_id:10
    },
    {
        id:4,
        name:'流程管理组',
        level:'0.1.2', 
        parent_id:2,
        seq:2,
        mtime:'2019-03-02 16:20:10',
        ctime:'2019-03-02 16:20:10',
        muser_id:12,
        cuser_id:10
    },
    {
        id:5,
        name:'数据与技术平台部',
        level:'0.1', 
        parent_id:1,
        seq:3,
        mtime:'2019-03-02 16:20:10',
        ctime:'2019-03-02 16:20:10',
        muser_id:12,
        cuser_id:10
    },
    {
        id:6,
        name:'软件开发组',
        level:'0.1.5', 
        parent_id:5,
        seq:1,
        mtime:'2019-03-02 16:20:10',
        ctime:'2019-03-02 16:20:10',
        muser_id:12,
        cuser_id:10
    },
    {
        id:7,
        name:'应用集成组',
        level:'0.1.5', 
        parent_id:5,
        seq:2,
        mtime:'2019-03-02 16:20:10',
        ctime:'2019-03-02 16:20:10',
        muser_id:12,
        cuser_id:10
    },
    {
        id:8,
        name:'数据管理组',
        level:'0.1.5', 
        parent_id:5,
        seq:3,
        mtime:'2019-03-02 16:20:10',
        ctime:'2019-03-02 16:20:10',
        muser_id:12,
        cuser_id:10
    },

]

const employee=[
    {
        id:1,
        dep_id:1,
        name:'张三',
        account:'akkk',
        position:'助理工程师'
    },
    {
        id:2,
        dep_id:2,
        name:'张三1',
        account:'akkk',
        position:'助理工程师'
    },
    {
        id:3,
        dep_id:7,
        name:'张三6',
        account:'akkk',
        position:'工程师'
    },
    {
        id:7,
        dep_id:7,
        name:'张三6',
        account:'akkk',
        position:'工程师'
    },
    {
        id:8,
        dep_id:7,
        name:'张三7',
        account:'akkk',
        position:'助理工程师'
    },
]

function getDepartments(req,res){
    
    return res.json(department);
}

function getAllEmployee(req,res){
    return res.json(employee);
}



export default {
    'GET /server/department/all':getDepartments,
    'GET /server/department/employee':getAllEmployee
}