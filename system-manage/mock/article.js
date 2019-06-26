import article from './articles/article.json'
import draft from './articles/draft.json'
function getArticles(req,res){
    return res.json(article);
}
function getDrafts(req,res){
    return res.json(draft);
}
export default{
    'GET /server/article/all':getArticles,
    'GET /server/article/draft/all':getDrafts
}