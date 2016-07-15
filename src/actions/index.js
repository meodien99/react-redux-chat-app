// It's used to Promise API call HTTP request from client
// import fetch from 'isomorphic-fetch';

export const TEST_ACTION = 'TEST_ACTION';

export function testAction(text){
    return {
        type: TEST_ACTION,
        text
    }
}