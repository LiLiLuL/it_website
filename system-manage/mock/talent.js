const talent=[
    {
        id:1,
        type:'personal',
        name:'张三',
        partner:[],
        comment:'张三在XXX项目上取得了XXX的成绩，获得了项目人员以及领导的一致好评',
        imgUrl:'http://localhost:8080/images/excellent-images/01.jpg',
        is_effective:true,
        create_time:"2019-05-23 14:57:00",
        modified_time:"2019-05-23 14:57:00"
    },
    {
        id:2,
        type:'personal',
        name:'张三2',
        partner:[],
        comment:'张三在XXX项目上取得了XXX的成绩，获得了项目人员以及领导的一致好评',
        imgUrl:'http://localhost:8080/images/excellent-images/01.jpg',
        is_effective:true,
        create_time:"2019-05-23 14:57:00",
        modified_time:"2019-05-23 14:57:00"
    },
    {
        id:3,
        type:'personal',
        name:'张三4',
        partner:[],
        comment:'张三在XXX项目上取得了XXX的成绩，获得了项目人员以及领导的一致好评',
        imgUrl:'http://localhost:8080/images/excellent-images/01.jpg',
        is_effective:true,
        create_time:"2019-05-23 14:57:00",
        modified_time:"2019-05-23 14:57:00"
    },
    {
        id:4,
        type:'team',
        name:'xxx项目团队',
        partner:['Recheal','Milk','Smith','Roose'],
        comment:'xxx项目团队在XXX一期项目上取得了XXX的成绩，给公司带来了xxx的利益和提高了xxx的效率，获得了领导的一致好评',
        imgUrl:'http://localhost:8080/images/excellent-images/01.jpg',
        is_effective:true,
        create_time:"2019-05-23 14:57:00",
        modified_time:"2019-05-23 14:57:00"
    },
    {
        id:5,
        type:'team',
        name:'xxx项目团队',
        partner:['Recheal','Milk','Smith','Roose'],
        comment:'xxx项目团队在XXX一期项目上取得了XXX的成绩，给公司带来了xxx的利益和提高了xxx的效率，获得了领导的一致好评',
        imgUrl:'http://localhost:8080/images/excellent-images/01.jpg',
        is_effective:true,
        create_time:"2019-05-23 14:57:00",
        modified_time:"2019-05-23 14:57:00"
    },
    {
        id:6,
        type:'team',
        name:'xxx项目团队',
        partner:['Recheal','Milk','Smith','Roose'],
        comment:'xxx项目团队在XXX一期项目上取得了XXX的成绩，给公司带来了xxx的利益和提高了xxx的效率，获得了领导的一致好评',
        imgUrl:'http://localhost:8080/images/excellent-images/01.jpg',
        is_effective:true,
        create_time:"2019-05-23 14:57:00",
        modified_time:"2019-05-23 14:57:00"
    },
    {
        id:7,
        type:'personal',
        name:'张三7',
        partner:[],
        comment:'张三在XXX项目上取得了XXX的成绩，获得了项目人员以及领导的一致好评',
        imgUrl:'http://localhost:8080/images/excellent-images/01.jpg',
        is_effective:true,
        create_time:"2019-05-23 14:57:00",
        modified_time:"2019-05-23 14:57:00"
    },
    {
        id:8,
        type:'personal',
        name:'张三8',
        partner:[],
        comment:'张三在XXX项目上取得了XXX的成绩，获得了项目人员以及领导的一致好评',
        imgUrl:'http://localhost:8080/images/excellent-images/01.jpg',
        is_effective:true,
        create_time:"2019-05-23 14:57:00",
        modified_time:"2019-05-23 14:57:00"
    },
]

function getTalents(req,res){
    return res.json(talent)

}

export default {
    'GET /server/talent/all':getTalents
}