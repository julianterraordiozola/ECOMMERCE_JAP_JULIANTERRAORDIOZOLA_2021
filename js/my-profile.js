//FUNCION PARA GUARDAR EN LOCALSTORAGE LA INFORMACION DE PERFIL
function guardar_miperfil() {

    let datosPerfil = {};
    datosPerfil.nombre = document.getElementById('nombre').value;
    datosPerfil.edad = document.getElementById('edad').value;
    datosPerfil.email = document.getElementById('email').value;
    datosPerfil.telefono = document.getElementById('telefono').value;

    localStorage.setItem('usuario', JSON.stringify(datosPerfil));
    actualizarFotoPerfil();
    alert("Perfil guardado")

}

//FUNCION PARA PREVISUALIZAR LA IMAGEN SELECCIONADA
function mostrarImagenPerfil() {

    var filesSelected = document.getElementById("agregar_foto").files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function (fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64

            var newImage = document.createElement('img');
            newImage.src = srcData;

            localStorage.setItem('fotoPerfil', srcData);


            document.getElementById("imgTest").innerHTML = newImage.outerHTML;

        }
        fileReader.readAsDataURL(fileToLoad);
    }
}


//FUNCION PARA MOSTRAR LA IMAGEN DE PERFIL

function actualizarFotoPerfil() {

    let htmlContentToAppend = "";

    htmlContentToAppend += `
        
        <div class="container">
      <div class="row">
        <div class="col-12">
          <img src="${localStorage.getItem("fotoPerfil")}" id="avatar_perfil" alt="...">
        </div>
      </div>
    </div>

        `

    document.getElementById("imagen_perfil").innerHTML = htmlContentToAppend;

}



//EVENTOS DEL DOM
document.addEventListener("DOMContentLoaded", function (e) {
    let verfoto = document.getElementById('agregar_foto');
    let datosPerfil = JSON.parse(localStorage.getItem('usuario'));

    if (datosPerfil != null) {

        document.getElementById('nombre').value = datosPerfil.nombre;
        document.getElementById('telefono').value = datosPerfil.telefono;
        document.getElementById('email').value = datosPerfil.email;
        document.getElementById('edad').value = datosPerfil.edad;
        actualizarFotoPerfil();

    } else {
        verfoto.src = "img/avatarInicial.png"
    }

});