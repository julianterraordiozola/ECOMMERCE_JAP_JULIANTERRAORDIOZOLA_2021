//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e){0} ;//


function validar(){
  var inputEmail=document.getElementById("inputEmail").value;
    var inputPassword=document.getElementById("inputPassword").value;
  
  if(inputEmail=="admin@jap" && inputPassword=="admin") {
   alert("¡Login realizado con éxito!")
   window.open("home.html")
 }
}

document.addEventListener("DOMContentLoaded"), function(e){

}




