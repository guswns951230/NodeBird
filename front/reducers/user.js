export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
}

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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state, // 바뀌지 않는 내용 => 참조 관계
                isLoggedIn: true, // 바뀌는 내용만 정확히 적어주기
                user: action.data,
            };

        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };

        default:
            return state;
    }
};

export default reducer;