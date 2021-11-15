let divisaUY = "UYU"
var valorEnvio1 = 0;
var valorEnvio2 = 0.05;
var valorEnvio3 = 0.07;
var valorEnvio4 = 0.15;
let valorTotalFinal = document.getElementById("valor_total").value;
let porcentaje = "-%";



//FUNCION QUE MUESTRA EL CARRITO
function mostrarCarrito() {

	let htmlToAppend = "";

	let i = 0;

	for (let article of productosCarrito) {


		htmlToAppend += `

		<div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
		<div class="d-flex flex-row"><img class="rounded" src="${article.src}" width="40">
		  <div class="ml-2"><span "class="font-weight-bold d-block">${article.name}</span><span class="spec">
			</span>
			<div class="ml-2"><span class="font-weight-light d-block"><span class="spec" id="divisa">${article.currency}</span>
				<span class="spec" type="number" id="precio_unitario">${article.unitCost}</span><span class="spec">/ Precio unitario</span></div>
		  </div>
		</div>
		<div class="d-flex flex-row align-items-center"><div class="d-block ml-4 font-weight-bold" id="divisa2">${article.currency}</div>
		<span class="d-block ml-4 font-weight-bold" id="monto_parcial">${(article.unitCost*article.count)}</span><i
			class="fa fa-trash-o ml-3 text-black-50"></i></div>
		<div class="col-2" width="40">
		  <div class="row-4">
			<input type="number" id="inputCount" class="form-control"  onchange="monto_parcial(${i},this.value);" placeholder="" required="" value="${article.count}" min="0">
			<span><button class="btn btn-alert borrar" id="boton_borrar" onclick="borrarProducto(${i});">🗑️</button></span>
		  </div>
		</div>

	  </div>
		
        `
		i++;
	}
	document.getElementById("contenedor_productos").innerHTML = htmlToAppend;


}

function borrarProducto(productoBorrado){


	productosCarrito.splice(productoBorrado, 1);

	mostrarCarrito();
	mostrarSubtotal();
	mostrarCantidadProductos();
	calcularEnvio();
	// calcularTotal();

}



//FUNCION QUE LLAMA AL CARRITO
function obtenerCarrito(url) {

	return fetch(url)
		.then(respuesta => {
			return respuesta.json();
		})
}




//CALCULO MONTO PARCIAL PRODUCTO
function monto_parcial(productoID, value) {


	productosCarrito[productoID].count = value;
	mostrarCarrito();
	mostrarSubtotal();
	mostrarCantidadProductos();
	// calcularTotal();
	calcularEnvio();


}



//MUESTRO SUBTOTAL
function mostrarSubtotal() {
	let total = 0;

	for (article of productosCarrito) {
		if (article.currency == "USD") {
			let subtotal = (article.unitCost * article.count) * 40;

			total += subtotal;

		} else {
			let subtotal = (article.unitCost * article.count);
			total += subtotal;
		}
	}

	let htmlContentToAppend = "";

	htmlContentToAppend += `` + divisaUY + total + ``

	document.getElementById("subtotal").innerHTML = htmlContentToAppend;


}




//MUESTRO LA CANTIDAD DE PRODUCTOS
function mostrarCantidadProductos() {
	let total_productos = 0;

	for (article of productosCarrito) {
		let cantidad_productos = article.count

		total_productos += parseInt(cantidad_productos);
	}


	let htmlContentToAppend = "";

	htmlContentToAppend += total_productos;

	document.getElementById("cantidad_productos_carrito").innerHTML = htmlContentToAppend;
}


/* 
//CALCULO TOTAL
function calcularTotal(envio = 0) {
	let calculototal = 0;
	

	for (article of productosCarrito) {


		if (article.currency == "USD") {
			let subtotal = (article.unitCost * article.count) * 40;
			let precioTotal = subtotal + envio;
			calculototal += precioTotal;
		} else {
			let subtotal = (article.unitCost * article.count);
			let precioTotal = subtotal + envio;
			calculototal += precioTotal;
		}

	}

	let htmlContentToAppend = "";

	htmlContentToAppend += ``+ calculototal + ``

	document.getElementById("valor_total").innerHTML = htmlContentToAppend;


} */




// FUNCION PARA CALCULAR EL ENVIO TOTAL
function calcularEnvio(valordeEnvio) {

	let subtotal = 0;

	for (article of productosCarrito) {


		if (article.currency == "USD") {
			subtotal += (article.unitCost * article.count) * 40;


		} else {
			subtotal += (article.unitCost * article.count);


		}

	}


	console.log(subtotal);

	let costoEnvio = subtotal * valordeEnvio;
	let total = subtotal+costoEnvio;


	if (valordeEnvio == 0) {

		let htmlContentToAppend = "";

		htmlContentToAppend += `<span class="envio_valor">` + "📍" +divisaUY+ costoEnvio + `</span>`

		document.getElementById("valor_envio").innerHTML = htmlContentToAppend;
		console.log(document.getElementById("valor_total"));

	} else if (valordeEnvio == 0.05) {

		let htmlContentToAppend = "";

		htmlContentToAppend += `<span class="envio_valor">` + "🚚" +divisaUY+ costoEnvio + `</span>`

		document.getElementById("valor_envio").innerHTML = htmlContentToAppend;

	} else if (valordeEnvio == 0.07) {

		let htmlContentToAppend = "";

		htmlContentToAppend += `<span class="envio_valor">`+ "💨" +divisaUY + costoEnvio + `</span>`

		document.getElementById("valor_envio").innerHTML = htmlContentToAppend;
		

	} else if (valordeEnvio == 0.15) {

		let htmlContentToAppend = "";

		htmlContentToAppend += `<span class="envio_valor">`+ "🚀" +divisaUY+costoEnvio + `</span>`

		document.getElementById("valor_envio").innerHTML = htmlContentToAppend;

	}

	let htmlContentToAppend = "";

	htmlContentToAppend += ``+ total + ``

	document.getElementById("valor_total").innerHTML = htmlContentToAppend;

}



//MUESTRO EL DESCUENTO DEL METODO DE PAGO
 function pago1() {

	let descuento1 = 0;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<p>` + porcentaje + descuento1 + `</p>`

	document.getElementById("descuento_metodo").innerHTML = htmlContentToAppend;
}
pago1();

function pago2() {

	let descuento2 = 5;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<p>` + porcentaje + descuento2 + `</p>`

	document.getElementById("descuento_metodo").innerHTML = htmlContentToAppend;
}

function pago3() {

	let descuento3 = 10;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<p>` + porcentaje + descuento3 + `</p>`

	document.getElementById("descuento_metodo").innerHTML = htmlContentToAppend;
}

function pago4() {

	let descuento4 = 20;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<p>` + porcentaje + descuento4 + `</p>`

	document.getElementById("descuento_metodo").innerHTML = htmlContentToAppend;
}



//EVENTOS DEL DOM
document.addEventListener("DOMContentLoaded", function (e) {
	obtenerCarrito(CART_INFO_URL)
		.then(respuesta => {
			productosCarrito = respuesta.articles;
			// calcularTotal();
			mostrarCarrito();
			mostrarSubtotal();
			mostrarCantidadProductos();
			calcularEnvio(0);
			

		})
})