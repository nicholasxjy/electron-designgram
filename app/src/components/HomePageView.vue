<style scoped>
  .dg-home {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f4f4f4;
    z-index: 1000;
  }
  .dg-home-content {
    position: relative;
    margin-left: 200px;
    padding: 15px 20px;
    overflow-y: scroll;
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
    <side-bar></side-bar>
    <div class="dg-home-content">
      <search-bar></search-bar>
      <div class="dg-feeds">
        <feed></feed>
        <feed></feed>
        <feed></feed>
        <feed></feed>
        <feed></feed>
        <feed></feed>
        <feed></feed>
        <feed></feed>
        <feed></feed>
        <feed></feed>
      </div>
    </div>
  </div>
</template>

<script>
  import SideBar from './partials/SideBar';
  import SearchBar from './partials/SearchBar';
  import Feed from './partials/Feed';

  export default {
    components: {
      SideBar,
      SearchBar,
      Feed
    },
    name: 'home-page'
  }
</script>
