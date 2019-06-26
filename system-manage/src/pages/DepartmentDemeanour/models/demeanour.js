import { queryActivities } from '@/services/server';

export default {
  namespace: 'demeanour',

  state: {
   activities:[],
   isLoading:false,
  },

  effects: {
    *fetchActivities(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryActivities);
      yield put({
        type: 'setActivities',
        payload:Array.isArray(response) ? response : [],
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    
   
  },

  reducers: {
    setActivities(state, action) {
      return {
        ...state,
        activities: action.payload,
      };
    },
   
    changeLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    
  },
};
