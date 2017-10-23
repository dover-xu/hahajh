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
        <ul class="nav navbar-nav navbar-right pull-right top-right">
          <!--{% if user.is_authenticated %}-->
          <!--<li>-->
            <!--<a class="login-name" href="/user/focus/publish"><span-->
              <!--class="glyphicon glyphicon-user"></span>request.user</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--&lt;!&ndash;{% block logout %}&ndash;&gt;-->
            <!--<a href="/manager/logout">-->
              <!--<span class="glyphicon glyphicon-log-out"></span> 退出-->
            <!--</a>-->
            <!--&lt;!&ndash;{% endblock %}&ndash;&gt;-->
          <!--</li>-->
          <!--{% else %}-->
          <li>

            <!--{% block login %}-->
            <router-link to="/login">
              <span class="glyphicon glyphicon-log-in"></span> 登陆
            </router-link>
            <!--{% endblock %}-->
          </li>
          <li>
            <router-link to="/register">
              <span class="glyphicon glyphicon-user"></span> 注册
            </router-link>
          </li>
          <!--{% endif %}-->
        </ul>
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

  export default {
    name: "HeadPanel",
    data: function () {
      return {
        tab_current: 0,
        is_home_page: true
//        tab_list: [
//          {name: '全部', addr: '/'},
//          {name: '图片', addr: '/pic/push'},
//          {name: '段子', addr: '/jape/push'}
//        ]
      }
    },
    methods: {
      toggle: function (event, index) {
        this.tab_current = index
        Bus.$emit('toggleEvent', event.target, index)
        console.log('toggleEvent')
      }
//      set_tab_val: function (urlStr) {
//        var this_ = this
//        this.tab_list.forEach(function (item, index) {
//          var curUrl = urlStr.split('/')
//          if (curUrl.length > 2) {
//            if (curUrl[1] === 'jape') {
//              this_.tab_current = 2
//            } else if (curUrl[1] === 'pic') {
//              this_.tab_current = 1
//            } else {
//              this_.tab_current = 0
//            }
//          } else {
//            this_.tab_current = 0
//          }
//        })
//      }
    },
    created: function () {
//        this.set_tab_val(this.$route.path)
      if (this.$route.path === '/') {
        this.is_home_page = true
      } else {
        this.is_home_page = false
      }
    }
  }

</script>
