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
  .load-more {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #aaa;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    padding-top: 9px;
    padding-bottom: 9px;
  }
</style>

<template>
  <div class="dg-home">
    <top-bar></top-bar>
    <div class="dg-home-content">
      <div class="dg-feeds">
        <feed v-for="feed in feeds" :key="feed.id" :feed="feed"></feed>
      </div>
      <a @click="loadMore" class="load-more">Load more</a>
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
        feeds: [],
        page: 1,
        per_page: 12
      }
    },
    created() {
      axios.get(`${config.API_URL}/shots?access_token=${config.access_token}`).then(res => {
        this.feeds = res.data;
        this.page += 1;
      }).catch(err => {
        console.log(err);
      });
    },
    methods: {
      loadMore() {
        axios.get(`${config.API_URL}/shots?access_token=${config.access_token}&page=${this.page}&per_page=${this.per_page}`).then(res => {
          this.feeds = this.feeds.concat(res.data);
          this.page += 1;
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>
