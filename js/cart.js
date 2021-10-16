let productosCarrito = []



//FUNCION QUE MUESTRA EL CARRITO
function mostrarCarrito() {

	let htmlToAppend = "";
	for (let article of productosCarrito) {

		htmlToAppend += `

		<div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
		<div class="d-flex flex-row"><img class="rounded" src="${article.src}" width="40">
		  <div class="ml-2"><span class="font-weight-bold d-block">${article.name}</span><span class="spec">
			</span>
			<div class="ml-2"><span class="font-weight-light d-block"><span class="spec" id="divisa">${article.currency}</span>
				<span class="spec" id="precio_unitario">${article.unitCost}/ Precio unitario</span></div>
		  </div>
		</div>
		<div class="d-flex flex-row align-items-center"><span
			class="d-block ml-4 font-weight-bold" id="monto_parcial">${article.currency}${(article.unitCost)*(article.count)}</span><i
			class="fa fa-trash-o ml-3 text-black-50"></i></div>
		<div class="col-2" width="40">
		  <div class="row-4">
			<input type="number" id="inputCount" class="form-control" placeholder="" required="" value="${article.count}" min="0" onclick="mostrarCantidadProductos();">
			<span><button class="btn btn-alert borrar" id="boton_borrar">🗑️</button></span>
		  </div>
		</div>
	  </div>
		
        `

	}
	document.getElementById("contenedor_productos").innerHTML = htmlToAppend;


}

//FUNCION QUE PIDE AL CARRITO
function obtenerCarrito(url) {

	return fetch(url)
		.then(respuesta => {
			return respuesta.json();
		})
}


//PRUEBA_BORRAR EL PRODUCTO DEL CARRITO
function eraseText() {
	document.getElementById("inputCount").value = "";
}

//MUESTRO SUBTOTAL
function mostrarSubtotal() {

	let htmlContentToAppend = "";

	htmlContentToAppend += `${document.getElementById("monto_parcial").textContent}`

	document.getElementById("subtotal").innerHTML = htmlContentToAppend;
}


//MUESTRO LA CANTIDAD DE PRODUCTOS

function mostrarCantidadProductos() {

	let htmlContentToAppend = "";

	htmlContentToAppend += `${document.getElementById("inputCount").value}`

	document.getElementById("cantidad_productos_carrito").innerHTML = htmlContentToAppend;
}


// FUNCIONES DE DESCUENTOS POR METODO DE PAGO

function envio1() {
	let divisa1= "UYU";
	let valorenvio1 = "000";

	let htmlContentToAppend = "";

	htmlContentToAppend += `<p>`+ divisa1 + valorenvio1 + `</p>`

	document.getElementById("valor_envio").innerHTML = htmlContentToAppend;
}

function envio2() {
	
	let divisa2= "UYU";
	let valorenvio2 = 120;
	

	let htmlContentToAppend = "";

	htmlContentToAppend += `<p>`+ divisa2 + valorenvio2 + `</p>`

	document.getElementById("valor_envio").innerHTML = htmlContentToAppend;
}

function envio3() {
	
	let divisa3= "UYU";
	let valorenvio3 = 170;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<p>`+ divisa3 + valorenvio3 + `</p>`

	document.getElementById("valor_envio").innerHTML = htmlContentToAppend;
}






//EVENTOS DEL DOM
document.addEventListener("DOMContentLoaded", function (e) {
	obtenerCarrito(CART_INFO_URL)
		.then(respuesta => {
			productosCarrito = respuesta.articles;
			mostrarCarrito();
			mostrarSubtotal();
			mostrarCantidadProductos();



		})
})