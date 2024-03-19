const readline = require('readline');


const dairyProducts = ["Fairlife Milk", "Alta Dena Milk", "Queensland Butter"];
const dairyStock = [28, 36, 50];
const cleaningProducts = ["Windex", "Lysol Disinfectant Spray", "Clorox Bleach"];
const cleaningStock = [20, 15, 40];
const grainProducts = ["Rice", "Quinoa", "Oats"];
const grainStock = [50, 30, 25];


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function agregarProducto() {
    rl.question("Ingrese el grupo del producto (dairy, cleaning, grain): ", (grupo) => {
        rl.question("Ingrese el nombre del producto: ", (nombre) => {
            rl.question("Ingrese la cantidad del producto: ", (cantidad) => {
                cantidad = parseInt(cantidad);

                
                let productos, existencias;
                switch (grupo) {
                    case "dairy":
                        productos = dairyProducts;
                        existencias = dairyStock;
                        break;
                    case "cleaning":
                        productos = cleaningProducts;
                        existencias = cleaningStock;
                        break;
                    case "grain":
                        productos = grainProducts;
                        existencias = grainStock;
                        break;
                    default:
                        console.log("Grupo inválido. El producto no se agregará al inventario.");
                        rl.close();
                        return;
                }

                const indice = productos.indexOf(nombre);
                if (indice === -1) {
                    
                    productos.push(nombre);
                    existencias.push(cantidad);
                } else {
                   
                    existencias[indice] += cantidad;
                }

                console.log("Producto agregado al inventario.");
                rl.close();
            });
        });
    });
}


function mostrarInventario() {
    console.log("Inventario:");
    console.log("Dairy:");
    dairyProducts.forEach((producto, index) => {
        console.log(`${producto}: ${dairyStock[index]} unidades`);
    });
    console.log("Cleaning:");
    cleaningProducts.forEach((producto, index) => {
        console.log(`${producto}: ${cleaningStock[index]} unidades`);
    });
    console.log("Grain:");
    grainProducts.forEach((producto, index) => {
        console.log(`${producto}: ${grainStock[index]} unidades`);
    });
    rl.close();
}


function main() {
    rl.question("Seleccione una opción: (1) Agregar producto, (2) Ver reporte de inventario, (3) Salir\n", (opcion) => {
        switch (opcion.trim()) {
            case "1":
                agregarProducto();
                break;
            case "2":
                mostrarInventario();
                break;
            case "3":
                console.log("Saliendo del programa...");
                rl.close();
                return;
            default:
                console.log("Opción inválida.");
                rl.close();
        }
    });
}

// Ejecutar el programa
main();
