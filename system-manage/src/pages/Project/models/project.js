import {queryProjects,queryProjectDetail} from '@/services/server';

export default {
    namespace: 'myproject',
  
    state: {
     projects:[],
     isLoading:false,
     theProject:[],
    },
  
    effects: {
      *fetchProjects(_,{call,put}){
          yield put({
              type:'changeLoading',
              payload:true
          })
          const response=yield call(queryProjects);
          yield put({
              type:'setProjects',
              payload:Array.isArray(response) ? response : [],
          })
          yield put({
              type:'changeLoading',
              payload:false
          })
      },
  
      *fetchTheProject({payload},{call,put}){
        const response=yield call(queryProjectDetail,payload);
        yield put({
          type:'findProject',
          payload:response
        })
      }
    
    },
  
    reducers: {
      setProjects(state,action){
          return{
              ...state,
              projects:action.payload
          }

      },
      changeLoading(state, action) {
        return {
          ...state,
          isLoading: action.payload,
        };
      },
      findProject(state,action){
        return {
          ...state,
          theProject:action.payload
        }
      }
  
    },
  };
  