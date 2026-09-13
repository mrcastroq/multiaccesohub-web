const CONFIG = {
    marca: "MultiAcceso",
    marcaResaltado: "Hub",
    tituloPrincipal: "Cuentas Premium al Mejor Precio",
    subtitulo: "Catálogo oficial para clientes finales.",
    telefonoWhatsApp: "51999999999", 
    
    tasaCambioDolar: 3.80, 

    productos: [
        {
            nombre: "CapCut Pro",
            duracion: "30 Días", 
            precioUSD: 3.50, 
            descripcion: "Edición profesional en PC/Móvil con todas las funciones Pro y efectos IA desbloqueados.",
            // Ya no hay rutas de imágenes aquí. ¡Es automático!
            beneficios: [
                { icono: "🤖", texto: "Potenciado con IA" },
                { icono: "📱", texto: "Hasta 2 Dispositivos" },
                { icono: "⚡", texto: "Entrega Inmediata" }
            ]
        },
        {
            nombre: "Canva Pro Edu",
            duracion: "1 Año", 
            precioUSD: 2.00,
            descripcion: "Diseña como un experto. Plantillas premium y removedor de fondos mágico en tu propio correo.",
            beneficios: [
                { icono: "📧", texto: "En tu correo personal" },
                { icono: "👑", texto: "Funciones Pro activas" },
                { icono: "🔒", texto: "100% privado" }
            ]
        }
    ]
};