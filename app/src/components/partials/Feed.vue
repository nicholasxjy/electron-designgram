<template>
<div class="dg-feed">
    <div class="dg-feed-inner">
        <div class="feed-image-wrap">
            <div class="feed-detail">
                <div class="detail-body">
                    <div class="detail-top">
                        <h3 class="title">{{feed.title}}</h3>
                        <div class="feed-description">{{feed.description | restrictDesc | limitText}}</div>
                    </div>
                    <div class="detail-time">
                        {{feed.created_at | formatTime}}
                    </div>
                </div>
            </div>
            <div class="feed-image-container">
                <img :src="feed.images.hidpi" :alt="`feed-${feed.id}`" />
            </div>
        </div>
        <div class="feed-info-bar">
            <div class="info-group">
                <span class="info-item">
            <svg width="14px" height="11px" viewBox="0 0 14 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Home" transform="translate(-199.000000, -354.000000)" fill="#AAAAAA">
                        <g id="Group" transform="translate(196.000000, 353.000000)">
                            <g id="visibility" transform="translate(3.000000, 1.000000)">
                                <path d="M7,0.681818182 C3.81818182,0.681818182 1.08181818,2.65454545 0,5.45454545 C1.08181818,8.25454545 3.81818182,10.2272727 7,10.2272727 C10.1818182,10.2272727 12.9181818,8.25454545 14,5.45454545 C12.9181818,2.65454545 10.1818182,0.681818182 7,0.681818182 L7,0.681818182 Z M7,8.63636364 C5.21818182,8.63636364 3.81818182,7.23636364 3.81818182,5.45454545 C3.81818182,3.67272727 5.21818182,2.27272727 7,2.27272727 C8.78181818,2.27272727 10.1818182,3.67272727 10.1818182,5.45454545 C10.1818182,7.23636364 8.78181818,8.63636364 7,8.63636364 L7,8.63636364 Z M7,3.54545455 C5.91818182,3.54545455 5.09090909,4.37272727 5.09090909,5.45454545 C5.09090909,6.53636364 5.91818182,7.36363636 7,7.36363636 C8.08181818,7.36363636 8.90909091,6.53636364 8.90909091,5.45454545 C8.90909091,4.37272727 8.08181818,3.54545455 7,3.54545455 L7,3.54545455 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <span class="views-count">{{feed.views_count}}</span>
                </span>
                <span class="info-item">
            <svg class="comment-svg" width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                     <g id="Home" transform="translate(-252.000000, -354.000000)" fill="#AAAAAA">
                         <g id="Group" transform="translate(196.000000, 353.000000)">
                             <g id="textsms" transform="translate(56.000000, 1.000000)">
                                 <path d="M10.8,0 L1.2,0 C0.54,0 0,0.54 0,1.2 L0,12 L2.4,9.6 L10.8,9.6 C11.46,9.6 12,9.06 12,8.4 L12,1.2 C12,0.54 11.46,0 10.8,0 L10.8,0 Z M4.2,5.4 L3,5.4 L3,4.2 L4.2,4.2 L4.2,5.4 L4.2,5.4 Z M6.6,5.4 L5.4,5.4 L5.4,4.2 L6.6,4.2 L6.6,5.4 L6.6,5.4 Z M9,5.4 L7.8,5.4 L7.8,4.2 L9,4.2 L9,5.4 L9,5.4 Z" id="Shape"></path>
                             </g>
                         </g>
                     </g>
                 </g>
             </svg>
            <span class="comments-count">{{feed.comments_count}}</span>
                </span>
                <span class="info-item">
            <svg class="like-svg" width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Home" transform="translate(-295.000000, -353.000000)" fill="#AAAAAA">
                        <g id="Group" transform="translate(196.000000, 353.000000)">
                            <g id="favorite" transform="translate(99.000000, 0.000000)">
                                <path d="M7,12.88 L6.02,11.9 C2.38,8.68 0,6.51 0,3.85 C0,1.68 1.68,0 3.85,0 C5.04,0 6.23,0.56 7,1.47 C7.77,0.56 8.96,0 10.15,0 C12.32,0 14,1.68 14,3.85 C14,6.51 11.62,8.68 7.98,11.9 L7,12.88 L7,12.88 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <span class="likes-count">{{feed.likes_count}}</span>
                </span>
            </div>
        </div>
    </div>
    <div class="feed-creator">
        <div class="creator-info">
            <router-link :to="{name: 'user-page', params: {username: feed.user.username}}" class="avatar-link">
              <img :src="feed.user.avatar_url" :alt="feed.user.name" class="creator-avatar" />
            </router-link>
            <router-link :to="{name: 'user-page', params: {username: feed.user.username}}" class="creator-link">{{feed.user.name}}</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'feed',
    props: ['feed'],
    filters: {
        restrictDesc(value) {
            if (value && value.length > 0) {
                return value.replace(/<(?:.|\n)*?>/gm, '');
            }
            return '';
        },
        limitText(value) {
            return value.slice(0, 160) + '...';
        },
        formatTime(value) {
            const monArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
            const date = new Date(value);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            return `${monArr[month]} ${day}, ${year}`;
        }
    }
}
</script>

<style scoped>
.dg-feed {
    width: 31%;
    margin-bottom: 20px;
}

.dg-feed-inner {
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin-bottom: 10px;
}

.feed-image-wrap {
    position: relative;
    z-index: 1000;
    cursor: pointer;
}

.feed-image-wrap:hover .feed-detail {
    opacity: 1;
    visibility: visible;
}

.feed-detail {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.96);
    padding: 15px 15px 10px;
    transition: 300ms;
    opacity: 0;
    visibility: hidden;
}

.detail-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
}

.detail-top,
.detail-time {
    width: 100%;
}
.detail-time {
  font-size: 12px;
  color: #777;
}

.detail-body .title {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: #444;
}

.feed-description {
    margin-top: 10px;
    font-size: 12px;
    color: #777;
    line-height: 16px;
    word-wrap: break-word;
    word-break: break-all;
}

.feed-image-container {
    padding: 10px 10px 0;
}

.dg-feed-inner img {
    display: block;
    width: 100%;
}

.feed-info-bar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px 10px 7px;
}

.info-item {
    align-items: center;
    padding-left: 10px;
    font-size: 12px;
    color: #999;
}

.info-item .like-svg,
.info-item .comment-svg {
    position: relative;
    top: 2px;
}

.creator-info {
    display: flex;
    align-items: center;
    padding-left: 10px;
}

.creator-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

.avatar-link {
    display: block;
    width: 24px;
    height: 24px;
}

.creator-link {
    padding-left: 10px;
    font-size: 13px;
    font-weight: 600;
    color: #3a8bbb;
}
</style>
