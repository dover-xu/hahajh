<script>
  /* eslint-disable no-trailing-spaces,object-property-newline,no-unused-vars,camelcase */

//  const PROD_ENV = false
  const PROD_ENV = true

  let api
  if (PROD_ENV) {
    api = 'http://www.hahajh.com'
  } else {
    api = 'http://int.hahajh.com'
  }

  let isDebug = true
  let debug = function (info) {
    if (isDebug) console.log(info)
  }

  export default {
    api, debug,
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
