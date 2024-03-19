// Creamos la funcion 
function sumaSerie(numero, terminos){
    let serie = ''; 
    let suma = 0; 

    for (let i = 1; i <= terminos; i++) {
        let termino = String(numero).repeat(i);
        serie += termino; 

        suma += parseInt(termino); 
    }
    return suma; 
}

//Ejemplos de uso. Ejecucion desde el navegador o por node.js
console.log(sumaSerie(3,5)); // salida 37035
console.log (sumaSerie(5,3)); //salida: 615