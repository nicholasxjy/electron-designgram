<template>
  <a @click="popBack" class="popback">
    <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Home-Login" transform="translate(-303.000000, -804.000000)">
                <g id="Group-4" transform="translate(303.000000, 804.000000)">
                    <circle id="Oval-3" fill-opacity="0.798063859" fill="#000000" cx="20" cy="20" r="20"></circle>
                    <polyline id="Fill-301" fill="#FFFFFF" points="24.115 26.885 17.245 20 24.115 13.115 22 11 13 20 22 29 24.115 26.885"></polyline>
                </g>
            </g>
        </g>
    </svg>
  </a>
</template>

<script>
export default {
  methods: {
    popBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style>
  .popback {
    position: fixed;
    top: 40px;
    left: 40px;
    z-index: 1100;
    cursor: pointer;
  }
</style>
