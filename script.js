const productos = [
    {
      nombre: "Anillo Negro de acero",
      precio:   5.00,
      descripcion: "Anillo de cero inoxidable.",
      imagen: "./src/productos/anillo.jpeg"
    },
    {
      nombre: "Buzo Negro",
      precio: 25.00,
      descripcion: "Buzo 100% de algodon,  disponible en varios colores.",
      imagen: "./src/productos/Buzo.webp"
    },
    {
      nombre: "Zapatos NIKE",
      precio: 45.00,
      descripcion: "Zapatos NIKE genuinos, perfectos para el día a día.",
      imagen: "./src/productos/zapatos.jpeg"
    },
    {
      nombre: "Gorra deportiva",
      precio: 60.00,
      descripcion: "Gorra ajustable, perfecta para actividades al aire libre.",
      imagen: "./src/productos/Gorra.jpeg"
    },
    {
      nombre: "Collar Berserk",
      precio: 10.00,
      descripcion: "Collar que probiene del manga berserk que retrata la marca del sacrificio",
      imagen: "./src/productos/collar.jpeg"
    },
    {
      nombre: "Morral negro",
      precio: 15.00,
      descripcion: "Morral negro 100% resistente perfecto para tu dia a dia",
      imagen: "./src/productos/morral.jpeg"
    },
   {
    nombre: "RTX 4090",
    precio: 1500.00,
    descripcion: "Poderosa Grafica RTX 4090 perfecta para el gaming",
    imagen: "./src/productos/rtx.jpeg"
  }
  
  

  ];


  function mostrarProductos() {
    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = ""; // Limpiar catálogo antes de cargar los nuevos productos
    productos.forEach(function(item,index) {
      const tarjetaProducto = document.createElement("div");
      tarjetaProducto.classList.add("producto");
      tarjetaProducto.setAttribute("data-id",index)

      const img = document.createElement("img");
      img.src = item.imagen;
      img.alt = item.nombre;
      tarjetaProducto.appendChild(img);

      const nombre = document.createElement("h2");
      nombre.innerText = item.nombre;
      tarjetaProducto.appendChild(nombre);

      const descripcion = document.createElement("p");
      descripcion.innerText = item.descripcion;
      tarjetaProducto.appendChild(descripcion);

      const precio = document.createElement("p");
      precio.innerText = "$ " +  item.precio.toFixed(2);
      precio.classList.add("precio")
      tarjetaProducto.appendChild(precio);
 
      const eliminar = document.createElement("button")
      eliminar.innerHTML = "Eliminar"
      eliminar.classList.add("eliminar")
      eliminar.addEventListener("click",function(){
        eliminarProducto(index)
      });
      tarjetaProducto.appendChild(eliminar)

      catalogo.appendChild(tarjetaProducto);
    });
  }

  // Función para mostrar/ocultar el sidebar
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
  }
  // Funcion para eliminar las tarjetas

  function eliminarProducto(index){
    productos.splice(index,1)
    mostrarProductos()
  }
  // Función para agregar un nuevo producto
  document.getElementById("formAgregarProducto").addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value;

    productos.push({
      nombre,
      precio,
      descripcion,
      imagen
    });

    // Recargar los productos en el catálogo
    mostrarProductos();

    // Cerrar el sidebar
    toggleSidebar();

    // Limpiar el formulario
    e.target.reset();
  });

  // Inicializar los productos en el catálogo
  mostrarProductos();