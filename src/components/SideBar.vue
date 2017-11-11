<template>
  <!-- 右侧边栏 -->
  <div class="col-sm-3 hidden-xs main-right">
    <div class="publish" @click.prevent="check_user_state">
      <a href="">
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
</template>
<style scoped="scoped">
  .hxjx {
    margin: 10px 0;
  }

  .hxjx-title {
    background-color: #d43f3a;
    padding: 2px 5px;
    font-size: 15px;
    letter-spacing: 1px;
    color: white;
  }
</style>
<script>
    export default {
      name: 'SideBar',
      data: function () {
        return {
          is_login: false
//          user: {}
        }
      },
      methods: {
        check_user_state: function () {
          let url = `${this.GLOBAL.api}/manager/user_state/`
          let this_ = this
          this_.$axios.get(url).then(
            function (response) {
              if (response.data.hasOwnProperty('is_login')) {
                this_.is_login = response.data.is_login
              }
              if (this_.is_login === true) {
                window.location.href = '/publish'  // 刷新标题栏
//                this_.$router.push('/publish')
              } else {
                window.location.href = '/login'
              }
            }
          )
        }
      },
      created: function () {
        this.GLOBAL.debug('sidebar created')
//        let this_ = this
//        this.Bus.$on('loginEvent', (isLogin, user) => {
//          this_.is_login = isLogin
//          this_.user = user
//          this_.GLOBAL.debug('login event')
//        })
      }
    }
</script>
