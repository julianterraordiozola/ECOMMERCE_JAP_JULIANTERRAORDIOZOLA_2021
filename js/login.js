//Funcion para ingresar al Index// 
function ingresar_index() {
  let Email = document.getElementById('inputEmail').value;
  let Password = document.getElementById('inputPassword').value;
//Tienen que completarse tanto Email como password para guardar el objeto en SessionStorage, como Login, True en ingresar a INDEX//
  if (Email !== "" && Password !=="") {
    sessionStorage.setItem('Email', Email);
    location.replace('index.html');

  };
};

// SCRIPT GOOGLE
function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
sessionStorage.setItem("Email", profile.getEmail());
location.replace('index.html');

  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}



