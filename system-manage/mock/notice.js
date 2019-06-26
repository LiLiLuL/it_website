const notice=[
    {
        start_time:'2018-08-09 12:00:03',
        end_time:'2018-08-12  12:00:00',
        create_time:'2018-08-09 11:00:00',
        message:'这是一条公告呀',
        author:'cxq'
    },
    {
        start_time:'2018-08-09 12:00:03',
        end_time:'2018-08-12  12:00:00',
        create_time:'2018-08-09 11:00:00',
        message:'这是一条公告呀',
        author:'cxq'
    },
    {
        start_time:'2018-08-09 12:00:03',
        end_time:'2018-08-12  12:00:00',
        create_time:'2018-08-09 11:00:00',
        message:'这是一条公告呀',
        author:'cxq'
    },
    {
        start_time:'2018-08-09 12:00:03',
        end_time:'2018-08-12  12:00:00',
        create_time:'2018-08-09 11:00:00',
        message:'这是一条公告呀',
        author:'cxq'
    },
    {
        start_time:'2018-08-09 12:00:03',
        end_time:'2018-08-12  12:00:00',
        create_time:'2018-08-09 11:00:00',
        message:'这是一条公告呀',
        author:'cxq'
    },
    {
        start_time:'2018-08-09 12:00:03',
        end_time:'2018-08-12  12:00:00',
        create_time:'2018-08-09 11:00:00',
        message:'这是一条公告呀',
        author:'cxq'
    },
    {
        start_time:'2018-08-09 12:00:03',
        end_time:'2018-08-12  12:00:00',
        create_time:'2018-08-09 11:00:00',
        message:'这是一条公告呀',
        author:'cxq'
    }
]

function getNotices(req,res){
    return res.json(notice);
}
export default {
    'GET /server/notice/all':getNotices
}