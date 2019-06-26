import { queryComment } from '@/services/geographic';

export default {
  namespace: 'geographic', //命名空间，这里与组件里连接到模块的connect方法里的参数对应

  state: {
    comment:[],
    isLoading: false,
  },
//actions
  effects: {
    *fetchComment(_, { call, put }) {
      //yield 关键字用来暂停和恢复一个生成器函数（(function* 或遗留的生成器函数）。
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryComment); //这里是请求到的数据
      yield put({
        type: 'setComment',
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
    setComment(state, action) {
      return {
        ...state,
        comment: action.payload,
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
