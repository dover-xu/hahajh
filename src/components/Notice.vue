<template>
    <div class="alert alert-success notice">
      <div class="msg-block">{{ message }}</div>
      <div class="login-btn">
        <router-link to="/login">
          <b>点此登陆</b>
        </router-link>
      </div>
    </div>
</template>
<style scoped="scoped">
  .notice {
    width: 400px;
    margin: 50px auto;
    padding: 50px 30px;
  }
  .msg-block {
    margin-bottom: 10px;
    text-align: center;
  }
  .login-btn {
    text-align: right;
  }
</style>
<script>
//  import Bus from '@/components/bus.js'

  export default {
    name: 'Notice',
    data: function () {
      return {
        message: ''
      }
    },
    created: function () {
      this.GLOBAL.debug('notice created')
      this.message = this.$route.params.message
    },
    destroyed: function () {
    }
  }
</script>
