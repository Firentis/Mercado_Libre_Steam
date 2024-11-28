const productos = [
    {
      nombre: "Camiseta básica",
      precio: "$15.00",
      descripcion: "Camiseta de algodón 100%, disponible en varios colores.",
      imagen: "https://via.placeholder.com/200x150?text=Camiseta"
    },
    {
      nombre: "Pantalones deportivos",
      precio: "$25.00",
      descripcion: "Pantalones deportivos cómodos y transpirables.",
      imagen: "https://via.placeholder.com/200x150?text=Pantalones"
    },
    {
      nombre: "Zapatos casuales",
      precio: "$45.00",
      descripcion: "Zapatos de cuero genuino, perfectos para el día a día.",
      imagen: "https://via.placeholder.com/200x150?text=zapato"
    },
    {
      nombre: "Chaqueta de invierno",
      precio: "$60.00",
      descripcion: "Chaqueta acolchada, ideal para el clima frío.",
      imagen: "https://via.placeholder.com/200x150?text=Chaqueta"
    },
    {
      nombre: "Gorra deportiva",
      precio: "$10.00",
      descripcion: "Gorra ajustable, perfecta para actividades al aire libre.",
      imagen: "https://via.placeholder.com/200x150?text=Gorra"
    }
  ];

function mostrarProductos() {
  const catalogo = document.getElementById("catalogo")

  productos.forEach(function(productos){
    const tarjetaProductos = document.createElement("div")
    tarjetaProductos.classList.add("producto")

    const img = document.createElement("img")
    img.src = productos.imagen
    img.alt = productos.nombre
    tarjetaProductos.appendChild(img)

    const nombre = document.createElement("h2")
    nombre.textContent = productos.nombre
    tarjetaProductos.appendChild(nombre)

    const descripcion = document.createElement("p")
    descripcion.textContent = productos.descripcion
    tarjetaProductos.appendChild(descripcion)


    const precio = document.createElement("p")
    precio.textContent = productos.precio
    precio.classList.add("precio")
    tarjetaProductos.appendChild(precio)


    catalogo.appendChild(tarjetaProductos)
  })
}

mostrarProductos();