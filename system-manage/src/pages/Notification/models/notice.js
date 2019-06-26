import { queryNotice } from '@/services/server';

export default {
    namespace: 'notice',

    state: {
        notices: [],
        isLoading: false,
    },

    effects: {
        *fetchNotice(_, { call, put }) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            const response=yield call(queryNotice);
            yield put({
                type: 'setNotice',
                payload: Array.isArray(response) ? response : [],
            })
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        }      
    },

    reducers: {
        setNotice(state, action) {
            return {
                ...state,
                notices: action.payload,
            };
        },

        changeLoading(state, action) {
            return {
                ...state,
                isLoading: action.payload,
            };
        },
    }
};
