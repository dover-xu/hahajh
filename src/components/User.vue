<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="hidden-sm hidden-md hidden-lg main-left-s">
          <table border="0">
            <tr>
              <td align="left" style="width: 80px ">
                <div class="person-info">
                  <span>
                      <a href="/manager/setting">
                          <img src="" alt="头像无法显示" class="info-avatar">
                      </a>
                  </span>
                </div>
              </td>
              <td align="left" style="width: 160px;padding-top: 8px">
                <div class="info-name-s">user.username</div>
                <div class="tips-name-s">user.username</div>
                <div class="info-score-s">积分：0</div>
                <div class="info-signature-s">user.profile</div>
                <div class="tips-signature-s">user.profile</div>
              </td>
              <td align="left" style="width: 40px">
                <div class="publish-s">
                  <a href="/user/publish/pic" style="color: #FFFFFF">
                    <span class="glyphicon glyphicon-edit" style="top:2px;"></span>
                    <span>发帖</span>
                  </a>
                </div>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
        <!-- 分页内容 -->
        <div class="col-sm-offset-1 col-sm-7 main-left">
          <!-- 排序标签 -->
          <div>
            <ul class="nav nav-justified hidden-xs">
              <li class="active" style="border-bottom: 1px solid #eee;border-right: 1px solid #eee;">
                <a href="/user/focus/publish">发表</a>
              </li>
              <li style="border-bottom: 1px solid #eee;border-right: 1px solid #eee;">
                <a href="/user/focus/share">分享</a>
              </li>
              <li style="border-bottom: 1px solid #eee">
                <a href="/user/focus/comment">评论</a>
              </li>
            </ul>
            <ul class="nav nav-tabs hidden-sm hidden-md hidden-lg">
              <li class="active" style="border-bottom: 1px solid #eee;">
                <a href="/user/focus/publish">发表</a>
              </li>
              <li style="border-bottom: 1px solid #eee;">
                <a href="/user/focus/share">分享</a>
              </li>
              <li style="border-bottom: 1px solid #eee">
                <a href="/user/focus/comment">评论</a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="list-unstyled">
              <div v-for="note in note_list">
                <li class="nav" style="border-bottom: 1px solid #d5d5d5;">
                  <!-- 基本信息 -->
                  <div class="u-bar" data-id="note.id">
                    <a href="/api/del?note_id=note.id&url=/user/focus/publish">
                      <span class="pull-left note-info glyphicon glyphicon-remove"></span>
                    </a>
                    <span class="pull-left pub-time"> {{ note.pub_date }} </span>
                    <div class="pull-right">
                      <div class="tool-bar" style="width: auto">
                        <div class="praise-1">
                        <span class="praise-2">
                            <img src="/static/focus/images/zan.png"
                                 class="praise-img">
                        </span>
                        </div>
                        <span class="praise-txt"> {{ note.praise_str }} </span>
                        <span class="add-num-praise">
                          <em>+1</em>
                      </span>
                        <div class="tread-1">
                        <span class="tread-2">
                            <img src="/static/focus/images/cai.png"
                                 class="tread-img">
                        </span>
                        </div>
                        <span class="tread-txt"> {{ note.tread_str }} </span>
                        <span class="add-num-tread">
                          <em>+1</em>
                      </span>
                      </div>
                      <span>
                        <div v-if="is_login">
                          <a href="/detail_note.id"></a>
                        </div>
                        <div v-else="">
                          <a href="/manager/login?url=/detail_note.id"></a>
                        </div>
                        <span class="glyphicon glyphicon-comment comment-img"></span>
                        <span class="comment-txt"> {{ note.comment_str }} </span>
                    </span>
                    </div>
                  </div>
                  <!-- 发布内容 -->
                  <div class="cont" style="display: block">
                    <a href="/detail_note.id">
                      <div class="c-text" v-if="note.text">
                        {{ note.text }}
                      </div>
                      <div class="content-img" v-if="note.image">
                        <img :src="note.image" alt="图片无法显示"
                             class="img-responsive center-block" width="100%">
                      </div>
                    </a>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div class="nav">
            <!-- 分页导航 -->
            <div class="pages">
              <div id="Pagination"></div>
            </div>
          </div>
        </div>
        <!-- 右侧边栏 -->
        <div class="col-sm-3 hidden-xs main-right">
          <div class="person-info">
            <span>
                <a href="/manager/setting">
                    <img src="" alt="头像无法显示" class="info-avatar">
                </a>
            </span>
            <span class="info-name">user.username</span>
            <div class="tips-name">user.username</div>
            <span class="info-score">积分：0</span>
            <span class="info-signature">user.profile</span>
            <div class="tips-signature">user.profile</div>
          </div>
          <div class="publish">
            <a href="/user/publish/pic">
              <span class="glyphicon glyphicon-edit"></span>
              <span style="position: relative;bottom: 3px">发帖</span>
            </a>
          </div>
          <img src="/static/focus/images/test_img1.png" alt="图片无法显示" class="img-thumbnail">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">

</style>
<script>
//  import Bus from '@/components/bus.js'

  export default {
    name: 'User',
    data: function () {
      return {
        is_login: false,
        note_list: [],
        total: 1,
        current: 1,
        display: 5
      }
    },
    created: function () {
      this.GLOBAL.debug('user created')
      var url = `${this.GLOBAL.api}/ucenter`
      var this_ = this
      var params = JSON.stringify({
        'current': this.current,
        'display': this.display
      })
      this.$axios.post(url, params).then(
        response => {
          this_.GLOBAL.debug(response)
          this_.is_login = response.data.is_login
          this_.note_list = response.data.note_list
          this_.total = response.data.total
          this_.current = response.data.current
        }
      ).catch(
        response => {
        }
      )
    },
    destroyed: function () {
    }
  }
</script>
