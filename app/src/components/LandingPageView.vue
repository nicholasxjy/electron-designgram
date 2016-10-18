<style scoped>
  .landing-page {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-image: url('./assets/bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .landing-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 400px;
  }
  .body-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .landing-logo {
    margin: 0;
    font-size: 40px;
    color: #fff;
  }
  .landing-intro {
    font-size: 16px;
    font-weight: 400;
    color: rgba(255,255,255,0.5);
  }
  .body-bottom {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 30px;
    padding-right: 30px;
  }
  .dg-btn-dribbble, .dg-btn-behance {
    width: 100%;
    padding: 1em 1em;
    margin-bottom: 20px;
    border-radius: 30px;
    color: rgba(255,255,255,0.7);
    font-size: 14px;
    font-weight: 400;
  }
  .dg-btn-dribbble {
    background-color: #EC4989;
  }
  .dg-btn-behance {
    background-color: #1769FF;
  }
</style>

<template>
  <div>
    <div class="landing-page">
      <div class="landing-body">
        <div class="body-top">
          <h1 class="landing-logo">Designgram</h1>
          <div class="landing-intro">
            Design Stays Between our Things and Us
          </div>
        </div>
        <div class="body-bottom">
          <router-link class="dg-btn dg-btn-dribbble" to="/home">Login with Dribbble</router-link>
          <router-link class="dg-btn dg-btn-behance" to="/home">Login with Behance</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'landing-page'
  }
</script>
