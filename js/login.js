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





