import {queryTalents} from '@/services/server';

export default{
    namespace:'talent',
    state: {
        talents:[],
        isLoading: false,
      },
    //actions
      effects: {
        *fetchTalent(_, { call, put }) {
          //yield 关键字用来暂停和恢复一个生成器函数（(function* 或遗留的生成器函数）。
          yield put({
            type: 'changeLoading',
            payload: true,
          });
          const response = yield call(queryTalents); //这里是请求到的数据
          yield put({
            type: 'setTalent',
            payload: Array.isArray(response) ? response : [],
          });
          yield put({
            type: 'changeLoading',
            payload: false,
          });
        },
      },
      //reducers指定了应用状态的变化如何响应actions并发送到store
      reducers: {
        setTalent(state, action) {
          return {
            ...state,
            talents: action.payload,
          };
        },
        changeLoading(state, action) {
          return {
            ...state,
            isLoading: action.payload,
          };
        },
      },
}