import article from './articles/article.json'
import draft from './articles/draft.json'
import articlenumber from './articles/articlenumber.json'
import departmentArticle from './articles/departmentArticle.json'
import { parse } from 'url';

function getArticles(req,res){
    return res.json(article);
}
function getDrafts(req,res){
    return res.json(draft);
}
function getArticleNumbers(req,res){
    return res.json(articlenumber);
}
function getDepartmentArticle(req,res,u){
    let url = u;
    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url; // eslint-disable-line
    }
    const params = parse(url, true).query;
    let name=params.name;
    let key="";
    switch(name){
        case "jiagou":
          key = "架构与流程管理部";
          break;
        case "solution":
          key = "业务解决方案部";
          break;
        case "data":
          key = "数据与技术平台部";
          break;
        case "basis":
          key = "基础架构运维部";
          break;
        case "safe":
          key= "信息安全部";
          break;
        default:
          return;
  
      }
    
     let result= departmentArticle.filter(item=>{
       return item.name==key;
      })
      result=result[0].data;
   return res.json(result);
}

const jiagouData=departmentArticle.filter(item=>{
  return item.name=="架构与流程管理部"
});
const solutionData=departmentArticle.filter(item=>{
  return item.name=="业务解决方案部"
});
const dataData=departmentArticle.filter(item=>{
  return item.name=="数据与技术平台部"
})
const basisData=departmentArticle.filter(item=>{
  return item.name=="基础架构运维部"
})
const safeData=departmentArticle.filter(item=>{
  return item.name=="信息安全部"
})
const articleNumbers=articlenumber;

const getDepartmentArticleNumbers={
  jiagouData,
  solutionData,
  safeData,
  basisData,
  dataData,
  articleNumbers
}
export default{
    'GET /server/article/all':getArticles,
    'GET /server/article/draft/all':getDrafts,
    'GET /server/article/number':getArticleNumbers,
    'GET /server/article/department/number':getDepartmentArticle,
    'GET /server/article/department/all':getDepartmentArticleNumbers
}