<script>
  /* eslint-disable no-trailing-spaces,object-property-newline,no-unused-vars */

  /* eslint-disable camelcase */

//  const PROD_ENV = false
  const PROD_ENV = true

  let api
  let set_baidu_tongji
  if (PROD_ENV) {
    api = 'http://www.hahajh.com'
    set_baidu_tongji = function (set_url_func) {
      set_url_func('https://hm.baidu.com/hm.js?6483835bcf6361da3ab555c65c6a541c')
    }
  } else {
    api = 'http://int.hahajh.com'
    set_baidu_tongji = function (set_url_func) {
      set_url_func('https://hm.baidu.com/hm.js?c9546c19005890b7ff5010c5e05918d5')
    }
  }

  let isDebug = true
  let debug = function (info) {
    if (isDebug) console.log(info)
  }

  export default {
    api, set_baidu_tongji, debug,
    praise_tread_share: function (Vue, note, action) {
      let url = `${api}/api/a-p-t-s/`
      let jsonData = JSON.stringify({'note_id': note.id, 'action': action})
      if ((note.Praised === true) || (note.Treaded === true)) return
      Vue.$axios.post(url, jsonData).then(
        function (response) {
          if (response.data.is_success) {
            if (action === 'praise') {
              note.Praised = true
              note.praise_str = String(response.data.praise_num)
            } else if (action === 'tread') {
              note.Treaded = true
              note.tread_str = String(response.data.tread_num)
            } else if (action === 'share') {
              note.share_str = String(response.data.share_num)
            }
          }
        }
      )
    },
    update_user_state: function (Vue, resolve) {
      let url = `${api}/manager/user-state/`
      Vue.$axios.get(url).then(
        function (response) {
          let is_login, user
          if (response.data.hasOwnProperty('is_login')) {
            is_login = response.data.is_login
          }
          if (response.data.hasOwnProperty('user')) {
            user = response.data.user
          }
          resolve({'is_login': is_login, 'user': user})
        }
      )
    }
  }
</script>
