let divisaUY = "UYU"
let envio = document.getElementsByClassName("envio_valor").value;
var envio_valor2 = parseInt(envio);

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
			<input type="number" id="inputCount" class="form-control"  onchange="calcularTotal();" placeholder="" required="" value="${article.count}" min="0" onclick="mostrarCantidadProductos();">
			<span><button class="btn btn-alert borrar" id="boton_borrar"  onclick="eraseText();">🗑️</button></span>
		  </div>
		</div>

	  </div>
		
        `
i++;

	}
	document.getElementById("contenedor_productos").innerHTML = htmlToAppend;
 

}

//FUNCION QUE LLAMA AL CARRITO
function obtenerCarrito(url) {

	return fetch(url)
		.then(respuesta => {
			return respuesta.json();
		})
}

//PRUEBA_BORRAR EL PRODUCTO DEL CARRITO
function eraseText() {
	document.getElementById("inputCount").value = 0;
	calcularTotal();

}
 //FUNCION PARA RESETEAR BOTON DE ENVIO



//CALCULO MONTO PARCIAL PRODUCTO
function monto_parcial() {


	let precio_unitario3 = document.getElementById("precio_unitario").textContent;
	let cantidad_productos3 = document.getElementById("inputCount").value;


	let htmlContentToAppend3 = "";

	htmlContentToAppend3 += `` + precio_unitario3 * cantidad_productos3 + ``


	document.getElementById("monto_parcial").innerHTML = htmlContentToAppend3;

}



//MUESTRO SUBTOTAL
function mostrarSubtotal() {

	let precio_unitario4 = document.getElementById("precio_unitario").textContent;
	let cantidad_productos4 = document.getElementById("inputCount").value;


	let htmlContentToAppend = "";

	htmlContentToAppend += `` + divisaUY + precio_unitario4 * cantidad_productos4 + ``


	document.getElementById("subtotal").innerHTML = htmlContentToAppend;



}



//MUESTRO LA CANTIDAD DE PRODUCTOS
function mostrarCantidadProductos() {

	let htmlContentToAppend = "";

	htmlContentToAppend += `${document.getElementById("inputCount").value}`

	document.getElementById("cantidad_productos_carrito").innerHTML = htmlContentToAppend;

}


//CALCULO TOTAL
function calcularTotal(x=0) {


	let precio_unitario2 = document.getElementById("precio_unitario").textContent;
	let cantidad_productos2 = document.getElementById("inputCount").value;
	let PrecioSinEnvio = precio_unitario2 * cantidad_productos2;
	let precioTotal = PrecioSinEnvio + x;

	

	let htmlContentToAppend = "";
	htmlContentToAppend += `` + divisaUY + precioTotal + ``
 

	document.getElementById("valor_total").innerHTML = htmlContentToAppend;

	monto_parcial();
	mostrarSubtotal();
	mostrarCantidadProductos()

}


 


//FUNCIONES DE DESCUENTOS POR METODO ENVIO
function envio1() {

	var valorEnvio1 = 0;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<span class="envio_valor">` +"📍"+ divisaUY + valorEnvio1 + `</span>`

	document.getElementById("valor_envio").innerHTML = htmlContentToAppend;
	

	calcularTotal(valorEnvio1);

}

function envio2() {

	var valorEnvio2 = 120;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<span class="envio_valor">`+"🚚"+divisaUY + valorEnvio2 + `</span>`

	document.getElementById("valor_envio").innerHTML = htmlContentToAppend;

	calcularTotal(valorEnvio2);
}

function envio3() {

	var valorEnvio3 = 170;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<span class="envio_valor">`+"💨"+divisaUY + valorEnvio3 + `</span>`


	document.getElementById("valor_envio").innerHTML = htmlContentToAppend;

	calcularTotal(valorEnvio3);
}


let porcentaje = "-%";
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

	htmlContentToAppend += `<p>`+ porcentaje + descuento2 + `</p>`

	document.getElementById("descuento_metodo").innerHTML = htmlContentToAppend;
}

function pago3() {

	let descuento3 = 10;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<p>`+porcentaje + descuento3 + `</p>`

	document.getElementById("descuento_metodo").innerHTML = htmlContentToAppend;
}

function pago4() {

	let descuento4 = 20;

	let htmlContentToAppend = "";

	htmlContentToAppend += `<p>`+porcentaje+ descuento4 + `</p>`

	document.getElementById("descuento_metodo").innerHTML = htmlContentToAppend;
}



//EVENTOS DEL DOM
document.addEventListener("DOMContentLoaded", function (e) {
	obtenerCarrito(CART_INFO_URL)
		.then(respuesta => {
			productosCarrito = respuesta.articles;
			mostrarCarrito();
			mostrarCantidadProductos();
			mostrarSubtotal();
			calcularTotal();
			monto_parcial();


		})
})