const ID = [123,456,789]
const PRODUCTOS = ["Remera Essentials","Buzo Essentials","Pantalon Essentials"]
const CATEGORIA = ["Remeras","Buzos","Pantalones","Camperas"]



/* Agregar Elementos */
console.log(ID.push(777)) //Agrega un ID al ultimo del array
console.log(ID.unshift(111)) // Agrega un ID al principio del array
console.table(ID)

/* Eliminar elementos */
console.log(PRODUCTOS.pop()) // Elimina el ultimo elemento del array
console.log(PRODUCTOS.shift()) // Elimina el primer elemento del array
console.table(PRODUCTOS)

console.table(ID)
console.log(ID.splice(1,2)) // Elimina desde la posicion desde el primer parametro , hasta las veces que ponga el segundo parametro incluido
console.table(ID)

/* Agregar separaciones */
console.log(CATEGORIA.join(" - ")) 

/* Combinar arrays */
const IDYCATEGORIAS = ID.concat(CATEGORIA)
console.log(IDYCATEGORIAS)




class Producto{
    constructor(id,descripcion,precio,categoria,stock){
        this.id = id
        this.descripcion = descripcion
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
    }
    
    calcularCuotas(){
        let cuotas = parseInt(prompt("Ingrese las cuotas que desea \n3-Tres cuotas sin interes\n6-Seis cuotas con un 40% de recargo\n12-Doce cuotas con un 70% de recargo"))
        switch (cuotas) {
            case 12:
                console.log(this.descripcion + " Precio de $" + this.precio +"\n")
                this.precio = (this.precio * 1.70) / 12
                console.log(this.descripcion + " 12 Cuotas de $" + this.precio + " Total de $" + this.precio * 12)
                break;

            case 6:
                console.log(this.descripcion + " Precio de $" + this.precio +"\n")
                this.precio = (this.precio * 1.40) / 12
                console.log(this.descripcion + " 6 Cuotas de $" + this.precio + " Total de $" + this.precio * 6)
                break;

            case 3:
            console.log(this.descripcion + " Precio de $" + this.precio +"\n")
            this.precio = this.precio / 3
            console.log(this.descripcion + " 3 Cuotas sin interes de $" + this.precio + " Total de $" + this.precio * 3)
            break;

            default:
                console.warn("ERROR")
                break;
        }
    }
}


/* Creando array de objetos */
const productos = []

productos.push(new Producto(123,"Remera Essentials",30,"Remeras",true))
productos.push(new Producto(456,"Buzo Essentials",35,"Buzos",false))
productos.push(new Producto(789,"Pantalon Essentials",60,"Pantalones",true))

console.table(productos)


// Recorre el array productos y muestra por consola la descripcion y los precios de los productos
for (const producto of productos) {
    console.table(producto.descripcion)
    console.table(producto.precio)
}

// Recorre el array productos , calcula las cuotas y dice el total
for (const producto of productos) {
    producto.calcularCuotas()
}


