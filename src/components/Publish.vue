<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <!-- 分页内容 -->
        <div class="col-sm-offset-1 col-sm-7 main-left">
          <ul class="nav nav-justified pub-topic hidden-xs">
            <li style="border-bottom: 1px solid #eee;border-right: 1px solid #eee;">
              <a class="active" href="/user/publish/pic">
                <i class="fa fa-picture-o topic-icon"></i>
                <span>图片</span>
              </a>
            </li>
            <li style="border-bottom: 1px solid #eee">
              <a href="/user/publish/jape">
                <i class="fa fa-file-text-o topic-icon"></i>
                <span>段子</span>
              </a>
            </li>
          </ul>
          <ul class="nav pub-topic hidden-sm hidden-md hidden-lg" style="margin-left:20px">
            <li>
              <a class="active" href="/user/publish/pic" style="float: left">
                <i class="fa fa-picture-o topic-icon"></i>
                <span>图片</span>
              </a>
            </li>
            <li>
              <a href="/user/publish/jape" style="float: left">
                <i class="fa fa-file-text-o topic-icon"></i>
                <span>段子</span>
              </a>
            </li>
          </ul>
          <form action="" method="post" onsubmit="return empty_check()" enctype="multipart/form-data">
            {% csrf_token %}
            <div class="select-pic">
              <input type="file" name="txt_file" id="txt_file" class="file-loading"/>
              <span id="pic-null">添加图片</span>
            </div>
            <div class="add-text">
              <textarea class="text-area" placeholder="说点什么..." name="text_area" rows="5"></textarea>
            </div>
            <input type="submit" class="pub-trig" value="发布">
          </form>
        </div>
        <!-- 右侧边栏 -->
        <div class="col-sm-3 hidden-xs main-right">
          <img src="/static/focus/images/test_img1.jpg" alt="图片无法显示" class="img-thumbnail">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">

</style>
<script>
//  import Bus from '@/components/bus.js'

  export default {
    name: 'Publish',
    data: function () {
      return {
        message: ''
      }
    },
    created: function () {
      this.GLOBAL.debug('publish created')
      this.message = this.$route.params.message
    },
    destroyed: function () {
    }
  }
</script>
