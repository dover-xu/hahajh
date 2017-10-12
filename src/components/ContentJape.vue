<template>
  <!-- 中间 -->
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="hidden-sm hidden-md hidden-lg main-left">
          <div class="publish">
            <a href="/user/publish/pic">
              <span class="glyphicon glyphicon-edit"></span>
              <span style="position: relative;bottom: 3px">发帖</span>
            </a>
          </div>
        </div>
        <!-- 分页内容 -->
        <div class="col-sm-offset-1 col-sm-7 main-left">
          <!-- 排序标签 -->
          <div>
            <ul class="nav nav-tabs ">
              <!--{% block nav-tabs %}-->
              <li style="float:left" v-for="(item, index) in tab_list" v-bind:class="{active:(tab_current==index)}" v-on:click="tab_current = index" >
                <router-link :to="item.addr" v-bind:style="{'color':(tab_current==index)?'#ac483d':''}">
                  {{item.name}}
                </router-link>
              </li>
              <!--<li class="active">-->
                <!--<router-link to="/">推荐</router-link>-->
              <!--</li>-->
              <!--<li>-->
                <!--<router-link to="/all/new">最新</router-link>-->
              <!--</li>-->
              <!--<li>-->
                <!--<router-link to="/all/hot">最热</router-link>-->
              <!--</li>-->
              <!--{% endblock %}-->
            </ul>
          </div>
          <router-view></router-view>
          <div class="nav">
            <!-- 分页导航 -->
            <div class="pages">
              <div id="Pagination"></div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">

</style>

<script>
  /* eslint-disable quotes */
  import Bus from '@/components/bus.js'

  export default {
    name: "Content",
    data: function () {
      return {
        tab_current: 0,
        tab_list: [
          {name: '推荐', addr: '/jape/push'},
          {name: '最新', addr: '/jape/new'},
          {name: '最热', addr: '/jape/hot'}
        ]
      }
    },
    methods: {
      set_tab_val: function (urlStr) {
        var this_ = this
        this.tab_list.forEach(function (item, index) {
          if (item.addr === urlStr) {
            this_.$set(this_, 'tab_current', index)
          }
        })
      }
    },
    created: function () {
      Bus.$on('toggleEvent', target => {
        console.log(this.$route.path)
      })
      this.set_tab_val(this.$route.path)
    },
    beforeDestroyed: function () {
      Bus.$off('toggleEvent')
    }
  }
</script>
