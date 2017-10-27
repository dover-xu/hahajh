<script>
  var isDebug = true
  var debug = function (info) {
    if (isDebug) console.log(info)
  }
  const api = 'http://127.0.0.1:8008'
  export default {
    api, debug
  }
</script>
