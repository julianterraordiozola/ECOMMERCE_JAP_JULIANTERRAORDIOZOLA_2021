const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
var currentCategoriesArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;


//Clasificar productos//
function sortCategories(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME) {
        result = array.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_NAME) {
        result = array.sort(function (a, b) {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            return 0;
        });
    } else if (criteria === ORDER_BY_PROD_COUNT) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if (aCount > bCount) {
                return -1;
            }
            if (aCount < bCount) {
                return 1;
            }
            return 0;
        });
    }

    return result;
}


function showCategoriesList(array) {

    let htmlContentToAppend = " ";
    for (let i = 0; i < array.length; i++) {
        debugger;
        let category = array[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(category.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.cost) <= maxCount))) {


            htmlContentToAppend += `
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img src="` + category.imgSrc + `" alt="` + category.description + `" class="card-img-top">
                        <div class="card-body">
                            <div class="vendidos">
                                <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">` + category.name + `</h4>
                                                                  
                                </div>  
                            </div>  

                         <p class="descript">` + category.description + `</p>
                         <div class="vendidos">
                            <small class="text-muted"><h3>` + category.currency + category.cost + `</h3>` + category.soldCount + ` Unidades vendidas</small>
                         </div>
                         <br>
                            <p> <a type="button" class="btn btn-sm btn-outline-secondary" href="product-info.html" >🛈</a>
                             <a type="button"  class="btn btn-sm btn-outline-secondary" href="cart.html">🛒</a>
                            </p>
                        </div>
                    <div>
                    
                </div>
            </div>
         </div>
          `
        }
        document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
        document.getElementById("products-list-container2").innerHTML = htmlContentToAppend;
    }


}

function sortAndShowCategories(sortCriteria, categoriesArray) {
    currentSortCriteria = sortCriteria;

    if (categoriesArray != undefined) {
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    showCategoriesList(currentCategoriesArray);
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.




document.addEventListener("DOMContentLoaded", function (e) {
    showSpinner()
    setTimeout(() => {
        getJSONData(PRODUCTS_URL).then(function (resultObj) {
            if (resultObj.status === "ok") {
                currentCategoriesArray = resultObj.data;
                //Muestro las categorías ordenadas
                showCategoriesList(currentCategoriesArray);
            }
            hideSpinner();
        });
    }, 500);


    document.getElementById("sortAsc").addEventListener("click", function () {
        sortAndShowCategories(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function () {
        sortAndShowCategories(ORDER_DESC_BY_NAME);
    });

    document.getElementById("sortByCount").addEventListener("click", function () {
        sortAndShowCategories(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function () {
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList(currentCategoriesArray);
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function () {
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0) {
            minCount = parseInt(minCount);
        } else {
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
            maxCount = parseInt(maxCount);
        } else {
            maxCount = undefined;
        }

        showCategoriesList(currentCategoriesArray);
    });

});