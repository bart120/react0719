export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const login = payload => ({
    type: AUTH_LOGIN,
    payload
});

