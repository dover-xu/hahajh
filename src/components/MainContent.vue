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
              <li :class="{active:(tab_current==0)}" v-on:click.prevent="tab_sw(0)">
                <a href="" v-bind:style="{'color':(tab_current==0)?'#ac483d':''}">推荐</a>
              </li>
              <li :class="{active:(tab_current==1)}" v-on:click.prevent="tab_sw(1)">
                <a href="" v-bind:style="{'color':(tab_current==1)?'#ac483d':''}">最新</a>
              </li>
              <li :class="{active:(tab_current==2)}" v-on:click.prevent="tab_sw(2)">
                <a href="" v-bind:style="{'color':(tab_current==2)?'#ac483d':''}">最热</a>
              </li>
              <!--{% endblock %}-->
            </ul>
          </div>
          <ContentDetail :note_list="note_list" :total="total" :current="current"></ContentDetail>
          <!--<Pagination :pageNo="7" :current="current" @current_sw="current_sw"></Pagination>-->
          <Pagination :total="total" :display="display" :currentPage="current" @pagechange="page_change"></Pagination>
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
        is_login: false,
        user: {},
        tab_cur_head: 0,
        tab_current: 0,
        note_list: [],
        total: 1,
        display: 5,
        current: 1
      }
    },
    methods: {
      /*  请求和刷新内容  */
      update_data: function () {
        var url = `${this.GLOBAL.api}/contents`
        var this_ = this
        var params = JSON.stringify({
          'type': this.tab_cur_head,
          'sort': this.tab_current,
          'current': this.current,
          'display': this.display
        })

        this.$axios.post(url, params).then(
          response => {
            this_.user = response.data.user
            if (this_.is_login !== response.data.is_login) {
              this_.is_login = response.data.is_login
              Bus.$emit('loginEvent', this_.is_login, this_.user)
            }

            this_.note_list = response.data.note_list
            this_.total = response.data.total
            this_.display = response.data.display
            this_.current = response.data.current
          }).catch(
          response => {
            this_.GLOBAL.debug(response)
          })
      },
      /*  导航栏切换  */
      tab_sw: function (index) {
        this.tab_current = index
        this.update_data()
      },
      /*  换页钩子函数  */
      page_change: function (cur) {
        this.current = cur
        this.update_data()
      }
    },
    created: function () {
      var this_ = this
      this_.update_data()
      this.GLOBAL.debug('maincontent created')
      Bus.$on('toggleEvent', (target, index) => {
        this_.tab_cur_head = index
        this_.update_data()
      })
    },
    destroyed: function () {
      Bus.$off('toggleEvent')
    }
  }
</script>
