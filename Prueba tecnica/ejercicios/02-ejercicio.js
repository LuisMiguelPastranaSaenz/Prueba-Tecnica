//Creamos la fn
function filtrarNumeros(lista) {
    const salida = [];

    for (let numero of lista) {
        if (numero % 5 === 0 && numero <= 1000 && numero <= 600) {
            salida.push(numero);
        }
        if (numero > 1000) {
            break; 
        }
    }

    return salida;
}

// Ejemplos de uso
console.log(filtrarNumeros([24, 150, 300, 660, 295, 1050, 50])); // Salida: [150, 300, 295]
console.log(filtrarNumeros([110, 720, 307, 555, 1095, 12, 300, 1000])); // Salida: [110, 555]
