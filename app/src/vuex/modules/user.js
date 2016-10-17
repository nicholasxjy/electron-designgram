import * as types from '../mutation-types';


const state = {
  current: {},
  fetching: false,
  fetched: false,
  error: null
}

const mutations = {
  [types.FETCHING_CURRENT_USER](state) {
    state.fetching = true;
  },
  [types.FETCHED_CURRENT_USER_OK](state, user) {
    state.fetching = false;
    state.fetched = true;
    state.current = user;
  },
  [types.FETCHED_CURRENT_USER_FAIL](state, err) {
    state.fetching = false;
    state.error = err;
  }
}

export default {
  state,
  mutations
}
