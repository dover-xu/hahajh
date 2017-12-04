<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <!-- 顶部 -->
  <div class="navbar navbar-default navbar-static-top top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand top-title" href="/"><span>欢笑江湖</span></a>
        <button type="button" class="navbar-toggle user-btn" data-toggle="collapse"
                data-target="#navbar-ex-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div>
          <ul class="nav navbar-nav top-left" v-if="is_home_page">
              <li style="float:left" :class="{active:(tab_current==0)}" @click.prevent="toggle($event, 0)" >
                <a href="" :style="{'background':(tab_current==0)?'#ac2925':''}" >全部</a>
              </li>
              <li style="float:left" :class="{active:(tab_current==1)}" @click.prevent="toggle($event, 1)" >
                <a href="" :style="{'background':(tab_current==1)?'#ac2925':''}" >图片</a>
              </li>
              <li style="float:left" :class="{active:(tab_current==2)}" @click.prevent="toggle($event, 2)" >
                <a href="" :style="{'background':(tab_current==2)?'#ac2925':''}" >段子</a>
              </li>
          </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbar-ex-collapse">
          <ul v-if="is_login" class="nav navbar-nav navbar-right pull-right top-right">
            <li>
              <a class="login-name" href="/user">
                <span class="glyphicon glyphicon-user"></span> {{ user.username }}
              </a>
            </li>
            <li>
              <a href="" @click.stop.prevent="logout">
                <span class="glyphicon glyphicon-log-out"></span> 退出
              </a>
            </li>
          </ul>
          <ul v-if="!is_login" class="nav navbar-nav navbar-right pull-right top-right">
            <li>
              <a href="/login">
                <span class="glyphicon glyphicon-log-in"></span> 登陆
              </a>
            </li>
            <li>
              <a href="/signup">
                <span class="glyphicon glyphicon-user"></span> 注册
              </a>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .top {
    background:#d43f3a !important;
  }
  .top-title span,.top-left a,.top-right a {
    color: #eee !important;
  }
  .top-title {
    font-size: 20px;
  }
  .top-left {
    font-size: 15px;
    padding-left: 15px;
  }
  .top-right {
    font-size: 10px;
  }
  .user-btn {
    background-color: transparent !important;
  }
  li:visited {
    color:yellow;
    background:blue;
  }
  .login-name {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 70px;
    padding-right: 0 !important;
  }
</style>
<script>
  /* eslint-disable indent,quotes,no-unused-vars */
//  import Bus from '@/components/bus.js'

  export default {
    name: "HeadPanel",
    data: function () {
      return {
        is_login: false,
        user: {},
        tab_current: 0,
        is_home_page: true
      }
    },
    methods: {
      toggle: function (event, index) {
        this.tab_current = index
        this.Bus.$emit('toggleEvent', event.target, index)
        this.GLOBAL.debug('toggleEvent')
      },
      logout: function () {
        let this_ = this
        this.$axios.get(`${this.GLOBAL.api}/manager/logout/`).then(
          response => {
            if (response.data.hasOwnProperty('is_login')) {
              this_.is_login = response.data.is_login
            }
            this_.$router.push('/')
            this.GLOBAL.debug('logout')
          }
        )
      },
      update_user_state: function () {
        let url = `${this.GLOBAL.api}/manager/user-state/`
        let this_ = this
        this_.$axios.get(url).then(
          function (response) {
            if (response.data.hasOwnProperty('is_login')) {
              this_.is_login = response.data.is_login
            }
            if (response.data.hasOwnProperty('user')) {
              this_.user = response.data.user
            }
          }
        )
      }
    },
    created: function () {
      this.is_home_page = this.$route.path === '/'
      this.GLOBAL.debug('headpanel created')
      this.update_user_state()
      let this_ = this
      this.Bus.$on('loginEvent', (isLogin, user) => {
        this_.is_login = isLogin
        this_.user = user
        this_.GLOBAL.debug('login event')
      })
    },
    destroyed: function () {
//      this.Bus.$off('loginEvent')
    }
  }

</script>
