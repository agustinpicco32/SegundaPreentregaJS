const Bebida = function (stock, precio, nombre){
    this.stock = stock
    this.precio = precio
    this.nombre = nombre
}

const bebida1 = new Bebida (5, 400, "sprite")
const bebida2 = new Bebida (3, 600, "cocacola")
const bebida3 = new Bebida (2, 1000, "ron")
const bebida4 = new Bebida (6, 300, "agua mineral")
const bebida5 = new Bebida (8, 2000, "vodka")
const bebida6 = new Bebida (1, 6000, "whisky")
const bebida7 = new Bebida (9, 800, "agua savorizada")
const bebida8 = new Bebida (7, 100, "soda")

let listaBebidas = [bebida1,bebida2,bebida3,bebida4,bebida5,bebida6,bebida7,bebida8]

function buscarProducto() {
    let productos = prompt ("¿que bebida quiere buscar?").trim().toUpperCase()
    let resultado = listaBebidas.filter((bebida)=> bebida.nombre.toUpperCase().includes(productos))


    if(resultado.length > 0){
        console.table(resultado)
    }
    else{
        alert("No tenemos ese tipo de bebida")
    }
}
buscarProducto()