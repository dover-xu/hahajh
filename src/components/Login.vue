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
            <div class="form_text_error" v-if="error">{{ error }}</div>
            <!--<div class="ececk_warning"><span>数据不能为空</span></div>-->
            <div class="form_text_ipt">
              <input name="username" type="text" placeholder="昵称" v-model="user.username">
            </div>
            <!--<div class="ececk_warning"><span>数据不能为空</span></div>-->
            <div class="form_text_ipt">
              <input name="password" type="password" placeholder="密码" v-model="user.password">
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
<style scoped="scoped">
  @import 'http://127.0.0.1:8080/static/manager/css/common.css';
  @import 'http://127.0.0.1:8080/static/manager/css/reset.css';

</style>

<script>
  export default {
    data: function () {
      return {
        user: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit: function () {
        var url = `${this.GLOBAL.api}/manager/login`
        var formData = JSON.stringify(this.user)
        var this_ = this
        this.$axios.post(url, formData).then(
          response => {
            this_.GLOBAL.debug(response)
            if (response.data.hasOwnProperty('error')) {
              this_.error = response.data.error
            }
            if (response.data.hasOwnProperty('redirect_url')) {
              this_.$router.push(response.data.redirect_url)
            }
          }).catch(
          response => {
            this_.GLOBAL.debug(response)
          })
      }
    },
    created: function () {
      this.$axios.get(`${this.GLOBAL.api}/manager/login`).then(
        response => {
          this.GLOBAL.debug(response)
        }
      )
    }
  }
</script>
