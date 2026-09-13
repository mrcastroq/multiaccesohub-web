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
            nombre: "CapCut Pro",
            precio: "3.5 USDT",
            descripcion: "Exporta en 4K sin marcas de agua, usa plantillas virales y domina la edición con herramientas de Inteligencia Artificial.",
            imagenFondo: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            logoApp: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/CapCut_logo.svg/1024px-CapCut_logo.svg.png",
            garantia: "1 Mes Seguro",
            beneficios: [
                { icono: "🤖", texto: "Potenciado con <span class='highlight-ia'>1200-1600 Créditos IA</span>" },
                { icono: "📱", texto: "Hasta <span class='highlight'>2 Dispositivos</span> (PC/Móvil)" },
                { icono: "⚡", texto: "Acceso inmediato: <strong>Correo | Clave</strong>" }
            ]
        },
        {
            nombre: "Canva Pro Edu",
            precio: "2.0 USDT",
            descripcion: "Diseña como un experto. Acceso total a plantillas premium, kit de marca y removedor de fondos mágico.",
            imagenFondo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            logoApp: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png",
            garantia: "1 Año Completo",
            beneficios: [
                { icono: "📧", texto: "Activación en tu <span class='highlight'>correo personal</span>" },
                { icono: "👑", texto: "Todas las funciones Pro <span class='highlight-ia'>desbloqueadas</span>" },
                { icono: "🔒", texto: "Espacio de trabajo 100% privado" }
            ]
        }
    ]
};