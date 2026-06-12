class pedidos {
    #nombre;
    #total;
    #cantida;


    constructor(nombre,total,cantida) {
        this.nombre=nombre
        this.#total=total
        this.#cantida=1


    }
    get nombre(){
        return this.#nombre
    }set nombre(value){
      this.#nombre=value

    }get total (){
return this.#total
    }set total (value){
        this.#total=value
    }
    get cantida(){
        return this.#cantida
    }
    set cantida(value){
        this.#cantida=value
    }

sumarProductos(){

}
sumaTotal(){

}
impuestosSuma(){

}



}
///////variables//////////////////////////////////////////////////////////////////////////////////
let menuFiltro = []
let Lospedidos=[]
let inputBuncador = document.querySelector('#buscadorProductos')

///////botones////////////////
let botonMenu = document.querySelectorAll(".botonMenu")
let botonpedir = document.querySelectorAll(".boton-pedir")




//////eventos////////////////////////////////////////
inputBuncador.addEventListener("keyup", (event) => {
    name = event.target.value

})


botonMenu.forEach(btn => {
    btn.addEventListener("click", (event) => {
        if (event.target.textContent == "Todas") {
            menuFiltro = prodoctos
            menu(menuFiltro)

        } else if (event.target.textContent == "Bebidas calientes") {
            menuFiltro = prodoctos.filter(item => item.categoria == "Bebida caliente")
            menu(menuFiltro)

        } else if (event.target.textContent == "Bebidas frías") {
            menuFiltro = prodoctos.filter(item => item.categoria == "Bebida fría")
            menu(menuFiltro)


        } else if (event.target.textContent == "Postres") {
            menuFiltro = prodoctos.filter(item => item.categoria == "Postre")
            menu(menuFiltro)


        } else if (event.target.textContent == "Comida") {
            menuFiltro = prodoctos.filter(item => item.categoria == "Comida")
            menu(menuFiltro)


        }
        menu()
    })

}

)
botonpedir.forEach(btn => {
    btn.addEventListener("click", (event) => {
let Mipedido =new pedidos(event.target.nombre,event.target.precio)
Lospedidos.push(Mipedido)
console.log(Mipedido)
    })
})

const prodoctos = [
    {
        imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
        nombre: "Café Americano",
        precio: 12.00,
        categoria: "Bebida caliente",
        descripcion: "Café negro tradicional"
    },
    {
        imagen: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&q=80",
        nombre: "Café Latte",
        precio: 18.00,
        categoria: "Bebida caliente",
        descripcion: "Café con leche espumada, suave y cremoso."
    },
    {
        imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
        nombre: "Frappe de Chocolate",
        precio: 25.00,
        categoria: "Bebida fría",
        descripcion: "Bebida fría con chocolate y crema batida."
    },
    {
        imagen: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80",
        nombre: "Smoothie de Fresa",
        precio: 22.00,
        categoria: "Bebida fría",
        descripcion: "Batido natural de fresa, sin azúcar añadida."
    },
    {
        imagen: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80",
        nombre: "Muffin de Vainilla",
        precio: 15.00,
        categoria: "Postre",
        descripcion: "Pan dulce suave de vainilla"
    },
    {
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",
        nombre: "Cheesecake",
        precio: 28.00,
        categoria: "Postre",
        descripcion: "Pastel de queso cremoso con base de galleta."
    },
    {
        imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80",
        nombre: "Sandwich de Pollo",
        precio: 32.00,
        categoria: "Comida",
        descripcion: "Pan artesanal con pavo ahumado y vegetales."
    },
    {
        imagen: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
        nombre: "Bowl de Granola",
        precio: 20.00,
        categoria: "Comida",
        descripcion: "Granola artesanal con frutas frescas y miel."
    }
]
let html = ""
////funciones/////////////////////////////////////////////////////////////////////
function menu() {
    html = ""

    menuFiltro.forEach(item => {
        html += `<div class="col-sm-6 col-lg-4 col-xl-3 producto-card-wrap" data-categoria="Bebida caliente" data-nombre="Café Americano">
          <div class="cafe-product-card h-100">
            <div class="cafe-product-img-wrap">
              <img src="${item.imagen}" alt="Café Americano" class="cafe-product-img" />
              <span class="cafe-product-badge">${item.categoria}</span>
            </div>
            <div class="cafe-product-body">
              <h5 class="cafe-product-name">${item.nombre}</h5>
              <p class="cafe-product-desc">${item.descripcion}</p>
              <div class="d-flex justify-content-between align-items-center mt-auto pt-3">
                <span class="cafe-product-price">Q${item.precio}</span>
                <button
                  class="btn cafe-btn-agregar btn-agregar-producto boton-pedir"
                >Agregar</button>
              </div>
            </div>
          </div>
        </div>

    `
    })
    gridProductos.innerHTML = html
    
    
}


