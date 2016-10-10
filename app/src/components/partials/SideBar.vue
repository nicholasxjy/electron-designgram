<style scoped>
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #333333;
    z-index: 1200;
  }
</style>
<template>
  <div class="sidebar">
    <div>This is side bar</div>
  </div>
</template>
<script>
  export default {
    name: 'sidebar'
  }
</script>