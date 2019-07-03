import article from './articles/article.json'
import draft from './articles/draft.json'
import articlenumber from './articles/articlenumber.json'
function getArticles(req,res){
    return res.json(article);
}
function getDrafts(req,res){
    return res.json(draft);
}
function getArticleNumbers(req,res){
    return res.json(articlenumber);
}
export default{
    'GET /server/article/all':getArticles,
    'GET /server/article/draft/all':getDrafts,
    'GET /server/article/number':getArticleNumbers
}