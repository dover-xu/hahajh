<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <!-- 分页内容 -->
        <div class="col-sm-offset-1 col-sm-7 main-left">
          <ul class="nav nav-justified pub-topic hidden-xs">
            <li :class="{active:(tab_current==0)}" @click.prevent="tab_sw(0)" style="border-bottom: 1px solid #eee;border-right: 1px solid #eee;">
              <a href="" :style="{'color':(tab_current==0)?'#ac483d':''}">
                <i class="fa fa-picture-o topic-icon"></i>
                <span>图片</span>
              </a>
            </li>
            <li :class="{active:(tab_current==1)}" @click.prevent="tab_sw(1)" style="border-bottom: 1px solid #eee">
              <a href="" :style="{'color':(tab_current==1)?'#ac483d':''}">
                <i class="fa fa-file-text-o topic-icon"></i>
                <span>段子</span>
              </a>
            </li>
          </ul>
          <ul class="nav pub-topic hidden-sm hidden-md hidden-lg" style="margin-left:20px">
            <li  :class="{active:(tab_current==0)}" @click.prevent="tab_sw(0)" >
              <a href="" :style="{'color':(tab_current==0)?'#ac483d':''}" style="float: left">
                <i class="fa fa-picture-o topic-icon"></i>
                <span>图片</span>
              </a>
            </li>
            <li  :class="{active:(tab_current==1)}" @click.prevent="tab_sw(1)" >
              <a href="" :style="{'color':(tab_current==1)?'#ac483d':''}" style="float: left">
                <i class="fa fa-file-text-o topic-icon"></i>
                <span>段子</span>
              </a>
            </li>
          </ul>
          <div class="edit">
            <div class="pic" v-if="tab_current === 0">
              <div>预览</div>
              <div class="img">
                <img :src="picture" @click="setPic">
                <span>选择</span>
              </div>
              <input type="file" name="pic" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none" @change="changeImage($event)" ref="picInput">
            </div>
            <div class="my-input">
              <!--<label for="intro">简介：</label>-->
              <textarea v-model="text_area" id="text_area" title="text"></textarea>
            </div>
            <button type="button" @click="edit">我要发布</button>
          </div>
        </div>
        <!-- 右侧边栏 -->
        <div class="col-sm-3 hidden-xs main-right">
          <img src="/static/focus/images/test_img1.png" alt="图片无法显示" class="img-thumbnail">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">

  .edit {
    text-align: center;
    padding-top: 0;
  }
  .edit .pic {
    padding: 30px 30px 0 30px;
    cursor: pointer;
  }
  .edit .pic div{
    margin: 5px 0;
  }
  .edit .pic .img {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 5%;
  }
  .edit .pic .img img {
    width: 200px;
    height: 200px;
    display: block;
  }
  .edit .pic .img span {
    width: 200px;
    background-color: rgba(0, 0, 0, .3);
    display: block;
    position: absolute;
    bottom: 0;
    font-size: 12px;
    color: #FFF;
    padding: 8px 0;
    pointer-events: none;
  }
  .edit .my-input {

    padding-top: 30px;
    padding-bottom: 30px;
  }
  .edit .my-input textarea {
    width: 400px;
    height: 200px;
  }
  .edit button[type="button"] {
    display: block;
    width: 200px;
    height: 40px;
    margin: 20px auto 10px;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 0 0 1000px #EB4F38 inset;
  }

</style>
<script>
//  import Bus from '@/components/bus.js'

  export default {
    name: 'Publish',
    data: function () {
      return {
        picture: '/static/focus/images/test_img1.png',
        text_area: '说点什么呢。。。',
        tab_current: 0
      }
    },
    methods: {
      edit () {
        let formData = new FormData()
        let url = `${this.GLOBAL.api}/publish`
        let this_ = this
        if (this.tab_current === 0) {
          formData.append('pic', this.$refs.picInput.files[0])
        }
        formData.append('text_area', this.text_area)
        this.$axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(
          function (response) {
            if (response.data.hasOwnProperty('is_success') && response.data.is_success === true) {
              this_.$router.push('/')
            }
          })
      },
      // 模拟触发click事件
      setPic () {
        this.$refs.picInput.click()
      },
      // 选择新的头像后，可以预览
      changeImage (e) {
        let file = e.target.files[0]
        let reader = new FileReader()
        let this_ = this
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          console.log(e)
          this_.picture = e.target.result
        }
      },
      /*  导航栏切换  */
      tab_sw: function (index) {
        this.tab_current = index
      }
    },
    created: function () {
      this.GLOBAL.debug('publish created')
    },
    destroyed: function () {
    }
  }
</script>
