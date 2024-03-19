// Ejercicios de prueba tecnica 
Este repositorio tiene los ejercicios resueltos en js 

# Ejercicio 1 Suma de una serie de números repetidos
El ejercicio consiste en escribir una función que retorne la suma de una serie de números repetidos hasta el n-ésimo término.
// Ejemplo de uso de la función
console.log(sumaRepetida(3, 5)); // Salida: 37035
console.log(sumaRepetida(5, 3)); // Salida: 615

Para resolver el problema se podemos crear una funcion que tome dos parametros. El primero sera el numero que se repetira en la serie y el segundo parametro sera el numero de terminos en la serie. luego,
iteramos sobre cada termino y construiremos la serie concatenando el numero repetido la cantidad de veces correspondiente,para devolver luego el resultado.

// Para ejecutar este archivo se puede usar la consola del navegador usando el index.html referenciando al ejercicio correspondiente. 
# Ejercicio 2 Filtrado de números en una lista
En este ejercicio, se requiere escribir una función que retorne una lista de números que cumplan ciertas condiciones.
    // Ejemplo de uso de la función
console.log(filtrarNumeros([24, 150, 300, 660, 295, 1050, 50])); // Salida: [150, 300, 295]
console.log(filtrarNumeros([110, 720, 307, 555, 1095, 12, 300, 1000])); // Salida: [110, 555]

para resolver este problema creamos la funcion filtrarNumeros esta funcion itera sobre cada numero en la lista de entrada utilizando un bucle for..of
para cada numero en la lista, se verifica si es divisible por 5. tambien se verifica si el numero en la lista se verifica si el numero menor o igual 1000
adicional se verifica si el numero es menor o igual a 600. si el numero cumple con todas las condiciones se agregan a la lista de salida. 
// Para ejecutar este archivo se puede usar la consola del navegador usando el index.html referenciando al ejercicio correspondiente. 

# Ejercicio 3 Agrupación de elementos similares en una lista
Dada una lista de cualquier longitud de entrada, escriba una función para agrupar los elementos similares en una matriz
de salida (no importa el orden). Ejemplos:
Entrada : list = [12, 25, 1, 1, 7, 25]
Salida : [[12], [7], [25, 25], [1, 1]]
Entrada : list = [6, 7, 8, 9]
Salida : [[6], [7], [8], [9]]

la solucion es: Iteración sobre la lista de entrada: Recorremos la lista de entrada.
Verificación de elementos: Para cada elemento, verificamos si ya está presente en la matriz de salida.
Agregar a la matriz de salida: Si el elemento ya está presente, lo agregamos al grupo existente. Si no está presente, creamos un nuevo grupo con ese elemento.
Construcción de la matriz de salida: Continuamos este proceso para todos los elementos de la lista de entrada, lo que nos permite construir la matriz de salida agrupando los elementos similares.
// Para ejecutar este archivo se puede usar la consola del navegador usando el index.html referenciando al ejercicio correspondiente. 

# ejercicio 4  Registro y visualización de inventario
Este ejercicio implica el desarrollo de un programa de consola para registrar productos en un inventario y visualizar el inventario actual.

Instrucciones de compilación y ejecución
Instalar Node.js si aún no está instalado en tu sistema.
Clonar este repositorio en tu máquina local.
Abrir una terminal y navegar al directorio del proyecto.
Ejecutar node 04-ejercicio.js para iniciar el programa.

Funcionalidades del programa
Agregar producto al inventario.
Ver reporte de inventario.
Salir del programa.

//Gracias por su atencion
Att: Luis Pastrana.  
