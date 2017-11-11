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
              <li :class="{active:(tab_current==0)}" @click.prevent="tab_sw(0)">
                <a href="" :style="{'color':(tab_current==0)?'#ac483d':''}">推荐</a>
              </li>
              <li :class="{active:(tab_current==1)}" @click.prevent="tab_sw(1)">
                <a href="" :style="{'color':(tab_current==1)?'#ac483d':''}">最新</a>
              </li>
              <li :class="{active:(tab_current==2)}" @click.prevent="tab_sw(2)">
                <a href="" :style="{'color':(tab_current==2)?'#ac483d':''}">最热</a>
              </li>
            </ul>
          </div>
          <ContentDetail :note_list="note_list" :total="total" :current="current"></ContentDetail>
          <Pagination v-if="note_list.length > 0" :total="total" :display="display" :currentPage="current" @pagechange="page_change"></Pagination>
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
//  import Bus from '@/components/bus.js'
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
        let url = `${this.GLOBAL.api}/contents/`
        let this_ = this
        let params = JSON.stringify({
          'type': this.tab_cur_head,
          'sort': this.tab_current,
          'current': this.current,
          'display': this.display
        })

        this.$axios.post(url, params).then(
          response => {
            this_.user = response.data.user
            this_.is_login = response.data.is_login
            this_.note_list = response.data.note_list
            this_.total = response.data.total
            this_.display = response.data.display
            this_.current = response.data.current
            console.log(response)
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
      this.Bus.$on('toggleEvent', (target, index) => {
        this_.tab_cur_head = index
        this_.current = 1
        this_.update_data()
      })
    },
    destroyed: function () {
      this.GLOBAL.debug('main content destroyed')
    }
  }
</script>
