// ==========================================
// PANEL DE CONTROL - CATÁLOGO MULTIACCESO
// ==========================================

const CONFIG = {
    // 1. Datos de la Marca
    marca: "MultiAcceso",
    marcaResaltado: "Hub",
    tituloPrincipal: "Cuentas Premium al Mejor Precio",
    subtitulo: "Estabilidad, garantía y soporte. El catálogo perfecto para ti y tus clientes. Entrega inmediata.",
    
    // 2. Contacto (Coloca tu número con código de país sin el símbolo +)
    telefonoWhatsApp: "51999999999", 
    mensajeWhatsApp: "Hola, me interesa comprar una cuenta del catálogo",

    // 3. Lista de Productos
    productos: [
        {
            nombre: "CapCut Premium",
            descripcion: "Desbloquea la magia de la edición profesional.",
            imagenFondo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            logoApp: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-1/546397638_122093457267033310_6302340897909707094_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s200x200&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHCGRj-OHsQFKbsQkCf0NlVXtn4y9iNiUle2fjL2I2JSf6pcobOsq4jw85X8bHfEk-UI2to5yAhmh6khXMydGvR&_nc_ohc=NhyBZtHalbIQ7kNvwG-c9db&_nc_oc=AdqGUd2s_i8zaEze0DVJtORC6psjqwD1py6Fc0l9wNFLL770nHwlV8ZWHDvP0ttIVj92ev43kLhUN5YrWKz5Dixp&_nc_zt=24&_nc_ht=scontent-lim1-1.xx&_nc_gid=BcKI9CY7wgsMIYSmJH5DEw&_nc_ss=7b2a8&oh=00_AQI-_O5HGNHL5IncXFaHKgD5dgdeEuFlZ0pD5vNs0H-ZBA&oe=6AAC0875",
            garantia: "1 Mes Seguro",
            beneficios: [
                { icono: "🤖", texto: "Potenciado con <span class='highlight-ia'>1200-1600 Créditos IA</span>" },
                { icono: "📱", texto: "Hasta <span class='highlight'>2 Dispositivos</span> (PC/Móvil)" },
                { icono: "⚡", texto: "Acceso: <strong>Correo | Clave</strong>" }
            ]
        }
        // Para agregar más productos, solo copiaremos el bloque desde la llave { hasta la llave } y lo pegaremos abajo separándolo con una coma.
    ]
};