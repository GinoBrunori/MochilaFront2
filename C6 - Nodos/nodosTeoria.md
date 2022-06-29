Los nodos son elementos o etiquetas del HTML que en conjunto forman un “árbol de nodos” al que llamamos DOM (Document Object Model).

Entonces, en JavaScript, el nodo objeto principal es el document, y dentro de él, se clasifican estos otros:

. Todas las etiquetas del HTML que son nodos de elementos.
. Los nodos de atributos de los elementos
. Los nodos de texto.
. Los nodos de comentarios.

Cada nodo del árbol es un objeto, es decir, que contienen una colección de propiedades.

Para crear nodos en el HTML con JavaScript y luego insertarlos en el DOM, necesitaremos utilizar métodos específicos.

1. let creandoParrafo = document.createElement("p") => Crea un nodo de tipo elemento según el nombre de la etiqueta de HTML que le indiquemos.

2. let creandoTexto = document.createTextNode("hola Mundo") => Crea un nodo de texto explicitado entre comillas. No se visualiza hasta asignarlo a un elemento existente del DOM.

3. appendChild(variable/elemento hijo: previamente guardada en una variable. No lleva comilas) => Adhiere dentro del DOM un elemento hijo a un elemento padre. Si el elemento padre ya existía en el documento, cambia su posición hacia el otro elemento padre indicado. Si no existe, lo creamos con el método 1.

Atributos Dinamicos => explicado en archivo.js




