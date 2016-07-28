// It's used to Promise API call HTTP request from client
// import fetch from 'isomorphic-fetch';

export const _returnAction = (actionName, params = {}) => {
    return Object.assign({}, {
        type: actionName
    }, params);
}