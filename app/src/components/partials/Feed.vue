<template>
  <div class="dg-feed">
    <div class="dg-feed-inner">
      <img :src="feed.images.normal" alt="normal" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'feed',
  props: ['feed']
}
</script>

<style scoped>
  .dg-feed {
    width: 31%;
    margin-bottom: 3.5%;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  }
  .dg-feed-inner {
    padding: 10px;
    background-color: #ffffff;
  }
  .dg-feed-inner img {
    display: block;
    width: 100%;
  }
</style>
