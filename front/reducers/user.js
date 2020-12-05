export const initialState = {
    isLoggedIn: false,
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

export const loginSuccessAction = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data,
    }
};

export const loginFailureAction = (data) => {
    return {
        type: 'LOG_IN_FALIURE',
        data,
    }
};

export const logoutRequestAction = (data) => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
};

export const logoutSuccessAction = (data) => {
    return {
        type: 'LOG_OUT_SUCCESS',
    }
};

export const logoutFailureAction = (data) => {
    return {
        type: 'LOG_OUT_FAILURE',
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state, // 바뀌지 않는 내용 => 참조 관계
                isLoggedIn: true, // 바뀌는 내용만 정확히 적어주기
                me: action.data,
            };

        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            };

        default:
            return state;
    }
};

export default reducer;