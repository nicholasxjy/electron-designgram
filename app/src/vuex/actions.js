import * as types from './mutation-types'

//user
export const fetchingCurrentUser = ({commit}) => {
  commit(types.FETCHING_CURRENT_USER);
}
export const fetchedCurrentUser = ({commit}, user) => {
  commit(types.FETCHED_CURRENT_USER_OK, user);
}
export const fetchedCurrentUserFail = ({commit}, err) => {
  commit(types.FETCHED_CURRENT_USER_FAIL, err);
}

//feed
export const fetchingFeeds = ({commit}) => {
  commit(types.FETCHING_FEEDS);
}
export const fetchedFeeds = ({commit}, feeds) => {
  commit(types.FETCHED_FEEDS_OK, feeds);
}

export const fetchedFeedsFail = ({commit}, err) => {
  commit(types.FETCHED_FEEDS_FAIL, err);
}
