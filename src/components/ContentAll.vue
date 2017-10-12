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
              <!--<li v-bind:class="{active:(tab_current==0)}" v-on:click="tab_current = 0">-->
                <!--<router-link :to="this.type " v-bind:style="{'color':(tab_current==0)?'#ac483d':''}">推荐</router-link>-->
              <!--</li>-->
              <!--<li v-bind:class="{active:(tab_current==1)}" v-on:click="tab_current = 1">-->
                <!--<router-link :to="'/' + this.type + '/push'" v-bind:style="{'color':(tab_current==1)?'#ac483d':''}">最新</router-link>-->
              <!--</li>-->
              <!--<li v-bind:class="{active:(tab_current==2)}" v-on:click="tab_current = 2">-->
                <!--<router-link :to="'/' + this.type + '/push'" v-bind:style="{'color':(tab_current==0)?'#ac483d':''}">最热</router-link>-->
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
  /* eslint-disable quotes,no-unused-vars */

  export default {
    name: "Content",
    data: function () {
      return {
        tab_current: 0,
//        type: 'all',
        tab_list: [
          {name: '推荐', addr: '/all/push'},
          {name: '最新', addr: '/all/new'},
          {name: '最热', addr: '/all/hot'}
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
      },
      set_type_val: function (urlStr) {
        var tp = urlStr.split('/')[1]
        if (tp === 'pic') {
          console.log(1111)
          this.type = 'pic'
        } else if (tp === 'jape') {
          console.log(2222)
          this.type = 'jape'
        } else {
          console.log(3333)
          this.type = 'all'
        }
        console.log(this.type)
      }
    },
    created: function () {
//      this.set_type_val(this.$route.path)
      this.set_tab_val(this.$route.path)
    }
  }
</script>
