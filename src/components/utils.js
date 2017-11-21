/* eslint-disable camelcase */
from
const api = 'http://119.27.181.193:8077'
const isDebug = true

const MyPlugin = {
  install (Vue, options) {
    Vue.prototype.$praise_tread_share = function (note, action) {
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
    }
    Vue.prototype.$api = api
    Vue.prototype.$debug = function (info) {
      if (isDebug) console.log(info)
    }
  }
}
export default MyPlugin
