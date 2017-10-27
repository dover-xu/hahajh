<script>
  var isDebug = true
  var debug = function (info) {
    if (isDebug) console.log(info)
  }
  const api = 'http://localhost:8008'
  export default {
    api, debug
  }
</script>
