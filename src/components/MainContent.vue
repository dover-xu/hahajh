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
  import axios from 'axios'

  export default {
    name: "Content",
    components: {Pagination, ContentDetail, SideBar},
    data: function () {
      return {
        tab_cur_head: 0,
        tab_current: 0,
        note_list: [],
        total: 1,
        display: 5,
        current: 1
      }
    },
    methods: {
      update_data: function () {
        var url = `http://localhost:8008/contents?type=${this.tab_cur_head}&sort=${this.tab_current}&page=${this.current}&display=${this.display}`
        var this_ = this

        axios.get(url).then(
          function (data) {
            this_.note_list = data.data.note_list
            this_.total = data.data.total
            this_.display = data.data.display
            this_.current = data.data.current
          }).catch(
          function (response) {
            console.info(response)
          })
      },
      tab_sw: function (index) {
        this.tab_current = index
        this.update_data()
      },
      page_change: function (cur) {
        this.current = cur
        this.update_data()
      }
    },
    created: function () {
      var this_ = this
      this_.update_data()
      Bus.$on('toggleEvent', (target, index) => {
        this_.tab_cur_head = index
        this_.update_data()
        console.log(index)
      })
    },
    destroyed: function () {
      Bus.$off('toggleEvent')
    }
  }
</script>
