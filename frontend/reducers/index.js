function rootReducer(state = {
  name: 'Intellegensia',
  errors: {},
  user: {
    email: '',
    password: ''
  },
  children: {},
}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default rootReducer;
