<template>
  <div class="user-shots">
    <div class="shot-item" v-for="shot in shots" :key="shot.id">
      <a class="shot-link">
        <img :src="shot.images.normal" :alt="shot.title" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['shots']
}
</script>

<style scoped>
.user-shots {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.shot-item {
  width: 32%;
  margin-bottom: 2%;
}
.shot-link {
  display: block;
  padding: 6px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}
.shot-item img {
  width: 100%;
  display: block;
}
</style>
