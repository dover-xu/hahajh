<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <!-- 分页内容 -->
        <div class="col-sm-offset-1 col-sm-7 main-left">
          <div v-if="note">
            <ul class="list-unstyled">
              <li class="nav" style="border-bottom: 1px solid #d5d5d5;">
                <!-- 用户信息 -->
                <div class="u-bar">
                  <span class="pull-left">
                    <img :src="note.user.avatar" alt="头像无法显示" class="u-img">
                  </span>
                  <span class="pull-left u-name">{{ note.user.username }}</span>
                  <span class="pull-right pub-time">{{ note.pub_date }}</span>
                </div>
                <!-- 发布内容 -->
                <div class="cont">
                  <div v-if="note.text" class="c-text">{{ note.text }}</div>
                  <div v-if="note.image" class="content-img">
                    <img :src="note.image" alt="图片无法显示"
                         class="img-responsive center-block" width="100%">
                  </div>
                </div>
                <!-- 工具条 -->
                <div class="tool-bar" data-id="note.id">
                  <div style="float:left;height:100%;">
                    <div class="praise-1">
                      <span class="praise-2">
                        <img :src="note.Praised?'/static/focus/images/yizan.png':'/static/focus/images/zan.png'" class="praise-img" @click="praise_tread_share(note, 'praise')">
                      </span>
                    </div>
                    <span class="praise-txt">{{ note.praise_str }}</span>
                    <span class="add-num-praise">
                      <em>+1</em>
                    </span>
                    <div class="tread-1">
                      <span class="tread-2">
                        <img :src="note.Treaded?'/static/focus/images/yicai.png':'/static/focus/images/cai.png'" class="tread-img" @click="praise_tread_share(note, 'tread')">
                      </span>
                    </div>
                    <span class="tread-txt">{{ note.tread_str }}</span>
                    <span class="add-num-tread">
                      <em>+1</em>
                    </span>
                  </div>
                  <span>
                      <span class="glyphicon glyphicon-comment comment-img"></span>
                      <span class="comment-txt">{{ note.comment_str }}</span>
                  </span>
                  <div class="bdsharebuttonbox" style="float:right;padding:8.5px 10px">
                    <a href="#" class="bds_more" data-cmd="more" style="color:#d5d5d5"></a>
                    <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                    <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                    <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div id="qq">
            <div>
              <p style="text-align: left; float: left;">评论({{ note.comment_str }})</p>
              <p style="text-align: right; float: right">您还可以输入{{ commentLeftChar }}字</p>
            </div>
            <!--<div class="message" contentEditable='true'></div>-->
            <div style="color: red; text-align: left; margin-bottom: 5px">{{ error_msg }}</div>
            <textarea name="edit_text" id="edit_text" class="message" v-model="text"
                      title="edit_text" style="resize: none; cursor: text"
                      maxlength="200" placeholder="评论不超过200字" @input="text_change"></textarea>
            <div class="But">
              <img src="/static/focus/images/comment/bba_thumb.gif" class='bq'/>
              <span class='submit' @click="push">发表</span>
              <!--face begin-->
              <div class="face">
                <ul>
                  <li><img src="/static/focus/images/comment/zz2_thumb.gif" title="[织]"></li>
                  <li><img src="/static/focus/images/comment/horse2_thumb.gif" title="神马]">
                  </li>
                  <li><img src="/static/focus/images/comment/fuyun_thumb.gif" title="[浮云]">
                  </li>
                  <li><img src="/static/focus/images/comment/geili_thumb.gif" title="[给力]">
                  </li>
                  <li><img src="/static/focus/images/comment/wg_thumb.gif" title="[围观]"></li>
                  <li><img src="/static/focus/images/comment/vw_thumb.gif" title="[威武]"></li>
                  <li><img src="/static/focus/images/comment/panda_thumb.gif" title="[熊猫]">
                  </li>
                  <li><img src="/static/focus/images/comment/rabbit_thumb.gif" title="兔子]">
                  </li>
                  <li><img src="/static/focus/images/comment/otm_thumb.gif" title="[奥特曼]"></li>
                  <li><img src="/static/focus/images/comment/j_thumb.gif" title="[囧]"></li>
                  <li><img src="/static/focus/images/comment/hufen_thumb.gif" title="[互粉]">
                  </li>
                  <li><img src="/static/focus/images/comment/liwu_thumb.gif" title="[礼物]"></li>
                  <li><img src="/static/focus/images/comment/smilea_thumb.gif" title="呵呵]">
                  </li>
                  <li><img src="/static/focus/images/comment/tootha_thumb.gif" title="嘻嘻]">
                  </li>
                  <li><img src="/static/focus/images/comment/laugh.gif" title="[哈哈]"></li>
                  <li><img src="/static/focus/images/comment/tza_thumb.gif" title="[可爱]"></li>
                  <li><img src="/static/focus/images/comment/kl_thumb.gif" title="[可怜]"></li>
                  <li><img src="/static/focus/images/comment/kbsa_thumb.gif" title="[挖鼻屎]">
                  </li>
                  <li><img src="/static/focus/images/comment/cj_thumb.gif" title="[吃惊]"></li>
                  <li><img src="/static/focus/images/comment/shamea_thumb.gif" title="[害羞]">
                  </li>
                  <li><img src="/static/focus/images/comment/zy_thumb.gif" title="[挤眼]"></li>
                  <li><img src="/static/focus/images/comment/bz_thumb.gif" title="[闭嘴]"></li>
                  <li><img src="/static/focus/images/comment/bs2_thumb.gif" title="[鄙视]"></li>
                  <li><img src="/static/focus/images/comment/lovea_thumb.gif" title="[爱你]">
                  </li>
                  <li><img src="/static/focus/images/comment/sada_thumb.gif" title="[泪]"></li>
                  <li><img src="/static/focus/images/comment/heia_thumb.gif" title="[偷笑]"></li>
                  <li><img src="/static/focus/images/comment/qq_thumb.gif" title="[亲亲]"></li>
                  <li><img src="/static/focus/images/comment/sb_thumb.gif" title="[生病]"></li>
                  <li><img src="/static/focus/images/comment/mb_thumb.gif" title="[太开心]"></li>
                  <li><img src="/static/focus/images/comment/ldln_thumb.gif" title="[懒得理你]">
                  </li>
                  <li><img src="/static/focus/images/comment/yhh_thumb.gif" title="[右哼哼]"></li>
                  <li><img src="/static/focus/images/comment/zhh_thumb.gif" title="[左哼哼]"></li>
                  <li><img src="/static/focus/images/comment/x_thumb.gif" title="[嘘]"></li>
                  <li><img src="/static/focus/images/comment/cry.gif" title="[衰]"></li>
                  <li><img src="/static/focus/images/comment/wq_thumb.gif" title="[委屈]"></li>
                  <li><img src="/static/focus/images/comment/t_thumb.gif" title="[吐]"></li>
                  <li><img src="/static/focus/images/comment/k_thumb.gif" title="[打哈气]"></li>
                  <li><img src="/static/focus/images/comment/bba_thumb.gif" title="[抱抱]"></li>
                  <li><img src="/static/focus/images/comment/angrya_thumb.gif" title="[怒]">
                  </li>
                  <li><img src="/static/focus/images/comment/yw_thumb.gif" title="[疑问]"></li>
                  <li><img src="/static/focus/images/comment/cza_thumb.gif" title="[馋嘴]"></li>
                  <li><img src="/static/focus/images/comment/88_thumb.gif" title="[拜拜]"></li>
                  <li><img src="/static/focus/images/comment/sk_thumb.gif" title="[思考]"></li>
                  <li><img src="/static/focus/images/comment/sweata_thumb.gif" title="[汗]">
                  </li>
                  <li><img src="/static/focus/images/comment/sleepya_thumb.gif" title="[困]">
                  </li>
                  <li><img src="/static/focus/images/comment/sleepa_thumb.gif" title="[睡觉]">
                  </li>
                  <li><img src="/static/focus/images/comment/money_thumb.gif" title="[钱]"></li>
                  <li><img src="/static/focus/images/comment/sw_thumb.gif" title="[失望]"></li>
                  <li><img src="/static/focus/images/comment/cool_thumb.gif" title="[酷]"></li>
                  <li><img src="/static/focus/images/comment/hsa_thumb.gif" title="[花心]"></li>
                  <li><img src="/static/focus/images/comment/hatea_thumb.gif" title="[哼]"></li>
                  <li><img src="/static/focus/images/comment/gza_thumb.gif" title="[鼓掌]"></li>
                  <li><img src="/static/focus/images/comment/dizzya_thumb.gif" title="[晕]">
                  </li>
                  <li><img src="/static/focus/images/comment/bs_thumb.gif" title="[悲伤]"></li>
                  <li><img src="/static/focus/images/comment/crazya_thumb.gif" title="[抓狂]">
                  </li>
                  <li><img src="/static/focus/images/comment/h_thumb.gif" title="[黑线]"></li>
                  <li><img src="/static/focus/images/comment/yx_thumb.gif" title="[阴险]"></li>
                  <li><img src="/static/focus/images/comment/nm_thumb.gif" title="[怒骂]"></li>
                  <li><img src="/static/focus/images/comment/hearta_thumb.gif" title="[心]">
                  </li>
                  <li><img src="/static/focus/images/comment/unheart.gif" title="[伤心]"></li>
                  <li><img src="/static/focus/images/comment/pig.gif" title="[猪头]"></li>
                  <li><img src="/static/focus/images/comment/ok_thumb.gif" title="[ok]"></li>
                  <li><img src="/static/focus/images/comment/ye_thumb.gif" title="[耶]"></li>
                  <li><img src="/static/focus/images/comment/good_thumb.gif" title="[good]">
                  </li>
                  <li><img src="/static/focus/images/comment/no_thumb.gif" title="[不要]"></li>
                  <li><img src="/static/focus/images/comment/z2_thumb.gif" title="[赞]"></li>
                  <li><img src="/static/focus/images/comment/come_thumb.gif" title="[来]"></li>
                  <li><img src="/static/focus/images/comment/sad_thumb.gif" title="[弱]"></li>
                  <li><img src="/static/focus/images/comment/lazu_thumb.gif" title="[蜡烛]"></li>
                  <li><img src="/static/focus/images/comment/clock_thumb.gif" title="[钟]"></li>
                  <li><img src="/static/focus/images/comment/cake.gif" title="[蛋糕]"></li>
                  <li><img src="/static/focus/images/comment/m_thumb.gif" title="[话筒]"></li>
                  <li><img src="/static/focus/images/comment/weijin_thumb.gif" title="[围脖]">
                  </li>
                  <li><img src="/static/focus/images/comment/lxhzhuanfa_thumb.gif"
                           title="[转发]"></li>
                  <li><img src="/static/focus/images/comment/lxhluguo_thumb.gif"
                           title="[路过这儿]"></li>
                  <li><img src="/static/focus/images/comment/bofubianlian_thumb.gif"
                           title="[bofu变脸]"></li>
                  <li><img src="/static/focus/images/comment/gbzkun_thumb.gif" title="[gbz困]">
                  </li>
                  <li><img src="/static/focus/images/comment/boboshengmenqi_thumb.gif"
                           title="[生闷气]"></li>
                  <li><img src="/static/focus/images/comment/chn_buyaoya_thumb.gif"
                           title="[不要啊]"></li>
                  <li><img src="/static/focus/images/comment/daxiongleibenxiong_thumb.gif"
                           title="[dx泪奔]"></li>
                  <li><img src="/static/focus/images/comment/cat_yunqizhong_thumb.gif"
                           title="[运气中]"></li>
                  <li><img src="/static/focus/images/comment/youqian_thumb.gif" title="[有钱]">
                  </li>
                  <li><img src="/static/focus/images/comment/cf_thumb.gif" title="[冲锋]"></li>
                  <li><img src="/static/focus/images/comment/camera_thumb.gif" title="[照相机]">
                  </li>
                </ul>
              </div>
              <!--face end-->
            </div>
          </div>
          <!--qq end-->
          <div id="time1"></div>
          <!--msgCon begin-->
          <div class="msgCon" ref="msgCon">
            <div v-for="comment in comments" class='msgBox'>
              <dl>
                <dt>
                  <img :src='comment.user.avatar' alt='头像无法显示' width='50' height='50'/>
                </dt>
                <dd>{{ comment.user.username }}</dd>
              </dl>
              <div class='msgTxt'>{{ comment.text }}</div>
            </div>
          </div>
        </div>
        <!-- 右侧边栏 -->
        <SideBar></SideBar>
      </div>
    </div>
  </div>
</template>
<!--<style scoped="scoped">-->
  <!--@import '/static/focus/css/comment.css';-->
<!--</style>-->
<style src="../../static/focus/css/comment.css" type="text/css"></style>
<script>
  /* eslint-disable quotes */

  //  import Bus from '@/components/bus.js'
  import SideBar from '@/components/SideBar'

  export default {
    name: 'Detail',
    components: {SideBar},
    data: function () {
      return {
        user: {},
        is_login: false,
        note: {
          user: {
            avatar: ''
          }
        },
        comments: [],
        current: 1,
        display: 5,
        error_msg: '',
        commentLeftChar: 200,
        text: ''
      }
    },
    methods: {
      /*  请求和刷新内容  */
      update_data: function () {
        let url = `${this.GLOBAL.api}/api/details/`
        let this_ = this
        let params = JSON.stringify({
          'id': this.$route.params['id'],
          'current': this.current,
          'display': this.display
        })

        this.$axios.post(url, params).then(
          response => {
            this_.user = response.data.user
            this_.is_login = response.data.is_login
            this_.note = response.data.note
            this_.comments = response.data.comments
            this_.total = response.data.total
            this_.display = response.data.display
            this_.current = response.data.current
            console.log(response)
          }).catch(
          response => {
            this_.GLOBAL.debug(response)
          })
        let cachedText = sessionStorage.getItem('text')
        if (cachedText != null) {
          this_.text = cachedText
          sessionStorage.removeItem('text')
        }
      },
      push: function () {
        if (this.text === '') {
          this.error_msg = '评论不能为空'
          return
        }
        if (this.is_login) {
          let this_ = this
          let url = `${this.GLOBAL.api}/api/a-c/`
          this.$axios.post(url, JSON.stringify({
            'note_id': this.note.id,
            'text': this.text
          })).then(
            function (response) {
              this_.$router.go(0)
            }
          )
          sessionStorage.removeItem('text')
        } else {
          sessionStorage.setItem('text', this.text)
          location.href = "/login"
        }
      },
      text_change: function () {
        this.error_msg = ''
        this.commentLeftChar = 200 - this.text.length
      }
    },
    praise_tread_share: function (note, action) {
      this.GLOBAL.praise_tread_share(this, note, action)
    },
    created: function () {
      this.GLOBAL.debug('Detail created')
      this.update_data()
    },
    destroyed: function () {
    }
  }
</script>
