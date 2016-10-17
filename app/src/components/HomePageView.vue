<style scoped>
  .dg-home {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: #f4f4f4;
    z-index: 1000;
  }
  .dg-home-content {
    position: relative;
    padding: 15px 20px;
  }
  .dg-feeds {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
  }
</style>

<template>
  <div class="dg-home">
    <div class="dg-home-content">
      <search-bar></search-bar>
      <div class="dg-feeds">
        <feed v-for="feed in feeds" :key="feed.id" :feed="feed"></feed>
      </div>
    </div>
  </div>
</template>

<script>
  import SideBar from './partials/SideBar';
  import SearchBar from './partials/SearchBar';
  import Feed from './partials/Feed';
  import {fetchingFeeds, fetchedFeeds, fetchedFeedsFail} from '../vuex/actions';
  import axios from 'axios';
  import config from '../config';

  export default {
    components: {
      SideBar,
      SearchBar,
      Feed
    },
    name: 'home-page',
    created() {
      this.$store.dispatch('fetchingFeeds');
      axios.get(`${config.API_URL}/shots?access_token=${config.access_token}`).then(res => {
        console.log(res);
        this.$store.dispatch('fetchedFeeds', res.data);
      }).catch(err => {
        console.log(err);
      })
    },
    computed: {
      feeds() {
        return this.$store.state.feed.feeds
      }
    }
  }
</script>
