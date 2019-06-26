  
const activities=[
    {
        date:'2018-07-12',
        theme:'阳澄湖大闸蟹1',
        create_by:"2019-05-23 14:57:00",
        classification:'daily',
        summary:'',
        department:'部门1',
        information:[
        {type:'img',url:'http://localhost:8080/images/excellent-images/01.jpg'},
        {type:'video',url:"http://localhost:8080/images/activities/videos/1.mp4",poster:'http://localhost:8080/images/excellent-images/03.jpeg'},
        {type:'video',url:"http://localhost:8080/images/activities/videos/1.mp4",poster:'http://localhost:8080/images/excellent-images/05.jpg'},
        {type:'img',url:'http://localhost:8080/images/excellent-images/04.png'},
        ]
    },
    {
        date:'2019-01-01',
        theme:'欢度元旦！',
        create_by:"2019-05-23 14:57:00",
        classification:'daily',
        department:'部门2',
        summary:'',
        information:[
        {type:'img',url:'http://localhost:8080/images/excellent-images/01.jpg'},
        {type:'video',url:"http://localhost:8080/images/activities/videos/1.mp4",poster:'http://localhost:8080/images/excellent-images/03.jpeg'},
        {type:'img',url:'http://localhost:8080/images/excellent-images/04.png'},
        ]
    },
    {
        date:'2018-12-31',
        theme:'阳澄湖大闸蟹2',
        create_by:"2019-05-23 14:57:00",
        classification:'year',
        department:'管理中心',
        summary:'',
        information:[
        {type:'img',url:'http://localhost:8080/images/excellent-images/01.jpg'},
        {type:'video',url:"http://localhost:8080/images/activities/videos/1.mp4",poster:'http://localhost:8080/images/excellent-images/03.jpeg'},
        {type:'video',url:"http://localhost:8080/images/activities/videos/1.mp4",poster:'http://localhost:8080/images/excellent-images/05.jpg'},
        {type:'img',url:'http://localhost:8080/images/excellent-images/04.png'},
        ]
    },
    {
        date:'2018-07-12',
        theme:'阳澄湖大闸蟹',
        create_by:"2019-05-23 14:57:00",
        classification:'daily',
        summary:'',
        department:'部门1',
        information:[
        {type:'img',url:'http://localhost:8080/images/excellent-images/01.jpg'},
        {type:'video',url:"http://localhost:8080/images/activities/videos/1.mp4",poster:'http://localhost:8080/images/excellent-images/03.jpeg'},
        {type:'video',url:"http://localhost:8080/images/activities/videos/1.mp4",poster:'http://localhost:8080/images/excellent-images/05.jpg'},
        {type:'img',url:'http://localhost:8080/images/excellent-images/04.png'},
        ]
    },
    {
        date:'2019-01-01',
        theme:'欢度元旦！',
        create_by:"2019-05-23 14:57:00",
        classification:'daily',
        department:'部门2',
        summary:'',
        information:[
        {type:'img',url:'http://localhost:8080/images/excellent-images/01.jpg'},
        {type:'video',url:"http://localhost:8080/images/activities/videos/1.mp4",poster:'http://localhost:8080/images/excellent-images/03.jpeg'},
        {type:'img',url:'http://localhost:8080/images/excellent-images/04.png'},
        ]
    },
    {
        date:'2018-12-31',
        theme:'阳澄湖大闸蟹',
        create_by:"2019-05-23 14:57:00",
        classification:'year',
        department:'管理中心',
        summary:'',
        information:[
        {type:'img',url:'http://localhost:8080/images/excellent-images/01.jpg'},
      
        ]
    },
]

function getActivities(req,res){
    
    return res.json(activities);
}

export default {
    'GET /server/activity/all':getActivities
}