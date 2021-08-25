<script data-main="scripts/main" src="scripts/require.js"></script>

require.config({
    shim: {
      'facebook' : {
        exports: 'FB'
      }
    },
    paths: {
      'facebook': 'https://connect.facebook.net/en_US/sdk.js'
    }
  })
  require(['fb']);
  