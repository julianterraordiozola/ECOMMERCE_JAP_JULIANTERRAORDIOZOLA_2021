define(['facebook'], function(){
    FB.init({
      appId      : '{your-app-id}',
      version    : 'v11.0'
    });
    FB.getLoginStatus(function(response) {
      console.log(response);
    });
  });