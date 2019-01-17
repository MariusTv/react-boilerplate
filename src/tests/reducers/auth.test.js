import authReducer from '../../reducers/auth';

test('should set uid (login user)', () => {
    const uid = '123abc';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(uid);
});

test('should remove uid (logout user)', () => {
   const action = {
       type: 'LOGOUT'
   };
   const state = authReducer({uid: '123abc'}, action);
   expect(state).toEqual({});
});

