//PASO 1: OBTENER LA INFORMACIÓN Product URL  : Inits.js
// Paso 2: UTILIZAMOS LA FUNCION FETCH: En init.js
// paso 3: (orientacion) Ver en category la funcion. 
//paso 4: Poner URL de productos y ver coomo funciona en alguna consola   = await.
//paso 5 podemos usar FETCH o GETJASON DATA  en init.js
//Paso 6: Luego de que tenemos la informacion hacemos un procedimiento para insertarlo en el HTML
//paso 7: traemos los datos y lo guardamos en una variable, y con comillas invertidas (En contenido) y lo metemos con inner html
//PASO 8: Hacer procedimiento para insertar en HTML el primer producto
// PASO 9: hacer procedimiento para insertar todos los productos en el HTML

var categoriesArray = [];

function showCategoriesList(array) {

    let htmlContentToAppend = " ";
    for (let i = 0; i < array.length; i++) {
        let category = array[i];

        htmlContentToAppend += `
                <div class="row">
                
                <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name + `</h4>
                        
                        <small class="text-muted"><h3>` + category.currency + category.cost + `</h3>`+ category.soldCount + ` Unidades vendidas</small>
                    </div>
                    <p class="descript">`+ category.description + `</p>
                </div>
            </div>
        </div>
        `

        document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
    }

}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
    showSpinner()
    setTimeout(() => {
        getJSONData(PRODUCTS_URL).then(function (resultObj) {
            if (resultObj.status === "ok") {
                categoriesArray = resultObj.data;
                //Muestro las categorías ordenadas
                showCategoriesList(categoriesArray);
            }
            hideSpinner();
        });
    }, 500);
});
