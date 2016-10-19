<template>
  <transition name="side-in">
      <div class="dg-userpage">
        <div class="dg-content">
          <div class="user-container">
            <user-info :user="user"></user-info>
            <user-shots :shots="shots"></user-shots>
          </div>
        </div>
        <pop-back></pop-back>
      </div>
  </transition>
</template>

<script>
import axios from 'axios';
import config from '../config';
import UserInfo from './partials/UserInfo';
import UserShots from './partials/UserShots';
import PopBack from './partials/PopBack';
export default {
  data () {
    return {
      user: {},
      shots: [],
      isLoading: true
    }
  },
  created() {
    const username = this.$route.params.username;
    axios.get(`${config.API_URL}/users/${username}?access_token=${config.access_token}`).then(res => {
      this.user = res.data;
    }).catch(err => {
      console.log(err);
    })
    axios.get(`${config.API_URL}/users/${username}/shots?access_token=${config.access_token}`).then(res => {
      this.shots = res.data;
    }).catch(err => {
      console.log(err);
    })
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    UserInfo,
    UserShots,
    PopBack
  }
}
</script>

<style>
.dg-content {
  min-height: 800px;
  background-color: #f4f4f4;
}
.user-container {
  width: 700px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
}


.slide-in-enter-active {
  animation: slideInRight 0.5s;
}
.slide-in-leave-active {
  animation: slideOutRight 0.5s;
}
@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

</style>
