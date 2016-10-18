<style scoped>
  .dg-search {
    padding-left: 30px;
    padding-right: 20px;
  }
  .dg-search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1000;
  }
  .dg-search-bar svg {
    position: absolute;
    left: 10px;
    z-index: 1100;
  }
  .search-input {
    flex: 1;
    outline: none;
    border: none;
    background-color: #efefef;
    padding: 10px 18px 10px 40px;
    border-radius: 5px;
    font-size: 14px;
  }
</style>
<template>
  <form class="dg-search">
    <div class="dg-search-bar">
      <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Home" transform="translate(-124.000000, -23.000000)" fill="#BBBBBB">
                  <path d="M138.293882,35.5786164 L137.390509,35.5786164 L137.070326,35.2698685 C138.190966,33.9662664 138.865638,32.2738708 138.865638,30.4328188 C138.865638,26.3276158 135.538022,23 131.432819,23 C127.327616,23 124,26.3276158 124,30.4328188 C124,34.5380217 127.327616,37.8650658 131.432819,37.8650658 C133.273871,37.8650658 134.966266,37.1909663 136.269868,36.0697541 L136.578616,36.3905089 L136.578616,37.2938822 L142.296169,42.9994282 L144,41.2955975 L138.293882,35.5786164 L138.293882,35.5786164 Z M131.432819,35.5786164 C128.585477,35.5786164 126.287021,33.2801601 126.287021,30.4328188 C126.287021,27.5854774 128.585477,25.2870212 131.432819,25.2870212 C134.28016,25.2870212 136.578616,27.5854774 136.578616,30.4328188 C136.578616,33.2801601 134.28016,35.5786164 131.432819,35.5786164 L131.432819,35.5786164 Z" id="Fill-91"></path>
              </g>
          </g>
      </svg>
      <input type="text" placeholder="Search" v-model="query" class="search-input">
    </div>
  </form>
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
