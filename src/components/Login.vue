<template>
  <div class="wrap login_wrap">
    <div class="cont">
      <div class="logo"></div>
      <div class="login_box">
        <div class="login_form">
          <div class="login_title">
            登录
          </div>
          <form @submit.stop.prevent="submit">
            <!--{% csrf_token %}-->
            <div class="form_text_error" v-if="message">{{ message }}</div>
            <!--<div class="ececk_warning"><span>数据不能为空</span></div>-->
            <div class="form_text_ipt">
              <input name="username" type="text" placeholder="昵称" v-model="user_form.username">
            </div>
            <!--<div class="ececk_warning"><span>数据不能为空</span></div>-->
            <div class="form_text_ipt">
              <input name="password" type="password" placeholder="密码" v-model="user_form.password">
            </div>
            <!--<div class="ececk_warning"><span>数据不能为空</span></div>-->
            <div class="form_check_ipt">
              <div class="left check_left">
                <label><input name="" style="box-shadow: none" type="checkbox"> 下次自动登录</label>
              </div>
              <div class="right check_right">
                <a href="#">忘记密码</a>
              </div>
            </div>
            <input type="submit" class="form_btn" value="登录">

            <div class="form_reg_btn">
              <span>还没有帐号？</span><router-link to="/signup">马上注册</router-link>
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
<style scoped>
  @import '/static/manager/css/common.css';
  @import '/static/manager/css/reset.css';

</style>

<script>
  export default {
    data: function () {
      return {
        user_form: {
          username: '',
          password: ''
        },
        message: '',
        user: {}
      }
    },
    methods: {
      submit: function () {
        let url = `${this.GLOBAL.api}/manager/login/`
        let formData = JSON.stringify(this.user_form)
        let this_ = this
        this.$axios.post(url, formData).then(
          function (response) {
            this_.GLOBAL.debug(response)
            if (response.data.hasOwnProperty('message')) {
              this_.message = response.data.message
            }
            if (response.data.hasOwnProperty('user')) {
              this_.user = response.data.user
            }
            if (response.data.hasOwnProperty('is_login')) {
              if (response.data.is_login === true) {
                this_.is_login = true
                this_.$router.push({path: '/'})
                this_.Bus.$emit('loginEvent', this_.is_login, this_.user)
              }
            }
          }).catch(
          function (response) {
            this_.GLOBAL.debug(response)
          })
      }
    },
    created: function () {
//      this.$axios.get(`${this.GLOBAL.api}/manager/login/`).then(
//        response => {
//          this.GLOBAL.debug(response)
//        }
//      )
    }
  }
</script>
