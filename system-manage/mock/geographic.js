import city from './geographic/city.json';
import province from './geographic/province.json';
import comment  from './geographic/comment.json';
function getProvince(req, res) {
  return res.json(province);
}

function getCity(req, res) {
  return res.json(city[req.params.province]);
}

function getComment(req,res){
  return res.json(comment);
}

export default {
  'GET /api/geographic/province': getProvince,
  'GET /api/geographic/city/:province': getCity,
  'GET /api/geographic/comment':getComment,
};
