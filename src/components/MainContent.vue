<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
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
          <div>
            <ul class="nav nav-tabs ">
              <!--{% block nav-tabs %}-->
              <li :class="{active:(tab_current==0)}" v-on:click="tab_current = 0">
                <router-link :to="addr_push" v-bind:style="{'color':(tab_current==0)?'#ac483d':''}">推荐</router-link>
              </li>
              <li :class="{active:(tab_current==1)}" v-on:click="tab_current = 1">
                <router-link :to="addr_new" v-bind:style="{'color':(tab_current==1)?'#ac483d':''}">最新</router-link>
              </li>
              <li :class="{active:(tab_current==2)}" v-on:click="tab_current = 2">
                <router-link :to="addr_hot" v-bind:style="{'color':(tab_current==2)?'#ac483d':''}">最热</router-link>
              </li>
              <!--{% endblock %}-->
            </ul>
          </div>
          <ContentDetail></ContentDetail>
          <Pagination :pageNo="5" :current="1"></Pagination>
        </div>
        <SideBar></SideBar>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">

</style>

<script>
  /* eslint-disable quotes,no-unused-vars */
  import Bus from '@/components/bus.js'
  import ContentDetail from '@/components/ContentDetail'
  import SideBar from '@/components/SideBar'
  import Pagination from '@/components/Pagination'

  export default {
    name: "Content",
    components: {Pagination, ContentDetail, SideBar},
    data: function () {
      return {
        tab_current: 0,
        addr_push: '/all/push',
        addr_new: '/all/new',
        addr_hot: '/all/hot'
      }
    },
    methods: {
      set_tab_val: function (urlStr) {
        var curUrl = urlStr.split('/')
        if (curUrl.length > 2) {
          if (curUrl[2] === 'hot') {
            this.tab_current = 2
          } else if (curUrl[2] === 'new') {
            this.tab_current = 1
          } else {
            this.tab_current = 0
          }
        } else {
          this.tab_current = 0
        }
      },
      set_tab_addr: function (urlStr) {
        var curUrl = urlStr.split('/')
        var type = 'all'
        if (curUrl.length > 1) {
          type = String(curUrl[1])
          if (type === '') {
            type = 'all'
          }
        }
        this.$set(this, 'addr_push', '/' + type + '/push')
        this.$set(this, 'addr_new', '/' + type + '/new')
        this.$set(this, 'addr_hot', '/' + type + '/hot')
      }
    },
    created: function () {
      this.set_tab_addr(this.$route.path)
      this.set_tab_val(this.$route.path)
      var this_ = this
      Bus.$on('toggleEvent', target => {
        this_.set_tab_addr(this_.$route.path)
        this_.set_tab_val(this_.$route.path)
      })
    },
    destroyed: function () {
      Bus.$off('toggleEvent')
    }
  }
</script>
