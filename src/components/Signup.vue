<template>
  <div class="wrap login_wrap">
    <div class="cont">
      <div class="logo"></div>
      <div class="login_box">
        <div class="login_form">
          <div class="login_title">
            注册
          </div>
          <form @submit.stop.prevent="submit">
            <div class="form_text_error">{{ message }}</div>
            <div class="form_text_ipt">
              <input name="username" type="text" placeholder="昵称" v-model="user.username">
            </div>
            <div class="form_text_ipt">
              <input name="password1" type="password" placeholder="密码" v-model="user.password1">
            </div>
            <div class="form_text_ipt">
              <input name="password2" type="password" placeholder="确认密码" v-model="user.password2">
            </div>
            <input type="submit" class="form_btn" value="注册">
            <div class="form_reg_btn">
              <span>已有帐号？</span><router-link to="/login">马上登录</router-link>
            </div>
          </form>
          <div class="other_login">
            <div class="left other_left">
              <span>其它登录方式</span>
            </div>
            <div class="right other_right">
              <a href="#">QQ登录</a>
              <a href="#">微信登录</a>
              <a href="#">微博登录</a>
            </div>
          </div>
        </div>
      </div>
      <div class="logo"></div>
    </div>
  </div>
</template>
<!--<style scoped="scoped">-->
  <!--@import "/static/manager/css/common.css";-->
  <!--@import "/static/manager/css/reset.css";-->
<!--</style>-->
<style src="../../static/manager/css/common.css"></style>
<style src="../../static/manager/css/reset.css"></style>
<script>
  export default {
    data: function () {
      return {
        user: {
          username: '',
          password1: '',
          password2: ''
        },
        message: ''
      }
    },
    methods: {
      submit: function () {
        let url = `${this.GLOBAL.api}/manager/signup/`
        let formData = JSON.stringify(this.user)
        let this_ = this
        this.$axios.post(url, formData).then(
          function (response) {
            if (response.data.hasOwnProperty('is_success') && response.data.hasOwnProperty('message')) {
              if (response.data.is_success) {
                this_.$router.push({name: 'notice', params: {message: response.data.message}})
//                this_.$router.push({path: '/notice'})
                this_.GLOBAL.debug(response)
              } else {
                this_.message = response.data.message
              }
            }
          }).catch(
          function (response) {
            this_.GLOBAL.debug(response)
          })
      }
    },
    created: function () {
      let url = `${this.GLOBAL.api}/manager/signup/`
      let this_ = this
      this.$axios.get(url).then(
        function (response) {
          this_.GLOBAL.debug(response)
        }
      )
    }
  }
</script>
