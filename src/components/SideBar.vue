<template>
  <!-- 右侧边栏 -->
  <div class="col-sm-3 hidden-xs main-right">
    <div class="publish">
      <a href="/user/publish/pic">
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
<style>

</style>
<script>
    export default {
      name: 'SideBar'
    }
</script>
