  // Agregar evento click al botón comprar de cada producto
  const btnComprar = document.querySelectorAll('.producto button');
  btnComprar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
  });
  
  // Función para agregar producto al carrito
  function agregarAlCarrito(e) {
    // Obtener el nombre del producto y la cantidad desde el formulario
    const producto = e.target.parentElement.querySelector('input[name="producto"]').value;
    const cantidad = e.target.parentElement.querySelector('input[name="cantidad"]').value;
  
    // Agregar producto al carrito (puedes utilizar un arreglo o un objeto para guardar los productos)
    carrito.push({producto, cantidad});
  
    // Mostrar notificación de producto agregado al carrito
    alert(`${cantidad} unidades de ${producto} agregadas al carrito`);
  }
  
  // Mostrar contenido del carrito al hacer clic en el botón ver carrito
  const btnVerCarrito = document.querySelector('#ver-carrito');
  btnVerCarrito.addEventListener('click', mostrarCarrito);
  
  function mostrarCarrito() {
    // Recorrer el carrito y mostrar cada producto en una lista
    let listaCarrito = '';
    carrito.forEach(item => {
      listaCarrito += `<li>${item.cantidad} unidades de ${item.producto}</li>`;
    });
    document.querySelector('#contenido-carrito').innerHTML = listaCarrito;
  }
  
  // Agregar evento keyup al input de búsqueda
const inputBusqueda = document.querySelector('#busqueda');
inputBusqueda.addEventListener('keyup', buscarProductos);

function buscarProductos() {
  // Obtener el valor del input de búsqueda
  const busqueda = inputBusqueda.value.toLowerCase();

  // Recorrer cada producto y ocultar los que no coincidan con la búsqueda
  const productos = document.querySelectorAll('.producto');
  productos.forEach(producto => {
    if (producto.querySelector('h2').textContent.toLowerCase().indexOf(busqueda) === -1) {
      producto.style.display = 'none';
    } else {
      producto.style.display = 'block';
    }
  });
}

// Agregar evento change a los select de filtro
const selectCategoria = document.querySelector('#filtro-categoria');
const selectPrecio = document.querySelector('#filtro-precio');
selectCategoria.addEventListener('change', filtrarProductos);
selectPrecio.addEventListener('change', filtrarProductos);

function filtrarProductos() {
  // Obtener los valores seleccionados de los select
  const categoriaSeleccionada = selectCategoria.value;
  const precioSeleccionado = selectPrecio.value;

  // Recorrer cada producto y ocultar los que no cumplen con los filtros seleccionados
  const productos = document.querySelectorAll('.producto');
  productos.forEach(producto => {
    if ((categoriaSeleccionada !== 'todas' && producto.dataset.categoria !== categoriaSeleccionada) || (precioSeleccionado !== 'todos' && (producto.dataset.precio < precioSeleccionado.split('-')[0] || producto.dataset.precio > precioSeleccionado.split('-')[1]))) {
      producto.style.display = 'none';
    } else {
      producto.style.display = 'block';
    }
  });
}

// Definir el número de productos por página
const productosPorPagina = 9;


// Crear los botones de paginación
for (let i = 1; i <= numPaginas; i++) {
  const btnPagina = document.createElement('button');
  btnPagina.textContent = i;
  btnPagina.addEventListener('click', mostrarPagina);
  document.querySelector('#paginacion').appendChild(btnPagina);
}

// Mostrar la primera página al cargar la página
mostrarPagina(1);

// Función para mostrar una página específica
function mostrarPagina(pagina) {
  // Ocultar todos los productos
  productos.forEach(producto => producto.style.display = 'none');

  // Mostrar solo los productos de la página seleccionada
  for (let i = (pagina - 1) * productosPorPagina; i < pagina * productosPorPagina; i++) {
    productos[i].style.display = 'block';
  }
  // Destacar el botón de la página seleccionada
  const botonesPagina = document.querySelectorAll('#paginacion button');
  botonesPagina.forEach(boton => boton.classList.remove('active'));
  document.querySelector(`#paginacion button:nth-child(${pagina})`).classList.add('active');
}

// Obtener los selectores de filtro
const filtroCategoria = document.getElementById("filtro-categoria");
const filtroPrecio = document.getElementById("filtro-precio");

// Obtener todos los elementos de producto
const productos = document.querySelectorAll(".producto");

// Escuchar eventos de cambio en los selectores de filtro
filtroCategoria.addEventListener("change", filtrarProductos);
filtroPrecio.addEventListener("change", filtrarProductos);

// Continuación del código anterior

function filtrarProductos() {
    // Obtener los valores seleccionados en los selectores de filtro
    const categoriaSeleccionada = filtroCategoria.value;
    const precioSeleccionado = filtroPrecio.value;
  
    // Recorrer todos los elementos de producto
    productos.forEach(producto => {
      // Obtener la categoria y el precio del producto
      const categoria = producto.dataset.categoria;
      const precio = producto.dataset.precio;
  
      // Ocultar el producto si no cumple con los filtros seleccionados
      if ((categoriaSeleccionada !== "todas" && categoria !== categoriaSeleccionada) || 
          (precioSeleccionado !== "todos" && !precioEnRango(precio, precioSeleccionado))) {
        producto.style.display = "none";
      } else {
        producto.style.display = "block";
      }
    });
  }
  
  function precioEnRango(precio, rango) {
    // Separar el rango en dos valores
    const [min, max] = rango.split("-").map(Number);
    // Comprobar si el precio está dentro del rango
    return precio >= min && precio <= max;
  }
  
  document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('mouseover', () => {
      producto.style.transform = 'scale(1.1)';
    });
    producto.addEventListener('mouseout', () => {
      producto.style.transform = 'scale(1)';
    });
  });

  const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const searchValue = document.querySelector("#searchBar").value;
  // Enviar petición al servidor con el valor de búsqueda
});


