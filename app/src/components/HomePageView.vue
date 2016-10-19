<style scoped>
  .dg-home {
    background-color: #f4f4f4;
    position: relative;
  }
  .dg-home-content {
    padding: 30px;
    min-height: 800px;
  }
  .dg-feeds {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>

<template>
  <div class="dg-home">
    <top-bar></top-bar>
    <div class="dg-home-content">
      <div class="dg-feeds">
        <feed v-for="feed in feeds" :key="feed.id" :feed="feed"></feed>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from './partials/TopBar';
  import Feed from './partials/Feed';
  import {fetchingFeeds, fetchedFeeds, fetchedFeedsFail} from '../vuex/actions';
  import axios from 'axios';
  import config from '../config';

  export default {
    components: {
      TopBar,
      Feed
    },
    name: 'home-page',
    data() {
      return {
        feeds: []
      }
    },
    created() {
      axios.get(`${config.API_URL}/shots?access_token=${config.access_token}`).then(res => {
        console.log(res);
        this.feeds = res.data;
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>
