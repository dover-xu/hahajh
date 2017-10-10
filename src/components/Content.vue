<template>
  <!-- 中间 -->
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="hidden-sm hidden-md hidden-lg main-left">
          <div class="publish">
            <a href="/user/publish/pic">
              <span class="glyphicon glyphicon-edit"></span>
              <span style="position: relative;bottom: 3px">发帖</span>
            </a>
          </div>
        </div>
        <!-- 分页内容 -->
        <div class="col-sm-offset-1 col-sm-7 main-left">
          <!-- 排序标签 -->
          <div>
            <ul class="nav nav-tabs ">
              <!--{% block nav-tabs %}-->
              <li class="active">
                <a href="/">推荐</a>
              </li>
              <li>
                <a href="/index-new">最新</a>
              </li>
              <li>
                <a href="/index-hot">最热</a>
              </li>
              <!--{% endblock %}-->
            </ul>
          </div>
          <div>
            <ul class="list-unstyled">
              <div v-for="note in note_list">
              <!--{% for note in note_list %}-->
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
                    <a :href="'/detail_' + 'note.id'">
                      <!--{% if note.text %}-->
                      <div v-if="note.text">
                        <div class="c-text">{{ note.text }}</div>
                      </div>
                      <!--{% endif %}-->
                      <!--{% if note.image %}-->
                      <div v-if="note.image">
                        <div class="content-img">
                          <img :src="note.image" alt="图片无法显示"
                               class="img-responsive center-block" width="100%">
                        </div>
                      </div>
                      <!--{% endif %}-->
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
                            <!--{% if note.T %}-->
                            <img src="/static/focus/images/yicai.png"
                                 class="tread-img">
                          </div>
                          <div v-else>
                            <!--{% else %}-->
                            <img src="/static/focus/images/cai.png"
                                 class="tread-img">
                          </div>
                            <!--{% endif %}-->
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
              <!--{% endfor %}-->
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
          <div class="publish">
            <a href="/user/publish/pic">
              <span class="glyphicon glyphicon-edit"></span>
              <span style="position: relative;bottom: 3px">发帖</span>
            </a>
          </div>
          <div class="hxjx">
            <div class="hxjx-title">欢笑精选</div>
            <div class="row">
              <div class="col-md-6">
                1
                <!--<a><img src="{{ note_jx.0.image }}" class="img-responsive"></a>-->
              </div>
              <div class="col-md-6">
                2
                <!--<a><img src="{{ note_jx.1.image }}" class="img-responsive"></a>-->
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                3
                <!--<a><img src="{{ note_jx.2.image }}" class="img-responsive"></a>-->
              </div>
              <div class="col-md-6">
                4
                <!--<a><img src="{{ note_jx.3.image }}" class="img-responsive"></a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">

</style>

<script>
  /* eslint-disable indent,quotes,no-eval,camelcase */
//  import {} from '/static/focus/js/jquery.pagination.js'
  import $ from 'jquery'

  export default {
    data: function () {
      return {
        note_list: [],
        note_list1: [
          {
            id: '123456',
            text: '哈哈，灭有内容',
            user: {
              avatar: '/xxx.jpg',
              username: '为伊憔悴'
            },
            image: '/yyy.jpg',
            pub_date: '2017-10-6',
            P: true,
            T: false,
            praise_str: '1.1万+',
            tread_str: '600',
            comment_str: '88'
          }
        ]
      }
    },
    created: function () {
      var url = "http://localhost:8008/index-hot"
      var this_ = this
      this_.$http.get(url).then(
        function (data) {
          this_.note_list = eval(data.body.note_list)
          this_.rows = eval(data.body.rows)
          this_.page_id = eval(data.body.page_id)
          console.log(this_.rows)
      }, function (response) {
        console.info(response)
      })
    },
    ready: function () {
      var iPageSize = 5 // 设置每页显示帖子条数
      $("#Pagination").pagination(this.rows, {
        current_page: this.page_id - 1,
        num_edge_entries: 1, // 边缘页数
        num_display_entries: 3, // parseInt(rows / iPageSize), // 分页主体部分显示的分页条目数
        // callback: pageselectCallbackack,
        items_per_page: iPageSize, // 每页显示几项
        show_if_single_page: true,
        load_first_page: true
      })
    }
  }

</script>
