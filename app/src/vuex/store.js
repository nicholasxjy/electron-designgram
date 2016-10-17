import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import user from './modules/user';
import feed from './modules/feed';

import createLogger from 'vuex/dist/logger';

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    user,
    feed
  },
  strict: true,
  plugins: [createLogger()]
})
