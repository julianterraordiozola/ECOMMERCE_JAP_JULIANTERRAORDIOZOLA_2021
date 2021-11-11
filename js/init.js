const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}


//Genera dentro en sessionStorage un dato llamado "ingresado" con valor "true" //
//sessionStorage.setItem('Ingresado', 'true');
//Variable que obtiene de Login  y si "Ingreso" o "Login" son Null , me redirige a Login //
//var ingreso = sessionStorage.getItem('Email');
//if (ingreso |= sessionStorage.getItem('Email') === null) {

if (sessionStorage.getItem('Email') === null) {
  location.replace('login.html');
}

//Funcion asociada a boton de cerrar_sesion / removiendo los objetos de SessionStorage en la misma ventana del Navegador y redirigiendo a Login//
function cerrar_sesion() {
  sessionStorage.removeItem('Email');
  localStorage.clear();
  location.replace('login.html');

  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut()
 }

function mostrar_usuario() {

  let htmlContentToAppend = "";

  htmlContentToAppend += `<a class="barra_usuario">👤 ${sessionStorage.getItem('Email')}</a>`
  
  document.getElementById("barra_usuario").innerHTML = htmlContentToAppend;
}


//Lista de eventos a ejecutar//
document.addEventListener("DOMContentLoaded", function(e) {
    mostrar_usuario();
})