fetch(PRODUCTS_URL)
.then(Response => Response.json())
.then(data => {
    let contenedor=document.getElementById('contenedor')
    let contenido="";
    for(let p=0; p < data.lenght; p++) {
        contenido+=
        `

        <h1>${data[p].name}</h1>
        <p><img src=${data[p].imgSrc} + alt=""></p>
        <h4 style="width:780px">${data[p].description}</h4>
        <br>
        <h5>${data[p].cost} ${data[p].currency}</h6>
        <h5>${'Unidades Vendidas: ' + data[p].soldCount}</h4>
        <br><br> 
        ` 
     }
contenedor.innerHTML=contenido;

})

.catch(err=>console.log(err));

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            category = resultObj.data;

            let categoryNameHTML = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");

            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.productCount;
            productCriteriaHTML.innerHTML = category.productCriteria;
        });

//PASO 1: OBTENER LA INFORMACIÓN Product URL  : Inits.js
// Paso 2: UTILIZAMOS LA FUNCION FETCH: En init.js
// paso 3: (orientacion) Ver en category la funcion. 
//paso 4: Poner URL de productos y ver coomo funciona en alguna consola   = await.
//paso 5 podemos usar FETCH o GETJASON DATA  en init.js
//Paso 6: Luego de que tenemos la informacion hacemos un procedimiento para insertarlo en el HTML
//paso 7: traemos los datos y lo guardamos en una variable, y con comillas invertidas (En contenido) y lo metemos con inner html
//PASO 8: Hacer procedimiento para insertar en HTML el primer producto
// PASO 9: hacer procedimiento para insertar todos los productos en el HTML
