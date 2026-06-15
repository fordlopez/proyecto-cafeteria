class Pedidos {
    #nombre;
    #total;
    #precio;
    #cantida;
    #id;


    constructor(nombre, total, id) {
        this.nombre = nombre
        this.#total = total
        this.#precio = total
        this.#cantida = 1
        this.#id = id


    }
    get nombre() {
        return this.#nombre
    } set nombre(value) {
        this.#nombre = value

    } get total() {
        return this.#total
    } set total(value) {
        this.#total = value
    }
    get cantida() {
        return this.#cantida
    }
    set cantida(value) {
        this.#cantida = value
    }
    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    sumarProductos() {
        this.cantida++;
        this.total += this.#precio;
    }
    restarProductos() {
        if (this.cantida > 1) {
            this.cantida--;
            this.total -= this.#precio;
        }
    }
    sumaTotal() {
        this.total = this.total + this.total

    }
    impuestosSuma() {

    }

}
///////variables//////////////////////////////////////////////////////////////////////////////////
let inputBuncador = document.querySelector('#buscadorProductos')
let pedidoVacio = document.querySelector("#pedidoVacio")
let listaPedido = document.querySelector("#listaPedido")


let PedidosTemporales = []
let ObjetosPedidos = []

///////botones////////////////
let botonMenu = document.querySelectorAll(".botonMenu")


///////   const de lista de menu
const prodoctos = [
    {
        id: 1,
        imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
        nombre: "Café Americano",
        precio: 12.00,
        categoria: "Bebida caliente",
        descripcion: "Café negro tradicional"
    },
    {
        id: 2,
        imagen: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&q=80",
        nombre: "Café Latte",
        precio: 18.00,
        categoria: "Bebida caliente",
        descripcion: "Café con leche espumada, suave y cremoso."
    },
    {
        id: 3,
        imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
        nombre: "Frappe de Chocolate",
        precio: 25.00,
        categoria: "Bebida fría",
        descripcion: "Bebida fría con chocolate y crema batida."
    },
    {
        id: 4,
        imagen: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80",
        nombre: "Smoothie de Fresa",
        precio: 22.00,
        categoria: "Bebida fría",
        descripcion: "Batido natural de fresa, sin azúcar añadida."
    },
    {
        id: 5,
        imagen: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80",
        nombre: "Muffin de Vainilla",
        precio: 15.00,
        categoria: "Postre",
        descripcion: "Pan dulce suave de vainilla"
    },
    {
        id: 6,
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",
        nombre: "Cheesecake",
        precio: 28.00,
        categoria: "Postre",
        descripcion: "Pastel de queso cremoso con base de galleta."
    },
    {
        id: 7,
        imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80",
        nombre: "Sandwich de Pollo",
        precio: 32.00,
        categoria: "Comida",
        descripcion: "Pan artesanal con pavo ahumado y vegetales."
    },
    {
        id: 8,
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
        html += `<div  class="col-sm-6 col-lg-4 col-xl-3 producto-card-wrap" data-categoria="Bebida caliente" data-nombre="Café Americano">
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
  data-id="${item.id}">
  Agregar
</button>
              </div>
            </div>
          </div>
        </div>

    `
    })
    gridProductos.innerHTML = html


}
let html2 = ""
function PedidosLista() {
    html2 = ""
    ObjetosPedidos.forEach(item => {
        html2 += `  <li class="cafe-order-item" data-nombre="Café Latte">
                <div class="cafe-order-item-info">
                  <span class="cafe-order-item-name">${item.nombre}</span>
                </div>
                <div class="cafe-order-item-controls d-flex align-items-center gap-2">
                  <button class="btn cafe-btn-qty" data-accion="restar"  data-id="${item.id}">−</button>
                  <span class="cafe-order-qty">${item.cantida}</span>
                  <button class="btn cafe-btn-qty" data-accion="sumar"  data-id="${item.id}">+</button>
                  <span class="cafe-order-subtotal ms-2">Q${item.total}</span>
                  <button class="btn cafe-btn-eliminar ms-2" data-accion="eliminar" data-id="${item.id}">Eliminar</i></button>
                </div>
              </li>  `

    })
    listaPedido.innerHTML = html2
}
let menuFiltro = prodoctos
menu()
let botonpedir = document.querySelectorAll(".boton-pedir")

//////eventos////////////////////////////////////////
inputBuncador.addEventListener("keyup", (event) => {
    let nombre = event.target.value.toLowerCase();
    menuFiltro = prodoctos.filter(item =>
        item.nombre.toLowerCase().includes(nombre)
    );
    menu(menuFiltro);

});

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

    })

}

)


gridProductos.addEventListener("click", (event) => {

    if (!event.target.classList.contains("boton-pedir")) return;

    let id = Number(event.target.dataset.id);

    let producto = prodoctos.find(item => item.id == id);

    console.log("ID:", id);


    let pedidoTemporal = new Pedidos(
        producto.nombre,
        producto.precio,
        producto.id
    );
    ObjetosPedidos.push(pedidoTemporal);

    console.log(ObjetosPedidos);
    PedidosLista()
    /* 
        if (!ObjetosPedidos.includes(prodoctos.nombre)) {
    
    
        } else {
            ObjetosPedidos.push(pedidoTemporal);
    
    
        } */

});
listaPedido.addEventListener("click", (event) => {

    let id = Number(event.target.dataset.id);

    let pedido = ObjetosPedidos.find(item => item.id == id);

    if (!pedido) return;

    if (event.target.dataset.accion == "sumar") {
        pedido.sumarProductos();
    }

    else if (event.target.dataset.accion == "restar") {
        pedido.restarProductos();
    } else if (event.target.dataset.accion == "eliminar") {
        ObjetosPedidos = ObjetosPedidos.filter(
            item => item.id !== id

        )
        console.log("mi mama me mima")
    }


    console.log(pedido);
    PedidosLista()
});