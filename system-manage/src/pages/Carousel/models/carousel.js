import { queryCarousels,queryAddImg } from '@/services/server';

export default {
  namespace: 'carousel',

  state: {
   images:[],
   isLoading:false,
   checkedItem:[],
   upload:false,
  },

  effects: {
    *fetchCarousels(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryCarousels);
      yield put({
        type: 'setCarousels',
        payload:Array.isArray(response) ? response : [],
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchCheckedItems({ payload },{call,put}){
       yield put({
         type:'changeCheckedItems',
         payload:payload
       })
    },
    *fetchUpload(_,{call,put}){
      yield put({
        type:'changeUpload',
        payload:true
      })
    },
    *submit({payload},{call,put}){
      console.log(payload);
      const response = yield call(queryAddImg, payload);
      yield put({
        type:'appendImages',
        payload: Array.isArray(response) ? response : [],
      })
    }
   
  },

  reducers: {
    setCarousels(state, action) {
      return {
        ...state,
        images: action.payload,
      };
    },
   
    changeLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    changeCheckedItems(state,action){
        return{
          ...state,
          checkedItem:state.checkedItem.length==0 ? state.checkedItem.concat(action.payload):state.checkedItem.splice(0,1,action.payload)
        }
    },
    changeUpload(state,action){
      return{
        ...state,
        upload:action.payload
      }
    },
    appendImages(state,action){
       return{
         ...state,
         images:state.images.concat(action.payload)
       }
    }
  },
};
