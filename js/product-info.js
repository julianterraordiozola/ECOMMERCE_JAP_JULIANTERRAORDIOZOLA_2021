const estrellaEnvuelta = document.querySelector(".estrellas");
const estrellas = document.querySelectorAll(".estrellas a");

estrellas.forEach((estrella, estrellaClickeada) => {
    estrella.addEventListener("click", () => {
        estrellaEnvuelta.classList.add("disabled");

        estrellas.forEach((otra_estrella, otra_estrellaClickeada) => {
            if (otra_estrellaClickeada <= estrellaClickeada) {
                otra_estrella.classList.add("active");

            }
        });
        localStorage.setItem('Puntuacion', estrellaClickeada + 1);

    });
});

var category = {};

//FUNCIONES PARA EL CARRUSEL//

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let images = array[i];
        if (i == 0) {

            htmlContentToAppend += `
        <div class="carousel-item active">
        <img class="d-block w-100" src="${images}" data-src="${images}" alt="First slide">
      </div>
       
        `
        } else {

            htmlContentToAppend += `
        <div class="carousel-item">
        <img class="d-block w-100" src="${images}" data-src="${images}" alt="First slide">
      </div>

   
        `
        }
        document.getElementById("imagenes_carrusel").innerHTML = htmlContentToAppend;

    }
}

function guardar_hora() {
    let now = new Date();

    sessionStorage.setItem('now', now)

}
//alert(now); // muestra en pantalla la fecha y la hora actuales//



//FUNCIONES PARA EL ENVIO DE COMENTARIOS//

function guardar_comentario() {
    let Comentario = document.getElementById('comentario_producto').value;
    //Si no es exactamente igual a vacio Guardo en local storage el comentario generado en el campo//

    localStorage.setItem('Comentario', Comentario);



    enviar_comentario();
    guardar_hora();

};




function enviar_comentario() {

    let htmlContentToAppend = "";

    htmlContentToAppend += ` <div class="list-group-item list-group-item-action">
                        
                        
    <div class="vendidos">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">👤${sessionStorage.getItem('Email')}</h4><p>📅🕚${sessionStorage.getItem('now')}</p>
                                          
        </div>  
    </div>  
 <p class="descript"><p class="titulos_comentarios">Opinión:</p><div class="texto_descripcion">${localStorage.getItem('Comentario')}</p></div>
 <div class="vendidos">
    <small class="text-muted"><h5>Puntuación:${localStorage.getItem('Puntuacion')}</small>
 </div>
 <br>
    
    </p>

<div>


</div>
</div>
`

    document.getElementById("mostrar_comentario").innerHTML = htmlContentToAppend;


}


function cambie_opinion() {

    localStorage.removeItem('Comentario');
    localStorage.removeItem('Puntuacion');
    location.replace('product-info.html');

}



//FUNCION PARA MOSTRAR LA LISTA DE COMENTARIOS JSON y ESTRELLAS//
function showCommentsList(array) {

    let htmlContentToAppend = " ";
    for (let i = 0; i < array.length; i++) {

        let comments = array[i];
        

        if (array[i].score === 1) {           
            

            htmlContentToAppend += `

                        
           <div class="list-group-item list-group-item-action">
               
               
                   <div class="vendidos">
                       <div class="d-flex w-100 justify-content-between">
                           <h4 class="mb-1">👤` + comments.user + `</h4><p>` + comments.dateTime + `</p>
                                                         
                       </div>  
                   </div>  
                <p class="descript"><p class="titulos_comentarios">Opinión:</p><div class="texto_descripcion">` + comments.description + `</p></div>
                <div class="vendidos">
                   <small class="text-muted"><h5>Puntuación:⭐</small>
          
                   
                </div>
                <br>
                   
                   </p>
             
           <div>
           
       
   </div>
</div>
 `

        }

        else if (array[i].score === 2) {
         
            htmlContentToAppend += `

                        
           <div class="list-group-item list-group-item-action">
               
               
                   <div class="vendidos">
                       <div class="d-flex w-100 justify-content-between">
                           <h4 class="mb-1">👤` + comments.user + `</h4><p>` + comments.dateTime + `</p>
                                                         
                       </div>  
                   </div>  
                <p class="descript"><p class="titulos_comentarios">Opinión:</p><div class="texto_descripcion">` + comments.description + `</p></div>
                <div class="vendidos">
                   <small class="text-muted"><h5>Puntuación:⭐⭐</small>
                 
                   
                </div>
                <br>
                   
                   </p>
             
           <div>
           
       
   </div>
</div>
 `

        }

        else if (array[i].score === 3) {
                       

            htmlContentToAppend += `

                        
           <div class="list-group-item list-group-item-action">
               
               
                   <div class="vendidos">
                       <div class="d-flex w-100 justify-content-between">
                           <h4 class="mb-1">👤` + comments.user + `</h4><p>` + comments.dateTime + `</p>
                                                         
                       </div>  
                   </div>  
                <p class="descript"><p class="titulos_comentarios">Opinión:</p><div class="texto_descripcion">` + comments.description + `</p></div>
                <div class="vendidos">
                   <small class="text-muted"><h5>Puntuación:⭐⭐⭐</small>
                   
                   
                </div>
                <br>
                   
                   </p>
             
           <div>
           
       
   </div>
</div>
 `

        }
        else if (array[i].score === 4) {
                       
           
            htmlContentToAppend += `

                        
            <div class="list-group-item list-group-item-action">
                
                
                    <div class="vendidos">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">👤` + comments.user + `</h4><p>` + comments.dateTime + `</p>
                                                          
                        </div>  
                    </div>  
                 <p class="descript"><p class="titulos_comentarios">Opinión:</p><div class="texto_descripcion">` + comments.description + `</p></div>
                 <div class="vendidos">
                    <small class="text-muted"><h5>Puntuación:⭐⭐⭐⭐</small>
                                       
                 </div>
                 <br>
                    
                    </p>
              
            <div>
            
        
    </div>
 </div>
  `

        }
        else if (array[i].score === 5) {
           
            htmlContentToAppend += `

                        
            <div class="list-group-item list-group-item-action">
                
                
                    <div class="vendidos">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">👤` + comments.user + `</h4><p>` + comments.dateTime + `</p>
                                                          
                        </div>  
                    </div>  
                 <p class="descript"><p class="titulos_comentarios">Opinión:</p><div class="texto_descripcion">` + comments.description + `</p></div>
                 <div class="vendidos">
                    <small class="text-muted"><h5>Puntuación:⭐⭐⭐⭐⭐</small>
                    
                    
                 </div>
                 <br>
                    
                    </p>
              
            <div>
            
        
    </div>
 </div>
  `

        }
else{
    console.log("Debe tener una calificación de 1 a 5")
}
        

    }
    document.getElementById("agregar_comentarios").innerHTML = htmlContentToAppend;
}





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            category = resultObj.data;


            let productNameHTML = document.getElementById("categoryName");
            let productDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
            let productCurrencyHTML = document.getElementById("currency");
            let productCostHTML = document.getElementById("cost");


            productNameHTML.innerHTML = category.name;
            productDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.soldCount;
            productCriteriaHTML.innerHTML = category.category;
            productCurrencyHTML.innerHTML = category.currency;
            productCostHTML.innerHTML = category.cost;

            //Muestro las imagenes en forma de galería//
            showImagesGallery(category.images);


        }
    });


});

//Obtengo la info de los comentarios de la url y los muestro//

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comments = resultObj.data;

            showCommentsList(comments);


        }
    });


});