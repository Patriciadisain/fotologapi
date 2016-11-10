/*

Ejercicio guiado Flog: La idea es poder escribir nuestro nombre y comentario
para dejarlo en el fotolog.

Para esto seguiremos la siguiente estructura/instrucciones en los pasos:
Pistas: averiguar sobre el método .appendChild
-Crear el elemento
-Crear el nodo de texto
-Añadir el nodo de texto al elemento
-Agregar atributos al elemento
-Agregar el elemento al documento
-

*/
function agregarPosteo(){
	// Rescatar elementos del html
	var nombre = document.getElementById('nombre').value;
	var comentario = document.getElementById('cajaposteos').value;
	var contenedorPosteo = document.getElementById('contenedor-posteos').value;
	// crear un div para mostrar el contenedor-posteos
	var posteo = document.createElement('div');
	// crear nuevos elementos solicitados
	var elementoNombre = document.createElement('strong');
	var elementoComentario = document.createElement('p');
	var elementoLinea = document.createElement('hr');
	// crear nodos de texto que muestren el posteo
	var nodoTextoNombre = document.createTextNode(nombre);
	var nodoTextoContenido = document.createTextNode(comentario);
	// asociar nodos con sus padres
	elementoNombre.appendChild(nodoTextoNombre);
	elementoComentario.appendChild(nodoTextoContenido);
	// poner los elementos en el div posteo
	posteo.appendChild(elementoNombre);
	posteo.appendChild(elementoComentario);
	posteo.appendChild(elementoLinea);
	// agregar atributos
	posteo.setAttribute('class','posteo');
	// agregar posteo al contenedor de contenedor-posteos
	contenedorPosteo.appendChild(posteo);
}