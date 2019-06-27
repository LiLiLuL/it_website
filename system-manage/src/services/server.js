import { stringify } from 'qs';
import request from '@/utils/request';
import { async } from 'q';
import { func } from 'prop-types';
export async function queryArticles(){
    return request('/server/article/all');
  }
export async function queryDrafts(){
  return request('/server/article/draft/all');
}

export async function queryCarousels(){
  return request(' /server/image/all');
}

export async function queryAddImg(params){
  const {  ...restParams } = params;
  return request('/server/image/add', {
    method: 'POST',
    body: {
      ...params,
      method:'post'
    }
  });
}

export async function queryActivities(){
  return request('/server/activity/all');
}

export async function queryDepartments(){
  return request( '/server/department/all');
}

export async function queryEployee(){
  return request('/server/department/employee');
}

export async function queryNotice(){
  return request('/server/notice/all');
}

export async function queryProjects(){
  return request('/server/project/all');
}

export async function queryProjectDetail(params){
  return request(`/server/project/detail?${stringify(params)}`);
}

export async function queryTalents(){
  return request('/server/talent/all');
}