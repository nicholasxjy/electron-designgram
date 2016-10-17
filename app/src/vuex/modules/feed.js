import * as types from '../mutation-types';


const state = {
  feeds: [],
  fetching: false,
  fetched: false,
  error: null
}

const mutations = {
  [types.FETCHING_FEEDS](state) {
    state.fetching = true;
  },
  [types.FETCHED_FEEDS_OK](state, feeds) {
    state.fetching = false;
    state.fetched = true;
    state.feeds = state.feeds.concat(feeds);
  },
  [types.FETCHED_FEEDS_FAIL](state, err) {
    state.fetching = false;
    state.error = err;
  }
}

export default {
  state,
  mutations
}
