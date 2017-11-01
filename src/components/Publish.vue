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
          <!--<form action="http://127.0.0.1:8008/publish" method="post" onsubmit="return empty_check2()" enctype="multipart/form-data">-->
            <!--<div class="select-pic2">-->
              <!--<input type="file" name="txt_file" id="txt_file2" class="file-loading2"/>-->
              <!--<span id="pic-null2">添加图片</span>-->
            <!--</div>-->
            <!--<div class="add-text">-->
              <!--<textarea class="text-area" placeholder="说点什么..." name="text_area" rows="5"></textarea>-->
            <!--</div>-->
            <!--<input type="submit" class="pub-trig" value="发布">-->
          <!--</form>-->
          <div class="edit">
            <div class="pic">
              <div>预览</div>
              <div class="img">
                <img :src="picture" @click="setPic">
                <span>选择</span>
              </div>
              <input type="file" name="pic" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none" @change="changeImage($event)" ref="picInput">
            </div>
            <!--<div class="my-input">-->
              <!--<label for="nickname">昵称：</label>-->
              <!--<input type="text" v-model="nickname" id="nickname">-->
            <!--</div>-->
            <div class="my-input">
              <!--<label for="intro">简介：</label>-->
              <textarea v-model="text_area" id="text_area" title="text"></textarea>
            </div>
            <button type="button" @click="edit">确认修改</button>
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
  @import "/static/focus/css/fileinput.css";

  .edit {
    text-align: center;
    padding-top: 0;
  }
  .edit .pic {
    padding: 30px;
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
    padding-bottom: 30px;
  }
  .edit .my-input textarea {
    width: 400px;
    height: 200px;
  }
  .edit button[type="button"] {
    /*color: #FFF;*/
    /*background-color: #26272B;*/
  }
</style>
<script>
//  import Bus from '@/components/bus.js'

  export default {
    name: 'Publish',
    data: function () {
      return {
        picture: '/static/focus/images/test_img1.png',
        text_area: '暂无介绍'
      }
    },
    methods: {
      // 修改了管理员信息
      edit () {
        // 修改了头像
        if (this.$refs.picInput.files.length !== 0) {
          let formData = new FormData()
//          console.log(image)
          formData.append('pic', this.$refs.picInput.files[0])
          formData.append('text_area', this.text_area)
          this.$axios.post('http://127.0.0.1:8008/publish', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        }
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
      }
    },
    created: function () {
      this.GLOBAL.debug('publish created')
    },
    destroyed: function () {
    }
  }
</script>
