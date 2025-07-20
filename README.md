# 🛍️ Akira Accesorios - E-commerce

## 📋 Descripción del Proyecto

**Akira Accesorios** es un sitio web de e-commerce responsivo y dinámico desarrollado como proyecto final para el curso de desarrollo web. El sitio presenta una tienda de accesorios con funcionalidades completas de carrito de compras, formulario de contacto funcional y diseño moderno.

### ✨ Características Principales

- **Diseño Responsivo**: Se adapta perfectamente a dispositivos móviles (500px) y escritorio
- **Carrito de Compras Funcional**: Permite agregar, modificar cantidades y eliminar productos
- **Formulario de Contacto**: Integrado con Formspree para envío de mensajes
- **Sección de Reseñas**: Muestra testimonios de clientes satisfechos
- **Navegación Intuitiva**: Menú hamburguesa para móviles y navegación completa
- **Galería de Productos**: Presentación atractiva de accesorios con precios

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Flexbox y Grid para layouts responsivos
  - Animaciones y transiciones
  - Media queries para diseño adaptativo
- **JavaScript (Vanilla)**: 
  - Funciones para manejo del carrito
  - Eventos DOM
  - Fetch API para formulario de contacto
  - No se utilizan clases ni frameworks

### Herramientas Externas
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografías
- **Google Maps**: Integración de mapa

## 📁 Estructura del Proyecto

```
akira/
├── index.html              # Página principal
├── contacto.html           # Página de contacto
├── index.js               # JavaScript principal
├── styles/
│   ├── index.css          # Estilos principales
│   └── contacto.css       # Estilos de contacto
├── img/                   # Imágenes del proyecto
├── videos/                # Videos del proyecto
└── README.md             # Documentación
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno
- Servidor web local (opcional, para desarrollo)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL-del-repositorio]
   cd akira
   ```

2. **Abrir el proyecto**
   - Abrir `index.html` en tu navegador web
   - O usar un servidor local como Live Server (VS Code)

3. **Funcionamiento del Formulario**
   - El formulario funciona completamente en memoria
   - Simula el envío exitoso sin peticiones HTTP
   - Muestra mensajes de confirmación al usuario

## 🎯 Funcionalidades Implementadas

### ✅ Carrito de Compras
- Agregar productos al carrito
- Modificar cantidades (+/-)
- Eliminar productos individuales
- Cálculo automático del total
- Modal responsivo con diseño profesional
- Notificaciones de confirmación
- Contador numérico en el ícono del carrito

### ✅ Formulario de Contacto
- Validación de campos requeridos
- Funcionamiento en memoria (sin peticiones HTTP)
- Mensajes de éxito/error
- Campos: Nombre, Email, Teléfono, Consulta
- Diseño responsivo

### ✅ Sección de Reseñas
- Testimonios de clientes renderizados dinámicamente
- Sistema de estrellas
- Diseño en grid responsivo
- Efectos hover

### ✅ Navegación
- Menú hamburguesa para móviles
- Navegación suave entre secciones
- Enlaces funcionales en header y footer

### ✅ Renderizado Dinámico
- Productos cargados desde arrays JavaScript
- Reseñas generadas dinámicamente
- Código más mantenible y escalable

## 📱 Diseño Responsivo

El sitio está optimizado para:
- **Móviles**: 500px y menores
- **Tablets**: 768px - 1024px
- **Escritorio**: 1024px y mayores

### Breakpoints Implementados
- `@media (max-width: 500px)`: Móviles
- `@media (max-width: 768px)`: Tablets
- `@media (min-width: 1000px)`: Escritorio

## 🎨 Paleta de Colores

- **Rosa Principal**: `rgb(236, 34, 118)`
- **Rosa Claro**: `rgb(245, 137, 200)`
- **Blanco**: `#ffffff`
- **Gris Claro**: `#f9f9f9`
- **Gris Oscuro**: `#333333`

## 🔧 Personalización

### Cambiar Colores
Editar las variables de color en `styles/index.css`:
```css
/* Colores principales */
--color-primary: rgb(236, 34, 118);
--color-secondary: rgb(245, 137, 200);
```

### Agregar Productos
Modificar el array de productos en `index.js`:
```javascript
const productos = [
    {
        id: 11,
        nombre: "Nuevo Producto",
        precio: 5000,
        imagen: "img/nuevo-producto.jpg",
        descripcion: "Descripción del nuevo producto"
    }
    // ... más productos
];
```

## 📧 Funcionamiento del Formulario

El formulario de contacto funciona completamente en memoria:

- **Sin peticiones HTTP**: No se realizan llamadas a servidores externos
- **Simulación de envío**: Se simula un delay de 1.5 segundos
- **Validación local**: Los campos se validan en el navegador
- **Mensajes de confirmación**: Se muestran mensajes de éxito al usuario
- **Reset automático**: El formulario se limpia después del envío simulado

## 🚀 Despliegue

### GitHub Pages
1. Subir el proyecto a GitHub
2. Ir a Settings > Pages
3. Seleccionar rama main
4. El sitio estará disponible en `https://usuario.github.io/repositorio`

### Netlify
1. Conectar repositorio de GitHub
2. Configurar build settings
3. Desplegar automáticamente

## 👨‍💻 Autor

Desarrollado como proyecto final para el curso de desarrollo web - Comisión 25014

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.

---

**¡Gracias por visitar Akira Accesorios!** 🛍️✨ 