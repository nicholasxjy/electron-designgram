<template>
  <div class="user-card">
    <div class="user-avatar">
      <img :src="user.avatar_url" :alt="user.name" />
    </div>
    <div class="user-textinfo">
      <h3 class="name">{{user.name}}</h3>
      <div class="location">
        <svg width="14px" height="20px" viewBox="0 0 14 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Home-Login" transform="translate(-561.000000, -824.000000)" fill="#AAAAAA">
                    <path d="M568,824 C564.13,824 561,827.13 561,831 C561,836.25 568,844 568,844 C568,844 575,836.25 575,831 C575,827.13 571.87,824 568,824 L568,824 Z M568,833.5 C566.62,833.5 565.5,832.38 565.5,831 C565.5,829.62 566.62,828.5 568,828.5 C569.38,828.5 570.5,829.62 570.5,831 C570.5,832.38 569.38,833.5 568,833.5 L568,833.5 Z" id="Fill-94"></path>
                </g>
            </g>
        </svg>
        <span class="location-name">{{user.location}}</span>
      </div>
      <div class="bio" v-html="user.bio || 'No bio yet😅'"></div>
    </div>
    <div class="user-counts">
      <ul class="counts-list list-unstyled">
        <li class="count-item">
          <a href="#">
            <span class="count">{{user.shots_count}}</span>
            <span class="tip">Shots</span>
          </a>
        </li>
        <li class="count-item">
          <a href="#">
            <span class="count">{{user.followers_count}}</span>
            <span class="tip">Followers</span>
          </a>
        </li>
        <li class="count-item">
          <a href="#">
            <span class="count">{{user.followings_count}}</span>
            <span class="tip">Followings</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped>
  .user-card {
    border: 1px solid #efefef;
    border-radius: 2px;
    background-color: #fff;
    padding-top: 20px;
  }
  .user-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-avatar img {
    width: 120px;
    height: 120px;
    display: block;
    border-radius: 50%;
  }
  .user-textinfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
  }
  .name, .location, .bio {
    width: 100%;
    text-align: center;
  }
  .location {
    font-size: 14px;
    color: #777;
  }
  .bio {
    margin-top: 6px;
    font-size: 12px;
    color: #777;
  }
  .bio a {
    font-size: 13px;
    font-weight: 700;
    color: #333;
  }
  .location-name {
    position: relative;
    top: -4px;
  }
  .user-counts {
    margin-top: 15px;
  }
  .counts-list {
    display: flex;
    align-items: center;
    border-top: 1px solid #efefef;
  }
  .count-item {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .count-item a {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .count-item .count, .count-item .tip {
    display: block;
    text-align: center;
    width: 100%;
  }
  .count {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  .tip {
    font-size: 12px;
    font-weight: 400;
    color: #aaa;
  }
</style>
