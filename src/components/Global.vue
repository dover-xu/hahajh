<script>
  /* eslint-disable no-trailing-spaces,object-property-newline */

  /* eslint-disable camelcase */

  const PROD_ENV = false
//  const PROD_ENV = true

  let api
  if (PROD_ENV) {
    api = 'http://119.27.181.193:8077'
  } else {
    api = 'http://119.27.181.193:8087'
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
    }
  }
</script>
