<template>
  <div>
    <ul class="list-unstyled">
      <div v-for="note in note_list">
        <li class="nav" style="border-bottom: 1px solid #d5d5d5;">
          <!-- 用户信息 -->
          <div class="u-bar">
                      <span class="pull-left">
                          <a href="#">
                              <img :src="note.user.avatar" alt="头像无法显示" class="u-img">
                          </a>
                      </span>
            <span class="pull-left u-name">{{ note.user.username }}</span>
            <span class="pull-right pub-time">{{ note.pub_date }}</span>
          </div>
          <!-- 发布内容 -->
          <div class="cont">
            <a :href="'/detail/' + note.id">
              <div v-if="note.text">
                <div class="c-text">{{ note.text }}</div>
              </div>
              <div v-if="note.image">
                <div class="content-img">
                  <img :src="note.image" alt="图片无法显示"
                       class="img-responsive center-block" width="100%">
                </div>
              </div>
            </a>
          </div>
          <!-- 工具条 -->
          <div class="tool-bar" :data-id="note.id">
            <div style="float:left;height:100%;">
              <div class="praise-1">
                <span class="praise-2">
                  <!--{% if note.P %}-->
                  <div v-if="note.P">
                      <img src="/static/focus/images/yizan.png"
                           class="praise-img">
                  </div>
                  <div v-else>
                  <!--{% else %}-->
                      <img src="/static/focus/images/zan.png"
                           class="praise-img">
                  </div>
                  <!--{% endif %}-->
                  </span>
              </div>
              <span class="praise-txt">{{ note.praise_str }}</span>
              <span class="add-num-praise">
                  <em>+1</em>
              </span>
              <div class="tread-1">
                <span class="tread-2">
                  <div v-if="note.T">
                    <img src="/static/focus/images/yicai.png" class="tread-img">
                  </div>
                  <div v-else>
                    <img src="/static/focus/images/cai.png" class="tread-img">
                  </div>
                </span>
              </div>
              <span class="tread-txt">{{ note.tread_str }}</span>
              <span class="add-num-tread">
                <em>+1</em>
              </span>
            </div>
            <span>
              <a :href="'/detail_' + 'note.id'">
                  <span class="glyphicon glyphicon-comment comment-img"></span>
              </a>
              <span class="comment-txt">{{ note.comment_str }}</span>
            </span>
            <div class="bdsharebuttonbox" data-tag="share_1" :data-id="note.id"
                 style="float:right;padding:8px 5px">
              <a href="#" class="bds_more" data-cmd="more" style="color:#d5d5d5"></a>
              <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
              <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
              <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
  /* eslint-disable quotes */

  export default {
    props: {
      note_list: Array,
      total: Number,
      current: Number
    },
    data: function () {
      return {
      }
    },
    created: function () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
