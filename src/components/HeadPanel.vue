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
        <div v-if="is_home_page">
          <ul class="nav navbar-nav top-left">
            <!--<li style="float:left" v-for="(item, index) in tab_list" :class="{active:(tab_current==index)}" @click.stop.prevent="toggle($event)" @click="tab_current = index" >-->
              <!--<router-link :to="item.addr" :style="{'background':(tab_current==index)?'#ac2925':''}" >-->
                <!--{{item.name}}-->
              <!--</router-link>-->
            <!--</li>-->
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
      </div>
      <div class="collapse navbar-collapse" id="navbar-ex-collapse">
        <div v-if="is_login">
          <ul class="nav navbar-nav navbar-right pull-right top-right">
            <li>
              <a class="login-name" href="/user/focus/publish"><span
                class="glyphicon glyphicon-user"></span> {{ user.username }}</a>
            </li>
            <li>
              <a href="" @click.stop.prevent="logout">
                <span class="glyphicon glyphicon-log-out"></span> 退出
              </a>
            </li>
          </ul>
        </div>
        <div v-else>
          <ul class="nav navbar-nav navbar-right pull-right top-right">
            <li>
              <router-link to="/login">
                <span class="glyphicon glyphicon-log-in"></span> 登陆
              </router-link>
            </li>
            <li>
              <router-link to="/signup">
                <span class="glyphicon glyphicon-user"></span> 注册
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">
  .top {
    background:#d43f3a;
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
  import Bus from '@/components/bus.js'
  import axios from 'axios'

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
        Bus.$emit('toggleEvent', event.target, index)
        this.GLOBAL.debug('toggleEvent')
      },
      logout: function () {
        var this_ = this
        axios.get(`${this.GLOBAL.api}/manager/logout/`).then(
          response => {
            if (response.data.hasOwnProperty('is_login')) {
              this_.is_login = response.data.is_login
            }
            if (response.data.hasOwnProperty('redirect_url')) {
              this_.$router.push(response.data.redirect_url)
            }
            this.GLOBAL.debug('logout')
          }
        )
      }
    },
    created: function () {
      if (this.$route.path === '/') {
        this.is_home_page = true
      } else {
        this.is_home_page = false
      }
      this.GLOBAL.debug('headpanel created')
      var this_ = this
      Bus.$on('loginEvent', (isLogin, user) => {
        this_.is_login = isLogin
        this_.user = user
        this.GLOBAL.debug('login event')
      })
    },
    destroyed: function () {
      Bus.$off('loginEvent')
    }
  }

</script>
