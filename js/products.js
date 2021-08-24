const ORDER_ASC_BY_NAME_P = "AZ";
const ORDER_DESC_BY_NAME_P = "ZA";
const ORDER_BY_PROD_COUNT_P = "Cant.";
var currentCategoriesArray_P = [];
var currentSortCriteria_P = undefined;
var minCount_P = undefined;
var maxCount_P = undefined;

function sortCategories(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME_P) {
        result = array.sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_NAME_P) {
        result = array.sort(function (a, b) {
            if (a.name > b.name) { return -1; }
            if (a.name < b.name) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_PROD_COUNT_P) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;
}
var categoriesArray = [];

function showCategoriesList(array) {

    let htmlContentToAppend = " ";
    for (let i = 0; i < array.length; i++) {
        let category = array[i];
        console.log(category);
        htmlContentToAppend += `
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img src="` + category.imgSrc + `" alt="` + category.description + `" class="card-img-top">
                        <div class="card-body">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ category.name + `</h4>
                                    
                                <small class="text-muted"><h3>` + category.currency + category.cost + `</h3>` + category.soldCount + ` Unidades vendidas</small>
                            </div>
                         <p class="descript">`+ category.description + `</p>
                            <p> <a type="button" class="btn btn-sm btn-outline-secondary" href="product-info.html" >🛈</a>
                             <a type="button"  class="btn btn-sm btn-outline-secondary" href="cart.html">🛒</a>
                            </p>
                        </div>
                    <div>
                    
                </div>
            </div>
        </div>
        `

        document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
    }


}
function sortAndShowCategories(sortCriteria, categoriesArray) {
    currentSortCriteria_P = sortCriteria;

    if (categoriesArray != undefined) {
        currentCategoriesArray_P = categoriesArray;
    }

    currentCategoriesArray_P = sortCategories(currentSortCriteria, currentCategoriesArray_P);

    //Muestro las categorías ordenadas
    showCategoriesList();
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