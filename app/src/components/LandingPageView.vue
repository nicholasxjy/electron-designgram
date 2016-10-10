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
    width: 195px;
    height: 33px;
    margin: 0;
    background-image: url('./assets/Designgram.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .landing-intro {
    margin-top: 10px;
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    color: #9b9b9b;
  }
  .body-bottom {
    margin-top: 60px;
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
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
  }
  .dg-btn-dribbble {
    background-color: #EA4C89;
  }
  .dg-btn-behance {
    background-color: #1996FC;
  }
</style>

<template>
  <div>
    <div class="landing-page">
      <div class="landing-body">
        <div class="body-top">
          <h1 class="landing-logo"></h1>
          <div class="landing-intro">
            Design Stays Between our Things and Us
          </div>
        </div>
        <div class="body-bottom">
          <router-link class="dg-btn dg-btn-dribbble" to="/home">LOG IN WITH DRIBBBLE</router-link>
          <router-link class="dg-btn dg-btn-behance" to="/home">LOG IN WITH BEHANCE</router-link>
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
