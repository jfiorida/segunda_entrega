const productos = [
    { nombre: "collar", precio: 3500 },
    { nombre: "pulsera", precio: 500 },
    { nombre: "anillo", precio: 350 },
    { nombre: "tobillera", precio: 650 },
    { nombre: "aros", precio: 250 }
];
let carrito = []

let seleccion = prompt("desea encargar algun articulo? si o no")
while (seleccion != "si" && seleccion != "no") {
    alert("ingreso incorrecto, por favor ingrese si o no")
    seleccion = prompt("desea encargar algun articulo? si o no")
}

if (seleccion == "si") {
    alert("a continuacion nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" / "))

}
else if (seleccion == "no") {
    alert("gracias por visitarnos hasta pronto")

}
while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "collar" || producto == "pulsera" || producto == "anillo" || producto == "ctobillera" || producto == "aros")
        switch (producto) {

            case "collar":
                precio = 3500;
                break;

            case "pulsera":
                precio = 500
                break;

            case "anillo":
                precio = 350;
                break;

            case "tobillera":
                precio = 650;
                break;

            case "aros":
                precio = 250;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("cuantos articulos desea llevar: "))

    carrito.push({ producto, unidades, precio })
    console.log(carrito)
 //else {

//    alert("no tenemos ese articulo")
//}
seleccion = prompt("desea agregar algo mas al carrito?")
}
while (seleccion === "no") {
    alert("gracias por su pedido hasta la proxima")
    carrito.forEach((carritoFinal) => {
        alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}


const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.unidades, 0)
alert(`el total a pagar por su compra es: ${total}`)