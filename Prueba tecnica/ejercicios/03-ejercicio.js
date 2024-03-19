//Creamos la fn 
function agruparElementos(lista) {
    const salida = [];

    
    lista.forEach(elemento => {
       
        const grupoExistente = salida.find(grupo => grupo.includes(elemento));
        if (grupoExistente) {
            
            grupoExistente.push(elemento);
        } else {
            
            salida.push([elemento]);
        }
    });

    return salida;
}

// Ejemplos de uso
console.log(agruparElementos([12, 25, 1, 1, 7, 25])); // Salida: [[12], [25, 25], [1, 1], [7]]
console.log(agruparElementos([6, 7, 8, 9])); // Salida: [[6], [7], [8], [9]]
