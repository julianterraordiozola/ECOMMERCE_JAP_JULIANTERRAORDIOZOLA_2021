const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "json/products.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});




/*Voy a usar el local storage para guardar información datos de validación 
   Todavia no se como hacer para que la pagina index.html evalue si esta o no el usuario logueado
   por lo que voy a cambiar el nombre a la pagina login.html a index.html y index.html pasara a ser home.html*/
obtener_localstorage();

function obtener_localstorage(){
  let inputEmail = localStorage.getItem("inputEmail");
  let inputPassword = localStorage.getItem("inputPassword");

  
  console.log (inputEmail);
  console.log (inputPassword);
 
}

guardar_localstorage();

function guardar_localstorage(){
  let usuario = {
    inputEmail: "admin@jap",
    inputPassword: admin,
    }};

let inputEmail = "admin@jap"
let inputPassword = "admin"


localStorage.setItem("inputEmail", JSON.stringify(inputEmail));
localStorage.setItem("inputPassword", JSON.stringify(inputPassword));


//Tengo que chequear por que usar el JSON.strigify(Que beneficios trara?) o si simplemente pongo la variable inputPassword//



