import { queryArticles, queryDrafts, queryArticleNumbers, queryDepartmentArticle, queryArticleData } from '@/services/server';

export default {
  namespace: 'article',

  state: {
    articles: [],
    drafts: [],
    isLoading: false,
    articleNumbers: [],
    departmentNumbers: [],
    jiagouData: [],
    solutionData: [],
    safeData: [],
    basisData: [],
    dataData: [],
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
        payload: Array.isArray(response) ? response : [],
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchDrafts(_, { call, put }) {
      const response = yield call(queryDrafts);
      console.log(response);
      yield put({
        type: 'setDrafts',
        payload: Array.isArray(response) ? response : [],
      })
    },
    *fetchArticleNumbers(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryArticleNumbers);
      yield put({
        type: 'setArticleNumbers',
        payload: Array.isArray(response) ? response : [],
      })
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchDepartmentNumbers({ payload }, { call, put }) {
      const response = yield call(queryDepartmentArticle, payload);
      yield put({
        type: 'setDepartmentNumber',
        payload: response
      })
    },
    *fetch(_, { call, put }) {
      const response = yield call(queryArticleData);
      yield put({
        type: 'save',
        payload: response,
      });
    },

  },

  reducers: {
    setArticles(state, action) {
      return {
        ...state,
        articles: action.payload,
      };
    },
    setDrafts(state, action) {
      return {
        ...state,
        drafts: action.payload
      }
    },
    changeLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    setArticleNumbers(state, action) {
      return {
        ...state,
        articleNumbers: action.payload
      }
    },
    setDepartmentNumber(state, action) {
      return {
        ...state,
        departmentNumbers: action.payload
      }
    },
    clear() {
      return {
        jiagouData: [],
        solutionData: [],
        safeData: [],
        basisData: [],
        dataData: [],
      }
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
