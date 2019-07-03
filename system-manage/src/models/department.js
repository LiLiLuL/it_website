import { queryDepartments, queryEployee } from '@/services/server';

export default {
  namespace: 'department',

  state: {
   departments:[],
   employees:[],
   isLoading:false,
  },

  effects: {
    *fetchDepartments(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryDepartments);
      yield put({
        type: 'setDepartments',
        payload:Array.isArray(response) ? response : [],
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchEmployees(_,{call,put}){
       const response=yield call(queryEployee);
       yield put({
           type:'setEmployee',
           payload:Array.isArray(response) ? response:[],
       })
    }
    
   
  },

  reducers: {
    setDepartments(state, action) {
      return {
        ...state,
        departments: action.payload,
      };
    },
   
    changeLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    setEmployee(state,action){
        return{
            ...state,
            employees:action.payload
        }

    }
    
  },
};
