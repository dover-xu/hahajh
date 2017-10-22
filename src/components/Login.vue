<template>
<div>
  <!--<div class="top"><span class="top-text">欢笑江湖</span></div>-->
  <div class="wrap login_wrap">
    <div class="cont">
      <div class="logo"></div>
      <div class="login_box">
        <div class="login_form">
          <div class="login_title">
            登录
          </div>
          <form action="" method="post">
            <!--{% csrf_token %}-->
            <div class="form_text_error">{{ error }}</div>
            <!--{% for field in form %}-->
            <div class="form_text_ipt">
              {{ field }}
            </div>
            <!--{% endfor %}-->
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
              <span>还没有帐号？</span><a href="/manager/register">马上注册</a>
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
    </div>
  </div>
</div>
</template>
<style>

</style>
<script>
    export default {
      data: function () {
        return {
          error: 'this is error info',
          field: 'this is field'
        }
      }
    }
</script>
