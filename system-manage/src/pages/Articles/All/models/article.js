import { queryArticles,queryDrafts } from '@/services/server';

export default {
  namespace: 'article',

  state: {
   articles:[],
   drafts:[],
   isLoading:false,
  },

  effects: {
    *fetchArticles(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryArticles);
      yield put({
        type: 'setArticles',
        payload:Array.isArray(response) ? response : [],
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchDrafts(_,{call,put}){
      const response=yield call(queryDrafts);
      console.log(response);
      yield put({
        type:'setDrafts',
        payload:Array.isArray(response) ? response : [],
      })
    }
   
  },

  reducers: {
    setArticles(state, action) {
      return {
        ...state,
        articles: action.payload,
      };
    },
    setDrafts(state,action){
      return{
        ...state,
        drafts:action.payload
      }
    },
    changeLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
};
