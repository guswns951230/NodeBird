export const initialState = {
    isLoggingIn: false, // 로그인 시도중
    isLoggedIn: false,
    isLoggingOut: false, // 로그아웃 시도중
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(loginRequestAction());
        axios.post('/api/login')
            .then((res) => {
                dispatch(loginSuccessAction(res.data));
            })
            .catch((err) => {
                dispatch(loginFailureAction(err));
            })
    }
}

// action creator
export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
};

export const logoutRequestAction = (data) => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            console.log('reducer logIn');
            return {
                ...state, // 바뀌지 않는 내용 => 참조 관계
                isLoggingIn: true, // 바뀌는 내용만 정확히 적어주기
            };

        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: { ...action.data, nickname: 'Kanghj' },
            };

        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            };

        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            };

        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            };

        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggingOut: false,
            };

        default:
            return state;
    }
};

export default reducer;