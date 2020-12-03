import { STOREKEY } from "next-redux-wrapper";

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
};

// action creator
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
};

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
    }
};


// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                user: {
                    ...state.user, // 바뀌지 않는 내용 => 참조 관계
                    isLoggedIn: true, // 바뀌는 내용만 정확히 적어주기
                    user: action.data,
                },
            };

        case 'LOG_OUT':
            return {
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                },
            };
        default:
            return state;
    }
};

export default rootReducer;