//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e){0} ;//
let REGISTOR_MSG = "¡Has creado tu cuenta! ¡Ingresa a tu mail para verificarla y asi loguearte! :)";


const usuario = document.getElementById("userName")
const password = document.getElementById("emailRegistro")
const password = document.getElementById("passwordRegistro")
const warnigns = document.getElementById("confirmPassRegistro")
const registro = document.getElementById("confirmPassRegistro")



function validate(){
    var inputEmail=document.getElementById("userName").value;
      var inputPassword=document.getElementById("emailRegistro").value;
      var inputPassword=document.getElementById("passwordRegistro").value;
      var inputPassword=document.getElementById("confirmPassRegistro").value;
    
    if(userName=="visitante" && emailRegistro=="visitante@jap" && passwordRegistro=="visi123" && confirmPassRegistro=="visi123")
    {
     alert("¡Has creado tu cuenta!");
     window.open("index.html");
   }
 else {
     alert("¡No se pudo realizar el Login!");
 }
 }


 //hacer un evento que cuando de click al boton login pase algo//

