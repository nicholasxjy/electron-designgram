<style scoped>
  .dg-search-bar {
    display: flex;
    align-items: center;
  }
  .search-input {
    flex: 1;
    outline: none;
    border: none;
    background-color: #ffffff;
    padding: 13px 18px;
    border-radius: 5px;
    font-size: 14px;
  }
</style>
<template>
  <div class="dg-search">
    <div class="dg-search-bar">
      <input type="text" placeholder="Search you want..." v-model="query" class="search-input">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'search-bar',
    data() {
      return {
        query: ''
      }
    }
  }
</script>
