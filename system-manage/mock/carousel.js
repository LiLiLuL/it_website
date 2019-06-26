const images=[
    
        {
            "id": 25,
            "title": "表格test2",
            "url": "http://localhost:8080/images/6147626fd0f14cefb12065798a1640e0.jpeg",
            "create_by": "2019-04-30 17:33:22",
            "description":"这是一段关于图片的描述信息",
            "is_effective":true,
            "uid":'-1',
            "name":'111'
        },
        {
            "id": 22,
            "title": "非官方",
            "description": "发表的观点",
            "is_effective": true,
            "url": "http://localhost:8080/images/66b280a8d027448884b7d92e6e7ee964.jpg",
            "create_by": "2019-04-09 14:17:48",
            "uid":'-3',
            "name":'222'
        },
        {
            "id": 21,
            "title": "房东沟通如果",
            "description": "福特容易被v",
            "is_effective": true,
            "url": "http://localhost:8080/images/188cc12b5ce6477fb1ef1ed31fde847c.jpg",
            "create_by": "2019-04-01 13:31:32",
            "uid":'-4',
            "name":'333'
        },
        {
            "id": 20,
            "title": "吧v发短信给还不够发达",
            "description": "发表共同对付还不同意地方",
            "is_effective": true,
            "url": "http://localhost:8080/images/188cc12b5ce6477fb1ef1ed31fde847c.jpg",
            "create_by": "2019-04-01 13:26:39",
            "uid":'-2',
            "name":'444'
        },
        {
            "id": 19,
            "title": "吧v发短信给还不够发达",
            "description": "发表共同对付还不同意地方",
            "is_effective": true,
            "url": "http://localhost:8080/images/188cc12b5ce6477fb1ef1ed31fde847c.jpg",
            "create_by": "2019-04-01 11:52:21",
            "uid":'-5',
            "name":'555'
        },
        
]
function getImages(req,res){
    
    return res.json(images);
}
function addImg(req,res){
    const { /* url = '', */ body } = req;
    // const params = getUrlParams(url);
    const { method,id} = body;
    // const count = (params.count * 1) || 20;
    let result = images;
    switch (method) {
        case 'delete':
          result = result.filter(item => item.id !== id);
          break;
        case 'update':
          result.forEach((item, i) => {
            if (item.id === id) {
              result[i] = Object.assign(item, body);
            }
          });
          break;
        case 'post':
          result.unshift({
            ...body
          });
          break;
        default:
          break;
      }
      return res.json(result);

}
export default {
    'GET /server/image/all':getImages,
    'POST /server/image/add':addImg
}