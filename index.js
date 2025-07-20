document.addEventListener("DOMContentLoaded", () => {
    // Arrays de datos
    const productos = [
        {
            id: 1,
            nombre: "Aros acero dorado",
            precio: 6500,
            imagen: "img/pararos.jpeg",
            descripcion: "Aros elegantes en acero dorado"
        },
        {
            id: 2,
            nombre: "Anillo strass acero quirúrgico",
            precio: 4000,
            imagen: "img/anillo.jpeg",
            descripcion: "Anillo con strass en acero quirúrgico"
        },
        {
            id: 3,
            nombre: "Cadena chata acero quirúrgico",
            precio: 7500,
            imagen: "img/cadenaaq.jpeg",
            descripcion: "Cadena chata en acero quirúrgico"
        },
        {
            id: 4,
            nombre: "Pulsera tourbillón acero dorado",
            precio: 5000,
            imagen: "img/pulsera.jpeg",
            descripcion: "Pulsera tourbillón en acero dorado"
        },
        {
            id: 5,
            nombre: "Brazalete acero quirúrgico",
            precio: 10000,
            imagen: "img/brazalete.jpeg",
            descripcion: "Brazalete en acero quirúrgico"
        },
        {
            id: 6,
            nombre: "Collar con dije corazón acero dorado",
            precio: 12000,
            imagen: "img/collar.jpeg",
            descripcion: "Collar con dije corazón en acero dorado"
        },
        {
            id: 7,
            nombre: "Tobillera acero blanco",
            precio: 6500,
            imagen: "img/tobilleraa.jpeg",
            descripcion: "Tobillera en acero blanco"
        },
        {
            id: 8,
            nombre: "Reloj Ingrid",
            precio: 15000,
            imagen: "img/reloj.jpeg",
            descripcion: "Reloj elegante modelo Ingrid"
        },
        {
            id: 9,
            nombre: "Scrunchie varios colores",
            precio: 3000,
            imagen: "img/scrunchiepelo.jpeg",
            descripcion: "Scrunchie en varios colores"
        },
        {
            id: 10,
            nombre: "Hebilla perlas",
            precio: 3500,
            imagen: "img/hebillasperlas.jpeg",
            descripcion: "Hebilla decorada con perlas"
        }
    ];

    const reseñas = [
        {
            id: 1,
            nombre: "María González",
            texto: "Excelente calidad en todos los productos. Los aros son hermosos y muy resistentes. ¡Super recomendados!",
            estrellas: 5
        },
        {
            id: 2,
            nombre: "Ana López",
            texto: "El collar con dije corazón es perfecto, llegó en perfectas condiciones y es exactamente como se ve en la foto.",
            estrellas: 5
        },
        {
            id: 4,
            nombre: "Sofía Martínez",
            texto: "El reloj Ingrid es elegante y preciso. La pulsera es muy cómoda y el diseño es atemporal.",
            estrellas: 5
        }
    ];

    // Función para renderizar productos
    function renderizarProductos() {
        const contenedorProductos = document.getElementById("contenedorProductos");
        if (!contenedorProductos) return;

        contenedorProductos.innerHTML = productos.map(producto => `
            <div class="producto" data-id="${producto.id}">
                <img src="${producto.imagen}" alt="${producto.descripcion}">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio.toLocaleString()}</p>
                <button class="btn-agregar-carrito">Añadir al carrito</button>
            </div>
        `).join('');
    }

    // Función para renderizar reseñas
    function renderizarReseñas() {
        const contenedorReseñas = document.getElementById("reseñas-container");
        if (!contenedorReseñas) return;

        contenedorReseñas.innerHTML = reseñas.map(reseña => `
            <div class="reseña">
                <div class="estrellas">
                    ${'<i class="fa-solid fa-star"></i>'.repeat(reseña.estrellas)}
                </div>
                <p class="reseña-texto">"${reseña.texto}"</p>
                <p class="reseña-autor">- ${reseña.nombre}</p>
            </div>
        `).join('');
    }

    // Renderizar contenido al cargar la página
    renderizarProductos();
    renderizarReseñas();

    const toggleBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link =>
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        })
    );

    // Carrito de compras
    let carrito = [];

    const carritoIcon = document.querySelector(".carrito");
    const contenedorProductos = document.getElementById("contenedorProductos");

    // Crear contador del carrito
    const carritoContador = document.createElement("span");
    carritoContador.className = "carrito-contador";
    carritoContador.textContent = "0";
    carritoIcon.appendChild(carritoContador);

    // Crear modal del carrito
    const modalCarrito = document.createElement("div");
    modalCarrito.className = "modal-carrito";
    modalCarrito.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="header-content">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <h3>Carrito de Compras</h3>
                </div>
                <button class="cerrar-carrito">&times;</button>
            </div>
            <div class="carrito-items"></div>
            <div class="carrito-total">
                <h4>Total: $<span id="total">0</span></h4>
                <div class="carrito-buttons">
                    <button class="btn-vaciar">Vaciar carrito</button>
                    <button class="btn-comprar">Finalizar compra</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modalCarrito);

    // Mostrar/ocultar carrito
    carritoIcon.addEventListener("click", () => {
        modalCarrito.style.display = "flex";
        actualizarCarrito();
    });

    document.querySelector(".cerrar-carrito").addEventListener("click", () => {
        modalCarrito.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera
    modalCarrito.addEventListener("click", (e) => {
        if (e.target === modalCarrito) {
            modalCarrito.style.display = "none";
        }
    });

    // Agregar productos al carrito
    contenedorProductos.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-agregar-carrito")) {
            const productoElement = e.target.closest(".producto");
            const productoId = parseInt(productoElement.dataset.id);
            const producto = productos.find(p => p.id === productoId);
            
            if (producto) {
                agregarAlCarrito(producto);
            }
        }
    });

    function agregarAlCarrito(producto) {
        const productoExistente = carrito.find(item => item.id === producto.id);
        
        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                cantidad: 1
            });
        }
        
        actualizarCarrito();
        actualizarContadorCarrito();
        mostrarNotificacion("Producto agregado al carrito");
    }

    function actualizarCarrito() {
        const carritoItems = document.querySelector(".carrito-items");
        const totalElement = document.getElementById("total");
        const btnVaciar = document.querySelector(".btn-vaciar");
        const btnComprar = document.querySelector(".btn-comprar");
        
        carritoItems.innerHTML = "";
        let total = 0;
    
        carrito.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.className = "carrito-item";
            itemElement.innerHTML = `
                <div class="item-info">
                    <h4>${item.nombre}</h4>
                    <p class="item-price">$${item.precio.toLocaleString()} x ${item.cantidad}</p>
                </div>
                <div class="item-actions">
                    <div class="quantity-controls">
                        <button class="btn-cantidad" onclick="cambiarCantidad(${index}, -1)">-</button>
                        <span class="quantity-display">${item.cantidad}</span>
                        <button class="btn-cantidad" onclick="cambiarCantidad(${index}, 1)">+</button>
                    </div>
                    <button class="btn-eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
                </div>
            `;
            carritoItems.appendChild(itemElement);
            total += item.precio * item.cantidad;
        });
    
        totalElement.textContent = total.toLocaleString();
    
        // Deshabilitar/habilitar botones según el estado del carrito
        if (btnVaciar) btnVaciar.disabled = carrito.length === 0;
        if (btnComprar) btnComprar.disabled = carrito.length === 0;
    }
    

    function actualizarContadorCarrito() {
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        carritoContador.textContent = totalItems;
        
        // Mostrar/ocultar contador según si hay productos
        if (totalItems > 0) {
            carritoContador.style.display = "flex";
        } else {
            carritoContador.style.display = "none";
        }
    }

    // Funciones globales para los botones del carrito
    window.cambiarCantidad = function(index, cambio) {
        carrito[index].cantidad += cambio;
        if (carrito[index].cantidad <= 0) {
            carrito.splice(index, 1);
        }
        actualizarCarrito();
        actualizarContadorCarrito();
    };

    window.eliminarProducto = function(index) {
        carrito.splice(index, 1);
        actualizarCarrito();
        actualizarContadorCarrito();
    };

    function mostrarNotificacion(mensaje) {
        const notificacion = document.createElement("div");
        notificacion.className = "notificacion";
        notificacion.textContent = mensaje;
        document.body.appendChild(notificacion);

        setTimeout(() => {
            notificacion.remove();
        }, 2000);
    }

    // Botón comprar
    document.querySelector(".btn-comprar").addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("El carrito está vacío");
            return;
        }
        alert("¡Gracias por tu compra! Te contactaremos pronto.");
        carrito = [];
        actualizarCarrito();
        actualizarContadorCarrito();
        modalCarrito.style.display = "none";
    });

    // Botón vaciar carrito
    document.querySelector(".btn-vaciar").addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("El carrito ya está vacío");
            return;
        }
        if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
            carrito = [];
            actualizarCarrito();
            actualizarContadorCarrito();
        }
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector(".btn-enviar");
            const originalText = submitButton.textContent;
            
            // Cambiar texto del botón
            submitButton.textContent = "Enviando...";
            submitButton.disabled = true;
            
            // Simular envío en memoria (sin petición HTTP)
            setTimeout(() => {
                mostrarMensajeFormulario("¡Mensaje enviado con éxito! Te responderemos pronto.", "success");
                this.reset();
                
                // Restaurar botón
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500); // Simular delay de 1.5 segundos
        });
    }

    function mostrarMensajeFormulario(mensaje, tipo) {
        const messageDiv = document.getElementById("form-message");
        messageDiv.textContent = mensaje;
        messageDiv.className = `form-message ${tipo}`;
        
        setTimeout(() => {
            messageDiv.textContent = "";
            messageDiv.className = "form-message";
        }, 5000);
    }
});